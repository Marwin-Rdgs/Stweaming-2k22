import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../Views/homeView.vue'

import searchAnimeView from '../Views/searchAnimeView.vue'
import searchDessinView from '../Views/searchDessinView.vue'
import searchSerieView from '../Views/searchSerieView.vue'
import searchFilmView from '../Views/searchFilmView.vue'
import contenuView from '../Views/contenuView.vue'

import profilView from '../Views/profilView.vue'
import loginView from '../Views/loginView.vue'
import listView from '../Views/listView.vue'

import shopView from '../Views/shopView.vue'

import aboutView from '../Views/aboutView.vue'
import contactView from '../Views/contactView.vue'

import legalView from '../Views/legalView.vue'


const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/searchAnime', name: 'searchAnimeView', component: searchAnimeView},
        {path: '/searchDessin', name: 'searchDessinView', component: searchDessinView},
        {path: '/searchSerie', name: 'searchSerieView', component: searchSerieView},
        {path: '/searchFilm', name: 'searchFilmView', component: searchFilmView},
        {path: '/contenu', name: 'contenuView', component: contenuView},
        {path: '/profil', name: 'profilView', component: profilView},
        {path: '/list', name: 'listView', component: listView},
        {path: '/login', name: 'loginView', component: loginView},
        {path: '/shop', name: 'shopView', component: shopView},
        {path: '/about', name: 'aboutView', component: aboutView},
        {path: '/contact', name: 'contactView', component: contactView},
        {path: '/mentionslegales', name: 'legalView', component: legalView},
            ]
})

export default router