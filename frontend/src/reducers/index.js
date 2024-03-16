import { combineReducers } from 'redux';
import { exercise } from './exercise';

const reducers = combineReducers({
    exercises: exercise
});

export default reducers;
