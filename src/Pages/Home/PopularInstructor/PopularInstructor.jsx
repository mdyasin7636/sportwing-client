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
      <h2 className="text-center font-bold text-3xl my-16">
        Popular Instructors
      </h2>
      <div className="grid md:grid-cols-3 gap-7 md:ml-8 sm:ml-12">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card w-96 bg-base-100 shadow-lg shadow-black hover:scale-105 duration-500 mt-4">
            <figure>
              <img src={instructor.photo} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
