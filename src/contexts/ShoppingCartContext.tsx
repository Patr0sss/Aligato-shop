import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string, quant: number) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  getCartQuantity: number;
  cartItems: CartItem[];
  getCart: (id: CartItem[]) => void;
};

type CartItem = {
  id: string;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shoppingCart",
    []
  );

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: string, quant: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        // console.log([...currItems, { id, quantity: quant }]);
        // localStorage.setItem("cart", JSON.stringify(cartItems));
        return [...currItems, { id, quantity: quant }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            // localStorage.setItem("cart", JSON.stringify(cartItems));
            return { ...item, quantity: item.quantity + quant };
          } else {
            // localStorage.setItem("cart", JSON.stringify(cartItems));
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function getCart(id: CartItem[]) {
    console.log(cartItems);
  }

  const getCartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        getCartQuantity,
        cartItems,
        getCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
