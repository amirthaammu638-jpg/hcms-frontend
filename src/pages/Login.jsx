import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const loginFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = {
        id: regNo,
        password: password,
      };

      console.log(user)
      const resp = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      
      if (resp.ok) {
        alert("Login Successful");
        const data = await resp.json()
       navigate(data?.user.role === 'admin'? '/dashboard': '/dashboard')
        ;
      } else {
        alert("Registration Failed, Try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form onSubmit={loginFormSubmit}>
        <label>ID (Register Number or Staff ID)</label>
        <br />
        <input
          name="id"
          required
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />
        <br />
        <label>Password (4 digits)</label>
        <br />
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
