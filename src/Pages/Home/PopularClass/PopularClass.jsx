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
      <h2 className="text-center font-bold text-3xl my-16">Popular Classes </h2>
      <div className="grid md:grid-cols-3 gap-10 md:ml-8 sm:ml-12">
        {classes.slice(0, 6).map((classItem) => (
          <div key={classItem._id} className="card w-96 bg-base-100 shadow-lg shadow-black hover:scale-95 duration-500">
            <figure className="px-6 py-6">
              <img src={classItem.classImage} className="rounded-xl shadow-md shadow-black" alt="" />
            </figure>
            <div className="card-body items-center text-center pt-0 pb-6">
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
