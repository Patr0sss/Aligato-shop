import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useUserInfo } from "../../contexts/UserContext";

function LoginPage() {
  const [loggingMode, setLoggingMode] = useState("Login");
  const [animationRegistration, setAnimationRegistration] = useState(false);
  const [animationReverse, setAnimationReverse] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const navigate = useNavigate();
  // const { userInfo } = useUserInfo();

  const createUser = async () => {
    if (
      password === repeatPassword &&
      password !== "" &&
      regexEmail.test(email)
    ) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);

        if (auth.currentUser?.email) {
          const userDocRef = doc(db, "users", auth.currentUser.uid);
          const userCartRef = collection(userDocRef, "cart");
          const newCartDocumentRef = doc(userCartRef);

          await setDoc(newCartDocumentRef, {});

          // const usersCartsRe = doc(db, "usersCarts", auth.currentUser.uid);
          // await setDoc(usersCartsRe, {});
        }

        navigate("/");
      } catch (error) {
        console.log(error);
        navigate("/loginPage");
      }
    }
  };

  const handleLogin = async () => {
    try {
      loginUser(email, password);
    } catch (error) {
      navigate("/loginPage");
    }
  };

  const { loginUser, userInfo } = useUserInfo();

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
                  // loggingMode == "Register" ? createUser() : handleLogin();
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
