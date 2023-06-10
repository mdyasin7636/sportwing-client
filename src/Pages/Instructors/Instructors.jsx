import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        const filteredInstructors = data.filter(
          instructor => instructor.role === 'instructor'
        );
        setInstructors(filteredInstructors);
      })
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <tr key={instructor._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img src={instructor.photo} alt="Instructor" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;
