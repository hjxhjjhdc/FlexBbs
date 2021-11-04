import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    createWebHistory
} from 'vue-router'

const Route: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'Login',
        path: '/Login',
        component: () => import('@/views/login/login.vue')
    },
    {
        name: 'HomePage',
        path: '/HomePage',
        component: () => import('@/views/layout/index.vue'),
        children: []
    }
]
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: Route
})
export default router