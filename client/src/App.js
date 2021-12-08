import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
  const [reload, setReload] = useState(false)
  const [user, setUser ] = useState("");
  const [boardGameList, setBoardGameList] = useState("");
  //creating state to hold search form data
  const [searchFormData, setSearchFormData] = useState("");

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [reload]);
//

  function handleChange(event){
    setSearchFormData(event.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(response => response.json())
    .then(data => checkIfBoardGameExists(data));
  }, []);



  function checkIfBoardGameExists(data){
    if (!!data){
      setBoardGameList(data) 
    }
}


  return (

    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/testing"/>
          <Route path="/ourlibrary" element={<Home user={user} setUser={setUser} reload={reload} setReload={setReload} handleChange={handleChange} searchFormData={searchFormData} boardGameList={boardGameList} setBoardGameList={setBoardGameList} />}/>
          <Route path="/" element={<Login setUser={setUser} />}/>
          <Route path="/signup" element={<Signup boardGameList={boardGameList} setUser={setUser} />}/>
          <Route path="/profile" element={<Profile user={user} setUser={setUser} reload={reload} setReload={setReload} handleChange={handleChange} searchFormData={searchFormData} boardGameList={boardGameList} setBoardGameList={setBoardGameList} />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;