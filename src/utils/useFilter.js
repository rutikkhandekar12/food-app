
const useFilter = (searchText, cards) =>{

    const filteredData = cards?.filter((data) => {
        return data?.info?.name?.toLowerCase().includes(searchText?.toLowerCase());
      });

    return filteredData;
}

export default useFilter;