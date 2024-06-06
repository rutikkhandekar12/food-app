import useFilter from "../../Utils/useFilter";
import searchStyle from "./Search.module.scss";
import { Input, Button } from "@chakra-ui/react";

const Search = ({ setFilteredCard, setSearch, search, allCard, menuStyle }) => {

  styles = menuStyle || searchStyle;

  return (
    <div className={styles.search}>
      <Input
        focusBorderColor="lime"
        placeholder="Search your food..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => {
          const filteredData = useFilter(search, allCard);
          setFilteredCard(filteredData);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
