import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createExercise } from '../../actions/exercise'


const CreateExercise = () => {

  const [exercise, setExercise] = useState({username: '', description: '', duration: '', date: ''})
  const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExercise(exercise))

    setExercise({username: '', description: '', duration: '', date: ''})

}

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>Create New Exercise Log</h1>
            <input type="text" value={exercise.username} onChange={(e) => setExercise({...exercise, username: e.target.value})} name='username' placeholder='Username' />
            <input type="text" value={exercise.description} onChange={(e) => setExercise({...exercise, description: e.target.value})} name='description' placeholder='Description' />
            <input type="text" value={exercise.duration} onChange={(e) => setExercise({...exercise, duration: e.target.value})} name='duration' placeholder='Duration (in minutes)' />
            <input type="text" value={exercise.date} onChange={(e) => setExercise({...exercise, date: e.target.value})} name='date' placeholder='Date' />
            <button>Create Exercise Log</button>
        </form>
    </>
  )
}

export default CreateExercise
