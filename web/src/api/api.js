import axios from 'axios'

const URI_API = 'http://localhost:5555/api/v1/prompt'

export const makeRequest = async (message) => {
    const response = await axios.post(URI_API, message)
    return response.data
}