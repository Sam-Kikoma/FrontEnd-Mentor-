import React from "react";

const Search = ({ fetchData, search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <p>IP Address Tracker</p>
      <form action="" onSubmit={fetchData}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <p>{search}</p>
    </>
  );
};

export default Search;
