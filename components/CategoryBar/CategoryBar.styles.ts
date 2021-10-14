import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";
import "swiper/swiper-bundle.css";

export const CategoryBarStyle = styled.div`
  height: 65px;

  .category-bar-wrap {
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
    border: 1px solid var(--gray4);
    background: var(--gray6);

    &.is-sticky {
      position: fixed;
      width: calc(100% - 340px);
      top: 0;
      left: 0;
      z-index: 9;

      @media ${media.maxM} {
        width: 100%;
      }
    }
  }

  .wrapper {
    height: 65px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-box {
    width: 0;
    height: 70%;
    position: absolute;
    left: 0;
    z-index: 20;

    &.open {
      width: 100%;

      .search-form {
        box-shadow: 0 0 0 1px var(--gray4);
      }

      .close-search-icon {
        display: flex;
      }
    }

    .search-form {
      display: flex;
      align-items: center;
      background: var(--white);
      width: 100%;
      height: 100%;
      border-radius: 2px;

      &:focus-within {
        box-shadow: 0 0 0 2px var(--blue1);

        .close-search-icon {
          border-color: var(--blue1);
        }
      }
    }

    .search-form-field {
      background: transparent;
      border: none;
      width: 100%;
      padding: 0 20px;
      margin: 0;

      &::placeholder {
        opacity: 0.3;
      }
    }

    .icon-search {
      font-size: 28px;
      color: var(--dark);
      margin: 10px;
      cursor: pointer;
      width: 1em;
      height: 1em;
      line-height: 1;

      @media ${media.maxM} {
        font-size: 26px;
      }
      @media ${media.maxS} {
        font-size: 24px;
      }
    }

    .close-search-icon {
      display: none;
      font-size: 20px;
      cursor: pointer;
      height: 100%;
      width: 54px;
      align-items: center;
      justify-content: center;
      border-left: 1px solid var(--gray4);
    }
  }

  .category-nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 85px;

    @media ${media.maxL} {
      padding-left: 70px;
    }

    .swiper-container {
      margin: 0 30px;

      @media ${media.maxL} {
        margin: 0 20px;
      }
    }

    .slider-wrapper {
      width: 100%;
      position: relative;
    }

    .swiper-slide {
      width: auto;
      text-align: center;
      // transition: all 0.3s;
      font-size: 17px;

      @media ${media.maxM} {
        font-size: 16px;
      }

      &.selected {
        color: var(--white);
        background: var(--red1);
        border-radius: 999px;

        span {
          @media (hover: hover) and (pointer: fine) {
            &:hover {
              color: var(--white);
            }
          }
        }
      }

      span {
        display: block;
        padding: 2px 20px;
        height: 100%;
        cursor: pointer;

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            color: var(--red1);
          }
        }
      }
    }

    .slider-nav {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .swiper-button-prev {
      left: 0;
      justify-content: flex-start;
    }

    .swiper-button-next {
      right: 0;
      justify-content: flex-end;
    }

    .swiper-button-prev,
    .swiper-button-next {
      background: var(--gray6);
      color: var(--dark);

      &:after {
        font-size: 18px;
        font-weight: var(--font-weight-bold);

        @media ${media.maxM} {
          font-size: 16px;
        }
      }
    }

    .swiper-button-disabled {
      display: none;
    }
  }
`;
