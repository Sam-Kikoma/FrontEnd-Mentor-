import React, { useEffect } from "react";

const Search = ({ fetchData, search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="search-wrapper" style={{}}>
      <p>IP Address Tracker</p>
      <form action="" onSubmit={fetchData}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
          placeholder="Search for any IP address or domain"
        />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
