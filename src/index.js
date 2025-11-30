import {createRouter,createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Download from './pages/Download.vue'
import Stalk from './pages/Stalk.vue'

const routes=[
    {path:'/',component:Home},
    {path:'/download',component:Download},
    {path:'/stalk',component:Stalk}
]

export const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router