(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-247365cf"],{4020:function(t,e,a){"use strict";a("d3b7");var n=a("bc3a"),i=a.n(n),l=a("5c96"),o=a("a78e"),s=a.n(o),r="http://8.129.43.113:8080/",c=null,u=i.a.create({timeout:7e3,baseURL:r,method:"post",headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:s.a.get("loginToken")}});u.interceptors.request.use((function(t){return c=l["Loading"].service({lock:!0,text:"拼命加载中..."}),t})),u.interceptors.response.use((function(t){return c.close(),t.data}),(function(t){console.log("TCL: error",t);var e=void 0!==t.Message?t.Message:"";return Object(l["Message"])({message:"网络错误"+e,type:"error",duration:3e3}),c.close(),Promise.reject(t)})),e["a"]=u},"571f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productCat-box"},[a("div",{staticClass:"dataList"},[a("i",{staticClass:"el-icon-tickets"}),a("span",[t._v("数据列表")]),a("el-button",{attrs:{size:"mini"},on:{click:t.openProductCatAdd}},[t._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",align:"center",label:"编号",width:"100"}}),a("el-table-column",{attrs:{prop:"name",align:"center",label:"分类名称",width:"262"}}),a("el-table-column",{attrs:{prop:"level",align:"center",label:"级别",width:"100"}}),a("el-table-column",{attrs:{prop:"productCount",align:"center",label:"商品数量",width:"100"}}),a("el-table-column",{attrs:{prop:"productUnit",align:"center",label:"商品单位",width:"100"}}),a("el-table-column",{attrs:{align:"center",label:"导航栏",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.row.navStatus,callback:function(a){t.$set(e.row,"navStatus",a)},expression:"data.row.navStatus"}})]}}])}),a("el-table-column",{attrs:{align:"center",label:"是否显示",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.row.showStatus,callback:function(a){t.$set(e.row,"showStatus",a)},expression:"data.row.showStatus"}})]}}])}),a("el-table-column",{attrs:{prop:"sort",align:"center",label:"排序",width:"100"}}),a("el-table-column",{attrs:{align:"center",label:"设置",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",disabled:t.isDisabled},on:{click:function(a){return t.seeSub(e.row)}}},[t._v("查看下级")]),a("el-button",{attrs:{size:"mini"}},[t._v("转移商品")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[5,10,15],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},i=[],l=a("f33f"),o={data:function(){return{tableData:[],pCatListId:0,total:0,pageNum:0,pageSize:0,isDisabled:!1}},mounted:function(){this.getPCatList()},methods:{getPCatList:function(){var t=this;Object(l["b"])(this.pCatListId).then((function(e){t.total=e.data.total,t.tableData=e.data.list}))},handleSizeChange:function(t){this.pageSize=t,console.log(t),this.getPCatList()},handleCurrentChange:function(t){this.pageNum=t,console.log(t),this.getPCatList()},seeSub:function(t){this.pCatListId=t.id,this.isDisabled=!this.isDisabled,this.getPCatList()},openProductCatAdd:function(){this.$router.push("/product/cat/add")}}},s=o,r=(a("9c0ea"),a("2877")),c=Object(r["a"])(s,n,i,!1,null,null,null);e["default"]=c.exports},"9c0ea":function(t,e,a){"use strict";a("a5bc")},a5bc:function(t,e,a){},f33f:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return o}));var n=a("4020");function i(t){return Object(n["a"])({url:"/productCategory/create",data:t})}function l(){return Object(n["a"])({method:"get",url:"/productCategory/list/withChildren"})}function o(t){return Object(n["a"])({method:"get",url:"/productCategory/list/".concat(t)})}}}]);
//# sourceMappingURL=chunk-247365cf.e373364e.js.map