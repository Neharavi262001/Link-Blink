import axios from 'axios'
const BACKEND_URI='http://localhost:8000';

export const uploadFile=async(data)=>{
    try {
        const response=await axios.post(`${BACKEND_URI}/upload`,data)
        return response.data
    } catch (error) {
        console.log('Error  making requests to api ', error.message)
    }
}