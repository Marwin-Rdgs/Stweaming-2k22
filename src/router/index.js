import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../Views/homeView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
            ]
})

export default router