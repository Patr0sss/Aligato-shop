import { useState } from "react";
import Elephant from "../../assets/Elephant";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="NavBar">
      <div style={{ width: "50%" }} className="brandName">
        <Link to="/" className="brandName">
          Aligato
          {/* <Elephant /> */}
        </Link>
      </div>

      {/* <div className="LoginDivForTriangle2">
        <div className="boxForTriangle2">
          <div className="loginPageBigTriangle2">
            <div className="loginPageSmallTriangle2">
              <Link to="/" className="AbsoluteBrand">
                Aligato
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="profileButton">
        <Link
          to={isLoggedIn ? "/profilePage" : "/loginPage"}
          style={{ color: "black" }}
        >
          <div className="smallProfileButton">
            {isLoggedIn ? <div>Your Profile</div> : <div>Login</div>}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
