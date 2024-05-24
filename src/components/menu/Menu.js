import Login from "../../pages/authentication/Login";
import Search from "../search-input/Search";
import { Heading } from "@chakra-ui/react";
import menuStyle from "./MenuSearch.module.css";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <header className="menu-header">
        <div className="menu-title">

          <Heading as="h2" size="xl" noOfLines={1}>
            Food Bajar
          </Heading>

        </div>
        <Search menuStyle={menuStyle}/>
        
        <Login />
      </header>
    </>
  );
};

export default Menu;
