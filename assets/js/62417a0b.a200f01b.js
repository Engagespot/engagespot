"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4707],{42229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=r(52685),a=(r(27378),r(35318));const o={},i="What are Preferences?",s={unversionedId:"preference/what-are-preferences",id:"preference/what-are-preferences",title:"What are Preferences?",description:"Before reading preferences, you should understand Profiles and Notification Categories.",source:"@site/docs/preference/what-are-preferences.md",sourceDirName:"preference",slug:"/preference/what-are-preferences",permalink:"/docs/preference/what-are-preferences",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/preference/what-are-preferences.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sending Templated Notification",permalink:"/docs/templates/sending"},next:{title:"Introduction to Notification Batching",permalink:"/docs/batching/introduction"}},c={},l=[{value:"Setting User Preferences.",id:"setting-user-preferences",level:2},{value:"Using Javascript Core SDK",id:"using-javascript-core-sdk",level:3},{value:"Getting categories",id:"getting-categories",level:4},{value:"Setting Preferences",id:"setting-preferences",level:4},{value:"Using REST API",id:"using-rest-api",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-preferences"},"What are Preferences?"),(0,a.kt)("p",null,"Before reading preferences, you should understand ",(0,a.kt)("a",{parentName:"p",href:"../profile/what-are-user-profiles"},"Profiles")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/what-are-categories"},"Notification Categories"),".\nPreference configurations allow your users to decide how they receive notifications (for each notification category)"),(0,a.kt)("p",null,"For example, one of your user can choose to receive notifications for 'New Friend Request' events only through email, while another user can enable both push and email notifications for the same."),(0,a.kt)("p",null,"Building such a fine-graned preference system can take you several days or months of effort. With Engagespot, you simply get everything out of the box."),(0,a.kt)("h2",{id:"setting-user-preferences"},"Setting User Preferences."),(0,a.kt)("p",null,"You can add user preference for each category either via REST API or our client SDKs (For example - ReactJS or Core Javascript)."),(0,a.kt)("h3",{id:"using-javascript-core-sdk"},"Using Javascript Core SDK"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("a",{href:"/docs/javascript-guide/using-javascript-core-api",target:"_blank"},"Engagespot Javascript Core SDK"),", you can build a custom notification preference manager in your app. "),(0,a.kt)("h4",{id:"getting-categories"},"Getting categories"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getCategories()")," method to get the list of categories in your app."),(0,a.kt)("h4",{id:"setting-preferences"},"Setting Preferences"),(0,a.kt)("p",null,"You should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setPreferences")," method to store key value pairs to your user's profile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const engagespotClient = new Engagespot('API_KEY', {\n  userId: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nengagespotClient.setPreferences([\n  {\n    categoryId: 1,\n    channels: [\n      {\n        channel: 'email',\n        enabled: true,\n      },\n      {\n        channel: 'webPush',\n        enabled: false,\n      },\n    ],\n  },\n]);\n")),(0,a.kt)("p",null,"This will enable email notifications and disable web push notification for category with id ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". You can get the list of categories (along with their id's) using ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," API."),(0,a.kt)("h2",{id:"using-rest-api"},"Using REST API"),(0,a.kt)("p",null,"You should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/preferences")," endpoint in the REST API to update your user's profile. Read API Docs for more information."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-by-examples/notification-preference-center/concepts"},"this example")," to learn how to build a Notification Preference Manager in your app."))}u.isMDXComponent=!0},35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);