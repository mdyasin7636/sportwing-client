const Classes = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor Name</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                     <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>Cricket</td>
              <td>Khan</td>
              <td>10</td>
              <td>$100</td>
              <td>
                <button className="btn btn-ghost btn-xs">Apply</button>
              </td>
            </tr>
          </tbody>  
        </table>
      </div>
    </div>
  );
};

export default Classes;
