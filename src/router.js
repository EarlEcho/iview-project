const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index/HomePage.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: 'login'
        },
        component: (resolve) => require(['./views/index/login.vue'], resolve)
    }
];
export default routers;