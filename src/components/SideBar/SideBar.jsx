import "./SideBar.css";
import defaultAvatar from "../../assets/defaultAvatar.avif";

function SideBar() {
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
