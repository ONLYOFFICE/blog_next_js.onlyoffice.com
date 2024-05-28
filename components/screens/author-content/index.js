import ExternalLink from "@components/common/external-link";
import StyledAuthorContent from "./styled-author-content";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import LoadMorePosts from "@components/screens/common/load-more-posts";
import { ReactSVG } from "react-svg";

const AuthorContent = ({ t, locale, postAuthor, posts, isAuthorContent }) => {
  return (
    <StyledAuthorContent>
      <Heading className="author-title" level={1} label={t("About author")} />

      <div className="author-wrapper">
        <div className="author-card">
          <div className="author-avatar">
            <img src={postAuthor.edges[0]?.node.author.node.avatar.url} alt={postAuthor.edges[0]?.node.author.node.name} />
          </div>
          <div className="author-card-wrapper">
            <Heading className="author-name" level={3} label={postAuthor.edges[0]?.node.author.node.name} />
            <div className="author-role">Chief Editor</div>
            {postAuthor.edges[0]?.node.userSocialProfiles?.facebookUrl && postAuthor.edges[0]?.node.userSocialProfiles?.twitterUrl &&
              <ul className="author-social-links">
                {postAuthor.edges[0]?.node.userSocialProfiles?.facebookUrl &&
                  <li>
                    <ExternalLink className="author-social-facebook" href={postAuthor.edges[0]?.node.userSocialProfiles?.facebookUrl}>
                      <ReactSVG src="/blog/images/icons/facebook.svg" />
                    </ExternalLink>
                  </li>
                }
                {postAuthor.edges[0]?.node.userSocialProfiles?.twitterUrl &&
                  <li>
                    <ExternalLink className="author-social-twitter" href={postAuthor.edges[0]?.node.userSocialProfiles?.twitterUrl}>
                      <ReactSVG src="/blog/images/icons/twitter-1.svg" />
                    </ExternalLink>
                  </li>
                }
              </ul>
            }
          </div>
        </div>
        <div className="author-inner">
          {postAuthor.edges[0]?.node.userBiographicalInfo[locale === "pt-br" ? "pt" : locale === "zh-hans" ? "zh" : locale] &&
            <div className="author-info">
              <Heading className="author-info-title" level={3} label={t("Personal")} />
              <Text className="author-info-text" label={postAuthor.edges[0]?.node.userBiographicalInfo[locale === "pt-br" ? "pt" : locale === "zh-hans" ? "zh" : locale]} />
            </div>
          }

          <div className="author-body">
            <Heading className="author-posts-title" level={3} label={t("Posts")} />

            <div className="author-posts">
              <LoadMorePosts t={t} locale={locale} data={posts} isAuthorContent={isAuthorContent} authorSlug={postAuthor.edges[0]?.node.author.node.slug} />
            </div>
          </div>
        </div>
      </div>
    </StyledAuthorContent>
  );
};

export default AuthorContent;
