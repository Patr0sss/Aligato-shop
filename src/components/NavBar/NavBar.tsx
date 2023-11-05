import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../../assets/Hamburger";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import BarIcon from "../barWithIcon/BarIcon";
import LogOut from "../../assets/LogOut";
import MyProfile from "../../assets/MyProfile";
import AboutUs from "../../assets/AboutUs";
import LoginIcon from "../../assets/Login";
import CartPop from "../Cart/CartPop";
import { DocumentData } from "firebase/firestore";
import { useUserInfo } from "../../contexts/UserContext";
import ShoppingCart from "../../assets/ShoppingCart";

interface NavBarProps {
  products: DocumentData[];
}

function NavBar({ products }: NavBarProps) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [hamburgerIncrement, setHamburgerIncrement] = useState(0);
  // const handleLogOut = async () => {
  //   await signOut(auth);
  //   localStorage.removeItem("userData");
  //   setHamburgerOpen(false);
  // };

  // const location = useLocation();
  // const [userData, setUserData] = useState<UserCredential | null>(null);
  // useEffect(() => {
  //   const userDataLocal = localStorage.getItem("userData");
  //   if (userDataLocal) {
  //     setUserData(JSON.parse(userDataLocal));
  //   }
  // }, []);

  const location = useLocation();
  const { userInfo, logoutUser } = useUserInfo();
  // const { logoutUser } = useUserInfo();
  const { setUser } = useUserInfo();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid, user.email != null ? user.email : "");
      }
    });
  }, [setUser]);

  return (
    <div
      className="NavBar"
      style={location.pathname === "/loginPage" ? { display: "none" } : {}}
    >
      <div className="profileButton hideDesktop"></div>

      <div style={{ width: "50%" }} className="brandName">
        <Link to="/" className="brandName">
          Aligato
        </Link>
      </div>
      <div className="profileButton">
        <CartPop products={products} />
        <Link
          to={userInfo.uid ? "/profilePage" : "/loginPage"}
          style={{ color: "black" }}
        >
          <div className="smallProfileButton">
            {userInfo.uid ? (
              <div className="hideMobile">Your Profile</div>
            ) : (
              <div className="hideMobile">Login</div>
            )}
          </div>
        </Link>
        <div
          className="hideDesktop"
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
            setHamburgerIncrement(hamburgerIncrement + 1);
          }}
        >
          <Hamburger />
        </div>
      </div>

      <div
        className={
          hamburgerOpen === true
            ? "hamburger hideDesktop"
            : hamburgerIncrement > 0
            ? "hamHide hideDesktop"
            : "hideDesktop hideMobile"
        }
      >
        <div className={hamburgerOpen ? "hamItem hamUser" : "displayNone"}>
          {userInfo.uid ? "UserName" : null}
        </div>

        <div className="hamburgerContent">
          <BarIcon
            className={
              hamburgerOpen
                ? userInfo.uid
                  ? "hamItem"
                  : "hamItem green"
                : "displayNone"
            }
            text={userInfo.uid ? "My Profile" : "Login"}
            icon={userInfo.uid ? <MyProfile /> : <LoginIcon />}
            link={userInfo.uid ? "/profilePage" : "/loginPage"}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          />
          {userInfo.uid ? (
            <BarIcon
              className={hamburgerOpen ? "hamItem" : "displayNone"}
              text="Cart"
              icon={<ShoppingCart />}
              link={userInfo.uid ? "/cart" : "/loginPage"}
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            />
          ) : null}

          <BarIcon
            className={hamburgerOpen ? "hamItem" : "displayNone"}
            text="About Us"
            icon={<AboutUs />}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          />
          {userInfo.uid ? (
            <BarIcon
              className={hamburgerOpen ? "hamItem logOut" : "displayNone"}
              text="Log Out"
              icon={<LogOut />}
              onClick={() => {
                // handleLogOut();
                logoutUser();
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
