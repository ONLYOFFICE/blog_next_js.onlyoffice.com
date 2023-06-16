import StyledFooterItem from "./styled-footer-item";
import { useState, useRef } from "react";

import Heading from "@components/common/heading";

const FooterItem = ({ dis, children, className, heading }) => {
  const content = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = (e) => {
    e.preventDefault();
    window.innerWidth <= 1024 && setIsOpen(!isOpen);
  };

  const footerItemClassName = className
    ? `footer-item-${className}`
    : `footer-item`;

  return (
    <StyledFooterItem isOpen={isOpen} className={footerItemClassName}>
      <Heading
        className="footer-item-heading"
        level={6}
        onClick={dis && onHandleClick}
        label={heading}
      />
      {/*eslint-disable*/}
      <span className={`footer-item-heading-arrow ${isOpen ? "up" : ""}`}/>
      {/*eslint-enable*/}
      <div ref={content} className="footer-items-group">
        {children}
      </div>
    </StyledFooterItem>
  );
};

export default FooterItem;
