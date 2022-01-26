import axios from 'axios'

export const axiosInstance = axios.create({    
    baseURL : "https://ifocop-shareader.herokuapp.com/api/"
})