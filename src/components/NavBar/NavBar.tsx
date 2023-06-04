import Husky from "../../assets/Husky";
import LogoPanda from "../../assets/LogoPanda";
import ShoppingCart from "../../assets/ShoppingCart";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="brandName">
        Aligato
        <LogoPanda />
      </div>

      <div className="searchingBar">
        <div className="wholeSearchingBar">
          <div className="ShoppingCart">
            <ShoppingCart />
          </div>
          <input
            className="shoppingInput"
            placeholder="Czego szukasz ?"
          ></input>
        </div>
        {/* <div className="sBarSvg">
          <ShoppingCart />
        </div>
        <input className="sBar" placeholder="Czego szukasz ?"></input> */}
      </div>

      <div className="profileButton">
        <div className="smallProfileButton">
          Your Profile <Husky />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
