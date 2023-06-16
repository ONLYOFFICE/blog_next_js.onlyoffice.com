import StyledPostContent from "./styled-post-content";
import { useEffect, useState } from "react";
import { getLastPosts } from "@lib/api";
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

  const currentImgUrl = "https://wpblog.teamlab.info/wp-content/";
  const cdnImgUrl = "https://static-blog.teamlab.info/wp-content/";

  const options = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'pre') {
        const props = attributesToProps(domNode.attribs);
        return <SyntaxHighlighter {...props} language="javascript">
          {domToReact(domNode.children).toString()}
        </SyntaxHighlighter>;
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

    const scriptTiktokEmbed = document.createElement("script");
    scriptTiktokEmbed.id = "#tiktok-embed"
    scriptTiktokEmbed.src = "https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/falcon/embed/embed_v1.0.11.js";
    document.body.appendChild(scriptTiktokEmbed);

    return () => {
      document.body.removeChild(scriptTiktokEmbed);
    }
  }, [post]);

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
          <div onClick={onClickHandler} className="entry-content">{postContent}</div>
        </article>

        <div className="tag-list">
          {
            post?.tags?.edges.length > 0 &&
            <div className="tag-items">
              {post?.tags?.edges.map(({node}) => (
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
            <img className="modal-img" src={imgUrl} alt={imgAlt} />
            <div onClick={() => setOpenModal(false)} className="modal-close-btn"></div>
          </div>
        </>
      }
    </StyledPostContent>
  );
};

export default PostContent;
