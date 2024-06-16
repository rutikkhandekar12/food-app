import { Box, Button, Heading } from "@chakra-ui/react";
import "./MenuNavbar.scss";
import menuStyle from "./MenuSearch.module.scss";
import Login from "../../../pages/authentication/Login";
import Search from "../../search-input/Search";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState } from "react";

const MenuNavbar = ({ cart }) => {
  const navigate = useNavigate();
  // const [cartLen, setCartLen] = useState();

  // const cartItems = useSelector(state =>  state.cart.cartItems);
  // setCartLen(cartItems.length);

  return (
    <Box className="menu-header" gap={cart ? "720px" : "640px"}>
      <div className="menu-title">
        <Heading as="h2" size="xl" noOfLines={1}>
          Food Bajar
        </Heading>
      </div>
      <Box display="flex" gap="25px">
        {!cart && (
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => navigate("/cart")}
          >
            Cart 
          </Button>
        )}
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => navigate("/help")}
        >
          Help
        </Button>
        <Login />
      </Box>
    </Box>
  );
};

export default MenuNavbar;
