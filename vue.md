vue.js



## 前端开发：

网景公司

94年拥有了浏览器，有了html		

95年退出了javascript，但是没有ajax，需要有变化，一定要先刷新浏览器。

99年之后才开始诞生ajax，才开始流行。

jquery开始流行，是从06年1月份单身，一直流行到18年。

在此期间，我们的开发，都是遵循mvc模式，所谓的mvc模式，就是model-view-controller,

我们的前端工程师，主要负责就是view视图层，负责页面的dom处理，数据渲染，请求的发送。在此过程中，我们需要频繁的操作节点，增删改查节点，所以jquery一直用，一直爽。



nodejs出现，目的是为了能够让我们的js语言脱离浏览器独立运行。其实nodejs本质上就是浏览器的js引擎独立出来变成了一个软件，这个软件可以安装在"任何"平台上面，这样一来，我们就可以在任何地方运行js代码了。



可以直接使用js写接口，可以直接使用js链接数据库，可以干掉后台。



 现在主流的开发模式

​		

mvvm

- Model：提供/保存数据。
- View：视图
- View-Model：简化的 Controller，唯一的作用就是为 View 提供处理好的数据，不含其它逻辑。



由于诞生了mvvm模式，就出现很多跟他相关的框架。其中最流行的就是vue.js,其实还有react.



主流浏览器：

​	谷歌	webkit:360浏览器

​	火狐(moz):

​	IE(ms):



## vue.js

官网：

​	https://cn.vuejs.org/



### 简介

 Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。 

### 下载

直接从官网下载即可



## 安装调试工具

vue-dev-tool在我们的谷歌浏览器上面。

下载对应的文件夹，拖到拓展程序里面去即可。



注意：

1.如果你的vue程序，打开的时候，看不到vue选项，说明你的vue.js引入的版本有问题，可能是min版本

2.如果你的vue调试里面，不嗯呢改变数据的值，说明调试工具的版本过低。



## 入门程序

告诉大家，vue是一个mvvm框架，数据改变视图变，视图改变数据变。

```
<div id="#app">
	<input v-model="msg"/>
</div>

new Vue({
	el："#app",
	data:{
		msg:'华为'
	}
})
```

## vue实例

```

new Vue({
	el:"#app"，		当前vue实例管理的节点
	data:{
					表示数据
	},
	mounted(){
					//挂载的函数
	},
	created(){
					//创建vue实例的时候执行的函数
	},
	methods:{
					//写供给vue使用的函数
	},
	computed:{
					//计算属性
	},
	watch:{
					//侦听器
	},
	filters:{
					//过滤器
	},
	componts:{
					//组件
	},
	template:{
					//模板
	},
	render:{
					//渲染函数
	}
})
```

## 插值表达式

​		主要作用是将vue的值展示页面上去。

​		插值表达式存在插值闪烁现象

```
{{msg}}

{{1>2}}			

{{msg=='1'?'2':'3'}}

{{"hello world"}}
```

​	

## 指令

### v-text

能够取代插值表达式，不会产生插值闪烁现象。

```
<p v-text="msg"/>

data:{
	msg:'华为'
}
```

### 	v-html

能够解析数据里面的html标签,v-text以及插值表达式都是做不到的。

```
<ul v-html="content"></ul>

data:{
	content:'<li>这里是一个li节点</li>'
}
```

### v-once

该指令表示修饰的标签只能渲染一次。对于后期值的改变，不会再影响了.

```
<p v-once>{{msg}}</p>

<p v-once v-text="msg"></p>
```

### v-bind

表示将标签的属性的值与vue的值进行绑定

v-bind也能简写:  v-bind:width--->:width		v-bind:height---->:hiehgt

```
将width的值与data中的wid的值进行绑定.

<img v-bind:width="wid"/>

data:{
	wid:"100"
}
```

高级用法，其实就是不仅将属性的值与vue绑定，甚至于将标签的属性本身也与vue进行绑定。

```
<img v-bind:[attr]="val"/>

data:{
	attr:"width",
	val:"100"
}
```

### v-on

为我们的标签绑定事件，跟js中的onclick这种类似。只是将on替换成v-on:事件的名字。

其实v-on可以简写，比如绑定点击事件，我们可以这样子写@click,其他事件@mouseover,@mouseout

```
<button v-on:click="m1('雷阵雨夹人民币')">点击我弹个窗</button>
methods:{
			//所有的事件必须写在这个里面
			m1(param){
				console.log("今天天气晴转多云",param)
			}
}
```

## v-if

这个指令的主要作用就是能够让我们写判断。

特点：条件成立，就会渲染里面的内容，否则不会渲染标签，连标签都不会存在.

