import { Box, Button, Heading } from "@chakra-ui/react";
import "./MenuNavbar.scss";
import Login from "../../../pages/authentication/Login";
import { useNavigate } from "react-router-dom";

const MenuNavbar = ({ cart, cartLen }) => {
  const navigate = useNavigate();

  return (
    <Box className="menu-header" >
      <div className="menu-title">
        <Box display="flex" justifyContent="center" alignItems="center" p={3}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            letterSpacing="widest"
            color="teal.500"
            textAlign="center"
          >
            Food
            <Box as="span" color="green.500">
              Bazaar
            </Box>
          </Heading>
        </Box>
      </div>
      <Box display="flex" gap="25px" alignItems="center">
        {!cart && (
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={() => navigate("/cart")}
          >
            Cart ({cartLen})
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
