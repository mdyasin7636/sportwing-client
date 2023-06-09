/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm();
  const {signIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  
  const onSubmit = data => {
    signIn(data.email, data.password)
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
    .catch(error => {
      console.log(error);
    })
    console.log(data)
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered pr-[121px]"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <RiEyeOffLine className="h-5 w-5" />
                  ) : (
                    <RiEyeLine className="h-5 w-5" />
                  )}
                </div>
              </div>
              <label className="label font-semibold">
                Don't have an account?
                <Link className="link" to="/register">
                  Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div className="divider">OR</div>
          </form>
          
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;


