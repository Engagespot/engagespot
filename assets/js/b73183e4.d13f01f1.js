"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2417],{99506:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(27378),r=n(38944),o="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},15091:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(52685),r=n(27378),o=n(38944),i=n(90362),l=n(56),c=n(45720),u=n(9169),s="tabList_J5MA",p="tabItem_l0OV";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:h,groupId:b,className:f}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=h??m.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??m[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,c.U)(),[E,O]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==E&&g.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==E&&(T(t),O(a),null!=b&&w(b,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(m.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},29848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(52685),r=(n(27378),n(35318));n(15091),n(99506);const o={sidebar_position:2},i="Enabling Batching",l={unversionedId:"batching/setup_batching",id:"batching/setup_batching",title:"Enabling Batching",description:"To enable notification batching, you must create a notification template first.",source:"@site/docs/batching/setup_batching.mdx",sourceDirName:"batching",slug:"/batching/setup_batching",permalink:"/docs/batching/setup_batching",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/batching/setup_batching.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Notification Batching",permalink:"/docs/batching/introduction"},next:{title:"What are Preferences?",permalink:"/docs/preference/what-are-preferences"}},c={},u=[{value:"Batching placeholders",id:"batching-placeholders",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enabling-batching"},"Enabling Batching"),(0,r.kt)("p",null,"To enable notification batching, you must create a ",(0,r.kt)("a",{parentName:"p",href:"../templates/introduction"},"notification template"),' first.\nLet\'s take the example of "Comment" notification.'),(0,r.kt)("p",null,"You'll create a template that goes like -\n",(0,r.kt)("strong",{parentName:"p"},"{{commenterName}} commented on your post")),(0,r.kt)("p",null,'To enable batching, click on the "Enable Batching" toggle at the bottom of the template editor.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Batching Window")," - Batch window is the time duration where the batch will be open since the first trigger happens. Recipient will get batched notification after the window period."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Batching is specific to a channel within your template. You have the flexibility to enable batching only for specific channels in your template.")),(0,r.kt)("p",null,"Now, for the batched template, you need to create another version of the sample content.\nIn the batched version, Engagespot expose you some predefined variables that you can use in your template."),(0,r.kt)("h3",{id:"batching-placeholders"},"Batching placeholders"),(0,r.kt)("p",null,"Here is a list of variables that you can use to build your notification's batched version."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batching.totalCount")," : Total number of notifications included in the batch. It includes the final batched notification too."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batching.totalCountExceptThis")," : Total number of notifications except the batched notification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batching.notifications")," : An array that lists all batched notifications.")),(0,r.kt)("p",null,"For example, the batched version of your template content could be like -"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"{{commenterName}} and {{batching.totalCountExceptThis}} commented on your post")))}p.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);