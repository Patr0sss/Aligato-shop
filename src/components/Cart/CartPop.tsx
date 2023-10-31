import { useEffect, useState } from "react";
import "./CartPop.css";
import { UserCredential } from "firebase/auth";
import ShoppingCart from "../../assets/ShoppingCart";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { useLocation } from "react-router-dom";
import { DocumentData } from "firebase/firestore";

function CartPop() {
  const [userData, setUserD] = useState<UserCredential | null>(null);
  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");
    if (userDataLocal) {
      setUserD(JSON.parse(userDataLocal));
    }
  }, []);

  const [cartOpen, setCartOpen] = useState(false);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getCartQuantity,
  } = useShoppingCart();

  const cartItems = useShoppingCart().cartItems;
  //   const location = useLocation();
  //   const itemsData = location.state?.data;

  const [products, setProducts] = useState<DocumentData[]>([]);

  useEffect(() => {
    const productList = localStorage.getItem("productList");

    if (productList) {
      setProducts(JSON.parse(productList));
    }
  }, []);

  useEffect(() => {
    let cartPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (cartItems[i].id === products[j].id) {
          cartPrice += products[j].price * cartItems[i].quantity;
          localStorage.setItem("cartPrice", JSON.stringify(cartPrice));
        }
      }
    }

    if (cartItems.length === 0) {
      localStorage.setItem("cartPrice", "0");
    }
  }, [cartItems, products]);

  // useEffect(() => {
  //   const cartItemIds = cartItems.map((item) => item.id);
  //   const cartTotalPrice = products.reduce((total, product) => {
  //     if (cartItemIds.includes(product.id)) {
  //       const cartItem = cartItems.find((item) => item.id === product.id);
  //       if (cartItem) {
  //         total += product.price * cartItem.quantity;
  //       }
  //     }
  //     console.log("total" + total);
  //     return total;
  //   }, 0);

  //   localStorage.setItem("cartPrice", JSON.stringify(cartTotalPrice));
  // }, [cartItems, products]);

  return (
    <>
      <div
        className="cartIcon"
        style={userData ? {} : { display: "none" }}
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <ShoppingCart />
      </div>

      {cartOpen ? (
        <div className="cartPopUp">
          <div className="cartPopUpTop">
            <div>Number of items in cart : {getCartQuantity}</div>
            <div>
              Total price :{" "}
              {localStorage.getItem("cartPrice")
                ? localStorage.getItem("cartPrice")
                : 0}
              $
            </div>
          </div>
          {/* <div>{JSON.stringify(cartItems)}</div> */}
        </div>
      ) : null}
    </>
  );
}
export default CartPop;
