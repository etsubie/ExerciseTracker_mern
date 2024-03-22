import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId))
      .then(() => {
        dispatch(fetchUsers());
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="users">
        <h1>Logged Users</h1>
        <table className="userTable">
          <thead>
            <tr className="heading">
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td className="btns">
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(user._id)}
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
  );
};

export default Users;
