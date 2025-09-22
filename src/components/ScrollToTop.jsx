import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // reset scroll to top
  }, [pathname]);

  return null; // doesn’t render anything
}

export default ScrollToTop;
