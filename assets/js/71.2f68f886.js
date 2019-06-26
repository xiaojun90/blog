(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{173:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"umi-dva，完成用户管理的-curd-应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#umi-dva，完成用户管理的-curd-应用","aria-hidden":"true"}},[s._v("#")]),s._v(" umi + dva，完成用户管理的 CURD 应用")]),s._v(" "),t("h2",{attrs:{id:"开始之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始之前","aria-hidden":"true"}},[s._v("#")]),s._v(" 开始之前")]),s._v(" "),t("p",[s._v("安装yarn和tyarn")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 国内源")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" tyarn -g\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后面文档里的 yarn 换成 tyarn")]),s._v("\n$ tyarn -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_1-安装dva-cli-并创建应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装dva-cli-并创建应用","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.安装dva-cli,并创建应用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装dva")]),s._v("\ntyarn global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" dva-cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建应用，进入目录")]),s._v("\ndva new user-dashboard\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" user-dashboard\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_2-安装依赖，并启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装依赖，并启动项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.安装依赖，并启动项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tyarn \ntyarn start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("输入localhost:8000,能正常打开显示页面即可。")]),s._v(" "),t("h2",{attrs:{id:"_3-配置代理，能通过restful的方式访问：http-localhost-8000-api-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置代理，能通过restful的方式访问：http-localhost-8000-api-users","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.配置代理，能通过restful的方式访问：http://localhost:8000/api/users")]),s._v(" "),t("p",[s._v("修改.webpackrc文件,加上proxy配置")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proxy"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://jsonplaceholder.typicode.com/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"changeOrigin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pathRewrite"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^/api"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_4-生成users路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-生成users路由","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.生成users路由")]),s._v(" "),t("p",[s._v("umi中文件即路由，所以我们新增路由，只要新增文件即可。")]),s._v(" "),t("p",[s._v("新建src/pages/users/page.js,内容如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("Valine")],1)},[],!1,null,null,null);a.default=r.exports}}]);