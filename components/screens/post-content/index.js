import StyledPostContent from "./styled-post-content";
import { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import SyntaxHighlighter from "react-syntax-highlighter";
import decodeHtml from "decode-html";
import parse from "html-react-parser";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/external-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import DocSpaceRegistrationBlock from "../common/docspace-registration-blog";
import RecentPosts from "./recent-posts";
import ShareButtons from "./share-buttons";

const PostContent = ({ t, locale, post, posts, isPostPage }) => {
  const [recentPosts, setRecentPosts] = useState(posts);
  const [openModal, setOpenModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const [showButton, setShowButton] = useState(false);
  const refContent = useRef();
  const refContentWrapper = useRef();

  const onClickHandler = (e) => {
    const el = e.target.closest(".img-popup");

    if (el && e.currentTarget.contains(el)) {
      setOpenModal(true);
      setImgUrl(e.target.currentSrc);
      setImgAlt(e.target.alt);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const dsFrameUrl = "https://marketingteam.onlyoffice.com/static/scripts/sdk/1.0.0/api.js?mode=manager&width=100%25&height=500px&frameId=ds-frame&showHeader=false&showTitle=true&showMenu=false&showFilter=true&disableActionButton=false&infoPanelVisible=false&init=true&filter=%5Bobject%20Object%5D&id=58927&requestToken=ejJkS3ZPclVIK3hTWlJaRHdwaW51RXdzdDlRdzN1ckp1UDR3TmlnTnhROD0_IjRmZGQ3MTIyLWNhM2QtNGI1Mi04MjY5LWY4NWVjMjBlMjkzYSI&rootPath=%2Frooms%2Fshare";
    const tiktokEmbedUrl = "https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/falcon/embed/embed_v1.0.11.js";

    async function postData() {
      const data = await fetch("/blog/api/recent-posts", {
        method: "POST",
        body: JSON.stringify({ locale })
      });

      const response = await data.json();
      setRecentPosts(response.data);
    };

    postData();

    const handleScroll = () => {
      if (refContentWrapper.current) {
        const scrolledHeight = window.scrollY - refContentWrapper.current.offsetTop;
        const scrolledPercentage = (scrolledHeight / refContentWrapper.current.offsetHeight) * 100;
        setShowButton(scrolledPercentage > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (refContent.current.querySelector(".tiktok-embed")) {
      const scriptTiktokEmbed = document.createElement("script");
      scriptTiktokEmbed.src = tiktokEmbedUrl;
      document.body.appendChild(scriptTiktokEmbed);
    };

    if (refContent.current.querySelector("#ds-frame")) {
      const dsFrameScript = document.createElement("script");
      dsFrameScript.src = dsFrameUrl;
      document.body.appendChild(dsFrameScript);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (document.querySelector(`script[src="${tiktokEmbedUrl}"]`)) {
        document.querySelector(`script[src="${tiktokEmbedUrl}"]`).remove();
      };

      if (document.querySelector(`script[src="${dsFrameUrl}"]`)) {
        document.querySelector(`script[src="${dsFrameUrl}"]`).remove();
      };
    };
  }, [post]);

  return (
    <>
      <StyledPostContent $locale={locale} className="post-content">
        <Breadcrumbs t={t} data={post?.categories?.edges} isPostPage={isPostPage} />

        <div ref={refContentWrapper} className="content">
          <div className="wrap">
            <article>
              <Heading className="title" level={1}>{post?.title}</Heading>
              <div className="info-content">
                <span className="date">
                  <DateFormat locale={locale} data={post?.date} format="D MMMM y" />
                </span>
                <InternalLink className="author" href={`/author/${post?.author.node.slug}`}>
                  {parse(t("ByAuthor", { authorName: post?.author.node.name }))}
                </InternalLink>
                {post.outdated && (
                  <span className="outdated">{t("Outdated")}</span>
                )}
                <ShareButtons locale={locale} />
              </div>
              <div
                ref={refContent}
                onClick={onClickHandler}
                className="entry-content"
                suppressHydrationWarning
              >
                {parse(post?.content?.replace(/<pre.*?>([\s\S]*?)<\/pre>/g, (match, p1) => renderToString(<SyntaxHighlighter language="javascript">{decodeHtml(p1)}</SyntaxHighlighter>)))}
              </div>
            </article>

            <div className="tag-list">
              {post?.tags?.edges.length > 0 && (
                <div className="tag-items">
                  {post?.tags?.edges.map(({ node }) => (
                    <Tag href={`/tag/${node.slug}`} key={node.id}>{node.name}</Tag>
                  ))}
                </div>
              )}
              <div className="tag-share">
                <ShareButtons locale={locale} />
              </div>
            </div>
            <DocSpaceRegistrationBlock t={t} locale={locale}></DocSpaceRegistrationBlock>

            {post?.discoursePermalink && (
              <div className="join-discussion">
                <ExternalLink href={post.discoursePermalink}>{t("Join the Discussion")}</ExternalLink>
              </div>
            )}
          </div>
          {showButton && (
            <button onClick={scrollToTop} className="btn-scroll-top"><span></span></button>
          )}
        </div>

        <div onClick={() => setOpenModal(false)} className={`overlay ${openModal ? "active" : ""}`}></div>
        <div className={`modal ${openModal ? "active" : ""}`}>
          {imgUrl && (
            <img className="modal-img" src={imgUrl} alt={imgAlt} />
          )}
          <div onClick={() => setOpenModal(false)} className="modal-close-btn"></div>
        </div>
      </StyledPostContent>
      <RecentPosts t={t} data={recentPosts} locale={locale} />
    </>
  );
};

export default PostContent;
