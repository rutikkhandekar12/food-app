import React, { useEffect, useState, useContext, useRef } from "react";
import Card from "../../../components/card/Card";
import Carousel from "../../../components/carousel/Carousel";
import { cards } from "../../../../Config/Config";
import Shimmer from "../../../components/shimmer-effect/Shimmer";
import Search from "../../../components/search-input/Search";
import MenuContext from "../../../utils/MenuContext";
import {
  Heading,
  Box,
  Input,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import "./Body.scss";
import axios from "axios";
import Filter from "../../../components/filtermodal/FIlter";

const Body = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [allCard, setAllCard] = useState([]);
  const [page, setPage] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filteredCard, setFilteredCard] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    addEventListener("scroll", () => handleInfiniteScroll());

    return () => removeEventListener("scroll", () => handleInfiniteScroll());
  }, [page]);

  const handleInfiniteScroll = async () => {
    const scrollPosition =
      document.documentElement.scrollTop + window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollThreshold = 20;

    if (
      document.documentElement.scrollTop + window.innerHeight + 80 >=
      document.documentElement.scrollHeight
    ) {
      if (scrollHeight - scrollPosition < scrollThreshold) setHasMore(false);
      if (hasMore) {
        try {
          const data = await axios.get(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );

          const newCards =
            data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants || [];
          setAllCard((prevCard) => [...prevCard, ...newCards]);
        } catch (error) {
          console.error(
            "There was a problem with your axios operation:",
            error
          );
        }
      }
    }
  };

  async function getData() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      setData(data?.data);
      setAllCard(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredCard(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    }
  }

  return allCard?.length === 0 ? (
    <Shimmer />
  ) : (
    <Box className="home-page">
      <Search
        setFilteredCard={setFilteredCard}
        setSearch={setSearch}
        search={search}
        allCard={allCard}
      />
      <Carousel
        suggestions={
          data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        }
        title={data?.cards[0]?.card?.card.header?.title}
      />
      <Carousel
        suggestions={
          data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        }
        title={data?.cards[1]?.card?.card.header?.title}
      />
      <Box mt="3rem">
        <Heading as="h2" fontSize="24px" mb="1rem">
          {data?.cards[2]?.card?.card?.title}
        </Heading>
        <Filter />
        <Box className="restaurant-grid-card">
          {allCard?.map((data) => {
            return (
              <>
                <Card {...data?.info} grid="grid" key={data?.info?.id} />
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
