import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../contexts/UserContext";

function ProfilePage() {
  const { logoutUser, userInfo } = useUserInfo();

  return (
    <div className="profilePage">
      <div className="profileBox">
        <div className="profilePageCard">
          <div className="userData">
            <div className="profilePageLine">Email : {userInfo.email}</div>
          </div>
          <div className="userLogOut">
            <Link
              to="/"
              className="logoutButtonPP"
              onClick={() => {
                logoutUser();
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
