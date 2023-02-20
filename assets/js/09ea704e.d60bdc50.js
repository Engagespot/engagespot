"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6692],{23319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(52685),i=(n(27378),n(35318));const o={sidebar_position:3},a="Javascript quick start",s={unversionedId:"introduction/quick-setup-javascript",id:"introduction/quick-setup-javascript",title:"Javascript quick start",description:"In this chapter, we will learn how to quickly setup Engagespot in your Javascript App. Before reading this chapter, make sure you've familiarised with the basic concepts of Engagespot.",source:"@site/docs/introduction/quick-setup-javascript.md",sourceDirName:"introduction",slug:"/introduction/quick-setup-javascript",permalink:"/docs/introduction/quick-setup-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/quick-setup-javascript.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basic concepts",permalink:"/docs/introduction/understanding-concepts"},next:{title:"Android and iOS quick start",permalink:"/docs/introduction/android-ios-quick-start"}},p={},c=[{value:"Instructions for ReactJS",id:"instructions-for-reactjs",level:2},{value:"Instructions for Angular",id:"instructions-for-angular",level:2},{value:"Other Javascript Apps",id:"other-javascript-apps",level:2},{value:"Sending Notifications",id:"sending-notifications",level:2},{value:"Enabling Other Notifications Channels",id:"enabling-other-notifications-channels",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"javascript-quick-start"},"Javascript quick start"),(0,i.kt)("p",null,"In this chapter, we will learn how to quickly setup Engagespot in your Javascript App. Before reading this chapter, make sure you've familiarised with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"basic concepts")," of Engagespot."),(0,i.kt)("h2",{id:"instructions-for-reactjs"},"Instructions for ReactJS"),(0,i.kt)("p",null,"To make it easier to setup Engagespot Notification UI-Kit in ReactJS app, we have a built-in UI-Kit component library."),(0,i.kt)("p",null,"First, install the package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @engagespot/react-component\n")),(0,i.kt)("p",null,"Then in your React.js app, add the Engagespot component wherever you want the notification bell icon to appear. (Usually in the nav bar, but it's your choice!)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Engagespot } from \'@engagespot/react-component\';\n\n<Engagespot apiKey="ENGAGESPOT_API_KEY" userId="unique-identifier-of-your-user" />;\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to replace ENGAGESPOT_API_KEY with your API Key given in your dashboard. Do not confuse API_KEY with API_SECRET. They have different permission levels. You should never expose your API_SECRET in front-end apps."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"userId")," should be any value to uniquely identify your app's users. For example, their email id, username, UUID or the primary key from your ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," table.")),(0,i.kt)("p",null,"This will render a beautiful notification inbox like this in your app."),(0,i.kt)("img",{src:"https://i.postimg.cc/BbPF7Cpk/notifications.png",style:{width:"400px"}}),(0,i.kt)("p",null,"Our ReactJS component comes with a lot of powerful configurations and customizations that you can change. Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-by-examples/react-component/simple-notification"},"react component examples")," to learn more."),(0,i.kt)("h2",{id:"instructions-for-angular"},"Instructions for Angular"),(0,i.kt)("p",null,"You can install the package from npm or from the CDN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @engagespot/client\n")),(0,i.kt)("p",null,"Then import the ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," function and use that to render the notification center."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';\nimport { render } from '@engagespot/client';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n})\n\nexport class AppComponent implements AfterViewInit {\n  @ViewChild('engagespotBellIcon') engagespotBellIcon: ElementRef;\n\n  ngAfterViewInit() {\n    render(this.engagespotBellIcon.nativeElement, {\n      apiKey: \"ENGAGESPOT_API_KEY\",\n      userId: \"YOUR_USERS_UNIQUE_ID\",\n    });\n  }\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The above Angular code would not work in online IDEs such as Codesandbox or Stackblitz due to some configuration issues. But it will work fine when you run Angular app directly.")),(0,i.kt)("h2",{id:"other-javascript-apps"},"Other Javascript Apps"),(0,i.kt)("p",null,"You can use our CDN hosted Javascript library to install Engagespot to any Javascript based web apps (irrespective of the framework)."),(0,i.kt)("p",null,"Just paste the following script just before the closing ",(0,i.kt)("inlineCode",{parentName:"p"},"</body>")," tag of your web app."),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"HTML_ELEMENT_ID")," with the ID of the element where you want the notification bell icon to appear."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script type=\"text/javascript\" src=\"https://cdn.engagespot.co/engagespot-client.min.js\"><\/script>\n<script>\nEngagespot.render('#HTML_Element_ID', {\n   apiKey: 'ENGAGESPOT_API_KEY',\n   userId: 'unique-identifier-of-your-user',\n})\n<\/script>\n\n")),(0,i.kt)("h2",{id:"sending-notifications"},"Sending Notifications"),(0,i.kt)("p",null,"In the next chapter, we'll learn how to send notifications to users."),(0,i.kt)("h2",{id:"enabling-other-notifications-channels"},"Enabling Other Notifications Channels"),(0,i.kt)("p",null,"Now we've implemented only In-App notifications. As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"Basic Concepts chapter"),", Engagespot can deliver the same notification via multiple channels like Email, Web Push, Mobile Push, SMS etc. To enable more channels, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/channels/what-are-providers"},"Configuring Providers")," guide."))}u.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);