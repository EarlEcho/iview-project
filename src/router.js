const routers = [
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/index/Login.vue'], resolve)
    },
    {
        path: '/homepage',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index/HomePage.vue'], resolve)
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