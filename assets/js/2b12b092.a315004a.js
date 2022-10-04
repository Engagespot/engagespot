"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4638],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58747:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),o=["components"],s={},l="Amazon SES",c={unversionedId:"channels/configuring-providers/email/ses",id:"channels/configuring-providers/email/ses",title:"Amazon SES",description:"You can send email notifications through your AWS SES service.",source:"@site/docs/channels/configuring-providers/email/ses.mdx",sourceDirName:"channels/configuring-providers/email",slug:"/channels/configuring-providers/email/ses",permalink:"/docs/channels/configuring-providers/email/ses",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/configuring-providers/email/ses.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sendgrid",permalink:"/docs/channels/configuring-providers/email/sendgrid-provider"},next:{title:"SMTP Provider",permalink:"/docs/channels/configuring-providers/email/smtp-provider"}},p=[{value:"Unique Identifier",id:"unique-identifier",children:[],level:2},{value:"Enabling AWS SES",id:"enabling-aws-ses",children:[{value:"Create an AWS SES API Key and Secret using your AWS IAM Service",id:"create-an-aws-ses-api-key-and-secret-using-your-aws-iam-service",children:[],level:3}],level:2},{value:"AWS SES Configurations.",id:"aws-ses-configurations",children:[],level:2},{value:"Overriding Configurations",id:"overriding-configurations",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amazon-ses"},"Amazon SES"),(0,i.kt)("p",null,"You can send email notifications through your AWS SES service."),(0,i.kt)("h2",{id:"unique-identifier"},"Unique Identifier"),(0,i.kt)("p",null,"Each provider is identified by a unique identifier. Unique identifier of SMTP provider is ",(0,i.kt)("inlineCode",{parentName:"p"},"ses")),(0,i.kt)("h2",{id:"enabling-aws-ses"},"Enabling AWS SES"),(0,i.kt)("p",null,"To enable AWS SES provider, login to your Engagespot dashboard, goto Channels -> Email and enable AES SES Provider."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"AWS SES provider uses ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," attribute in your user's ",(0,i.kt)("a",{parentName:"p",href:"/docs/profile/what-are-user-profiles"},"profile")," as the primary address to deliver the notifications. So make sure your user's profile has the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," attribute set."))),(0,i.kt)("h3",{id:"create-an-aws-ses-api-key-and-secret-using-your-aws-iam-service"},"Create an AWS SES API Key and Secret using your AWS IAM Service"),(0,i.kt)("p",null,"To connect your AWS SES service with Engagespot, you must create an IAM user with ",(0,i.kt)("inlineCode",{parentName:"p"},"SendEmail")," permission."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After logging into your ",(0,i.kt)("a",{href:"https://console.aws.amazon.com",target:"_blank"},"AWS Console"),", search for the ",(0,i.kt)("inlineCode",{parentName:"p"},"IAM")," service."),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/aws_iam.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then, on the sidebar, navigate to ",(0,i.kt)("strong",null,"Access Management -> Users"),", and click ",(0,i.kt)("strong",null," Add Users ")),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot%202022-10-04%20at%204.13.19%20PM.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set a username, and credential type to ",(0,i.kt)("strong",null,"Access Key - Programmatic Access")),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.15.54 PM.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the next step (Permissions), select ",(0,i.kt)("strong",null,"Attach Existing Policies Directly"),", and click ",(0,i.kt)("strong",null," Create Policy")),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.17.59 PM.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the create policy dialog, select "JSON" tab, and paste the following policy. After that, click on the ',(0,i.kt)("strong",null,"Next:Tags")," button at the bottom, then ",(0,i.kt)("strong",null,"Next:Review")," button, and specify a name for your policy and finally click ",(0,i.kt)("strong",null,"Create policy")," button."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VisualEditor0",\n      "Effect": "Allow",\n      "Action": ["ses:SendRawEmail", "ses:SendEmail", "ses:GetSendStatistics"],\n      "Resource": "*"\n    }\n  ]\n}\n\n')),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.20.58 PM.png"}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"After creating the policy, go back to the previous tab (Add User -> Set Permissions), and choose the policy you've just created. After that, click on the ",(0,i.kt)("strong",null,"Next:Tags")," button at the bottom, then ",(0,i.kt)("strong",null,"Next:Review")," button and finally ",(0,i.kt)("strong",null,"Create user")," button.")),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.25.18 PM.png"}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Note the ",(0,i.kt)("strong",null,"AWS Access Key ID")," and ",(0,i.kt)("strong",null,"Secret Access Key")),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.27.06 PM.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, goto your ",(0,i.kt)("a",{href:"https://portal.engagespot.co"},"Engagespot dashboard")," -> Channels -> Email -> AWS SES.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Access Key ID, Secret, Region and From Email. (Region where you created your AWS SES service, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east"),")"),(0,i.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.31.04 PM.png",width:"300"}))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM_EMAIL")," should be created as a ",(0,i.kt)("a",{href:"https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html"},"Verified Identity")," in your SES account."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Also, by default your AWS SES account will be in ",(0,i.kt)("b",null,"sandbox mode")," which means you can send emails only to verified identities.To enable production access, you must send a request to AWS. Read more details ",(0,i.kt)("a",{href:"https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html",target:"_blank"},"here")))),(0,i.kt)("h2",{id:"aws-ses-configurations"},"AWS SES Configurations."),(0,i.kt)("p",null,"AWS SES requires the following configurations."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACCESS_KEY_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS IAM Access Key ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SECRET_ACCESS_KEY"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS IAM Secret Access Key"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REGION"),(0,i.kt)("td",{parentName:"tr",align:null},"Your AWS SES Region"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"us-west-2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FROM_EMAIL"),(0,i.kt)("td",{parentName:"tr",align:null},"Verified ",(0,i.kt)("b",null,"From Email")," identity on your SES account"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"overriding-configurations"},"Overriding Configurations"),(0,i.kt)("p",null,"SES provider allows you to override all the above configurations (and you can specify several more options) while sending a notification through Engagespot API, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.engagespot.co/v3/notifications")," endpoint."),(0,i.kt)("p",null,"To override the configurations, you must supply them via ",(0,i.kt)("inlineCode",{parentName:"p"},"override")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"ses")," parameter of the above API. Configurations override values should be passed via ",(0,i.kt)("inlineCode",{parentName:"p"},"_config")," object, and you can override ",(0,i.kt)("inlineCode",{parentName:"p"},"subject"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"from_name")),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "notification": {\n    "title": "Anand commented on your photo",\n    "message": "Hey Steve, you\'re looking cool \ud83d\ude0e. Who took this photo?",\n    "url": "https://your-app.com/photos/17293739",\n    "category": "comment"\n  },\n  "recipients": ["steve@example.com"],\n  "override": {\n    "ses": {\n      "_config": {\n        "ACCESS_KEY_ID": "ANNHYAAJMLCPWRWGCNBSKHFY",\n        "SECRET_ACCESS_KEY": "nxxkjjuUtgVvcHjKpOJfdERFCJklytVbnkkksjshsgHHhsn",\n        "REGION": "us-west-2",\n        "FROM_EMAIL": "from@yourverifieddomain.com",\n      },\n      "from_name": "From Name",\n      "subject": "Custom email subject",\n      "text": "Email body plaintext",\n      "html": "Email body with <h1>HTML</h1> support",\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);