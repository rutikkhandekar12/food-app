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
import { debounce } from "lodash";
import LocationContext from "../../../context/LocationContext";

const Body = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [allCard, setAllCard] = useState([]);
  const [page, setPage] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filteredCard, setFilteredCard] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { location } = useContext(LocationContext);
  const eventRef = useRef(null);

  console.log("lat.....",location.lat);
  console.log("long........",location.long);

  useEffect(() => {
    getData();
  }, [location]);

  const handleInfiniteScroll = async () => {
    const scrollPosition =
      document.documentElement.scrollTop + window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollThreshold = 20;

    if (scrollPosition + 1 >= scrollHeight) {
      console.log("handle remove event call.......");
      console.log("hasMore...:::", hasMore);
      removeEventListener("scroll", eventRef.current);
      setHasMore(false);
      return;
    }

    if (scrollPosition + 300 >= scrollHeight && hasMore) {
      console.log("hasMore...:::", hasMore);
      console.log("loding new cards........");
      try {
        const data = await axios.get(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );

        const newCards =
          data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        // If newCards is empty, there's no more data
        if (newCards.length === 0) {
          setHasMore(false);
        } else {
          setAllCard((prevCard) => [...prevCard, ...newCards]);
          setFilteredCard((prevCard) => [...prevCard, ...newCards]);
        }
      } catch (error) {
        console.error("There was a problem with your axios operation:", error);
      }
    }
  };

  eventRef.current = debounce(handleInfiniteScroll, 100);

  useEffect(() => {
    addEventListener("scroll", eventRef.current);

    return () => removeEventListener("scroll", eventRef.current);
  }, [hasMore]);

  async function getData() {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
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
        <Filter setFilteredCard={setFilteredCard} filteredCard={filteredCard} />
        <Box className="restaurant-grid-card">
          {filteredCard?.map((data) => {
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
