import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {},
    mutations: {
        setCurrentElectiva(state, index) {
            state.currentElectiva = index
        },
        updateElectivas(state, electivas) {
            if (state.electivas.length === 0) {
                state.electivas = electivas
            }
        },
        setDrawer(state, drawer) {
            state.drawer = drawer
        },
        saveReview(state, electiva, review) {
            console.log(electiva.id)
            console.log(state.electivas[electiva.id])
            state.electivas[electiva.id].reviews.push(review)
        },
        updateElectiva(state, electiva) {
            state.electivas[electiva.id] = electiva
        },
        updateFeed(state, feed) {
            state.feed.push(feed)
        }
    },
    state: {
        drawer: true,
        electivas: [{
            id: 0,
            title: "Школа единоборств",
            text: "Лучшая школа для подпольных боев района",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Секции",
            position: {lat: 55.788460, lng: 49.119852 },
            reviews: [{
                id: 0,
                author: "Ильнур",
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                text: "Такое себе",
                rate: 4
            }, {
                id: 1,
                author: "Диляра",
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                text: "Согласна с Ильнуром",
                rate: 3
            }, {
                id: 2,
                author: "Ирина",
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                text: "Я бы еще раз не пошла",
                rate: 3
            }],
            rating: 3.4
        }, {
            id: 1,
            title: "Школа аглийского языка",
            text: "Начни шпрехать по иностраному в кратчайшие сроки",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Секции",
            position: {lat: 55.788000, lng: 49.119899 },
            reviews: [],
            rating: 4.1
        }, {
            id: 2,
            title: "Репетитор по татарскому",
            text: "Научи ругаться по татарски, все будут в шоке!",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Репетиторы",
            position: {lat: 55.788411, lng: 49.119823 },
            reviews: [],
            rating: 4.7
        }],
        currentElectiva: null,
        feed: [{
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            text: 'Оставлен отзыв в 17:07',
            title: 'Уроки английского',
            electiva_id: 1
        }, {
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            text: 'Оставлен отзыв в 17:07',
            title: 'Репет по тату',
            electiva_id: 2
        }]
    },
    getters: {
        getCurrentElectiva(state) {
            return state.electivas[state.currentElectiva]
        },
        getAllElectivas(state) {
            return state.electivas
        },
        getDrawer: state => state.drawer,
        getFeed: state => state.feed
    }
})
