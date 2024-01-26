import axios from 'axios'

const URI_API = 'http://localhost:5555/api/v1'

export const prompt = async (message) => {
    const response = await axios.post(`${URI_API}/prompt`, message)
    return response.data
}

export const getIngredients = async () => {
    const response = await axios.get(`${URI_API}/ingredients`)
    return response.data
}