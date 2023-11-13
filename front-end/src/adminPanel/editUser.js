import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { userId } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://spaceloom.onrender.com/api/admins/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
          setPassword(data.password);
          setEmail(data.email);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };
    fetchData();
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = {
      username,
      password,
      email,
    };

    try {
      const response = await fetch(`https://spaceloom.onrender.com/api/admins/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        setError("User updated successfully");
        window.history.back();
      } else {
        console.error("Failed to update user");
        setError("Failed to update user");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error");
    }
  };

  return (
    <div>
      <h1 className="admin-h1">Edit User</h1>
      <form onSubmit={handleUpdate} className="form-adminDashboard">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input type="submit" value="Update" className="submit" />
        <p>{error}</p>
      </form>
    </div>
  );
}

export default EditUser;
