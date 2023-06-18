import NavBar from "../../components/NavBar/NavBar";
import "./ItemPage.css";
import { useLocation } from "react-router-dom";

function ItemPage() {
  const location = useLocation();
  const newData = location.state?.data;

  return (
    <div className="itemPage">
      <NavBar />
      <div className="itemBlock">
        <div className="leftSide">
          <img
            src={"/src/productIcons/" + newData.picture + ".png"}
            width="40%"
            aspect-ratio="1/1"
            className="itemPicture"
          />
        </div>
        <div className="rightSide">
          <div className="boxRightSide">
            <div className="nameIP">{newData.name}</div>
            <div className="description">{newData.description}</div>
            <div className="priceIP">price : {newData.price} $</div>
            <div className="addCart">
              <div className="cartButton">buy</div>
              <div className="cartButton">add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemPage;
