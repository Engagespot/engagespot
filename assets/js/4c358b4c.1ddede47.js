"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3679],{5325:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(5773),o=(r(7378),r(5318));const a={},i="Error Codes",s={unversionedId:"troubleshooting/error-codes",id:"troubleshooting/error-codes",title:"Error Codes",description:"This chapter lists all common error codes that you might encounter using our SDKs or APIs, their messages, reasons and possible fixes.",source:"@site/docs/troubleshooting/error-codes.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/error-codes",permalink:"/docs/troubleshooting/error-codes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting/error-codes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting and Updating Preferences",permalink:"/docs/learn-by-examples/notification-preference-center/getting-and-updating-preferences"},next:{title:"index",permalink:"/docs/api-reference/react-component/"}},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-codes"},"Error Codes"),(0,o.kt)("p",null,"This chapter lists all common error codes that you might encounter using our SDKs or APIs, their messages, reasons and possible fixes."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error code"),(0,o.kt)("th",{parentName:"tr",align:null},"Message"),(0,o.kt)("th",{parentName:"tr",align:null},"Reason"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Fix"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES1000"),(0,o.kt)("td",{parentName:"tr",align:null},"You must pass an options object when you instantiate Engagespot."),(0,o.kt)("td",{parentName:"tr",align:null},"You're not passing the options object in new Engagespot() Constructor."),(0,o.kt)("td",{parentName:"tr",align:null},"Pass options object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES1001"),(0,o.kt)("td",{parentName:"tr",align:null},"You must pass userId when you instantiate Engagespot."),(0,o.kt)("td",{parentName:"tr",align:null},"You're not passing a userId to new Engagespot() constructor."),(0,o.kt)("td",{parentName:"tr",align:null},"Pass userId inside options object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES1003 (also ES1004)"),(0,o.kt)("td",{parentName:"tr",align:null},"Service worker registration failed"),(0,o.kt)("td",{parentName:"tr",align:null},"You haven't created service-worker.js file in your web app root folder"),(0,o.kt)("td",{parentName:"tr",align:null},"Either you must disable web push channel from Engagespot dashboard, or create a service-worker.js file with necessary configuration as mentioned in the docs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES1005"),(0,o.kt)("td",{parentName:"tr",align:null},"A service worker must be registered before push can be subscribed"),(0,o.kt)("td",{parentName:"tr",align:null},"You're calling ",(0,o.kt)("inlineCode",{parentName:"td"},"getWebPushSubscription()")," of Javascript Core without registering a service worker."),(0,o.kt)("td",{parentName:"tr",align:null},"Make sure your service worker is registered properly.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES1006"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed to register push notification with Engagespot server"),(0,o.kt)("td",{parentName:"tr",align:null},"Registering with Engagespot server failed for some reason"),(0,o.kt)("td",{parentName:"tr",align:null},"Probably nothing you can do. Please contact ",(0,o.kt)("a",{parentName:"td",href:"mailto:support@engagespot.co"},"support@engagespot.co"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ES1007"),(0,o.kt)("td",{parentName:"tr",align:null},"You must pass your API key when you instantiate Engagespot"),(0,o.kt)("td",{parentName:"tr",align:null},"You have not passed your API Key to new Engagespot() constructor."),(0,o.kt)("td",{parentName:"tr",align:null},"Pass APIKey to Engagespot constructor.")))))}c.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);