(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(15),c=n.n(l),o=(n(26),n(16)),u=n(0);var i=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Puzzle Story"),r.a.createElement("p",null,"I have keys, but no locks. I have space, but no room. You can enter, but can't go inside. What am I?"))},m=n(3);function s(e){var t=document.querySelector('[data-animation="'.concat(e,'"]'));t&&(t.style.animation="none",t.offsetHeight,t.style.animation="",t.style.animation="".concat(e," 1s forwards"))}var E=function(){var e=Object(a.useState)("Here is your puzzle story..."),t=Object(m.a)(e,2),n=t[0],l=(t[1],Object(a.useState)("")),c=Object(m.a)(l,2),o=(c[0],c[1],Object(a.useState)(null)),u=Object(m.a)(o,2),E=u[0],f=u[1];return r.a.createElement("div",null,r.a.createElement(i,{story:n}),r.a.createElement("h1",null,"Your Answer"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.answer.value;f("keyboard"===t),null!==E&&E?(s("correct"),setTimeout(function(){s("wrong")},1e3)):s("wrong")}},r.a.createElement("input",{type:"text",name:"answer",placeholder:"Enter your answer"}),r.a.createElement("button",{type:"submit"},"Submit")),null!==E&&r.a.createElement(r.a.Fragment,null,E?r.a.createElement("div",{className:"correct-animation"},"Correct!"):r.a.createElement("div",{className:"wrong-animation"},"Wrong!")))};n(28);var f=function(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(E,null)}),"//",r.a.createElement(u.a,{path:"/game",element:r.a.createElement(E,null)})))},b=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,31)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null))),b()}},[[17,3,2]]]);
//# sourceMappingURL=main.f9e3348c.chunk.js.map