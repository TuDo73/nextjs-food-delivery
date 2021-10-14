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
      <div className="container">
        {/* <div className="footer-top">
          <div className="footer-col">
            <h4>Help</h4>
            <ul className="footer-link-list">
              <li className="link-item">
                <a href="/">Search</a>
              </li>
              <li className="link-item">
                <a href="/">Help</a>
              </li>
              <li className="link-item">
                <a href="/">Information</a>
              </li>
              <li className="link-item">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="link-item">
                <a href="/">Shipping Details</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-link-list">
              <li className="link-item">
                <a href="/">Contact Us</a>
              </li>
              <li className="link-item">
                <a href="/">About Us</a>
              </li>
              <li className="link-item">
                <a href="/">Carrers</a>
              </li>
              <li className="link-item">
                <a href="/">Refund & Return</a>
              </li>
              <li className="link-item">
                <a href="/">Deliveries</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-link-list">
              <li className="link-item">
                <span className="footer-icon icon-home"></span>
                <span>Address</span>
              </li>
              <li className="link-item">
                <span className="footer-icon icon-phone"></span>
                <span>+1800 12345678</span>
              </li>
              <li className="link-item">
                <span className="footer-icon icon-envelope"></span>
                <span>support@example.com</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect with us</h4>
            <ul className="social-list">
              <li className="social-item">
                <a href="/">
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li className="social-item">
                <a href="/">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li className="social-item">
                <a href="/">
                  <span className="icon-instagram"></span>
                </a>
              </li>
              <li className="social-item">
                <a href="/">
                  <span className="icon-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
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
