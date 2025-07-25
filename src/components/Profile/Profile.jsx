import SideBar from "../SideBar/SideBar";
import UserSampleSection from "../UserSampleSection/UserSampleSection";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile({
  onEditProfileClick,
  onLogoutClick,
  samplesList,
  onAddSampleClick,
  mainHeader,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);

  const handleEditBtnClick = () => {
    onEditProfileClick();
  };

  const handleLogoutClick = () => {
    onLogoutClick();
  };

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfileClick={onEditProfileClick} />
        <button className="profile__edit-btn" onClick={handleEditBtnClick}>
          Edit profile data
        </button>
        <button className="profile__logout-btn" onClick={handleLogoutClick}>
          Log out
        </button>
      </section>

      <section className="profile__samples">
        {samplesList && (
          <UserSampleSection
            samplesList={samplesList}
            onAddSampleClick={onAddSampleClick}
            mainHeader={mainHeader}
          />
        )}
      </section>
    </div>
  );
}

export default Profile;
