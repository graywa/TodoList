(this.webpackJsonplesson_minin=this.webpackJsonplesson_minin||[]).push([[3],{19:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var o=r(3),u=r(1),a=r(0);t.default=function(e){var t=e.onCreate,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(u.useState)(e),r=Object(o.a)(t,2),n=r[0],i=r[1];return{bind:{value:n,onChange:function(e){return i(e.target.value)}},clear:function(){return i("")},value:function(){return n}}}("");return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.value().trim()&&t(r.value()),r.clear()},children:[Object(a.jsx)("input",c({style:{width:"250px",padding:"0.2rem",margin:"0.3rem"}},r.bind)),Object(a.jsx)("button",{type:"submit",children:"Add Todo"})]})}}}]);
//# sourceMappingURL=3.2ef83277.chunk.js.map