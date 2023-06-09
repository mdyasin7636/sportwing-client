import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  
  
    const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  
  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then( res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount) {
            refetch();
        }
    })
  }

  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then( res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount) {
            refetch();
        }
    })
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl">All Users: {users.length} </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
           
           {
            users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                { user.role === 'admin' ? 'disabled' : <button onClick={()=> handleMakeAdmin(user)} className="btn btn-sm btn-outline">Make Admin</button>}
                </td>
                <td>
                { user.role === 'instructor' ? 'disabled' : <button onClick={()=> handleMakeInstructor(user)} className="btn btn-sm btn-outline">Make Instructor</button>}
                </td>
              </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
