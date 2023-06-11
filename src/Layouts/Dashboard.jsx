import { Link, Outlet } from "react-router-dom";
import { FaUsers,  } from 'react-icons/fa';
import { SiGoogleclassroom,  } from 'react-icons/si';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

  // TODO:
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
     <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      
      {
        isAdmin ? <>
        
        <li>
        <Link to='/dashboard/manageUsers'><FaUsers/>Manage Users</Link>
      </li>
      <li>
        <Link to='/dashboard/manageClasses'><SiGoogleclassroom/>Manage Classes</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
        
        </> : isInstructor ? <>
        
        <li>
        <Link to='/dashboard/addClass'>Add Class</Link>
      </li>
      <li>
        <Link to='/dashboard/myClasses'>My Classes</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>

        </> : <>
        
        <li>
        <Link to='/dashboard/mySelectedClasses'>My Selected Classes</Link>
      </li>
      <li>
        <Link to='/dashboard/myEnrolledClasses'>My Enrolled Classes</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
        
        </>
      }

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;