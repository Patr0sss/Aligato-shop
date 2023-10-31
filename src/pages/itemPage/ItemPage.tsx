import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ItemPage.css";
import { useLocation } from "react-router-dom";
import Arrow from "../../assets/Arrow";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

function ItemPage() {
  const location = useLocation();
  const newData = location.state?.data;
  const [quantity, setQuantity] = useState(1);
  const [openQuantity, setOpenQuantity] = useState(false);
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getCart,
  } = useShoppingCart();
  // const Squantityy = getItemQuantity(newData.id);

  // const [cart, setCart] = useState<string | null>(null);
  // useEffect(() => {
  //   // const cart = localStorage.getItem("shoppingCart");
  //   setCart(localStorage.getItem("shoppingCart"));
  // }, [setCart]);

  const cartItems = useShoppingCart().cartItems;
  // console.log(cartItems);

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
            onClick={() => getItemQuantity}
          />
          {/* <div className="itemPicture">{JSON.stringify(cartItems)}</div> */}
        </div>
        <div className="rightSide">
          <div className="boxRightSide">
            <div className="nameIP">{newData.name}</div>

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
              <div className="dollarPrice">${newData.price * quantity}</div>
            </div>
            <div className="addCart">
              <div
                className="cartButton"
                onClick={() => increaseCartQuantity(newData.id, quantity)}
              >
                add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemPage;
