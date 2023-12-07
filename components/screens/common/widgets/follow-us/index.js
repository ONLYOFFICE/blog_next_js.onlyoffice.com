import StyledFollowUs from "./styled-follow-us";
import { useState } from "react";
import Heading from "@components/common/heading";
import Popup from "@components/screens/common/popup";
import Newsletter from "@components/screens/common/newsletter";
import SocialLinks from "@components/screens/common/social-links";

const FollowUs = ({ t, locale }) => {
  const isFollowUsContent = true;

  const [popupActive, setPopupActive] = useState(false);
  const handlerSetModal = () => {
    setPopupActive(true);
  };

  return (
    <StyledFollowUs>
      <Heading level={4}>{t("Follow us")}</Heading>

      <SocialLinks locale={locale} handlerSetModal={handlerSetModal} isFollowUsContent={isFollowUsContent} />

      <Popup popupActive={popupActive} setPopupActive={setPopupActive}>
        <Newsletter t={t} locale={locale} />
      </Popup>
    </StyledFollowUs>
  );
};

export default FollowUs;