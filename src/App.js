// import logo from './logo.svg';
import React, { useEffect } from "react";

import {  Route, Routes, useNavigate } from "react-router-dom";
import { Register, Login, Chat } from "./Pages";
import { getLocalData } from "./Utils/local.func";
// import './App.css';

function App() {

  const navigate = useNavigate()
  useEffect(() => {
    // console.log(window.location.pathname);
    if (window.location.pathname === "/") { 
      const isLocalValue = getLocalData();
      // console.log(isLocalValue)
      if (!isLocalValue) return navigate("/login")
      // if (isLocalValue.profileImage === null) return navigate("/setAvatar");

      return navigate("/");
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        
        <Route path="/login" element={<Login />} />

        {/* <Route path="/setAvatar" element={<SetAvatar />} /> */}
        
        <Route path="/" element={<Chat />} />
        
      </Routes>
    </div>
  );
}

export default App;
