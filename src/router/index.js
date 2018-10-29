import Vue from 'vue';
import Router from 'vue-router';
import store from '@/vuex/store';


const Home = (resolve) => {
    import('@/views/Home/Home').then((module) => {
        resolve(module)
    })
}

const Login = (resolve) => {
    import('@/views/Login/Login').then((module) => {
        resolve(module)
    })
}

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            meta: {
                title: '主页',
            },
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            meta: {
                title: '登陆',
            },
            name: 'Login',
            component: Login
        },
        
    ]
});

export default router;
