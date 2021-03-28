import React from "react";
import { Container } from "./layout.styled";
import { Navbar } from "./components/Navbar/index";
import { BurgerMenuButton } from "./components/BurgerMenuButton/index";
import { Main } from "./components/Main/index";
import { Footer } from "./components/Footer/index";

export const LandingPageLayout = () => (
  <Container>
    <Navbar />
    <BurgerMenuButton />
    <Main />
    <Footer />
  </Container>
);
