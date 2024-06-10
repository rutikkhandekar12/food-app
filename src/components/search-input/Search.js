import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Input } from "@chakra-ui/react";
import useFilter from "../../utils/useFilter";
import SearchList from "../searchlist/SearchList";
import searchStyle from "./Search.module.scss";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import serchIcon from "../../assets/search.png"

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
      <Accordion allowMultiple>
        <AccordionItem className={styles["location-detector"]} borderBottomWidth="0px" borderTopWidth="0px">
          <h2>
            <AccordionButton maxW="202px" _expanded={{ bg:"tomato", color:"white"}}>
              <Box as="span" flex="1" textAlign="left" >
                Akola, Maharashtra
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel bg="white" className={styles["accordian-panal"]} pb="0px" pt="0px">Detect your location</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box position="relative">
        {/* <Image src={serchIcon} className={styles["search-icon"]} sizes="3px"/> */}
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
