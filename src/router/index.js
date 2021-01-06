import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'
import layout from '../views/layout'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'layout',
        title: '首页',
        component: layout,
        redirect: "home",
        meta: {
            isMenu: false,
        },
        children: [{
            path: "/home",
            name: "home",
            component: home
        }]
    },
    {
        path: '/product',
        title: '商品',
        name: 'product',
        meta: {
            isMenu: true,
        },
        component: layout,
        redirect: '/product/list',
        children: [{
                path: '/product/list',
                title: '商品列表',
                name: 'productList',
                meta: {
                    isMenuShow: true,
                },
                component: () =>
                    import ('../views/product/productList/index.vue')
            },
            {
                path: '/product/add',
                title: '添加商品',
                name: 'productAdd',
                meta: {
                    isMenuShow: true,
                },
                component: () =>
                    import ('../views/product/productAdd/index.vue')
            },
            {
                path: '/product/cat',
                title: '商品分类',
                name: 'productCat',
                meta: {
                    isMenuShow: true,
                },
                component: () =>
                    import ('../views/product/productCat/index.vue'),
            },
            {
                path: '/product/cat/add',
                title: '添加商品分类',
                name: 'productCatAdd',
                meta: {
                    isMenuShow: false,
                },
                component: () =>
                    import ('../views/product/productCat/components/addProductCat.vue'),
            },
            {
                path: '/product/type',
                title: '商品类型',
                name: 'productType',
                meta: {
                    isMenuShow: true,
                },
                component: () =>
                    import ('../views/product/productType/index.vue')
            },
            {
                path: '/product/brand',
                title: '品牌管理',
                name: 'productBrand',
                meta: {
                    isMenuShow: true,
                },
                component: () =>
                    import ('../views/product/productBrand/index.vue')
            }
        ]
    },
    {
        path: "/login",
        meta: {
            isMenu: false,
        },
        name: "login",
        component: () =>
            import ('../views/login/index.vue')
    },
    {
        path: '*',
        meta: {
            isMenu: false,
        },
        name: 'Error',
        component: () =>
            import ('../views/404.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

//添加守卫
router.beforeEach((to, from, next) => {
    //查看访问路径是否是登录(/login)，如果是/login,直接放行
    if (to.path == "/login") {
        next();
        return;
    }
    //否则看是否登录了，如果登录了，直接放行，否则跳转到登录
    if (Cookies.get("loginToken") != null) {
        next();
        return;
    }
    next("/login");
})

export default router