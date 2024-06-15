import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "./SideMenu";
import '../../style/styles.css';
const UserGrid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div> 
        <SideMenu />
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Display Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.display_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{user.is_active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserGrid;
