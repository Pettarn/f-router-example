import Vue from 'vue'
import FRouter from '@pettarn/f-router'

import indexPage from '../components/indexPage.vue'
import male from '../components/male.vue'
import female from '../components/female.vue'

Vue.use(FRouter)

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

let router = new FRouter({
    routes
})

export default router