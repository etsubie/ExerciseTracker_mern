import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Exercises from './components/Exercises/Exercises';
import CreateExercise from './components/CreateExercise/CreateExercise';
import CreateUser from './components/CreateUser/CreateUser';
import Users from './components/Users/Users';
import './App.css'

function App() {
  const [currentID, setCurrentID] = useState(null);
  const [currentId, setCurrentId] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises setCurrentID={setCurrentID} />} />
        <Route path="/add" element={<CreateExercise currentID={currentID} setCurrentID={setCurrentID} />} />
        <Route path="/create" element={<CreateUser currentId={currentId} setCurrentId={setCurrentId}/>} />
        <Route path="users" element = {<Users setCurrentId={setCurrentID}/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
