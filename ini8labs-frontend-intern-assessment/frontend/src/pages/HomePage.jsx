
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserList from '../components/UserList';
// import UserForm from '../components/UserForm';

// const apiUrl = import.meta.env.VITE_API_URL;

// function HomePage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null); // State for current user being edited

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(`${apiUrl}/users`);
//       setUsers(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       setError('Error fetching users');
//       setLoading(false);
//     }
//   };

//   const addUser = async (user) => {
//     try {
//       const response = await axios.post(`${apiUrl}/users`, user);
//       setUsers([...users, response.data]);
//     } catch (error) {
//       console.error('Error adding user:', error);
//       setError('Error adding user');
//     }
//   };

//   const updateUser = async (id, updatedUser) => {
//     try {
//       const response = await axios.put(`${apiUrl}/users/${id}`, updatedUser);
//       setUsers(users.map((user) => (user._id === id ? response.data : user)));
//       setCurrentUser(null); // Clear the current user after updating
//     } catch (error) {
//       console.error('Error updating user:', error);
//       setError('Error updating user');
//     }
//   };

//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`${apiUrl}/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       setError('Error deleting user');
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <UserForm addUser={addUser} currentUser={currentUser} updateUser={updateUser} />
//       <UserList users={users} setCurrentUser={setCurrentUser} deleteUser={deleteUser} />
//     </div>
//   );
// }

// export default HomePage;










import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const apiUrl = import.meta.env.VITE_API_URL;

function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error fetching users');
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
      setError('Error adding user');
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(`${apiUrl}/users/${id}`, updatedUser);
      setUsers(users.map((user) => (user._id === id ? response.data : user)));
      setCurrentUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Error updating user');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>User Registration</h1>
      <UserForm addUser={addUser} currentUser={currentUser} updateUser={updateUser} />
      <UserList users={users} setCurrentUser={setCurrentUser} deleteUser={deleteUser} />
    </div>
  );
}

export default HomePage;
