import React from "react";
import './UserDetails.css'

const UserDetails = ({ user }) => {
  const { id, name, address, contact, gender, photoUrl } = user;
  return (
    <div>
        <div className="user-style">
          <img src={photoUrl} alt="" srcset="" />
          <h4>Id: {id}</h4>
          <h4>Name: {name}</h4>
          <h4>Address: {address}</h4>
          <h4>Gender: {gender}</h4>
          <h4>Contact: {contact}</h4>
          <div className="user-btn">
            <button>Update</button>
            <button>Delete</button>
          </div>
    
      </div>
    </div>
  );
};

export default UserDetails;
