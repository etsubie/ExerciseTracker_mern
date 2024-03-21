import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Exercises from './components/Exercises/Exercises';
import CreateExercise from './components/CreateExercise/CreateExercise';
import CreateUser from './components/CreateUser/CreateUser';

function App() {
  const [currentID, setCurrentID] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises setCurrentID={setCurrentID} />} />
        <Route path="/add" element={<CreateExercise currentID={currentID} setCurrentID={setCurrentID} />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
