const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index/HomePage.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/index/login.vue'], resolve)
    },
    {
        path: '/sign-in',
        meta: {
            title: '用户注册'
        },
        component: (resolve) => require(['./views/index/SignIn.vue'], resolve)
    }
];
export default routers;