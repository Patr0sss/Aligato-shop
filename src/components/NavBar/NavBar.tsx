import Husky from "../../assets/Husky";
import LogoPanda from "../../assets/LogoPanda";
import ShoppingCart from "../../assets/ShoppingCart";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      {/* <Link to="/"> */}
      <div className="brandName">
        Aligato
        <LogoPanda />
      </div>
      {/* </Link> */}
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
            Your Profile <Husky />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
