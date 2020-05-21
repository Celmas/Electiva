import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        fetchElectivas({commit}) {
            const electivas = [{
                title: "Школа единоборств",
                text: "Лучшая школа для подпольных боев района",
                img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                category: "Секции",
                reviews: [{
                    author: "Ильнур",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    text: "Такое себе",
                    rate: 4
                }, {
                    author: "Диляра",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    text: "Согласна с Ильнуром",
                    rate: 3
                }, {
                    author: "Ирина",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    text: "Я бы еще раз не пошла",
                    rate: 3
                }],
                rating: 3.4
            },{
                title: "Школа аглийского языка",
                text: "Начни шпрехать по иностраному в кратчайшие сроки",
                img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                category: "Секции",
                reviews: [],
                rating: 4.1
            },{
                title: "Репетитор по татарскому",
                text: "Научи ругаться по татарски, все будут в шоке!",
                img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                category: "Репетиторы",
                reviews: [],
                rating: 4.7
            }];
            commit('updateElectivas', electivas)
        }
    },
    mutations: {
        setCurrentElectiva(state, index) {
            state.currentElectiva = index
        },
        updateElectivas(state, electivas) {
            state.electivas = electivas
        },
        setDrawer(state, drawer) {
            state.drawer = drawer
        }
    },
    state: {
        drawer: true,
        electivas: [],
        currentElectiva: null
    },
    getters: {
        getCurrentElectiva(state) {
            return state.currentElectiva
        },
        getAllElectivas(state) {
            return state.electivas
        },
        getDrawer: state => state.drawer
    }
})
