import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function fetchData(e) {
    e.preventDefault();
    const url = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${search}`;
    const res = await fetch(url);
    const json = await res.json();
    setResponse(json);
    setSearch("");
  }

  return (
    <>
      <Search fetchData={fetchData} search={search} setSearch={setSearch} />
    </>
  );
};

export default App;
