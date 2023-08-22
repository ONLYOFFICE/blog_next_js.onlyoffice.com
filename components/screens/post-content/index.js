import StyledPostContent from "./styled-post-content";
import { useEffect, useState, useRef } from "react";
import { getLastPosts } from "@lib/api";
import Image from "next/image";
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
  const [postContent, setPostContent] = useState("");
  const [recentPosts, setRecentPosts] = useState(posts);
  const [openModal, setOpenModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const refContent = useRef();

  const currentImgUrl = process.env.CURRENT_IMG_URL;
  const cdnImgUrl = process.env.CDN_IMG_URL;

  const options = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'pre') {
        const props = attributesToProps(domNode.attribs);
        return <SyntaxHighlighter {...props} language="javascript">
          {domToReact(domNode.children).toString()}
        </SyntaxHighlighter>;
      }

      if (domNode.attribs && domNode.name === 'img') {
        return <Image src={domNode.attribs['src']} className={domNode.attribs['class']} alt={domNode.attribs['alt']} width={1472} height={742} />;
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
    setPostContent(parse(post?.content.replaceAll(currentImgUrl, cdnImgUrl), options));

    async function postData() {
      const data = await getLastPosts(currentLanguage);
      setRecentPosts(data);
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

  return (
    <StyledPostContent>
      <Breadcrumbs t={t} data={post?.categories?.edges} isPostContent={isPostContent} />

      <div className="content">
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
          <div ref={refContent} onClick={onClickHandler} className="entry-content">{postContent}</div>
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

      <RecentPosts t={t} data={recentPosts} currentLanguage={currentLanguage} />

      {
        <>
          <div onClick={() => setOpenModal(false)} className={`overlay ${openModal ? "active" : ""}`}></div>
          <div className={`modal ${openModal ? "active" : ""}`}>
            {
              imgUrl &&
              <Image className="modal-img" src={imgUrl} width={1914} height={901} alt={imgAlt} />
            }
            <div onClick={() => setOpenModal(false)} className="modal-close-btn"></div>
          </div>
        </>
      }
    </StyledPostContent>
  );
};

export default PostContent;
