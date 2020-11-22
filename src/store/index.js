// import dependency to handle HTTP request to our back end
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

//to handle state
const state = {
    posts: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
            })
    },
    getUsers({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
            .then(response => {
                commit('SET_USERS', response.data)
            })
    },
    getProfiles({ commit }) {
        axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
            .then(response => {
                commit('SET_PROFILES', response.data)
            })
    }
}

//to handle mutations
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_USERS(state, posts) {
        state.posts = posts
    },
    SET_PROFILES(state, posts) {
        state.posts = posts
    }
}

//export store module
export default new Vuex.Store( {
    state,
    getters,
    actions,
    mutations
})
/** we have just created a boiler plate for our vuex store module**/