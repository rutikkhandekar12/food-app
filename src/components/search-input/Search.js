import searchStyle from "./Search.module.css";
import { Input, Button } from "@chakra-ui/react";

const Search = ({ setFilteredCard, setSearch, search, allCard, menuStyle }) => {

  styles = menuStyle || searchStyle;

  const filter = (searchText, cards) => {
    const filteredData = cards?.filter((data) => {
      return data?.info?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
    return filteredData;
  };

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
          const filteredData = filter(search, allCard);
          setFilteredCard(filteredData);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
