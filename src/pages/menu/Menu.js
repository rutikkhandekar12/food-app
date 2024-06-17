import Login from "../authentication/Login";
import Search from "../../components/search-input/Search";
import { Button, Heading } from "@chakra-ui/react";
import "./Menu.scss";
import Body from "./body/Menubody";
import Footer from "../home/footer/Footer";
import Cart from "../cart/Cart";
import { Outlet, useNavigate } from "react-router-dom";
import MenuNavbar from "../../components/navbar/menuNavbar/MenuNavbar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const navigate = useNavigate();
  const [cartLen, setCartLen] = useState();

  const cartAll = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setCartLen(cartAll.length);
  }, [cartAll]);

  return (
    <div className="menu">
      <MenuNavbar cartLen={cartLen} />
      <Body />
    </div>
  );
};

export default Menu;
