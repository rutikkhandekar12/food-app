import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useState } from "react";
import "./Header.css";
import { Button, Heading, Input } from "@chakra-ui/react";
import { cards } from "../../../../Config/Config";

const Header = () => {

  return (
    <div className="header">
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
