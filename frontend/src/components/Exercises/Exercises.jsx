import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchExercises } from '../../actions/exercise';

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises); 

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

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
                    <Link to={`/edit/${exercise._id}`}>edit</Link> | <Link to={`/delete/${exercise._id}`}>delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default Exercises;
