import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import My from '@/views/My/index.vue'
import Setting from '@/views/Setting/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
              {
                path: '',
                component: Home
              },
              {
                path: 'my',
                component: My
              },
            ]
        },
        {
            path: '/setting',
            component: Setting
        },
    ]
})

export default router