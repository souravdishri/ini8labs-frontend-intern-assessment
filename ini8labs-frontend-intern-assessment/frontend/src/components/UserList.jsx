// //import React from 'react';

// function UserList({ users, setCurrentUser, deleteUser }) {
//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             {user.name} ({user.email}) - {new Date(user.dateOfBirth).toLocaleDateString()}
//             <button onClick={() => deleteUser(user._id)}>Delete</button>
//             <button onClick={() => setCurrentUser(user)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;









import React from 'react';

function UserList({ users, setCurrentUser, deleteUser }) {
  return (
    <div>
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id}>
            <span>{user.name} ({user.email}) - {new Date(user.dateOfBirth).toLocaleDateString()}</span>
            <div>
              <button onClick={() => setCurrentUser(user)}>Edit</button>
              <button className="delete" onClick={() => deleteUser(user._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
