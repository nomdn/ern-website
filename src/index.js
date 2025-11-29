import {createRouter,createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Download from './pages/Download.vue'

const routes=[
    {path:'/',component:Home},
    {path:'/download',component:Download}
]

export const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router