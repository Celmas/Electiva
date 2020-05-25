import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import x5GMaps from 'x5-gmaps'

Vue.use(Vuetify);
Vue.use(x5GMaps, 'AIzaSyB_zLejxNbI94VevTOkzHdzjXLEehTNx20');

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
});
