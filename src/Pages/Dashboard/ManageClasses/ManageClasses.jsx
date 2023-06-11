const ManageClasses = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Information</th>
              <th>Instructor Information</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Cricket </div>
                  </div>
                </div>
              </td>
              <td>
                Name: 
                <br />
                Email: 
              </td>
              <td>10</td>
              <td>$10</td>
              <td>Status</td>
              <th>
                <button className="btn btn-outline btn-xs my-1">Approve</button>
                <br />
                <button className="btn btn-outline btn-xs my-1">Deny </button>
                <br />
                <button className="btn btn-outline btn-xs my-1">Feedback</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
