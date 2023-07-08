import { useEffect, useState } from "react";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://sportwing-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-6">Popular Classes </h2>
      <div className="grid md:grid-cols-3 gap-6 md:ml-8">
        {classes.slice(0, 6).map((classItem) => (
          <div key={classItem._id} className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={classItem.classImage} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{classItem.className}</h2>
              <h2 className="card-title">Price: ${classItem.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
