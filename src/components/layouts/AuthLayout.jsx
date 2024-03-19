import { Navigate } from "react-router-dom";

function AuthLayout({ isSignedIn, children }) {
  if (!isSignedIn) return <Navigate to="/" />;
  else return <div>{children}</div>;
}

export default AuthLayout;