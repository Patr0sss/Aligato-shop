import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [loggingMode, setLoggingMode] = useState("Login");
  const [animationRegistration, setAnimationRegistration] = useState(false);
  const [animationReverse, setAnimationReverse] = useState(false);
  return (
    <div className="loginPage">
      <div className="LoginDivForTriangle">
        <div className="boxForTriangle">
          <div className="loginPageBigTriangle">
            <div className="loginPageSmallTriangle">
              <Link to="/" className="AbsoluteBrand">
                Aligato
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="boxDownLoginPage">
        <div
          className={
            animationRegistration
              ? "loginCardLeft loginLeftCardAnimation"
              : animationReverse
              ? "loginCardLeft loginRightCardAnimationReverse"
              : "loginCardLeft"
          }
        >
          <div className="leftBoxForShadow">
            <div className="leftLoginBar1">{loggingMode}</div>
            <div className="leftLoginBar2">
              <input placeholder="Email" className="logPageInput"></input>
              <input
                placeholder="Password"
                type="password"
                className="logPageInput"
              ></input>
              <input
                placeholder="Repeat Password"
                type="password"
                className={
                  loggingMode == "Register" ? "logPageInput" : "killHim"
                }
              ></input>
            </div>
            <div className="logRegBox">
              <div className="logRegButton leftLoginBar1 leftLoginBar3">
                {loggingMode}
              </div>
              <div
                className="leftLoginBar1 leftLoginBar3 logRegButton"
                onClick={() => {
                  setAnimationRegistration(!animationRegistration);
                  setLoggingMode(
                    loggingMode === "Login" ? "Register" : "Login"
                  );
                  setAnimationReverse(true);
                }}
              >
                {loggingMode == "Login"
                  ? "Create an account"
                  : "Click here to login"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            animationRegistration
              ? "loginCardRight loginRightCardAnimation"
              : animationReverse
              ? "loginCardRight loginLeftCardAnimationReverse"
              : "loginCardRight"
          }
        >
          <img src="/src/assets/bear.jpg" className="loginPageImage1"></img>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
