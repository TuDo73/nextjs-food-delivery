import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const MainStyle = styled.div`
  .main-checkout {
    margin: 20px 0;

    .shipping-info-form {
      background: var(--gray6);
      padding: 25px;
      border: 1px solid var(--gray4);
      border-radius: 3px;

      @media ${media.maxS} {
        padding: 15px;
      }
    }

    .delivery-address {
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid var(--gray5);
    }

    h4,
    h5,
    .checkout-heading {
      font-weight: var(--font-weight-bold);
      color: var(--dark);
    }

    h4 {
      margin-bottom: 10px;
    }

    h2 {
      position: relative;
      margin-bottom: 30px;

      @media ${media.maxM} {
        margin-bottom: 20px;
      }
    }

    .checkout-heading {
      display: block;
      text-align: center;
      font-size: 34px;

      @media ${media.maxM} {
        font-size: 30px;
      }

      @media ${media.maxS} {
        font-size: 28px;
      }
    }

    .back {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      .back-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s var(--cubic1);
        padding: 10px;
        background: var(--blue1);
        color: var(--white);
        padding: 5px 12px 5px 5px;
        border-radius: 3px;
        font-size: 20px;

        @media ${media.maxM} {
          font-size: 18px;
        }

        .back-icon {
          transition: all 0.3s var(--cubic1);
          width: 1em;
          height: 1em;
          line-height: 1;
        }

        &:hover {
          .back-icon {
            transform: translateX(-5px);
          }
        }
      }
    }

    .form-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;

      @media ${media.maxSm} {
        margin: 0;
      }
    }

    .form-item {
      width: calc((100% / 2) - 40px);
      margin: 0 15px 20px 15px;

      @media ${media.maxSm} {
        width: 100%;
        margin: 0 0 20px 0;
      }

      .form-heading {
        margin-bottom: 8px;
      }

      .form-input {
        box-shadow: 0 0 0 1px var(--gray5);
        padding: 15px;
        color: var(--dark2);
        border: none;
        transition: box-shadow 0.2s;
        -webkit-appearance: none; // fix iphone form

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            box-shadow: 0 0 0 1px var(--dark);
          }
        }

        &:focus {
          box-shadow: 0 0 0 2px var(--blue1);
        }

        &::placeholder {
          opacity: 0.5;
          color: var(--gray9);
        }
      }
    }

    .shipping-methods {
      margin-bottom: 20px;
    }

    .shipping-select {
      cursor: pointer;
      background-color: var(--blue1);
      border-radius: 3px;
      border: none;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;
      width: 200px;
      color: var(--white);
      font-weight: bold;
      font-size: 16px !important; //fix auto zoom in input device

      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image: linear-gradient(45deg, transparent 50%, white 50%),
        linear-gradient(135deg, white 50%, transparent 50%),
        linear-gradient(to right, white, white);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;

      &:focus {
        font-size: 16px !important; //fix auto zoom in input device
      }
    }

    .checkout-row {
      box-shadow: 0 0 0 1px var(--gray4);
      cursor: pointer;
      border-radius: 3px;
      margin: 20px 0;
      transition: all 0.3s var(--cubic1);

      &.pay-with {
        margin-bottom: 40px;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          box-shadow: 0 0 0 1px var(--blue1);
        }
      }

      img {
        width: 20px;
        height: 20px;
      }

      .row-content {
        display: flex;
        position: relative;
        align-items: center;
        padding: 15px 20px;
      }

      .col-icon {
        color: var(--dark);
        // font-size: 20px;
      }

      .col-content {
        margin-left: 20px;

        h5 {
          margin-bottom: 3px;
        }

        p {
          font-size: 14px;
        }
      }

      .row-icon {
        position: absolute;
        right: 20px;
      }

      .row-icon-wrap {
        background: blue;
        border-radius: 50%;
        color: var(--white);
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 10px;
          width: 1em;
          height: 1em;
          line-height: 1;
        }
      }
    }

    .order-rule {
      font-size: 12px;
      text-align: center;
    }
    .order-btn {
      margin: 0 auto;
      padding: 20px;
      background: var(--red2);
      cursor: pointer;
      color: var(--white);
      text-align: center;
      width: 600px;
      font-weight: var(--font-weight-bold);
      border-radius: 3px;
      font-size: 18px;
      transition: all 0.3s var(--cubic1);
      margin-top: 10px;

      @media ${media.maxSm} {
        width: 100%;
      }

      &:hover {
        background: var(--red3);
      }
    }
  }

  .popup-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s var(--cubic1);

    &.open {
      visibility: visible;
      opacity: 1;

      .popup-overlay {
        opacity: 0.95;
        visibility: visible;
      }
    }
  }

  .popup-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--dark2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s var(--cubic1);
  }

  .checkout-popup {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    width: 550px;
    border-radius: 3px;

    @media ${media.maxSm} {
      top: 50%;
    }

    @media ${media.maxS} {
      width: 80%;
    }

    &.open {
      opacity: 1;
      visibility: visible;
    }

    .popup-content {
      height: 100%;
    }

    .popup-content-wrap {
      height: 100%;
      background: var(--gray6);
      padding: 25px;

      @media ${media.maxS} {
        padding: 20px;
      }
    }

    .popup-heading {
      font-weight: var(--font-weight-bold);
      font-size: 25px;
      color: var(--dark);
      padding: 25px;
      border-bottom: 1px solid var(--gray4);
      margin: 0;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media ${media.maxS} {
        padding: 20px;
      }
    }

    .close-popup {
      cursor: pointer;

      span {
        font-size: 16px;

        @media ${media.maxSm} {
          font-size: 18px;
        }
      }
    }

    .popup-btn {
      width: 100%;
      background: var(--red2);
      transition: all 0.3s var(--cubic1);
      color: var(--white);
      padding: 15px;
      text-align: center;
      cursor: pointer;
      font-weight: var(--font-weight-bold);
      border-radius: 3px;
      font-size: 18px;
      margin-top: 60px;

      @media ${media.maxS} {
        margin-top: 40px;
      }

      &:hover {
        background: var(--red3);
      }
    }

    .select-wrap {
      position: relative;

      span {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 22px;
        width: 1em;
        height: 1em;
        line-height: 1;
      }
    }

    .delivery-time-select {
      cursor: pointer;
      background-color: var(--white);
      border-radius: 3px;
      border: none;
      box-shadow: 0 0 0 1px var(--gray5);
      display: inline-block;
      padding: 12px 40px 12px 12px;
      width: 100%;
      transition: box-shadow 0.3s var(--cubic1);
      font-size: 16px !important; //fix auto zoom in input device

      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;

      &:hover {
        font-size: 16px !important; //fix auto zoom in input device
      }

      &:focus {
        box-shadow: 0 0 0 2px var(--blue1);
      }
    }

    .payment-methods-box {
      display: flex;

      @media ${media.maxS} {
        flex-direction: column;
      }

      .method-opt {
        box-shadow: 0 0 0 1px var(--gray5);
        cursor: pointer;
        border-radius: 2px;
        flex: 1;
        display: flex;
        align-items: center;
        position: relative;
        padding: 20px;
        transition: all 0.3s var(--cubic1);

        @media ${media.maxS} {
          padding: 15px;
        }

        &:first-of-type {
          margin-right: 20px;

          @media ${media.maxS} {
            margin-right: 0;
            margin-bottom: 20px;
          }
        }

        &:hover {
          box-shadow: 0 0 0 1px var(--blue1);
        }

        img {
          width: 40px;
          height: 40px;
        }

        p {
          margin-left: 20px;
          font-weight: var(--font-weight-bold);
        }

        span {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: var(--red2);

          @media ${media.maxS} {
            right: 15px;
          }
        }
      }
    }
  }
`;
