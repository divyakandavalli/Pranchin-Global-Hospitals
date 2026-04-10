import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      // Homepage - custom container
      const homeContainer = document.querySelector('[data-scroll-container="home"]');
      if (homeContainer) {
        homeContainer.scrollTo({ top: 0, behavior: "instant" });
      }
    } else {
      // Other pages - normal scroll
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}