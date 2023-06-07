import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profilePage/ProfilePage.tsx";
import App from "./App.tsx";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RootRouter;
