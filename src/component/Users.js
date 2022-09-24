import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/users/all")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div className="users-main">
        {users.map((user) => (
          <UserDetails
           user={user}
           key ={user.id}
           ></UserDetails>
        ))}

      </div>
    </div>
  );
};

export default Users;
