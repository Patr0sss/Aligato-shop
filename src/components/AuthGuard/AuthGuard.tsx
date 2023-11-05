import { Navigate, Outlet } from "react-router-dom";
import { useUserInfo } from "../../contexts/UserContext";

function AuthGuard() {
  const { userInfo } = useUserInfo();

  return userInfo.uid ? <Outlet /> : <Navigate to="/loginPage" />;
}
export default AuthGuard;
