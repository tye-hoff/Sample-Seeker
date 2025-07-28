import { Navigate } from "react-router-dom";
// import Profile from "./components/Profile/Profile";

function ProtectedRoute({ children, isLoggedIn }) {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
