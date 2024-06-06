import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useState, useContext } from "react";
import "./Header.scss";
import { Button, Heading, Image, Input, Box, Text} from "@chakra-ui/react";
import MenuContext from "../../../utils/MenuContext";
import foodIcon from "../../../assets/restaurant.png"

const Header = () => {


  return (
    <div className="header">
      <Box className="header-slogan">
        <Image src={foodIcon} alt="foodIcon" w="29px"/>
        <Text color="#ffebcd">
            Good food, Good Monents
        </Text>
      </Box>
      <div className="title">
        <Heading as="h2" size="2xl" noOfLines={1}>
          Food Bajar
        </Heading>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
