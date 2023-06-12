// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useBookedClass from "../../../hooks/useBookedClass";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  // const [axiosSecure] = useAxiosSecure();
  // const {user} = useAuth();
  const [bookedClass, refetch] = useBookedClass();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sportwing-server.vercel.app/bookedClass/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your Booked Class Has Been Deleted.",
                "success"
              );
            }
          });
      }
    });
  };

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
              <tr key={classData._id}>
                <td>{index + 1}</td>
                <td>{classData.className}</td>
                <td>{classData.instructorName}</td>
                <td>${classData.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${classData._id}`}>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(classData)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
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
