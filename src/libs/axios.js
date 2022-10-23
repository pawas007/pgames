import axios from 'axios'

const axiosIns = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})
axiosIns.defaults.withCredentials = false

axiosIns.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    function (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
        }
    }
)

export default axiosIns