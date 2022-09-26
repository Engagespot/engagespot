"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7101],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70517:function(e,t,n){var r=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},40637:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(25773),a=n(27378),o=n(76457),i=n(24263),l=n(38944),s="tabItem_WhCL";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),k=b.tabGroupChoices,N=b.setTabGroupChoices,E=(0,a.useState)(y),w=E[0],P=E[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=k[m];null!=A&&A!==w&&v.some((function(e){return e.value===A}))&&P(A)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==w&&(O(t),P(r),null!=m&&N(m,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},5897:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=n(40637),l=n(70517),s=["components"],u={},p="What are User Profiles?",c={unversionedId:"profile/what-are-user-profiles",id:"profile/what-are-user-profiles",title:"What are User Profiles?",description:"In the first chapter when you learned to initialize the Engagespot front-end SDK, you passsed a unique identifier to the userId parameter. What if you want to specify more details about your user such as their name, email, location etc?",source:"@site/docs/profile/what-are-user-profiles.mdx",sourceDirName:"profile",slug:"/profile/what-are-user-profiles",permalink:"/docs/profile/what-are-user-profiles",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/profile/what-are-user-profiles.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What are Preferences?",permalink:"/docs/preference/what-are-preferences"},next:{title:"Enabling HMAC Authentication",permalink:"/docs/HMAC-authentication/enabling-HMAC-authentication"}},d=[{value:"Adding attributes to user&#39;s profile.",id:"adding-attributes-to-users-profile",children:[],level:2},{value:"Using Javascript Core SDK",id:"using-javascript-core-sdk",children:[],level:2},{value:"Using REST API",id:"using-rest-api",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-are-user-profiles"},"What are User Profiles?"),(0,o.kt)("p",null,"In the first chapter when you learned to initialize the Engagespot front-end SDK, you passsed a unique identifier to the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," parameter. What if you want to specify more details about your user such as their name, email, location etc?"),(0,o.kt)("p",null,"Engagespot allows you to add more attributes to a user's profile as key-value pairs. This helps you to use those attributes in your email provider's template or for any other purposes."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("a",{parentName:"p",href:"/docs/channels/what-are-providers"},"providers")," look for certain attributes in your user's profile inorder to send notifications.\nFor example, ",(0,o.kt)("a",{parentName:"p",href:"../channels/configuring-providers/mobile-push/FCM-provider"},"FCM")," needs your user's profile to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," attribute inorder to deliver push notification to them.\nMake sure you set the required profile attributes in your user profile."))),(0,o.kt)("h2",{id:"adding-attributes-to-users-profile"},"Adding attributes to user's profile."),(0,o.kt)("p",null,"You can add attributes as key-value pairs to your user's profile either via REST API or our client SDKs (For example - ReactJS or Core Javascript)."),(0,o.kt)("h2",{id:"using-javascript-core-sdk"},"Using Javascript Core SDK"),(0,o.kt)("p",null,"You should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setProfileAttributes")," method to store key value pairs to your user's profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const engagespotClient = new Engagespot('API_KEY', {\n  userId: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nengagespotClient.setProfileAttributes({\n  email: 'myuser@myexamplesite.com',\n  phone: '+19876543210',\n  name: 'Anand',\n});\n")),(0,o.kt)("p",null,"This will add three profile attributes - ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"phone")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," to your user's (123e4567-e89b-12d3-a456-426614174000) profile."),(0,o.kt)("h2",{id:"using-rest-api"},"Using REST API"),(0,o.kt)("p",null,"You should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"/profile")," endpoint in the REST API to update your user's profile. Read ",(0,o.kt)("a",{parentName:"p",href:"../rest-api#tag/Profile/paths/~1v3~1profile/put"},"API Docs")," for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PUT")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.engagespot.co/v3/profile")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var axios = require('axios');\n\naxios.put(\n  'https://api.engagespot.co/v3/profile',\n  {\n    full_name: 'Rose DeWitt-Bukater',\n    email: 'rose@titanic.com',\n    gender: 'Female',\n    hometown: 'Pennsylvania',\n  },\n  {\n    headers: {\n      'X-ENGAGESPOT-API-KEY': 'YOUR_ENGAGESPOT_API_KEY',\n      'X-ENGAGESPOT-USER-ID': 'YOUR_USER_UNIQUE_ID',\n      'Content-Type': 'application/json',\n    },\n  }\n);\n"))),(0,o.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request PUT \'https://api.engagespot.co/v3/profile\' \\\n--header \'X-ENGAGESPOT-API-KEY: YOUR_ENGAGESPOT_API_KEY\' \\\n--header \'X-ENGAGESPOT-USER-ID: YOUR_USER_UNIQUE_ID\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "full_name":"Rose DeWitt-Bukater",\n    "email":"rose@titanic.com",\n    "gender":"Female",\n    "hometown":"Pennsylvania"\n}\'\n'))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport json\n\nurl = "https://api.engagespot.co/v3/profile"\n\npayload = json.dumps({\n  "full_name": "Rose DeWitt-Bukater",\n  "email": "rose@titanic.com",\n  "gender": "Female",\n  "hometown": "Pennsylvania"\n})\nheaders = {\n  \'X-ENGAGESPOT-API-KEY\': \'YOUR_ENGAGESPOT_API_KEY\',\n  \'X-ENGAGESPOT-USER-ID\': \'YOUR_USER_UNIQUE_ID\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("PUT", url, headers=headers, data=payload)\n\nprint(response.text)\n\n')))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternatively, you can use ",(0,o.kt)("strong",{parentName:"p"},"PATCH")," method which uses ",(0,o.kt)("a",{parentName:"p",href:"http://jsonpatch.com/"},"JSON Patch")," syntax to do complex operations on your Profile object."))))}f.isMDXComponent=!0}}]);