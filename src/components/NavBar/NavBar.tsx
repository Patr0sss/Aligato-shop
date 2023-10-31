import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Hamburger from "../../assets/Hamburger";
import { auth } from "../../config/firebase";
import { UserCredential, signOut } from "firebase/auth";
import BarIcon from "../barWithIcon/BarIcon";
import LogOut from "../../assets/LogOut";
import Cart from "../../assets/Cart";
import MyProfile from "../../assets/MyProfile";
import AboutUs from "../../assets/AboutUs";
import LoginIcon from "../../assets/Login";
import ShoppingCart from "../../assets/ShoppingCart";
import CartPop from "../Cart/CartPop";

function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [hamburgerIncrement, setHamburgerIncrement] = useState(0);

  const handleLogOut = async () => {
    await signOut(auth);
    localStorage.removeItem("userData");
    setHamburgerOpen(false);
  };

  const [userData, setUserData] = useState<UserCredential | null>(null);
  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");

    if (userDataLocal) {
      // console.log(JSON.parse(userDataLocal));
      setUserData(JSON.parse(userDataLocal));
    }
  }, []);

  return (
    <div className="NavBar">
      <div className="profileButton hideDesktop"></div>

      <div style={{ width: "50%" }} className="brandName">
        <Link to="/" className="brandName">
          Aligato
        </Link>
      </div>
      <div
        className="profileButton"
        // style={{ backgroundColor: "green" }}
      >
        <CartPop />
        <Link
          to={userData ? "/profilePage" : "/loginPage"}
          style={{ color: "black" }}
        >
          <div className="smallProfileButton">
            {userData ? (
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
          {auth.currentUser ? "UserName" : null}
        </div>

        <div className="hamburgerContent">
          <BarIcon
            className={
              hamburgerOpen
                ? auth.currentUser
                  ? "hamItem"
                  : "hamItem green"
                : "displayNone"
            }
            text={userData ? "My Profile" : "Login"}
            icon={userData ? <MyProfile /> : <LoginIcon />}
            link={userData ? "/profilePage" : "/loginPage"}
          />
          {userData ? (
            <BarIcon
              className={hamburgerOpen ? "hamItem" : "displayNone"}
              text="Cart"
              icon={<Cart />}
            />
          ) : null}

          <BarIcon
            className={hamburgerOpen ? "hamItem" : "displayNone"}
            text="About Us"
            icon={<AboutUs />}
          />
          {userData ? (
            <BarIcon
              className={hamburgerOpen ? "hamItem logOut" : "displayNone"}
              text="Log Out"
              icon={<LogOut />}
              onClick={() => {
                handleLogOut();
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
