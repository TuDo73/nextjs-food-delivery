import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Styles
import { CartStyle } from "./Cart.styles";
import { IoMdClose } from "react-icons/io";
import image from "public/assets/images/shop-2_large.jpg";
import { ImPencil } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { ImCart } from "react-icons/im";
// Helpers
import { classes, handleBodyScroll } from "global/helpers";
// Hooks
import useCalculateCartHeight from "hooks/useCalculateCartHeight";
// Types
type PropsType = {
  isInCheckout?: boolean;
};

const Cart = ({ isInCheckout }: PropsType) => {
  const initialCartList = [
    {
      id: 1,
      name: "Chicken Soup 1",
      price: 4.35,
      quantity: 1,
      note: "",
    },
    {
      id: 2,
      name: "Chicken Soup 2",
      price: 4.35,
      quantity: 1,
      note: "",
    },
    {
      id: 3,
      name: "Chicken Soup 3",
      price: 4.35,
      quantity: 1,
      note: "",
    },
    {
      id: 4,
      name: "Chicken Soup 4",
      price: 4.35,
      quantity: 1,
      note: "",
    },
    {
      id: 5,
      name: "Chicken Soup 5",
      price: 4.35,
      quantity: 1,
      note: "",
    },
    {
      id: 6,
      name: "Chicken Soup 6",
      price: 4.35,
      quantity: 1,
      note: "",
    },
  ];

  const [cartList] = useState(initialCartList);
  const [selectedNoteItem, setSelectedNoteItem] = useState<number | null>(null);
  const [isShowCart, setIsShowCart] = useState(false);
  const noteArea = useRef<HTMLTextAreaElement>(null);
  const { heightCart, calculateCartHeight } = useCalculateCartHeight();
  const router = useRouter();

  const showHideProductNote = (id: number | null) => {
    setSelectedNoteItem(id);
  };

  const showHideCartDevice = (value: boolean) => {
    setIsShowCart(value);
    handleBodyScroll(value);
  };

  const goToCheckout = () => {
    handleBodyScroll(false);
    router.push("/payment");
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateCartHeight);

    return () => {
      window.removeEventListener("scroll", calculateCartHeight);
    };
  }, [calculateCartHeight]);

  useEffect(() => {
    if (noteArea.current) noteArea.current.focus();
  }, [selectedNoteItem]);

  useEffect(() => {
    calculateCartHeight();
  }, [heightCart, calculateCartHeight]);

  return (
    <CartStyle>
      <div className="cart-wrapper">
        <div className="cart-device" onClick={() => showHideCartDevice(true)}>
          <div className="cart-device-box">
            <div className="cart-icon-wrap">
              <div className="cart-icon">
                <span className="icon-cart">
                  <ImCart />
                </span>
                <span className="cart-numb">1</span>
              </div>
            </div>
            <div className="cart-device-text">
              <span className="text-title">Cart </span>
              <span className="cart-total">(10.00 €)</span>
            </div>
          </div>
        </div>
        <div
          className={classes({ show: isShowCart }, "shopping-cart-bar")}
          style={{ height: heightCart }}
        >
          <div className="shopping-cart-data">
            <h4>
              Shopping Cart
              <span onClick={() => showHideCartDevice(false)}>
                <IoMdClose />
              </span>
            </h4>
            {/* <div class="no-data">
              <p>No items in cart</p>
            </div> */}
            <div
              className={classes({ "in-checkout": isInCheckout }, "has-data")}
            >
              <ul className="summary-list">
                {cartList.map((item) => (
                  <li className="summary-list-item" key={item.id}>
                    <div className="item-wrap">
                      <div className="item-img">
                        <Image
                          src={image}
                          alt="product"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="item-details">
                        <div className="row-detail item-name">{item.name}</div>
                        {isInCheckout && (
                          <div className="row-detail item-quantity">
                            {item.quantity}
                          </div>
                        )}
                        {!isInCheckout && (
                          <div className="row-detail item-method">
                            <div className="quantity-number">
                              <div className="quantity-btn dec-btn">
                                <span>-</span>
                                <div className="overlay-btn"></div>
                              </div>
                              <div className="quantity-input">
                                {item.quantity}
                              </div>
                              <div className="quantity-btn inc-btn">
                                <span>+</span>
                                <div className="overlay-btn"></div>
                              </div>
                            </div>
                            <div
                              className="note-btn"
                              onClick={() => {
                                showHideProductNote(item.id);
                              }}
                            >
                              <ImPencil />
                            </div>
                            <div className="delete-item">
                              <ImBin />
                            </div>
                          </div>
                        )}

                        <div className="row-detail item-total-price">
                          <span>{item.price} €</span>
                        </div>
                        <div className="note-text">{item.note}</div>
                        {selectedNoteItem === item.id && (
                          <div className="note-detail">
                            <fieldset>
                              <legend>Add note</legend>
                              <textarea
                                cols={0}
                                rows={3}
                                maxLength={160}
                                className="note-textarea"
                                placeholder='E.g. "Without onions"'
                                ref={noteArea}
                              ></textarea>
                            </fieldset>
                            <div className="note-detail-button">
                              <span
                                className="button-item cancel-btn"
                                onClick={() => {
                                  showHideProductNote(null);
                                }}
                              >
                                Cancel
                              </span>
                              <span className="button-item save-btn">Save</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="total">
                <div className="total-col">
                  <span>Sub-total</span>
                  <span>18.35 €</span>
                </div>
                <div className="total-col">
                  <span>Delivery costs</span>
                  <span>4.35 €</span>
                </div>
                <div className="total-col total-price">
                  <span>Total</span>
                  <span>30.00 €</span>
                </div>
              </div>
              <div className="cart-rule">
                You have reached the minimum order amount of 30.00 € to
                checkout.
              </div>
            </div>
            {!isInCheckout && (
              <div className="shopping-cart-action">
                <div className="action-btn btn-checkout" onClick={goToCheckout}>
                  Checkout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;
