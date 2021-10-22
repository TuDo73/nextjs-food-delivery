import React, { useState, useEffect } from "react";
// Styles
import { FooterStyle } from "./Footer.styles";
import { ImArrowUp2 } from "react-icons/im";
// Helpers
import { classes } from "global/helpers";

const Footer = () => {
  const [isShowBackToTop, setIsShowBackToTop] = useState(false);

  const showHideScrollTopButton = () => {
    if (window.pageYOffset > 250) {
      setIsShowBackToTop(true);
    } else {
      setIsShowBackToTop(false);
    }
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", showHideScrollTopButton);

    return () => {
      window.removeEventListener("scroll", showHideScrollTopButton);
    };
  }, []);
  return (
    <FooterStyle>
      <div className="footer-bottom">
        Copyright © 2020 Vietpho. All Rights Reserved.
      </div>
      <div
        className={classes({ show: isShowBackToTop }, "scroll-top-btn")}
        onClick={scrollTop}
      >
        <span>
          <ImArrowUp2 />
        </span>
      </div>
    </FooterStyle>
  );
};

export default Footer;
