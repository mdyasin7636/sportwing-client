import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {

  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleApprove = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, { status: "approved" });
      refetch();
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };
  

  const handleDeny = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, { status: "denied" });
      refetch();
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };


  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Information</th>
              <th>Instructor Information</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classItem.classImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classItem.className}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Name: {classItem.instructorName}
                  <br />
                  Email: {classItem.instructorEmail}
                </td>
                <td>{classItem.availableSeats}</td>
                <td>${classItem.price}</td>
                <td>{classItem.status}</td>
                <th>
                <button
                    className="btn btn-outline btn-xs my-1"
                    onClick={() => handleApprove(classItem._id)}
                    disabled={classItem.status !== "pending"}
                  >
                    Approve
                  </button>
                  <br />
                  <button
                    className="btn btn-outline btn-xs my-1"
                    onClick={() => handleDeny(classItem._id)}
                    disabled={classItem.status !== "pending"}
                  >
                    Deny
                  </button>
                  <br />
                  <button className="btn btn-outline btn-xs my-1">
                    Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
