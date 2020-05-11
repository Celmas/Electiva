import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        fetchPosts({commit}) {
            const posts = [];
            commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        },
        setDrawer(state, drawer) {
            state.drawer = drawer
        }
    },
    state: {
        posts: [],
        drawer: true
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state, getters) {
            return getters.allPosts.length
        },
        getDrawer: state => state.drawer
    }
})
