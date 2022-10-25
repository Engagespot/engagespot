"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4638],{81134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(52685),a=(n(27378),n(35318));const o={},i="Amazon SES",s={unversionedId:"channels/configuring-providers/email/ses",id:"channels/configuring-providers/email/ses",title:"Amazon SES",description:"You can send email notifications through your AWS SES service.",source:"@site/docs/channels/configuring-providers/email/ses.mdx",sourceDirName:"channels/configuring-providers/email",slug:"/channels/configuring-providers/email/ses",permalink:"/docs/channels/configuring-providers/email/ses",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/channels/configuring-providers/email/ses.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sendgrid",permalink:"/docs/channels/configuring-providers/email/sendgrid-provider"},next:{title:"SMTP Provider",permalink:"/docs/channels/configuring-providers/email/smtp-provider"}},l={},c=[{value:"Unique Identifier",id:"unique-identifier",level:2},{value:"Enabling AWS SES",id:"enabling-aws-ses",level:2},{value:"Create an AWS SES API Key and Secret using your AWS IAM Service",id:"create-an-aws-ses-api-key-and-secret-using-your-aws-iam-service",level:3},{value:"AWS SES Configurations.",id:"aws-ses-configurations",level:2},{value:"Overriding Configurations",id:"overriding-configurations",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amazon-ses"},"Amazon SES"),(0,a.kt)("p",null,"You can send email notifications through your AWS SES service."),(0,a.kt)("h2",{id:"unique-identifier"},"Unique Identifier"),(0,a.kt)("p",null,"Each provider is identified by a unique identifier. Unique identifier of SMTP provider is ",(0,a.kt)("inlineCode",{parentName:"p"},"ses")),(0,a.kt)("h2",{id:"enabling-aws-ses"},"Enabling AWS SES"),(0,a.kt)("p",null,"To enable AWS SES provider, login to your Engagespot dashboard, goto Channels -> Email and enable AES SES Provider."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"AWS SES provider uses ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," attribute in your user's ",(0,a.kt)("a",{parentName:"p",href:"/docs/profile/what-are-user-profiles"},"profile")," as the primary address to deliver the notifications. So make sure your user's profile has the ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," attribute set.")),(0,a.kt)("h3",{id:"create-an-aws-ses-api-key-and-secret-using-your-aws-iam-service"},"Create an AWS SES API Key and Secret using your AWS IAM Service"),(0,a.kt)("p",null,"To connect your AWS SES service with Engagespot, you must create an IAM user with ",(0,a.kt)("inlineCode",{parentName:"p"},"SendEmail")," permission."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After logging into your ",(0,a.kt)("a",{href:"https://console.aws.amazon.com",target:"_blank"},"AWS Console"),", search for the ",(0,a.kt)("inlineCode",{parentName:"p"},"IAM")," service."),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/aws_iam.png"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then, on the sidebar, navigate to ",(0,a.kt)("strong",null,"Access Management -> Users"),", and click ",(0,a.kt)("strong",null," Add Users ")),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot%202022-10-04%20at%204.13.19%20PM.png"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set a username, and credential type to ",(0,a.kt)("strong",null,"Access Key - Programmatic Access")),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.15.54 PM.png"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the next step (Permissions), select ",(0,a.kt)("strong",null,"Attach Existing Policies Directly"),", and click ",(0,a.kt)("strong",null," Create Policy")),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.17.59 PM.png"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In the create policy dialog, select "JSON" tab, and paste the following policy. After that, click on the ',(0,a.kt)("strong",null,"Next:Tags")," button at the bottom, then ",(0,a.kt)("strong",null,"Next:Review")," button, and specify a name for your policy and finally click ",(0,a.kt)("strong",null,"Create policy")," button."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VisualEditor0",\n      "Effect": "Allow",\n      "Action": ["ses:SendRawEmail", "ses:SendEmail", "ses:GetSendStatistics"],\n      "Resource": "*"\n    }\n  ]\n}\n\n')),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.20.58 PM.png"}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"After creating the policy, go back to the previous tab (Add User -> Set Permissions), and choose the policy you've just created. After that, click on the ",(0,a.kt)("strong",null,"Next:Tags")," button at the bottom, then ",(0,a.kt)("strong",null,"Next:Review")," button and finally ",(0,a.kt)("strong",null,"Create user")," button.")),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.25.18 PM.png"}),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Note the ",(0,a.kt)("strong",null,"AWS Access Key ID")," and ",(0,a.kt)("strong",null,"Secret Access Key")),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.27.06 PM.png"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, goto your ",(0,a.kt)("a",{href:"https://portal.engagespot.co"},"Engagespot dashboard")," -> Channels -> Email -> AWS SES.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the Access Key ID, Secret, Region and From Email. (Region where you created your AWS SES service, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east"),")"),(0,a.kt)("img",{src:"https://cdn.engagespot.co/images/docs/Screenshot 2022-10-04 at 4.31.04 PM.png",width:"300"}))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM_EMAIL")," should be created as a ",(0,a.kt)("a",{href:"https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html"},"Verified Identity")," in your SES account.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Also, by default your AWS SES account will be in ",(0,a.kt)("b",null,"sandbox mode")," which means you can send emails only to verified identities.To enable production access, you must send a request to AWS. Read more details ",(0,a.kt)("a",{href:"https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html",target:"_blank"},"here"))),(0,a.kt)("h2",{id:"aws-ses-configurations"},"AWS SES Configurations."),(0,a.kt)("p",null,"AWS SES requires the following configurations."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ACCESS_KEY_ID"),(0,a.kt)("td",{parentName:"tr",align:null},"AWS IAM Access Key ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SECRET_ACCESS_KEY"),(0,a.kt)("td",{parentName:"tr",align:null},"AWS IAM Secret Access Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REGION"),(0,a.kt)("td",{parentName:"tr",align:null},"Your AWS SES Region"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"us-west-2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FROM_EMAIL"),(0,a.kt)("td",{parentName:"tr",align:null},"Verified ",(0,a.kt)("b",null,"From Email")," identity on your SES account"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"overriding-configurations"},"Overriding Configurations"),(0,a.kt)("p",null,"SES provider allows you to override all the above configurations (and you can specify several more options) while sending a notification through Engagespot API, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.engagespot.co/v3/notifications")," endpoint."),(0,a.kt)("p",null,"To override the configurations, you must supply them via ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"ses")," parameter of the above API. Configurations override values should be passed via ",(0,a.kt)("inlineCode",{parentName:"p"},"_config")," object, and you can override ",(0,a.kt)("inlineCode",{parentName:"p"},"subject"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"from_name")),(0,a.kt)("p",null,"For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "notification": {\n    "title": "Anand commented on your photo",\n    "message": "Hey Steve, you\'re looking cool \ud83d\ude0e. Who took this photo?",\n    "url": "https://your-app.com/photos/17293739",\n    "category": "comment"\n  },\n  "recipients": ["steve@example.com"],\n  "override": {\n    "ses": {\n      "_config": {\n        "ACCESS_KEY_ID": "ANNHYAAJMLCPWRWGCNBSKHFY",\n        "SECRET_ACCESS_KEY": "nxxkjjuUtgVvcHjKpOJfdERFCJklytVbnkkksjshsgHHhsn",\n        "REGION": "us-west-2",\n        "FROM_EMAIL": "from@yourverifieddomain.com",\n      },\n      "from_name": "From Name",\n      "subject": "Custom email subject",\n      "text": "Email body plaintext",\n      "html": "Email body with <h1>HTML</h1> support",\n    }\n  }\n}\n')))}u.isMDXComponent=!0},35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);