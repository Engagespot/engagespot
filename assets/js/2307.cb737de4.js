"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2307],{16001:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(27378),l=a(38944),r=a(73723),o=a(7980),i=a(41191),s=a(7419),c="sidebar_CLW8",m="sidebarItemTitle_DQfJ",u="sidebarItemList_rvuc",d="sidebarItem__RMN",g="sidebarItemLink_Ony9",p="sidebarItemLinkActive_MJ75";function f(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var h=a(70197);function E(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return n.createElement(h.Zo,{component:E,props:e})}function b(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(v,{sidebar:t}):n.createElement(f,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(b,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},42376:function(e,t,a){a.d(t,{Z:function(){return R}});var n=a(27378),l=a(38944),r=a(73049),o=a(1847);function i(e){let{children:t,className:a}=e;const{frontMatter:l,assets:i}=(0,r.C)(),{withBaseUrl:s}=(0,o.C)(),c=i.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),t)}var s=a(41191),c="title_Kdtz";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:i,title:m}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},o?m:n.createElement(s.Z,{itemProp:"url",to:i},m))}var u=a(7419),d=a(91256),g="container_iZB2";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function f(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return n.createElement(n.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:i,readingTime:s}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(f,{date:o,formattedDate:i}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement(p,{readingTime:s})))}function v(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){let{author:t,className:a}=e;const{name:r,title:o,url:i,imageURL:s,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&n.createElement(v,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var N="authorCol_v1VX",_="imageOnlyAuthorRow_RxZ1",Z="imageOnlyAuthorCol_iWtj";function P(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?_:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?Z:N),key:t},n.createElement(b,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function k(){return n.createElement("header",null,n.createElement(m,null),n.createElement(E,null),n.createElement(P,null))}var T=a(12615),C=a(88457);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return n.createElement("div",{id:o?T.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(C.Z,null,t))}var B=a(49554),y=a(10212),F=a(52685);function x(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return n.createElement(s.Z,(0,F.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(x,null))}var M="blogPostFooterDetailsFull_JgJa";function I(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||i?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&M)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(y.Z,{tags:a})),t&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(B.Z,{editUrl:i})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(i,{className:(0,l.Z)(o,a)},n.createElement(k,null),n.createElement(w,null,t),n.createElement(I,null))}},49554:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(27378),l=a(7419),r=a(55854),o=a(52685),i=a(38944),s="iconEdit_bHB7";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},99808:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(27378),l=a(38944),r=a(41191);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},73200:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(27378),l=a(38944),r=a(41191),o="tag_otG2",i="tagRegular_s0E1",s="tagWithCount_PGyn";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,c?s:i)},a,c&&n.createElement("span",null,c))}},10212:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(27378),l=a(38944),r=a(7419),o=a(73200),i="tags_Ow0B",s="tag_DFxh";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s},n.createElement(o.Z,{label:t,permalink:a}))}))))}},73049:function(e,t,a){a.d(t,{C:function(){return i},n:function(){return o}});var n=a(27378),l=a(13879);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},91256:function(e,t,a){a.d(t,{c:function(){return m}});var n=a(27378),l=a(89939),r=a(30138);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return r.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&r.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),o=a.pluralForms.indexOf(l);return n[Math.min(o,n.length-1)]}(a,t,e)}}}}]);