(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1da0b467"],{"0ebe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin_upload"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"movie_name_ipt",placeholder:"请输入您将上传的电影名称",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://47.97.214.211/api/upload","with-credentials":"",data:{movieName:this.name},multiple:"","on-error":t.on_err,"before-upload":t.beforeUpload,"on-success":t.on_success}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),a("em",[t._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传mp4文件，且不超过500MB")])])],1)},o=[],i=(a("b0c0"),{data:function(){return{name:""}},methods:{beforeUpload:function(t){var e=t.type,a=t.size;return this.name?/(mp4)|(png)/i.test(e)?a>524288e3?(alert("文件太大啦"),!1):void 0:(alert("文件格式不正确"),!1):(alert("请输入您将上传的电影名称后重新上传"),!1)},on_success:function(t,e,a){console.log(t),alert("上传成功")},on_err:function(t,e,a){aler("出错啦，请稍后重试！"),console.log(t)}}}),s=i,l=(a("d7ce"),a("2877")),c=Object(l["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},b0c0:function(t,e,a){var n=a("83ab"),o=a("9bf2").f,i=Function.prototype,s=i.toString,l=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(t){return""}}})},c7a6:function(t,e,a){},d7ce:function(t,e,a){"use strict";var n=a("c7a6"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-1da0b467.6ecaf38b.js.map