import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
interface userProps {
  uid: string;
  email: string;
}

interface UserProvider {
  userInfo: userProps;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  setUser: (uid: string, email: string) => void;
}
interface userProviderProps {
  children: ReactNode;
}
const UserProvider = createContext({} as UserProvider);

export const useUserInfo = () => {
  return useContext(UserProvider);
};
export const UserContext = ({ children }: userProviderProps) => {
  const [userInfo, setUserInfo] = useState<userProps>({ uid: "", email: "" });

  const loginUser = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    setUserInfo({
      uid: user.user.uid,
      email: user.user.email != null ? user.user.email : "",
    });
    navigate("/");
  };
  const navigate = useNavigate();

  const logoutUser = async () => {
    await signOut(auth);

    setUserInfo({ uid: "", email: "" });
    navigate("/loginPage");
  };

  const setUser = (uid: string, email: string) => {
    setUserInfo({ uid: uid, email: email });
  };
  return (
    <UserProvider.Provider value={{ loginUser, logoutUser, userInfo, setUser }}>
      {children}
    </UserProvider.Provider>
  );
};