```
<input v-model="age" />
<!-- 如果年龄小于18，就输出小屁孩儿 -->
<p v-if="age < 18">小屁孩儿</p>
<!-- 如果年龄大于18小于38，就输出好好工作，前途无量 -->
<p v-else-if="age >= 18 && age < 38">好好工作，前途无量</p>
<!-- 如果年龄大于38，就输出老了，好好还贷 -->
<p v-else>老了，该认命了</p>
```

## v-show

跟v-if有点儿类，都是控制可见不可见的。但是他跟v-if不同的是，v-show只是控制display的值，而不是渲染本身。如果是内容很多，然后切换很频繁的情况下，建议使用v-show，用户体验会比较好。但是内容比较少，建议直接使用v-if，不影响。

```
true就是显示，false就是不显示.

<img v-show="true"/>
```

## v-for

写循环用的。可以循环放很多的数据。

```
<tr v-for="book in books">
    <td>{{book.id}}</td>
    <td>{{book.name}}</td>
    <td>${{book.price}}</td>
    <td>{{book.author}}</td>
</tr>
```



## 计算属性

首先它是一个属性，类似于vue实例中data中的值，本质上差不多，通常计算属性里面的值是从data中的值里面计算出来的。

```
computed:{
	manStus(){
		var v = this.stus.filter(item=>{
			return item.sex == '男';
		})
		return v;
	}		//根据stus计算出来的.
				
}
```

### 计算属性和方法相比较。

计算属性自动带有缓存的功能，不会频繁计算相同的结果，而是直接从缓存里面调用。而方法，是傻的，调用几次就执行多少次。





## 侦听属性

跟计算属性特别类似，功能基本相同。只是应用场景不一样。侦听属性适合开销比较大的一些计算。比如发送异步请求加载数据，就比较适合用侦听属性。 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。 

watch可以侦听data里面的值，也可以侦听computed计算属性里面的值。

```
watch:{
	manStus(n,o){
		//o标书之前的值，n表示改变之后的值
		console.log("我监听到stus的值发生变化了",o,n)
	}
	//无数个
}
```

## class与style的绑定

本质上就是说我们如何通过vue给class以及style绑定值。

本来是一件很简单的事情，但是vue同学考虑到让我们可以使用多种类型的值，以为能够方便我们的开发，实际上，并没有那么厉害的效果。他的意思是我们赋予class与style的值，可以实现多元化，比如字符串类型，对象类型，数组类型。。

```
绑定class的值
值为对象类型
 :class="{'bgc':isBgc, 'cblue':isCblue}" 
 
 data:{
 	isBgc:true,
 	isCblue:true
 }
 如果两个都为true，结果就是  class="bgc cblue"
 如果isBgc为true，另一个为false  结果就是class="bgc"
 如果两个都是false，结果为 class=""
 
 值为数组类型
 :class="[aa,bb,1>2?cc:dd]"
 
 data:{
 	aa:'fz20',
 	bb:'cblue'
 }


绑定style的值
值为对象类型
:style="{border:border,padding:padding+'px'}"
data:{
	border:'1px solid red',
	padding:10
}

值为数组类型
:style="[myborder,mypadding]"
data:{
	myborder:{border:'1px solid red'},
	mypadding:{padding:'10px'}
}
```



## 多重值

 这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。 

```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

## 维护状态

 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` 

```
循环出来10个div，那么我们的每一个div都会有一个独一无二的key值。方便vue对我们的节点进行跟踪。
<div v-for="(item,index) in books" :key="index">
	<div v-for="(item2,index2) in books2" :key="index-index2"></div>
</div>
```

## 数组更新检测

 Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括： 

- `push()`					添加新元素
  - `pop()`  			弹出数组的最后一个元素
- `shift()`                  弹出数组第一个元素
- `unshift()`              可以在数组的前面添加一个或者多个元素，返回数组长度
- `splice()`                可以删除指定位置的n个值，并且使用新的值进行替换
- `sort()`                     排序作用
  - `reverse()      	逆转数组



## 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。修饰符是由点开头的指令后缀来表示的。

- `.stop`

主要就是解决事件冒泡的

```
<div class="out" @click="out">
	<div @click.stop="inner"></div>
</div>
```

- `.prevent`

主要作用就是阻止默认事件的，比如阻止表单的提交事件，比如阻止右键默认菜单事件

```
<li @contextmenu.prevent="rightClick">西红柿炒番茄</li>	
<form action="http://www.baidu.com" @submit.prevent="onSubmit">
```

- `.capture`

主要用在外层元素捕获内层的事件，对于内层事件来说，本来应该是先内后外，但是一旦使用了捕获，就变成了先外后内。

```
<div class="out" @click.capture="out">
	<div @click="inner"></div>
	.capture捕获事件
