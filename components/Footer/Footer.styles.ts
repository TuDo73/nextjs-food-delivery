import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const FooterStyle = styled.footer`
  position: relative;
  overflow: hidden;
  z-index: 30;
  color: var(--white);
  background: var(--dark2);

  @media ${media.maxM} {
    margin-bottom: 85px;
  }

  .footer-top {
    display: flex;
    padding: 60px 0;

    @media ${media.maxM} {
      padding: 30px 0;
    }

    @media ${media.maxSm} {
      flex-wrap: wrap;
      padding: 0;
    }
  }

  .footer-col {
    flex: 1;

    @media ${media.maxSm} {
      width: calc((100% / 2) - 20px);
      flex: none;

      &:last-child {
        margin: 30px 10px;
      }
    }

    &:not(:last-child) {
      margin-right: 20px;

      @media ${media.maxSm} {
        margin: 30px 10px;
      }
    }

    h4 {
      font-size: 24px;
      margin-bottom: 25px;

      @media ${media.maxM} {
        font-size: 20px;
      }
    }

    ul > li {
      padding: 0 0 8px 0;
      display: flex;

      a {
        display: inline-block;
        color: var(--white);
        transition: all 0.3s var(--cubic1);

        &:hover {
          color: var(--yellow1);
        }
      }

      .footer-icon {
        margin-right: 10px;
        margin-top: 5px;
      }
    }

    .social-list {
      display: flex;

      .social-item {
        margin-right: 25px;
      }
    }
  }

  .footer-bottom {
    background: var(--dark);
    color: var(--white);
    text-align: center;
    padding: 20px;
  }

  .scroll-top-btn {
    position: fixed;
    z-index: 1000;
    bottom: -10px;
    left: 30px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--red2);
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
    opacity: 0.4;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--red3);
      opacity: 1;
    }

    @media ${media.maxM} {
      right: 10px;
    }

    @media ${media.minM} {
    }

    &.show {
      visibility: visible;
      bottom: 60px;

      @media ${media.maxM} {
        bottom: 65px;
      }
    }

    span {
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${media.maxS} {
        font-size: 14px;
      }
    }
  }
`;
