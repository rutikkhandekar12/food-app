import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MenuContext from "../../utils/MenuContext";
import { useContext, useState } from "react";

const Home = () => {

  return (
    <>
        <Header />
        <Body />
        <Footer />
    </>
  );
};

export default Home;
