import styled from "@emotion/styled";
import { media } from "styles/mediaQuery";

export const MainStyle = styled.main`
  width: calc(100% - 340px);

  @media ${media.maxM} {
    width: 100%;
  }
  .main-order {
    margin: 35px 0;

    @media ${media.maxS} {
      margin: 15px 0;
    }
  }
`;
