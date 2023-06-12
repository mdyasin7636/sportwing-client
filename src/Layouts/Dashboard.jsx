import { Link, Outlet } from "react-router-dom";
import { FaUsers,  } from 'react-icons/fa';
import { SiGoogleclassroom,  } from 'react-icons/si';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { AiOutlineHome, AiOutlineProfile, AiOutlineBook } from "react-icons/ai";
import { MdOutlinePayment, MdAssignmentTurnedIn, MdAssignmentInd } from "react-icons/md";

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
        
        <li className="font-semibold text-lg">
        <Link to='/dashboard/manageUsers'><FaUsers/>Manage Users</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to='/dashboard/manageClasses'><SiGoogleclassroom/>Manage Classes</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to='/'> <AiOutlineHome/> Home</Link>
      </li>
        
        </> : isInstructor ? <>
        
        <li className="font-semibold text-lg">
        <Link to='/dashboard/addClass'><AiOutlineBook/>Add Class</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to='/dashboard/myClasses'><AiOutlineProfile/>My Classes</Link>
      </li>
      <li className="font-semibold text-lg">
      <Link to='/'> <AiOutlineHome/> Home</Link>
      </li>

        </> : <>
        
        <li className="font-semibold text-lg">
        <Link to='/dashboard/mySelectedClasses'><MdAssignmentTurnedIn/>My Selected Classes</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to='/dashboard/myEnrolledClasses'><MdAssignmentInd/>My Enrolled Classes</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to='/dashboard/paymentHistory'><MdOutlinePayment/>Payment History</Link>
      </li>
      <li className="font-semibold text-lg">
      <Link to='/'> <AiOutlineHome/> Home</Link>
      </li>
        </>
      }

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;