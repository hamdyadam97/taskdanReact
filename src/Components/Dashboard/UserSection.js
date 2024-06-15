import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "./SideMenu";

function UserSection() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [displayContent, setDisplayContent] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8000/user/") // Replace with your actual API endpoint
      .then((response) => {
        setShow(true);
        setUsers(response.data); // Assuming response.data is an array of users
      })
      .catch((error) => {
        setShow(true);
        console.error("Error fetching users:", error);
      });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the selected user
    setDisplayContent(null); // Clear display content when user is clicked
  };

  const handleFileClick = () => {
    if (selectedUser && selectedUser.file) {
      setShow(false);
      setDisplayContent(
        <div>
          <h2>File Name:</h2>
          <p>{selectedUser.file}</p>
        </div>
      );
    } else {
      setShow(false);
      setDisplayContent(
        <div>
          <p>No file uploaded for this user.</p>
        </div>
      );
    }
  };

  const handleAgreementClick = () => {
    setShow(false);
    setDisplayContent(
      <div>
        <h2>User Agreement:</h2>
        <p>User agreement text goes here...</p>{" "}
        {/* Replace with actual agreement text */}
      </div>
    );
  };

  const handleSettingsClick = () => {
    setShow(false);
    setDisplayContent(
      <div>
        <h2>General Settings:</h2>
        <p>General settings content goes here...</p>{" "}
        {/* Replace with actual settings content */}
      </div>
    );
  };

  return (
    <div> 
        <SideMenu />
      <h1>User Section</h1>
      <div style={{ marginTop: "20px" }}>
        <div>
          <button onClick={handleFileClick}>File</button>
          <button onClick={handleAgreementClick}>Agreement</button>
          <button onClick={handleSettingsClick}>General Settings</button>
          <button onClick={() => fetchUsers()}>User Details</button>
        </div>
        {selectedUser && (
          <div style={{ marginTop: "20px" }}>
            <h2>Selected User Details:</h2>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{selectedUser.id}</td>
                </tr>
                <tr>
                  <td>Display Name:</td>
                  <td>{selectedUser.display_name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{selectedUser.email}</td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>{selectedUser.phone_number}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div style={{ marginTop: "20px" }}>
          {displayContent && (
            <div>
              <h2>Display Content:</h2>
              {displayContent}
            </div>
          )}
        </div>
      </div>
      {show && (
        <div style={{ marginTop: "20px" }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Display Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} onClick={() => handleUserClick(user)}>
                  <td>{user.id}</td>
                  <td>{user.display_name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserSection;
