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
import { useContext, useState } from "react";
import serchIcon from "../../assets/search.png";
import location from "../../assets/location.png";
import detector from "../../assets/detector.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import LocationContext from "../../context/LocationContext";

const Search = ({
  setFilteredCard,
  setSearch,
  search,
  allCard,
  menuStyle,
  cart,
}) => {
  const [enter, setEnter] = useState(false);
  const [resultList, setResultList] = useState([]);
  const [city, setCity] = useState("Guidy");
  const [state, setState] = useState("Chennai");
  const dispatch = useDispatch();

  const { setLocation } = useContext(LocationContext);

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
    }
  };

  async function getLocation(lat, long) {
    const location = await axios.get(`
    http://api.weatherapi.com/v1/current.json?key=d4f97f088a0547d9b1d81430241506&q=${lat},${long}&aqi=yes`);
    setCity(location?.data?.location?.name);
    setState(location?.data?.location?.region);
  }

  const successLocation = async (position) => {
    const lat = position?.coords?.latitude;
    const long = position?.coords?.longitude;
    setLocation({ lat, long });
    getLocation(lat, long);
  };

  const handleDetectLocation = () => {
    console.log("handlelocation detection");
    const obj = navigator.geolocation.getCurrentPosition(
      successLocation,
    );
    console.log(obj);
  };

  return (
    <div className={styles.search}>
      {!menuStyle && (
        <Accordion allowMultiple>
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
                  <Text pt="2px">
                    {city}, {state}
                  </Text>
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
                onClick={handleDetectLocation}
              >
                <Image src={detector} boxSize="26px" />
                <Text color="#e43636">Detect your location</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
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
        {!cart && (
          <Input
            focusBorderColor="lime"
            placeholder="Search your food..."
            onChange={(e) => handleSearch(e)}
            onKeyDown={(e) => handleEnter(e)}
            value={search}
          />
        )}

        {search && search !== " " && <SearchList resultList={resultList} />}
      </Box>
    </div>
  );
};

export default Search;
