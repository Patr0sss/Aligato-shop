import NavBar from "../../components/NavBar/NavBar";
import "./ProfilePage.css";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const handleLogOut = async () => {
  await signOut(auth);
};

function ProfilePage() {
  return (
    <div className="profilePage">
      <NavBar />
      <div className="profileBox">
        <div className="profilePageCard">
          <div className="userData">
            <div>{auth.currentUser?.email}</div>
            <div>{auth.currentUser?.metadata.creationTime?.slice(5, -7)}</div>
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
      </div>
    </div>
  );
}

export default ProfilePage;
