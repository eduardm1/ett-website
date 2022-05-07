import { useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('page').scrollTo(0,0);
  }, [pathname]);

  return null;
}