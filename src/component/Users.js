import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
          fetch('http://localhost:5000/api/v1/users')
          .then(res => res.json())
          .then(data => setUsers(data))
    }, [])
  return (
    <div>
      <div>
        <h1>this is user :{users.length}</h1>
     </div>
    </div>
  );
};

export default Users;
