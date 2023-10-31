import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import { collection, doc, setDoc } from "firebase/firestore";

function LoginPage() {
  const [loggingMode, setLoggingMode] = useState("Login");
  const [animationRegistration, setAnimationRegistration] = useState(false);
  const [animationReverse, setAnimationReverse] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const navigate = useNavigate();
  const createUser = async () => {
    if (
      password === repeatPassword &&
      password !== "" &&
      regexEmail.test(email)
    ) {
      try {
        const regData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (auth.currentUser?.email) {
          const userDocRef = doc(db, "users", auth.currentUser.uid);
          const userCartRef = collection(userDocRef, "cart");
          const newCartDocumentRef = doc(userCartRef, auth.currentUser.email);

          await setDoc(newCartDocumentRef, {
            // Dane dotyczące koszyka
          });
        }

        localStorage.setItem("userData", JSON.stringify(regData));
        navigate("/");
      } catch (error) {
        navigate("/loginPage");
      }
    }
  };

  const handleLogin = async () => {
    try {
      const daneLogowania = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("userData", JSON.stringify(daneLogowania));
      navigate("/");
    } catch (error) {
      navigate("/loginPage");
    }
  };

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
              <input
                placeholder="Email"
                className="logPageInput"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                placeholder="Password"
                type="password"
                className="logPageInput"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <input
                placeholder="Repeat Password"
                type="password"
                className={
                  loggingMode == "Register" ? "logPageInput" : "killHim"
                }
                onChange={(e) => setRepeatPassword(e.target.value)}
              ></input>
            </div>
            <div className="logRegBox">
              <div
                className="logRegButton leftLoginBar1 leftLoginBar3"
                onClick={() => {
                  loggingMode == "Register" ? createUser() : handleLogin();
                }}
              >
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
