import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Exercises from "./components/Exercises/Exercises"
import CreateExercise from "./components/CreateExercise/CreateExercise"
import CreateUser from "./components/CreateUser/CreateUser"
import EditExercise from "./components/EditExercise/EditExercise"



function App() {

  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" exact Component={Exercises}/>
          <Route path="/create" Component={CreateExercise}/>
          <Route path="/edit/:id" Component={EditExercise}/>
          <Route path="/add" Component={CreateUser}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
