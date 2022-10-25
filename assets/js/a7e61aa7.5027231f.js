"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2843],{84025:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(52685),a=(r(27378),r(35318));const o={},c=void 0,p={unversionedId:"api-reference/javascript/core.engagespot.attachpushsubscription",id:"api-reference/javascript/core.engagespot.attachpushsubscription",title:"core.engagespot.attachpushsubscription",description:"Home &gt; @engagespot/core &gt; Engagespot &gt; attachPushSubscription",source:"@site/docs/api-reference/javascript/core.engagespot.attachpushsubscription.md",sourceDirName:"api-reference/javascript",slug:"/api-reference/javascript/core.engagespot.attachpushsubscription",permalink:"/docs/api-reference/javascript/core.engagespot.attachpushsubscription",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/javascript/core.engagespot.attachpushsubscription.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"core.engagespot.askwebpushpermission",permalink:"/docs/api-reference/javascript/core.engagespot.askwebpushpermission"},next:{title:"core.engagespot.baseurl",permalink:"/docs/api-reference/javascript/core.engagespot.baseurl"}},i={},s=[{value:"Engagespot.attachPushSubscription() method",id:"engagespotattachpushsubscription-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:s};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/javascript/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/javascript/core"},"@engagespot/core")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/javascript/core.engagespot"},"Engagespot")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/javascript/core.engagespot.attachpushsubscription"},"attachPushSubscription")),(0,a.kt)("h2",{id:"engagespotattachpushsubscription-method"},"Engagespot.attachPushSubscription() method"),(0,a.kt)("p",null,"Attach the push subscription for this device"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"attachPushSubscription(subscription: PushSubscription): Promise<boolean | void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subscription"),(0,a.kt)("td",{parentName:"tr",align:null},"PushSubscription"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","boolean ","|"," void",">"))}l.isMDXComponent=!0},35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(r),f=a,m=g["".concat(i,".").concat(f)]||g[f]||l[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);