import React, { useState, useCallback, useEffect } from "react";
import { NavbarLayout } from "./layout";

export const Navbar = () => {
  const [ScrollPosition, setScrollPosition] = useState(0);
  const [BackgroundColor, setBackgroundColor] = useState("#00000000");

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset + window.innerHeight;
    setScrollPosition(position);
  }, [ScrollPosition]);

  useEffect(() => {
    //@ts-ignore
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (ScrollPosition === window.innerHeight)
      setBackgroundColor("transparent");
    if (ScrollPosition >= window.innerHeight + 50)
      setBackgroundColor("#00000050");
    if (ScrollPosition > window.innerHeight + 100)
      setBackgroundColor("#000000");
  }, [ScrollPosition]);

  return <NavbarLayout background={BackgroundColor} />;
};
