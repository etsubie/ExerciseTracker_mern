import express from 'express';
import { fetchUsers, addUsers, fetchUser, deleteUser } from '../controllers/users.js';

const userRouter = express.Router();

userRouter.get('/', fetchUsers);
userRouter.get('/:id', fetchUser);
userRouter.post('/create', addUsers);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;