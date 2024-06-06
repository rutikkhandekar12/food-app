import Login from "../authentication/Login";
import Search from "../../components/search-input/Search";
import { Heading } from "@chakra-ui/react";
import menuStyle from "./MenuSearch.module.css";
import "./Menu.scss";
import Body from "./body/Menubody";


const Menu = () => {
  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-title">
          <Heading as="h2" size="xl" noOfLines={1}>
            Food Bajar
          </Heading>
        </div>
        <Search menuStyle={menuStyle}/>
        <Login />
      </header>
      <Body/>
    </div>
  );
};

export default Menu;
