import { useEffect, useState } from "react";
import "./CartPop.css";
import ShoppingCart from "../../assets/ShoppingCart";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { useUserInfo } from "../../contexts/UserContext";
import { db } from "../../config/firebase";

interface NavBarProps {
  products: DocumentData[];
}

type cartItemBar = {
  name: string;
  picture: string;
  quantity: number;
  id: string;
  price: string;
};

function CartPop({ products }: NavBarProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const [cartOpen, setCartOpen] = useState(false);
  const { getCartQuantity } = useShoppingCart();
  const cartItems = useShoppingCart().cartItems;
  const bars: cartItemBar[] = [];
  const [barsss, setBarsss] = useState<cartItemBar[]>();
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    const cartItemIds = cartItems.map((item) => item.id);
    const cartTotalPrice = products.reduce((total, product) => {
      if (cartItemIds.includes(product.id)) {
        const cartItem = cartItems.find((item) => item.id === product.id);
        if (cartItem) {
          total += product.price * cartItem.quantity;
          const item: cartItemBar = {
            name: product.name,
            picture: product.picture,
            quantity: cartItem.quantity,
            id: cartItem.id,
            price: product.price,
          };

          bars.push(item);
          setBarsss(bars);
          updateCartFirebase(item);
        }
      }

      return total;
    }, 0);
    setCartPrice(cartTotalPrice);

    if (cartItems.length === 0) {
      setBarsss([]);
    }

    // fetchUsersCart();
  }, [cartItems, products]);

  const updateCartFirebase = async (item: cartItemBar) => {
    if (userInfo.uid) {
      const cartItemRef = doc(
        db,
        "users",
        userInfo.uid,
        "cart",
        JSON.stringify(item.name)
      );

      await setDoc(cartItemRef, { item });
    }
  };
  const { userInfo } = useUserInfo();

  // const ker: cartItemBar[] = [];
  // const [fIt, setFIt] = useState<cartItemBar[]>();
  // const fetchUsersCart = async () => {
  //   if (userInfo.uid) {
  //     const userCartRef = collection(doc(db, "users", userInfo.uid), "cart");
  //     const cartSnapshot = await getDocs(userCartRef);

  //     cartSnapshot.forEach((doc) => {
  //       if (doc.exists() && doc.data().item !== undefined) {
  //         ker.push(doc.data().item);
  //       }
  //     });
  //     setFIt(ker);
  //   }
  // };

  const deleteDocFirebase = async (item: cartItemBar) => {
    removeFromCart(item.id);
    const cartItemRef = doc(
      db,
      "users",
      userInfo.uid,
      "cart",
      JSON.stringify(item.name)
    );
    deleteDoc(cartItemRef);
  };

  return (
    <>
      <div
        className="cartIcon"
        style={
          userInfo.uid
            ? cartOpen
              ? { border: "2px solid #50C878" }
              : {
                  border: "2px solid transparent",
                }
            : { display: "none" }
        }
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <ShoppingCart fill={cartOpen ? "#50C878" : "white"} />
      </div>

      {cartOpen ? (
        <div className="cartPopUp">
          <div className="cartPopUpTop">
            <div>Number Of Items In Cart : {getCartQuantity}</div>
            <div>Total Price : {cartPrice}$</div>
          </div>
          <div className="cartBarsBox">
            {barsss?.map((bar) => (
              <div className="cartItemBar" key={bar.id}>
                <div className="cartItemBarLeft">
                  <img
                    src={"/src/productIcons/" + bar.picture + ".png"}
                    width="20%"
                    aspect-ratio="1/1"
                  />
                  <div style={{ width: "80%" }}>{bar.name}</div>
                </div>

                <div className="cartItemBarRight">
                  <div
                    style={{ fontSize: "2.8rem" }}
                    onClick={() => {
                      bar.quantity == 1
                        ? deleteDocFirebase(bar)
                        : decreaseCartQuantity(bar.id);
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    {bar.quantity}
                  </div>
                  <div
                    style={{ fontSize: "2.2rem" }}
                    onClick={() => increaseCartQuantity(bar.id, 1)}
                  >
                    +
                  </div>
                </div>
              </div>
            ))}
            {/* {fIt?.map((bar) => (
              <div className="cartItemBar" key={bar.id}>
                <div className="cartItemBarLeft">
                  <img
                    src={"/src/productIcons/" + bar.picture + ".png"}
                    width="20%"
                    aspect-ratio="1/1"
                  />
                  <div>{bar.name}</div>
                </div>

                <div className="cartItemBarRight">
                  <div
                    style={{ fontSize: "2.8rem" }}
                    onClick={() => {
                      bar.quantity == 1
                        ? deleteDocFirebase(bar)
                        : decreaseCartQuantity(bar.id);
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    {bar.quantity}
                  </div>
                  <div
                    style={{ fontSize: "2.2rem" }}
                    onClick={() => increaseCartQuantity(bar.id, 1)}
                  >
                    +
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      ) : null}
    </>
  );
}
export default CartPop;
