import StyledPostContent from "./styled-post-content";
import { useEffect, useState } from "react";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/external-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import CloudBlock from "./cloud-block";
import RecentPosts from "./recent-posts";
import Comments from "./comments";
import ShareButtons from "./share-buttons";
import SyntaxHighlighter from 'react-syntax-highlighter';

const PostContent = ({ t, currentLanguage, post, posts, isPostContent }) => {
  const [postContent, setPostContent] = useState("");
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
            {/* <span className="comments">{post?.commentCount === null ? 0 : post?.commentCount}</span> */}
            {/* <span className="views">{post?.viewCount === null ? 0 : post?.viewCount}</span> */}

            <ShareButtons />
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
            <ShareButtons />
          </div>
        </div>

        <CloudBlock t={t} currentLanguage={currentLanguage} />

        {
          post?.discoursePermalink && 
          <div className="join-discussion">
            <ExternalLink href={post.discoursePermalink}>{t("Join the Discussion")}</ExternalLink>
          </div>
        }
        {/* <Comments t={t} currentLanguage={currentLanguage} post={post} /> */}
      </div>

      <RecentPosts t={t} data={posts} />

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
