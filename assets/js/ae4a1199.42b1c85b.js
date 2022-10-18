"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2584],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,b=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return n?o.createElement(b,r(r({ref:t},u),{},{components:n})):o.createElement(b,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57150:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var o=n(25773),i=n(30808),a=(n(27378),n(35318)),r=["components"],p={},l="Using Engagespot on Bubble.io App",s={unversionedId:"bubble-io-plugin/using-engagespot-in-bubble-app",id:"bubble-io-plugin/using-engagespot-in-bubble-app",title:"Using Engagespot on Bubble.io App",description:"If your app is built using Bubble.io, you can use the Engagespot plugin to add notifications to your Bubble app in minutes.",source:"@site/docs/bubble-io-plugin/using-engagespot-in-bubble-app.md",sourceDirName:"bubble-io-plugin",slug:"/bubble-io-plugin/using-engagespot-in-bubble-app",permalink:"/docs/bubble-io-plugin/using-engagespot-in-bubble-app",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bubble-io-plugin/using-engagespot-in-bubble-app.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What are Categories?",permalink:"/docs/category/what-are-categories"},next:{title:"What are Preferences?",permalink:"/docs/preference/what-are-preferences"}},u=[{value:"Installing Engagespot Plugin in your Bubble App",id:"installing-engagespot-plugin-in-your-bubble-app",children:[],level:2},{value:"Adding the Notification Inbox Component",id:"adding-the-notification-inbox-component",children:[],level:2},{value:"Sending Notifications Through Workflows",id:"sending-notifications-through-workflows",children:[],level:2}],c={toc:u};function g(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-engagespot-on-bubbleio-app"},"Using Engagespot on Bubble.io App"),(0,a.kt)("p",null,"If your app is built using ",(0,a.kt)("a",{href:"https://bubble.io",rel:"nofollow",target:"_blank"},"Bubble.io"),", you can use the ",(0,a.kt)("a",{href:"https://bubble.io/plugin/engagespot-notifications-1646149514133x734161642066018300",target:"_blank",rel:"nofollow"},"Engagespot plugin")," to add notifications to your Bubble app in minutes."),(0,a.kt)("h2",{id:"installing-engagespot-plugin-in-your-bubble-app"},"Installing Engagespot Plugin in your Bubble App"),(0,a.kt)("p",null,"On your Bubble app dashboard, on the left sidebar, click ",(0,a.kt)("strong",{parentName:"p"},"Plugins"),", and then click on the ",(0,a.kt)("strong",{parentName:"p"},"Add Plugins")," button on the top right corner."),(0,a.kt)("p",null,"Search Engagespot, and click on the ",(0,a.kt)("strong",{parentName:"p"},"Install")," button.\n",(0,a.kt)("img",{alt:"Install Engagespot Plugin",src:n(58919).Z,width:"2062",height:"472"})),(0,a.kt)("p",null,'After installing, click the "Done" button, and open the plugin configuration screen. Add your Engagespot API KEY and API SECRET which you\'ll find in your Engagespot account ',(0,a.kt)("a",{parentName:"p",href:"https://portal.engagespot.co"},"dashboard")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configure Engagespot Bubble Plugin",src:n(56255).Z,width:"2692",height:"1408"})),(0,a.kt)("p",null,"Now you're successfully installed Engagespot plugin to your Bubble App. Now let's add the notification Inbox component."),(0,a.kt)("h2",{id:"adding-the-notification-inbox-component"},"Adding the Notification Inbox Component"),(0,a.kt)("p",null,"Goto the ",(0,a.kt)("strong",{parentName:"p"},"Design")," section of your Bubble app dashboard, and look for an element called ",(0,a.kt)("strong",{parentName:"p"},"Engagespot Notification"),". Just drag and drop it to your app where you want the bell icon to appear."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding Notification Bell Component to Bubble App",src:n(97890).Z,width:"489",height:"549"})),(0,a.kt)("p",null,"After dragging it to your app, you can double click on the newly added element and customize the notification component.\n",(0,a.kt)("img",{alt:"Customizing Engagespot Bubble Notification Component",src:n(73539).Z,width:"822",height:"1318"})),(0,a.kt)("p",null,"After this step, if you preview your Bubble app, you can see the notification bell icon, and the inbox properly working."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Preview Engagespot in Bubble",src:n(47547).Z,width:"2286",height:"1444"})),(0,a.kt)("h2",{id:"sending-notifications-through-workflows"},"Sending Notifications Through Workflows"),(0,a.kt)("p",null,"Now let's learn how to send a notification using Bubble workflows. In the sample Bubble project, which is a task management app, we'll add a notification workflow whenever a user clicks on the ",(0,a.kt)("strong",{parentName:"p"},"up vote")," button. Our goal is to notify the owner of the project that their project has been upvoted by another user. Let's see how to do this quickly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Preview Engagespot in Bubble",src:n(16309).Z,width:"1702",height:"656"})),(0,a.kt)("p",null,"For this, let's open the Bubble Workflow tab and add a ",(0,a.kt)("strong",{parentName:"p"},"On Click")," event on the Upvote icon. And then click on add action link and choose ",(0,a.kt)("strong",{parentName:"p"},"Engagespot Send Notification")," action."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding Engagespot Action",src:n(43160).Z,width:"1700",height:"1154"})),(0,a.kt)("p",null,"In the action configuration popup that appears, we'll define the notification content, and the user to which this notification should be sent."),(0,a.kt)("p",null,"We'll set the ",(0,a.kt)("inlineCode",{parentName:"p"},"notification_title")," to a custom message with dynamic variables such as the project's title, current user's name etc. We want the notification to appear as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"{User} upvoted your project - {Project Name}"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"recipient")," as the creator of the project, and for the ",(0,a.kt)("inlineCode",{parentName:"p"},"notification_icon")," we'll use the current user's icon url."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please note that for ",(0,a.kt)("inlineCode",{parentName:"p"},"notification_icon")," parameter, you must always pass the image URL. Not the image object."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configuring Send Notification Action",src:n(63461).Z,width:"1692",height:"1110"})),(0,a.kt)("p",null,"Done. Now let's preview our app and click on the upvote button of \"Sample Project\", which is created by user 'Appu'."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upvote clicked",src:n(18062).Z,width:"1552",height:"174"})),(0,a.kt)("p",null,"Let's login as user 'Appu' and see if the notification has arrived."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Notification",src:n(59573).Z,width:"1890",height:"158"})),(0,a.kt)("p",null,"A new notification has been arrived. Let's click and read it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Read notification",src:n(36699).Z,width:"1992",height:"496"})),(0,a.kt)("p",null,"Hurray! You've successfully added a notification engine and a beautiful notification inbox to your Bubble app in a few minutes. You can simply add more channels to deliver the same notifications via email, mobile push, web push etc by enabling them from your Engagespot dashboard."))}g.isMDXComponent=!0},56255:function(e,t,n){t.Z=n.p+"assets/images/configure_engagespot_bubble_plugin-d5ee2c0e28ec7a156516c3b11679e511.png"},63461:function(e,t,n){t.Z=n.p+"assets/images/configuring_engagespot_notification_action-e415564f583fd0f724357c0d7920b050.png"},73539:function(e,t,n){t.Z=n.p+"assets/images/customize_engagespot_bubble-fc96cb540042d158a3573768333eef30.png"},97890:function(e,t,n){t.Z=n.p+"assets/images/engagespot_bubble_element-db656d676ee21fc49ab4054d98fd5fad.png"},58919:function(e,t,n){t.Z=n.p+"assets/images/install_engagespot_plugin-072730995aa6c95796151d9fa022ed38.png"},59573:function(e,t,n){t.Z=n.p+"assets/images/new_notification-2af291cef0bd2855fec8a1fdcb6fc755.png"},36699:function(e,t,n){t.Z=n.p+"assets/images/open_notification_inbox-678539899acf23ad97ccef1939c2ef93.png"},47547:function(e,t,n){t.Z=n.p+"assets/images/preview_app-aaab7a75c8b1998f49f6a5dd59a11c92.png"},43160:function(e,t,n){t.Z=n.p+"assets/images/send_notification_action-e120120d3d762e8526f6e001b80e9723.png"},16309:function(e,t,n){t.Z=n.p+"assets/images/upvote_bubble_app-db965f55eead0d8c90df6ae8fd8748d2.png"},18062:function(e,t,n){t.Z=n.p+"assets/images/upvote_clicked-670d11bd82ad6f202213424789bd6785.png"}}]);