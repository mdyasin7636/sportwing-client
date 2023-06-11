import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClasses = () => {

  const {user} = useAuth();

  const [axiosSecure] = useAxiosSecure();
  
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const filteredClasses = classes.filter(
    (classItem) => classItem.instructorEmail === user.email
  );
  
  return (
    <div>
      {filteredClasses.map((classItem) => (
        <div key={classItem._id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Class Name: {classItem.className}</h2>
            <p>Price: {classItem.price}</p>
            {/* <p>Enrolled Students: {classItem.enrolledStudents}</p> */}
            <p>Status: {classItem.status}</p>
            {classItem.status !== "pending" && classItem.status !== "approved" && (
              <p>Feedback: {classItem.feedback}</p>
            )}
            <div className="card-actions justify-start">
              <button className="btn btn-xs">Update</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
