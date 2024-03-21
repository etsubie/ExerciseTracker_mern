import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises, deleteExercise } from '../../actions/exercise';
import {  useNavigate } from 'react-router-dom';

const Exercises = ({ setCurrentID }) => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const isLoading = useSelector((state) => state.isLoading); 
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const handleEdit = (id) =>{
    setCurrentID(id)
    navigate('/add')
  }
  const handelDelete = (id) =>{
    dispatch(deleteExercise(id))
  }
  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!exercises.length ? (
        <p>No Exercises</p>
      ) : (
        <>
          <h1>Logged Exercises</h1>
          <table border={1}>
            <thead>
              <tr className='heading'>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr key={exercise._id}>
                  <td>{exercise.username}</td>
                  <td>{exercise.description}</td>
                  <td>{exercise.duration}</td>
                  <td>{exercise.date}</td>
                  <td>
                    <button onClick={() => handleEdit(exercise._id)}>Edit</button>
                    <button onClick={() => handelDelete(exercise._id)}>Delete</button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Exercises;
