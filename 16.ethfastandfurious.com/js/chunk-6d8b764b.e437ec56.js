(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d8b764b"],{1923:function(t,e,a){},7548:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-main",class:"remember"===t.type_active||"login-token"===t.type_active?"large-one":"large-two"},["not-have-permission"!==t.type_active?["login"===t.type_active||"register"===t.type_active?a("div",{staticClass:"content-box content-login"},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("ct-login")))]),a("login",{on:{change:t.changeType,back:t.back}}),a("div",[a("a",{staticClass:"text-forgot-password",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeType("remember")}}},[t._v(t._s(t.$t("ct-forgot-password")))])])],1):t._e(),"login"===t.type_active||"register"===t.type_active?a("div",{staticClass:"content-box content-register"},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("ct-register")))]),a("register",{attrs:{areas_register:t.areas_register},on:{change:t.changeType,back:t.back}})],1):t._e(),"remember"===t.type_active?a("div",{staticClass:"content-box content-forgot forgot"},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("ct-forgot-password")))]),a("remember-password",{on:{change:t.changeType,back:t.back}}),a("div",{staticClass:"mx-5 mt-2 d-flex"},[a("div",{staticClass:"text-center flex-grow-1"},[a("a",{staticClass:"helper-forgot-password",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeType("register")}}},[t._v(t._s(t.$t("ct-register")))]),a("span",{staticClass:"mx-1 helper-forgot-password"},[t._v("|")]),a("a",{staticClass:"helper-forgot-password",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeType("login")}}},[t._v(t._s(t.$t("ct-sign-in")))])])])],1):t._e(),"login-token"===t.type_active?a("div",{staticClass:"content-box content-forgot forgot"},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("ct-access-with-token")))]),a("login-token",{on:{change:t.changeType,back:t.back}})],1):t._e()]:"not-have-permission"===t.type_active?[a("not-have-permission",{on:{back:t.back}})]:t._e()],2)},n=[],c=a("769d"),i=a("536e"),o=a("2bf5"),r=a("16a4"),g=a("fccd"),p={name:"TwoColumnsPopUp",props:["type_active","areas_register","active_page"],components:{Register:c["a"],Login:i["a"],LoginToken:o["a"],RememberPassword:r["a"],NotHavePermission:g["a"]},methods:{back:function(){this.$emit("back")},changeType:function(t){this.$emit("change",t)},getActualPage:function(){return this.active_page}}},l=p,v=(a("e2a9"),a("2877")),_=Object(v["a"])(l,s,n,!1,null,"ad0406de",null);e["default"]=_.exports},e2a9:function(t,e,a){"use strict";var s=a("1923"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-6d8b764b.e437ec56.js.map