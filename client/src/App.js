import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";



function App() {
  const [user, setUser ] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/testing"/>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login setUser={setUser} />}/>
          <Route path="/signup" element={<Signup setUser={setUser} />}/>
          <Route path="/profile" element={<Profile user={user} />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;