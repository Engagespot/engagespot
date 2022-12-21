"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5827],{85325:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var t=n(52685),i=(n(27378),n(35318));const o={sidebar_position:2},a="What are Providers?",l={unversionedId:"channels/what-are-providers",id:"channels/what-are-providers",title:"What are Providers?",description:"If you've read the previous chapter, you know what is a Channel. Now, let's understand about Providers.",source:"@site/docs/channels/what-are-providers.md",sourceDirName:"channels",slug:"/channels/what-are-providers",permalink:"/docs/channels/what-are-providers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/what-are-providers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What are Channels?",permalink:"/docs/channels/what-are-channels"},next:{title:"Mailgun",permalink:"/docs/channels/configuring-providers/email/mailgun"}},d={},s=[{value:"Default Providers",id:"default-providers",level:2},{value:"Supported Providers for Each Channel",id:"supported-providers-for-each-channel",level:2},{value:"In-App Channel Providers",id:"in-app-channel-providers",level:3},{value:"Web Push Channel Providers",id:"web-push-channel-providers",level:3},{value:"Email Channel Providers",id:"email-channel-providers",level:3},{value:"Default Zero Config Email Provider",id:"default-zero-config-email-provider",level:4},{value:"AWS SES",id:"aws-ses",level:4},{value:"Sendgrid",id:"sendgrid",level:4},{value:"Mailgun",id:"mailgun",level:4},{value:"SMTP",id:"smtp",level:4},{value:"Mobile Push Channel Providers",id:"mobile-push-channel-providers",level:3},{value:"Firebase (FCM)",id:"firebase-fcm",level:4},{value:"Provider Requirements",id:"provider-requirements",level:2},{value:"Provider Configurations",id:"provider-configurations",level:3},{value:"Overriding Configurations via API",id:"overriding-configurations-via-api",level:3},{value:"Profile Attribute Requirements for Providers.",id:"profile-attribute-requirements-for-providers",level:3},{value:"FAQ",id:"faq",level:2},{value:"Is it possible to have two providers in a channel?",id:"is-it-possible-to-have-two-providers-in-a-channel",level:3},{value:"Can I edit &quot;From Name&quot; &amp; &quot;From Email&quot; for the default email provider?",id:"can-i-edit-from-name--from-email-for-the-default-email-provider",level:3},{value:"How can customize the look and feel of email notifications?",id:"how-can-customize-the-look-and-feel-of-email-notifications",level:3}],u={toc:s};function p(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-are-providers"},"What are Providers?"),(0,i.kt)("p",null,"If you've read the previous chapter, you know what is a Channel. Now, let's understand about Providers.\nProviders are services that enables notification delivery through a particular channel. For example, if you want to deliver notifications through ",(0,i.kt)("strong",{parentName:"p"},"email")," channel, you must use an SMTP server, or an email service such as Sendgrid."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To make your life easier, Engagespot provides a default provider for each channel that you can use with zero configuration. If you want more capabilities, Engagespot easily allows you to switch to any other supported third party provider such as Sendgrid.")),(0,i.kt)("p",null,"And guess what, you'll get all the powerful features of Engagespot (such as smart delivery, user preferences etc) even if you switch to your favorite provider!"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each provider is identified by a unique identifier called ",(0,i.kt)("strong",{parentName:"p"},"provider identifier"))),(0,i.kt)("h2",{id:"default-providers"},"Default Providers"),(0,i.kt)("p",null,"We've included one provider in some channels that is enabled by default and needs zero configuration. This helps you to start sending notifications to your users without any third party services."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Channel"),(0,i.kt)("th",{parentName:"tr",align:null},"Provider"),(0,i.kt)("th",{parentName:"tr",align:null},"Identifier"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"inApp"),(0,i.kt)("td",{parentName:"tr",align:null},"Engagespot Inbox"),(0,i.kt)("td",{parentName:"tr",align:null},"default_inapp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"webPush"),(0,i.kt)("td",{parentName:"tr",align:null},"Engagespot Web Push"),(0,i.kt)("td",{parentName:"tr",align:null},"default_webpush")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},"Default Email"),(0,i.kt)("td",{parentName:"tr",align:null},"default_email")))),(0,i.kt)("p",null,"For advanced features, you can configure any of the supported third party provider."),(0,i.kt)("h2",{id:"supported-providers-for-each-channel"},"Supported Providers for Each Channel"),(0,i.kt)("p",null,"In addition to the default providers, following Providers supported in each channel."),(0,i.kt)("h3",{id:"in-app-channel-providers"},"In-App Channel Providers"),(0,i.kt)("p",null,"For the In-App channel, currently we support only Engagespot default in-app notification provider with the notification inbox widget. This provider is enabled by default and there is no additional configuration required."),(0,i.kt)("h3",{id:"web-push-channel-providers"},"Web Push Channel Providers"),(0,i.kt)("p",null,"For the Web Push channel, currently we support only Engagespot default web push notification provider. This provider is enabled by default and there is no additional configuration required."),(0,i.kt)("h3",{id:"email-channel-providers"},"Email Channel Providers"),(0,i.kt)("p",null,"For Email channel, we support the following providers."),(0,i.kt)("h4",{id:"default-zero-config-email-provider"},"Default Zero Config Email Provider"),(0,i.kt)("p",null,"We make use of Sendgrid to give you a default email provider than you can simply use without any additional configuration. The only limitation is that, emails will be sent from our domain - esnotifications.com."),(0,i.kt)("h4",{id:"aws-ses"},"AWS SES"),(0,i.kt)("p",null,"Use AWS SES to send email notifications from Engagespot.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/channels/configuring-providers/email/ses"},"Read more about configuring AWS SES")),(0,i.kt)("h4",{id:"sendgrid"},"Sendgrid"),(0,i.kt)("p",null,"If you have a Sendgrid account, you can configure that as your email provider in Engagespot. You'll get all Engagespot features and the power of Sendgrid's email delivery infrastructure!\n",(0,i.kt)("a",{parentName:"p",href:"configuring-providers/email/sendgrid-provider"},"Read more about configuring Sendgrid")),(0,i.kt)("h4",{id:"mailgun"},"Mailgun"),(0,i.kt)("p",null,"Use Mailgun to send email notifications from Engagespot.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/channels/configuring-providers/email/mailgun"},"Read more about configuring Mailgun")),(0,i.kt)("h4",{id:"smtp"},"SMTP"),(0,i.kt)("p",null,"Send Email notifications via any SMTP Server of your choice.\n",(0,i.kt)("a",{parentName:"p",href:"configuring-providers/email/smtp-provider"},"Read more about configuring SMTP")),(0,i.kt)("h3",{id:"mobile-push-channel-providers"},"Mobile Push Channel Providers"),(0,i.kt)("p",null,"For sending push notifications to Android and iOS mobile apps, we support the following providers."),(0,i.kt)("h4",{id:"firebase-fcm"},"Firebase (FCM)"),(0,i.kt)("p",null,"Use your Firebase Cloud Messaging (FCM) account to deliver push notifications to your apps!\n",(0,i.kt)("a",{parentName:"p",href:"/docs/channels/configuring-providers/mobile-push/FCM-provider"},"Read more about configuring FCM")),(0,i.kt)("h2",{id:"provider-requirements"},"Provider Requirements"),(0,i.kt)("p",null,"To setup providers, you have to do few configurations (don't panic, it takes only afew mins)."),(0,i.kt)("h3",{id:"provider-configurations"},"Provider Configurations"),(0,i.kt)("p",null,"To setup a provider (except for default providers), you must specify configurations depending on the provider. For example, if you want to setup Sendgrid provider, you must specify the Sendgrid API KEY. Configurations can be updated from your Engagespot dashboard."),(0,i.kt)("p",null,"To know more about each providers and their configurations, please see the ",(0,i.kt)("strong",{parentName:"p"},"Configuring Providers")," section."),(0,i.kt)("h3",{id:"overriding-configurations-via-api"},"Overriding Configurations via API"),(0,i.kt)("p",null,"If you want to override a configuration you've defined in Engagespot dashboard for a particular provider, you can do that via API. You can override both configurations, and the notification content."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"override")," parameter in the send notification endpoint is where you can override the configurations. The ",(0,i.kt)("inlineCode",{parentName:"p"},"override")," object must have a key in the name of provider identifier (For example - ",(0,i.kt)("inlineCode",{parentName:"p"},"sendgrid_email"),'). To learn more about, please read the article for the specific provider from "Configuring Providers" section.'),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    ...\n    "override":{\n        "sendgrid_email":{\n            "override":"params"\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"profile-attribute-requirements-for-providers"},"Profile Attribute Requirements for Providers."),(0,i.kt)("p",null,"For providers to send notifications, your user's ",(0,i.kt)("a",{parentName:"p",href:"../profile/what-are-user-profiles"},"profile")," must have some attributes. It differs with every provider. For example if you want to send email notifications via Sendgrid, your user's profile needs to have an ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," attribute."),(0,i.kt)("p",null,"Each providers profile requirements are specified in their respective pages under ",(0,i.kt)("strong",{parentName:"p"},"Configuring Providers")," section."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"Frequntly asked questions around Providers"),(0,i.kt)("h3",{id:"is-it-possible-to-have-two-providers-in-a-channel"},"Is it possible to have two providers in a channel?"),(0,i.kt)("p",null,"No. A channel can have only one provider. If you try to enable a new provider, the existing provider will be turned OFF."),(0,i.kt)("h3",{id:"can-i-edit-from-name--from-email-for-the-default-email-provider"},'Can I edit "From Name" & "From Email" for the default email provider?'),(0,i.kt)("p",null,"No. Default email provider uses our own Sendgrid account. If you'd like to have your own name and email in your email notifications, you must setup your own Email Service provider."),(0,i.kt)("h3",{id:"how-can-customize-the-look-and-feel-of-email-notifications"},"How can customize the look and feel of email notifications?"),(0,i.kt)("p",null,"If you are using default email provider, you cannot customize the emails. But if you use your own provider such as Sendgrid or SMTP provider, you can use any custom HTML content, or leverage email template features of those providers."))}p.isMDXComponent=!0},35318:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(27378);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=i,v=c["".concat(d,".").concat(f)]||c[f]||p[f]||o;return n?t.createElement(v,a(a({ref:r},u),{},{components:n})):t.createElement(v,a({ref:r},u))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);