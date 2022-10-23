(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{274:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Programmers with engineering literacy will pay attention to coding standards, and Code Linting (Lint) is an important means to ensure code specification and consistency.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Common process: write the code locally, submit, start running lint, find that it does not pass, modify the code locally, submit it, wait for the result of CI, and repeat the previous operation if there are any problems.")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("The most effective solution is to put the "),e("code",[t._v("Lint")]),t._v(" checksum locally. The common practice is to use "),e("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://github.com/observing/pre-commit",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-commit"),e("OutboundLink")],1),t._v(" Do a "),e("code",[t._v("Lint")]),t._v(" check before committing locally.")]),t._v(" "),e("blockquote",[e("p",[t._v("Of course, if you use "),e("code",[t._v("vue-cli@3")]),t._v(" when creating your project, you can also use its built-in "),e("a",{attrs:{href:"https://github.com/yyx990803/yorkie",target:"_blank",rel:"noopener noreferrer"}},[t._v("yorkie"),e("OutboundLink")],1),t._v(", which is based on "),e("code",[t._v("husky")]),t._v(", but Changed the interface. But here we still use "),e("code",[t._v("husky")]),t._v(" as an example.")])]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("To solve the pain points above, you need to use "),e("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),e("OutboundLink")],1),t._v(". It will only check to check what you submitted or what you modified.")]),t._v(" "),t._m(14),e("p",[t._v("Then, modify the package.json configuration:")]),t._v(" "),t._m(15),e("p",[t._v("As configured above, each time it will only check your local configuration for the "),e("code",[t._v("eslint")]),t._v(" rule (this see the document "),e("router-link",{attrs:{to:"./eslint.html"}},[t._v("ESLint")]),t._v(") before your local "),e("code",[t._v("commit")]),t._v(", if it meets the rules, it will be submitted successfully. If it does not match, it will automatically execute "),e("code",[t._v("eslint --fix")]),t._v(" to try to help you fix it automatically. If the repair is successful, it will help you to submit the repaired code. If it fails, you will be prompted with an error, and you will be allowed to submit the code only after you fix it.")],1),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("The best "),e("code",[t._v("lint")]),t._v(" specification process is to recommend team members to configure "),e("code",[t._v("eslint")]),t._v(" in their own editor, and turn on the "),e("code",[t._v("eslint-loader")]),t._v(" error in webpack, so the editor can help you automatically fixed some simple errors when you write. At the same time, it can obviously remind you of the code that does not meet the "),e("code",[t._v("lint")]),t._v(" specification. See "),e("router-link",{attrs:{to:"./eslint.html"}},[t._v("ESLint")]),t._v(" for details on this.")],1),t._v(" "),e("p",[t._v("But this is not mandatory. Some team members or newly arrived interns have not configured the lint rule in the editor or ignored the error in the command line. In this case, you need to configure the mandatory pre-commit. Check that everything submitted to the remote repository is in compliance with the team's specifications.")])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"git-hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks"}},[this._v("#")]),this._v(" Git Hooks")])},function(){var t=this._self._c;return t("p",[this._v("What are the benefits of using "),t("code",[this._v("Lint")]),this._v("? In my opinion, it has at least the following three points:")])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("Fewer bugs")]),this._v(" "),t("li",[this._v("With higher development efficiency, Lint can easily find low-level, obvious errors.")]),this._v(" "),t("li",[this._v("Higher code readability")])])},function(){var t=this._self._c;return t("p",[this._v("Many times our "),t("code",[this._v("lint")]),this._v(" check is placed in the continuous integration phase, the approximate process is as follows:")])},function(){var t=this._self._c;return t("blockquote",[t("p",[this._v("Code Submission --\x3e Run CI Found Problem (Remote) --\x3e Local Fix Issue --\x3e Resubmit --\x3e Pass Check (Remote)")])])},function(){var t=this._self._c;return t("p",[this._v("But there is a problem with this. Our "),t("code",[this._v("CI")]),this._v(" (continuous integration) often doesn't just do "),t("code",[this._v("Lint")]),this._v(" work, it also has many other tasks (such as packaging files, static resources uploaded to CDN, etc.), which leads to It's a special waste of time, it may take a few minutes for you to find the problem, or sometimes you don't find your "),t("code",[this._v("CI")]),this._v(" is failed.")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"husky"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[this._v("#")]),this._v(" husky")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note: Our examples are all 1.3.1+ versions!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("Then modify "),t("code",[this._v("package.json")]),this._v(" to add the configuration:")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --ext .js,.vue src"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("Finally try the "),t("code",[this._v("Git")]),this._v(" submission and you will receive feedback soon:")])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('git commit -m "Keep calm and commit"\n')])])])},function(){var t=this._self._c;return t("p",[this._v("But there is a problem. In my this git submission, I may have only modified one file. For example, I modified the content of "),t("code",[this._v("foo.js")]),this._v(", but it will still check all the '.js' files in "),t("code",[this._v("src")]),this._v(". It is very unfriendly. Every time I submit the code I wrote, I have to solve the other person's code lint problem first, then I can submit the code smoothly, and when the project is big, the inspection speed will become more and more slow.")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"lint-staged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged"}},[this._v("#")]),this._v(" lint-staged")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" lint-staged "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-D")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("-S")]),this._v("\n")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/**/*.{js,vue}"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"to-sum-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-sum-up"}},[this._v("#")]),this._v(" To sum up")])}],!1,null,null,null);e.default=n.exports}}]);