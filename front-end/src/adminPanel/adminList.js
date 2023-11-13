import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://spaceloom.onrender.com/api/admins");
      if (response.ok) {
        const data = await response.json();
        setUsers(data.data);
      } else {
        console.error("Failed to fetch Users");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`https://spaceloom.onrender.com/api/admins/${userId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchData();
        } else {
          console.error("Failed to delete user");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };

  const handleNewUserChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://spaceloom.onrender.com/api/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setError("");
        setNewUser({ username: "", email: "", password: "" });
        fetchData();
      } else {
        const json = await response.json();
        setError(json.error);
      }
    } catch (error) {
      setError("Network error");
    }
  };

  return (
    <div>
      <h1 className="admin-h1">User Management</h1>

      <form onSubmit={handleCreateUser} className="form-adminDashbord">
        
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleNewUserChange}
            className="input"
            required
          />
        
        
          <label htmlFor="email " className="label">Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleNewUserChange}
            className="input"
            required
          />
        
        
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            className="input"
            onChange={handleNewUserChange}
            required
          />
        
        <div>
          <button type="submit" className="submit">Create User</button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => onDeleteUser(user._id)} className="button">
                    Delete
                  </button>

                  <Link to={`/api/users/${user._id}/edit`}>
                    <button className="button">Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
