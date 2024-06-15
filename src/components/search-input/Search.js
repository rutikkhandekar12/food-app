import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import useFilter from "../../utils/useFilter";
import SearchList from "../searchlist/SearchList";
import searchStyle from "./Search.module.scss";
import { useState } from "react";
import serchIcon from "../../assets/search.png";
import location from "../../assets/location.png";
import detector from "../../assets/detector.png";

const Search = ({ setFilteredCard, setSearch, search, allCard, menuStyle }) => {
  const [enter, setEnter] = useState(false);
  const [resultList, setResultList] = useState([]);

  styles = menuStyle || searchStyle;

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const filteredData = useFilter(searchValue, allCard);
    setResultList(filteredData);
  };

  const handleEnter = (e) => {
    const searchValue = e.target.value;

    if (e.key === "Enter") {
      const filteredData = useFilter(searchValue, allCard);
      setResultList([]);
      setSearch(" ");
      setFilteredCard(filteredData);
      console.log("result:", filteredData);
    }
  };

  return (
    <div className={styles.search}>
      { !menuStyle && <Accordion allowMultiple>
        <AccordionItem
          className={styles["location-detector"]}
          borderBottomWidth="0px"
          borderTopWidth="0px"
          borderRadius="5px"
        >
          <h2>
            <AccordionButton _expanded={{ bg: "#163c48", color: "white" }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                display="flex"
                alignContent="center"
                justifyContent="center"
                gap="4px"
              >
                <Image src={location} boxSize="28px" />
                <Text pt="2px">Akola, Maharashtra</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            bg="white"
            className={styles["accordian-panal"]}
            pb="0px"
            pt="0px"
            borderRadius="5px"
          >
            <Box
              display="flex"
              alignContent="center"
              justifyContent="center"
              gap="6px"
              className={styles["accordian-panal-detect"]}
            >
              <Image src={detector} boxSize="26px"/>
              <Text color="#e43636">Detect your location</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>}
      <Box position="relative">
        <Image
          src={serchIcon}
          boxSize="26px"
          position="absolute"
          top="8px"
          left="8px"
          objectFit="cover"
          zIndex="100"
        />
        <Input
          focusBorderColor="lime"
          placeholder="Search your food..."
          onChange={(e) => handleSearch(e)}
          onKeyDown={(e) => handleEnter(e)}
          value={search}
        />

        {search && search !== " " && <SearchList resultList={resultList} />}
      </Box>
    </div>
  );
};

export default Search;
