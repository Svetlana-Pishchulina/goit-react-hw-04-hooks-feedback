(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={list:"FeedbackOptions_list__c3cui",listItem:"FeedbackOptions_listItem__1HGzn",button:"FeedbackOptions_button__2y29m"}},function(e,t,n){e.exports={listItem:"Statistics_listItem__1sWTg"}},,,function(e,t,n){e.exports={sectionTitle:"Section_sectionTitle__33b43"}},function(e,t,n){e.exports={notification:"Notification_notification__3BQX3"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(6),a=n.n(i),r=(n(13),n(2)),o=(n(14),n(3)),l=n.n(o),b=n(0),u=function(e){var t=e.onLeaveFeedback,n=e.stateKeysArr;return Object(b.jsx)("ul",{className:l.a.list,children:n.map((function(e){return Object(b.jsx)("li",{className:l.a.listItem,children:Object(b.jsx)("button",{className:l.a.button,onClick:t,children:e})},e)}))})},j=n(4),d=n.n(j),f=function(e){var t=e.allFeedbacksObj,n=e.total,c=e.positivePercentage,s=e.stateKeysArr;return Object(b.jsxs)("ul",{children:[s.map((function(e){return Object(b.jsx)("li",{className:d.a.listItem,children:Object(b.jsxs)("span",{children:[e,":",t[e]]})},e)})),Object(b.jsxs)("li",{className:d.a.listItem,children:["Total:",n]}),Object(b.jsxs)("li",{className:d.a.listItem,children:["Positive feedback: ",c,"%"]})]})},O=n(7),m=n.n(O),h=function(e){var t=e.title,n=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:m.a.sectionTitle,children:t}),n]})},x=n(8),k=n.n(x),p=function(e){var t=e.message;return Object(b.jsx)("p",{className:k.a.notification,children:t})},_=function(e){var t=Object(c.useState)(0),n=Object(r.a)(t,2);return[n[0],n[1]]},g=function(){var e=_(),t=Object(r.a)(e,2),n=t[0],c=t[1],s=_(),i=Object(r.a)(s,2),a=i[0],o=i[1],l=_(),j=Object(r.a)(l,2),d=j[0],O=j[1],m={good:n,neutral:a,bad:d},x=Object.keys(m),k=x.reduce((function(e,t){return e+m[t]}),0),g=Math.round(n/k*100);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"Please leave feedback",children:Object(b.jsx)(u,{onLeaveFeedback:function(e){switch(e.target.textContent){case"good":c((function(e){return e+1}));break;case"neutral":o((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}},stateKeysArr:x})}),Object(b.jsx)(h,{title:"Statistics",children:k?Object(b.jsx)(f,{allFeedbacksObj:m,total:k,positivePercentage:g,stateKeysArr:x}):Object(b.jsx)(p,{message:"No feedback given"})})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.7819434e.chunk.js.map