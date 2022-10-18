import axios from "@/libs/axios";

const state = {
    authUser: [],
}

const mutations = {
    SET_AUTH_USER: (state, user) => {
        state.authUser = user;
    },
}

const actions = {
    LOGIN:  (context, data) => {
        return axios.post('login', data)
    },

    GET_SINGLE_USER:  (context) => {
        return  axios.get('/user')

    },
    GET_AUTH_USER: async (context) => {
        return     await axios.get('/user')
            .then(response => {
                context.commit('SET_AUTH_USER', response.data);
            })
    },
    REGISTER: (context, data) => {
        return axios.post('/register', data)

    },
    RESEND_EMAIL: (context, data) => {
        return axios.post('/email/resend', data)

    },


    LOGOUT: (context) => {
        return axios.post('/logout')
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