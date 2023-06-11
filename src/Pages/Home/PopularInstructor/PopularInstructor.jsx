import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const filteredInstructors = data.filter(
          (instructor) => instructor.role === "instructor").slice(0, 6);
        setInstructors(filteredInstructors);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl">Popular Instructor</h2>
      <div className="grid md:grid-cols-3">
    {instructors.map((instructor) => (
      <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={instructor.photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.name}</h2>
        </div>
      </div>
    ))}
  </div>
    </div>
  );
};

export default PopularInstructor;
