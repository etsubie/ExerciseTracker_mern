import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000/users'})

export const createUsers = (user) => API.post('/create', user)
export const fetchUsers = () => API.get('/')
export const updateUser = (id, user) => API.patch(`/edit/${id}`, id, user)
export const deleteUser = (id) => API.delete(`/delete/${id}`, id)