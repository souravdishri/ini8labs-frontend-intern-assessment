
// import React, { useState, useEffect } from 'react';

// function UserForm({ addUser, currentUser, updateUser }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');

//   useEffect(() => {
//     if (currentUser) {
//       setName(currentUser.name);
//       setEmail(currentUser.email);
//       setDateOfBirth(new Date(currentUser.dateOfBirth).toISOString().split('T')[0]);
//     } else {
//       setName('');
//       setEmail('');
//       setDateOfBirth('');
//     }
//   }, [currentUser]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentUser) {
//       updateUser(currentUser._id, { name, email, dateOfBirth });
//     } else {
//       addUser({ name, email, dateOfBirth });
//     }
//     setName('');
//     setEmail('');
//     setDateOfBirth('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>
//       <div>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Date of Birth</label>
//         <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
//       </div>
//       <button type="submit">{currentUser ? 'Update User' : 'Add User'}</button>
//     </form>
//   );
// }

// export default UserForm;







import React, { useState, useEffect } from 'react';

function UserForm({ addUser, currentUser, updateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setDateOfBirth(new Date(currentUser.dateOfBirth).toISOString().split('T')[0]);
    } else {
      setName('');
      setEmail('');
      setDateOfBirth('');
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      updateUser(currentUser._id, { name, email, dateOfBirth });
    } else {
      addUser({ name, email, dateOfBirth });
    }
    setName('');
    setEmail('');
    setDateOfBirth('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
      </div>
      <button type="submit">{currentUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
}

export default UserForm;
