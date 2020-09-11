(this["webpackJsonptask-timer"]=this["webpackJsonptask-timer"]||[]).push([[0],{188:function(e,t,a){e.exports={Clock:"Clock_Clock__3dHhC"}},236:function(e,t,a){e.exports=a(427)},241:function(e,t,a){},242:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),i=(a(241),a(202)),o=a(20),s=a(131),m=(a(242),a(74)),u={startTime:null,time:["00","00","00"],taskName:"",taskInterval:!1},E=function(e){return{type:"SET-START-TIME",startTime:e}},T=function(e){return{type:"SET-TASKS",tasks:e}},f=function(e){return{type:"SET-TASK-NAME",taskName:e}},d=a(475),g=a(480),p=a(481),b=a(479),v=a(476),k=a(18),h=a(188),S=a.n(h),O=function(e){var t=e.timer,a=function(e){var t=parseInt(e%1e3/100),a=parseInt(e/1e3%60),n=parseInt(e/6e4%60),r=parseInt(e/36e5%24);return{hours:r=r<10?"0".concat(r):r,minutes:n=n<10?"0".concat(n):n,seconds:a=a<10?"0".concat(a):a,milliseconds:t}}(void 0===t?0:t),n=a.hours,l=a.minutes,c=a.seconds;return r.a.createElement("div",{className:S.a.Clock},r.a.createElement("span",null,n,":",l,":",c))},j=a(470),w=a(474),I=a(473),N=a(469),y=a(471),D=a(472),A=a(428),C=a(31);var M=function(e){var t=e.tasks,a=e.deleteTask;return r.a.createElement(A.a,null,r.a.createElement(N.a,{component:A.a},r.a.createElement(j.a,{"aria-label":"simple table"},r.a.createElement(y.a,null,r.a.createElement(D.a,null,r.a.createElement(I.a,null,"\u2116"),r.a.createElement(I.a,{align:"right"},"Task"),r.a.createElement(I.a,{align:"right"},"Time start"),r.a.createElement(I.a,{align:"right"},"Time end"),r.a.createElement(I.a,{align:"right"},"Time spent"),r.a.createElement(I.a,{align:"right"},"Info"),r.a.createElement(I.a,{align:"right"},"Delete"))),r.a.createElement(w.a,null,t&&t.map((function(e,t){return r.a.createElement(D.a,{key:e.startTime},r.a.createElement(I.a,{component:"th",scope:"row"},t+1),r.a.createElement(I.a,{component:"th",scope:"row"},e.taskName),r.a.createElement(I.a,{align:"right"},new Date(e.startTime).toLocaleTimeString()),r.a.createElement(I.a,{align:"right"},new Date(e.endTime).toLocaleTimeString()),r.a.createElement(I.a,{align:"right"},function(e){var t=parseInt(e/1e3),a=parseInt(t/3600);t%=3600;var n=parseInt(t/60);return t%=60,(a<10?"0".concat(a):a)+":"+(n<10?"0".concat(n):n)+":"+(t<10?"0".concat(t):t)}(e.endTime-e.startTime)),r.a.createElement(I.a,{align:"right"},r.a.createElement(C.b,{to:"/tasks/".concat(t+1)},r.a.createElement(d.a,null,"INFO"))),r.a.createElement(I.a,{align:"right"},r.a.createElement(d.a,{onClick:function(){return a(e)}},"DELETE")))}))))))},K=a(34),L=function(e){var t=function(e){for(var t=[],a=0;a<24;a++)t[a]=0;return e.forEach((function(e){var a=e.startTime,n=(e.endTime-a)/6e4,r=new Date(a).getHours(),l=60-new Date(a).getMinutes();console.log(l),n<=l?(t[r]+=n,n=0):(t[r]+=l,n-=l);var c=r+1;for(console.log(n);n<0;){var i=60-t[c];n<=i?(t[c]+=n,n=0):(t[c]+=i,n-=i),console.log(n)}console.log(t)})),t.map((function(e,t){return{hour:t,minutes:e}}))}(e.tasks);return n.createElement("div",{style:{width:"100%",height:"55vh",padding:8}},n.createElement(K.f,null,n.createElement(K.b,{margin:{top:20,right:30,left:0,bottom:0},data:t},n.createElement(K.c,{strokeDasharray:"3 3"}),n.createElement(K.g,{dataKey:"hour"},n.createElement(K.d,{value:"Hours",offset:0,position:"insideBottom"})),n.createElement(K.h,{label:{value:"Minutes in hours",angle:-90,position:"insideLeft"}}),n.createElement(K.a,{dataKey:"minutes",barSize:10,fill:"#8884d8"},n.createElement(K.e,{dataKey:"minutes",position:"top"})))))},x=a(483),R=a(477),H=a(478),J=a(201),_=a.n(J),B=function(e){var t=e.tasks,a=e.deleteTask,n=Object(k.g)().params.id,l=t[n-1]?t[n-1]:{},c=l.taskName,i=l.startTime,o=l.endTime;return r.a.createElement(x.a,{fullScreen:!0,open:!0},r.a.createElement(v.a,null,r.a.createElement(R.a,null,r.a.createElement(C.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(H.a,{edge:"start",color:"secondary","aria-label":"close"},r.a.createElement(_.a,null))))),r.a.createElement("div",{style:{marginTop:48,padding:16}},t[n-1]&&r.a.createElement("div",null,r.a.createElement("p",null,"Name: ",c),r.a.createElement("p",null,"Start Time: ",new Date(i).toLocaleTimeString()),r.a.createElement("p",null,"End Time: ",new Date(o).toLocaleTimeString()),r.a.createElement(C.b,{to:"/"},r.a.createElement(d.a,{onClick:function(){return a(t[n-1])}},"DELETE"))),!t[n-1]&&r.a.createElement("div",null,"Error! No such task!")))},F=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(k.f)().pathname,u=Object(n.useState)("/chart"===c?1:0),h=Object(s.a)(u,2),S=h[0],j=h[1],w=Object(m.c)((function(e){return e})),I=w.startTime,N=w.tasks,y=w.taskName,D=Object(m.b)(),A=Object(k.e)();if(I&&!a.id){var C=setInterval((function(){var e=Date.now()-I;l((function(t){return Object(o.a)(Object(o.a)({},t),{},{time:e})}))}));l((function(e){return Object(o.a)(Object(o.a)({},e),{},{id:C})}))}var K=function(e){var t=N.filter((function(t){return t.startTime!==e.startTime}));D(T(t))},x=function(e,t){return Math.floor(Math.random()*(t-e))+e};return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{value:y,onChange:function(e){return D(f(e.target.value))},id:"standard-basic",label:"Name of your task"}),r.a.createElement(O,{timer:a.time}),!I&&r.a.createElement(d.a,{onClick:function(){D(E(Date.now()))}},"START"),I&&r.a.createElement(d.a,{onClick:function(){if(y){var e={taskName:y,startTime:I,endTime:Date.now()},t=N?[].concat(Object(i.a)(N),[e]):[e];window.clearInterval(a.id),l({}),D(E(null)),D(T(t)),D(f(""))}else alert("Enter task name first!")}},"STOP"),r.a.createElement(v.a,{position:"static",color:"primary"},r.a.createElement(p.a,{value:S,onChange:function(e,t){A.push(["/logs","/chart"][t]),j(t)},"aria-label":"disabled tabs example",variant:"fullWidth"},r.a.createElement(b.a,{label:"TASKS LOG"}),r.a.createElement(b.a,{label:"TASKS CHART"}))),0===S&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{tasks:N,deleteTask:K}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},r.a.createElement(d.a,{onClick:function(){return function(){var e=new Date((new Date).toDateString()).getTime();console.log(e);for(var t=x(10,15),a=0,n=[];n.length<t;)a=e+x(0,81e6),n.push({startTime:a}),n.filter((function(e,t){return n.indexOf(e)===t})),n.sort((function(e,t){return e.startTime>t.startTime?1:e.startTime<t.startTime?-1:0})),a=n[n.length-1].startTime+6e5;for(var r=0;r<t;r++){var l=void 0;l=r===t-1?54e5:n[r+1].startTime-n[r].startTime<54e5?n[r+1].startTime-n[r].startTime:54e5,n[r]=Object(o.a)(Object(o.a)({},n[r]),{},{taskName:"Task ".concat(r+1),endTime:n[r].startTime+x(6e5,l)})}D(T(n))}()}},"GENERATE"))),1===S&&r.a.createElement(L,{tasks:N}),r.a.createElement(k.a,{path:"/tasks/:id"},r.a.createElement(B,{tasks:N,deleteTask:K})))},G=a(69),z=window.localStorage,P=Object(G.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TIMER-INTERVAL":return Object(o.a)(Object(o.a)({},e),{},{taskInterval:t.taskInterval});case"SET-START-TIME":return Object(o.a)(Object(o.a)({},e),{},{startTime:t.startTime});case"SET-TIME":return Object(o.a)(Object(o.a)({},e),{},{time:t.time});case"SET-TASKS":return Object(o.a)(Object(o.a)({},e),{},{tasks:t.tasks});case"SET-TASK-NAME":return Object(o.a)(Object(o.a)({},e),{},{taskName:t.taskName});default:return Object(o.a)({},e)}}),function(){if(null!==z.getItem("applicationState"))return JSON.parse(z.getItem("applicationState"))}(),Object(G.a)((function(e){var t=e.getState;return function(e){return function(a){var n=e(a);return z.setItem("applicationState",JSON.stringify(t())),n}}})));c.a.render(r.a.createElement(m.a,{store:P},r.a.createElement(C.a,{basename:"/task-timer"},r.a.createElement(F,null))),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.b064c19c.chunk.js.map