</div>
```

- `.self`

主要作用就是表明他修饰的事件，只有他自己触发才能生效，冒泡等等，都是不触发的。

```
<div class="out" @click.self="out">
    <div @click="inner"></div>
    .self事件
</div>
```

- `.once`

表示对应的事件只执行一次。

```
<button type="button" @click.once="btn">我是内容我是呢哦让</button>
```

- `.passive`

```
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

这个 `.passive` 修饰符尤其能够提升移动端的性能。

不要把 `.passive` 和 `.prevent` 一起使用，因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，`.passive` 会告诉浏览器你*不*想阻止事件的默认行为。



## 按键修饰符

 在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符： 

- .enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

## 系统修饰符

 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。 

- `.ctrl`

- `.alt`

- `.shift`

- `.meta`

- ###### `.exact` 

`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```

## 鼠标按钮修饰符

 这些修饰符会限制处理函数仅响应特定的鼠标按钮。 

- `.left`
- `.right`
- `.middle`

## 表单输入绑定









## 表单修饰符

.lazy

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件_之后_进行同步：

```
<input name="name" v-model.lazy="stu.name" @input="ip" @change="cg"/>
```

.number

 如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符,自动过滤出数字类型，其他类型去掉.

```
<input v-model.number="stu.age"/>
```

.trim

自动去掉内容首尾的空格

```
<input v-model.trim="stu.msg"/>
```

## 组件

什么是组件

组件是一个可以复用的vue实例，它往往代表一个html片段，这个片段有自己独立的vue实例来进行管理，有template，不需要写el。组件生来就是被别人调用的。

组件的tempalte只能写一个根节点  <div><div></div></div>
组件里面的data是一个函数，而不是对象
组件的内容只能写在他的template里面

定义组件

```
let con = {
	template:'',	里面是放htl内容的，只能有一个根节点
	
	data(){
		return{
			msg:''	表示数据
		}		
	},
	。。。其它跟vue实例是一样的
}
```

注册组件

局部注册

局部注册的组件，组件注册给谁，谁就可以用该组件

```
new Vue({
		el:"#app",
		data:{
			name:'老王'
		},
		// 局部注册组件
		 components:{
		 	//组件名:组件内容
		 	"con01":con01
		}
	})
```

全局注册

全局注册的组件，所有人都可以用

```
Vue.component("con01",con01)
```



使用组件

```
<con01></con01>
```



父子组件的使用

```
//子组件
	let order1 = {
		template:`<div class="order1">
			<li v-for="item in items" v-text="item.name"></li>
		</div>`,
		data(){
			return{
				items:[
					{name:"番茄炒蛋"},
					{name:"番茄炒鸡蛋"},
					{name:"番茄炒驴蛋"},
					{name:"番茄炒笨蛋"}
				]
			}
		}
	}
	
//父组件
let body1 = {
		template:'<div class="body1">网页的身子<p></p><order1></order1></div>',
		components:{
			"order1":order1
		}
	}

调用父组件，父组件调用子组件
<div id="app">	
	<body1></body1>
</div>
```

## 父传子---》组件的通讯

子组件要使用父组件里面的数据,

传递数据(父组件调用子组件的时候进行传递)

```
传递静态数据
<zi shuju="老王"></zi>

如果要传递的数据是父组件里面的数据(msg指的是父组件里面的数据)
<zi :shuju = "msg"></zi>
```

接收数据(子组件接收数据)

```
{
	template:"{{shuju}}",	//调用数据----结果是老王
	props:["shuju"]			//接收数据
}
```

## 子传父---》组件的通讯

父组件要使用子组件里面的数据，



## 单向数据流

 所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解 

子组件传递数据

![](C:\Users\root\Desktop\mdimg\子传父.png)

## 自定义组件的v-mode

本质上就是教会我们可以在组件上使用v-model，v-model是表示值的双向绑定的，那么如何应用在组件上呢？他本意是指利用v-mode的两个特性，其一，v-model默认和value属性进行绑定，其二v-mode的值默认在input事件中进行更新。

![](C:\Users\root\Desktop\mdimg\9.png)

## 为组件绑定原生事件

一般情况下，很少会为组件去绑定原生事件。但是如果你非得这么干，就需要按照下面的方式来做，其实说白了，就是在原本的做法前提下，添加一个.native修饰符.

```
<son @click.native="sayHello"></son>
```

## 插槽

什么是插槽呢？插槽主要是指我们向组件里面插入数据。目前我们使用组件是这样的

