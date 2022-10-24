import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

import { EnvelopesBulk, City, ChartPie, User } from '@vexip-ui/icons';

import Layout from '@/Layout/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect:'/test',
        component: Layout,
        meta: {
            label: '1',
            name: '首页',
            icon: ChartPie,
        },
        children: [
            {
                path: 'test',
                component: () => import('@/views/test.vue'),
                meta: {
                    label: '1-1',
                    name: 'Test',
                    icon: User,
                },
            },
            {
                path: 'home',
                component: () => import('@/views/home.vue'),
                meta: {
                    label: '1-2',
                    name: 'Home',
                    icon: City,
                },
            },
        ],
    },
    {
        path: '/',
        component: Layout,
        meta: {
            label: '1',
            name: '菜单 2',
            icon: EnvelopesBulk,
        },
        children: [
            {
                path: 'aside',
                component: () => import('@/layout/aside/aside.vue'),
                meta: {
                    label: '2-1',
                    name: 'aside',
                    icon: EnvelopesBulk,
                },
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// router.beforeResolve(() => {
//   Loading.open(5)
// })

// router.afterEach(() => {
//   requestAnimationFrame(() => {
//     Loading.open(100)
//   })
// })
