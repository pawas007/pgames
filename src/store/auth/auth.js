import axios from "@/libs/axios";

const removeTokens = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}

const state = {
    authUser: null,
}

const mutations = {
    SET_AUTH_USER: (state, user) => {
        state.authUser = user;
    },
}

const actions = {
    LOGIN: (context, data) => {
        return axios.post('login', data).then(r => {
            removeTokens()
            const token = r.data.token;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            if (!data.remember) {
                sessionStorage.setItem('token', token)
            } else {
                localStorage.setItem('token', token)
            }
        })
    },
    LOGIN_SOCIAL: (context, provider) => {
        return axios.get(`authorize/${provider}/redirect`)
    },
    REGISTER: (context, data) => {
        return axios.post('register', data)
    },
    RESEND_EMAIL: (context, data) => {
        return axios.post('email/resend', data)
    },
    FORGOT_PASSWORD: (context, data) => {
        return axios.post('password/email', data)
    },
    LOGIN_SOCIAL_CALLBACK: (context, payload) => {
        return axios.get(`authorize/${payload.provider}/callback`, {params: {code: payload.code}}).then(r => {
            removeTokens()
            const token = r.data.token;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            localStorage.setItem('token', token)
        })
    },
    GET_AUTH_USER: async (context) => {
        return await axios.get('auth/user')
            .then(response => {
                context.commit('SET_AUTH_USER', response.data);
            }).catch((err) => {

            })
    },
    LOGOUT: (context) => {
        return axios.post('logout').then(() => {
            window.location.href = '/';
            setTimeout(()=>{
                removeTokens()
                context.commit('SET_AUTH_USER', null)
            },300)
        })
    },
}

const getters = {
    AUTH_USER: state => {
        return state.authUser;
    },
}
export default {
    state, getters, mutations, actions
}