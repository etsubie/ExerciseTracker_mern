import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Exercises from './components/Exercises/Exercises';
import CreateExercise from './components/CreateExercise/CreateExercise';
import CreateUser from './components/CreateUser/CreateUser';
import Users from './components/Users/Users';

function App() {
  const [currentID, setCurrentID] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises setCurrentID={setCurrentID} />} />
        <Route path="/add" element={<CreateExercise currentID={currentID} setCurrentID={setCurrentID} />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path='/users' element = {<Users/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
