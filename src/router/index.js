import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/SinhVienTheoKhoa/index.vue')
    },
    {
        path: '/sinh-vien-theo-khoa',
        component: () => import('../components/SinhVienTheoKhoa/index.vue')
    },
    {
        path: '/sinh-vien-theo-lop-sinh-hoat',
        component: () => import('../components/SinhVienTheoLopSinhHoat/index.vue')
    },
    {
        path: '/sinh-vien-theo-nam-nhap-hoc',
        component: () => import('../components/SinhVienTheoNamNhapHoc/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router