(this["webpackJsonpexpence-tracker"]=this["webpackJsonpexpence-tracker"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=function(){return r.a.createElement("h2",null,"expence tracker")},o=n(1),i=n(5),m=n(2),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(m.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(m.a)({},e,{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},E={transactions:[]},d=Object(a.createContext)(E),f=function(e){var t=e.children,n=Object(a.useReducer)(s,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your balance"),r.a.createElement("h1",null," $",e))},b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e-t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-$",n))))},v=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount>0?"+":"-";return r.a.createElement("div",null,r.a.createElement("li",{className:"-"===c?"minus":"plus"},t.text," ",r.a.createElement("span",null,"$",t.amount),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"delete-btn"},"x")))},x=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},h=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=r.a.useState(0),u=Object(o.a)(l,2),i=u[0],m=u[1],s=Object(a.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e4*Math.random()),text:n,amount:+i};s(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){m(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(11);var N=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(N,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.02e6a370.chunk.js.map