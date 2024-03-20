import * as api from '../api/exercise';

export const createExercise = (exercise) => async (dispatch) => {
    try {
        const { data } = await api.createExercise(exercise);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const fetchExercises = () => async (dispatch) => {
    try {
        const { data } = await api.fetchExercises();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const fetchExercise = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchExercise(id);
        dispatch({ type: 'FETCH_BY_ID', payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const updateExercise = (id, exercise) => async (dispatch) => {
    try {
        const { data } = await api.updateExercise(id, exercise);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const deleteExercise = (id) => async (dispatch) => {
    try {
        await api.deleteExercise(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.error(error);
    }
};
