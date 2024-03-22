import * as api from '../api/users'

export const createUser = (user) => async (dispatch) => {
    try {
        const {data} = await api.createUsers(user)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
};

export const fetchUsers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUsers()
        dispatch({type: 'FETCH_ALL', payload: data})
        
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)
        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}