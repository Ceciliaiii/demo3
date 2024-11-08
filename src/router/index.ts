import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        name: 'Layout',
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../pages/Home.vue')
            }
        ]
    },
    {
        path: '/acl',
        component: () => import('../layout/index.vue'),
        name: 'Acl',
        redirect: '/acl/menu1',
        children: [
            {
                path: '/acl/menu1',
                component: () => import('../pages/Menu1.vue'),
                name: 'Menu1'
            },
            {
                path: '/acl/menu2',
                component: () => import('../pages/Menu2.vue'),
                name: 'Menu2'
            },
            {
                path: '/acl/menu3',
                component: () => import('../pages/Menu3.vue'),
                name: 'Menu3'
            },
            {
                path: '/acl/menu4',
                component: () => import('../pages/Menu4.vue'),
                name: 'Menu4',
                redirect: '/acl/menu4/menu4-1',
                children: [
                    {
                        path: '/acl/menu4/menu4-1',
                        component: () => import('../pages/Menu4-1.vue'),
                        name: 'Menu4-1'
                    }
                ]
            }
            

        ]
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;