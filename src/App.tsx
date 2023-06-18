import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemCard from "./components/itemCard/ItemCard";
import Footer from "./components/footer/Footer";
import ImportantInfo from "./components/importantInfo/ImportantInfo";

function App() {
  const filteringOptions = ["all", "dog", "cat", "turtle", "lizard"];
  const [filter, setFilter] = useState("all");
  const products = [
    {
      id: "turtle",
      identifyID: "1",
      name: "Turtle",
      price: "300",
      picture: "turtle1",
      description:
        "Discover our captivating turtle, a fascinating creature that brings a sense of serenity and tranquility to any space, making it a unique addition to your home.",
    },
    {
      id: "dog",
      identifyID: "2",
      name: "Dog",
      price: "200",
      picture: "dog1",
      description:
        "Meet our delightful dog, a playful and friendly companion with a heart full of love, ready to brighten your days and fill your home with happiness.",
    },
    {
      id: "lizard",
      identifyID: "3",
      name: "Chameleon",
      price: "250",
      picture: "cameleon1",
      description:
        "Encounter our mesmerizing chameleon, a master of disguise with its vibrant colors and incredible ability to adapt, adding a touch of wonder and intrigue to your living environment.",
    },
    {
      id: "cat",
      identifyID: "4",
      name: "Cat",
      price: "150",
      picture: "cat1",
      description:
        "Experience the enchantment of our graceful cat, a sophisticated and independent companion that exudes elegance and offers endless moments of warmth and affection in your home.",
    },
    {
      id: "lizard",
      identifyID: "5",
      name: "Geco",
      price: "150",
      picture: "geco1",
      description:
        "Experience the enchantment of our graceful cat, a sophisticated and independent companion that exudes elegance and offers endless moments of warmth and affection in your home.",
    },
  ];
  const [itemCount, setItemCount] = useState(0);

  const number = products.filter(
    (product) => product.id == filter || filter == "all"
  );

  useEffect(() => {
    setItemCount(number.length);
  }, [number]);

  return (
    <>
      <NavBar />
      <div className="landingPage">
        <div className="columnLandingPageItems">
          <div className="filterAndCount">
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
            <div className="numItems">number of items : {itemCount}</div>
          </div>

          <div className="productLayout">
            {products
              .filter((product) => product.id == filter || filter == "all")
              .map((product) => (
                <ItemCard
                  name={product.name}
                  identifyID={product.identifyID}
                  price={product.price}
                  picture={product.picture}
                  data={product}
                />
              ))}
          </div>
        </div>
      </div>
      {/* <div className="reklama"> */}
      <ImportantInfo />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
