"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2494],{35320:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var r=n(52685),i=(n(27378),n(35318));const a={},o="Gupshup SMS",p={unversionedId:"channels/configuring-providers/sms/gupshup",id:"channels/configuring-providers/sms/gupshup",title:"Gupshup SMS",description:"Unique Identifier",source:"@site/docs/channels/configuring-providers/sms/gupshup.md",sourceDirName:"channels/configuring-providers/sms",slug:"/channels/configuring-providers/sms/gupshup",permalink:"/docs/channels/configuring-providers/sms/gupshup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/configuring-providers/sms/gupshup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FCM Mobile Push Provider",permalink:"/docs/channels/configuring-providers/mobile-push/FCM-provider"},next:{title:"Textlocal SMS",permalink:"/docs/channels/configuring-providers/sms/textlocal"}},u={},s=[{value:"Unique Identifier",id:"unique-identifier",level:2},{value:"Enabling Gupshup provider",id:"enabling-gupshup-provider",level:2},{value:"User Profile Requirement",id:"user-profile-requirement",level:2},{value:"Overriding Gupshup Configuration and notification data via API",id:"overriding-gupshup-configuration-and-notification-data-via-api",level:2}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gupshup-sms"},"Gupshup SMS"),(0,i.kt)("h2",{id:"unique-identifier"},"Unique Identifier"),(0,i.kt)("p",null,"Each provider is identified by a unique identifier. Unique identifier of Gupshup SMS provider is ",(0,i.kt)("inlineCode",{parentName:"p"},"gupshup_sms")),(0,i.kt)("h2",{id:"enabling-gupshup-provider"},"Enabling Gupshup provider"),(0,i.kt)("p",null,"To enable Gupshup provider, login to your Engagespot dashboard, goto Channels -> SMS and enable Gupshup. The following details are required from your Gupshup account."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"USER_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"USER ID of your Gupshup account."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PASSWORD"),(0,i.kt)("td",{parentName:"tr",align:null},"The password used to log on to the Enterprise SMS Gupshup dashboard."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SENDER"),(0,i.kt)("td",{parentName:"tr",align:null},"Sender id to be sent with the SMS. It has to be preconfigured 6 characters alphabetical sender id for the enterprise account."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DLT_PRINCIPAL_ENTITY_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"The Entity ID registered with the DLT platform. Every entity has to register themselves on operators DLT portal to send messages."),(0,i.kt)("td",{parentName:"tr",align:null},"Only for India")))),(0,i.kt)("h2",{id:"user-profile-requirement"},"User Profile Requirement"),(0,i.kt)("p",null,"Gupshup SMS Provider uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"phoneNumber")," property in your ",(0,i.kt)("a",{parentName:"p",href:"/docs/profile/what-are-user-profiles"},"User's profile"),". That means, you should update the ",(0,i.kt)("inlineCode",{parentName:"p"},"phoneNumber")," property in your User's profile. The ",(0,i.kt)("inlineCode",{parentName:"p"},"phoneNumber")," should have country code without any spaces or special characters. Example ",(0,i.kt)("inlineCode",{parentName:"p"},"+919988776655")," is a valid number whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"(457)-746-846")," is an invalid number."),(0,i.kt)("p",null,"To learn how to update your user's phone number in Engagespot, read our ",(0,i.kt)("a",{parentName:"p",href:"/docs/rest-api#tag/Users/paths/~1v3~1users~1%7Bidentifier%7D/put"},"REST API")," or SDK documentation of your language of choice."),(0,i.kt)("h2",{id:"overriding-gupshup-configuration-and-notification-data-via-api"},"Overriding Gupshup Configuration and notification data via API"),(0,i.kt)("p",null,"Gupshup provider allows you to override all the above configurations and data while sending a notification through Engagespot API, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.engagespot.co/v3/notifications")," endpoint."),(0,i.kt)("p",null,"To override the configurations, you must supply them via ",(0,i.kt)("inlineCode",{parentName:"p"},"override.gushup_sms")," parameter of the above API. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"override")," parameter, you can supply any object that we'll directly pass to Gupshup SMS API Body ",(0,i.kt)("a",{parentName:"p",href:"https://enterprise.smsgupshup.com/help/in/EnterpriseAPIDocument.pdf"},"See doc"),"."))}d.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,f=c["".concat(u,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);