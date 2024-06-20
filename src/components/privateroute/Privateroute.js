import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../src/Firebase";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
        state={{ from: "/cart", message: "Please log in to access cart !!" }}
      />
    );
  } else {
    return children;
  }
};

export default Privateroute;
