(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,r){t.exports=r(52)},22:function(t,e,r){},24:function(t,e,r){},52:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(12),i=r.n(a),c=(r(22),r(1)),u=r(5),l=function(t){var e=t.setCorrectAnswer,r=Object(n.useState)(""),a=Object(c.a)(r,2),i=a[0],u=a[1];Object(n.useEffect)(function(){l()},[]);var l=function(){var t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());u("".concat(t," + ").concat(r)),e(t+r)};return o.a.createElement("div",null,o.a.createElement("h2",null,i),o.a.createElement("button",{onClick:l},"Generate New Problem"))},s=(r(24),function(){var t=Object(n.useRef)(null),e=Object(n.useRef)(null),r=Object(n.useRef)(!1),a=function(){r.current=!1};return Object(n.useEffect)(function(){var r=t.current;r.width=300,r.height=400;var n=r.getContext("2d");n.lineWidth=5,e.current=n},[]),o.a.createElement("div",{className:"drawing-pane"},o.a.createElement("canvas",{className:"canvas",ref:t,onMouseDown:function(n){var o=t.current.getBoundingClientRect(),a=n.clientX-o.left,i=n.clientY-o.top;e.current.moveTo(a,i),r.current=!0},onMouseMove:function(n){if(r.current){var o=t.current.getBoundingClientRect(),a=n.clientX-o.left,i=n.clientY-o.top;e.current.lineTo(a,i),e.current.stroke()}},onMouseUp:a,onMouseLeave:a,onTouchStart:function(n){n.preventDefault();var o=t.current.getBoundingClientRect(),a=n.touches[0].clientX-o.left,i=n.touches[0].clientY-o.top;e.current.moveTo(a,i),r.current=!0},onTouchMove:function(n){if(n.preventDefault(),r.current){var o=t.current.getBoundingClientRect(),a=n.touches[0].clientX-o.left,i=n.touches[0].clientY-o.top;e.current.lineTo(a,i),e.current.stroke()}},onTouchEnd:function(){r.current=!1}}))}),f=r(13);function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var g={};u(g,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(_([])));m&&m!==e&&r.call(m,a)&&(g=m);var w=d.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var p=function(){var t=Object(u.a)(h().mark(function t(e,r){var n,o,a;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.recognize(e,{tessedit_char_whitelist:"0123456789"});case 2:return n=t.sent,o=n.data.text,a=o.trim().replace(/\s/g,""),console.log(a),t.abrupt("return",a);case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(null),v=Object(c.a)(i,2),d=v[0],g=v[1],y=Object(n.useState)(null),m=Object(c.a)(y,2),w=m[0],b=m[1];Object(n.useEffect)(function(){return function(){var t=Object(u.a)(h().mark(function t(){var e;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.createWorker)();case 2:return e=t.sent,t.next=5,e.load();case 5:return t.next=7,e.loadLanguage("eng");case 7:return t.next=9,e.initialize("eng");case 9:b(e);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),function(){w&&w.terminate()}},[]);var x=function(){var t=Object(u.a)(h().mark(function t(){var e,r;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(w){t.next=2;break}return t.abrupt("return");case 2:return e=document.querySelector("canvas"),t.next=5,p(e,w);case 5:r=t.sent,parseInt(r)===d?a("Correct"):a("Incorrect"),e.getContext("2d").clearRect(0,0,e.width,e.height);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(l,{setCorrectAnswer:g}),o.a.createElement(s,null),o.a.createElement("button",{onClick:x},"Submit"),o.a.createElement("p",null,r))},d=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,53)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null))),d()}},[[14,3,2]]]);
//# sourceMappingURL=main.dfbe7159.chunk.js.map