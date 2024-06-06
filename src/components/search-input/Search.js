import useFilter from "../../utils/useFilter";
import SearchList from "../searchlist/SearchList";
import searchStyle from "./Search.module.scss";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Search = ({ setFilteredCard, setSearch, search, allCard, menuStyle }) => {
  const [resultList, setResultList] = useState([]);

  styles = menuStyle || searchStyle;

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const filteredData = useFilter(searchValue, allCard);
    setFilteredCard(filteredData);
    setResultList(filteredData);
    console.log("result:", filteredData);
  };

  return (
    <div className={styles.search}>
      <Input
        focusBorderColor="lime"
        placeholder="Search your food..."
        onChange={(e) => handleSearch(e)}
      />

      {search && <SearchList resultList={resultList} />}
    </div>
  );
};

export default Search;