<son></son>

我们的两队尖括号中间是没办法写任何数据的。就算也毫无效果.

要想能够顺利插入数据，需要在组件内部提前安好(开放，定义)插槽,这样，后面才能写值进入

定义插槽

```
<slot></slot>					//默认插槽

 <slot name="usb"></slot>//具名插槽
```



使用插槽

```
<son>这里的内容都会放到默认slot里面去</son>

<template #usb>
    这里面的内容，都会被插入到name为usb的插槽里面去
</template>
```

插槽作用域

定义插槽的时候绑定值

```
<slot :mydata="msg"></slot>
```

使用插槽的时候，取值

```
<template #default="prop">
	{{prop.mydata}}
</template>
```



<template #usb>
    这里面的内容，都会被插入到name为usb的插槽里面去
</template>

## 混入

 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。 

定义混入对象

```
混入对象里面的内容是组件的内容，组件能写什么他就能写什么
let app = {
		data(){
			return{
				appName:"坐上官"		,//混入公共数据，自己有使用自己的，没有就是用混入的。
			}
		},
		mounted() {
			console.log("app...mounted");
		},
		methods:{
			sayhello(){
				return "hello world!";
			}
		}
		// ..其他都一样，都是公共的。
	}
```

注册混入对象

```
全局混入
Vue.mixin(app)

局部混入
new Vue({
	mixins:[app]
})
```

使用混入对象

组件如果有混入对象，能够直接调用混入对象的data，computed，methods等值，如果是生命周期函数，那么会重复执行混入对象的，以及自己的。

## 自定义指令	

指令大家肯定已经见过了，v-if,v-show,v-once,v-html,v-text等等。大家看到这些指令，可以总结两个内容。其一，指令的名字都要用v-开头，其二指令要作用在标签上面。

指令的主要作用就是可以改变他作用的标签的一些表现行为。

要想改变标签的行为(表现方式),我们首先需要了解标签渲染的生命周期函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 

我们会在[稍后](https://cn.vuejs.org/v2/guide/render-function.html#虚拟-DOM)讨论[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)时介绍更多 VNodes 的细节。

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

接下来我们来看一下钩子函数的参数 (即 `el`、`binding`、`vnode` 和 `oldVnode`)。

- `el`：指令所绑定的元素，可以用来直接操作 DOM。

- ```
  binding
  ```

  ：一个对象，包含以下 property：

  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。

- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 来了解更多详情。

- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

全局注册

```
Vue.directive("dis",{
		inserted(el,binding){

		}
	})
```

局部注册

```
directives: {
    focus: {
        // 指令的定义
        inserted: function (el) {
        	el.focus()
        }
    }
}
```

## 渲染函数

 Vue 推荐在绝大多数情况下使用模板（template)来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。 

![](C:\Users\root\Desktop\vue\mdimg\10.png)

```
new Vue({
		el:"#app",
		components:{
			"con":{
				
				render(createElement) {
					return createElement("h1","天王斗地主");
				},
				template:`<p>我是一个段落，呵呵呵呵呵</p>`,
			}
		}
	})
```

## 插件

插件是我们的帮手，一些我们不好操作的事情，可以交给插件做。我们再实际工作中，大部分时候都是使用别人的插件，极少会自己动手封装插件。

1. 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)
2. 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)
3. 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)

定义插件

```
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

使用插件

```
Vue.use(MyPlugin);
```

## 过滤器

 Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示： 

定义过滤器

```
全局过滤器
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})


局部过滤器
new Vue({
	filters:{
			sexFilter(value){
				//value就表示要过滤的那个值
				return value == 1 ? "男" : "女";
			}
		}
})
```

使用过滤器

```
{{item.sex | sexFilter}}
```

# 路由

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行



## 下载路由

```
cnpm i vue-router
```

## 路由入门

```
<body>
		<div id="app">
			<!-- 5.写链接 -->
			<router-link to="/a">
				<button>指南</button>
			</router-link>
			<router-link to="/b">
				<button>API</button>
			</router-link>
			<!-- 4.路由展示窗口 -->
			<router-view></router-view>
		</div>
	</body>
</html>
<script src="../js/vue.js"></script>
<!-- 1.引入路由模块 -->
<script src="../js/vue-router.js"></script>
<script>
	let zhinan = {
		template:`<h1>我是指南</h1>`
	}
	let api={
		template:`<h1>api</h1>`
	}
	// 1.5  配置路由规则
	let routes = [
			{path:"/a",component:zhinan},
			{path:"/b",component:api}
		]
	// 2.配置路由
	let router = new VueRouter({
		// 配置路由规则
		routes
	})
	new Vue({
		el:"#app",
		components:{
			zhinan,
			api
		},
		// 3.注册路由
		router
	})
