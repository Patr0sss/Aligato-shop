import NavBar from "../../components/NavBar/NavBar";
import { app } from "../../config/firebase";
import "./ProfilePage.css";
import { UserCredential, getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfilePage() {
  const auth = getAuth(app);
  const creationDate = auth.currentUser?.metadata.creationTime?.slice(5, -7);
  if (creationDate) {
    localStorage.setItem("creationDate", creationDate);
  }

  const handleLogOut = async () => {
    localStorage.removeItem("userData");
    await signOut(auth);
  };

  const [userD, setUserD] = useState<UserCredential | null>(null);

  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");

    if (userDataLocal) {
      setUserD(JSON.parse(userDataLocal));
    }
  }, []);

  return (
    <div className="profilePage">
      <NavBar />
      <div className="profileBox">
        <div className="profilePageCard">
          <div className="userData">
            <div className="profilePageLine">Email : {userD?.user.email}</div>
            <div className="profilePageLine">
              Data Dołaczenia : {localStorage.getItem("creationDate")}
            </div>
          </div>
          <div className="userLogOut">
            <Link
              to="/loginPage"
              className="logoutButtonPP"
              onClick={() => {
                handleLogOut();
              }}
            >
              logout
            </Link>
          </div>
        </div>
        {/* <img src="\src\productIcons\dog2.png" className="profileFriend"></img> */}
      </div>
    </div>
  );
}

export default ProfilePage;
