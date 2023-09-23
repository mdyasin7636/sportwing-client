import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../../src/assets/logo.png'

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li className="my-5">
        <Link className="hover:text-red-400 duration-300 font-semibold text-lg" to="/">Home</Link>
      </li>
      <li className="font-semibold text-lg md:ml-8 my-5">
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className="font-semibold text-lg md:ml-8 my-5">
        <Link to="/classes">Classes</Link>
      </li>
      {user ? (
        <li className="font-semibold text-lg md:ml-8 my-5">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    // <div className="navbar bg-base-200">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //   {navOptions}
    //   </ul>
    //     </div>
    //     <Link to="/" className="md:ml-4">
    //       <div className="flex items-center">
    //         <div className="w-9 mt-1">
    //           <img src={logo} />
    //         </div>
    //         <div>
    //           <p className="text-2xl font-extrabold">SportWing</p>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">{navOptions}</ul>
    //   </div>
    //   <div className="navbar-end">
    //     <div className="mr-4">
    //       {user ? (
    //         <div>
    //           <img className="w-12 rounded-full" src={user?.photoURL} />
    //         </div>
    //       ) : (
    //         <Link className="btn btn-outline" to="/login">
    //           Login
    //         </Link>
    //       )}
    //     </div>
    //     <div className="mr-2">
    //       {user && (
    //         <button className="btn btn-outline" onClick={handleLogout}>
    //           Logout
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between bg-white md:py-1 py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center text-gray-800">
          <span className="w-9">
               <img src={logo} />
          </span>
          SportWing
        </div>
        <div>
        <ul className="md:flex md:items-center absolute md:static">
        {navOptions}
        </ul>
        </div>
        <div className="md:flex md:items-center">
        <div className="md:mr-5 md:my-0 my-5">
          {user ? (
            <div>
              <img className="w-12 rounded-full" src={user?.photoURL} />
            </div>
          ) : (
            <Link className="btn btn-outline" to="/login">
              Login
            </Link>
          )}
        </div>
        <div className="">
          {user && (
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
