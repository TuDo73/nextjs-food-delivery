import * as React from "react";
import Image from "next/image";
// Styles
import { OrderListStyle } from "./OrderList.styles";
import image from "public/assets/images/shop-2_large.jpg";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BiImage } from "react-icons/bi";

// Helper
import { classes } from "global/helpers";
// Types
import { CatType } from "types";

type CatProps = {
  categories: CatType[];
};

const OrderList = ({ categories }: CatProps) => {
  const [isOpenQuickViewPopup, setIsOpenQuickViewPopup] = React.useState(false);

  const showHideQuickView = (value: boolean) => {
    setIsOpenQuickViewPopup(value);
  };

  return (
    <OrderListStyle className="order-list-block">
      <div className="container">
        <div className="order-list">
          {categories.map((category) => (
            <div
              className="meals-group"
              key={category.code}
              data-meal-anchor-id={category.code}
            >
              <div className="meals-group-category">
                {(!category.img_url || category.img_url === "\r") && (
                  <div className="image-error cat-img-error">
                    <span className="icon-image">
                      {" "}
                      <BiImage />
                    </span>
                    <span> No image </span>
                  </div>
                )}
                {category.img_url && category.img_url !== "\r" && (
                  <div className="cat-bg"></div>
                )}
                <div className="cat-title">{category.name}</div>
              </div>
              <div className="product-list">
                {category.products.map((product) => (
                  <div className="product-box" key={product.code}>
                    <div className="product-link">
                      <div className="product-img">
                        {!product.img_url && (
                          <div className="image-error product-img-error">
                            <span className="icon-image">
                              <BiImage />
                            </span>
                            <span> No image </span>
                          </div>
                        )}
                        {product.img_url && (
                          <Image
                            src={product.img_url}
                            alt="product"
                            width={100}
                            height={100}
                          />
                        )}
                      </div>
                      <div className="product-details">
                        <div className="product-title">
                          <span
                            className="row-title"
                            onClick={() => {
                              showHideQuickView(true);
                            }}
                          >
                            <span> {product.name} </span>
                            <span className="quick-view icon-info">
                              <IoInformationCircleOutline />
                            </span>
                          </span>
                        </div>
                        <div className="product-introduction">
                          {product.descrition}
                        </div>
                        <div className="product-price">{product.price} €</div>
                      </div>
                      <div className="add-to-cart">
                        <span className="icon-cart-plus">
                          <FaCartPlus />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className={classes({ active: isOpenQuickViewPopup }, "popup-wrapper")}
        >
          <div
            className="popup-overlay"
            onClick={() => {
              showHideQuickView(false);
            }}
          ></div>
          <div
            className={classes(
              { open: isOpenQuickViewPopup },
              "product-quick-view"
            )}
          >
            <div
              className="close-quick-view"
              onClick={() => {
                showHideQuickView(false);
              }}
            >
              <span className="icon-cross">
                <CgClose />
              </span>
            </div>

            <div className="quick-view-modal">
              <div className="product-img">
                <Image src={image} alt="product" />
              </div>
              <div className="product-details">
                <h4 className="product-title">Chicken Soup</h4>
                <div className="product-description">
                  <p>
                    Nam tempus turpis at metus scelerisque placerat nulla
                    deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut risus. Sedcus faucibus
                    an sullamcorper mattis drostique des commodo pharetras
                    loremos.Donec pretium egestas sapien et mollis. Lorem ipsum
                    dolor sit amet Sonsectetur...
                  </p>
                  <ul>
                    <li>Lorem impsum</li>
                    <li>Lorem impsum lorem</li>
                    <li>Lorem impsum</li>
                    <li>Lorem impsum lorem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderListStyle>
  );
};

export default OrderList;
