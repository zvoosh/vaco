import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollableDiv = document.querySelector(".scrollable-div");

    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
  }, [location.pathname]);

  return null; // No UI needed
};

export default ScrollToTop;
