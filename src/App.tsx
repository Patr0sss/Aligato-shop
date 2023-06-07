import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemCard from "./components/itemCard/ItemCard";
import Turtle from "./assets/Turtle";

function App() {
  const filteringOptions = ["all", "dog", "cat", "turtle"];
  const [filter, setFilter] = useState("all");
  const products = [
    { id: "turtle", name: "turtle", price: "300", picture: <Turtle /> },
    { id: "dog", name: "dog", price: "200" },
  ];

  return (
    <div className="landingPage">
      <NavBar />
      <div className="columnLandingPageItems">
        <div className="filteringOptions">
          {filteringOptions.map((option) => (
            <div
              className={
                filter === option ? "filterOptionChosen" : "filterOption"
              }
              onClick={() => {
                setFilter(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="productLayout">
          {products
            .filter((product) => product.id == filter || filter == "all")
            .map((product) => (
              <ItemCard
                name={product.name}
                id={product.id}
                price={product.price}
                picture={product.picture}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
