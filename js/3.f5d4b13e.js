(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"06ef":function(t,e,i){},"8b24":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{},[i("section",{staticClass:"banner-img"}),i("section",{staticClass:"content"},[i("section",{staticClass:"github-repo q-pa-md row bg-white q-mb-md"},[i("section",{staticClass:"user-info-block q-px-lg"},[i("div",{staticClass:"user-photo-name row items-end"},[i("q-avatar",{staticClass:"q-mr-lg",attrs:{rounded:"",size:"250px"}},[i("q-img",{attrs:{src:t.myInfo["avatar_url"],"native-context-menu":""}},[i("div",{staticClass:"absolute-bottom text-subtitle1 text-center"},[t._v("\n                "+t._s(t.myInfo["name"])+"\n              ")])])],1),i("div",{staticClass:"text-h4 q-ma-none q-my-md q-my-md-none q-ma-md-md"},[t._v("\n            "+t._s(t.myInfo["login"])+"\n            "),i("div",{staticClass:"row"},[i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"home",size:"lg",type:"a",href:t.myInfo["html_url"]}}),i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"link",size:"lg",type:"a",href:t.myInfo["blog"]}})],1)])],1),i("div",{staticClass:"info-text  q-mt-md  q-ml-md"},[i("div",{staticClass:"text-h6 text-grey"},[t._v(t._s(t.myInfo["bio"]))])])]),t._l(t.myRepoList,(function(t,e){return i("GitHubItem",{key:e,attrs:{repoItem:t}})}))],2)])])},r=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("9523")),s=i.n(o),a=i("2f62"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-12 col-sm-6 col-md-4 q-pa-md"},[i("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[i("q-card-section",[i("div",{staticClass:"text-overline text-orange-9"},[t._v("專案名稱")]),i("div",{staticClass:"text-h5 q-mx-xs row"},[i("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(t.repoItem.name))]),i("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"link",type:"a",href:t.repoItem.html_url}})],1),i("div",{staticClass:"text-caption text-grey"},[t._v("Github 分類標籤")]),t.repoItem.language?i("div",{staticClass:"q-py-sm q-gutter-md"},["CSS"==t.repoItem.language?i("q-chip",{attrs:{dense:"",color:"primary","text-color":"white",icon:"fab fa-css3-alt"}},[t._v("CSS")]):t._e(),"HTML"==t.repoItem.language?i("q-chip",{attrs:{dense:"",color:"orange","text-color":"white",icon:"fab fa-html5"}},[t._v("HTML")]):t._e()],1):t._e()]),i("q-separator"),i("q-card-actions",{staticClass:"bg-blue-8 text-white",on:{click:function(e){return t.switchItemOpen(t.repoItem.name)}}},[i("span",{staticClass:"q-ml-md"},[t._v("專案提交紀錄")]),i("q-space"),i("q-btn",{attrs:{color:"white",round:"",flat:"",dense:"",icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down"}})],1),i("q-slide-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}]},[i("q-separator"),i("div",{staticClass:"q-pa-md relative-position"},[t.FileCommit.length>0?i("q-list",t._l(t.FileCommit,(function(e,n){return i("span",{key:n},[i("CommitItem",{attrs:{commitItem:e}}),n<t.FileCommit.length-1?i("q-separator"):t._e()],1)})),0):i("span",[t._v(t._s("該專案尚未有提交紀錄"))]),i("q-inner-loading",{staticClass:"absolute-center",attrs:{showing:t.visible}},[i("q-spinner",{attrs:{size:"50px",color:"primary"}})],1)],1)],1)])],1)],1)},m=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-item",[i("q-item-section",[i("q-item-label",[t._v("提交者："+t._s(t.commitItem.commit.committer.name))]),i("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v("\n   提交訊息: "+t._s(t.commitItem.commit.message)+"\n    ")])],1),i("q-item-section",{attrs:{side:"",top:""}},[i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.commitItem.commit.committer.date))])],1)],1)},u=[],p={name:"CommitItem",data:function(){return{expanded:!1}},methods:{},props:{commitItem:{type:Object,default:function(){return{}}}}},b=p,f=i("2877"),d=Object(f["a"])(b,l,u,!1,null,null,null),g=d.exports;function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y={name:"GitHubItem",data:function(){return{expanded:!1,FileCommit:[],visible:!1}},components:{CommitItem:g},computed:v({},Object(a["c"])({gitHubFileCommitList:function(t){return t.gitHubAPI.commits.gitHubFileCommitList}})),methods:v(v({},Object(a["b"])({gitHubFileCommit:"gitHubAPI/commits/gitHubFileCommit"})),{},{getFileCommit:function(t){var e=this;this.visible=!0,this.gitHubFileCommit(t).then((function(t){e.visible=!1,e.FileCommit=e.gitHubFileCommitList}))},switchItemOpen:function(t){this.expanded=!this.expanded,1==this.expanded&&this.getFileCommit(t)}}),beforeMount:function(){},props:{repoItem:{type:Object,default:function(){return{}}}}},I=y,O=Object(f["a"])(I,c,m,!1,null,null,null),q=O.exports;i("73ae");function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var w={name:"PageIndex",data:function(){return{myRepoList:[],myInfo:[]}},components:{GitHubItem:q},computed:C({},Object(a["c"])({gitHubUserRpeoList:function(t){return t.gitHubAPI.repos.gitHubUserRpeoList},gitHubUserInfoList:function(t){return t.gitHubAPI.user.gitHubUserInfoList}})),methods:C(C({},Object(a["b"])({gitHubUserRpeo:"gitHubAPI/repos/gitHubUserRpeo",gitHubUserInfo:"gitHubAPI/user/gitHubUserInfo"})),{},{getUserRpeoList:function(){var t=this;this.gitHubUserRpeo().then((function(e){t.myRepoList=t.gitHubUserRpeoList}))},getUserInfo:function(){var t=this;this.gitHubUserInfo().then((function(e){console.log(t.gitHubUserInfoList),t.myInfo=t.gitHubUserInfoList}))}}),beforeMount:function(){this.getUserRpeoList(),this.getUserInfo()}},x=w,j=(i("9b22"),Object(f["a"])(x,n,r,!1,null,"3e9b3c22",null));e["default"]=j.exports},"9b22":function(t,e,i){"use strict";var n=i("06ef"),r=i.n(n);r.a}}]);