import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleBookClass = (item) => {
    if (user && user.email) {
      const bookedItem = {
        bookedClassId: item._id,
        className: item.className,
        instructorName: item.instructorName,
        price: item.price,
        email: user.email,
        classImage: item.classImage,
        availableSeats: item.availableSeats,
      };
      fetch("http://localhost:5000/bookedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Booked Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Book Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 mx-4 my-4">
      {classes
        .filter((classItem) => classItem.status === "approved")
        .map((classItem) => (
          <div
            className="card card-side bg-base-100 shadow-xl"
            key={classItem._id}
          >
            <figure className="w-80 ">
              <img className="rounded-lg" src={classItem.classImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classItem.className}</h2>
              <p className="font-medium">
                Instructor: {classItem.instructorName}
              </p>
              <p className="font-medium">
                Available Seats: {classItem.availableSeats}
              </p>
              <p className="font-medium">Price: ${classItem.price}</p>
              <div className="card-actions justify-start">
                <button
                  onClick={() => handleBookClass(classItem)}
                  className="btn btn-outline"
                >
                  Book Class
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Classes;
