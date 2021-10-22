import * as React from "react";
// Components
import Footer from "components/Footer";
import Header from "components/Header";
import Banner from "components/Banner";
import Cart from "components/Cart";
// Styles
import { MainStyle } from "./Layout.styles";
// Helpers
import { classes, handleHtmlScroll } from "global/helpers";
// Context
import { ScreenContext, useScreenDetected } from "contexts/screen";

const Layout = ({ children }) => {
  const [isOpenInfoPopup, setIsOpenInfoPopup] = React.useState(false);
  const { isSmallScreen } = React.useContext(ScreenContext);

  const closeAllPopup = () => {
    setIsOpenInfoPopup(false);

    // enable html scroll
    handleHtmlScroll(false);
  };

  useScreenDetected();

  return (
    <>
      <div
        className={classes(
          {
            "small-screen": isSmallScreen,
            "disable-scroll": isOpenInfoPopup,
          },
          "body-wrapper"
        )}
      >
        <div
          className={classes(
            {
              "active-info-popup": isOpenInfoPopup,
            },
            "overlay-body"
          )}
          onClick={closeAllPopup}
        ></div>
        <Header />
        <MainStyle>
          <Banner
            isOpenInfoPopup={isOpenInfoPopup}
            setIsOpenInfoPopup={setIsOpenInfoPopup}
          />
          {children}
        </MainStyle>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
