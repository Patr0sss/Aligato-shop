import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Hamburger from "../../assets/Hamburger";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import BarIcon from "../barWithIcon/BarIcon";
import Arrow from "../../assets/Arrow";
import LogOut from "../../assets/LogOut";
import Cart from "../../assets/Cart";
import MyProfile from "../../assets/MyProfile";
import AboutUs from "../../assets/AboutUs";
import LoginIcon from "../../assets/Login";

function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [hamburgerIncrement, setHamburgerIncrement] = useState(0);

  const handleLogOut = async () => {
    await signOut(auth);
    setHamburgerOpen(false);
  };

  return (
    <div className="NavBar">
      <div className="profileButton hideDesktop"></div>

      <div style={{ width: "50%" }} className="brandName">
        <Link to="/" className="brandName">
          Aligato
        </Link>
      </div>
      <div className="profileButton">
        <Link
          to={auth.currentUser ? "/profilePage" : "/loginPage"}
          style={{ color: "black" }}
        >
          <div className="smallProfileButton">
            {auth.currentUser ? (
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
        {/* {hamburgerOpen ? (
          <>
            <div className="hamItem">{auth.currentUser ? "UserName" : ""}</div>

            <Link
              to={auth.currentUser ? "/profilePage" : "/loginPage"}
              className="hamItem"
              style={{ color: "white" }}
            >
              {auth.currentUser ? "My Profile" : "Login"}
            </Link>

            <div className="hamItem">Cart</div>
            <div className="hamItem">About Us</div>
            {auth.currentUser ? (
              <div
                className="hamItem logOut "
                onClick={() => {
                  handleLogOut();
                  console.log(auth.currentUser);
                }}
              >
                Log Out
              </div>
            ) : null}
          </>
        ) : null} */}

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
            // text="My Profile"
            text={auth.currentUser ? "My Profile" : "Login"}
            // icon={<MyProfile />}
            icon={auth.currentUser ? <MyProfile /> : <LoginIcon />}
            link={auth.currentUser ? "/profilePage" : "/loginPage"}
          />
          {auth.currentUser ? (
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
          {auth.currentUser ? (
            <BarIcon
              className={hamburgerOpen ? "hamItem logOut" : "displayNone"}
              text="Log Out"
              icon={<LogOut />}
              onClick={() => {
                handleLogOut();
                console.log(auth.currentUser);
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
