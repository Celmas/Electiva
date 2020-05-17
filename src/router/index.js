import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Electiva from '@/views/Electiva'
import Main from '@/views/Main'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/electiva',
            component: Electiva
        },
        {
            path: '/',
            component: Main
        }


    ]
})