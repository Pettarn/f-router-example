import Vue from 'vue'
import VueRouter from 'vue-router'

import indexPage from '../components/indexPage.vue'
import male from '../components/male.vue'
import female from '../components/female.vue'

Vue.use(VueRouter)

let routes = [
    {
        path: '',
        redirect: '/sex/'
    },
    {
        path: '/sex/',
        component: indexPage,
        children: [
            {
                path: 'a',
                component: male
            },
            {
                path: 'b',
                component: female
            }
        ]
    },
]

let router = new VueRouter({
    routes
})

export default router