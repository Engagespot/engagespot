"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5827],{85325:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=t(52685),a=(t(27378),t(35318));const i={sidebar_position:2},o="What are Providers?",l={unversionedId:"channels/what-are-providers",id:"channels/what-are-providers",title:"What are Providers?",description:"If you've read the previous chapter, you know what is a Channel. Now, let's understand about Providers.",source:"@site/docs/channels/what-are-providers.md",sourceDirName:"channels",slug:"/channels/what-are-providers",permalink:"/docs/channels/what-are-providers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/what-are-providers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What are Channels?",permalink:"/docs/channels/what-are-channels"},next:{title:"Mailgun",permalink:"/docs/channels/configuring-providers/email/mailgun"}},s={},p=[{value:"Default Providers",id:"default-providers",level:2},{value:"Supported Providers for Each Channel",id:"supported-providers-for-each-channel",level:2},{value:"InApp",id:"inapp",level:4},{value:"Web Push",id:"web-push",level:4},{value:"Email",id:"email",level:4},{value:"Mobile Push",id:"mobile-push",level:4},{value:"SMS",id:"sms",level:4},{value:"WhatsApp",id:"whatsapp",level:4},{value:"Slack",id:"slack",level:4},{value:"Provider Requirements",id:"provider-requirements",level:2},{value:"Provider Configurations",id:"provider-configurations",level:3},{value:"Overriding Configurations via API",id:"overriding-configurations-via-api",level:3},{value:"Profile Attribute Requirements for Providers.",id:"profile-attribute-requirements-for-providers",level:3},{value:"FAQ",id:"faq",level:2},{value:"Is it possible to have two providers in a channel?",id:"is-it-possible-to-have-two-providers-in-a-channel",level:3}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-providers"},"What are Providers?"),(0,a.kt)("p",null,"If you've read the previous chapter, you know what is a Channel. Now, let's understand about Providers.\nProviders are services that enables notification delivery through a particular channel. For example, if you want to deliver notifications through ",(0,a.kt)("strong",{parentName:"p"},"email")," channel, you must use an SMTP server, or an email service such as Sendgrid."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To make your life easier, Engagespot provides a default provider for each channel that you can use with zero configuration. If you want more capabilities, Engagespot easily allows you to switch to any other supported third party provider such as Sendgrid.")),(0,a.kt)("p",null,"And guess what, you'll get all the powerful features of Engagespot (such as smart delivery, user preferences etc) even if you switch to your favorite provider!"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Each provider is identified by a unique identifier called ",(0,a.kt)("strong",{parentName:"p"},"provider identifier"))),(0,a.kt)("h2",{id:"default-providers"},"Default Providers"),(0,a.kt)("p",null,"We've included one provider in some channels that is enabled by default and needs zero configuration. This helps you to start sending notifications to your users without any third party services."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Channel"),(0,a.kt)("th",{parentName:"tr",align:null},"Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Identifier"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inApp"),(0,a.kt)("td",{parentName:"tr",align:null},"Engagespot Inbox"),(0,a.kt)("td",{parentName:"tr",align:null},"default_inapp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webPush"),(0,a.kt)("td",{parentName:"tr",align:null},"Engagespot Web Push"),(0,a.kt)("td",{parentName:"tr",align:null},"default_webpush")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"email"),(0,a.kt)("td",{parentName:"tr",align:null},"Default Email"),(0,a.kt)("td",{parentName:"tr",align:null},"default_email")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sms"),(0,a.kt)("td",{parentName:"tr",align:null},"Default SMS"),(0,a.kt)("td",{parentName:"tr",align:null},"default_sms")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"With ",(0,a.kt)("inlineCode",{parentName:"p"},"default_sms")," provider, you get free 50 SMS credits. After that, it will start throwing error. All default providers\nare meant to be used in testing environment only. For production usage, you must use a proper provider for each channel.")),(0,a.kt)("p",null,"For advanced features, you can configure any of the supported third party provider."),(0,a.kt)("h2",{id:"supported-providers-for-each-channel"},"Supported Providers for Each Channel"),(0,a.kt)("p",null,"In addition to the default providers, following Providers supported in each channel."),(0,a.kt)("h4",{id:"inapp"},"InApp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engagespot In-App with Inbox")),(0,a.kt)("h4",{id:"web-push"},"Web Push"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engagespot Web Push")),(0,a.kt)("h4",{id:"email"},"Email"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/email/sendgrid-provider"},"Sendgrid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/email/mailgun"},"Mailgun")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/email/ses"},"AWS SES")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/email/smtp-provider"},"SMTP"))),(0,a.kt)("h4",{id:"mobile-push"},"Mobile Push"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/mobile-push/FCM-provider"},"Firebase Cloud Messaging (FCM)"))),(0,a.kt)("h4",{id:"sms"},"SMS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engagespot SMS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/sms/twilio"},"Twilio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/sms/textlocal"},"Textlocal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/sms/gupshup"},"Gupshup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/sms/plivo"},"Plivo"))),(0,a.kt)("h4",{id:"whatsapp"},"WhatsApp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/whatsapp/gupshup"},"Gupshup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/channels/configuring-providers/whatsapp/twilio"},"Twilio"))),(0,a.kt)("h4",{id:"slack"},"Slack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slack")),(0,a.kt)("h2",{id:"provider-requirements"},"Provider Requirements"),(0,a.kt)("p",null,"To setup providers, you have to do few configurations (don't panic, it takes only afew mins)."),(0,a.kt)("h3",{id:"provider-configurations"},"Provider Configurations"),(0,a.kt)("p",null,"To setup a provider (except for default providers), you must specify configurations depending on the provider. For example, if you want to setup Sendgrid provider, you must specify the Sendgrid API KEY. Configurations can be updated from your Engagespot dashboard."),(0,a.kt)("p",null,"To know more about each providers and their configurations, please see the ",(0,a.kt)("strong",{parentName:"p"},"Configuring Providers")," section."),(0,a.kt)("h3",{id:"overriding-configurations-via-api"},"Overriding Configurations via API"),(0,a.kt)("p",null,"If you want to override a configuration you've defined in Engagespot dashboard for a particular provider, you can do that via API. You can override both configurations, and the notification content."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," parameter in the send notification endpoint is where you can override the configurations. The ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," object must have a key in the name of provider identifier (For example - ",(0,a.kt)("inlineCode",{parentName:"p"},"sendgrid_email"),'). To learn more about, please read the article for the specific provider from "Configuring Providers" section.'),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    ...\n    "override":{\n        "sendgrid_email":{\n            "override":"params"\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"profile-attribute-requirements-for-providers"},"Profile Attribute Requirements for Providers."),(0,a.kt)("p",null,"For providers to send notifications, your user's ",(0,a.kt)("a",{parentName:"p",href:"../profile/what-are-user-profiles"},"profile")," must have some attributes. It differs with every provider. For example if you want to send email notifications via Sendgrid, your user's profile needs to have an ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," attribute."),(0,a.kt)("p",null,"Each providers profile requirements are specified in their respective pages under ",(0,a.kt)("strong",{parentName:"p"},"Configuring Providers")," section."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"Frequntly asked questions around Providers"),(0,a.kt)("h3",{id:"is-it-possible-to-have-two-providers-in-a-channel"},"Is it possible to have two providers in a channel?"),(0,a.kt)("p",null,"No. A channel can have only one provider. If you try to enable a new provider, the existing provider will be turned OFF."))}d.isMDXComponent=!0},35318:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=a,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);