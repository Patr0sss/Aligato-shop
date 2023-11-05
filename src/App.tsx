import { useEffect, useState } from "react";
import "./App.css";
import ItemCard from "./components/itemCard/ItemCard";
import Footer from "./components/footer/Footer";
import SavingSpecies from "./components/SavingSpecies/SavingSpecies";
import Magnifier from "./assets/Magnifier";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  // getting products list from firebase
  const [prodMessage, setProdMessage] = useState("Loading ...");
  const [products, setProducts] = useState<DocumentData[]>([]);
  const fetchAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      setProducts((currentProducts) => [
        ...currentProducts,
        {
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
          spiecies: doc.data().spiecies,
          picture: doc.data().picture,
        },
      ]);
      setProdMessage("Brak Produktów ...");
    });
  };
  useEffect(() => {
    setProducts([]);
    fetchAllProducts();
  }, []);
  // -------------------------------------------------

  const filteringOptions = ["All", "Dog", "Cat", "Reptile", "Special"];
  const [filter, setFilter] = useState("All");

  const [inputValue, setInputValue] = useState("");

  function getSearchBarData(SBdata: { target: { value: string } }) {
    if (SBdata.target.value.length == 0) {
      setFilter("All");
    }

    setInputValue(SBdata.target.value);
  }

  const filteredProductss = products.filter(
    (product) =>
      (product.spiecies == filter || filter == "All") &&
      product.name.includes(inputValue)
  );

  return (
    <>
      <div
        className="landingPage"
        style={{
          paddingBottom: "85px",
        }}
      >
        <div className="columnLandingPageItems">
          <div className="filterAndCount">
            <div className="filteringOptions">
              {filteringOptions.map((option) => (
                <div
                  key={option}
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
            <div className="searchBar">
              <input
                placeholder="Czego Szukasz ?"
                className="buyingInput"
                onChange={getSearchBarData}
              ></input>
              <div className="loopSearch">
                <Magnifier />
              </div>
            </div>

            <div className="numItems">
              Number Of Items : {filteredProductss.length}
            </div>
          </div>
          <div
            className="productLayout"
            style={
              filteredProductss.length == 0
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : {}
            }
          >
            {filteredProductss.length == 0 &&
            prodMessage == "Brak Produktów ..." ? (
              <div className="brakProduktow">{prodMessage}</div>
            ) : null}

            {filteredProductss.length == 0 &&
            prodMessage != "Brak Produktów ..." ? (
              <img
                className="pandaSmokeScreen"
                src="\src\assets\panda.gif"
                alt={prodMessage}
              />
            ) : null}
            {filteredProductss.slice(0, 8).map((product) => (
              <ItemCard
                key={product.id}
                name={product.name}
                id={product.id}
                price={product.price}
                picture={product.picture}
                data={product}
              />
            ))}
          </div>
        </div>
      </div>
      <SavingSpecies />
      <div
        className="landingPage"
        style={{
          paddingTop: filteredProductss.length > 7 ? "85px" : "0px",
          paddingBottom: filteredProductss.length > 7 ? "85px" : "0px",
        }}
      >
        <div
          className="productLayout"
          style={{
            width: "95%",
          }}
        >
          {filteredProductss.length > 7
            ? filteredProductss
                .slice(8)
                .map((product) => (
                  <ItemCard
                    key={product.id}
                    name={product.name}
                    id={product.id}
                    price={product.price}
                    picture={product.picture}
                    data={product}
                  />
                ))
            : null}
        </div>
        {/* <ImportantInfo /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
