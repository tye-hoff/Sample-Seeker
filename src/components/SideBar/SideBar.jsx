import "./SideBar.css";

function SideBar() {
  //   const { currentUser } = useContext(CurrentUserContext);
  //   console.log(currentUser?.avatar);

  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src="" alt="Default__avatar" />
      <p className="sidebar__username">Current User</p>
    </div>
  );
}

export default SideBar;
