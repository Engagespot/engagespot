"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6751],{699:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return r},default:function(){return l},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var i=n(5773),o=(n(7378),n(5318));const a={sidebar_position:4},r="Android and iOS Quick Start",s={unversionedId:"introduction/android-ios-quick-start",id:"introduction/android-ios-quick-start",title:"Android and iOS Quick Start",description:"In this chapter, we will learn how to quickly setup Engagespot in your Android and iOS App. At the moment, we don't have UI-Kit and Realtime Notifications for Android and iOS. Features you can use in Android and iOS are -",source:"@site/docs/introduction/android-ios-quick-start.md",sourceDirName:"introduction",slug:"/introduction/android-ios-quick-start",permalink:"/docs/introduction/android-ios-quick-start",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/android-ios-quick-start.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Javascript Quick Start",permalink:"/docs/introduction/quick-setup-javascript"},next:{title:"Sending Notification From Engagespot Dashboard",permalink:"/docs/introduction/sending-notification-from-dashboard"}},c=[{value:"Enabling FCM Provider",id:"enabling-fcm-provider",children:[],level:2},{value:"Authenticating your App&#39;s user with Engagespot",id:"authenticating-your-apps-user-with-engagespot",children:[],level:2},{value:"Listing Notifications",id:"listing-notifications",children:[],level:2},{value:"Sending Notifications",id:"sending-notifications",children:[],level:2},{value:"Building a Notification Preference Manager",id:"building-a-notification-preference-manager",children:[],level:2},{value:"Enabling Other Notifications Channels",id:"enabling-other-notifications-channels",children:[],level:2}],d={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-and-ios-quick-start"},"Android and iOS Quick Start"),(0,o.kt)("p",null,"In this chapter, we will learn how to quickly setup Engagespot in your Android and iOS App. At the moment, we don't have UI-Kit and Realtime Notifications for Android and iOS. Features you can use in Android and iOS are -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Push Notifications using Firebase"),(0,o.kt)("li",{parentName:"ol"},"Notification Inbox using REST API"),(0,o.kt)("li",{parentName:"ol"},"Notification Preference Manager")),(0,o.kt)("h2",{id:"enabling-fcm-provider"},"Enabling FCM Provider"),(0,o.kt)("p",null,"We use Firebase Cloud Messaging (FCM) to deliver push notifications to your Android and iOS Apps. To enable FCM, login to your Engagespot dashboard. Enable FCM from Channels -> Mobile push menu. To enable FCM, you need to paste the content of your service account JSON which can be generated from your Google Firebase dashboard. Read ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/admin/setup#initialize-sdk"},"Firebase documentation")," to learn how to generate your Service Account JSON File."),(0,o.kt)("h2",{id:"authenticating-your-apps-user-with-engagespot"},"Authenticating your App's user with Engagespot"),(0,o.kt)("p",null,"As explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"Basic Concepts")," chapter, you should pass any unique identifier of your app's user to Engagespot. Since Engagespot doesn't have a native Android & iOS SDK, we'll use REST APIs to implement this."),(0,o.kt)("p",null,"For authenticating your app's user with Engagespot, you must call the ",(0,o.kt)("inlineCode",{parentName:"p"},"/sdk/connect")," endpoint of our REST API. This API call should be implemented at the authentication step of your app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/sdk/connect")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/SDK/paths/~1v3~1sdk~1connect/post"},"Read API Doc")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/SDK/paths/~1v3~1sdk~1connect/post"},"API Doc")," to know more about the required headers & parameters."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "deviceType": "android" //or iOS\n}\n')),(0,o.kt)("p",null,"This API will return ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," if your user has been authenticated with Engagespot."),(0,o.kt)("h2",{id:"listing-notifications"},"Listing Notifications"),(0,o.kt)("p",null,"To list all the notifications for the current user, you should use the ",(0,o.kt)("strong",{parentName:"p"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/notifications")," endpoint. ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/Notifications/paths/~1v3~1notifications/get"},"Read API Doc"),"."),(0,o.kt)("h2",{id:"sending-notifications"},"Sending Notifications"),(0,o.kt)("p",null,"In the next chapter, we'll learn how to send notifications to users."),(0,o.kt)("h2",{id:"building-a-notification-preference-manager"},"Building a Notification Preference Manager"),(0,o.kt)("p",null,"You can quickly build a notification preference manager in your app to help your users set their notification preferences. Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-by-examples/notification-preference-center/concepts"},"How to build a Notification Preference Manager"),"."),(0,o.kt)("h2",{id:"enabling-other-notifications-channels"},"Enabling Other Notifications Channels"),(0,o.kt)("p",null,"Now we've implemented only Mobile Push notifications. As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"Basic Concepts chapter"),", Engagespot can deliver the same notification via multiple channels like Email, Web Push, Mobile Push, SMS etc. To enable more channels, please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/channels/what-are-providers"},"Configuring Providers")," guide."))}l.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var i=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(h,r(r({ref:t},l),{},{components:n})):i.createElement(h,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);