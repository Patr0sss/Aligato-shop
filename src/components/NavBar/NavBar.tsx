// import { useState } from "react";

// import Husky from "../../assets/Husky";
import Elephant from "../../assets/Elephant";
import LogoPanda from "../../assets/LogoPanda";
import ShoppingCart from "../../assets/ShoppingCart";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ searching = true }: { searching?: boolean }) {
  return (
    <div className="NavBar">
      <Link to="/" className="brandName">
        Aligato
        {/* <LogoPanda fill="black" /> */}
        <Elephant />
      </Link>
      {searching == true ? (
        <>
          <div className="searchingBar">
            <div className="wholeSearchingBar">
              <div className="ShoppingCart">
                <ShoppingCart width="25px" />
              </div>
              <input
                className="shoppingInput"
                placeholder="Czego szukasz ?"
              ></input>
            </div>
          </div>

          <div className="profileButton">
            <Link to="/profilepage" style={{ color: "black" }}>
              <div className="smallProfileButton">
                Your Profile
                {/* <Husky fill="#ffffff" /> */}
              </div>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default NavBar;
