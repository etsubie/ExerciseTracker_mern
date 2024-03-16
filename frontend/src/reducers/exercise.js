export const Exercise = (state = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_BY_ID':
            return state.find(exercise => exercise._id === action.payload._id);
        case 'UPDATE':
            return state.map(exercise => exercise._id === action.payload.id ? action.payload : exercise);
        case 'DELETE':
            return state.filter(exercise => exercise._id !== action.payload);
        default:
            return state;
    }
}
