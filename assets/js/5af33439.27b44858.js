"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4601],{43752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(52685),o=(n(27378),n(35318));const a={sidebar_position:1},i="Using Vue.js Package",c={unversionedId:"javascript-guide/using-vuejs-package",id:"javascript-guide/using-vuejs-package",title:"Using Vue.js Package",description:"To add engagespot notification center UI component to your Vue.js application, you should use our esm module.",source:"@site/docs/javascript-guide/using-vuejs-package.md",sourceDirName:"javascript-guide",slug:"/javascript-guide/using-vuejs-package",permalink:"/docs/javascript-guide/using-vuejs-package",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript-guide/using-vuejs-package.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using React Component",permalink:"/docs/javascript-guide/using-react-component"},next:{title:"Using Javascript UI Kit",permalink:"/docs/javascript-guide/using-javascript-ui-kit"}},u={},s=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Customizing Theme",id:"customizing-theme",level:2}],p={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-vuejs-package"},"Using Vue.js Package"),(0,o.kt)("p",null,"To add engagespot notification center UI component to your Vue.js application, you should use our esm module."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.postimg.cc/BbPF7Cpk/notifications.png",alt:"Notification Inbox Preview"})),(0,o.kt)("p",null,"Something like this."),(0,o.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,o.kt)("p",null,"You can install the package from npm or from the CDN."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @engagespot/client\n\nOR\n\nyarn add @engagespot/client\n")),(0,o.kt)("p",null,"Then import the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function and use that to render the notification center."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'<template>\n  <div ref="bellIcon">Notifications</div>\n</template>\n\n<script type="module">\nimport { render } from "@engagespot/client";\n\nexport default {\n  name: "Notifications",\n  mounted: function () {\n    const options = {\n      apiKey: "ENGAGESPOT_API_KEY",\n      userId: "YOUR_USERS_ID",\n    };\n    render(this.$refs.bellIcon, options);\n  },\n};\n<\/script>\n')),(0,o.kt)("p",null,"You can find your ENGAGESPOT_API_KEY from your ",(0,o.kt)("a",{parentName:"p",href:"https://portal.engagespot.co"},"Engagespot dashboard"),". As explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/understanding-concepts"},"basic concepts")," chapter, ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," should be any value to uniquely identify your app's users. It can be their email id, or UUID or a numerical id from your database."),(0,o.kt)("h2",{id:"customizing-theme"},"Customizing Theme"),(0,o.kt)("p",null,"You can customize the look and feel of the Engagespot Notification Inbox using the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," property. All the theme customization options mentioned in ",(0,o.kt)("a",{parentName:"p",href:"./using-react-component#available-themeing-options"},"React Component")," are available in this library too."))}l.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);