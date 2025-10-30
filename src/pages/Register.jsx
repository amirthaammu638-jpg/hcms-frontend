import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const registerFormSubmit = async () => {
    try {
      const newUser = {
        registerNumber: regNo,
        password: password,
      };

      const resp = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (resp.ok) {
        alert("Registration Successful!, Please Login.");
        navigate('/login')
      } else {
        alert("Registration Failed, Try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <div className="registerForm">
      <h2>Register (Student)</h2>
      <form onSubmit={registerFormSubmit}>
        <label>Register Number (e.g. URK21CSIT1234)</label>
        <br />
        <input
          name="registerNumber"
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
