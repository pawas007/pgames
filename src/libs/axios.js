import axios from 'axios'

const axiosIns = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})
axiosIns.defaults.withCredentials = false
// axiosIns.interceptors.request.use(
//     function (config) {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers['Authorization'] = 'Bearer ' + token
//         }
//         return config
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

export default axiosIns