</script>

```

## 动态路由
动态路由的意思就是使用同一组件，然后拥有不同的数据，能够展示除不同的效果。
路由跳转的链接配置

```
<router-link to="showitem/1">{{item.catname}}</router-link>
```
路由配置
```
{path:"/showitem/:id",component:zhinan}
```
路由组件中获取动态参数
```
this.$route.params.id
```
## notfound
当我们访问的路径出现了错误，就会被*号匹配到，从而呈现错误页面

```
let not={
		template:`<h1 style="color:red">Not Found !</h1>`
	}
{path:"*",component:not}
```

## 嵌套路由
所谓嵌套路由，就是在组件内部，跳转到内部的路由展示位置，我们称之为嵌套路由
```
	1.在组件中定义子路由跳转
	let zhinan = {
		template:`
		<div class="zhi-box">
			<div class="zuo">
				<h1><router-link to = "zhinanitem">我是指南</router-link></h1>
				<h1><router-link to = "zhinanzhen">我是指南针</router-link></h1>
				<h1>我是南风</h1>
			</div>
			<div class="you">
				<router-view></router-view>
			</div>
		</div>
		`
	}
	
	2.在路由中定义嵌套路由
	{path:"/a",component:zhinan,
        children:[
        {path:"/zhinanitem",component:zhinanitem},
        {path:"/zhinanzhen",component:zhinanzhen}

        ]
    }
    
    3.在路由组件中，添加子路由的展示视图(router-view)(第一步有了)
    <div class="you">
   		 <router-view></router-view>
    </div>
    
```

##  编程式的导航

跟html类似，除了可以直接使用超链接进行跳转以外，也能够使用js绑定事件的形式，通过javascript的对象的open，或者location.href等形式进行页面的跳转.在vue当中，除了使用<router-link>进行页面的跳转意外，也为我们提供了一套用于页面跳转的api，就叫做编成式导航。

路由配置

```
new VueRouter({
	routes:[
		{path:"/a",name:"user",component:aa}
	]
})
```

编程式路由跳转

```
this.$router.push("a")
this.$router.push({path:"/a"})
this.$router.push("{name:"user"}")
```

编程式导航带参数

```
query传参
query的传参形式，类似于get请求的参数，会显示在浏览器的地址栏，发请求可以用path，也可以用name
this.$router.push({path:"/a",query:{name:"jack",age:21}})

接收参数
let name = this.$route.query.name;
let age = this.$route.query.age;
```



```
params传参
params的传参形式，类似于post请i去的参数，同时只能使用name路由的方式进行跳转
this.$router.push({name:"aa",params:{name:"jack",age:21}})

接收参数
let name = this.$route.params.name;
let age = this.$route.params.age;
```

## 历史对象（History）

所谓的历史对象，就是能够控制路由的上一个地址或者下一个地址，或者相对的地址中进行来回反复。

```
this.$router.go(-1)		上一个路由地址
this.$router.go(2)		下两个路由地址
```

## 命名视图

所谓的命名试图，其实就是将router-view取一个名字，然后就叫做命名试图了

比如 <router-view></router-view>			默认视图

​         <router-view name="aa"></router-view>命名试图了，而且名字叫aa

使用命名路由我们可以在同一个界面上展示多个router-view，可以同时加载多个组件。

```
命名视图
<div class="div03">
	<router-view name="k1"></router-view>
</div>
<div class="div04">
	<router-view name="k2"></router-view>
</div>

配置路由(当我们访问api的时候，k1里面展示了api那个组件，k2里面展示了合作那个组件)
routes:[
    {
    	path:"/api",
        components:{
            k1:{template:`<h1>api</h1>`},
            k2:{template:`<h1>合作合作，天天合作</h1>`}
        }
    }
]
```

## 重定向

所谓重定向就是我们访问a，可以直接顶到到b ，地址栏的显示也会跟着改变

```
默认情况下，我们访问/b
{path:"/",redirect:"/b"}
```

## 别名

所谓别名，其实就是当我们访问/a，其实有可能访问的是/b，地址栏仍会显示/a

```
{path:"/b",alias:"/a",component:con}
```

## 路由组件传参

 在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。 

```
let router = new VueRouter({
		routes:[
			// 将/的请求路径定向到/api
			// {path:"/a/:id", component:{template:`<h1>组件内{{$route.params.id}}容</h1>`}}
			{path:"/a/:id", 
				component:{
					props:["id"],
					template:`<h1>组件内{{id}}容</h1>`,
				},
				props:true,
			}
		]
	})
```

