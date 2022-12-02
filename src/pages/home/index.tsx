import { default as Section1 } from "@components/section1";
import { default as Section2 } from "@components/section2";
import Header from "@components/header";
import Footer from "@components/footer";
import React, { useEffect } from "react";
import StyledHome from "./styles";

const Home = () => {
  return (
    <StyledHome>
      <Header/>
      <Section1 />
      <Section2 />
      <Footer/>
    </StyledHome>
  );
};

export default Home;
