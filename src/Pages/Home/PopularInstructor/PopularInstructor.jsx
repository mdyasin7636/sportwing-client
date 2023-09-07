import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://sportwing-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const filteredInstructors = data
          .filter((instructor) => instructor.role === "Instructor")
          .slice(0, 6);
        setInstructors(filteredInstructors);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-10">
        Popular Instructors
      </h2>
      <div className="grid md:grid-cols-3">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card md:w-96 w-80 bg-base-100 shadow-lg shadow-black hover:scale-105 duration-500 mx-auto mt-10 my-5">
            <figure>
              <img src={instructor.photo} />
            </figure>
            <div className="card-body items-center text-center pt-5 pb-5">
              <h2 className="card-title">{instructor.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
