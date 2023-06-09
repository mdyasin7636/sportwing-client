import { FaGoogle } from 'react-icons/fa';
import useAuth from "../../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Login Successful',
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace: true});
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