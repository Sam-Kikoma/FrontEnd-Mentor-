import Item from "./components/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterList from "./components/FilterList";

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.jsonbin.io/v3/b/669586a2e41b4d34e412609c");
      setData(res.data.record.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilter = (newFilter) => {
    setFilter((prevFilters) => {
      if (!prevFilters.includes(newFilter)) {
        return [...prevFilters, newFilter];
      }
      return prevFilters;
    });

    const newData = data.filter((item) => {
      return (
        (item.languages && item.languages.includes(newFilter)) || 
        (item.role && item.role.includes(newFilter)) || 
        (item.level && item.level.includes(newFilter)) || 
        (item.tools && item.tools.includes(newFilter))
      );
    });

    setFilteredData((prevFilteredData) => {
      const uniqueNewData = newData.filter(newItem => 
        !prevFilteredData.some(filteredItem => filteredItem.id === newItem.id)
      );
      return [...prevFilteredData, ...uniqueNewData];
    });
  };

  // Remove all filters
  const clearFilter = () => {
    setFilter([]);
    setFilteredData([]);
  };

  // Remove individual filter
  const removeSelected = (selectedFilter) => {
    const newFilters = filter.filter(item => item !== selectedFilter);
    setFilter(newFilters);

    const newFilteredData = data.filter((item) => {
      return newFilters.every(filter => (
        (item.languages && item.languages.includes(filter)) || 
        (item.role && item.role.includes(filter)) || 
        (item.level && item.level.includes(filter)) || 
        (item.tools && item.tools.includes(filter))
      ));
    });

    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Applied filters:", filter);
  }, [filter]);

  return (
    <>
      <div className="w-full h-full bg-[--Light-Grayish-Cyan]">
        <div className="w-auto h-[156px] bg-[--Primary-Dark-Cyan] bg-[url('./assets/bg-header-mobile.svg')] md:bg-[url('./assets/bg-header-desktop.svg')] mb-20"></div>
        {filter.length > 0 ? <FilterList filter={filter} clearFilter={clearFilter} removeSelected={removeSelected} /> : null}
        {filteredData.length > 0 ? 
          filteredData.map((item) => <Item data={item} key={item.id} handleFilter={handleFilter}/>) : 
          data.map((item) => <Item data={item} key={item.id} handleFilter={handleFilter} clearFilter={clearFilter}/>)
        }
      </div>
    </>
  );
};

export default App;
