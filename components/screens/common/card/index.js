import StyledCard from "./styled-card";
import Moment from "moment";
import parse from "html-react-parser";
import Text from "@components/common/text"
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const Card = ({ t, currentLanguage, data, mainPost, ...rest }) => {
  return (
    <StyledCard className={mainPost ? "main-post" : ""} {...rest}>
      <InternalLink className="card-img" href={data?.uri}>
        {
          data.featuredImage?.node.sourceUrl ?
            <img src={data.featuredImage?.node?.sourceUrl} alt={data?.title} />
          :
            <img src={data?.firstImgPost} alt={data?.title} />
        }
      </InternalLink>
      <div className="card-body">
        <Heading className="card-title" level={2}>
          <InternalLink href={data?.uri}>{data?.title}</InternalLink>
        </Heading>
        <div className="card-info">
          <Text className="card-info-item card-date" as="span">{Moment(data?.date).format("D MMMM y")}</Text>
          <InternalLink className="card-info-item card-author" href={`/author/${data?.author?.node.slug}`}>By <span>{data?.author?.node.name}</span></InternalLink>
        </div>
        {mainPost && 
          <div className="card-description">{parse(data?.excerpt)}</div>
        }
      </div>
    </StyledCard>
  );
};

export default Card;
