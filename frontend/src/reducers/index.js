import { combineReducers } from 'redux';
import { exercise } from './exercise';
import { user } from './user';


const reducers = combineReducers({
    exercises: exercise,
    users: user
    
});

export default reducers;
