(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0f14a4"],{4020:function(t,e,r){"use strict";r("d3b7");var a=r("bc3a"),o=r.n(a),n=r("5c96"),s=r("a78e"),c=r.n(s),d="http://8.129.43.113:8080/",i=null,u=o.a.create({timeout:7e3,baseURL:d,method:"post",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:c.a.get("loginToken")}});u.interceptors.request.use((function(t){return i=n["Loading"].service({lock:!0,text:"拼命加载中..."}),t})),u.interceptors.response.use((function(t){return i.close(),t.data}),(function(t){console.log("TCL: error",t);var e=void 0!==t.Message?t.Message:"";return Object(n["Message"])({message:"网络错误"+e,type:"error",duration:3e3}),i.close(),Promise.reject(t)})),e["a"]=u},"41f1":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm add-P-Cat",attrs:{model:t.productCatAdd,rules:t.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"分类名称：",prop:"name"}},[r("el-input",{model:{value:t.productCatAdd.name,callback:function(e){t.$set(t.productCatAdd,"name",e)},expression:"productCatAdd.name"}})],1),r("el-form-item",{attrs:{label:"上级分类：",prop:"productAttributeIdList"}},[r("el-select",{model:{value:t.productCatAdd.parentId,callback:function(e){t.$set(t.productCatAdd,"parentId",e)},expression:"productCatAdd.parentId"}},t._l(t.parentIdList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),r("el-form-item",{attrs:{label:"数量单位：",prop:"productUnit"}},[r("el-input",{model:{value:t.productCatAdd.productUnit,callback:function(e){t.$set(t.productCatAdd,"productUnit",e)},expression:"productCatAdd.productUnit"}})],1),r("el-form-item",{attrs:{label:"排序：",prop:"sort"}},[r("el-input",{model:{value:t.productCatAdd.sort,callback:function(e){t.$set(t.productCatAdd,"sort",e)},expression:"productCatAdd.sort"}})],1),r("el-form-item",{attrs:{label:"是否显示：",prop:"showStatus"}},[r("el-radio",{attrs:{label:1},model:{value:t.productCatAdd.showStatus,callback:function(e){t.$set(t.productCatAdd,"showStatus",e)},expression:"productCatAdd.showStatus"}},[t._v("是")]),r("el-radio",{attrs:{label:0},model:{value:t.productCatAdd.showStatus,callback:function(e){t.$set(t.productCatAdd,"showStatus",e)},expression:"productCatAdd.showStatus"}},[t._v("否")])],1),r("el-form-item",{attrs:{label:"是否显示在导航栏：",prop:"navStatus"}},[r("el-radio",{attrs:{label:1},model:{value:t.productCatAdd.navStatus,callback:function(e){t.$set(t.productCatAdd,"navStatus",e)},expression:"productCatAdd.navStatus"}},[t._v("是")]),r("el-radio",{attrs:{label:0},model:{value:t.productCatAdd.navStatus,callback:function(e){t.$set(t.productCatAdd,"navStatus",e)},expression:"productCatAdd.navStatus"}},[t._v("否")])],1),r("el-form-item",{attrs:{label:"分类图标："}},[r("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"",limit:3,"on-exceed":t.handleExceed,"file-list":t.fileList}},[r("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),r("el-form-item",{attrs:{label:"筛选属性：",prop:"productAttributeIdList"}},[r("el-cascader",{key:t.index,attrs:{options:t.productAttributeIdList,props:{label:"name",value:"id"},placeholder:"请选择"},on:{change:t.handleChangeScreen},model:{value:t.screenList,callback:function(e){t.screenList=e},expression:"screenList"}}),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{plain:""}},[t._v("删除")]),r("br"),r("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",size:"small"}},[t._v(" 新增 ")])],1),r("el-form-item",{attrs:{label:"关键词：",prop:"keywords"}},[r("el-input",{model:{value:t.productCatAdd.keywords,callback:function(e){t.$set(t.productCatAdd,"keywords",e)},expression:"productCatAdd.keywords"}})],1),r("el-form-item",{attrs:{label:"分类描述：",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.productCatAdd.description,callback:function(e){t.$set(t.productCatAdd,"description",e)},expression:"productCatAdd.description"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.submitCatAdd}},[t._v("提交")]),r("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)},o=[],n=(r("99af"),r("b0c0"),r("a9e3"),r("f33f")),s={data:function(){return{productCatAdd:{description:"",icon:"",keywords:"",name:"",navStatus:"0",parentId:"无上级分类",productAttributeIdList:[],productUnit:"",showStatus:"0",sort:0},parentIdList:[],productAttributeIdList:[],pCatListId:0,screenList:[],rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]},fileList:[],options:[],value:""}},mounted:function(){var t=this;this.getPCatList(),Object(n["a"])().then((function(e){return t.productAttributeIdList=e.data}))},methods:{getPCatList:function(){var t=this;Object(n["b"])(this.pCatListId).then((function(e){t.parentIdList=e.data.list}))},submitCatAdd:function(){var t=this;this.productCatAdd.showStatus=Number(this.productCatAdd.showStatus),this.productCatAdd.navStatus=Number(this.productCatAdd.navStatus),"无上级分类"==this.productCatAdd.parentId?this.productCatAdd.parentId=0:this.productCatAdd.parentId=Number(this.productCatAdd.parentId),Object(n["c"])({productCategoryParam:this.productCatAdd}).then((function(e){200==e.code&&(t.$message({type:"success",message:"修改商品成功"}),t.$router.push("/product/cat"))}))},resetForm:function(t){this.$refs[t].resetFields()},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t,e){return this.$confirm("确定移除 ".concat(t.name,"？"))},handleChangeScreen:function(t){this.productCatAdd.productAttributeIdList=[],this.productCatAdd.productAttributeIdList.push(t[1])}}},c=s,d=(r("91c1"),r("2877")),i=Object(d["a"])(c,a,o,!1,null,null,null);e["default"]=i.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),o=r("5899"),n="["+o+"]",s=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(t,e,r){var a=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var n,s;return o&&"function"==typeof(n=e.constructor)&&n!==r&&a(s=n.prototype)&&s!==r.prototype&&o(t,s),t}},8418:function(t,e,r){"use strict";var a=r("c04e"),o=r("9bf2"),n=r("5c6c");t.exports=function(t,e,r){var s=a(e);s in t?o.f(t,s,n(0,r)):t[s]=r}},"91c1":function(t,e,r){"use strict";r("c248")},"99af":function(t,e,r){"use strict";var a=r("23e7"),o=r("d039"),n=r("e8b5"),s=r("861d"),c=r("7b0b"),d=r("50c4"),i=r("8418"),u=r("65f0"),l=r("1dde"),p=r("b622"),f=r("2d00"),m=p("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",v=f>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),C=l("concat"),A=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:n(t)},g=!v||!C;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,r,a,o,n,s=c(this),l=u(s,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?s:arguments[e],A(n)){if(o=d(n.length),p+o>b)throw TypeError(h);for(r=0;r<o;r++,p++)r in n&&i(l,p,n[r])}else{if(p>=b)throw TypeError(h);i(l,p++,n)}return l.length=p,l}})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),o=r("da84"),n=r("94ca"),s=r("6eeb"),c=r("5135"),d=r("c6b6"),i=r("7156"),u=r("c04e"),l=r("d039"),p=r("7c73"),f=r("241c").f,m=r("06cf").f,b=r("9bf2").f,h=r("58a8").trim,v="Number",C=o[v],A=C.prototype,g=d(p(A))==v,I=function(t){var e,r,a,o,n,s,c,d,i=u(t,!1);if("string"==typeof i&&i.length>2)if(i=h(i),e=i.charCodeAt(0),43===e||45===e){if(r=i.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(i.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+i}for(n=i.slice(2),s=n.length,c=0;c<s;c++)if(d=n.charCodeAt(c),d<48||d>o)return NaN;return parseInt(n,a)}return+i};if(n(v,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var y,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(g?l((function(){A.valueOf.call(r)})):d(r)!=v)?i(new C(I(e)),r,w):I(e)},x=a?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)c(C,y=x[S])&&!c(w,y)&&b(w,y,m(C,y));w.prototype=A,A.constructor=w,s(o,v,w)}},b0c0:function(t,e,r){var a=r("83ab"),o=r("9bf2").f,n=Function.prototype,s=n.toString,c=/^\s*function ([^ (]*)/,d="name";a&&!(d in n)&&o(n,d,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},c248:function(t,e,r){},f33f:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s}));var a=r("4020");function o(t){return Object(a["a"])({url:"/productCategory/create",data:t})}function n(){return Object(a["a"])({method:"get",url:"/productCategory/list/withChildren"})}function s(t){return Object(a["a"])({method:"get",url:"/productCategory/list/".concat(t)})}}}]);
//# sourceMappingURL=chunk-6e0f14a4.3a81f243.js.map