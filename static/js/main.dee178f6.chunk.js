(this["webpackJsonpreact-hooks-pomodoro-timer"]=this["webpackJsonpreact-hooks-pomodoro-timer"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var i=t(1),o=t.n(i),r=t(5),c=t.n(r),s=(t(11),t(3)),a=(t(12),t(2)),l=t.n(a),u=t(0),d=function(e){var n=e.breakLength,t=e.decrementBreakLengthByOneMinute,i=e.incrementBreakLengthByOneMinute,o=l.a.duration(n,"s").minutes();return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{id:"break-label",children:"Break"}),Object(u.jsx)("p",{id:"break-length",children:o}),Object(u.jsx)("button",{id:"break-decrement",onClick:t,children:"-"}),Object(u.jsx)("button",{id:"break-increment",onClick:i,children:"+"})]})},h=function(e){var n=e.sessionLength,t=e.decrementSessionLengthByOneMinute,i=e.incrementSessionLengthByOneMinute,o=l.a.duration(n,"s").minutes();return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{id:"session-label",children:"Session"}),Object(u.jsx)("p",{id:"session-length",children:o}),Object(u.jsx)("button",{id:"session-decrement",onClick:t,children:"-"}),Object(u.jsx)("button",{id:"session-increment",onClick:i,children:"+"})]})},b=t(6);t.n(b)()(l.a);var f=function(e){var n=e.handleStartStopClick,t=e.startStopButtonLabel,i=e.timeLeft,o=e.timerLabel,r=l.a.duration(i,"s").format("mm:ss",{trim:!1});return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{id:"timer-label",children:o}),Object(u.jsx)("p",{id:"time-left",children:r}),Object(u.jsx)("button",{id:"start_stop",onClick:n,children:t})]})};var j=function(){var e=Object(i.useState)("Session"),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(i.useState)(null),c=Object(s.a)(r,2),a=c[0],l=c[1],b=Object(i.useState)(1500),j=Object(s.a)(b,2),O=j[0],g=j[1],m=Object(i.useState)(300),v=Object(s.a)(m,2),k=v[0],p=v[1],S=Object(i.useState)(O),w=Object(s.a)(S,2),x=w[0],L=w[1];Object(i.useEffect)((function(){L(O)}),[O]),Object(i.useEffect)((function(){0===x&&("Session"===t?(o("Break"),L(k)):"Break"===t&&(o("Session"),L(O)))}),[x,t,k,O]);var B=null!==a;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{breakLength:k,decrementBreakLengthByOneMinute:function(){var e=k-60;p(e<0?0:e)},incrementBreakLengthByOneMinute:function(){p(k+60)}}),Object(u.jsx)(f,{handleStartStopClick:function(){if(B)clearInterval(a),l(null);else{var e=setInterval((function(){L((function(e){if(e-1>=0)return e-1}))}),100);l(e)}},timerLabel:t,startStopButtonLabel:B?"Stop":"Start",timeLeft:x}),Object(u.jsx)(h,{sessionLength:O,decrementSessionLengthByOneMinute:function(){var e=O-60;g(e<0?0:e)},incrementSessionLengthByOneMinute:function(){g(O+60)}}),Object(u.jsx)("button",{id:"reset",onClick:function(){clearInterval(a),l(null),o("Session"),g(1500),p(300),L(1500)},children:"Reset"})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),o(e),r(e),c(e)}))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),O(),function(e){if("serviceWorker"in navigator){if(new URL("/react-hooks-pomodoro-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-hooks-pomodoro-timer","/service-worker.js");g?(!function(e,n){fetch(e).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):m(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.dee178f6.chunk.js.map