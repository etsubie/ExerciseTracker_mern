import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createExercise, updateExercise } from '../../actions/exercise';
import { useNavigate } from 'react-router-dom';

const CreateExercise = ({ currentID, setCurrentID }) => {
  const [exercise, setExercise] = useState({ username: '', description: '', duration: '', date: '' });
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const navigate = useNavigate()

  useEffect(() => {
    if (currentID) {
      const existingExercise = exercises.find((ex) => ex._id === currentID);
      if (existingExercise) {
        setExercise(existingExercise);
      }
    }
  }, [currentID, exercises]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentID) {
      dispatch(updateExercise(currentID, exercise));
    } else {
      dispatch(createExercise(exercise));
    }

    setExercise({ username: '', description: '', duration: '', date: '' });
    setCurrentID(null);
    navigate('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{currentID ? 'Update Exercise Log' : 'Create New Exercise Log'}</h1>
        <input type="text" value={exercise.username} onChange={(e) => setExercise({ ...exercise, username: e.target.value })} name='username' placeholder='Username' />
        <input type="text" value={exercise.description} onChange={(e) => setExercise({ ...exercise, description: e.target.value })} name='description' placeholder='Description' />
        <input type="text" value={exercise.duration} onChange={(e) => setExercise({ ...exercise, duration: e.target.value })} name='duration' placeholder='Duration (in minutes)' />
        <input type="text" value={exercise.date} onChange={(e) => setExercise({ ...exercise, date: e.target.value })} name='date' placeholder='Date' />
        <button type="submit">{currentID ? 'Update' : 'Create'} Exercise Log</button>
      </form>
    </>
  );
};

export default CreateExercise;
