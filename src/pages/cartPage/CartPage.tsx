import { useEffect, useState } from "react";
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

function CartPage() {
  return <div></div>;
}
export default CartPage;
