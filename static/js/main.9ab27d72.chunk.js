(this["webpackJsonptask-timer"]=this["webpackJsonptask-timer"]||[]).push([[0],{188:function(e,t,a){e.exports={Clock:"Clock_Clock__3dHhC"}},236:function(e,t,a){e.exports=a(427)},241:function(e,t,a){},242:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),i=(a(241),a(202)),o=a(20),m=a(131),s=(a(242),a(74)),u={startTime:null,time:["00","00","00"],taskName:"",taskInterval:!1},E=function(e){return{type:"SET-START-TIME",startTime:e}},f=function(e){return{type:"SET-TASKS",tasks:e}},T=function(e){return{type:"SET-TASK-NAME",taskName:e}},d=a(475),p=a(480),g=a(481),k=a(479),v=a(428),b=a(18),h=a(188),S=a.n(h),O=function(e){var t=e.timer,a=function(e){var t=parseInt(e%1e3/100),a=parseInt(e/1e3%60),n=parseInt(e/6e4%60),r=parseInt(e/36e5%24);return{hours:r=r<10?"0".concat(r):r,minutes:n=n<10?"0".concat(n):n,seconds:a=a<10?"0".concat(a):a,milliseconds:t}}(void 0===t?0:t),n=a.hours,l=a.minutes,c=a.seconds;return r.a.createElement("div",{className:S.a.Clock},r.a.createElement("span",null,n,":",l,":",c))},j=a(470),w=a(474),I=a(473),D=a(466),N=a(471),y=a(472),A=a(31),C=function(e){var t=e.tasks,a=e.deleteTask;return r.a.createElement(D.a,{component:v.a},r.a.createElement(j.a,{"aria-label":"simple table"},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(I.a,null,"\u2116"),r.a.createElement(I.a,{align:"right"},"Task"),r.a.createElement(I.a,{align:"right"},"Time start"),r.a.createElement(I.a,{align:"right"},"Time end"),r.a.createElement(I.a,{align:"right"},"Time spent"),r.a.createElement(I.a,{align:"right"},"Info"),r.a.createElement(I.a,{align:"right"},"Delete"))),r.a.createElement(w.a,null,t&&t.map((function(e,t){return r.a.createElement(y.a,{key:e.startTime},r.a.createElement(I.a,{component:"th",scope:"row"},t+1),r.a.createElement(I.a,{component:"th",scope:"row"},e.taskName),r.a.createElement(I.a,{align:"right"},new Date(e.startTime).toLocaleTimeString()),r.a.createElement(I.a,{align:"right"},new Date(e.endTime).toLocaleTimeString()),r.a.createElement(I.a,{align:"right"},function(e){var t=parseInt(e/1e3),a=parseInt(t/3600);t%=3600;var n=parseInt(t/60);return t%=60,(a<10?"0".concat(a):a)+":"+(n<10?"0".concat(n):n)+":"+(t<10?"0".concat(t):t)}(e.endTime-e.startTime)),r.a.createElement(I.a,{align:"right"},r.a.createElement(A.b,{to:"/tasks/".concat(t+1)},r.a.createElement(d.a,null,"INFO"))),r.a.createElement(I.a,{align:"right"},r.a.createElement(d.a,{onClick:function(){return a(e)}},"DELETE")))})))))},M=a(34),K=function(e){var t=function(e){if(!e)return[];var t=(new Date).toDateString;e=e.filter((function(e){var a=e.startTime;return new Date(a).toDateString===t}));for(var a=[],n=0;n<24;n++)a[n]=0;return e.forEach((function(e){for(var t=e.startTime,n=e.endTime,r=new Date(t).getHours(),l=new Date(t).getMinutes(),c=(n-t)/6e4,i=[],o=r;o<24;o++)i[o]=o===r?60-l-a[o]:60-a[o];for(var m=r;m<24;m++)c>=i[m]?(a[m]+=i[m],c-=i[m]):(a[m]+=c,c=0)})),a.map((function(e,t){return{hour:+t,minutes:Math.ceil(e)}}))}(e.tasks);return n.createElement("div",{style:{width:"100%",height:"55vh",padding:8}},n.createElement(M.f,null,n.createElement(M.b,{margin:{top:20,right:30,left:0,bottom:0},data:t},n.createElement(M.c,{strokeDasharray:"3 3"}),n.createElement(M.g,{dataKey:"hour"},n.createElement(M.d,{value:"Hours",offset:0,position:"insideBottom"})),n.createElement(M.h,{label:{value:"Minutes in hours",angle:-90,position:"insideLeft"}}),n.createElement(M.a,{dataKey:"minutes",barSize:10,fill:"#8884d8"},n.createElement(M.e,{dataKey:"minutes",position:"top"})))))},L=a(483),R=a(476),x=a(477),H=a(478),J=a(201),_=a.n(J),B=function(e){var t=e.tasks,a=e.deleteTask;console.log(t);var n=Object(b.g)().params.id,l=t[n-1]?t[n-1]:{},c=l.taskName,i=l.startTime,o=l.endTime;return r.a.createElement(L.a,{fullScreen:!0,open:!0},r.a.createElement(R.a,null,r.a.createElement(x.a,null,r.a.createElement(A.b,{to:"/"},r.a.createElement(H.a,{edge:"start",color:"inherit","aria-label":"close"},r.a.createElement(_.a,null))))),r.a.createElement("div",{style:{marginTop:48,padding:16}},t[n-1]&&r.a.createElement("div",null,r.a.createElement("p",null,"Name: ",c),r.a.createElement("p",null,"Start Time: ",new Date(i).toLocaleTimeString()),r.a.createElement("p",null,"End Time: ",new Date(o).toLocaleTimeString()),r.a.createElement(A.b,{to:"/"},r.a.createElement(d.a,{onClick:function(){return a(t[n-1])}},"DELETE"))),!t[n-1]&&r.a.createElement("div",null,"Error! No such task!")))},F=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(b.f)().pathname,u=Object(n.useState)("/chart"===c?1:0),h=Object(m.a)(u,2),S=h[0],j=h[1],w=Object(s.c)((function(e){return e})),I=Object(s.b)(),D=Object(b.e)(),N=w.startTime,y=w.tasks,A=w.taskName;if(N&&!a.id){var M=setInterval((function(){var e=Date.now()-N;l((function(t){return Object(o.a)(Object(o.a)({},t),{},{time:e})}))}));l((function(e){return Object(o.a)(Object(o.a)({},e),{},{id:M})}))}var L=function(e){var t=y.filter((function(t){return t.startTime!==e.startTime}));I(f(t))},R=function(e,t){return Math.floor(Math.random()*(t-e))+e};return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{value:A,onChange:function(e){return I(T(e.target.value))},id:"standard-basic",label:"Name of your task"}),r.a.createElement(O,{timer:a.time}),!N&&r.a.createElement(d.a,{onClick:function(){I(E(Date.now()))}},"START"),N&&r.a.createElement(d.a,{onClick:function(){if(A){var e={taskName:A,startTime:N,endTime:Date.now()},t=y?[].concat(Object(i.a)(y),[e]):[e];window.clearInterval(a.id),l({}),I(E(null)),I(f(t)),I(T(""))}else alert("Enter task name first!")}},"STOP"),r.a.createElement(v.a,null,r.a.createElement(g.a,{value:S,indicatorColor:"primary",textColor:"primary",color:"primary",onChange:function(e,t){D.push(["/logs","/chart"][t]),j(t)},"aria-label":"disabled tabs example",variant:"fullWidth"},r.a.createElement(k.a,{label:"TASKS LOG"}),r.a.createElement(k.a,{label:"TASKS CHART"}))),0===S&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{tasks:y,deleteTask:L}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},r.a.createElement(d.a,{onClick:function(){return function(){var e=new Date((new Date).toDateString()).getTime();console.log(e);for(var t=R(10,15),a=[],n=0;n<t;n++){var r=R(0,81e6),l=R(6e5,54e5),c={taskName:"Task ".concat(n+1),startTime:e+r,endTime:e+r+l};a.push(c)}I(f(a))}()}},"GENERATE"))),1===S&&r.a.createElement(K,{tasks:y}),r.a.createElement(b.a,{path:"/tasks/:id"},r.a.createElement(B,{tasks:y,deleteTask:L})))},G=a(69),z=window.localStorage,P=Object(G.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TIMER-INTERVAL":return Object(o.a)(Object(o.a)({},e),{},{taskInterval:t.taskInterval});case"SET-START-TIME":return Object(o.a)(Object(o.a)({},e),{},{startTime:t.startTime});case"SET-TIME":return Object(o.a)(Object(o.a)({},e),{},{time:t.time});case"SET-TASKS":return Object(o.a)(Object(o.a)({},e),{},{tasks:t.tasks});case"SET-TASK-NAME":return Object(o.a)(Object(o.a)({},e),{},{taskName:t.taskName});default:return Object(o.a)({},e)}}),function(){if(null!==z.getItem("applicationState"))return JSON.parse(z.getItem("applicationState"))}(),Object(G.a)((function(e){var t=e.getState;return function(e){return function(a){var n=e(a);return z.setItem("applicationState",JSON.stringify(t())),n}}})));c.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(A.a,{basename:window.location.host+"/task-timer"},r.a.createElement(F,null))),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.9ab27d72.chunk.js.map