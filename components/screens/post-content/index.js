import StyledPostContent from "./styled-post-content";
import { useEffect, useState, useRef } from "react";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import SyntaxHighlighter from 'react-syntax-highlighter';
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/external-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import CloudBlock from "./cloud-block";
import RecentPosts from "./recent-posts";
import ShareButtons from "./share-buttons";

const PostContent = ({ t, currentLanguage, post, posts, isPostContent }) => {
  const [recentPosts, setRecentPosts] = useState(posts);
  const [openModal, setOpenModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const [showButton, setShowButton] = useState(false);
  const refContent = useRef();
  const refContentWrapper = useRef();

  const options = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'pre') {
        const props = attributesToProps(domNode.attribs);
        return <SyntaxHighlighter {...props} language="javascript">
          {domToReact(domNode.children).toString()}
        </SyntaxHighlighter>;
      }

      if (domNode.attribs && domNode.name === 'img') {
        return <img src={domNode.attribs['src']} className={domNode.attribs['class']} alt={domNode.attribs['alt']} />;
      }
    }
  };

  const onClickHandler = (e) => {
    const el = e.target.closest(".img-popup");

    if (el && e.currentTarget.contains(el)) {
      setOpenModal(true);
      setImgUrl(e.target.currentSrc);
      setImgAlt(e.target.alt);
    }
  };

  useEffect(() => {
    async function postData() {
      const data = await fetch("/blog/api/recent-posts", {
        method: "POST",
        body: JSON.stringify({ currentLanguage })
      });

      const response = await data.json();
      setRecentPosts(response.data);
    };

    postData();
  }, [post]);

  useEffect(() => {
    const tiktokEmbedUrl = "https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/falcon/embed/embed_v1.0.11.js";

    if (refContent.current.querySelector(".tiktok-embed")) {
      const scriptTiktokEmbed = document.createElement("script");
      scriptTiktokEmbed.src = tiktokEmbedUrl;
      document.body.appendChild(scriptTiktokEmbed);
    };

    return () => {
      if (document.querySelector(`script[src="${tiktokEmbedUrl}"]`)) {
        document.querySelector(`script[src="${tiktokEmbedUrl}"]`).remove();
      };
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.scrollY - refContentWrapper.current.offsetTop;
      const scrolledPercentage = (scrolledHeight / refContentWrapper.current.offsetHeight) * 100;
      setShowButton(scrolledPercentage > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                  <DateFormat currentLanguage={currentLanguage} data={post?.date} format="D MMMM y" />
                </span>
                <span className="author">
                  {currentLanguage === "ja" ? "著者：" : currentLanguage === "zh-hans" ? "作者: " : "By "}
                  <InternalLink href={`/author/${post?.author.node.slug}`}>{post?.author.node.name}</InternalLink>
                </span>
                {
                  post.outdated && <span className="outdated">{t("Outdated")}</span>
                }

                <ShareButtons currentLanguage={currentLanguage} />
              </div>
              <div ref={refContent} onClick={onClickHandler} className="entry-content">{parse(post?.content, options)}</div>
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
                <ShareButtons currentLanguage={currentLanguage} />
              </div>
            </div>

            <CloudBlock t={t} currentLanguage={currentLanguage} />

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
      <RecentPosts t={t} data={recentPosts} currentLanguage={currentLanguage} />
    </>
  );
};

export default PostContent;
