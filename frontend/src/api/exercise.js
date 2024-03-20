import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000/exercises'})

export const createExercise = (exercise) => API.post('/add', exercise)
export const fetchExercises = () => API.get('/')
export const fetchExercise = (id) => API.get(`/${id}`)
export const updateExercise = (id, exercise) => API.patch(`/edit/${id}`, exercise)
export const deleteExercise = (id) => API.delete(`/delete/${id}`)
