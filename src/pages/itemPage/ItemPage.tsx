import { useState } from "react";
import "./ItemPage.css";
import { useLocation } from "react-router-dom";
import Arrow from "../../assets/Arrow";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { useUserInfo } from "../../contexts/UserContext";

function ItemPage() {
  const location = useLocation();
  const productData = location.state?.data;
  const [quantity, setQuantity] = useState(1);
  const [openQuantity, setOpenQuantity] = useState(false);
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { increaseCartQuantity } = useShoppingCart();
  const { userInfo } = useUserInfo();
  const [notLoggedError, setNotLoggedError] = useState("");

  return (
    <div className="itemPage">
      <div className="itemBlock">
        <div className="leftSide">
          <img
            src={"/productIcons/" + productData.picture + ".png"}
            width="40%"
            aspect-ratio="1/1"
            className="itemPicture"
          />
        </div>
        <div className="rightSide">
          <div className="boxRightSide">
            <div className="nameIP">{productData.name}</div>

            <div className="midBox">
              <div
                className={
                  openQuantity === false
                    ? "quantityChosen quantityChosenNotChosen"
                    : "quantityChosen"
                }
              >
                {quantity}x
                <div
                  onClick={() => {
                    setOpenQuantity(!openQuantity);
                  }}
                >
                  <div className={openQuantity == false ? "rotateArrow" : ""}>
                    <Arrow width="15px" />
                  </div>
                </div>
                {openQuantity === true ? (
                  <div
                    className="rozsuwaneQuant"
                    onClick={() => {
                      setOpenQuantity(false);
                    }}
                  >
                    {quantityOptions.map((quanti) => (
                      <div
                        className="singleQuanti"
                        onClick={() => {
                          setQuantity(quanti);
                        }}
                      >
                        {quanti}x
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="quantityChosenMobile">
                <div
                  className="sign"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </div>
                {quantity}x
                <div
                  className="sign"
                  onClick={() => {
                    if (quantity < 10) {
                      setQuantity(quantity + 1);
                    }
                  }}
                >
                  +
                </div>
              </div>
              <div className="dollarPrice">${productData.price * quantity}</div>
            </div>
            <div className="addCart">
              <div
                className="cartButton"
                onClick={() => {
                  userInfo.uid
                    ? increaseCartQuantity(productData.id, quantity)
                    : setNotLoggedError("You have to login !");
                }}
              >
                add to cart
              </div>
            </div>
            <div className="notLoggedError">{notLoggedError}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemPage;
