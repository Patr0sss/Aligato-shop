import { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemCard from "./components/itemCard/ItemCard";
import Footer from "./components/footer/Footer";
import ImportantInfo from "./components/importantInfo/ImportantInfo";
import SavingSpecies from "./components/SavingSpecies/SavingSpecies";

function App() {
  const filteringOptions = ["All", "Dog", "Cat", "Reptile"];
  const [filter, setFilter] = useState("All");
  const products = [
    {
      id: "Reptile",
      identifyID: "1",
      name: "Turtle",
      price: "300",
      picture: "turtle1",
      description:
        "Discover our captivating turtle, a fascinating creature that brings a sense of serenity and tranquility to any space, making it a unique addition to your home.",
    },
    {
      id: "Dog",
      identifyID: "2",
      name: "Dog",
      price: "200",
      picture: "dog1",
      description:
        "Meet our delightful dog, a playful and friendly companion with a heart full of love, ready to brighten your days and fill your home with happiness.",
    },
    {
      id: "Reptile",
      identifyID: "3",
      name: "Chameleon",
      price: "250",
      picture: "cameleon1",
      description:
        "Encounter our mesmerizing chameleon, a master of disguise with its vibrant colors and incredible ability to adapt, adding a touch of wonder and intrigue to your living environment.",
    },
    {
      id: "Cat",
      identifyID: "4",
      name: "Cat",
      price: "150",
      picture: "cat1",
      description:
        "Experience the enchantment of our graceful cat, a sophisticated and independent companion that exudes elegance and offers endless moments of warmth and affection in your home.",
    },
    {
      id: "Reptile",
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
    (product) => product.id == filter || filter == "All"
  );

  useEffect(() => {
    setItemCount(number.length);
  }, [number]);

  const buyingSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToDiv = () => {
    if (buyingSectionRef.current) {
      const elementPosition =
        buyingSectionRef.current.getBoundingClientRect().top;
      const offset = window.pageYOffset + elementPosition - 80;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="landingPage">
        <div className="columnLandingPageItems">
          <div className="ChooseTheCategory">Choose The Category</div>
          <div className="CategoryBar">
            <div
              className="CategoryImageBox"
              onClick={() => {
                setFilter("Dog"), handleScrollToDiv();
              }}
            >
              <img src="/src/assets/Benek.jpg" className="categoryPicture" />
              <div className="categoryNameOverlay">
                <div className="categoryName">DOG</div>
              </div>
            </div>
            <div
              className="CategoryImageBox"
              onClick={() => {
                setFilter("Cat"), handleScrollToDiv();
              }}
            >
              <img src="/src/assets/Tomasz.jpg" className="categoryPicture" />
              <div className="categoryNameOverlay">
                <div className="categoryName">CAT</div>
              </div>
            </div>
            <div
              className="CategoryImageBox"
              onClick={() => {
                setFilter("Reptile"), handleScrollToDiv();
              }}
            >
              <img src="/src/assets/Edmund.jpg" className="categoryPicture" />
              <div className="categoryNameOverlay">
                <div className="categoryName">REPTILE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SavingSpecies />
      {/* <ImportantInfo /> */}

      <div
        className="landingPage"
        style={{
          backgroundColor: "rgb(149, 193, 246)",
          paddingBottom: "85px",
        }}
      >
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
            <div className="numItems">Number Of Items : {itemCount}</div>
          </div>

          <div className="productLayout" ref={buyingSectionRef}>
            {products
              .filter((product) => product.id == filter || filter == "All")
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
      <Footer />
    </>
  );
}

export default App;
