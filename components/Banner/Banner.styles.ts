import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const BannerStyle = styled.section`
  padding: 20px 0 28px 0;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${media.maxS} {
    height: 150px;
  }
  
  .banner-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .banner-content {
    text-align: center;
    color: var(--white);
    position: relative;
    z-index: 2;
    max-width: 800px;

    @media ${media.maxL} {
      max-width: 600px;
    }

    @media ${media.maxSm} {
      max-width: 425px;
    }
    @media ${media.maxX} {
      max-width: 300px;
    }
  }

  .heading {
    font-weight: var(--font-weight-regular);
    // margin-bottom: 15px;

    @media ${media.maxM} {
      font-size: 30px;
    }
    @media ${media.maxS} {
      font-size: 25px;
      margin-bottom: 8px;
    }

    .heading-text {
      position: relative;
      cursor: pointer;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        background: var(--white);
        bottom: 0;
        left: 0;
        transform: scale(0);
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        &:after {
          transform: scale(1);
        }
      }
    }

    .heading-icon {
      font-size: 20px;
      margin-left: 5px;

      @media ${media.maxS} {
        font-size: 14px;
      }
    }
  }

  .sub-heading {
    font-size: 20px;

    @media ${media.maxM} {
      font-size: 18px;
    }
    @media ${media.maxS} {
      font-size: 16px;
    }
  }
}

.info-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  transition: all 0.3s var(--cubic1);
  background: var(--white);
  width: 650px;
  height: calc(100% - 120px);
  padding: 25px;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;

  @media ${media.maxSm} {
    width: 530px;
  }
  @media ${media.maxS} {
    width: 100%;
    height: 100%;
  }

  &.open {
    opacity: 1;
    visibility: visible;
  }

  .info-popup-content {
    height: 100%;
  }

  .popup-content-wrap {
    height: 100%;
    padding-bottom: 50px;
    overflow: scroll;
  }

  .popup-heading {
    font-weight: var(--font-weight-bold);
    font-size: 25px;
    color: var(--dark);
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray4);
    margin: 0;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  .info-row {
    margin-top: 30px;
    .row-heading {
      color: var(--dark);
    }

    .row-heading-icon {
      margin-right: 15px;

      &:before {
        display: inline-block;
        width: 16px;
      }
    }

    .row-content {
      display: flex;
      font-size: 15px;
      background: var(--gray6);
      padding: 20px;

      .content-col {
        flex: 1;

        &.col-right {
          text-align: right;
        }
      }

      ul > li:not(:last-child) {
        margin-bottom: 4px;
      }

      a {
        color: var(--red2);
      }

      .card-item {
        width: 72px;
        height: 48px;
        border-radius: 2px;
        background-color: var(--white);
        border: 1px solid var(--gray7);
        padding: 0 16px;
        margin: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
