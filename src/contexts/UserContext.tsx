import { signInWithEmailAndPassword } from "firebase/auth";
import { ReactNode, createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

interface userProps {
  uid: string;
  email: string;
  createdDate: string;
}

interface UserProvider {
  userInfo: userProps;
  handleUser: (info: userProps) => void;
  logoutUser: () => void;
}
type userInfoProps = {
  children: ReactNode;
};

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const handleLogin = async () => {
//   await signInWithEmailAndPassword(auth, email, password);
//   //dane auth do use Contexta
//   navigate("/");
// };
const UserContext = createContext({});

export function useUserInfo() {
  return useContext(UserContext);
}
export function UserInfoProvider({ children }: userInfoProps) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
