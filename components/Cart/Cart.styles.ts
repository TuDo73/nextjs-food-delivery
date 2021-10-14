import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const CartStyle = styled.div`
  .shopping-cart-bar {
    position: fixed;
    right: 0;
    top: 0;
    width: 340px;
    height: 100vh;
    background: var(--white);
    color: var(--gray1);
    z-index: 21;
    overflow: hidden;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
    transition: top 0.2s;

    @media ${media.maxM} {
      width: 100%;
      z-index: 41;
      display: none;

      &.show {
        display: block;
      }
    }
  }

  .shopping-cart-data {
    height: 100%;
    display: flex;
    flex-direction: column;

    h4 {
      text-transform: uppercase;
      font-size: 20px;
      padding: 19px 0;
      background: var(--gray3);
      color: var(--dark);
      margin: 0;
      text-align: center;
      font-weight: var(--font-weight-bold);
      position: relative;

      @media ${media.maxM} {
        font-size: 18px;
      }

      span {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        display: none;

        @media ${media.maxM} {
          display: block;
        }
      }
    }

    .no-data {
      text-align: center;

      p {
        padding: 30px 0;
      }
    }

    .has-data {
      /* padding: 20px 15px 0px 15px; */
      // height: calc(100% - 140px);
      overflow: scroll;

      @media ${media.minM} {
        &.in-checkout {
          height: 100%;
          display: flex;
          flex-direction: column;

          .summary-list {
            overflow: scroll;
          }
        }
      }

      @media ${media.maxM} {
        padding-bottom: 200px;
      }

      .summary-list {
        padding: 20px 15px 0px 15px;

        .summary-list-item {
          display: flex;
          padding: 15px 0;
          position: relative;

          &:not(:last-child) {
            margin-bottom: 15px;
            border-bottom: 1px solid var(--gray4);
          }
        }

        .item-wrap {
          display: flex;
          width: 100%;
        }

        .item-img {
          max-width: 45px;
        }

        .item-details {
          padding: 0 35px 0 10px;
          flex: 1;
          color: var(--dark);
        }

        .row-detail {
          margin-bottom: 5px;
        }

        .item-name {
          display: inline-block;
          font-size: 16px;
          font-weight: var(--font-weight-bold);
        }

        .item-total-price {
          font-weight: var(--font-weight-bold);
        }

        .item-method {
          display: flex;
          align-items: center;
          position: relative;
        }

        .item-quantity {
          border: 1px solid var(--gray4);
          width: 45px;
          padding: 3px;
          text-align: center;
          font-size: 14px;
          color: var(--gray1);
          border-radius: 2px;
        }

        .quantity-number {
          display: flex;

          .quantity-btn {
            width: 30px;
            height: 30px;
            cursor: pointer;
            border: 1px solid var(--gray4);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transition: all 0.15s var(--cubic1);

            &:hover {
              color: var(--red2);
              border-color: var(--red2);
              border-radius: 0 !important;
            }

            &.dec-btn {
              border-radius: 3px 0 0 3px;
            }
            &.inc-btn {
              border-radius: 0 3px 3px 0;
            }
          }

          .quantity-input {
            border: 1px solid var(--gray4);
            border-left: none;
            border-right: none;
            width: 45px;
            padding: 3px;
            text-align: center;
            font-size: 14px;
            color: var(--gray1);
          }
        }

        .note-btn {
          margin-left: 15px;
          line-height: 1;
          cursor: pointer;
          color: var(--blue1);
          transition: all 0.3s;
          font-size: 15px;

          &:hover {
            color: var(--red2);
          }
        }

        .note-detail {
          fieldset {
            border: 1px solid var(--red2);
            padding: 0;
            margin: 0;
          }

          legend {
            margin-left: 10px;
            padding: 0 4px;
            font-size: 15px;
          }

          .note-textarea {
            vertical-align: baseline;
            border: 0;
            outline: 0;
            width: 100%;
            padding: 0 10px;
            resize: none;
            font-size: 14px;
            color: var(--gray1);

            @media ${media.maxM} {
              // disable auto zoom on mobile
              font-size: 16px;
            }

            &::placeholder {
              color: var(--gray5);
              font-size: 13px;
            }
          }

          .note-detail-button {
            color: var(--dark);
            font-weight: var(--font-weight-bold);
            font-size: 15px;
            margin-top: 5px;
            display: flex;
            justify-content: flex-end;

            .button-item {
              cursor: pointer;

              &:first-of-type {
                margin-right: 40px;
              }
            }
          }
        }

        .note-text {
          font-size: 12px;
          font-style: italic;
          margin-bottom: 5px;
        }

        .delete-item {
          position: absolute;
          right: -25px;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s var(--cubic1);
          color: var(--blue1);

          // fix wrapper svg
          width: 1em;
          height: 1em;
          line-height: 1;

          &:hover {
            color: var(--red2);
          }
        }
      }
    }
  }

  .total {
    color: var(--dark);
    padding: 25px 15px;
    border-top: 1px solid var(--gray4);
    border-bottom: 1px solid var(--gray4);

    .total-col {
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    .total-price {
      font-weight: var(--font-weight-bold);
      color: var(--red1);
    }
  }

  .cart-rule {
    font-size: 14px;
    text-align: center;
    padding: 20px;
  }

  .shopping-cart-action {
    @media ${media.maxM} {
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 72px;
      background: var(--white);
    }

    .action-btn {
      text-transform: uppercase;
      padding: 15px;
      transition: all 0.3s var(--cubic1);
      cursor: pointer;
      text-align: center;
      margin: 0 20px 20px 20px;
      font-weight: var(--font-weight-bold);
      border-radius: 3px;

      @media ${media.maxM} {
        border-radius: 10px;
        border: 8px solid var(--white);
        font-size: 16px;
        padding: 0;
        margin: 0;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.btn-checkout {
        background: var(--red2);
        color: var(--white);

        &:hover {
          background: var(--red3);
        }
      }
    }
  }

  .cart-device {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 40;
    width: 100%;
    height: 72px;
    border-top: 1px solid var(--gray4);
    background: var(--white);
    display: none;

    @media ${media.maxM} {
      display: block;
    }

    .cart-device-box {
      width: 100%;
      height: 72px;
      background: var(--red2);
      border: 8px solid var(--white);
      color: var(--white);
      font-weight: var(--font-weight-bold);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 17px;
    }

    .cart-icon-wrap {
      position: absolute;
      left: 30px;
      line-height: 1;
    }

    .cart-icon {
      position: relative;

      .icon-cart {
        font-size: 20px;
      }

      .cart-numb {
        width: 17px;
        height: 17px;
        background: var(--blue1);
        border-radius: 50%;
        font-size: 12px;
        display: block;
        text-align: center;
        line-height: 17px;
        position: absolute;
        top: -5px;
        left: 15px;
      }
    }
  }
`;
