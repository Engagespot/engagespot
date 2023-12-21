"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5793],{42313:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var i=n(52685),a=(n(27378),n(35318));const o={sidebar_position:2},r="Using Notification Events and States",s={unversionedId:"bubble-io-plugin/using-notification-events-states",id:"bubble-io-plugin/using-notification-events-states",title:"Using Notification Events and States",description:"With version 2.5.0 and above, you can trigger Bubble workflows based on notification click events.",source:"@site/docs/bubble-io-plugin/using-notification-events-states.md",sourceDirName:"bubble-io-plugin",slug:"/bubble-io-plugin/using-notification-events-states",permalink:"/docs/bubble-io-plugin/using-notification-events-states",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bubble-io-plugin/using-notification-events-states.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Enabling HMAC Authentication in Engagespot Bubble Plugin",permalink:"/docs/bubble-io-plugin/enabling-hmac-auth-bubble"},next:{title:"React Component",permalink:"/docs/playgrounds/react-component"}},l={},c=[{value:"Supported Events",id:"supported-events",level:2},{value:"Sending custom data with notification send action.",id:"sending-custom-data-with-notification-send-action",level:2},{value:"Listening to notification click actions, and triggering workflows.",id:"listening-to-notification-click-actions-and-triggering-workflows",level:2},{value:"Listening to notification received events.",id:"listening-to-notification-received-events",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-notification-events-and-states"},"Using Notification Events and States"),(0,a.kt)("p",null,"With version ",(0,a.kt)("inlineCode",{parentName:"p"},"2.5.0")," and above, you can trigger Bubble workflows based on notification click events."),(0,a.kt)("h2",{id:"supported-events"},"Supported Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Notification Received"),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers when a new notification is received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Notification Clicked"),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers when a new notification is clicked")))),(0,a.kt)("h2",{id:"sending-custom-data-with-notification-send-action"},"Sending custom data with notification send action."),(0,a.kt)("p",null,"The first step in triggering custom workflows based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifiction Click")," event is to add custom data data attributes to the send action."),(0,a.kt)("p",null,"For this, the Engagespot Bubble Plugin allows you to define two custom data attributes - ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Data 1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Data 2"),". These two are text data attributes which you can use to assign any value such as a Unique ID."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://engagespot-website.s3.us-west-2.amazonaws.com/public/bubble_custom_data_e68f75392d.png?updated_at=2023-05-26T13:28:41.811Z",alt:"Attaching custom attributes to Send Notification Action"})),(0,a.kt)("p",null,"These two custom data attributes will be available as state variables on the front-end."),(0,a.kt)("h2",{id:"listening-to-notification-click-actions-and-triggering-workflows"},"Listening to notification click actions, and triggering workflows."),(0,a.kt)("p",null,"When a notification inside the Engagespot notification inbox component is clicked by the user, it triggers ",(0,a.kt)("inlineCode",{parentName:"p"},"Notification Clicked")," event that you can listen in Bubble workflow builder."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://engagespot-website.s3.us-west-2.amazonaws.com/public/trigger_20baa74212.png?updated_at=2023-05-26T13:28:42.211Z",alt:"Listening to notification click event"})),(0,a.kt)("p",null,"Along with this event, two state variables ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Data 1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Data 2")," will be made available."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://engagespot-website.s3.us-west-2.amazonaws.com/public/using_state_variables_d087468601.png?updated_at=2023-05-26T13:28:42.519Z",alt:"Accessing custom data states"})),(0,a.kt)("p",null,"For example, you could save the notification type (eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"like_notification"),") in ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Data 1")," variable. And any other meta data that you need in your workflow (eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"post_id"),") in ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Data 2"),". And then use this data in a workflow to navigate the user to the page as per your requirement."),(0,a.kt)("h2",{id:"listening-to-notification-received-events"},"Listening to notification received events."),(0,a.kt)("p",null,"When a notification is received, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Notification Received")," event is triggered that you can listen in Bubble workflow builder. Along with this event, three state variables ",(0,a.kt)("inlineCode",{parentName:"p"},"Received Notification ID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Received Notification Title"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Received Notification Message")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Received Notification JSON")," will be made available."),(0,a.kt)("p",null,"You can use this event to build customized experiences such as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Showing a custom toast upon receiving a notification."),(0,a.kt)("li",{parentName:"ul"},"Start a workflow."),(0,a.kt)("li",{parentName:"ul"},"Play a sound.")))}p.isMDXComponent=!0},35318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var i=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,b=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?i.createElement(b,r(r({ref:e},u),{},{components:n})):i.createElement(b,r({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);