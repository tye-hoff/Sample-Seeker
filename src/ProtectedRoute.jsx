import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
// import Profile from "./components/Profile/Profile";

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
