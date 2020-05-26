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
            title: "Школа английского язяка для детей от 6 лет",
            text: "Чем раньше ребенок начнет учить язык, тем легче ему будет овладеть языком. \n" +
                "Мы предлагаем индувидуальные занятия с учителями и носителями языка. Так же в нашей школе есть групповые занятия по возрасту и уровню владения.",
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
            rating: 0
        }, {
            id: 1,
            title: "Шахматный клуб",
            text: "Учим думать нестандартно, готовим детей на международные соревнования по шахматам.\n" +
                "Торопитесь, скидки действуют до конца лета.",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Секции",
            position: {lat: 55.788000, lng: 49.119899 },
            reviews: [],
            rating: 0
        }, {
            id: 2,
            title: "Школа актерского мастерства \"хей хо!\" ",
            text: "Ваш ребенок удивит вас актерским талатном!\n" +
                "\n" +
                "Наши выпускники регулярно проходят отборы в кастингах на фильмы и сериалы.",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Секции",
            position: {lat: 55.788411, lng: 49.119823 },
            reviews: [],
            rating: 0
        }, {
            id: 3,
            title: "Школа гимрастики",
            text: "Открыт набор в группы:\n" +
                "С 3 до 4 лет\n" +
                "С 5 до 7 лет\n" +
                "С 12 до 14 лет\n" +
                "\n" +
                "У нас самые квалифицированные преподаватели города",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Секции",
            position: {lat: 55.788411, lng: 49.119823 },
            reviews: [],
            rating: 0
        }, {
            id: 4,
            title: "Наталья Николаевна Вермер",
            text: "Учитель математики с 20 стажем\n" +
                "Готовлю школьников к сдачи ЕГЭ по математике не меннее чем на 85 баллов",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            category: "Репетиторы",
            position: {lat: 55.788411, lng: 49.119823 },
            reviews: [],
            rating: 0
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
