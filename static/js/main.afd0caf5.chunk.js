(this.webpackJsonpmayvenr=this.webpackJsonpmayvenr||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),i=(c(11),c(12),c(0));var j=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("nav",{children:[Object(i.jsx)("img",{className:"logo",src:"/rwd-practice/img/AIA corporate logo_white_88.png",alt:"logo"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Our Products"}),Object(i.jsx)("li",{children:"AIA Vitality"}),Object(i.jsx)("li",{children:"What Matters"}),Object(i.jsx)("li",{children:"About AIA"}),Object(i.jsx)("li",{children:"Help & Support"}),Object(i.jsx)("li",{children:"My AIA"})]})]}),Object(i.jsx)("h1",{children:"District Manager"})]})},l=c(4),b=c.n(l),d=c(6),o=c(2);var O=function(e){var t=e.item;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"avatar",children:Object(i.jsx)("img",{className:"avatar",src:"/rwd-practice/img/userphoto-prime1.png",alt:"avatar"})}),Object(i.jsxs)("div",{className:"card-info",children:[Object(i.jsx)("p",{className:"name",children:t.name}),Object(i.jsxs)("p",{children:["Email: ",Object(i.jsx)("span",{children:t.email})]}),Object(i.jsxs)("p",{children:["Mobile: ",Object(i.jsx)("span",{children:t.company})]}),Object(i.jsxs)("p",{children:["Address: ",Object(i.jsx)("span",{children:t.address.street})]}),Object(i.jsxs)("p",{children:["Website: ",Object(i.jsx)("span",{children:t.website})]}),Object(i.jsxs)("p",{children:["Age: ",Object(i.jsx)("span",{children:t.age})]})]})]})};var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("all"),r=Object(o.a)(s,2),j=r[0],l=r[1],u=Object(n.useState)(c),h=Object(o.a)(u,2),x=h[0],p=h[1];function v(){return(v=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.mocky.io/v2/5d73bf3d3300003733081869");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}(),function(){switch(j){case"below-20":p(c.filter((function(e){return e.age<=20})));break;case"between-21-39":p(c.filter((function(e){return e.age>20&&e.age<40})));break;case"above-40":p(c.filter((function(e){return e.age>40})));break;default:p(c)}}()}),[j]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"card-area",children:[Object(i.jsxs)("div",{className:"select-area",children:[Object(i.jsx)("label",{children:"Filter By Age"}),Object(i.jsxs)("select",{name:"ages",onChange:function(e){l(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"below-20",children:"20 and below"}),Object(i.jsx)("option",{value:"between-21-39",children:"21 to 39"}),Object(i.jsx)("option",{value:"above-40",children:"40 and above"})]})]}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"cards",children:"all"===j?c&&c.map((function(e){return Object(i.jsx)(O,{item:e},e.id)})):x&&x.map((function(e){return Object(i.jsx)(O,{item:e},e.id)}))})]})})};var h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),j=r[0],l=r[1];return Object(i.jsxs)("div",{className:"date-area",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsxs)("div",{className:"input-area",children:[Object(i.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){return function(){var e=c.split("/");e[0]>31||e[0]<1?window.alert("Please enter a valid date."):e[1]>12||e[1]<1?window.alert("Please enter a valid month."):(l(c.split("/").reverse().join("-")),a(""))}()},children:Object(i.jsx)("strong",{children:"CONVERT"})})]}),Object(i.jsxs)("p",{children:["Converted Date: ",Object(i.jsx)("span",{children:j})]})]})};var x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsxs)("div",{className:"content-container",children:[Object(i.jsx)(u,{}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)(h,{})]})]})};var p=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(x,{})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.afd0caf5.chunk.js.map