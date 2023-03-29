"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7116],{70426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var i=n(52685),a=(n(27378),n(35318));const o={sidebar_position:3},r="Using Javascript Core",s={unversionedId:"javascript-guide/using-javascript-core-api",id:"javascript-guide/using-javascript-core-api",title:"Using Javascript Core",description:"Javascript Core package wraps the REST API calls into easy to use functions for any Javascript app. With this package, you can build Notification Inbox, Subscribe users to web push, build preference manager etc.",source:"@site/docs/javascript-guide/using-javascript-core-api.md",sourceDirName:"javascript-guide",slug:"/javascript-guide/using-javascript-core-api",permalink:"/docs/javascript-guide/using-javascript-core-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript-guide/using-javascript-core-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using Javascript UI Kit",permalink:"/docs/javascript-guide/using-javascript-ui-kit"},next:{title:"Node",permalink:"/docs/backend-sdks/node"}},l={},c=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Initializing the SDK",id:"initializing-the-sdk",level:3},{value:"Fetching notifications",id:"fetching-notifications",level:3},{value:"Engagespot Class",id:"engagespot-class",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Web Push Notification",id:"web-push-notification",level:3},{value:"httpsWebPushSubscribe()",id:"httpswebpushsubscribe",level:4},{value:"Preference Manager",id:"preference-manager",level:3},{value:"Event Listeners",id:"event-listeners",level:3},{value:"onNotificationReceive",id:"onnotificationreceive",level:4},{value:"onNotificationClick",id:"onnotificationclick",level:4},{value:"onNotificationRead",id:"onnotificationread",level:4},{value:"onNotificationDelete",id:"onnotificationdelete",level:4},{value:"onNotificationSee",id:"onnotificationsee",level:4},{value:"NotificationList Class",id:"notificationlist-class",level:2},{value:"Properties",id:"properties",level:3},{value:"unreadCount",id:"unreadcount",level:4},{value:"totalCount",id:"totalcount",level:4},{value:"Methods",id:"methods",level:3},{value:"fetch",id:"fetch",level:4},{value:"NotificationItem Interface",id:"notificationitem-interface",level:2},{value:"Properties",id:"properties-1",level:3},{value:"id",id:"id",level:4},{value:"title",id:"title",level:4},{value:"message",id:"message",level:4},{value:"icon",id:"icon",level:4},{value:"seenAt",id:"seenat",level:4},{value:"clickedAt",id:"clickedat",level:4},{value:"createdAt",id:"createdat",level:4},{value:"data",id:"data",level:4},{value:"Methods",id:"methods-1",level:3},{value:"fetch()",id:"fetch-1",level:4},{value:"markAsClicked()",id:"markasclicked",level:4},{value:"markAsRead()",id:"markasread",level:4},{value:"markAsUnSeen()",id:"markasunseen",level:4},{value:"markAsUnRead()",id:"markasunread",level:4},{value:"delete()",id:"delete",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-javascript-core"},"Using Javascript Core"),(0,a.kt)("p",null,"Javascript Core ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@engagespot/core"},"package")," wraps the REST API calls into easy to use functions for any Javascript app. With this package, you can build Notification Inbox, Subscribe users to web push, build preference manager etc."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Javascript core library doesn't provide any UI components. If you're looking for UI-Kit for Javascript, you should use our React component or Browser Javascript UI Kit.")),(0,a.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,a.kt)("p",null,"Before we start, make sure you have Engagespot API Key from your dashboard.\nNow, let's install the core package, and initialize."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @engagespot/core --save\n\n#or\n\nyarn add @engagespot/core\n")),(0,a.kt)("h3",{id:"initializing-the-sdk"},"Initializing the SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Engagespot from '@engagespot/core';\n\nconst engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {\n  userId: 'youruser@example.com',\n});\n")),(0,a.kt)("h3",{id:"fetching-notifications"},"Fetching notifications"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const notificationList = engagespot.getNotificationList();\nawait notificationList.fetch();\nnotificationList.data.forEach(notification => {\n  console.log(notification.title, notification.message);\n});\n")),(0,a.kt)("p",null,"To fetch notification list, you should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getNotificationList()")," method, which returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationList")," object. Note that, the ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationList")," object will be empty, and you need to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method to pull the latest notification data from server."),(0,a.kt)("p",null,"We've seen this in the example above. After calling ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," which returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise<this>"),", you can access the notifications from ",(0,a.kt)("inlineCode",{parentName:"p"},"data[]")),(0,a.kt)("p",null,"Let's learn more about ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationList")," class below."),(0,a.kt)("h2",{id:"engagespot-class"},"Engagespot Class"),(0,a.kt)("p",null,"This class is used to create a new Engagespot instance."),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"The constructor accepts the following arguments."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiKey"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Engagespot API Key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Options")," Object. (Properties explained below)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options.userId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Any unique identifier to identify your app user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options.userSignature"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if your app has ",(0,a.kt)("a",{parentName:"td",href:"/docs/user/enabling-HMAC-authentication"},"HMAC Authentication")," turned on.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options.serviceWorkerRegistration"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration"},"ServiceWorkerRegistration")),(0,a.kt)("td",{parentName:"tr",align:null},"Use this if your app has an existing Service Worker Registration")))),(0,a.kt)("h3",{id:"web-push-notification"},"Web Push Notification"),(0,a.kt)("p",null,"Core Javascript API also includes methods to enable web push notifications via the ",(0,a.kt)("inlineCode",{parentName:"p"},"default_webpush")," provider. If you have enabled ",(0,a.kt)("inlineCode",{parentName:"p"},"default_webpush")," provider in your Engagespot, you can make use of the following methods to work with the web push functionality."),(0,a.kt)("p",null,"The following methods are available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Engagespot")," class."),(0,a.kt)("h4",{id:"httpswebpushsubscribe"},"httpsWebPushSubscribe()"),(0,a.kt)("p",null,"This function triggers the web push subscription prompt and attaches the subscription with Engagespot. After this, the user can receive web push notifications."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have enabled web push for your app in Engagespot dashboard, and the ",(0,a.kt)("a",{target:"blank",href:"/docs/channels/configuring-providers/web-push/default-web-push-provider"},"service worker setup")," is completed. Otherwise, this error will be shown - ES1005 - A service worker must be registered before push can be subscribed")),(0,a.kt)("h3",{id:"preference-manager"},"Preference Manager"),(0,a.kt)("p",null,"Using Core Javascript API, you can build a custom notification preference manager for your users. To learn more about how to build a notification preference manager, ",(0,a.kt)("a",{href:"/docs/preference/what-are-preferences",target:"_blank"},"read this guide"),"."),(0,a.kt)("h3",{id:"event-listeners"},"Event Listeners"),(0,a.kt)("p",null,"Engagespot Core emits several events which you can susbcribe to do custom actions."),(0,a.kt)("h4",{id:"onnotificationreceive"},"onNotificationReceive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Engagespot from '@engagespot/core';\n\nconst engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {\n  userId: 'youruser@example.com',\n});\n\nengagespot.onNotificationReceive(notification => {\n  //You'll get the notification object.\n});\n")),(0,a.kt)("h4",{id:"onnotificationclick"},"onNotificationClick"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"onNotificationClick() is deprecated. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"onNotificationRead")," instead.")),(0,a.kt)("h4",{id:"onnotificationread"},"onNotificationRead"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Engagespot from '@engagespot/core';\n\nconst engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {\n  userId: 'youruser@example.com',\n});\n\nengagespot.onNotificationRead(notification => {\n  //You'll get the notification object.\n});\n")),(0,a.kt)("h4",{id:"onnotificationdelete"},"onNotificationDelete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Engagespot from '@engagespot/core';\n\nconst engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {\n  userId: 'youruser@example.com',\n});\n\nengagespot.onNotificationDelete(notification => {\n  //You'll get the notification object.\n});\n")),(0,a.kt)("h4",{id:"onnotificationsee"},"onNotificationSee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Engagespot from '@engagespot/core';\n\nconst engagespot = new Engagespot('YOUR_ENGAGESPOT_API_KEY', {\n  userId: 'youruser@example.com',\n});\n\nengagespot.onNotificationSee(notification => {\n  //You'll get the notification object.\n});\n")),(0,a.kt)("h2",{id:"notificationlist-class"},"NotificationList Class"),(0,a.kt)("p",null,"Notification list is a collection of Notifications. It implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationItem")," interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export interface NotificationList {\n  unreadCount: number;\n  totalCount: number;\n\n  data: NotificationItem[];\n\n  fetch: (page: number, itemsPerPage: number) => Promise<this>;\n  markAllAsSeen: () => Promise<this>;\n}\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationList")," interface has the following properties."),(0,a.kt)("h4",{id:"unreadcount"},"unreadCount"),(0,a.kt)("p",null,"Number of unseen notifications in the list."),(0,a.kt)("h4",{id:"totalcount"},"totalCount"),(0,a.kt)("p",null,"Total number of notifications in the list"),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"fetch"},"fetch"),(0,a.kt)("p",null,"Fetches the notifications from the server and add them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"data[]")," property."),(0,a.kt)("h2",{id:"notificationitem-interface"},"NotificationItem Interface"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NotificationItem")," interface represents a single notification entity. It has several properties and methods to do actions on that particular notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"interface NotificationItem {\n  id: string;\n  title: string;\n  message?: string | null;\n  icon?: string | null;\n  url?: string | null;\n  seenAt?: string | null;\n  clickedAt?: string | null;\n  createdAt?: string | null;\n  data?: T | null;\n\n  fetch?:  () => Promise<this> // This will mark the notification as seen.\n  markAsClicked?:  () => Promise<this> //@deprecated. Use markAsRead() instead.\n  markAsRead?:  () => Promise<this>\n  markAsUnSeen?: () => Promise<this>\n  markAsUnRead? () => Promise<this>\n  delete? () => Promise<this>\n}\n")),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationItem")," interface has the following properties."),(0,a.kt)("h4",{id:"id"},"id"),(0,a.kt)("p",null,"Id of the notification"),(0,a.kt)("h4",{id:"title"},"title"),(0,a.kt)("p",null,"Title of the notification"),(0,a.kt)("h4",{id:"message"},"message"),(0,a.kt)("p",null,"Body of notification. This can be null."),(0,a.kt)("h4",{id:"icon"},"icon"),(0,a.kt)("p",null,"URL of the notification icon. This can be null."),(0,a.kt)("h4",{id:"seenat"},"seenAt"),(0,a.kt)("p",null,"Timestamp of seen event of this notification. This can be null."),(0,a.kt)("h4",{id:"clickedat"},"clickedAt"),(0,a.kt)("p",null,"Timestamp of click event of this notification. This can be null."),(0,a.kt)("h4",{id:"createdat"},"createdAt"),(0,a.kt)("p",null,"Timestamp of created event of this notification."),(0,a.kt)("h4",{id:"data"},"data"),(0,a.kt)("p",null,"The data object passed to the send notifications API."),(0,a.kt)("h3",{id:"methods-1"},"Methods"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationItem")," interface has the following methods."),(0,a.kt)("h4",{id:"fetch-1"},"fetch()"),(0,a.kt)("p",null,"Calls ",(0,a.kt)("strong",{parentName:"p"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/notifications/:notificationId")," API and sets the properties of this class."),(0,a.kt)("h4",{id:"markasclicked"},"markAsClicked()"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"markAsClicked() method is deprecated. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"markAsRead()")," instead")),(0,a.kt)("h4",{id:"markasread"},"markAsRead()"),(0,a.kt)("p",null,"Calls ",(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/notifications/:notificationId/click")," API and marks this notification as read."),(0,a.kt)("h4",{id:"markasunseen"},"markAsUnSeen()"),(0,a.kt)("p",null,"Calls ",(0,a.kt)("strong",{parentName:"p"},"DELETE")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/notifications/:notificationId/views")," API and marks this notification as unseen."),(0,a.kt)("h4",{id:"markasunread"},"markAsUnRead()"),(0,a.kt)("p",null,"Calls ",(0,a.kt)("strong",{parentName:"p"},"DELETE")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/notifications/:notificationId/reads")," API and marks this notification as unread."),(0,a.kt)("h4",{id:"delete"},"delete()"),(0,a.kt)("p",null,"Calls ",(0,a.kt)("strong",{parentName:"p"},"DELETE")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/notifications/:notificationId")," API and deletes this notification."))}u.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);