import StyledCard from "./styled-card";
import Text from "../text"
import Heading from "../heading";
import Link from "../external-link";

const Card = ({ t, currentLanguage, data, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <Link href={data?.link}>
        
      </Link>
      <div>
        <Heading level={2}>
          <Link href={data?.link}>
            {data?.title}
          </Link>
        </Heading>
        <div>
          <Text className="date" as="span">{data?.date}</Text>
          <Text className="author" as="span">{data?.author.node.name}</Text>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
