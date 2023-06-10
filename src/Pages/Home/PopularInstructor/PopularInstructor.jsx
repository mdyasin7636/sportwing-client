import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const filteredInstructors = data.filter(
          (instructor) => instructor.role === "instructor"
        );
        setInstructors(filteredInstructors);
      });
  }, []);

  return (
    <div>
    <h2>PopularInstructor</h2>
    {instructors.map((instructor) => (
      <div key={instructor.id} className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={instructor.photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.name}</h2>
        </div>
      </div>
    ))}
  </div>
  );
};

export default PopularInstructor;
