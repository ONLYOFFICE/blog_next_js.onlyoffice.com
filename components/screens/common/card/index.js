import StyledCard from "./styled-card";
import DateFormat from "@components/screens/common/date-format";
import parse from "html-react-parser";
import Text from "@components/common/text"
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const Card = ({ t, currentLanguage, data, mainPost, ...rest }) => {
  const currentImgUrl = "https://wpblog.teamlab.info/wp-content/";
  const cdnImgUrl = "https://static-blog.teamlab.info/wp-content/";

  return (
    <StyledCard className={mainPost ? "main-post" : ""} {...rest}>
      <InternalLink className="card-img" href={data?.uri}>
        <img src={data.featuredImage?.node.sourceUrl ? data.featuredImage?.node.sourceUrl.replace(currentImgUrl, cdnImgUrl) : data?.firstImgPost.replace(currentImgUrl, cdnImgUrl)} alt={data?.title} />
      </InternalLink>
      <div className="card-body">
        <Heading className="card-title" level={2}>
          <InternalLink href={data?.uri}>{data?.title}</InternalLink>
        </Heading>
        <div className="card-info">
          <Text className="card-info-item card-date" as="span">
            <DateFormat currentLanguage={currentLanguage} data={data?.date} format="D MMMM y" />
          </Text>
          <InternalLink className="card-info-item card-author" href={`/author/${data?.author?.node.slug}`}>
            {currentLanguage === "ja" ? "著者：" : currentLanguage === "zh-hans" ? "作者: " : "By "}
            <span>{data?.author?.node.name}</span>
          </InternalLink>
        </div>
        {mainPost && 
          <div className="card-description">{parse(data?.excerpt)}</div>
        }
      </div>
    </StyledCard>
  );
};

export default Card;
