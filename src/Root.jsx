import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'

const RootLayout = ()=>{
    return <div className="container">
    <header>
      <h1>Complaint Management</h1>
      <nav className="nav">
        <a href="/">Home</a>
         {/* if (!currentUser) {  */}
          <a href="/login">Login</a>
          <a href="/register">Register</a>
         {/* } else { 
           if (currentUser.role === 'student') { 
            <a href="/dashboard">Dashboard</a>
           } else { 
            <a href="/complaints/all">All Complaints</a>
           } 
          <a href="/logout">Logout</a> */}
         {/* }  */}
      </nav>
    </header>

    <main>
      <Outlet />
    </main>
  </div>
}

export default RootLayout