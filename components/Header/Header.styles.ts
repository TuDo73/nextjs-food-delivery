import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const HeaderStyle = styled.header`
  color: var(--dark);

  .header-wrapper {
    width: calc(100% - 340px);
    padding: 20px 0;

    @media ${media.maxM} {
      width: 100%;
      padding: 10px 0;
    }
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .site-logo {
    a {
      display: block;
      position: relative;
      width: 200px;
      height: 200px;
      max-height: 120px;

      @media ${media.maxL} {
        max-height: 100px;
      }
      @media ${media.maxM} {
        max-height: 90px;
      }
      @media ${media.maxS} {
        max-height: 80px;
      }
    }
  }

  .header-infor-wrap {
    margin-top: 25px;

    @media ${media.maxL} {
      margin-top: 40px;
    }
    @media ${media.maxS} {
      margin-top: 30px;
    }
  }

  .header-infor {
    @media ${media.maxS} {
      font-size: 13px;
    }

    .infor-col {
      display: flex;
      align-items: center;

      &:first-of-type {
        margin-bottom: 15px;

        @media ${media.maxM} {
          margin-bottom: 10px;
        }
      }

      .infor-icon {
        margin-right: 5px;
      }

      .email {
        line-height: 1;
      }

      .call-us {
        line-height: 1;
      }
    }
  }

  .language-box {
    position: absolute;
    right: 0;
    top: 0;

    .lang-box-wrap {
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      height: 40px;
      font-size: 15px;
      z-index: 0;
      display: flex;
      flex-direction: column;
      transition: all 0.4s var(--cubic1);

      @media ${media.maxSm} {
        height: 30px;
      }

      &.open {
        box-shadow: -1px 1px 10px -3px rgba(0, 0, 0, 0.3);
        z-index: 30;
        background: white;
      }
    }

    .lang-opt {
      cursor: pointer;
      font-weight: 700;
      display: flex;
      padding-left: 10px;
      min-height: 40px;
      width: 85px;
      order: 2;
      align-items: center;
      transition: color 0.3s var(--cubic1);
      position: relative;

      @media ${media.maxSm} {
        min-height: 30px;
        width: 75px;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--red1);
        }
      }

      &.active {
        border-top: none;
        order: 1;
      }

      .lang-flag {
        width: 25px;
        height: 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media ${media.maxSm} {
          width: 20px;
          height: 12px;
        }
      }

      span {
        margin: 0 2px 0 5px;
        line-height: 1;

        @media ${media.maxSm} {
          margin: 0 2px 0 5px;
        }
      }
    }

    .icon {
      position: absolute;
      right: 8px;
      top: 13px;

      @media ${media.maxSm} {
        right: 5px;
        top: 8px;
      }
    }
  }
`;
