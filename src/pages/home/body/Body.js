import React, { useEffect, useState } from "react";
import Card from "../../../components/card/Card";
import "./Body.css";
import { cards } from "../../../../Config/Config";
import * as chakra from "@chakra-ui/react/dist";
import Shimmer from "../../../components/shimmer-effect/Shimmer";
import Search from "../../../components/search-input/Search";

const {Button, Input} = chakra

const Body = () => {
  const [search, setSearch] = useState();
  const [allCard, setAllCard] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);


  useEffect(()=>{
    getData()
  },[]);

  async function getData(){
    const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await res.json();
    setAllCard(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredCard(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log("restaurant id : ", allCard);

  return allCard?.length === 0 ? <Shimmer/> : (
    <div className="card-container">
      <Search 
      setFilteredCard={setFilteredCard} 
      setSearch={setSearch}
      search={search}
      allCard={allCard}
      />
      {filteredCard?.map((data) => {
        return (
          <>
            <Card
              {...data?.info}
              key={data?.info?.id}
            />
          </>
        );
      })}
    </div>
  );
};

export default Body;
