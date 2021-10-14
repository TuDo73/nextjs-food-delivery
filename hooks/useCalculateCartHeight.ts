import { useState, useContext } from "react";
import { ScreenContext } from "contexts/screen";

import { isInViewport } from "global/helpers";

const useCalculateCartHeight = () => {
  const [heightCart, setHeightCart] = useState("");
  const { isSmallScreen } = useContext(ScreenContext);

  const calculateCartHeight = () => {
    if (!isSmallScreen) {
      let footer = document.querySelector("footer")!;
      let topFooter = footer.getBoundingClientRect().top;
      let calHeight = window.innerHeight - topFooter;

      if (isInViewport(footer)) {
        setHeightCart(`calc(100vh - ${calHeight}px)`);
      } else {
        setHeightCart("");
      }
    }
  };

  return { heightCart, calculateCartHeight };
};

export default useCalculateCartHeight;
