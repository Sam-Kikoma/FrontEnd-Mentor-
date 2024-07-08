import Item from "./components/Item";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter]  = useState([])
  const [filteredData, setFilteredData] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleFilter = (filter) => {
    setFilter((prevFilters) => {
      if (!prevFilters.includes(filter)) {
        return [...prevFilters, filter];
      }
      return prevFilters;
    });
    const newData = data.filter((item) => {
      return (
        (item.languages && item.languages.includes(filter)) || (item.role&&item.role.includes(filter)) || (item.level&&item.level.includes(filter))
        || (item.tools && item.tools.includes(filter))
      );
    });
  
    setFilteredData((prevFilteredData) => [...prevFilteredData, ...newData]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-full bg-[--Light-Grayish-Cyan]">
        <div className="w-auto h-[156px] bg- bg-[--Primary-Dark-Cyan] bg-[url('./assets/bg-header-mobile.svg')] md:bg-[url('./assets/bg-header-desktop.svg')] mb-20"></div>
        {data.length > 0 ? (
          data.map((item) => <Item data={item} key={item.id} handleFilter={handleFilter}/>)
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default App;
