import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Map from "./components/Map";

const App = () => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function fetchData(e) {
    e.preventDefault();
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${search}`;
    const res = await fetch(url);
    const json = await res.json();
    setResponse(json);
    setSearch("");
  }

  async function initialFetch() {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=`;
    const res = await fetch(url);
    const json = await res.json();
    setResponse(json);
  }

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <>
      <Search fetchData={fetchData} search={search} setSearch={setSearch} />
      {response ? <Results response={response} /> : null}
      {response ? <Map response={response} /> : null}
    </>
  );
};

export default App;
