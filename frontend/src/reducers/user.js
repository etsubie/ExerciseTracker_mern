export const user = (state = [], action) => {
    switch(action.type){
        case 'CREATE':
            return [...state, action.payload]
        case 'FETCH_BY_ID':
            return state.find((user) => user._id === action.payload.id)
        case 'FETCH_ALL':
            return action.payload
        case 'UPDATE':
            return state.map((user) => user._id === action.payload.id ? action.payload : user)
        case 'DELETE':
            return state.filter((user) => user._id === !action.payload)
        default:
            return state

    }

}