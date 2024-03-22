import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchUsers } from "../../actions/users";
import { createExercise, updateExercise } from "../../actions/exercise";
import "./style.css";

const CreateExercise = ({ currentID, setCurrentID }) => {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: "",
    date: "",
  });
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

    if (
      !exercise.username ||
      !exercise.description ||
      !exercise.duration ||
      !exercise.date
    ) {
      // You may want to add validation for other fields as well
      alert("Please fill in all fields");
      return;
    }

    if (currentID) {
      dispatch(updateExercise(currentID, exercise)); // Update exercise with currentID
    } else {
      dispatch(createExercise(exercise)); // Create a new exercise
    }

    setExercise({ username: "", description: "", duration: "", date: "" }); // Clear the form fields
    setCurrentID(null);
    navigate("/"); // Navigate back to the home page
  };

  return (
    <>
      <div className="exercises">
        <form className="createForm" onSubmit={handleSubmit}>
          <h1>
            {currentID ? "Update Exercise Log" : "Create New Exercise Log"}
          </h1>

          <select
            value={exercise.username}
            onChange={(e) =>
              setExercise({ ...exercise, username: e.target.value })
            }
            name="username"
            disabled={currentID ? true : false}
            
          >
            <option value="">Select Username</option>
            {users.map((user) => (
              <option key={user.id} value={user.username} >
                {user.username}
              </option>
            ))}
          </select>

          <input
            required
            type="text"
            value={exercise.description}
            onChange={(e) =>
              setExercise({ ...exercise, description: e.target.value })
            }
            name="description"
            placeholder="Description"
          />
          <input
            required
            type="text"
            value={exercise.duration}
            onChange={(e) =>
              setExercise({ ...exercise, duration: e.target.value })
            }
            name="duration"
            placeholder="Duration (in minutes)"
          />
          <input
            required
            type="date"
            value={moment(exercise.date).format("YYYY-MM-DD")}
            onChange={(e) => setExercise({ ...exercise, date: e.target.value })}
            name="date"
            placeholder="Date"
          />
          <button className="createBtn" type="submit">
            {currentID ? "Update" : "Create"} Exercise Log
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateExercise;
