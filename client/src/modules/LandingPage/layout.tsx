import React from "react";
import { LandingPageContainer } from "./layout.styled";
import { Navbar } from "./components/Navbar/index";
import { BurgerMenuButton } from "./components/BurgerMenuButton/index";
import { Main } from "./components/Main/index";
import { Footer } from "./components/Footer/index";

export const LandingPageLayout = () => (
  <LandingPageContainer>
    <Navbar />
    <BurgerMenuButton />
    <Main />
    <Footer />
  </LandingPageContainer>
);
