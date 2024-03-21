import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../actions/users';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState({ username: '' });
  const [isCreated, setIsCreated] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    // Check for duplicates when users state changes
    const isDuplicateUser = users.some((u) => u.username === user.username);
    setIsDuplicate(isDuplicateUser);
  }, [users, user.username]); // Only re-run the effect if users or user.username change

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDuplicate) {
      return;
    }

    dispatch(createUser(user))
      .then(() => {
        setIsCreated(true);
        setUser({ username: '' });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          name="username"
          placeholder="Username"
          required
        />
        <button>Create User</button>
      </form>
      {isDuplicate && <p>User already exists.</p>}
      {isCreated && <p>User created successfully!</p>}
      <Link to='/users'>users</Link>
    </>
  );
};

export default CreateUser;
