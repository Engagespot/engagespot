"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7452],{50460:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var t=n(52685),o=(n(27378),n(35318));const i={},a="Default Web Push Provider",s={unversionedId:"channels/configuring-providers/web-push/default-web-push-provider",id:"channels/configuring-providers/web-push/default-web-push-provider",title:"Default Web Push Provider",description:"Engagespot supports web push (or browser push notifications) via our own provider out of the box, to notify your users even if they are not currently on your web app!",source:"@site/docs/channels/configuring-providers/web-push/default-web-push-provider.md",sourceDirName:"channels/configuring-providers/web-push",slug:"/channels/configuring-providers/web-push/default-web-push-provider",permalink:"/docs/channels/configuring-providers/web-push/default-web-push-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/configuring-providers/web-push/default-web-push-provider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email Attachments",permalink:"/docs/channels/configuring-providers/email/attachments"},next:{title:"FCM Mobile Push Provider",permalink:"/docs/channels/configuring-providers/mobile-push/FCM-provider"}},u={},p=[{value:"Enabling Default Web Push Provider",id:"enabling-default-web-push-provider",level:2},{value:"Adding a Service Worker to Your Web App",id:"adding-a-service-worker-to-your-web-app",level:2},{value:"Turn ON Web Push Channel in Your Dashboard",id:"turn-on-web-push-channel-in-your-dashboard",level:2},{value:"Using Existing Service Worker",id:"using-existing-service-worker",level:2},{value:"Import Engagespot Service Worker in your existing Service Worker file.",id:"import-engagespot-service-worker-in-your-existing-service-worker-file",level:3},{value:"Initializing Engagespot Front-end SDK with your existing service worker registration.",id:"initializing-engagespot-front-end-sdk-with-your-existing-service-worker-registration",level:3}],l={toc:p};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"default-web-push-provider"},"Default Web Push Provider"),(0,o.kt)("p",null,"Engagespot supports web push (or browser push notifications) via our own provider out of the box, to notify your users even if they are not currently on your web app!"),(0,o.kt)("h2",{id:"enabling-default-web-push-provider"},"Enabling Default Web Push Provider"),(0,o.kt)("p",null,"To enable default web push provider, login to your Engagespot dashboard, goto Channels -> Web Push and enable Default Provider."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To enable default web push provider, you need to setup ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers"},"Service Worker")," on your web app. Don't worry if you haven't heard of it before. We've made it really simple for you.")),(0,o.kt)("h2",{id:"adding-a-service-worker-to-your-web-app"},"Adding a Service Worker to Your Web App"),(0,o.kt)("p",null,"In your web application's root public folder (In case of React.js, it's the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," folder), create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"service-worker.js"),"."),(0,o.kt)("p",null,"Copy the following line to the file, and save it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"importScripts('https://cdn.engagespot.co/serviceWorkerv2.js');\n")),(0,o.kt)("p",null,"Done! You've added service worker to your app.\nTo verify if you've properly placed this file, goto ",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourApp.com/service-worker.js")," and see if the file can be accessed."),(0,o.kt)("h2",{id:"turn-on-web-push-channel-in-your-dashboard"},"Turn ON Web Push Channel in Your Dashboard"),(0,o.kt)("p",null,"Now goto your Engagespot dashboard and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Channels")," menu. Turn ON the web push channel.\nNow you've enabled web push on your app and your user's can subscribe by opening the settings page on the notification widget."),(0,o.kt)("h2",{id:"using-existing-service-worker"},"Using Existing Service Worker"),(0,o.kt)("p",null,"If you already have a service worker registered in your application, you shouldn't try to add a new file for Engagespot. Only one service worker file is supported per domain. But you can do a slightly different configuration."),(0,o.kt)("h3",{id:"import-engagespot-service-worker-in-your-existing-service-worker-file"},"Import Engagespot Service Worker in your existing Service Worker file."),(0,o.kt)("p",null,"Open your existing service worker file and copy the following line to the top section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"importScripts('https://cdn.engagespot.co/serviceWorkerv2.js');\n\n// Rest of your service worker content goes here...\n")),(0,o.kt)("h3",{id:"initializing-engagespot-front-end-sdk-with-your-existing-service-worker-registration"},"Initializing Engagespot Front-end SDK with your existing service worker registration."),(0,o.kt)("p",null,"Since you already have a service worker file, you should have registered it in your app through the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.navigator.serviceWorker.ready")," function. You just need to pass that registration context to Engagespot so the SDK will use it instead of trying to register a new service worker."),(0,o.kt)("p",null,"Here is how you can do it in our core Javascript SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.navigator.serviceWorker.ready.then(swRegistration =>\n  const engagespotClient = new Engagespot('YOUR_API_KEY',{\n      userId:'yourUser@example.com',\n      serviceWorkerRegistration:swRegistration\n  })\n)\n")),(0,o.kt)("p",null,"Done!"))}c.isMDXComponent=!0},35318:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(27378);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return n?t.createElement(f,a(a({ref:r},l),{},{components:n})):t.createElement(f,a({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);