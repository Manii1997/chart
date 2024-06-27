import React, { useState } from "react";
import Chart from "./components/Chart";
import TimeframeSelector from "./components/TimeframeSelector";
import data from "./data/data.json";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="App">
      <NavBar />
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart data={data} timeframe={timeframe} />
    </div>
  );
};

export default App;
