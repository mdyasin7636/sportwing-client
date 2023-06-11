// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
import useBookedClass from "../../../hooks/useBookedClass";

const MySelectedClasses = () => {

  // const [axiosSecure] = useAxiosSecure();
  // const {user} = useAuth();
  const [bookedClass] = useBookedClass()

  

  
    return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {bookedClass.map((classData, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{classData.className}</td>
      <td>{classData.instructorName}</td>
      <td>${classData.price}</td>
      <td>
        <button className="btn btn-ghost btn-xs">Pay</button>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
