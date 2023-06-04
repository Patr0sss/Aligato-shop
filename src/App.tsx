import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const filteringOptions = ["dog", "cat", "turtle"];
  const [filter, useFilter] = useState("all");

  return (
    <div className="landingPage">
      <NavBar />
      <div className="filteringOptions"></div>
      <div className="productLayout"></div>
    </div>
  );
}

export default App;
