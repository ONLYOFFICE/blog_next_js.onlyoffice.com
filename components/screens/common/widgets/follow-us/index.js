import StyledFollowUs from "./styled-follow-us";
import { useState } from "react";
import Heading from "@components/common/heading";
import SocialLinks from "@components/screens/common/widgets/follow-us/social-links";
import MailPopup from "./mail-popup";

const FollowUs = ({ t, locale }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const handlerSetModal = () => {
    setPopupIsOpen(true);
  };

  return (
    <StyledFollowUs>
      <Heading level={3} size={4}>{t("Follow us")}</Heading>
      <SocialLinks t={t} locale={locale} handlerSetModal={handlerSetModal} />
      <MailPopup t={t} locale={locale} popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
    </StyledFollowUs>
  );
};

export default FollowUs;