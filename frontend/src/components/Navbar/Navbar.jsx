import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="logo-name">
            ExerciseTracker
        </div>
        <div className="menu">
            <Link className ='link' to = "/">Exercises</Link>
            <Link className='link' to = "/add">Create Exercise Log</Link>
            <Link className='link' to = "/create">Create User</Link>
        </div>
    </div>
  )
}

export default Navbar
