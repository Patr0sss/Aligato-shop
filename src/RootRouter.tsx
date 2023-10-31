import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profilePage/ProfilePage.tsx";
import App from "./App.tsx";
import ItemPage from "./pages/itemPage/ItemPage.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.tsx";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path=":identifyID" element={<ItemPage />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};
export default RootRouter;
