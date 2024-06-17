import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Modal,
  useDisclosure,
  Box,
  Image,
  Text,
  Radio,
  Checkbox,
  WrapItem,
} from "@chakra-ui/react";
import Button from "../../components/button/Button";
import filterIcon from "../../assets/filterIcon.png";
import "./Filter.scss";
import { useState } from "react";

const Filter = ({ setFilteredCard, filteredCard }) => {
  const handleFilter = (type) => {
    let newFilteredCard = [];
    switch (type) {
      case "all":
        newFilteredCard = filteredCard.filter((card) => card);
        break;
      case "pureVeg":
        newFilteredCard = filteredCard.filter(
          (card) => card?.info?.veg === true
        );
        break;
      case "ratings":
        newFilteredCard = filteredCard.filter(
          (card) => card?.info?.avgRating > 4
        );
        break;
      case "fast":
        newFilteredCard = filteredCard.filter((card) => {
          if (card?.info?.sla?.slaString === "15-20 mins") {
            return card;
          }
        });
        break;
      case "lessThan300":
        newFilteredCard = filteredCard.filter(
          (card) =>
            card?.info?.costForTwo === "₹350 for two" ||
            "₹300 for two" ||
            "₹400 for two" ||
            "₹250 for two" ||
            "₹500 for two"
        );
        break;
    }
    setFilteredCard(newFilteredCard);
    console.log("filtered result::", newFilteredCard);
  };

  return (
    <>
      <Box className="restaurant-grid-filter">
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("all")}
        >
          All
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("pureVeg")}
        >
          Pure Veg
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("ratings")}
        >
          Ratings 4.0+
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("fast")}
        >
          Fast Delivery
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("lessThan300")}
        >
          Less than Rs.300
        </Button>
      </Box>
    </>
  );
};

export default Filter;
