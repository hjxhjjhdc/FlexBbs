import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    createWebHistory
} from 'vue-router'

const Route: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'Login',
        path: '/Login',
        component: () => import('@/views/login/login.vue')
    }, 
    {
        name: 'HomePage',
        path: '/HomePage',
        redirect:'/index',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                name:`FirstPage`,
                path:`/index`,
                component:()=>import(`@/views/firstPage/index.vue`)
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: Route
})
export default router