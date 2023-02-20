"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1537],{99506:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(27378),a=r(38944),o="tabItem_wHwb";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},15091:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(52685),a=r(27378),o=r(38944),i=r(90362),s=r(56),l=r(45720),u=r(9169),p="tabList_J5MA",c="tabItem_l0OV";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,l.U)(),[x,N]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,r=T.indexOf(t),n=v[r].value;n!==x&&(P(t),N(n),null!=f&&E(f,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:w,onClick:w},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},39779:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(52685),a=(r(27378),r(35318)),o=r(15091),i=r(99506);const s={sidebar_position:2},l="User Profile",u={unversionedId:"user/profile",id:"user/profile",title:"User Profile",description:"In the first chapter when you learned to initialize the Engagespot front-end SDK, you passsed a unique identifier to the userId parameter. What if you want to specify more details about your user such as their name, email, location etc?",source:"@site/docs/user/profile.mdx",sourceDirName:"user",slug:"/user/profile",permalink:"/docs/user/profile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user/profile.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"User",permalink:"/docs/user/who-is-user"},next:{title:"HMAC Authentication",permalink:"/docs/user/enabling-HMAC-authentication"}},p={},c=[{value:"Adding attributes to user&#39;s profile.",id:"adding-attributes-to-users-profile",level:2},{value:"Using Javascript Core SDK",id:"using-javascript-core-sdk",level:2},{value:"Using REST API",id:"using-rest-api",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-profile"},"User Profile"),(0,a.kt)("p",null,"In the first chapter when you learned to initialize the Engagespot front-end SDK, you passsed a unique identifier to the ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," parameter. What if you want to specify more details about your user such as their name, email, location etc?"),(0,a.kt)("p",null,"Engagespot allows you to add more attributes to a user's profile as key-value pairs. This helps you to use those attributes in your email provider's template or for any other purposes."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("a",{parentName:"p",href:"/docs/channels/what-are-providers"},"providers")," look for certain attributes in your user's profile inorder to send notifications.\nFor example, ",(0,a.kt)("a",{parentName:"p",href:"../channels/configuring-providers/mobile-push/FCM-provider"},"FCM")," needs your user's profile to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," attribute inorder to deliver push notification to them.\nMake sure you set the required profile attributes in your user profile.")),(0,a.kt)("h2",{id:"adding-attributes-to-users-profile"},"Adding attributes to user's profile."),(0,a.kt)("p",null,"You can add attributes as key-value pairs to your user's profile either via REST API or our client SDKs (For example - ReactJS or Core Javascript)."),(0,a.kt)("h2",{id:"using-javascript-core-sdk"},"Using Javascript Core SDK"),(0,a.kt)("p",null,"You should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setProfileAttributes")," method to store key value pairs to your user's profile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const engagespotClient = new Engagespot('API_KEY', {\n  userId: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nengagespotClient.setProfileAttributes({\n  email: 'myuser@myexamplesite.com',\n  phone: '+19876543210',\n  name: 'Anand',\n});\n")),(0,a.kt)("p",null,"This will add three profile attributes - ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"phone")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," to your user's (123e4567-e89b-12d3-a456-426614174000) profile."),(0,a.kt)("h2",{id:"using-rest-api"},"Using REST API"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," method on ",(0,a.kt)("inlineCode",{parentName:"p"},"/users")," end point or ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," method of ",(0,a.kt)("inlineCode",{parentName:"p"},"/profile")," endpoint in the REST API to update your user's profile.\nRead ",(0,a.kt)("a",{parentName:"p",href:"../rest-api#tag/Profile/paths/~1v3~1profile/put"},"API Docs")," for more information."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { EngagespotClient } from "@engagespot/node";\n\n  const client = EngagespotClient({\n    apiKey:\'ENGAGESPOT_API_KEY\',\n    apiSecret:\'ENGAGESPOT_API_SECRET\'\n  })\n\n  client.createOrUpdateUser("identifier",{\n    "email":"xxx@xxx.com",\n    "phoneNumber":"+xxxxxxxxx"\n  })\n'))),(0,a.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request PUT 'https://api.engagespot.co/v3/users/{identifier}' \\\n--header 'X-ENGAGESPOT-API-KEY: ENGAGESPOT_API_KEY' \\\n--header 'X-ENGAGESPOT-API-SECRET: ENGAGESPOT_API_SECRET' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\"email\":\"xxx@xxx.com\",\n\"phoneNumber\":\"+xxxxxxxxx\"\n}'\n")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Alternatively, you can use ",(0,a.kt)("strong",{parentName:"p"},"PATCH")," method on ",(0,a.kt)("inlineCode",{parentName:"p"},"/profile")," endpoint which uses ",(0,a.kt)("a",{parentName:"p",href:"http://jsonpatch.com/"},"JSON Patch")," syntax to do complex operations on your Profile object.")))}m.isMDXComponent=!0},35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);