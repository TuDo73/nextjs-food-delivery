import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";
// import image from "assets/images/essen03.jpg";

export const OrderListStyle = styled.section`
  margin: 30px 0;

  @media ${media.maxS} {
    margin: 20px 0;
  }

  .meals-group {
    margin-bottom: 20px;

    @media ${media.maxS} {
      margin-bottom: 10px;
    }
  }

  .meals-group-category {
    margin-bottom: 10px;

    .cat-bg {
      /* background-image: url(${"image"}); */
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 140px;
      border-radius: 3px 3px 0 0;

      @media ${media.maxS} {
        height: 90px;
      }
    }

    .cat-title {
      color: var(--dark);
      font-weight: var(--font-weight-bold);
      font-size: 22px;
      padding: 15px;
      background: var(--gray6);

      @media ${media.maxM} {
        font-size: 20px;
      }
      @media ${media.maxS} {
        font-size: 18px;
      }
    }
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;

    .product-box {
      width: calc((100% / 2) - 20px);
      margin: 10px;
      transition: all 0.3s var(--cubic1);
      border: 2px solid var(--gray6);
      border-radius: 3px;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          border: 2px solid var(--red2);
        }
      }

      @media ${media.maxL} {
        width: 100%;
        margin-top: 0;
      }

      .product-link {
        display: flex;
        padding: 10px 20px;
        position: relative;
        height: 100%;

        @media ${media.maxM} {
          padding: 5px 10px;
        }
      }

      .product-img {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        width: 120px;

        @media ${media.maxS} {
          width: 70px;
        }

        img {
          max-height: 150px;

          @media ${media.maxM} {
            max-height: 120px;
          }
        }
      }

      .product-details {
        flex: 1;
        padding: 10px 55px 10px 20px;

        @media ${media.maxS} {
          padding: 10px 40px 10px 10px;
        }

        .product-title {
          margin-bottom: 5px;
          color: var(--dark);
          font-weight: var(--font-weight-bold);
          font-size: 20px;

          @media ${media.maxM} {
            font-size: 18px;
          }

          .row-title {
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: var(--red2);

              .quick-view {
                color: var(--red2);
              }
            }
          }

          .quick-view {
            font-size: 16px;
            color: var(--blue1);
            cursor: pointer;
            transition: all 0.3s;

            @media ${media.maxM} {
              font-size: 12px;
            }
          }
        }

        .product-introduction {
          font-size: 15px;

          @media ${media.maxM} {
            font-size: 14px;
          }
        }

        .product-price {
          color: var(--red1);
          font-weight: var(--font-weight-bold);
          font-size: 18px;
          margin-top: 20px;

          @media ${media.maxM} {
            font-size: 17px;
            margin-top: 15px;
          }
        }
      }

      .add-to-cart {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--blue1);
        font-size: 40px;
        transition: all 0.3s;
        line-height: 1;
        cursor: pointer;

        @media ${media.maxM} {
          font-size: 35px;
        }
        @media ${media.maxS} {
          font-size: 30px;
        }

        &:hover {
          color: var(--red2);
        }
      }
    }
  }

  .popup-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    &.active {
      opacity: 1;
      visibility: visible;

      .popup-overlay {
        opacity: 0.95;
        visibility: visible;
      }
    }
  }

  .popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .product-quick-view {
    position: fixed;
    top: -100%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    transition: all 0.3s var(--cubic1);
    background: var(--white);
    width: 80%;
    height: 500px;
    max-width: 930px;
    overflow: hidden;
    padding: 50px;

    @media ${media.maxM} {
      padding: 30px;
    }

    &.open {
      top: 50%;
    }

    .close-quick-view {
      position: absolute;
      right: 0;
      top: 0;
      background: var(--dark);
      color: var(--white);
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .quick-view-modal {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: auto;

      @media ${media.maxSm} {
        flex-direction: column;
      }

      .product-img {
        width: 50%;
        display: flex;
        justify-content: center;
        text-align: center;
        // max-height: 200px;

        @media ${media.maxSm} {
          width: 100%;

          img {
            max-width: 200px;
          }
        }
      }

      .product-details {
        width: 50%;
        padding-left: 20px;

        @media ${media.maxSm} {
          width: 100%;
          padding: 0;
        }

        .product-title {
          line-height: 40px;
          margin-bottom: 15px;
          font-size: 20px;
          color: var(--red2);
        }

        .product-description {
          p {
            margin: 0 0 15px 0;
          }

          ul > li {
            &:before {
              font-family: "icon" !important;
              speak: none;
              font-style: normal;
              font-weight: normal;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              content: "\e91d";
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  .image-error {
    .icon-image {
      width: 1em;
      height: 1em;
      line-height: 1;
    }

    &.cat-img-error {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--gray8);
      width: 100%;
      height: 140px;
      border-radius: 3px 3px 0 0;

      @media ${media.maxS} {
        height: 90px;
      }

      span {
        margin: 2px;
      }
    }

    &.product-img-error {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
