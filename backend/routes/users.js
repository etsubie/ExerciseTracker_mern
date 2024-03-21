import express from 'express';
import { fetchUsers, addUsers, fetchUser, updateUser, deleteUser } from '../controllers/users.js';

const userRouter = express.Router();

userRouter.get('/', fetchUsers);
userRouter.get('/:id', fetchUser);
userRouter.post('/create', addUsers);
userRouter.patch('/edit/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;