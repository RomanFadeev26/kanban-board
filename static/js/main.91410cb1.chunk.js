(this["webpackJsonptest-eatmeapp"]=this["webpackJsonptest-eatmeapp"]||[]).push([[0],{10:function(e,t,n){e.exports={newCard:"CreateTaskBlock_newCard__2Cr0k",buttons:"CreateTaskBlock_buttons__1VNfx",addTextBtn:"CreateTaskBlock_addTextBtn__2OGbS",cancelBtn:"CreateTaskBlock_cancelBtn__3jtVx"}},11:function(e,t,n){e.exports={Column:"Column_Column__1pSSp",title:"Column_title__1TUwi",droppable:"Column_droppable__18ONb",addTaskBtn:"Column_addTaskBtn__3nUTs"}},22:function(e,t,n){e.exports={Card:"Card_Card__2P1oS",inner:"Card_inner__2nZYj"}},41:function(e,t,n){e.exports={App:"App_App__3-TZh"}},43:function(e,t,n){e.exports=n(88)},48:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=(n(48),n(9)),i=n(6),d=n(22),s=n.n(d),u=function(e){var t=e.cardId,n=e.index,a=e.children;return r.a.createElement(i.b,{draggableId:t,index:n},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef,className:s.a.Card},e.draggableProps,e.dragHandleProps),r.a.createElement("div",{className:s.a.inner},a))}))},p=n(10),b=n.n(p),m=function(e){var t=e.handleChange,n=e.handleCreateBtnClick,a=e.handleCancelBtnClick;return r.a.createElement("div",{className:b.a.newCard},r.a.createElement("textarea",{onChange:t}),r.a.createElement("div",{className:b.a.buttons},r.a.createElement("button",{onClick:n,className:b.a.addTextBtn},"Create!"),r.a.createElement("button",{onClick:a,className:b.a.cancelBtn},"\xd7")))},f=n(11),O=n.n(f),C=function(e,t){var n=e.text,a=e.id;return r.a.createElement(u,{cardId:a,key:a,index:t},n)},j=function(e){var t=e.droppableId,n=e.handleAddBtnClick,c=e.children,o=Object(a.useState)(!1),d=Object(l.a)(o,2),s=d[0],u=d[1],p=Object(a.useState)(""),b=Object(l.a)(p,2),f=b[0],j=b[1];Object(a.useEffect)((function(){f&&!s&&(n(t,f),j(""))}),[s,f,n,t]);var _=Object(a.useCallback)((function(){return u(!1)}),[u]),k=Object(a.useCallback)((function(e){return j(e.target.value)}),[j]),h=Object(a.useCallback)((function(){j(""),u(!1)}),[j,u]),v=Object(a.useCallback)((function(){return u(!0)}),[u]);return r.a.createElement("section",{className:O.a.Column},r.a.createElement("h2",{className:O.a.title},t),r.a.createElement(i.c,{droppableId:t},(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({className:O.a.droppable,ref:e.innerRef},e.droppableProps),c.map(C),e.placeholder,s&&r.a.createElement(m,{handleCancelBtnClick:h,handleChange:k,handleCreateBtnClick:_})),r.a.createElement("button",{className:O.a.addTaskBtn,onClick:v},"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"))})))},_=n(41),k=n.n(_),h=n(7),v=n(8);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={ToDo:[],"In Progress":[],Done:[]},x=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TASK":var a=n.payload,r=a.column,c=a.text,o=a.id,l=[].concat(Object(v.a)(t[r]),[{text:c,id:o}]);return E({},t,Object(h.a)({},r,l));case"MOVE_TASK":var i=n.payload,d=i.destination,s=i.source;if(!d||!s)return t;var u=Object(v.a)(t[s.droppableId]),p=u.splice(s.index,1),b=Object(v.a)(t[d.droppableId]);return d.droppableId===s.droppableId?(u.splice.apply(u,[d.index,0].concat(Object(v.a)(p))),console.log(u),E({},t,Object(h.a)({},d.droppableId,u))):(b.splice.apply(b,[d.index,0].concat(Object(v.a)(p))),E({},t,(e={},Object(h.a)(e,s.droppableId,u),Object(h.a)(e,d.droppableId,b),e)));default:return t}},B=n(42),w=n.n(B),T=function(e,t){return{type:e,payload:t}},I=function(e,t){return T("ADD_TASK",{column:e,text:t,id:w()()})},N=function(e){var t=e.destination,n=e.source;return T("MOVE_TASK",{destination:t,source:n})};var P=function(){var e=Object(a.useReducer)(x,y),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useCallback)((function(e,t){return c(I(e,t))}),[c]),d=Object(a.useCallback)((function(e){return c(N(e))}),[c]);return r.a.createElement(i.a,{onDragEnd:d},r.a.createElement("div",{className:k.a.App},Object.keys(n).map((function(e){return r.a.createElement(j,{key:e,droppableId:e,handleAddBtnClick:o},n[e])}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.91410cb1.chunk.js.map