import express from 'express';
import { fetchExercises, addExercises, updateExercise, deleteExercise, fetchExercise } from '../controllers/exercises.js';

const exerciseRouter = express.Router();

exerciseRouter.get('/', fetchExercises);
exerciseRouter.get('/:id', fetchExercise);
exerciseRouter.post('/add', addExercises);
exerciseRouter.patch('/edit/:id', updateExercise);
exerciseRouter.delete('/delete/:id', deleteExercise);

export default exerciseRouter;
