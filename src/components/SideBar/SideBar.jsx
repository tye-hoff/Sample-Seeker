// import { useContext } from "react";
import "./SideBar.css";
import defaultAvatar from "../../assets/defaultAvatar.avif";

function SideBar() {
  // const { currentUser } = useContext(CurrentUserContext);
  // console.log(currentUser?.avatar);

  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={defaultAvatar}
        alt="Default__avatar"
      />
      <p className="sidebar__username">user name</p>
    </div>
  );
}

export default SideBar;
