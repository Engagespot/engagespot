"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6751],{699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var i=n(52685),o=(n(27378),n(35318));const r={sidebar_position:4},a="Android and iOS quick start",s={unversionedId:"introduction/android-ios-quick-start",id:"introduction/android-ios-quick-start",title:"Android and iOS quick start",description:"In this chapter, we will learn how to quickly setup Engagespot in your Android and iOS App. At the moment, we don't have UI-Kit and Realtime Notifications for Android and iOS. Features you can use in Android and iOS are -",source:"@site/docs/introduction/android-ios-quick-start.md",sourceDirName:"introduction",slug:"/introduction/android-ios-quick-start",permalink:"/docs/introduction/android-ios-quick-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/android-ios-quick-start.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Javascript quick start",permalink:"/docs/introduction/quick-setup-javascript"},next:{title:"Sending your first notification",permalink:"/docs/introduction/sending-notification-from-dashboard"}},c={},u=[{value:"Enabling FCM Provider",id:"enabling-fcm-provider",level:2},{value:"Authenticating your App&#39;s user with Engagespot",id:"authenticating-your-apps-user-with-engagespot",level:2},{value:"Listing Notifications",id:"listing-notifications",level:2},{value:"Sending Notifications",id:"sending-notifications",level:2},{value:"Building a Notification Preference Manager",id:"building-a-notification-preference-manager",level:2},{value:"Enabling Other Notifications Channels",id:"enabling-other-notifications-channels",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-and-ios-quick-start"},"Android and iOS quick start"),(0,o.kt)("p",null,"In this chapter, we will learn how to quickly setup Engagespot in your Android and iOS App. At the moment, we don't have UI-Kit and Realtime Notifications for Android and iOS. Features you can use in Android and iOS are -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Push Notifications using Firebase"),(0,o.kt)("li",{parentName:"ol"},"Notification Inbox using REST API"),(0,o.kt)("li",{parentName:"ol"},"Notification Preference Manager")),(0,o.kt)("h2",{id:"enabling-fcm-provider"},"Enabling FCM Provider"),(0,o.kt)("p",null,"We use Firebase Cloud Messaging (FCM) to deliver push notifications to your Android and iOS Apps. To enable FCM, login to your Engagespot dashboard. Enable FCM from Channels -> Mobile push menu. To enable FCM, you need to paste the content of your service account JSON which can be generated from your Google Firebase dashboard. Read ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/admin/setup#initialize-sdk"},"Firebase documentation")," to learn how to generate your Service Account JSON File."),(0,o.kt)("h2",{id:"authenticating-your-apps-user-with-engagespot"},"Authenticating your App's user with Engagespot"),(0,o.kt)("p",null,"As explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"Basic Concepts")," chapter, you should pass any unique identifier of your app's user to Engagespot. Since Engagespot doesn't have a native Android & iOS SDK, we'll use REST APIs to implement this."),(0,o.kt)("p",null,"For authenticating your app's user with Engagespot, you must call the ",(0,o.kt)("inlineCode",{parentName:"p"},"/sdk/connect")," endpoint of our REST API. This API call should be implemented at the authentication step of your app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/sdk/connect")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/SDK/paths/~1v3~1sdk~1connect/post"},"Read API Doc")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/SDK/paths/~1v3~1sdk~1connect/post"},"API Doc")," to know more about the required headers & parameters.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "deviceType": "android" //or iOS\n}\n')),(0,o.kt)("p",null,"This API will return ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")," if your user has been authenticated with Engagespot."),(0,o.kt)("h2",{id:"listing-notifications"},"Listing Notifications"),(0,o.kt)("p",null,"To list all the notifications for the current user, you should use the ",(0,o.kt)("strong",{parentName:"p"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/notifications")," endpoint. ",(0,o.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/Notifications/paths/~1v3~1notifications/get"},"Read API Doc"),"."),(0,o.kt)("h2",{id:"sending-notifications"},"Sending Notifications"),(0,o.kt)("p",null,"In the next chapter, we'll learn how to send notifications to users."),(0,o.kt)("h2",{id:"building-a-notification-preference-manager"},"Building a Notification Preference Manager"),(0,o.kt)("p",null,"You can quickly build a notification preference manager in your app to help your users set their notification preferences. Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-by-examples/notification-preference-center/concepts"},"How to build a Notification Preference Manager"),"."),(0,o.kt)("h2",{id:"enabling-other-notifications-channels"},"Enabling Other Notifications Channels"),(0,o.kt)("p",null,"Now we've implemented only Mobile Push notifications. As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"Basic Concepts chapter"),", Engagespot can deliver the same notification via multiple channels like Email, Web Push, Mobile Push, SMS etc. To enable more channels, please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/channels/what-are-providers"},"Configuring Providers")," guide."))}d.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var i=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return n?i.createElement(h,a(a({ref:t},l),{},{components:n})):i.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);