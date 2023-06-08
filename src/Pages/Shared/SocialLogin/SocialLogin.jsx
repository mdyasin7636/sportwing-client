import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch( error => console.log(error))
    }

    return (
        <div>
            <div className="text-center mb-4 -mt-5">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"> <span> <FaGoogle/> </span> </button>
          </div>
        </div>
    );
};

export default SocialLogin;