import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const UserRoute = ({ children }) => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  if (isAdmin || isInstructor) {
    return <Navigate to='/'></Navigate>
  }

  return <>{children}</>;
};

export default UserRoute;
