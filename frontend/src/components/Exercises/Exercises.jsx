import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { fetchExercises, deleteExercise } from "../../actions/exercise";
import "./style.css";

const Exercises = ({ setCurrentID }) => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const isLoading = useSelector((state) => state.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const handleEdit = (id) => {
    setCurrentID(id);
    navigate("/add");
  };
  const handelDelete = (id) => {
    dispatch(deleteExercise(id));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!exercises.length ? (
        <p>No Exercises</p>
      ) : (
        <>
          <div className="exercises">
            <h1>Logged Exercises</h1>
            <table className="exerciseTable">
              <thead>
                <tr className="heading">
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
                    <td className="description">{exercise.description}</td>
                    <td>{exercise.duration}</td>
                    <td className="date">{moment(exercise.date).format("YYYY-MM-DD")}</td>
                    <td className="btns">
                      <button
                        className="editBtn"
                        onClick={() => handleEdit(exercise._id)}
                      >
                        Edit
                      </button>
                      <span>&nbsp;|</span>
                      <button
                        className="deleteBtn"
                        onClick={() => handelDelete(exercise._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Exercises;
