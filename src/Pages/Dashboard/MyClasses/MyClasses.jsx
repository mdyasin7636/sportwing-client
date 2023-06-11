const MyClasses = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Class Name: </h2>
          <p>Price: </p>
          <p>Enrolled Students: </p>
          <p>Status: </p>
          <p>Feedback: </p>
          <div className="card-actions justify-start">
            <button className="btn btn-xs">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
