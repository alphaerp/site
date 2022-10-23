(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{282:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("When projects are completed, you can build your application only run one command:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),e("p",[t._v("If you need a custom build, such as specifying the dist directory, you need to configure it through "),e("code",[t._v("outputDir")]),t._v(" in "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The configuration of all test environments or formal environment variables is in the "),e("code",[t._v(".env.xxxx")]),t._v(" file such as "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/.env.development",target:"_blank",rel:"noopener noreferrer"}},[t._v(".env.development"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("note! ! !")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("You can access them in your application code:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),e("p",[t._v("After running you can see the specific size distribution at "),e("a",{attrs:{href:"http://localhost:9526/report.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9526/report.html"),e("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12)]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("Simply speaking, the difference between them is the deal with routing. "),e("code",[t._v("hashHistory")]),t._v(" is processed by the path following "),e("code",[t._v("#")]),t._v(", front-end routing management through "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 5 History"),e("OutboundLink")],1),t._v(", and "),e("code",[t._v("browserHistory")]),t._v(" is similar to our usual page access path, and with not "),e("code",[t._v("#")]),t._v(", but must through the server's configuration.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Detail see "),e("a",{attrs:{href:"https://router.vuejs.org/zh-cn/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router document"),e("OutboundLink")],1)])])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"build-deploy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-deploy"}},[this._v("#")]),this._v(" Build & Deploy")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[this._v("#")]),this._v(" Build")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# build for production environment")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build:prod\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# build for stage environment")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build:stage\n")])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("After the build package is successful, the "),e("code",[t._v("dist")]),t._v(" folder will be generated in the root directory, which is to build a packaged file, usually static files such as "),e("code",[t._v("***.js")]),t._v(", "),e("code",[t._v("***.css")]),t._v(", "),e("code",[t._v("index.html")]),t._v(", etc. .")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"environmental-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables"}},[this._v("#")]),this._v(" Environmental variables")])},function(){var t=this._self._c;return t("p",[this._v("They all inject into the global context via the "),t("code",[this._v("webpack.DefinePlugin")]),this._v(" plug-ins.")])},function(){var t=this._self._c;return t("p",[this._v("Environment variables must start with "),t("code",[this._v("VUE_APP_")]),this._v(". Such as: "),t("code",[this._v("VUE_APP_API")]),this._v(", "),t("code",[this._v("VUE_APP_TITLE")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VUE_APP_xxxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"analyze-the-build-file-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyze-the-build-file-size"}},[this._v("#")]),this._v(" Analyze the build file size")])},function(){var t=this._self._c;return t("p",[this._v("If your build file is large, you can optimize your code by building and analyzing the size distribution of dependent modules using the "),t("code",[this._v("webpack-bundle-analyzer")]),this._v(".")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run preview -- "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("--report")]),this._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:"https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/3fddf034-2b38-4299-b0d2-b748fb2abef0.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("It is recommended to use gzip, after using the volume will be only the original 1/3 or so. You can also use lazy loading or Code Splitting.")])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"publish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[this._v("#")]),this._v(" Publish")])},function(){var t=this._self._c;return t("p",[this._v("For publishing, you only have to publish the resulting static file after build, which is usually the static file in the "),t("code",[this._v("dist")]),this._v(" folder, to your cdn or static server. Note that the "),t("code",[this._v("index.html")]),this._v(" usually will be an entry page for your backend service. You may need to change the page's import path after determining static for JS and css.")])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("In deployment may find that the resource path is wrong, just modify the "),t("code",[this._v("@/config/index.js")]),this._v(" file resource path.")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// changes configure depending on your own path")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[this._v("publicPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./'")]),this._v("\n")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"router-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router-server"}},[this._v("#")]),this._v(" Router & Server")])},function(){var t=this._self._c;return t("p",[this._v("In vue-element-admin, the front-end routing uses "),t("code",[this._v("vue-router")]),this._v(", so you have two options:"),t("code",[this._v("browserHistory")]),this._v(" and "),t("code",[this._v("hashHistory")]),this._v(".")])},function(){var t=this._self._c;return t("p",[this._v("This project uses "),t("code",[this._v("hashHistory")]),this._v(" by default, so if you have"),t("code",[this._v("#")]),this._v("in your url and you want to get rid of it, you need to switch to"),t("code",[this._v("browserHistory")]),this._v(".")])},function(){var t=this._self._c;return t("p",[this._v("Modify "),t("code",[this._v("src/router/index.js")]),this._v(" mode。")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mode: 'history' // Need backend support")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);