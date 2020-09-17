(this["webpackJsonptask-timer"]=this["webpackJsonptask-timer"]||[]).push([[0],{184:function(e,t,a){e.exports={Clock:"Clock_Clock__3dHhC"}},231:function(e,t,a){e.exports=a(422)},236:function(e,t,a){},237:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),c=a.n(l),i=(a(236),a(34)),o=(a(237),a(22)),m=a(93),s=a(20),u={startTime:null,taskName:null,tasks:[]},E=a(456),d=a(423),f=a(18),p=a(184),g=a.n(p),T=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=parseInt(e%1e3/100),a=parseInt(e/1e3%60),n=parseInt(e/6e4%60),r=parseInt(e/36e5%24);return{hours:r=r<10?"0".concat(r):r,minutes:n=n<10?"0".concat(n):n,seconds:a=a<10?"0".concat(a):a,milliseconds:t}}(e.time),a=t.hours,n=t.minutes,l=t.seconds;return r.a.createElement("div",{className:g.a.Clock},r.a.createElement("span",null,a,":",n,":",l))},b=a(461),h=a(465),v=a(464),k=a(460),O=a(462),j=a(463),y=a(31),S=a(454),w=a(472),D=a(458),N=a(459),C=r.a.forwardRef((function(e,t){return r.a.createElement(S.a,Object.assign({direction:"up",ref:t},e))})),I=function(e){var t=e.task,a=e.children,l=Object(n.useState)(!1),c=Object(i.a)(l,2),m=c[0],s=c[1],u=Object(o.b)(),d=Object(f.e)(),p=function(){return s(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{onClick:function(){return s(!0)},color:"secondary"},a),r.a.createElement(w.a,{open:m,TransitionComponent:C,keepMounted:!0,onClose:p,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(D.a,{id:"alert-dialog-slide-title"},"Do you really want to delete ",r.a.createElement("b",null,t.taskName),"?"),r.a.createElement(N.a,null,r.a.createElement(E.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){u(function(e){return{type:"DELETE_TASK",startTime:e.startTime}}(t)),s(!1),d.push("/")},color:"secondary"},"DELETE"))))};var A=function(){var e=Object(o.c)((function(e){return e.tasks}));return r.a.createElement(k.a,{style:{width:"100%"}},r.a.createElement(b.a,{"aria-label":"simple table"},r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(v.a,null,"\u2116"),r.a.createElement(v.a,{align:"right"},"Task"),r.a.createElement(v.a,{align:"right"},"Time start"),r.a.createElement(v.a,{align:"right"},"Time end"),r.a.createElement(v.a,{align:"right"},"Time spent"),r.a.createElement(v.a,{align:"right"},"Info"),r.a.createElement(v.a,{align:"right"},"Delete"))),r.a.createElement(h.a,null,e&&e.map((function(e,t){return r.a.createElement(j.a,{key:e.startTime},r.a.createElement(v.a,{component:"th",scope:"row"},t+1),r.a.createElement(v.a,{component:"th",scope:"row"},e.taskName),r.a.createElement(v.a,{align:"right"},new Date(e.startTime).toLocaleTimeString()),r.a.createElement(v.a,{align:"right"},new Date(e.endTime).toLocaleTimeString()),r.a.createElement(v.a,{align:"right"},function(e){var t=parseInt(e/1e3),a=parseInt(t/3600);t%=3600;var n=parseInt(t/60);return t%=60,(a<10?"0".concat(a):a)+":"+(n<10?"0".concat(n):n)+":"+(t<10?"0".concat(t):t)}(e.endTime-e.startTime)),r.a.createElement(v.a,{align:"right"},r.a.createElement(y.b,{to:"/tasks/".concat(t+1)},r.a.createElement(E.a,{color:"primary"},"INFO"))),r.a.createElement(v.a,{align:"right"},r.a.createElement(I,{task:e},"DELETE")))})))))},x=a(36),M=function(e){var t=function(e){var t=Object(m.a)(new Array(24).keys()).map((function(){return 0}));return e.forEach((function(e){var a=e.startTime,n=e.endTime,r=new Date(a).getHours(),l=new Date(a).getMinutes(),c=new Date(n).getHours(),i=new Date(n).getMinutes();if(r===c&&(t[r]+=i-l),c>r){var o=r;for(t[o]+=60-l,o+=1;o!==c;)t[o]=60,o+=1;t[o]+=i}})),t.map((function(e,t){return{hour:t,minutes:e}}))}(e.tasks);return n.createElement("div",{style:{width:"100%",height:"55vh",padding:8}},n.createElement(x.f,null,n.createElement(x.b,{margin:{top:20,right:30,left:0,bottom:0},data:t},n.createElement(x.c,{strokeDasharray:"3 3"}),n.createElement(x.g,{dataKey:"hour"},n.createElement(x.d,{value:"Hours",offset:0,position:"insideBottom"})),n.createElement(x.h,{label:{value:"Minutes in hours",angle:-90,position:"insideLeft"}}),n.createElement(x.a,{dataKey:"minutes",barSize:10,fill:"#8884d8"},n.createElement(x.e,{dataKey:"minutes",position:"top"})))))},K=a(466),L=a(467),R=a(468),_=a(197),H=a.n(_),J=function(){var e=Object(o.c)((function(e){return e.tasks})),t=Object(f.g)().params.id,a=e[t-1]?e[t-1]:{},n=a.taskName,l=a.startTime,c=a.endTime;return r.a.createElement(d.a,{open:!0},r.a.createElement(K.a,null,r.a.createElement(L.a,null,r.a.createElement(y.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(R.a,{edge:"start",color:"default","aria-label":"close"},r.a.createElement(H.a,{style:{color:"white"}}))))),r.a.createElement("div",{style:{marginTop:48,padding:16}},e[t-1]&&r.a.createElement("div",null,r.a.createElement("p",null,"Name: ",n),r.a.createElement("p",null,"Start Time: ",new Date(l).toLocaleTimeString()),r.a.createElement("p",null,"End Time: ",new Date(c).toLocaleTimeString()),r.a.createElement(I,{task:e[t-1]},"DELETE")),!e[t-1]&&r.a.createElement("div",null,"Error! No such task #",t,"!")))},B=a(473),P=a(469),W=function(){var e=Object(f.f)().pathname,t=Object(n.useState)("/chart"===e?1:0),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(f.e)();return r.a.createElement(K.a,{position:"static",color:"primary"},r.a.createElement(B.a,{value:l,onChange:function(e,t){o.push(["","/chart"][t]),c(t)},"aria-label":"disabled tabs example",variant:"fullWidth"},r.a.createElement(P.a,{label:"TASKS LOG"}),r.a.createElement(P.a,{label:"TASKS CHART"})))},F=a(474),G=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];clearTimeout(a),a=setTimeout((function(){return e.apply(void 0,r)}),t)}},V=function(e,t){return Object(n.useCallback)(G(e,t),[])},z=function(){var e=Object(o.c)((function(e){return e.taskName})),t=Object(o.b)(),a=Object(n.useState)(e),l=Object(i.a)(a,2),c=l[0],m=l[1],s=V((function(e){return t(function(e){return{type:"SET-TASK-NAME",taskName:e}}(e))}),400);Object(n.useEffect)((function(){m(e)}),[e]);return r.a.createElement(F.a,{value:c,onChange:function(e){var t=e.target.value;m(t),s(t)},placeholder:"Name of your task"})},q=a(470),Q=a(471),U=function(e){var t=e.open,a=e.setVisible,n=function(){return a(!1)};return r.a.createElement(w.a,{fullWidth:!0,maxWidth:"xs",open:t,onClose:n,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(q.a,{id:"max-width-dialog-title"},"Input is empty!"),r.a.createElement(D.a,null,r.a.createElement(Q.a,null,"Enter the name of task first")),r.a.createElement(N.a,null,r.a.createElement(E.a,{onClick:n,color:"primary"},"OK")))},X=function(e,t){return Math.floor(Math.random()*(t-e))+e},Y=function(){var e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(10,15),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length===t?a:(a.push(1440*Math.random()),a.sort((function(e,t){return t>e?-1:1})),e(t,a=a.filter((function(e,t,a){return 0===t||!(e-a[t-1]<10)&&!(t===a.length-1&&1440-e<10)}))))}(),t=e.map((function(t,a){var n;return n=a<e.length-1?e[a+1]-t<90?e[a+1]-t:90:n=90,t+X(10,n)})),a=new Date((new Date).toDateString()).getTime();return e.map((function(e,n){return{taskName:"Task ".concat(n+1),startTime:a+6e4*e,endTime:a+6e4*t[n]}}))},Z=function(){var e=Object(n.useState)({id:null,time:null}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),u=m[0],p=m[1],g=Object(o.c)((function(e){return e})),b=g.startTime,h=g.tasks,v=g.taskName,k=Object(o.b)();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;if(e&&!t){var n=setInterval((function(){var t=Date.now()-e;a((function(e){return Object(s.a)(Object(s.a)({},e),{},{time:t})}))}));a((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:n})}))}}(b,a.id,l);return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{path:["/","/chart"],exact:!0},r.a.createElement(z,null),r.a.createElement(T,{time:a.time}),r.a.createElement("div",{style:{paddingBottom:12}},!b&&r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){k({type:"START_TIMER",startTime:Date.now()})}},"START"),b&&r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){if(v){var e={taskName:v,startTime:b,endTime:Date.now()};clearInterval(a.id),l({}),k({type:"STOP_TIMER",newTask:e})}else p(!0)}},"STOP"))),r.a.createElement(U,{open:u,setVisible:p}),r.a.createElement(d.a,{style:{margin:16}},r.a.createElement(f.a,{path:"/",exact:!0},r.a.createElement(W,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"flex-end"}},r.a.createElement(A,null),r.a.createElement(E.a,{style:{margin:16},variant:"outlined",onClick:function(){var e=Y();k(function(e){return{type:"SET-TASKS",tasks:e}}(e))}},"GENERATE"))),r.a.createElement(f.a,{path:"/chart",exact:!0},r.a.createElement(W,null),r.a.createElement(M,{tasks:h})),r.a.createElement(f.a,{path:"/tasks/:id"},r.a.createElement(J,null))))},$=a(68),ee=window.localStorage,te=Object($.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TASKS":return Object(s.a)(Object(s.a)({},e),{},{tasks:t.tasks});case"SET-TASK-NAME":return Object(s.a)(Object(s.a)({},e),{},{taskName:t.taskName});case"START_TIMER":return Object(s.a)(Object(s.a)({},e),{},{startTime:t.startTime});case"STOP_TIMER":return Object(s.a)(Object(s.a)({},e),{},{startTime:null,taskName:"",tasks:[].concat(Object(m.a)(e.tasks),[t.newTask])});case"DELETE_TASK":return Object(s.a)(Object(s.a)({},e),{},{startTime:null,taskName:"",tasks:e.tasks.filter((function(e){return e.startTime!==t.startTime}))});default:return Object(s.a)({},e)}}),function(){if(null!==ee.getItem("applicationState"))return JSON.parse(ee.getItem("applicationState"))}(),Object($.a)((function(e){var t=e.getState;return function(e){return function(a){var n=e(a);return ee.setItem("applicationState",JSON.stringify(t())),n}}})));c.a.render(r.a.createElement(o.a,{store:te},r.a.createElement(y.a,{basename:"/task-timer"},r.a.createElement(Z,null))),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.e8e45067.chunk.js.map