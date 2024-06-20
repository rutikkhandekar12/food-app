import {
  Button,
  Box
} from "@chakra-ui/react";
import "./Filter.scss";
import { useState } from "react";

const Filter = ({ setFilteredCard, filteredCard, allCard}) => {

  const [togglebtn, setToggleBtn] = useState({
    all: false,
    pureVeg: false,
    ratings: false,
    fast: false,
    lessThan300: false
  });

  const handleFilter = (type) => {
    setToggleBtn({
      all: false,
      pureVeg: false,
      ratings: false,
      fast: false,
      lessThan300: false,
      [type]: !togglebtn[type]
    });

    let newFilteredCard = [];
    switch (type) {
      case "all":
        newFilteredCard = allCard;
        break;
      case "pureVeg":
        newFilteredCard = !togglebtn.pureVeg? filteredCard.filter(
          (card) => card?.info?.veg === true
        ): allCard
        break;
      case "ratings":
        newFilteredCard = !togglebtn.ratings? filteredCard.filter(
          (card) => card?.info?.avgRating > 4
        ): allCard
        break;
      case "fast":
        newFilteredCard = !togglebtn.fast? filteredCard.filter((card) => {
          if (card?.info?.sla?.slaString === "15-20 mins") {
            return card;
          }
        }): allCard;
        break;
      case "lessThan300":
        newFilteredCard = !togglebtn.lessThan300? filteredCard.filter(
          (card) =>
            card?.info?.costForTwo === "₹350 for two" ||
            "₹300 for two" ||
            "₹400 for two" ||
            "₹250 for two" ||
            "₹500 for two"
        ) : allCard;
        break;
    }
    setFilteredCard(newFilteredCard);
  };

  return (
    <>
      <Box className="restaurant-grid-filter">
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("all")}
          bgColor={togglebtn.all? "black" : "white"}
        >
          All
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("pureVeg")}
          bgColor={togglebtn.pureVeg ? "black" : "white"}
        >
          Pure Veg
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("ratings")}
          bgColor={togglebtn.ratings? "black" : "white"}
        >
          Ratings 4.0+
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("fast")}
          bgColor={togglebtn.fast? "black" : "white"}
        >
          Fast Delivery
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleFilter("lessThan300")}
          bgColor={togglebtn.lessThan300? "black" : "white"}
        >
          Less than Rs.300
        </Button>
      </Box>
    </>
  );
};

export default Filter;
