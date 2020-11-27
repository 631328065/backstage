# webpack

## 概念

 本质上，*webpack* 是一个现代 JavaScript 应用程序的*静态模块打包器(module bundler)*。当 webpack 处理应用程序时，它会递归地构建一个*依赖关系图(dependency graph)*，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 *bundle*。 

## 安装

```
npm init -y

cnpm i webpack webpack-cli --save-dev
```

## 打包命令

webpack默认只能打包js代码，不能打包其他的东西，如果需要，需要额外配置。

```
npx webpack a.js b.js
```

写配置文件

```
//path是nodejs里面的一个模块，是文件模块
const path = require('path');

module.exports = {
  //入口
  entry: './index.js',
  //出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

配置启动脚本

```
在package.json里面配置
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"build":"webpack"
  },
```

启动命令

```
npm run build
```

## 配置热部署

可以使用插件来完成这个功能

 webpack-dev-server是webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。 

**webpack-dev-server 主要提供两个功能：**

1.为静态文件提供web服务

2.自动刷新和热替换(HMR)

自动刷新指当修改代码时webpack会进行自动编译，更新网页内容

热替换指运行时更新各种模块，即局部刷新

 **.装webpack-dev-server** 

 **npm install --save-dev webpack-dev-server** 

配置启动脚本

```
"scripts": {
	"start":"webpack-dev-server --hot true --port 80"
  },
```

启动项目

```
npm start
```

同一版本

```
“devDependencies": {
   "webpack": "^4.17.1",
   "webpack-cli": "^3.3.9",
   "webpack-dev-server": "^3.8.2"
  }
```

## 打包css

安装css加载器

```
cnpm i style-loader css-loader
```

配置css加载器(webpack.config.js)

```
module:{
	rules:[
		{test:/\.css$/,use:['style-loader','css-loader']}
	]
}
```

引入css文件

```
require("./src/css/index.css")
```

## 打包html

安装html打包插件

```
npm install --save-dev html-webpack-plugin
```

配置插件

```
var HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [new HtmlWebpackPlugin({
 		 template: './src/index.html', 
		 filename: './index.html',
})]
```

## 解决路径问题

webpack打包的时候，默认不支持相对路径，需要额外配置加载器来解决这个问题,通常是url-loader加载器

安装url-loader

```bash
npm install --save-dev url-loader
```

配置加载器

```
module:{
	rules:[
		{test:/\.css$/,use:['style-loader','css-loader']},
		{test:/\.(jpg|png|jpeg|gif|svg)$/,'url-loader'}
	]
}
```

