import { css } from "@emotion/react";
import { media } from "./mediaQuery";

export const GlobalStyles = css`
  :root {
    /* Colors
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    --color-primary: #0a3847;
    --black: black;
    --white: white;
    --dark: var(--color-primary);
    --dark2: #262626;
    --gray1: #686464; //16
    --gray2: #e2e2e2; //9
    --gray3: #f8f5f2; //21
    --gray4: #e4e4e4; //15
    --gray5: #cfcac4; //22
    --gray6: #f3f3f3; //17
    --gray7: #e7e7e7; //20
    --gray8: #f6f6f6; //6
    --gray9: #4d4d4d; //0

    --blue1: #167f92; //4

    --red1: #fc4c4b; //7
    --red2: #c00a27; //9
    --red3: #93051c; //8

    --yellow1: #ffc800; //4

    --color-default: var(--gray1);

    /* Width page
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    --width-page: 1200px;

    /* Font-weight
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semiBold: 500;
    --font-weight-bold: 700;
    --font-weight-default: var(--font-weight-regular);

    /* Fonts
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    --font-roboto: "Roboto", sans-serif;
    --font-primary: var(--font-roboto);
    --font-title: var(--font-roboto);
    --font-icon: "icon";

    /* Font-size
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    --font-size-default: 16px;
    --font-size-heading-1: 36px;
    --font-size-heading-2: 26px;

    /* Transition
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    --cubic1: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .container {
    width: 100%;
    max-width: var(--width-page);
    margin: 0 auto;

    @media ${media.maxXl} {
      padding: 0 25px;
    }
    @media ${media.maxS} {
      padding: 0 15px;
    }
  }

  * {
    outline: none !important;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    font-size: 16px;
    font-weight: var(--font-weight-default);
    font-family: var(--font-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-default);

    @media ${media.maxM} {
      font-size: 14px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-weight: var(--font-weight-regular);
    letter-spacing: 0;
    line-height: 1.4;
    margin: 0 0 15px;
  }

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 21px;
  }

  h4 {
    font-size: 18px;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    height: auto;
    width: auto;
    max-width: 100%;

    //remove blank space under image
    vertical-align: middle;

    // check image dont have alt
    &:not([alt]),
    &[alt=""] {
      border: 5px solid red;
    }
  }

  p {
    /* margin: 0 0 25px 0; */
    font-weight: var(--font-weight-regular);

    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--gray1);
  }

  input {
    width: 100%;
    border: 1px solid $gray;
    padding: 8px 13px;
    display: flex;
    align-items: center;
    background: white;
    position: relative;
    border-radius: 0;
    font-family: var(--font-primary);
    font-size: var(--font-size-default);
  }

  input:disabled {
    background: var(--gray2);
  }

  html,
  .body-wrapper {
    &.disable-scroll {
      // position: fixed;
      // left: 0;
      // width: 100%;
      overflow: hidden;
    }
  }

  .overlay-body {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--dark2);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    &.active-info-popup {
      opacity: 0.7;
      visibility: visible;
    }
  }

  .overlay-btn {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  // loading state
  .loading-enter {
    opacity: 0;
  }
  .loading-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }
  .loading-exit {
    opacity: 1;
  }
  .loading-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
