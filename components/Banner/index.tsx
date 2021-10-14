/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import Image from "next/image";

// Styles
import { BannerStyle } from "./Banner.styles";
import { GoInfo } from "react-icons/go";
import { AiFillClockCircle } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { IoStorefront } from "react-icons/io5";
import { AiFillCreditCard } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

// Helpers
import { classes } from "global/helpers";
// Types
type PopupTypes = {
  isOpenInfoPopup: boolean;
  setIsOpenInfoPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Banner = ({ isOpenInfoPopup, setIsOpenInfoPopup }: PopupTypes) => {
  const showHideInfoPopup = (value: boolean) => {
    setIsOpenInfoPopup(value);
  };

  return (
    <BannerStyle>
      <div
        className="banner-bg"
        css={css`
          background-image: url("/assets/images/FreeDelivery.jpg");
        `}
      ></div>
      <div className="banner-content">
        <h1 className="heading">
          <span
            className="heading-text"
            onClick={() => {
              showHideInfoPopup(true);
            }}
          >
            VIET PHO
            <span className="heading-icon">
              <GoInfo />
            </span>
          </span>
        </h1>
        <p className="sub-heading">
          Dong Xuan Center – Hall 2 Herzbergstraße 128 – 139
        </p>
      </div>
      <div className={classes({ open: isOpenInfoPopup }, "info-popup")}>
        <div className="info-popup-content">
          <h3 className="popup-heading">
            About Us
            <div
              className="close-popup"
              onClick={() => {
                showHideInfoPopup(false);
              }}
            >
              <span className="icon-close">
                <CgClose />
              </span>
            </div>
          </h3>
          <div className="popup-content-wrap">
            <div className="info-row">
              <h4 className="row-heading">
                <span className="row-heading-icon">
                  <AiFillClockCircle />
                </span>
                Delivery times
              </h4>
              <div className="row-content">
                <div className="content-col col-left">
                  <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                  </ul>
                </div>
                <div className="content-col col-right">
                  <ul>
                    <li>Closed for delivery</li>
                    <li>12:00 - 21:30</li>
                    <li>12:00 - 21:30</li>
                    <li>12:00 - 21:30</li>
                    <li>12:00 - 21:30</li>
                    <li>14:00 - 21:30</li>
                    <li>14:00 - 21:30</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info-row">
              <h4 className="row-heading">
                <span className="row-heading-icon icon-delivery_dining">
                  <GrDeliver />
                </span>
                Delivery costs
              </h4>
              <div className="row-content">
                <div className="content-col col-left">
                  <ul>
                    <li>Minimum order amount</li>
                    <li>Delivery costs</li>
                  </ul>
                </div>
                <div className="content-col col-right">
                  <ul>
                    <li>30.00 €</li>
                    <li>2.00 €</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info-row">
              <h4 className="row-heading">
                <span className="row-heading-icon icon-store-front">
                  <IoStorefront />
                </span>
                Website
              </h4>
              <div className="row-content">
                <a href="/">vietpho.de</a>
              </div>
            </div>
            <div className="info-row">
              <h4 className="row-heading">
                <span className="row-heading-icon icon-credit-card-alt">
                  <AiFillCreditCard />
                </span>
                Payment methods
              </h4>
              <div className="row-content">
                <div className="card-item">
                  <Image
                    src="/assets/images/payment_18.png"
                    alt="card"
                    width={38}
                    height={31}
                  />
                </div>
                <div className="card-item">
                  <Image
                    src="/assets/images/payment_61.png"
                    alt="card"
                    width={38}
                    height={31}
                  />
                </div>
              </div>
            </div>
            <div className="info-row">
              <h4 className="row-heading">
                <span className="row-heading-icon icon-building">
                  <FaBuilding />
                </span>
                Colophon
              </h4>
              <div className="row-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyle>
  );
};

export default Banner;
