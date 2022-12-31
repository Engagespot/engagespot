"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8976],{92806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(52685),o=(n(27378),n(35318));const a={},i="What are Categories?",c={unversionedId:"category/what-are-categories",id:"category/what-are-categories",title:"What are Categories?",description:"Categories are used to tag notifications. For example, you can tag notification Hey, Anand commented on your photo in new_comment category. Grouping notifications under categories will help your users set preferences in receiving notifications from categories. See Preferences",source:"@site/docs/category/what-are-categories.md",sourceDirName:"category",slug:"/category/what-are-categories",permalink:"/docs/category/what-are-categories",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/category/what-are-categories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HMAC Authentication",permalink:"/docs/user/enabling-HMAC-authentication"},next:{title:"Introduction to Templates",permalink:"/docs/templates/introduction"}},s={},p=[{value:"Creating a Category",id:"creating-a-category",level:2},{value:"Tagging a Notification",id:"tagging-a-notification",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-are-categories"},"What are Categories?"),(0,o.kt)("p",null,"Categories are used to tag notifications. For example, you can tag notification ",(0,o.kt)("em",{parentName:"p"},"Hey, Anand commented on your photo")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"new_comment")," category. Grouping notifications under categories will help your users set preferences in receiving notifications from categories. See ",(0,o.kt)("a",{parentName:"p",href:"../preference/what-are-preferences"},"Preferences")),(0,o.kt)("h2",{id:"creating-a-category"},"Creating a Category"),(0,o.kt)("p",null,"A category can be created using ",(0,o.kt)("inlineCode",{parentName:"p"},"/category")," API endpoint, or through the dashboard (coming soon)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you include ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," parameter in the send ",(0,o.kt)("inlineCode",{parentName:"p"},"/notifications")," API, we'll check if that category exists in your system. If not, we'll create it on the go.")),(0,o.kt)("h2",{id:"tagging-a-notification"},"Tagging a Notification"),(0,o.kt)("p",null,"This is how you can tag a notification with a category identifier while sending it through REST API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/notifications")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "notification": {\n    "title": "Anand commented on your photo",\n    "message": "Hey Steve, you\'re looking cool \ud83d\ude0e. Who took this photo?",\n    "url": "https://your-app.com/photos/17293739"\n  },\n  "category": "new_comment",\n  "recipients": ["steve@example.com"]\n}\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you do not tag a notification in a category, it will not check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/preference/what-are-preferences"},"notification preferences")," set by your users, and the notification will be delivered to everyone.")))}l.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(n),f=o,m=g["".concat(s,".").concat(f)]||g[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);