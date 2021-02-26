
import axios from "axios"

// creamos un endpoint para hacer peticiones a la api externa
const projectkApi = axios.create({
    baseURL: 'http://localhost:4000'
}) 


export const getProjects = () => projectkApi.get("/projects")

export const getProject = (proyectId) => projectkApi.get(`/projects/${proyectId}`)

export const updateProject = (proyectId) => projectkApi.patch(`/projects/${proyectId}`)

export const createProject = (body) => projectkApi.post("/projects", body)

export const removeProject = (proyectId) => projectkApi.delete(`/projects/${proyectId}`)