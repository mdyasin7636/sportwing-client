
const MySelectedClasses = () => {
  
    return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Class Name</td>
              <td>Instructor Name</td>
              <td>Purple</td>
              <td>
                <button className="btn btn-ghost btn-xs">Pay</button>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
