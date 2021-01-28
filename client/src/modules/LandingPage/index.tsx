import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { burgerMenuIsOpenRX } from "../../store/burgerMenu/selectors";
import { LandingPageLayout } from "./layout";

export const LandingPage = () => {
  
  const burgerMenuIsOpen = useSelector(burgerMenuIsOpenRX);

  useEffect(() => {
    if (burgerMenuIsOpen) {
      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    } else window.onscroll = function () {};
  }, [burgerMenuIsOpen]);
  
  return <LandingPageLayout />;
};
