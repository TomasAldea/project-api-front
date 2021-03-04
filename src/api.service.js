
import axios from "axios"

// creamos un endpoint para hacer peticiones a la api externa
const projectkApi = axios.create({
    baseURL: 'http://localhost:4000'
}) 


export const getRecipe = () => projectkApi.get("/recipe")
