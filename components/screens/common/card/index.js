import Moment from 'moment';
import ReactHTmlParser from "react-html-parser";
import Text from "../../../common/text"
import Heading from "../../../common/heading";
import Link from "../../../common/external-link";
import StyledCard from "./styled-card";

const Card = ({ t, currentLanguage, data, mainPost, ...rest }) => {
  return (
    <StyledCard className={mainPost ? "main-post" : ""} {...rest}>
      <Link className="card-img" href={data?.link}>
        <img src={data?.featuredImage?.node.sourceUrl} alt={data?.title} />
      </Link>
      <div className="card-body">
        <Heading className="card-title" level={2}>
          <Link href={data?.link}>
            {data?.title}
          </Link>
        </Heading>
        <div className="card-info">
          <Text className="card-info-item card-date" as="span">{Moment(data?.date).format('d MMMM y')}</Text>
          <Link className="card-info-item card-author" href={data?.author.node.uri}>By {data?.author.node.name}</Link>
        </div>
        {mainPost && 
          <div className="card-description">{ReactHTmlParser(data?.excerpt)}</div>
        }
      </div>
    </StyledCard>
  );
};

export default Card;
