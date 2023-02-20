"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[519],{89310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(52685),a=(n(27378),n(35318));const i={sidebar_position:4},o="SMTP Provider",l={unversionedId:"channels/configuring-providers/email/smtp-provider",id:"channels/configuring-providers/email/smtp-provider",title:"SMTP Provider",description:"SMTP Provider allows your to deliver notifications via email channel using any SMTP server of your choice.",source:"@site/docs/channels/configuring-providers/email/smtp-provider.md",sourceDirName:"channels/configuring-providers/email",slug:"/channels/configuring-providers/email/smtp-provider",permalink:"/docs/channels/configuring-providers/email/smtp-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/configuring-providers/email/smtp-provider.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Postmark",permalink:"/docs/channels/configuring-providers/email/postmark"},next:{title:"Email Attachments",permalink:"/docs/channels/configuring-providers/email/attachments"}},p={},u=[{value:"Unique Identifier",id:"unique-identifier",level:2},{value:"Enabling SMTP Provider",id:"enabling-smtp-provider",level:2},{value:"SMTP Provider Configurations.",id:"smtp-provider-configurations",level:2},{value:"Overriding Configurations",id:"overriding-configurations",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smtp-provider"},"SMTP Provider"),(0,a.kt)("p",null,"SMTP Provider allows your to deliver notifications via email channel using any SMTP server of your choice."),(0,a.kt)("h2",{id:"unique-identifier"},"Unique Identifier"),(0,a.kt)("p",null,"Each provider is identified by a unique identifier. Unique identifier of SMTP provider is ",(0,a.kt)("inlineCode",{parentName:"p"},"smtp_email")),(0,a.kt)("h2",{id:"enabling-smtp-provider"},"Enabling SMTP Provider"),(0,a.kt)("p",null,"To enable SMTP provider, login to your Engagespot dashboard, goto Channels -> Email and enable SMTP Provider."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"SMTP email provider uses ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," attribute in your user's ",(0,a.kt)("a",{parentName:"p",href:"/docs/profile/what-are-user-profiles"},"profile")," as the primary address to deliver the notifications. So make sure your user's profile has the ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," attribute set.")),(0,a.kt)("h2",{id:"smtp-provider-configurations"},"SMTP Provider Configurations."),(0,a.kt)("p",null,"SMTP Provider requires the following configurations."),(0,a.kt)("p",null,"We make use of the powerful ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer")," to send your notifications when you choose SMTP provider. That means you can use all the features of nodemailer through our API."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SMTP_HOST"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of SMTP server without any protocol prefix."),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"smtp.gmail.com")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SMTP_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"SMTP port of the server"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SMTP_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Username of your SMTP Server"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:me@gmail.com"},"me@gmail.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SMTP_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"Password of your SMTP Server"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"password123@")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SECURE"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether SMTP server needs secure authentication"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REQUIRE_TLS"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether SMTP Server requires TLS Authentication"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FROM_NAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Default from name"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Anand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FROM_EMAIL"),(0,a.kt)("td",{parentName:"tr",align:null},"Default from email"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:me@example.com"},"me@example.com"))))),(0,a.kt)("h2",{id:"overriding-configurations"},"Overriding Configurations"),(0,a.kt)("p",null,"SMTP provider allows you to override all the above configurations (and you can specify several more options) while sending a notification through Engagespot API, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.engagespot.co/v3/notifications")," endpoint."),(0,a.kt)("p",null,"To override the configurations, you must supply them via ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," parameter of the above API. As mentioned above, you can use any supported parameter for ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemailer")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," parameter!"),(0,a.kt)("p",null,"For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "notification": {\n    "title": "Anand commented on your photo",\n    "message": "Hey Steve, you\'re looking cool \ud83d\ude0e. Who took this photo?",\n    "url": "https://your-app.com/photos/17293739",\n    "category": "comment"\n  },\n  "recipients": ["steve@example.com"],\n  "override": {\n    "smtp_email": {\n      "_config": {\n        "SMTP_HOST": "smtp.gmail.com",\n        "SMTP_PORT": 25,\n        "SMTP_USERNAME": "me@gmail.com",\n        "SMTP_PASSWORD": "password23@",\n        "SECURE": true,\n        "REQUIRE_TLS": true\n      },\n      "FROM_NAME": "Anand",\n      "FROM_EMAIL": "anand@example.com",\n      "subject": "Custom email subject",\n      "text": "Email body plaintext",\n      "html": "Email body with <h1>HTML</h1> support",\n      "headers": {\n        "key": "value"\n      },\n      "attachments": {}\n    }\n  }\n}\n')))}m.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);