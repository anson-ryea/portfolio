import { createWebHistory, createRouter } from 'vue-router'

const Index = () => import('@Views/index.vue')
const About = () => import('@Views/about.vue')

const routes = [
    { path: '/', name: "Index", component: Index },
    { path: '/about', name: "About", component: About },
]

const router = createRouter({
    history: createWebHistory("/portfolio"),
    routes,
})

export default router