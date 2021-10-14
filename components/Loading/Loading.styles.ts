import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const LoadingStyle = styled.div`
  .loading-box {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    left: 0;
    top: 0;
    z-index: 2000;
  }
  .loading-box-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* :root {
    --containerDimentions: 90px;
    --shapeDimentions: 36px;

    @media ${media.maxS} {
      --containerDimentions: 60px;
      --shapeDimentions: 24px;
    }
  } */
  .loading-container {
    width: 90px;
    height: 90px;
    animation: rotation 1s infinite;

    @media ${media.maxS} {
      width: 60px;
      height: 60px;
    }
  }
  .loading-container .shape {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 4px;

    @media ${media.maxS} {
      width: 24px;
      height: 24px;
    }
  }
  .loading-container .shape.shape-1 {
    left: 0;
    background-color: #4285f4;
  }
  .loading-container .shape.shape-2 {
    right: 0;
    background-color: #34a853;
  }
  .loading-container .shape.shape-3 {
    bottom: 0;
    background-color: #fbbc05;
  }
  .loading-container .shape.shape-4 {
    bottom: 0;
    right: 0;
    background-color: #ea4335;
  }
  .loading-container .shape-1 {
    animation: shape1 2s linear infinite;
  }
  .loading-container .shape-2 {
    animation: shape2 2s linear infinite;
  }
  .loading-container .shape-3 {
    animation: shape3 2s linear infinite;
  }
  .loading-container .shape-4 {
    animation: shape4 2s linear infinite;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes shape1 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 54px);
    }
    50% {
      transform: translate(54px, 54px);
    }
    75% {
      transform: translate(54px, 0);
    }
  }
  @keyframes shape2 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-54px, 0);
    }
    50% {
      transform: translate(-54px, 54px);
    }
    75% {
      transform: translate(0, 54px);
    }
  }
  @keyframes shape3 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(54px, 0);
    }
    50% {
      transform: translate(54px, -54px);
    }
    75% {
      transform: translate(0, -54px);
    }
  }
  @keyframes shape4 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, -54px);
    }
    50% {
      transform: translate(-54px, -54px);
    }
    75% {
      transform: translate(-54px, 0);
    }
  }

  @media ${media.maxS} {
    @keyframes shape1 {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(0, 36px);
      }
      50% {
        transform: translate(36px, 36px);
      }
      75% {
        transform: translate(36px, 0);
      }
    }
    @keyframes shape2 {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(-36px, 0);
      }
      50% {
        transform: translate(-36px, 36px);
      }
      75% {
        transform: translate(0, 36px);
      }
    }
    @keyframes shape3 {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(36px, 0);
      }
      50% {
        transform: translate(36px, -36px);
      }
      75% {
        transform: translate(0, -36px);
      }
    }
    @keyframes shape4 {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(0, -36px);
      }
      50% {
        transform: translate(-36px, -36px);
      }
      75% {
        transform: translate(-36px, 0);
      }
    }
  }
`;
