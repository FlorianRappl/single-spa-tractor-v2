System.register(["react","react-dom/client"],(function(n,e){var t={},r={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(n){Object.keys(n).forEach((function(e){t[e]=n[e]}))},function(n){Object.keys(n).forEach((function(e){r[e]=n[e]}))}],execute:function(){n((()=>{"use strict";var n={947:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_AddToCart {\n  padding: 1rem;\n  margin: 0 -1rem 1rem;\n}\n\n.c_AddToCart__information {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.c_AddToCart__stock {\n  display: block;\n}\n\n.c_AddToCart__stock--ok {\n  color: green;\n}\n\n.c_AddToCart__stock--empty {\n  color: red;\n}\n\n.c_AddToCart__confirmed {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75ch;\n}\n\n.c_AddToCart__confirmed a {\n  color: inherit;\n}\n\n.c_AddToCart__confirmed--hidden {\n  visibility: hidden;\n}\n",""]);const c=i},451:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'.c_Button--size-normal {\n  --button-height: 50px;\n}\n\n.c_Button--size-small {\n  --button-height: 40px;\n}\n\n.c_Button {\n  display: block;\n  height: var(--button-height);\n  width: 100%;\n  border-radius: calc(var(--button-height) / 2);\n  padding: 2px;\n  border: 0;\n  background: linear-gradient(180deg, rgb(168, 168, 168), rgb(255, 255, 255)),\n    var(--accent-color);\n  box-shadow:\n    0 -2px 3px rgb(229, 229, 229),\n    0 2px 3px 2px rgb(255, 255, 255),\n    0 0 25px rgba(0, 0, 0, 0.05),\n    0 -10px 5px rgb(255, 255, 255) inset;\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 0.3em;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  text-decoration: none;\n  font-size: 16px;\n}\n\n.c_Button--primary {\n  --accent-color: #333;\n  color: #fff;\n}\n\n.c_Button--secondary {\n  --accent-color: #ffffff;\n  color: #000;\n}\n\n.c_Button--rounded.c_Button--size-normal {\n  @media (max-width: 499px) {\n    --button-height: 40px;\n  }\n  @media (min-width: 500px) {\n    --button-height: 66px;\n  }\n  width: var(--button-height);\n}\n\n.c_Button--rounded.c_Button--size-small {\n  --button-height: 40px;\n\n  width: var(--button-height);\n}\n\n.c_Button--rounded .c_Button__inner {\n  padding: 0;\n}\n\n@media (max-width: 499px) {\n  .c_Button--rounded svg {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n.c_Button[disabled] {\n  --accent-color: #d3d3d3;\n  pointer-events: none;\n}\n\n.c_Button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: inherit;\n  left: 0;\n  background: linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.19),\n      rgba(255, 255, 255, 0.3)\n    ),\n    var(--accent-color);\n  content: "";\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.1);\n  display: block;\n  transition:\n    transform 0.3s,\n    box-shadow 0.3s,\n    background 0.1s 0.2s;\n}\n\n.c_Button__inner {\n  position: relative;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: var(--accent-color);\n  height: calc(var(--button-height) - 4px);\n  border-radius: inherit;\n  display: grid;\n  place-content: center;\n  transition:\n    transform 0.3s,\n    background 0.3s,\n    box-shadow 0.3s;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none;\n  white-space: nowrap;\n}\n\n.c_Button:hover .c_Button__inner,\n.c_Button:focus .c_Button__inner {\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),\n    var(--accent-color);\n}\n\n.c_Button:active::before {\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.16)),\n    var(--accent-color);\n  box-shadow:\n    0 0 3px rgba(0, 0, 0, 0.6) inset,\n    0 2px 1px -1px rgba(0, 0, 0, 0.1);\n  transform: scale(0.97);\n  transition:\n    all 0.1s,\n    background 0.05s;\n}\n\n.c_Button:active .c_Button__inner {\n  transform: scale(0.97);\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),\n    var(--accent-color);\n  transition: all 0.1s;\n  box-shadow:\n    0 5px 5px rgba(0, 0, 0, 0.2) inset,\n    0 -3px 3px rgba(255, 255, 255, 0.2) inset;\n}\n',""]);const c=i},240:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_CartPage {\n  margin: 0 auto;\n  max-width: calc(1000px + var(--outer-space) * 2);\n  padding: 0 var(--outer-space);\n}\n\n.c_CartPage__lineItems {\n  list-style: none;\n  padding: 0;\n}\n\n.c_CartPage hr {\n  border: 0;\n  height: 2px;\n  background-color: black;\n}\n\n.c_CartPage__total {\n  margin: 2rem 0 3rem;\n  text-align: right;\n  font-weight: bold;\n}\n\n.c_CartPage__buttons {\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 4rem;\n  gap: 2rem;\n}\n\n.c_CartPage__buttons > * {\n  flex: 0;\n}\n",""]);const c=i},499:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_Checkout {\n  margin: 0 auto;\n  max-width: calc(1000px + var(--outer-space) * 2);\n  padding: 0 var(--outer-space);\n}\n\n.c_Checkout fieldset {\n  border: 0;\n  border-bottom: 2px solid black;\n  padding: 0 0 2rem;\n  margin: 0;\n}\n\n.c_Checkout__name {\n  display: flex;\n  gap: 0 4rem;\n  flex-wrap: wrap;\n}\n\n.c_Checkout__buttons {\n  margin: 3rem 0 4rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n}\n\n.c_Checkout__buttons > * {\n  flex: 0;\n}\n\n.c_Checkout__label {\n  width: 100px;\n  display: inline-block;\n}\n\n.c_Checkout__input {\n  height: 40px;\n  padding: 5px 10px;\n  font-size: 16px;\n  border-radius: 8px;\n  margin: 1rem 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) inset;\n}\n\n.c_Checkout__input:read-only {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n",""]);const c=i},143:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_CompactHeader {\n  height: 80px;\n  display: flex;\n  margin: 1rem 0 2rem;\n  border-bottom: 1px solid #eeebe2;\n  align-items: center;\n}\n\n.c_CompactHeader__inner {\n  display: flex;\n  max-width: calc(1000px + (2 * var(--outer-space)));\n  padding: 0 var(--outer-space);\n  margin: 0 auto;\n  align-items: center;\n  flex: 1;\n}\n\n.c_CompactHeader__logo {\n  display: block;\n  width: 175px;\n  aspect-ratio: 3.5;\n}\n",""]);const c=i},12:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_LineItem {\n  display: flex;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 2rem;\n  align-items: center;\n}\n\n.c_LineItem__image {\n  flex-basis: 150px;\n  padding-right: 2rem;\n}\n\n.c_LineItem__image img {\n  display: block;\n  aspect-ratio: 1 / 1;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n}\n\n.c_LineItem__details {\n  flex-grow: 1;\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.c_LineItem__name {\n  padding-right: 2rem;\n  flex-grow: 1;\n  color: inherit;\n  text-decoration: none;\n  min-width: 300px;\n}\n\n.c_LineItem__quantity {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.c_LineItem__price {\n  flex-basis: 100px;\n  text-align: end;\n}\n\n.c_LineItem__removeIcon {\n  width: 33px;\n}\n",""]);const c=i},148:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_MiniCart {\n  position: relative;\n  margin-right: 1.5rem;\n}\n\n.c_MiniCart__quantity {\n  background-color: #ff5a55;\n  border-radius: 10px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  color: rgb(255, 255, 255);\n  display: grid;\n  font-size: 12px;\n  font-variant-numeric: tabular-nums;\n  font-weight: bold;\n  height: 20px;\n  letter-spacing: normal;\n  min-width: 20px;\n  place-content: center;\n  position: absolute;\n  right: 0px;\n  text-align: center;\n  top: 0px;\n  transform: scale(1);\n  transition: all 0.3s;\n}\n\n.c_MiniCart svg {\n  --minicart-translate: -2px;\n  transform: translateY(var(--minicart-translate));\n}\n\n.c_MiniCart__quantity:empty {\n  transform: scale(0);\n}\n\n@keyframes bounce {\n  0% {\n    transform: translateY(calc(var(--minicart-translate) + 0px));\n  }\n  33% {\n    transform: translateY(calc(var(--minicart-translate) + 6px));\n  }\n  100% {\n    transform: translateY(calc(var(--minicart-translate) + 0px));\n  }\n}\n\n.c_MiniCart--highlight svg {\n  animation: bounce 0.2s ease-out;\n}\n\n@keyframes shake {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(6deg);\n  }\n  100% {\n    transform: rotate(-6deg);\n  }\n}\n\n.c_MiniCart--highlight svg g {\n  transform-origin: center 7px;\n  animation: shake 0.2s infinite ease-in-out;\n}\n.c_MiniCart {\n  padding: 1.5rem;\n}\n",""]);const c=i},212:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".c_Thanks {\n  margin: 0 auto;\n  max-width: calc(500px + var(--outer-space) * 2);\n  padding: 0 var(--outer-space);\n  min-height: 50vh;\n}\n\n.c_Thanks__title {\n  margin: 4rem 0;\n  font-size: 40px;\n}\n\n.c_Thanks__text {\n  margin: 4rem 0;\n}\n",""]);const c=i},211:(n,e,t)=>{t.d(e,{A:()=>g});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(240),s=t(499),l=t(212),u=t(148),p=t(947),d=t(12),m=t(451),f=t(143),h=i()(o());h.i(c.A),h.i(s.A),h.i(l.A),h.i(u.A),h.i(p.A),h.i(d.A),h.i(m.A),h.i(f.A),h.push([n.id,"\n",""]);const g=h},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},726:n=>{n.exports=t},387:n=>{n.exports=r}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,o),a.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nc=void 0;var a={};o.r(a),o.d(a,{default:()=>V});var i=o(726),c=o(387);function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function m(n,e){var t;if("function"!=typeof(t=e.domElement?function(){return e.domElement}:e.domElementGetter?e.domElementGetter:n.domElementGetter?n.domElementGetter:function(n){var e=n.appName||n.name;if(!e)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var t="single-spa-application:".concat(e);return function(){var n=document.getElementById(t);return n||((n=document.createElement("div")).id=t,document.body.appendChild(n)),n}}(e)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(e.name,"'. Expected a function, received ").concat(d(t)));return function(){var n=t(e);if(!(n instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(e.name,"'. Expected HTMLElement, received ").concat(d(n)));return n}}var f=null;try{f=require("react").createContext()}catch(s){}var h={React:null,ReactDOM:null,ReactDOMClient:null,rootComponent:null,loadRootComponent:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{},unmountResolves:{}};function g(n,e){return n.rootComponent?Promise.resolve():n.loadRootComponent(e).then((function(e){n.rootComponent=e}))}function b(n,e){return new Promise((function(t,r){n.suppressComponentDidCatchWarning||!function(n){if(!(n&&"string"==typeof n.version&&n.version.indexOf(".")>=0))return!1;var e=n.version.slice(0,n.version.indexOf("."));try{return Number(e)>=16}catch(n){return!1}}(n.React)||n.errorBoundary||n.errorBoundaryClass||(n.rootComponent.prototype?n.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=C(n,e,(function(){t(this)})),a=m(n,e)(),i=function(n){var e=n.renderType,t=n.elementToRender,r=n.domElement,o=n.reactDom[e];if("function"!=typeof o)throw new Error('renderType "'.concat(e,'" did not return a function.'));switch(e){case"createRoot":case"unstable_createRoot":case"createBlockingRoot":case"unstable_createBlockingRoot":var a=o(r);return a.render(t),a;case"hydrateRoot":return o(r,t);default:return o(t,r),null}}({elementToRender:o,domElement:a,reactDom:_(n),renderType:x(n)});n.domElements[e.name]=a,n.renderResults[e.name]=i}))}function y(n,e){return new Promise((function(t){n.unmountResolves[e.name]=t;var r=n.renderResults[e.name];r&&r.unmount?r.unmount():_(n).unmountComponentAtNode(n.domElements[e.name]),delete n.domElements[e.name],delete n.renderResults[e.name]}))}function v(n,e){return new Promise((function(t){n.updateResolves[e.name]||(n.updateResolves[e.name]=[]),n.updateResolves[e.name].push(t);var r=C(n,e,null),o=n.renderResults[e.name];if(o&&o.render)o.render(r);else{var a=m(n,e)();_(n).render(r,a)}}))}function _(n){return n.ReactDOMClient||n.ReactDOM}function x(n){return"function"==typeof n.renderType?n.renderType():n.renderType}function C(n,e,t){var r=n.React.createElement(n.rootComponent,e),o=f?n.React.createElement(f.Provider,{value:e},r):r;return(n.errorBoundary||e.errorBoundary||n.errorBoundaryClass||e.errorBoundaryClass)&&(n.errorBoundaryClass=n.errorBoundaryClass||e.errorBoundaryClass||function(n,e){function t(e){n.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(e.name,")")}return t.prototype=Object.create(n.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?(n.errorBoundary||e.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(n,e){this.setState({caughtError:n,caughtErrorInfo:e})},t}(n,e),o=n.React.createElement(n.errorBoundaryClass,e,o)),n.React.createElement(n.SingleSpaRoot,l(l({},e),{},{mountFinished:t,updateFinished:function(){n.updateResolves[e.name]&&(n.updateResolves[e.name].forEach((function(n){return n()})),delete n.updateResolves[e.name])},unmountFinished:function(){n.unmountResolves[e.name]&&(n.unmountResolves[e.name](),delete n.unmountResolves[e.name])}}),o)}const w=function(){return i.createElement("header",{className:"c_CompactHeader"},i.createElement("div",{className:"c_CompactHeader__inner"},i.createElement("a",{className:"c_CompactHeader__link",href:"/"},i.createElement("img",{className:"c_CompactHeader__logo",src:"https://blueprint.the-tractor.store/cdn/img/logo.svg",alt:"Micro Frontends - Tractor Store"}))))},E=function(n){var e=n.href,t=n.type,r=n.value,o=n.disabled,a=n.rounded,c=n.className,s=void 0===c?"":c,l=n.children,u=n.dataId,p=n.size,d=void 0===p?"normal":p,m=n.variant,f=void 0===m?"secondary":m,h=n.title,g=e?"a":"button";return i.createElement(g,{disabled:o,href:e,type:t,value:r,title:h,"data-id":u||void 0,className:"c_Button c_Button--".concat(f," ").concat(s," ").concat(a?"c_Button--rounded":""," c_Button--size-").concat(d)},i.createElement("div",{className:"c_Button__inner"},l))};var k=o(72),O=o.n(k),R=o(825),S=o.n(R),B=o(659),j=o.n(B),A=o(56),T=o.n(A),P=o(540),N=o.n(P),M=o(113),I=o.n(M),D=o(211),L={};function F(n){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},F(n)}function H(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function q(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?H(Object(t),!0).forEach((function(e){z(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function z(n,e,t){return(e=function(n){var e=function(n){if("object"!=F(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=F(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==F(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,c=[],s=!0,l=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(n){l=!0,o=n}finally{try{if(!s&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return U(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}L.styleTagTransform=I(),L.setAttributes=T(),L.insert=j().bind(null,"head"),L.domAPI=S(),L.insertStyleElement=N(),O()(D.A,L),D.A&&D.A.locals&&D.A.locals;var Y=window.getComponent("explore/StorePicker"),W=window.getComponent("explore/Footer"),J={firstName:"",lastName:""};const V=function(n){if("object"!==u(n))throw new Error("single-spa-react requires a configuration object");var e,t=l(l({},h),n);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM&&!t.ReactDOMClient)throw new Error("single-spa-react must be passed opts.ReactDOM or opts.ReactDOMClient");if(t.renderType||(null!==(e=t.ReactDOMClient)&&void 0!==e&&e.createRoot?t.renderType="createRoot":t.renderType="render"),!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!f&&t.React.createContext&&(f=t.React.createContext()),t.SingleSpaRoot=function(n){function e(n){e.displayName="SingleSpaRoot(".concat(n.name,")")}return e.prototype=Object.create(n.React.Component.prototype),e.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},e.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},e.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},e}(t);var r={bootstrap:g.bind(null,t),mount:b.bind(null,t),unmount:y.bind(null,t)};return t.parcelCanUpdate&&(r.update=v.bind(null,t)),r}({React:i,ReactDOMClient:c,rootComponent:function(){var n=function(){var n=G(i.useState(""),2),e=n[0],t=n[1];return i.useEffect((function(){var n=function(n){var e=n.detail.shop;t(e)};return window.addEventListener("selected-shop",n),function(){window.removeEventListener("selected-shop",n)}}),[]),e}(),e=G(i.useState(J),2),t=e[0],r=e[1],o=!n||!t.firstName||!t.lastName;function a(n){var e=n.currentTarget,o=e.name,a=e.value;r(q(q({},t),{},z({},o,a)))}return i.createElement("div",{"data-boundary-page":"checkout"},i.createElement(w,null),i.createElement("main",{className:"c_Checkout"},i.createElement("h2",null,"Checkout"),i.createElement("form",{action:"/checkout/place-order",method:"post",className:"c_Checkout__form",onSubmit:function(n){window.dispatchEvent(new CustomEvent("clear-cart")),history.pushState({},void 0,"/checkout/thanks"),n.preventDefault()}},i.createElement("h3",null,"Personal Data"),i.createElement("fieldset",{className:"c_Checkout__name"},i.createElement("div",null,i.createElement("label",{className:"c_Checkout__label",htmlFor:"c_firstname"},"First name"),i.createElement("input",{className:"c_Checkout__input",type:"text",id:"c_firstname",name:"firstName",required:!0,value:t.firstName,onChange:a})),i.createElement("div",null,i.createElement("label",{className:"c_Checkout__label",htmlFor:"c_lastname"},"Last name"),i.createElement("input",{className:"c_Checkout__input",type:"text",id:"c_lastname",name:"lastName",required:!0,value:t.lastName,onChange:a}))),i.createElement("h3",null,"Store Pickup"),i.createElement("fieldset",null,i.createElement("div",{className:"c_Checkout__store"},i.createElement(Y,null)),i.createElement("label",{className:"c_Checkout__label",htmlFor:"c_storeId"},"Store ID"),i.createElement("input",{className:"c_Checkout__input",type:"text",id:"c_storeId",name:"storeId",defaultValue:n,readOnly:!0,required:!0})),i.createElement("div",{className:"c_Checkout__buttons"},i.createElement(E,{type:"submit",variant:"primary",disabled:o},"place order"),i.createElement(E,{href:"/checkout/cart",variant:"secondary"},"back to cart")))),i.createElement(W,null))},errorBoundary:function(){return i.createElement("div",null,"Checkout failed!")}});return a})())}}}));