import StyledPostContent from "./styled-post-content";
import { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import SyntaxHighlighter from "react-syntax-highlighter";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/external-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import CloudBlock from "./cloud-block";
import RecentPosts from "./recent-posts";
import ShareButtons from "./share-buttons";

const PostContent = ({ t, locale, post, posts, isPostContent }) => {
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
    const dsFrameUrl = "https://marketingteam.onlyoffice.com/static/scripts/api.js?width=100%25&height=600px&frameId=ds-frame&showHeader=false&showTitle=true&showMenu=false&showFilter=true&init=true";
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
      <StyledPostContent>
        <Breadcrumbs t={t} data={post?.categories?.edges} isPostContent={isPostContent} />

        <div ref={refContentWrapper} className="content">
          <div className="wrap">
            <article>
              <Heading className="title" level={1}>{post?.title}</Heading>
              <div className="info-content">
                <span className="date">
                  <DateFormat locale={locale} data={post?.date} format="D MMMM y" />
                </span>
                <InternalLink className="author" href={`/author/${post?.author.node.slug}`}>
                  {locale === "ja" ? "著者：" : locale === "zh-hans" ? "作者: " : locale === "el" ? "Από τον " : "By "}
                  <span >{post?.author.node.name}</span>
                </InternalLink>
                {
                  post.outdated && <span className="outdated">{t("Outdated")}</span>
                }

                <ShareButtons locale={locale} />
              </div>
              <div 
                ref={refContent} 
                onClick={onClickHandler} 
                className="entry-content" 
                suppressHydrationWarning 
                dangerouslySetInnerHTML={{
                  __html: post?.content.replace(/<pre.*?>([\s\S]*?)<\/pre>/g, (match, p1) => renderToString(<SyntaxHighlighter language="javascript">{p1}</SyntaxHighlighter>))
                }}
              />
            </article>

            <div className="tag-list">
              {
                post?.tags?.edges.length > 0 &&
                <div className="tag-items">
                  {post?.tags?.edges.map(({ node }) => (
                    <Tag href={`/tag/${node.slug}`} key={node.id}>{node.name}</Tag>
                  ))}
                </div>
              }
              <div className="tag-share">
                <ShareButtons locale={locale} />
              </div>
            </div>

            <CloudBlock t={t} locale={locale} />

            {
              post?.discoursePermalink &&
              <div className="join-discussion">
                <ExternalLink href={post.discoursePermalink}>{t("Join the Discussion")}</ExternalLink>
              </div>
            }
          </div>
          {showButton &&
            <button onClick={scrollToTop} className="btn-scroll-top"><span></span></button>
          }
        </div>

        <div onClick={() => setOpenModal(false)} className={`overlay ${openModal ? "active" : ""}`}></div>
        <div className={`modal ${openModal ? "active" : ""}`}>
          {
            imgUrl &&
            <img className="modal-img" src={imgUrl} alt={imgAlt} />
          }
          <div onClick={() => setOpenModal(false)} className="modal-close-btn"></div>
        </div>
      </StyledPostContent>
      <RecentPosts t={t} data={recentPosts} locale={locale} />
    </>
  );
};

export default PostContent;
