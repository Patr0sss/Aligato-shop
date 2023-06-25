import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profilePage/ProfilePage.tsx";
import App from "./App.tsx";
import ItemPage from "./pages/itemPage/ItemPage.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path=":identifyID" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RootRouter;
