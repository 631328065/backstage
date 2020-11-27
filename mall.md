## 项目地址：

演示地址：http://8.129.43.113/  (admin/macro123)

api文档： http://8.129.43.113:8080/swagger-ui.html

git地址：https://gitee.com/mm_sqc/aaa.git



## 项目搭建

```
安装脚手架
cnpm install -g @vue/cli

搭建项目
vue create 项目名称

选择以下选项
Choos Vue version
Babel
Router
Vuex
CSS Pre-processors

width-node-sass
```



## 配置首页路由

在views下面创建目录和文件

```
	views
				layout
						index.vue
				home

​						index.vue
​				 login
​						index.vue
​				404.vue
```

配置路由

```
const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
  },
  {
     path: '/login',
     name: 'Login',
     component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
   },
   {
      path: '*',
      name: 'Error',
      component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    }
]
```



## 使用narmalize.css

安装

```
npm install --save normalize.css 
```

在main.js中引入

```
import 'normalize.css/normalize.css'
```

## 使用element-ui

安装

```
npm install element-ui --save
```

在main.js中引入

```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

## 配置路由

修改router/index.js

```
{
		path: '/pms',
		title: "商品",
		name: 'pms',
		component:Layout,
		meta:{isMenu:true},
		redirect: "/product/list",
		children: [{
				path: "/product/list",
				title: "商品列表",
				component: () => import( /* webpackChunkName: "about" */ '../views/pms/product/index.vue')
			},
			{
				path: "/product/add",
				title: "添加商品",
				component: () => import( /* webpackChunkName: "about" */ '../views/pms/product/add.vue')
			},
			{
				path: "/cate/list",
				title: "商品分类",
				component: () => import( /* webpackChunkName: "about" */ '../views/pms/productCat/index.vue')
			},
			{
				path: "/type/list",
				title: "商品类型",
				component: () => import( /* webpackChunkName: "about" */ '../views/pms/productType/index.vue')
			},
			{
				path: "/brand/list",
				title: "品牌管理",
				component: () => import( /* webpackChunkName: "about" */ '../views/pms/productBrand/index.vue')
			}
		]
	}
```

新建文件

```
views
	pms
		product
			index.vue
			add.vue
		productBrand
			index.vue
		productCat
			index.vue
		productType
			index.vue
```

编写sideBar里面的导航菜单

```
<el-menu default-active="0" class="el-menu-vertical-demo" background-color="#294256" text-color="#BBCBD9"
		 active-text-color="#ffd04b">
			<router-link to="/home">
				<el-menu-item index="0"> <i class="el-icon-location"></i>首页</el-menu-item>
			</router-link>
			<template v-for="(item,index) in routerData">
				<template v-if="item.meta.isMenu">
					<el-submenu :index="index + ''">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{item.title}}</span>
						</template>
						<template v-for="(item2,index2) in item.children">
							<router-link :to="item2.path">
								<el-menu-item :index="index+'-'+index2"><i class="el-icon-location"></i>{{item2.title}}</el-menu-item>
							</router-link>
						</template>
					</el-submenu>
				</template>
			</template>
</el-menu>
```

## vcharts的使用

安装

```
npm i v-charts echarts -S
```

在main.js中引入

```
import VCharts from 'v-charts'
Vue.use(VCharts)
```

