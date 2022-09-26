"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[252],{35318:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,h=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15970:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=t(25773),o=t(30808),a=(t(27378),t(35318)),i=["components"],c={},p="Basics of Preference Center",s={unversionedId:"learn-by-examples/notification-preference-center/concepts",id:"learn-by-examples/notification-preference-center/concepts",title:"Basics of Preference Center",description:"How to build a Notification Preference Center in your App? | Engagespot",source:"@site/docs/learn-by-examples/notification-preference-center/concepts.md",sourceDirName:"learn-by-examples/notification-preference-center",slug:"/learn-by-examples/notification-preference-center/concepts",permalink:"/docs/learn-by-examples/notification-preference-center/concepts",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learn-by-examples/notification-preference-center/concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build a Notification Center for your Next.js Blog",permalink:"/docs/learn-by-examples/nextjs-supabase/part1"},next:{title:"Getting and Updating Preferences",permalink:"/docs/learn-by-examples/notification-preference-center/getting-and-updating-preferences"}},l=[{value:"Concepts",id:"concepts",children:[{value:"Category",id:"category",children:[],level:3},{value:"Channel",id:"channel",children:[],level:3}],level:2},{value:"What is Preference?",id:"what-is-preference",children:[],level:2}],u={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics-of-preference-center"},"Basics of Preference Center"),(0,a.kt)("head",null,(0,a.kt)("title",null,"How to build a Notification Preference Center in your App? | Engagespot"),(0,a.kt)("meta",{name:"description",content:"Learn how to build a notification preference center in your app in less than 30 minutes using Engagespot"})),(0,a.kt)("p",null,"A Notification Preference Center is an important feature for any app that sends out notifications to their users. It gives power to your users to choose how and when they want to be notified. Not having such a fine-graned preference module might force your users to turn off all notifications from your product."),(0,a.kt)("p",null,"With Engagespot, building a Notification Preference Manager (like the one below) in your product is a piece of cake! Let's learn how to build that in less than 30 mins."),(0,a.kt)("img",{src:"https://954874.smushcdn.com/2618921/wp-content/uploads/2022/02/Group-866.png?lossy=1&strip=1&webp=1",width:"400px"}),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"Before we dive in, make sure you're familiar with the core concepts of Engagespot."),(0,a.kt)("h3",{id:"category"},"Category"),(0,a.kt)("p",null,"Category is used to tag notifications in a group. For example, in your app you might send notifications to your users when someone comments on their photo, or in-the case of an e-commerce platform, when someone places a new order."),(0,a.kt)("p",null,"Read more in ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/what-are-categories"},"Categories")," chapter."),(0,a.kt)("h3",{id:"channel"},"Channel"),(0,a.kt)("p",null,"Channel is the medium through which a notification is delivered. Channels can be In-App, Web Push, Mobile Push, Email or SMS.\nRead more in ",(0,a.kt)("a",{parentName:"p",href:"/docs/channels/what-are-channels"},"Channels")," chapter."),(0,a.kt)("h2",{id:"what-is-preference"},"What is Preference?"),(0,a.kt)("p",null,"A preference is a rule set by your user that defines through which channels they want to be notified for a notification from a particular category. For example, a user can set preference to receive ",(0,a.kt)("inlineCode",{parentName:"p"},"New Comment")," notifications only through In-App push channel. Another example is - Receive ",(0,a.kt)("inlineCode",{parentName:"p"},"security")," notifications via Email and SMS."),(0,a.kt)("p",null,"Here ",(0,a.kt)("inlineCode",{parentName:"p"},"New Comment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"security")," are notification ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/what-are-categories"},"categories"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"In-App"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SMS")," are channels. Now let's learn how to set preference for a user through REST API and Javascript Core SDK."))}f.isMDXComponent=!0}}]);