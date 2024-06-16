import Login from "../authentication/Login";
import Search from "../../components/search-input/Search";
import { Button, Heading } from "@chakra-ui/react";
import "./Menu.scss";
import Body from "./body/Menubody";
import Footer from "../home/footer/Footer"
import Cart from "../cart/Cart";
import { Outlet, useNavigate } from "react-router-dom";
import MenuNavbar from "../../components/navbar/menuNavbar/MenuNavbar";


const Menu = () => {

  const navigate = useNavigate();

  return (
    <div className="menu">
      <MenuNavbar/>
      <Body/>
    </div>
  );
};

export default Menu;
