/*!
 * vue-material v1.0.0-beta-11
 * Made with <3 by marcosmoura 2020
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=545)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var a,u,s,l,c,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(a=e,d=e.default),u="function"==typeof d?d.options:d,t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=s):r&&(s=r),s&&(l=u.functional,c=l?u.render:u.beforeCreate,l?(u._injectStyles=s,u.render=function(e,t){return s.call(t),c(e,t)}):u.beforeCreate=c?[].concat(c,s):[s]),{esModule:a,exports:d,options:u}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,u.default)(t,e)},o=n(5),i=r(o),a=n(7),u=r(a)},12:function(e,t,n){(function(t){var r,o,i,a,u,s=n(15),l="undefined"==typeof window?t:window,c=["moz","webkit"],d="AnimationFrame",f=l["request"+d],m=l["cancel"+d]||l["cancelRequest"+d];for(r=0;!f&&r<c.length;r++)f=l[c[r]+"Request"+d],m=l[c[r]+"Cancel"+d]||l[c[r]+"CancelRequest"+d];f&&m||(o=0,i=0,a=[],u=1e3/60,f=function(e){if(0===a.length){var t=s(),n=Math.max(0,u-(t-o));o=n+t,setTimeout((function(){var e,t=a.slice(0);for(a.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return a.push({handle:++i,callback:e,cancelled:!1}),i},m=function(e){for(var t=0;t<a.length;t++)a[t].handle===e&&(a[t].cancelled=!0)}),e.exports=function(e){return f.call(l,e)},e.exports.cancel=function(){m.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=f,e.cancelAnimationFrame=m}}).call(t,n(14))},14:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},15:function(e,t,n){(function(t){(function(){var n,r,o,i,a,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),u=1e9*t.uptime(),a=i-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(16))},16:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&h&&(m=!1,h.length?f=h.concat(f):p=-1,f.length&&u())}function u(){var e,t;if(!m){for(e=o(a),m=!0,t=f.length;t;){for(h=f,f=[];++p<t;)h&&h[p].run();p=-1,t=f.length}h=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,d,f,m,h,p,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}})(),f=[],m=!1,p=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new s(e,n)),1!==f.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdDialogTitle"}},185:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdDialogContent"})},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdDialogActions"}},2:function(t,n){t.exports=e},22:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),o=n(2),i=r(o),a=n(12),u=r(a),t.default={name:"MdPortal",abstract:!0,props:{mdAttachToParent:Boolean,mdTarget:{type:null,validator:function(e){return!!(HTMLElement&&e&&e instanceof HTMLElement)||(i.default.util.warn("The md-target-el prop is invalid. You should pass a valid HTMLElement.",this),!1)}}},data:function(){return{leaveTimeout:null,originalParentEl:null}},computed:{transitionName:function(){var e,t,n=this._vnode.componentOptions.children[0];if(n){if(e=n.data.transition)return e.name;if(t=n.componentOptions.propsData.name)return t}return"v"},leaveClass:function(){return this.transitionName+"-leave"},leaveActiveClass:function(){return this.transitionName+"-leave-active"},leaveToClass:function(){return this.transitionName+"-leave-to"}},watch:{mdTarget:function(e,t){this.changeParentEl(e),t&&this.$forceUpdate()}},methods:{getTransitionDuration:function(e){var t=window.getComputedStyle(e).transitionDuration,n=parseFloat(t,10),r=t.match(/m?s/);return r&&(r=r[0]),"s"===r?1e3*n:"ms"===r?n:0},killGhostElement:function(e){e.parentNode&&(this.changeParentEl(this.originalParentEl),this.$options._parentElm=this.originalParentEl,e.parentNode.removeChild(e))},initDestroy:function(e){var t=this,n=this.$el;e&&this.$el.nodeType===Node.COMMENT_NODE&&(n=this.$vnode.elm),n.classList.add(this.leaveClass),n.classList.add(this.leaveActiveClass),this.$nextTick().then((function(){n.classList.add(t.leaveToClass),clearTimeout(t.leaveTimeout),t.leaveTimeout=setTimeout((function(){t.destroyElement(n)}),t.getTransitionDuration(n))}))},destroyElement:function(e){var t=this;(0,u.default)((function(){e.classList.remove(t.leaveClass),e.classList.remove(t.leaveActiveClass),e.classList.remove(t.leaveToClass),t.$emit("md-destroy"),t.killGhostElement(e)}))},changeParentEl:function(e){e&&e.appendChild(this.$el)}},mounted:function(){this.originalParentEl||(this.originalParentEl=this.$el.parentNode,this.$emit("md-initial-parent",this.$el.parentNode)),this.mdAttachToParent&&this.$el.parentNode.parentNode?this.changeParentEl(this.$el.parentNode.parentNode):document&&this.changeParentEl(this.mdTarget||document.body)},beforeDestroy:function(){this.$el.classList?this.initDestroy():this.killGhostElement(this.$el)},render:function(e){var t=this.$slots.default;if(t&&t[0])return t[0]}}},369:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u,s,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(4),i=r(o),a=n(56),u=r(a),s=n(370),l=r(s),c=n(373),d=r(c),f=n(376),m=r(f),t.default=function(e){(0,i.default)(e),e.component(u.default.name,u.default),e.component(l.default.name,l.default),e.component(d.default.name,d.default),e.component(m.default.name,m.default)}},370:function(e,t,n){"use strict";function r(e){n(371)}var o,i,a,u,s,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(184),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);u=n(372),s=n(0),l=!1,c=r,d=null,f=null,m=s(i.a,u.a,l,c,d,f),t.default=m.exports},371:function(e,t){},372:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"md-dialog-title md-title"},[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},373:function(e,t,n){"use strict";function r(e){n(374)}var o,i,a,u,s,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(185),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);u=n(375),s=n(0),l=!1,c=r,d=null,f=null,m=s(i.a,u.a,l,c,d,f),t.default=m.exports},374:function(e,t){},375:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:["md-dialog-content",e.$mdActiveTheme]},[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},376:function(e,t,n){"use strict";function r(e){n(377)}var o,i,a,u,s,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(186),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);u=n(378),s=n(0),l=!1,c=r,d=null,f=null,m=s(i.a,u.a,l,c,d,f),t.default=m.exports},377:function(e,t){},378:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-dialog-actions"},[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},39:function(e,t,n){"use strict";function r(e){n(86)}var o,i,a,u,s,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(49),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);u=n(87),s=n(0),l=!1,c=r,d=null,f=null,m=s(i.a,u.a,l,c,d,f),t.default=m.exports},4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u,s;Object.defineProperty(t,"__esModule",{value:!0}),n(8),o=n(6),i=r(o),a=n(5),u=r(a),s=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},49:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(22),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdOverlay",components:{MdPortal:o.default},props:{mdActive:Boolean,mdAttachToParent:Boolean,mdFixed:Boolean},computed:{overlayClasses:function(){return{"md-fixed":this.mdFixed}}}}},5:function(e,t,n){"use strict";var r,o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,a=null,u=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},545:function(e,t,n){e.exports=n(369)},56:function(e,t,n){"use strict";function r(e){n(97)}var o,i,a,u,s,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(57),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);u=n(98),s=n(0),l=!1,c=r,d=null,f=null,m=s(i.a,u.a,l,c,d,f),t.default=m.exports},57:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,u,s,l,c,d;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),i=r(o),a=n(22),u=r(a),s=n(39),l=r(s),c=n(58),d=r(c),t.default=new i.default({name:"MdDialog",components:{MdPortal:u.default,MdOverlay:l.default,MdFocusTrap:d.default},props:{mdActive:Boolean,mdBackdrop:{type:Boolean,default:!0},mdBackdropClass:{type:String,default:"md-dialog-overlay"},mdCloseOnEsc:{type:Boolean,default:!0},mdClickOutsideToClose:{type:Boolean,default:!0},mdFullscreen:{type:Boolean,default:!0},mdAnimateFromSource:Boolean},computed:{dialogClasses:function(){return{"md-dialog-fullscreen":this.mdFullscreen}}},watch:{mdActive:function(e){var t=this;this.$nextTick().then((function(){e?t.$emit("md-opened"):t.$emit("md-closed")}))}},methods:{closeDialog:function(){this.$emit("update:mdActive",!1)},onClick:function(){this.mdClickOutsideToClose&&this.closeDialog(),this.$emit("md-clicked-outside")},onEsc:function(){this.mdCloseOnEsc&&this.closeDialog()}}})},58:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdFocusTrap",abstract:!0,methods:{setFocus:function(){var e=this;window.setTimeout((function(){e.$el.tagName&&(e.$el.setAttribute("tabindex","-1"),e.$el.focus())}),20)}},mounted:function(){this.setFocus()},render:function(){try{var e=this.$slots.default;if(!e)return null;if(e.length>1)throw Error();return e[0]}catch(e){o.default.util.warn("MdFocusTrap can only render one, and exactly one child component.",this)}return null}}},6:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},7:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===d}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s(r(e),e,t):e}function i(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function a(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s}function u(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=o(e[t],n)})),Object.keys(t).forEach((function(i){n.isMergeableObject(t[i])&&e[i]?r[i]=a(i,n)(e[i],t[i],n):r[i]=o(t[i],n)})),r}function s(e,t,n){var r,a,s;return n=n||{},n.arrayMerge=n.arrayMerge||i,n.isMergeableObject=n.isMergeableObject||l,r=Array.isArray(t),a=Array.isArray(e),s=r===a,s?r?n.arrayMerge(e,t,n):u(e,t,n):o(t,n)}var l=function(n){return e(n)&&!t(n)},c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103;return s.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return s(e,n,t)}),{})},s}))},8:function(e,t){},86:function(e,t){},87:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-portal",{attrs:{"md-attach-to-parent":e.mdAttachToParent}},[n("transition",{attrs:{name:"md-overlay"}},[e.mdActive?n("div",e._g({staticClass:"md-overlay",class:e.overlayClasses},e.$listeners)):e._e()])],1)},o=[],i={render:r,staticRenderFns:o};t.a=i},97:function(e,t){},98:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-portal",[n("transition",{attrs:{name:"md-dialog"}},[e.mdActive?n("div",e._g({staticClass:"md-dialog",class:[e.dialogClasses,e.$mdActiveTheme],on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEsc(t)}}},e.$listeners),[n("md-focus-trap",[n("div",{staticClass:"md-dialog-container"},[e._t("default"),e._v(" "),n("keep-alive",[e.mdBackdrop?n("md-overlay",{class:e.mdBackdropClass,attrs:{"md-fixed":"","md-active":e.mdActive},on:{click:e.onClick}}):e._e()],1)],2)])],1):e._e()])],1)},o=[],i={render:r,staticRenderFns:o};t.a=i}})}));