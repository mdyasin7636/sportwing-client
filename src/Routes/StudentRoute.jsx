import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const StudentRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isStudent, isStudentLoading] = useAdmin();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isStudent) {
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default StudentRoute;