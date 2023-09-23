import { useEffect, useState } from "react";
import Atropos from 'atropos/react';

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
      <h2 className="text-center font-bold text-3xl mt-10">Popular Classes</h2>
      <div className="grid md:grid-cols-3">
        {classes.slice(0, 6).map((classItem) => (
          <div key={classItem._id} className="card md:w-96 w-80 bg-base-100 shadow-lg shadow-black hover:scale-95 duration-500 mx-auto my-5 mt-10">
            <figure className="px-6 py-6">
              <Atropos>
                <img src={classItem.classImage} alt="" data-atropos-offset="6" className="rounded-xl shadow-md shadow-black"/>
              </Atropos>
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
