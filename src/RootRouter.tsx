import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "./pages/profilePage/ProfilePage.tsx";
import App from "./App.tsx";
import ItemPage from "./pages/itemPage/ItemPage.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import { DocumentData, getDocs, collection } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config/firebase.ts";
import { UserCredential } from "firebase/auth";
import { UserContext, useUserInfo } from "./contexts/UserContext.tsx";
import AuthGuard from "./components/AuthGuard/AuthGuard.tsx";
import CartPage from "./pages/cartPage/CartPage.tsx";

const RootRouter = () => {
  const [prodMessage, setProdMessage] = useState("Loading ...");
  const [products, setProducts] = useState<DocumentData[]>([]);
  const fetchAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      setProducts((currentProducts) => [
        ...currentProducts,
        {
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
          spiecies: doc.data().spiecies,
          picture: doc.data().picture,
        },
      ]);
      setProdMessage("Brak Produktów ...");
    });
  };
  useEffect(() => {
    setProducts([]);
    fetchAllProducts();
  }, []);

  return (
    <BrowserRouter>
      <UserContext>
        <ShoppingCartProvider>
          <NavBar products={products} />
          <Routes>
            <Route path="/" element={<App />} />
            <Route element={<AuthGuard />}>
              <Route path="/profilepage" element={<ProfilePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>

            <Route path="/loginPage" element={<LoginPage />} />
            <Route path=":id" element={<ItemPage />} />
          </Routes>
        </ShoppingCartProvider>
      </UserContext>
    </BrowserRouter>
  );
};
export default RootRouter;
