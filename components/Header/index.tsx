/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";

// Styles
import { HeaderStyle } from "./Header.styles";
import { BiChevronDown } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

// Helpers
import { classes } from "global/helpers";

const Header = () => {
  const [lang, setLang] = useState("de");
  const [isOpen, setIsOpen] = useState(false);
  const langBox = useRef<HTMLDivElement>(null!);

  const showLang = () => {
    let hLangBox = 0;
    let hLangOpt = 0;
    let langOpt = document.querySelectorAll(".lang-opt");
    for (let i = 0; i < langOpt.length; i++) {
      let hlangOpt = langOpt[i].getBoundingClientRect().height;
      hLangOpt = hlangOpt;
      hLangBox += hlangOpt;
    }
    if (isOpen) {
      langBox.current.style.height = hLangOpt + "px";
      setIsOpen(false);
    } else {
      langBox.current.style.height = hLangBox + 1 + "px";
      setIsOpen(true);
    }
  };

  const changeLang = (value: "de" | "vi" | "en") => {
    setLang(value);
  };

  return (
    <HeaderStyle>
      <div className="header-wrapper">
        <div className="container">
          <div className="header-content">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <Image
                    src="/assets/images/logo-neu.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <div className="header-col-right">
              <div className="language-box">
                <div
                  className={classes({ open: isOpen }, "lang-box-wrap")}
                  ref={langBox}
                  onClick={showLang}
                >
                  <div
                    className={classes({ active: lang === "de" }, "lang-opt")}
                    onClick={() => changeLang("de")}
                  >
                    <div
                      className="lang-flag de-flag"
                      css={css`
                        background-image: url(/assets/images/flag-ger.jpg);
                      `}
                    ></div>
                    <span>DE</span>
                    <div className="overlay-btn"></div>
                  </div>
                  <div
                    className={classes({ active: lang === "vi" }, "lang-opt")}
                    onClick={() => changeLang("vi")}
                  >
                    <div
                      className="lang-flag vi-flag"
                      css={css`
                        background-image: url(/assets/images/flag-vi.jpg);
                      `}
                    ></div>
                    <span>VI</span>
                    <div className="overlay-btn"></div>
                  </div>
                  <div
                    className={classes({ active: lang === "en" }, "lang-opt")}
                    onClick={() => changeLang("en")}
                  >
                    <div
                      className="lang-flag en-flag"
                      css={css`
                        background-image: url(/assets/images/flag-en.svg);
                      `}
                    ></div>
                    <span>EN</span>
                    <div className="overlay-btn"></div>
                  </div>
                  <BiChevronDown className="icon" />
                </div>
              </div>
              <div className="header-infor-wrap">
                <div className="header-infor">
                  <div className="infor-col">
                    <FaPhoneAlt className="infor-icon" />
                    <span className="call-us">Call Us (00) 000 111 222</span>
                  </div>
                  <div className="infor-col">
                    <GrMail className="infor-icon" />
                    <span className="email">Mail info@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
