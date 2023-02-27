"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4346],{21659:function(e,t,n){n.r(t),n.d(t,{Engagespot:function(){return gn}});var r=n(27378),i=n(19401),a=n.n(i),o=n(65981),l=n(30138);function s(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){s(a,r,i,o,l,"next",e)}function l(e){s(a,r,i,o,l,"throw",e)}o(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var g=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var b=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(l){a=[6,l],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},v=Object.defineProperty,y=function(e,t,n){return function(e,t,n){t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=(void 0===t?"undefined":g(t))?t+"":t,n),n},E={apiHost:"https://api.engagespot.co/v3",wssHost:"wss://rtm.engagespot.co",wssPort:80},w=function(){if(("undefined"==typeof window?"undefined":g(window))>"u")return"other";var e=navigator.userAgent,t=e.indexOf("Chrome")>-1,n=e.indexOf("MSIE")>-1||e.indexOf("rv:")>-1,r=e.indexOf("Firefox")>-1,i=e.indexOf("Safari")>-1;t&&i&&(i=!1);var a=e.indexOf("OP")>-1;return t&&a&&(t=!1),t?"chrome":n?"ie":r?"firefox":i?"safari":a?"opera":void 0};function k(e){var t,n={method:e.method,cache:"no-cache",headers:h({"Content-Type":"application/json"},e.headers)};return null!==e.body&&(n.body=JSON.stringify(e.body)),fetch(e.url,n).then((t=c((function(e){return b(this,(function(t){switch(t.label){case 0:return e.ok?[3,2]:[4,P(e)];case 1:t.sent(),t.label=2;case 2:t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.json()];case 4:return[2,t.sent()];case 5:return t.sent(),[2,null];case 6:return[2]}}))})),function(e){return t.apply(this,arguments)}))}function P(e){return S.apply(this,arguments)}function S(){return(S=c((function(e){var t,n,r,i,a,o;return b(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,e.json()];case 1:return n=l.sent(),r=n.error,i=void 0===r?"Unknown error":r,a=n.message,o=void 0===a?"No description":a,t="Unexpected status code ".concat(e.status,": ").concat(i,", ").concat(o),[3,3];case 2:return l.sent(),t="Unexpected status code ".concat(e.status,": Cannot parse error response"),[3,3];case 3:throw new Error(t)}}))}))).apply(this,arguments)}var C,I=function(){function e(t,n){u(this,e),y(this,"_client"),y(this,"id"),y(this,"title"),y(this,"message",null),y(this,"icon",null),y(this,"url",null),y(this,"seenAt",null),y(this,"clickedAt",null),y(this,"createdAt",null),y(this,"data",null),this._client=t,this.id=n.id,this.title=n.title,this.message=n.message,this.icon=n.icon,this.url=n.url,this.seenAt=n.seenAt,this.clickedAt=n.clickedAt,this.createdAt=n.createdAt,this.data=n.data}return p(e,[{key:"markAsRead",value:function(){var e=this;return c((function(){return b(this,(function(t){return[2,e.markAsClicked()]}))}))()}},{key:"markAsClicked",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:t={url:e._client.baseURL+"/notifications/"+e.id+"/click",method:"POST",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e._client.apiKey,"X-ENGAGESPOT-USER-ID":e._client.userId},e._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e._client.userSignature})},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,k(t)];case 2:if(n.sent())return[2,e];throw"Cannot mark notification as clicked";case 3:throw n.sent();case 4:return[2]}}))}))()}},{key:"markAsUnSeen",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:t={url:e._client.baseURL+"/notifications/"+e.id+"/views",method:"DELETE",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e._client.apiKey,"X-ENGAGESPOT-USER-ID":e._client.userId},e._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e._client.userSignature})},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,k(t)];case 2:if(n.sent())return[2,e];throw"Cannot mark notification as clicked";case 3:throw n.sent();case 4:return[2]}}))}))()}},{key:"markAsUnRead",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:t={url:e._client.baseURL+"/notifications/"+e.id+"/reads",method:"DELETE",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e._client.apiKey,"X-ENGAGESPOT-USER-ID":e._client.userId},e._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e._client.userSignature})},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,k(t)];case 2:if(n.sent())return[2,e];throw"Cannot mark notification as clicked";case 3:throw n.sent();case 4:return[2]}}))}))()}},{key:"fetch",value:function(){var e=this;return c((function(){var t,n;return b(this,(function(r){switch(r.label){case 0:t={url:e._client.baseURL+"/notifications/"+e.id,method:"GET",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e._client.apiKey,"X-ENGAGESPOT-USER-ID":e._client.userId},e._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e._client.userSignature})},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,k(t)];case 2:if(n=r.sent())return[2,(e.title=n.title,e.message=n.message,e.icon=n.icon,e.url=n.url,e.seenAt=n.seenAt,e.clickedAt=n.clickedAt,e.createdAt=n.createdAt,e.data=n.data,e)];throw"Cannot fetch notifications";case 3:throw r.sent();case 4:return[2]}}))}))()}},{key:"delete",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:t={url:e._client.baseURL+"/notifications/"+e.id,method:"DELETE",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e._client.apiKey,"X-ENGAGESPOT-USER-ID":e._client.userId},e._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e._client.userSignature})},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,k(t)];case 2:if(n.sent())return[2,e];throw"Unable to delete notifications";case 3:throw n.sent();case 4:return[2]}}))}))()}}]),e}(),x=function(){function e(t){u(this,e),y(this,"client"),y(this,"unreadCount"),y(this,"totalCount"),y(this,"currentPage"),y(this,"itemsPerPage"),y(this,"totalPages"),y(this,"data"),this.client=t,this.unreadCount=0,this.totalCount=0,this.data=[],this.currentPage=1,this.itemsPerPage=15,this.totalPages=0}return p(e,[{key:"fetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=this;return c((function(){var r;return b(this,(function(i){switch(i.label){case 0:return n.currentPage=e,n.itemsPerPage=t,[4,k({url:n.client.baseURL+"/notifications?pageNo="+n.currentPage+"&limit="+n.itemsPerPage,method:"GET",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":n.client.apiKey,"X-ENGAGESPOT-USER-ID":n.client.userId},n.client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":n.client.userSignature})})];case 1:return r=i.sent(),[2,(n.unreadCount=r.unreadCount,n.totalCount=r.pagination.totalCount,n.totalPages=Math.ceil(n.totalCount/n.itemsPerPage),n.client.unreadCount=r.unreadCount,r.data.forEach((function(e){var t=new I(n.client,{id:e.id,title:e.title,message:e.message,icon:e.icon,url:e.url,createdAt:e.createdAt,seenAt:e.seenAt,data:e.data,clickedAt:e.clickedAt});n.data.push(t)})),n)]}}))}))()}},{key:"markAllAsSeen",value:function(){var e=this;return c((function(){return b(this,(function(t){switch(t.label){case 0:return[4,k({url:e.client.baseURL+"/notifications/markAllNotificationsAsSeen",method:"POST",headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e.client.apiKey,"X-ENGAGESPOT-USER-ID":e.client.userId},e.client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e.client.userSignature})})];case 1:return t.sent(),[2,e]}}))}))()}}]),e}(),N=((C=N||{})[C.PERMISSION_REQUIRED=0]="PERMISSION_REQUIRED",C[C.PERMISSION_GRANTED=1]="PERMISSION_GRANTED",C[C.PERMISSION_DENIED=2]="PERMISSION_DENIED",C),R=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;u(this,e),y(this,"apiKey"),y(this,"userId"),y(this,"userSignature"),this.apiKey=t,this.userId=n,this.userSignature=r}return p(e,[{key:"executeFetchRequest",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=this;return c((function(){var a;return b(this,(function(o){return a=m(h({method:e,cache:"no-store"},["POST","PUT","PATCH"].includes(e)&&{body:JSON.stringify(n)}),{headers:h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":i.apiKey,"X-ENGAGESPOT-USER-ID":i.userId},i.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":i.userSignature},r)}),[2,fetch(t,a).then((l=c((function(e){return b(this,(function(t){switch(t.label){case 0:return e.ok?[3,2]:[4,i.handleError(e)];case 1:t.sent(),t.label=2;case 2:t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.json()];case 4:return[2,t.sent()];case 5:return t.sent(),[2,null];case 6:return[2]}}))})),function(e){return l.apply(this,arguments)}))];var l}))}))()}},{key:"handleError",value:function(e){return c((function(){var t,n,r,i,a,o;return b(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,e.json()];case 1:return n=l.sent(),r=n.error,i=void 0===r?"Unknown error":r,a=n.message,o=void 0===a?"No description":a,t="Unexpected status code ".concat(e.status,": ").concat(i,", ").concat(o),[3,3];case 2:return l.sent(),t="Unexpected status code ".concat(e.status,": Cannot parse error response"),[3,3];case 3:throw new Error(t)}}))}))()}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this;return c((function(){return b(this,(function(r){switch(r.label){case 0:return[4,n.executeFetchRequest("GET",e,null,t)];case 1:return[2,r.sent()]}}))}))()}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this;return c((function(){return b(this,(function(i){switch(i.label){case 0:return[4,r.executeFetchRequest("POST",e,t,n)];case 1:return[2,i.sent()]}}))}))()}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this;return c((function(){return b(this,(function(i){switch(i.label){case 0:return[4,r.executeFetchRequest("PUT",e,t,n)];case 1:return[2,i.sent()]}}))}))()}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this;return c((function(){return b(this,(function(i){switch(i.label){case 0:return[4,r.executeFetchRequest("PATCH",e,t,n)];case 1:return[2,i.sent()]}}))}))()}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this;return c((function(){return b(this,(function(r){switch(r.label){case 0:return[4,n.executeFetchRequest("DELETE",e,null,t)];case 1:return[2,r.sent()]}}))}))()}}]),e}(),A=function(){function e(t,n){if(u(this,e),y(this,"debug",!1),y(this,"isNative",!1),y(this,"SERVICE_WORKER_URL","/service-worker.js?sdkVersion=3.0.0"),y(this,"apiKey"),y(this,"userId"),y(this,"userSignature",null),y(this,"instanceState","none"),y(this,"endPoint",null),y(this,"socket",null),y(this,"realtimeClient"),y(this,"_ready"),y(this,"enableNonHttpsWebPush",!1),y(this,"enableWebPush",!1),y(this,"supportedChannels",{inApp:{name:"In-App",id:"inApp"},webPush:{name:"Web Push",id:"webPush"},email:{name:"Email",id:"email"},mobilePush:{name:"Mobile Push",id:"mobilePush"},sms:{name:"SMS",id:"sms"},whatsapp:{name:"WhatsApp",id:"whatsapp"}}),y(this,"enabledChannels",[]),y(this,"unreadCount",0),y(this,"deviceId"),y(this,"hideBranding",!1),y(this,"serviceWorkerRegistration",null),y(this,"publicKey",""),y(this,"subscribableEvents",["REALTIME_NOTIFICATION_RECEIVED","NOTIFICATION_CLICKED","NOTIFICATION_DELETED"]),y(this,"eventListenerStore",{REALTIME_NOTIFICATION_RECEIVED:[],NOTIFICATION_CLICKED:[],NOTIFICATION_DELETED:[],NOTIFICATION_SEEN:[],WEBPUSH_PERMISSION_CHANGED:[]}),y(this,"apiRequestv2"),y(this,"isWebPushSupported",(function(){return"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window})),function(e){if(null==e)throw"ES1007 - You must pass your API key when you instantiate Engagespot."}(t),this.apiKey=t,this.isNative=("undefined"==typeof window?"undefined":g(window))>"u",!n)throw"ES1000 - You must pass an options object when you instantiate Engagespot.";if(!n.userId)throw"ES1001 - You must pass userId when you instantiate Engagespot.";this.userId=n.userId,n.userSignature&&(this.userSignature=n.userSignature),n.enableNonHttpsWebPush&&(this.enableNonHttpsWebPush=n.enableNonHttpsWebPush),n.serviceWorkerRegistration&&(this.serviceWorkerRegistration=n.serviceWorkerRegistration),n.endPointOverride&&(this.endPoint=n.endPointOverride),n.debug&&(this.debug=n.debug),this.apiRequestv2=new R(t,n.userId,n.userSignature),this._ready=this.init()}return p(e,[{key:"_resolveInstanceState",value:function(){var e=this;return c((function(){return b(this,(function(t){switch(t.label){case 0:return[4,e._ready];case 1:return t.sent(),[2]}}))}))()}},{key:"isReady",value:function(){var e=this;return c((function(){return b(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e._resolveInstanceState()];case 1:return[2,(t.sent(),!0)];case 2:return t.sent(),[2,!1];case 3:return[2]}}))}))()}},{key:"init",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:return e.deviceId?[2,(e._log("Instance already have a deviceId. So skipping init()"),e)]:(t=e.getDeviceId(),e.deviceId=t||e.createNewDevice(),[4,e.connect()]);case 1:return[2,n.sent()]}}))}))()}},{key:"connect",value:function(){var e=this;return c((function(){var t,n;return b(this,(function(r){switch(r.label){case 0:return e.instanceState="connecting",[4,k({url:e.baseURL+"/sdk/connect",method:"POST",body:{deviceType:"browser",browserType:w()},headers:m(h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e.apiKey,"X-ENGAGESPOT-USER-ID":e.userId},e.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e.userSignature}),{"X-ENGAGESPOT-DEVICE-ID":e.deviceId})})];case 1:return t=r.sent(),e.unreadCount=t.unreadCount,e.hideBranding=t.app.hideBranding,e.publicKey=t.app.publicKey,e.enableWebPush=t.app.enableWebPush,e.enabledChannels=t.app.channels||[],e._log("Response from connect API is given below "),e._log(t),e.isNative||!e.enableWebPush||e.enableNonHttpsWebPush?[3,7]:(e._log("enableNonHttpsWebPush is false"),e.serviceWorkerRegistration?[4,window.navigator.serviceWorker.ready]:[3,3]);case 2:return r.sent(),[3,6];case 3:return r.trys.push([3,5,,6]),[4,e.getServiceWorkerRegistration()];case 4:return e.serviceWorkerRegistration=r.sent(),[3,6];case 5:return n=r.sent(),l.warn("[Engagespot] ES1003 - Service worker registration failed. This error is probably due to missing service-worker file. Try turning off web-push channel in your Engagespot dashboard"),l.error(n),[3,6];case 6:return[3,8];case 7:e._log("enableNonHttpsWebPush is "+e.enableNonHttpsWebPush),e._log("enableWebPush is "+e.enableWebPush),r.label=8;case 8:try{e.realtimeConnect()}catch(i){throw i}return[2,(e.isNative||e.listenForWebPushPermissionChanges(),e.instanceState="connected",e)]}}))}))()}},{key:"_createTokenRequest",value:function(){var e=this;return c((function(){return b(this,(function(t){switch(t.label){case 0:return[4,k({url:e.baseURL+"/sdk/realtimeTokenRequests",method:"POST",body:{deviceType:"browser",browserType:w()},headers:m(h({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":e.apiKey,"X-ENGAGESPOT-USER-ID":e.userId},e.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":e.userSignature}),{"X-ENGAGESPOT-DEVICE-ID":e.deviceId})})];case 1:return[2,t.sent()]}}))}))()}},{key:"realtimeConnect",value:function(){var e,t=this,n=this;this.realtimeClient=new o.Realtime({authCallback:(e=c((function(e,t){var r,i;return b(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,n._createTokenRequest()];case 1:return r=e.sent(),t("",r),[3,3];case 2:return i=e.sent(),n._log(i),t(i,""),[3,3];case 3:return[2]}}))})),function(t,n){return e.apply(this,arguments)})}),this.realtimeClient.connection.once("connected",(function(){t._log("Subscribing to "+t.apiKey+"_"+t.userId),t.realtimeClient.channels.get(t.apiKey+"_"+t.userId).subscribe((function(e){t.handleIncomingRealtimeMessage(e)}))}))}},{key:"handleIncomingRealtimeMessage",value:function(e){if(this._log(e),"NEW_NOTIFICATION"===e.name){var t=new I(this,{id:e.data.notification.id,title:e.data.notification.title,message:e.data.notification.description,icon:e.data.notification.icon,data:e.data.notification.data,url:e.data.notification.url,createdAt:e.data.notification.created_at}),n=0;this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.forEach((function(e){e(t),n++})),this._log("Published to "+n+" listeners")}"NOTIFICATION_DELETED"===e.name&&this.eventListenerStore.NOTIFICATION_DELETED.forEach((function(t){t(e.data.notification.id)})),"NOTIFICATION_CLICKED"===e.name&&this.eventListenerStore.NOTIFICATION_CLICKED.forEach((function(t){t(e.data.notification.id)})),"NOTIFICATION_SEEN"===e.name&&this.eventListenerStore.NOTIFICATION_SEEN.forEach((function(t){t(e.data.notification.id)}))}},{key:"listenForWebPushPermissionChanges",value:function(){var e=this;this.isWebPushSupported()?navigator.permissions.query({name:"notifications"}).then((function(t){t.onchange=function(t){var n=t.target.state;e.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.forEach((function(e){e(n)}))}})):this._log("Web push is not supported in this browser")}},{key:"getNotificationList",value:function(){return new x(this)}},{key:"markAsRead",value:function(e){var t=this;return c((function(){return b(this,(function(n){switch(n.label){case 0:return[4,t._resolveInstanceState()];case 1:return n.sent(),[2,new I(t,{id:e}).markAsClicked()]}}))}))()}},{key:"deleteNotification",value:function(e){var t=this;return c((function(){return b(this,(function(n){switch(n.label){case 0:return[4,t._resolveInstanceState()];case 1:return n.sent(),[2,new I(t,{id:e}).delete()]}}))}))()}},{key:"httpsWebPushSubscribe",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:return[4,e._resolveInstanceState()];case 1:return n.sent(),e.isWebPushSupported()?[4,e.getWebPushRegistrationState()]:(e._log("Web push is not supported in this browser"),[2]);case 2:return 2==n.sent()?[3,6]:[4,e.askWebPushPermission()];case 3:return"granted"!==n.sent()?(e._log("Web push permission was not granted."),[2]):[4,e.getWebPushSubscription(e.publicKey)];case 4:return t=n.sent(),[4,e.attachPushSubscription(t)];case 5:n.sent(),n.label=6;case 6:return[2]}}))}))()}},{key:"getServiceWorkerRegistration",value:function(){var e=this;return c((function(){return b(this,(function(t){switch(t.label){case 0:return e._log("getServiceWorkerRegistration called"),e.isWebPushSupported()?[4,fetch(e.SERVICE_WORKER_URL)]:[2,(e._log("Web push is not supported in this browser"),null)];case 1:if(200!==t.sent().status)throw"ES1004 - Engagespot SDK initialization failed. Service worker missing: No file found at /service-worker.js";return[2,(window.navigator.serviceWorker.register(e.SERVICE_WORKER_URL,{updateViaCache:"none"}),window.navigator.serviceWorker.ready)]}}))}))()}},{key:"askWebPushPermission",value:function(){return c((function(){return b(this,(function(e){return[2,new Promise((function(e,t){var n=Notification.requestPermission((function(t){e(t)}));n&&n.then(e,t)}))]}))}))()}},{key:"getWebPushSubscription",value:function(e){var t=this;return c((function(){var e;return b(this,(function(n){switch(n.label){case 0:if(!t.serviceWorkerRegistration)throw new Error("ES1005 - A service worker must be registered before push can be subscribed");n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t.publicKey})];case 2:return[2,n.sent()];case 3:return e=n.sent(),[2,Promise.reject(e)];case 4:return[2]}}))}))()}},{key:"clearWebPushSubscription",value:function(){return c((function(){return b(this,(function(e){return[2,navigator.serviceWorker.ready.then((function(e){return e.pushManager.getSubscription()})).then((function(e){e&&e.unsubscribe()}))]}))}))()}},{key:"getPreferences",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:return[4,e._resolveInstanceState()];case 1:return n.sent(),t=e.baseURL+"/preferences",[4,e.apiRequestv2.get(t)];case 2:return[2,n.sent()]}}))}))()}},{key:"setPreferences",value:function(e){var t=this;return c((function(){var n,r;return b(this,(function(i){switch(i.label){case 0:return[4,t._resolveInstanceState()];case 1:return i.sent(),n=t.baseURL+"/preferences",r={preference:e},t._log("setPreferences - Trying to send body"),t._log(r),[4,t.apiRequestv2.patch(n,r)];case 2:return[2,(i.sent(),t)]}}))}))()}},{key:"setProfileAttributes",value:function(e){var t=this;return c((function(){var n;return b(this,(function(r){switch(r.label){case 0:return n=t.baseURL+"/profile",[4,t.apiRequestv2.put(n,e)];case 1:return[2,(r.sent(),t)]}}))}))()}},{key:"getCategories",value:function(){var e=this;return c((function(){var t;return b(this,(function(n){switch(n.label){case 0:return t=e.baseURL+"/categories",[4,e.apiRequestv2.get(t)];case 1:return[2,n.sent()]}}))}))()}},{key:"baseURL",get:function(){return null!==this.endPoint?this.endPoint:E.apiHost}},{key:"getWebPushRegistrationState",value:function(){var e=this;return c((function(){return b(this,(function(t){switch(t.label){case 0:return[4,e._resolveInstanceState()];case 1:return[2,(t.sent(),e.isWebPushSupported()?"denied"===Notification.permission?2:"granted"===Notification.permission?1:0:2)]}}))}))()}},{key:"attachPushSubscription",value:function(e){var t=this;return c((function(){return b(this,(function(n){switch(n.label){case 0:return[4,t._resolveInstanceState()];case 1:return[2,(n.sent(),fetch(t.baseURL+"/devices/"+t.deviceId+"/webPushSubscription",{method:"POST",cache:"no-cache",body:JSON.stringify(e),headers:{"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t.apiKey,"X-ENGAGESPOT-USER-ID":t.userId,"X-ENGAGESPOT-USER-SIGNATURE":t.userSignature,"X-ENGAGESPOT-DEVICE-ID":t.deviceId}}).then((function(e){return t._log("Push subscription attached"),e.json()})).then((function(e){return!0})).catch((function(e){var t=new Error("ES1006 - Failed to register push notification with Engagespot server - "+e);Promise.reject(t)})))]}}))}))()}},{key:"createNewDevice",value:function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));return this.isNative||localStorage.setItem("_engagespotDeviceId",e),e}},{key:"getDeviceId",value:function(){return this.isNative?localStorage.getItem("_engagespotDeviceId"):null}},{key:"onNotificationReceive",value:function(e){return this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.push(e),!0}},{key:"onNotificationClick",value:function(e){return this.eventListenerStore.NOTIFICATION_CLICKED.push(e),!0}},{key:"onNotificationDelete",value:function(e){return this.eventListenerStore.NOTIFICATION_DELETED.push(e),!0}},{key:"onNotificationSee",value:function(e){return this.eventListenerStore.NOTIFICATION_SEEN.push(e),!0}},{key:"onWebPushPermissionChange",value:function(e){return this.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.push(e),!0}},{key:"_log",value:function(e){this.debug&&l.log("[Engagespot-Core] ",e)}}]),e}();y(A,"isReady",!1);var T=A,$=n(8615),O=n(23440),D=n(63403),L=n(88454),M=(n(17827),n(71464)),B=n(74387),z=n(30138),F=Object.defineProperty,_=Object.defineProperties,j=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>{for(var n in t||(t={}))U.call(t,n)&&G(e,n,t[n]);if(W)for(var n of W(t))Z.call(t,n)&&G(e,n,t[n]);return e},K=(e,t)=>_(e,j(t)),V=(e,t)=>{var n={};for(var r in e)U.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&W)for(var r of W(e))t.indexOf(r)<0&&Z.call(e,r)&&(n[r]=e[r]);return n};function X(e){let t=e,{userId:n,apiKey:r}=t,i=V(t,["userId","apiKey"]),a=null!=e.core&&(e.core.userId!==e.userId||e.core.apiKey!==e.apiKey);return(!e.core||a)&&n&&r&&(e.core=function(e,t,n){return new T(e,K(H({},n),{userId:t}))}(r,n,H({},i))),a}var q=e=>(0,$.Z)(new Date(e),new Date,{addSuffix:!0}),Y={format:O.Z,formatDistance:$.Z,formatRelative:D.Z,subDays:L.Z};function J(e){return t=>K(H({},t),{created:e((null==t?void 0:t.createdAt)??"",Y)})}var Q={Init:"Init"},ee=(e,t)=>({type:e,payload:H({},t)}),te={page:1,data:[],rawData:[],hasMore:!1,unreadCount:0,webPushData:{},preferences:{channels:[],userPreferences:{}}};Q.SetData="SetData",Q.DeleteNotification="DeleteNotification",Q.SetUnreadCount="SetUnreadCount",Q.IncrementUnreadCount="IncrementUnreadCount",Q.DecrementUnreadCount="DecrementUnreadCount",Q.AddNotification="AddNotification",Q.MarkAsRead="MarkAsRead",Q.MarkAllAsSeen="MarkAllAsSeen",Q.SetPreferences="SetPreferences",Q.SetCategories="SetCategories",Q.SetInitialPreferences="SetInitialPreferences";var ne=function(e,t,n,r){var i,a,o,l,s,c,u;let d=J(r.formatDate||q),p=e=>H({},d(e));if(t.type===Q.Init)return te;if(t.type===Q.SetData){let n=null==(i=t.payload)?void 0:i.result,r=n.data.map(p),a=1==n.currentPage?{itemsPerPage:n.itemsPerPage,totalCount:n.totalCount,totalPages:n.totalPages,unreadCount:n.unreadCount}:{},o=e.rawData.concat([K(H({},n),{notifications:r})]);return delete o.data,K(H(K(H({},e),{currentPage:n.currentPage}),a),{rawData:o})}if(t.type===Q.DeleteNotification){let n=e.rawData,r=null==(a=t.payload)?void 0:a.notificationId,i=n.map(((e,t)=>{let n=e.notifications.findIndex((e=>e.id===r));if(n<0)return e;let i=[...e.notifications];return i.splice(n,1),K(H({},e),{notifications:i})}));return K(H({},e),{rawData:i})}if(t.type===Q.SetUnreadCount)return K(H({},e),{unreadCount:null==(o=t.payload)?void 0:o.unreadCount});if(t.type===Q.IncrementUnreadCount)return K(H({},e),{unreadCount:e.unreadCount+1});if(t.type===Q.DecrementUnreadCount)return K(H({},e),{unreadCount:e.unreadCount-1});if(t.type===Q.AddNotification){let n=e.rawData,r=[{notifications:[p(null==(l=t.payload)?void 0:l.notification)]}].concat(n);return K(H({},e),{rawData:r})}if(t.type===Q.MarkAsRead){let n=e.rawData,r=null==(s=t.payload)?void 0:s.notificationId,i=n.map(((e,t)=>{let n=e.notifications.map((e=>e.id!==r||e.clickedAt?e:K(H({},e),{clickedAt:(new Date).toUTCString()})));return K(H({},e),{notifications:n})}));return K(H({},e),{rawData:i})}if(t.type===Q.SetInitialPreferences){let n=null==(c=t.payload)?void 0:c.preferences;return K(H({},e),{preferences:H({},n)})}if(t.type===Q.SetPreferences){let n=null==(u=t.payload)?void 0:u.preferences,r=e.preferences.userPreferences.map((e=>{var t;let r=n.find((t=>e.category.id===t.categoryId));if(!r)return e;let i=H({},e);return null==(t=null==r?void 0:r.channels)||t.forEach((e=>{var t=e.channel;i.channels[t].enabled=Boolean(e.enabled)})),i}));return K(H({},e),{preferences:K(H({},e.preferences),{userPreferences:r})})}return e},re=function(e,t,n){let r=J(n.formatDate||q),i=e=>H({},r(e));return e.map((e=>K(H({},e),{notifications:e.notifications.map(i)})))};function ie(e){e.stateReducers.push(ne),e.dataTransformer.push(re),e.useInstance.push(ae)}function ae(e){let t=e.events,n=(0,r.useCallback)((t=>{e.core.deleteNotification(t),e.dispatch(ee(Q.DeleteNotification,{notificationId:t}))}),[]),i=(0,r.useCallback)((t=>{e.core.markAsRead(t),e.dispatch(ee(Q.MarkAsRead,{notificationId:t}))}),[]),a=(0,r.useCallback)((()=>{e.core.getNotificationList().markAllAsSeen(),e.dispatch(ee(Q.MarkAllAsSeen))}),[]);(0,r.useEffect)((()=>{!async function(){(t=>{e.dispatch({type:Q.SetData,payload:{result:t}})})(await e.core.getNotificationList().fetch(e.reducerState.page||1))}()}),[e.reducerState.page,e.apiKey,e.userId]),(0,r.useEffect)((()=>{e.core.onNotificationReceive((n=>{var r;e.dispatch(ee(Q.AddNotification,{notification:n})),null==(r=null==t?void 0:t.onNotificationReceive)||r.call(t,n)})),e.core.onNotificationDelete((n=>{var r;e.dispatch(ee(Q.DeleteNotification,{notificationId:n})),null==(r=null==t?void 0:t.onNotificationDelete)||r.call(t,n)})),e.core.onNotificationClick((n=>{var r;e.dispatch(ee(Q.MarkAsRead,{notificationId:n})),null==(r=null==t?void 0:t.onNotificationClick)||r.call(t,n)})),e.core.onNotificationSee((e=>{var n;null==(n=null==t?void 0:t.onNotificationSee)||n.call(t,e)})),async function(){if(!e.apiKey||!e.userId||!await e.core.isReady())return;let t=e.core.enabledChannels,n=t.map((t=>e.core.supportedChannels[t])),r=await e.core.getPreferences();var i=(await e.core.getCategories()).map((e=>{var n;let i={category:e,channels:{}},a=r.find((e=>i.category.id===e.category.id));return Object.assign(i,a||{}),t.forEach((e=>{let t=!1,n=r.find((t=>t.channel===e));(!a||!n)&&(t=!0),i.channels[e]={enabled:t}})),null==(n=null==i?void 0:i.channelPreferences)||n.forEach((e=>{var n=e.channel;!t.includes(n)||(i.channels[n].enabled=Boolean(e.enabled))})),null==i||delete i.channelPreferences,i}));e.dispatch(ee(Q.SetInitialPreferences,{preferences:{userPreferences:i,channels:n}}))}()}),[e.apiKey,e.userId]);Object.assign(e,{notifications:e.reducerState.data,unreadCount:e.reducerState.unreadCount,preferences:e.reducerState.preferences,setPreferences:t=>{e.core.setPreferences(t),e.dispatch(ee(Q.SetPreferences,{preferences:t}))},getCategories:e.core.getCategories,deleteNotification:n,markAsRead:i,markAllAsSeen:a})}function oe(e){let t=(0,r.useRef)();return t.current=e,(0,r.useCallback)((()=>t.current),[])}ie.pluginName="useNotifications";function le(e){var t,n;let i=function(e){let t=e,{formatDate:n=q,stateReducer:r=((e,t,n)=>e),dataTransformer:i=((e,t)=>e),plugins:a=[]}=t,o=V(t,["formatDate","stateReducer","dataTransformer","plugins"]),l=[ie,...a];return e=H({formatDate:n,plugins:l,stateReducer:r,dataTransformer:i},o),e=l.flatMap((e=>e.applyDefaults?e.applyDefaults:[])).reduce(((e,t)=>t(e)),e),e}(e),a=i,{apiKey:o,userId:l,plugins:s,stateReducer:c,dataTransformer:u}=a,d=(V(a,["apiKey","userId","plugins","stateReducer","dataTransformer"]),oe((0,r.useRef)({}).current));Object.assign(d(),K(H({},i),{plugins:s,hooks:{stateReducers:[],dataTransformer:[],useInstance:[]}}));let p=X(d());s.filter(Boolean).forEach((e=>{let t=d().hooks;t&&e(t)}));let f=oe(d().hooks);d().getHooks=f,delete d().hooks;let h=oe(c),m=(0,r.useCallback)(((e,t)=>{if(!t.type)throw z.info({action:t}),new Error("Unknown Action \ud83d\udc46");let n=h();return[...f().stateReducers,...Array.isArray(n)?n:[n]].reduce(((n,r)=>r(n,t,e,d())||n),e)}),[f,h,d]),[g,b]=(0,r.useReducer)(m,void 0,(()=>m(te,{type:Q.Init,payload:{instance:d()}})));p&&b({type:Q.Init,payload:{instance:d()}}),Object.assign(d(),{reducerState:g,dispatch:b}),Object.assign(d(),{hideBranding:null==(t=d().core)?void 0:t.hideBranding}),function(e,t,n){void 0===n&&(n={}),e.forEach((e=>{e(t,n)}))}(null==(n=f())?void 0:n.useInstance,d());let v=oe(u),y=(0,r.useCallback)((e=>[...f().dataTransformer,...Array.isArray(v())?v():[v()]].reduce(((t,n)=>n(t,e,d())),e)),[f,v]);return Object.assign(d(),{notifications:y(d().reducerState.rawData)}),d()}function se(e){void 0===e&&(e=300);let[t,n]=(0,r.useState)(!1);return{jumpToTop:function(e){null==e||e.scrollTo({top:0,left:0,behavior:"smooth"})},onNotificationScroll:function(t){var r;(null==(r=t.currentTarget)?void 0:r.scrollTop)>e?n(!0):n(!1)},showJumpToTop:t}}function ce(e,t){if(t.type===Q.SetData){let t=e.page,n=e.totalPages;return K(H({},e),{hasMore:t<n})}return t.type===Q.SetPage?K(H({},e),{page:t.payload.page}):t.type===Q.IncrementPage?K(H({},e),{page:e.page+1}):t.type===Q.SetHasMore?K(H({},e),{page:e.page+1,hasMore:t.payload.hasMore}):t.type===Q.SetLoadRef?K(H({},e),{loaderRef:t.payload.loaderRef}):e}function ue(e,t){return e.flatMap((e=>e.notifications))}function de(e){e.stateReducers.push(ce),e.dataTransformer.push(ue),e.useInstance.push(pe)}function pe(e){let t=e.scrollRoot,n=e.reducerState.page,i=e.reducerState.loaderRef,a=((0,r.useCallback)((t=>e.dispatch({type:Q.SetPage,payload:{page:t}})),[n]),(0,r.useCallback)((()=>e.dispatch({type:Q.IncrementPage})),[])),o=(0,r.useCallback)((t=>{e.dispatch({type:Q.SetLoadRef,payload:{loaderRef:t}})}),[]);(0,r.useEffect)((()=>{if(!i)return;let e=0;let n=new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting&&t.intersectionRatio>=e&&a(),e=t.intersectionRatio}))}),{root:t,rootMargin:"0px 0px 0px 0px",threshold:.3});return i&&n.observe(i),()=>n.disconnect()}),[i]),Object.assign(e,{hasMore:e.reducerState.hasMore,setLoaderRef:o})}Q.SetPage="SetPage",Q.IncrementPage="IncrementPage",Q.SetHasMore="SetHasMore",Q.SetLoadRef="SetLoadRef",de.pluginName="useInfiniteScroll";var fe="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3";var he=null,me="(1) New Notification Received";Q.SetWebPushData="SetWebPushData";var ge=function(e,t){return t.type===Q.SetWebPushData?K(H({},e),{webPushData:H(H({},e.webPushData),t.payload)}):e};function be(e){e.stateReducers.push(ge),e.useInstance.push(ve)}function ve(e){var t,n,i,a;let o=e.core.enableWebPush&&e.core.isWebPushSupported(),l=(0,r.useCallback)((()=>{e.core.httpsWebPushSubscribe()}),[]),s=null==(n=null==(t=e.reducerState)?void 0:t.webPushData)?void 0:n.webPushState,c=null==(a=null==(i=e.reducerState)?void 0:i.webPushData)?void 0:a.notificationPermissionState,u=t=>{e.dispatch({type:Q.SetWebPushData,payload:t})};(0,r.useEffect)((()=>{e.core.onWebPushPermissionChange((e=>{u({webPushState:e})})),e.core.onNotificationReceive((t=>{e.disableNotificationChime||async function(e){new Audio(e).play().catch((e=>{}))}(e.notificationChimeSrc),e.disableTitleUpdate||function(e){if(he)return;let t=document.title;document.title=e,he=setTimeout((()=>{document.title=t,he=null}),5e3)}(e.titleUpdateText)})),async function(){let t=await e.core.getWebPushRegistrationState(),n="denied";t===N.PERMISSION_GRANTED?(n="granted",e.core.httpsWebPushSubscribe()):t===N.PERMISSION_DENIED?n="denied":t===N.PERMISSION_REQUIRED&&(n="prompt"),u({webPushState:n,notificationPermissionState:t})}()}),[e.apiKey,e.userId]),Object.assign(e,{allowWebPush:o,enableWebPush:l,webPushState:s,notificationPermissionState:c})}be.pluginName="useBrowserWebPush",be.applyDefaults=function(e){let t=e,{disableNotificationChime:n=!0,notificationChimeSrc:r=fe,disableTitleUpdate:i=!1,titleUpdateText:a=me}=t;return V(t,["disableNotificationChime","notificationChimeSrc","disableTitleUpdate","titleUpdateText"]),K(H({},e),{disableNotificationChime:n,notificationChimeSrc:r,disableTitleUpdate:i,titleUpdateText:a})};var ye={placement:"bottom-end",preventOverflow:!0,enableArrow:!0,offset:[0,10]};we.pluginName="useFloatingNotification",we.applyDefaults=function(e){let t={panelOpenByDefault:!1,placementOptions:ye,enableFloatingPanel:!0},n=e,{floatingPanelOptions:{panelOpenByDefault:r=!1,placementOptions:i=ye,enableFloatingPanel:a=!1}=t}=n,o=V(n,["floatingPanelOptions"]);return H({floatingPanelOptions:{panelOpenByDefault:r,placementOptions:i,enableFloatingPanel:a}},o)},Q.SetPanelVisibility="SetPanelVisibility",Q.TogglePanelVisibility="TogglePanelVisibility";var Ee=function(e,t,n,r){var i;return t.type===Q.Init?K(H({},e),{panelVisibility:r.floatingPanelOptions.panelOpenByDefault}):t.type===Q.SetPanelVisibility?K(H({},e),{panelVisibility:null==(i=t.payload)?void 0:i.panelVisibility}):t.type===Q.TogglePanelVisibility?K(H({},e),{panelVisibility:!e.panelVisibility}):t.type===Q.AddNotification?K(H({},e),{unreadCount:r.reducerState.panelVisibility?e.unreadCount:e.unreadCount+1}):t.type===Q.MarkAllAsSeen?K(H({},e),{unreadCount:0}):e};function we(e){e.stateReducers.push(Ee),e.useInstance.push(ke)}function ke(e){let t=e.floatingPanelOptions.placementOptions,n=(0,B.Z)("(max-width: 768px)"),i=(0,r.useRef)(null),a=(0,r.useRef)(null),o=(0,r.useRef)(null),l=e.reducerState.panelVisibility,s=(0,r.useCallback)((()=>{e.reducerState.panelVisibility||e.markAllAsSeen(),e.dispatch({type:Q.TogglePanelVisibility})}),[e]),{styles:c,attributes:u,update:d}=(0,M.D)(i.current,a.current,{placement:null==t?void 0:t.placement,modifiers:[{name:"preventOverflow",enabled:null==t?void 0:t.preventOverflow},{name:"offset",enabled:!0,options:{offset:null==t?void 0:t.offset}},{name:"arrow",enabled:null==t?void 0:t.enableArrow,options:{element:o.current}}]});function p(t){var n,r;(null==(n=a.current)?void 0:n.contains(t.target))||(null==(r=i.current)?void 0:r.contains(t.target))||e.reducerState.panelVisibility&&s()}(0,r.useEffect)((()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),[]),(0,r.useEffect)((()=>{e.core.onNotificationReceive((t=>{e.reducerState.panelVisibility&&e.markAllAsSeen()}))}),[e.apiKey,e.userId]);let f={styles:{popper:{position:"fixed",top:0,left:0,zIndex:99999999999999,width:"100%",height:"100%"},offset:{height:"100%",width:"100%",borderRadius:"0"},arrow:{display:"none"}},attributes:{popper:{}}},h=()=>{s(),null==d||d()};Object.assign(e,{isMobile:n,togglePanelVisibility:s,panelVisibility:l,getButtonProps:()=>({onClick:h,ref:i}),getArrowProps:()=>({ref:o,style:n?f.styles.arrow:K(H({},c.arrow),{display:l&&(null==t?void 0:t.enableArrow)?"block":"none"})}),getPanelOffsetProps:()=>({style:n&&l?f.styles.offset:c.offset}),getPanelProps:()=>({ref:a,style:n&&l?f.styles.popper:K(H({},c.popper),{zIndex:999999999999999}),attributes:n&&l?f.attributes.popper:u.popper}),useJumpToTop:se})}var Pe=n(45392),Se=n(18412),Ce=n.n(Se),Ie=n(8429),xe=n(24308),Ne=n(31542),Re=n(30138),Ae=Object.defineProperty,Te=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Me=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))De.call(t,n)&&Me(e,n,t[n]);if(Oe)for(var n of Oe(t))Le.call(t,n)&&Me(e,n,t[n]);return e},ze=(e,t)=>Te(e,$e(t)),Fe={colors:{brandingPrimary:"rgb(0,191,166)",colorPrimary:"#282c34",colorSecondary:"#686868"},panel:{boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",width:"30rem",height:"40rem",borderBottomLeftRadius:"11px",borderBottomRightRadius:"11px",borderTopLeftRadius:"11px",borderTopRightRadius:"11px",arrowSize:"10px",arrowInset:"-5px auto auto 0"},feed:{background:"white",placeholderTextColor:"#2c2c2c",height:"30rem",placeholderTextSize:"1rem",placeholderMargin:"1rem 0 0 0",placeholderFontWeight:"300"},feedItem:{border:"1px solid #edf4f2",background:"white",notificationDot:"green",hoverBackground:"#edf4f2",headerColor:"#1c1c1c",descriptionColor:"#464646",dateColor:"#888888",placeHolderBackground:"rgb(230, 230, 230)",placeHolderGradient:"linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%)",height:"30rem",padding:"0.5rem 0.7rem 0.5rem 0.7rem",placeholderTextSize:"1rem",notificationDotSize:".5rem",imageSize:"4.5rem",imageRadius:"50%",hoverTransition:"all 0.2s",textContentPadding:"0 .5rem 0 0",textContentMargin:"0 auto 0 1.2rem",headerFontWeight:"400",headerSize:".9rem",headerPadding:"0 0 0.3rem 0",descriptionSize:"0.8rem",descriptionPadding:"0 0 0.3rem 0",dateSize:".7rem",menuMargin:"0 1rem 0 0"},notificationButton:{background:"transparent",hoverBackground:"rgba(0,191,166, .2)",iconFill:"#edf4f2",floatingButtonShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1.5rem",outline:"none",margin:"0",padding:"5px",borderWidth:"0",normalButtonRadius:"5px",floatingButtonRadius:"50%",transition:"all .2s"},unreadBadgeCount:{background:"red",color:"white",borderRadius:"50%",fontSize:".6rem",inset:"-4px -4px auto auto",size:"1rem"},headerDropdown:{iconFill:"white",background:"transparent",hoverBackground:"",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".6rem",iconHeight:".7rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},dropdown:{iconFill:"#888888",background:"transparent",hoverBackground:"rgb(230, 230, 230)",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".5rem",iconHeight:".6rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},jumpToTop:{background:"white",iconFill:"#888888",shadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1rem",inset:"1.5rem 7rem auto auto",borderRadius:"50%",padding:"0.7rem",margin:"0",transition:"all ease-in-out 0.5s"},header:{fontColor:"white",closeButtonBackground:"transparent",fontSize:"1rem",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",closeButtonOutline:"none",closeButtonPadding:"5px",closeButtonFontSize:"1.6rem",closeButtonMargin:"0"},footer:{background:"white",fontColor:"#484848",preferenceButtonColor:"#484848",border:"1px solid rgb(230, 230, 230)",preferenceButtonHoverBackground:"rgb(230, 230, 230)",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",fontSize:"0.8rem",linkMargin:"0 0.5rem 0 auto",linkSize:"1.5rem",preferenceButtonMargin:"0 0 0 auto",preferenceButtonSize:"1.2rem",preferenceButtonPadding:".2rem",preferenceButtonHoverTransition:"all 0.2s",linkRadius:"3px"},toggle:{background:"rgba(196, 195, 195, 0.55)",activeColor:"#16a085",dotColor:"rgb(255, 255, 255);"},preference:{fontColor:"#1c1c1c",background:"white",height:"30rem",fontWeight:"400",padding:"1.2rem 1.5rem 1.2rem 1.5rem"},preferenceModal:{overlayBackground:"#2b2b2b",headingColor:"#1c1c1c",background:"rgba(255, 255, 255, 0.8)",closeButtonColor:"#bbb9b9",textPrimaryColor:"#1c1c1c",textSecondaryColor:"#525252",buttonPrimaryColor:"white",buttonPrimaryBackgroundColor:"#1abc9c",buttonPrimaryHoverBackgroundColor:"#1a9c82",buttonSecondaryColor:"#4e4e4e",buttonSecondaryBackgroundColor:"transparent",buttonSecondaryHoverBackgroundColor:"#cfcfcf",overlayOpacity:".6",height:"35%",backdropFilter:"blur(1px)",borderRadius:"1.5rem 1.5rem 0 0",padding:"1.2rem 2rem 1.2rem 2rem",textAlign:"center",headerMargin:"0 2rem",headerFontSize:"1rem",closeButtonSize:".6rem",textPrimaryMargin:"0.5rem 2rem",textPrimaryFontSize:".9rem",textSecondaryMargin:"1rem 0 0 0",textSecondaryFontSize:".8rem",primaryButtonFontWeight:"600",primaryButtonPadding:"0.6rem 4.5rem",primaryButtonBorderRadius:"10px",primaryButtonMargin:"0.6rem 0 0.2rem 0",primaryButtonTransition:"all 0.2s"}};function _e(e){return void 0===e&&(e={}),Ce()(Fe,e)}var je=(0,r.createContext)({}),We=()=>(0,r.useContext)(je);function Ue(e){let{theme:t,state:n,children:i}=e;return r.createElement(je.Provider,{value:n},r.createElement(Pe.f6,{theme:_e(t)},i))}var Ze=Pe.ZP.div``,Ge=Pe.ZP.div`
  && {
    display: ${e=>{let{visible:t}=e;return t?"flex":"none"}};
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${e=>{let{theme:t}=e;return t.colors.colorPrimary}};
    border-bottom-left-radius: ${e=>{let{theme:t}=e;return t.panel.borderBottomLeftRadius}};
    border-bottom-right-radius: ${e=>{let{theme:t}=e;return t.panel.borderBottomRightRadius}};
    border-top-left-radius: ${e=>{let{theme:t}=e;return t.panel.borderTopLeftRadius}};
    border-top-right-radius: ${e=>{let{theme:t}=e;return t.panel.borderTopRightRadius}};
    flex-direction: column;
    overflow: hidden;
    height: ${e=>{let{theme:t}=e;return t.panel.height}};
    box-shadow: ${e=>{let{theme:t}=e;return t.panel.boxShadow}};
    width: ${e=>{let{theme:t}=e;return t.panel.width}};
    align-items: stretch;
    justify-content: flex-start;
    position: relative;
  }
`,He=Pe.ZP.div`
  && {
    ${e=>{let{theme:{panel:t,colors:n}}=e;return Pe.iv`
      position: absolute;
      width: ${t.arrowSize};
      height: ${t.arrowSize};

      &:after {
        content: ' ';
        transform: rotate(45deg);
        width: ${t.arrowSize};
        height: ${t.arrowSize};
        position: absolute;
        inset: ${t.arrowInset};
        background-color: ${n.brandingPrimary};
      }
    `}}
  }
`,Ke=Pe.ZP.div`
  && {
    ${e=>{let{theme:{header:t,colors:n,preference:r}}=e;return Pe.iv`
      display: flex;
      height: ${t.height};
      align-items: center;
      justify-content: flex-start;
      padding: ${t.padding};
      font-size: ${t.fontSize};
      color: ${t.fontColor};
      background: ${n.brandingPrimary};
      box-sizing: border-box;
    `}}
  }
`,Ve=Pe.ZP.h3`
  && {
    ${e=>{let{theme:{header:t}}=e;return Pe.iv`
      font-size: ${t.fontSize};
      font-weight: ${t.fontWeight};
      color: ${t.fontColor};
      padding-left: 0.5rem;
      margin-right: auto;
    `}}
  }
`,Xe=Pe.ZP.button`
  && {
    ${e=>{let{theme:{header:t}}=e;return Pe.iv`
      border-width: 0;
      margin: ${t.closeButtonMargin};
      position: relative;
      padding: ${t.closeButtonPadding};
      color: ${t.fontColor};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${t.closeButtonBackground};

      &:hover {
      }

      svg {
        fill: white;
        stroke: none;
        height: 12px;
        width: 12px;
      }
    `}}
  }
`;function qe(e){let{children:t}=e;return r.createElement(Ke,null,t)}var Ye=Pe.ZP.div`
  && {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    height: ${e=>{let{theme:t}=e;return t.feed.height}};
    align-items: ${e=>{let{empty:t}=e;return t?"center":"stretch"}};
    justify-content: ${e=>{let{empty:t}=e;return t?"center":"flex-start"}};
    background: ${e=>{let{theme:t}=e;return t.feed.background}};

    path[data-name='Path 154'] {
      fill: ${e=>{let{theme:t}=e;return t.colors.brandingPrimary}};
    }
  }
`,Je=Pe.ZP.p`
  && {
    ${e=>{let{theme:t}=e;return Pe.iv`
      font-size: ${t.feed.placeholderTextSize};
      margin: ${t.feed.placeholderMargin};
      font-weight: ${t.feed.placeholderFontWeight};
      color: ${t.feed.placeholderTextColor};
    `}}
  }
`,Qe=Pe.ZP.div`
  && {
    ${e=>{let{theme:t}=e;return Pe.iv`
      position: absolute;
      inset: ${t.jumpToTop.inset};
    `}}
  }
`;function et(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 1100",width:"50%"},r.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M92.8 863.1S55.4 820 33.3 766.2c-22.1-53.8-10.8-102.6 6.2-113.4 17-10.8 57.3 45.4 59.5 95.8 2.3 50.5 0 114.5 0 114.5h-6.2Z",fill:"#52CB96",fillRule:"nonzero"}),r.createElement("path",{d:"M96.2 863.1s-34-203.5-17.6-297.6c16.4-94.1 54.4-91.3 74.8-78.2 20.4 13.1 43.7 79.4 13.6 195.6-30 116.2-59 180.3-59 180.3H96.2v-.1Z",fill:"#37B37F",fillRule:"nonzero"}),r.createElement("path",{stroke:"#FFF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m104.7 863.1 23.1-273.7M96.2 863.1 60.5 727.8"}),r.createElement("path",{d:"M643.6 307.8s39.1-96.6 174.1-60.9c135 35.7 144.5 221.8 208.9 277.3 64.4 55.4 205.9 56.8 196.8 189.3-9.1 132.5-216.3 18-320.8 23.7-317.8 17.3-387 177.4-599.5 87.1-142.2-60.4-100.1-229.2 35.6-279.5 135.7-50.3 240.3-88.8 304.9-237Z",fill:"#F1F2F7",fillRule:"nonzero"}),r.createElement("ellipse",{fill:"#283444",fillRule:"nonzero",cx:557.1,cy:933.1,rx:143.2,ry:61.8}),r.createElement("path",{d:"M568.4 921.7s-3.7 4.5-13.6 4.5c-9.9 0-13.6-4.5-13.6-4.5v-127h27.2v127ZM22.8 863.1C8.8 880.3.4 902.2.4 926.1c0 55 44.6 99.7 99.7 99.7s99.7-44.6 99.7-99.7c0-23.9-8.4-45.8-22.4-63H22.8Z",fill:"#CED5E5",fillRule:"nonzero"}),r.createElement("path",{d:"M908.3 827.6v206.6c0 25.5 63.6 46.1 142 46.1s142-20.6 142-46.1V827.6h-284Z",fill:"#FFB3DA",fillRule:"nonzero"}),r.createElement("ellipse",{fill:"#ED85C3",fillRule:"nonzero",cx:1050.3,cy:827.6,rx:142,ry:67.2}),r.createElement("path",{d:"M267.1 513.8s-2.6-50.2 39.1-66.3c41.7-16.2 155.6-26.4 222-6.8 66.3 19.6-14.6 58 105.4 171.8C743 716.2 802 683.9 866.6 715.4S802 838.7 674.4 836.2s-198.1-28.1-261.1-70.6C350.5 723 262.9 615.9 267.1 513.8Z",fill:"#283444",fillRule:"nonzero"}),r.createElement("path",{d:"M525.8 746.2s21.8 22.5 67 34.1c45.9 11.8 113.1 19.9 174.6 28.3 120.9 16.7 305.6 43.1 305.6 43.1l-2.8-32.3s-293-51.9-430.7-104.9L569 681.1s-26.3 7.2-43.2 65.1Z",fill:"#5900CC",fillRule:"nonzero"}),r.createElement("path",{d:"m665.2 658.5 401 175.9-12.1 33.6-410.3-151.8-66.4-21.6 7.2-19.2c.1 0 53.7-28.7 80.6-16.9Z",fill:"#5900CC",fillRule:"nonzero"}),r.createElement("path",{d:"m401.3 448.4-9.2 57s28.3 8.5 41.8 1.6c13.5-6.9 18.9-22.4 18.9-22.4s-10.3-1.4-23.2-31.3l-28.3-4.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),r.createElement("path",{stroke:"#CED5E5",strokeWidth:3,opacity:.3,strokeLinecap:"round",strokeLinejoin:"round",d:"M1524.1 941.8 337.8 252.7v-72.8L1404.2 29.1"}),r.createElement("path",{d:"M387.3 441.5s30.3 19 55.6 11.3c25.2-7.7-8.6-109.1-8.6-109.1s-14-22.6-49.5-14.1c-35.6 8.5-40.3 74.4 2.5 111.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),r.createElement("path",{d:"M394.7 489.7s-17.6 10.5-34.6 29.3c-8.7 9.6 29.3 74.4 73.5 130.7 42.1 53.7 90.3 99.1 90.3 99.1s31-44.6 69.5-63.9c38.6-19.3 74.5-27.2 74.5-27.2s-90.7-78.2-141-125.5l-33.6-53.3s-20.4-2.3-47.2 1.1c-.1.2-14.7 17.3-51.4 9.7Z",fill:"#FFC933",fillRule:"nonzero"}),r.createElement("path",{d:"M473.4 597.9s18.1-8.1 36.2-10.6c18.1-2.6 12.3 20.4 6.2 29.1-6.1 8.7-48.7 12.3-48.7 12.3s-8.9-5.3-6.3-13.3c2.6-8 5.7-13.9 12.6-17.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),r.createElement("path",{d:"M493.2 479.1s35.5 2 89.1 30.7l16 10.5s33.6 21.4 39 34.2c5.4 12.8-.3 25.2-6.4 30.9l-33-28.8-69.9-22.5-34.8-55ZM360 519c-5.7 8.1-11.3 18.3-16.1 31.1-19.3 51-19.3 93-15.5 97.1 3.8 4.2 52.2 6 139.1-18.1 0 0-7.6-8.7 6.4-32.1 0 0-54.8 6.8-94.1 9.4l9.4-34s4.2-29.9-12.9-43.5L360 519Z",fill:"#FFC933",fillRule:"nonzero"}),r.createElement("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m547 550.9-31.2-28.5"}),r.createElement("path",{d:"m491.9 654.7 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4l103.6-43.5c1.8-.8 5.4-.2 8.1 2.1 1 .9-1.6 1.2-1.8 2.7l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-102.1 54.8c-3.5 1.8-10.9-1.7-10-6.7Z",fill:"#CED5E5",fillRule:"nonzero"}),r.createElement("path",{d:"m495.8 656.5 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4L618 524.5c3.3-1.4 6.8 1.4 6.2 4.9l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-105.5 52.7c-3.3 1.7-7-1.1-6.5-4.7Z",fill:"#F1F2F7",fillRule:"nonzero"}),r.createElement("ellipse",{fill:"#CED5E5",fillRule:"nonzero",transform:"rotate(-67.61 568.994 588.443)",cx:568.994,cy:588.443,rx:13.6,ry:9.5}),r.createElement("path",{d:"M624.3 558.8s-22.2 6-27.2 8.7c-4.9 2.6-12.5 4.9-12.5 12.5s6.8 17.8 12.9 18.5c6 .8 28.2-6.3 33.4-13.2 5.2-6.9 4.5-28-6.6-26.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),r.createElement("path",{d:"M435.2 346.6s6.5-11.4-6.5-18.9c-13-7.5-54.2-16.6-72 24.8 0 0-16.7 3.7-11.3 34.9 5.4 31.2 42 54.1 42 54.1l-3.6-37 8.2-5.1-9.7-26.3c-.1.1 39.5-1.9 52.9-26.5Z",fill:"#8B34FF",fillRule:"nonzero"}),r.createElement("path",{d:"M385.3 409.5s-.9-8.5-8.9-11.6c-8-3.1-15 4-13.3 13.6 1.7 9.7 14.9 18.7 26.5 13.2l-4.3-15.2Z",fill:"#FFDFD7",fillRule:"nonzero"}),r.createElement("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m474 597-94.2 9.4 9.5-34M467.5 629.1l-40.6 9.6"}),r.createElement("path",{d:"M1070.2 819.4s1.9-22.9 11.7-40.3c9.8-17.4 23.6-20 23.6-20l-.8 92.6H1073l-2.8-32.3Z",fill:"#FFF",fillRule:"nonzero"}),r.createElement("path",{d:"M1065.5 836.4s12.2-21.2 29.4-33.6c17.2-12.4 31.4-8.8 31.4-8.8l-42.8 89-30-14.1 12-32.5Z",fill:"#FFF",fillRule:"nonzero"}),r.createElement("path",{stroke:"#8B34FF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m667.8 725.1 385.7 143.7 12.7-34.5-62.7-27.5"}),r.createElement("path",{d:"M1070.9 828.1s16.6-26 34.6-31.4",stroke:"#F1F2F7",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M258.6 273.1H38.1c-15.3 0-27.6-12.4-27.6-27.6v-58.4c0-15.3 12.4-27.6 27.6-27.6h220.5c15.3 0 27.6 12.4 27.6 27.6v58.4c0 15.3-12.3 27.6-27.6 27.6ZM126.7.2h13.6v159.3h-13.6z",stroke:"#FEAC00",fill:"#FFB3DA",fillRule:"nonzero"}),r.createElement("path",{d:"M339 256.2h-6.3c-22.1 0-39.9-17.9-39.9-39.9 0-22.1 17.9-39.9 39.9-39.9h6.3v79.8Z",fill:"#ED85C3",fillRule:"nonzero"}),r.createElement("path",{d:"m1524.1 941.8-118.1-153c-3.2-4.1-4.9-9.2-4.9-14.4v-740c0-4 3.8-6.9 7.7-5.8l112.8 32.5c5.7 1.6 9.6 6.8 9.6 12.7v865.6c-.1 3.7-4.8 5.3-7.1 2.4Z",fill:"#F1F2F7",fillRule:"nonzero"}),r.createElement("path",{fill:"#ED85C3",fillRule:"nonzero",d:"M100.1.2h67.3v20h-67.3z"})))}var tt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t},clickable:n}=e;return Pe.iv`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      cursor: ${n?"pointer":"unset"};
      justify-content: flex-start;
      padding: ${t.padding};
      border-bottom: ${t.border};
      background: ${t.background};
      font-family: sans-serif;
      line-height: normal;
      &:hover {
        transition: ${t.hoverTransition};
        background: ${t.hoverBackground};
      }
    `}}
  }
`,nt=Pe.ZP.img`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      height: ${t.imageSize};
      width: ${t.imageSize};
      flex-shrink: 0;
      border-radius: ${t.imageRadius};
    `}}
  }
`,rt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      display: flex;
      align-self: flex-start;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: ${t.textContentPadding};
      margin: ${t.textContentMargin};
      line-height: normal;
      p,
      h4 {
        margin: 0;
      }
    `}}
  }
`,it=Pe.ZP.h4`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      font-weight: ${t.headerFontWeight};
      font-size: ${t.headerSize};
      padding: ${t.headerPadding};
      color: ${t.headerColor};
    `}}
  }
`,at=Pe.ZP.p`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      font-size: ${t.descriptionSize};
      padding: ${t.descriptionPadding};
      color: ${t.descriptionColor};
    `}}
  }
`,ot=Pe.ZP.p`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      font-size: ${t.dateSize};
      color: ${t.dateColor};
    `}}
  }
`,lt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      display: flex;
      justify-content: space-between;
      margin: ${t.menuMargin};
      align-items: center;
      svg {
        fill: ${t.notificationDot};
        height: ${t.notificationDotSize};
        width: ${t.notificationDotSize};
      }
    `}}
  }
`,st=Pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      padding: ${t.padding};
      border: ${t.border};
      background: ${t.background};
    `}}
  }
`,ct=Pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      height: ${t.imageSize};
      width: ${t.imageSize};
      flex-shrink: 0;
      background: ${t.placeHolderBackground};
      border-radius: ${t.imageRadius};
    `}}
  }
`,ut=(0,Pe.ZP)(rt)`
  && {
    flex: 1;
    align-items: stretch;
  }
`,dt=(0,Pe.ZP)(it)`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      background: ${t.placeHolderBackground};
      color: ${t.placeHolderBackground};
      margin: 0 0 0.8rem 0 !important;
      padding: 0;
    `}}
  }
`,pt=(0,Pe.ZP)(at)`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return Pe.iv`
      background: ${t.placeHolderBackground};
      color: ${t.placeHolderBackground};
      margin: 0 12rem 0 0 !important;
      padding: 0;
    `}}
  }
`,ft=Pe.ZP.span`
  && {
    display: block;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -468px 0;
      }
      100% {
        background-position: 468px 0;
      }
    }

    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: ${e=>{let{theme:{feedItem:t}}=e;return t.placeHolderGradient}};
    background-size: 800px 104px;
    height: 100%;
    width: 100%;
    border-radius: ${e=>{let{circle:t}=e;return t?"50%":"unset"}};
    position: relative;
  }
`,ht=Pe.ZP.button`
  && {
    ${e=>{let{theme:{colors:t},dropdownTheme:n}=e;return Pe.iv`
      display: flex;
      border-width: ${n.borderWidth};
      margin: ${n.margin};
      padding: ${n.padding};
      box-sizing: border-box;
      outline: ${n.outline};
      user-select: none;
      cursor: pointer;
      background-color: ${n.background};

      svg {
        fill: ${n.iconFill};
        stroke: ${n.iconFill};
        height: ${n.iconHeight};
        width: ${n.iconWidth};
      }

      &:hover {
        transition: ${n.transition};
        fill: ${t.brandingPrimary};
        stroke: ${t.brandingPrimary};
        background: ${n.hoverBackground};
      }
    `}}
  }
`,mt=Pe.ZP.div`
  z-index: 1000000;
`,gt=Pe.ZP.div`
  && {
    ${e=>{let{visible:t,dropdownTheme:n}=e;return Pe.iv`
      display: ${t?"flex":"none"};
      flex-direction: column;
      background: ${n.menuBackground};
      border-radius: ${n.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${n.menuShadow}; ;
    `}}
  }
`,bt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{dropdown:t}}=e;return Pe.iv`
      justify-content: flex-start;
      color: ${t.menuItemTextColor};
      display: flex;
      cursor: pointer;
      padding: ${t.menuItemPadding};
      align-items: center;
      font-size: 0.9rem;

      &:hover {
        background-color: ${t.menuItemHoverBackground};
      }
    `}}
  }
`;function vt(){return r.createElement("svg",{id:"light",enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",null,r.createElement("path",{d:"m12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})),r.createElement("g",null,r.createElement("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})),r.createElement("g",null,r.createElement("path",{d:"m12 24c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})))}function yt(e){let{items:t=[],isVisible:n,theme:i}=e,[a,o]=(0,r.useState)(!1),l=(0,r.useRef)(null),s=(0,r.useRef)(null),{styles:c,attributes:u,update:d}=(0,M.D)(l.current,s.current,{placement:"bottom",modifiers:[{name:"preventOverflow",enabled:!0},{name:"offset",enabled:!0,options:{offset:[-10,10]}}]});function p(e){var t,n;let r=e.target;(null==(t=l.current)?void 0:t.contains(r))||(null==(n=s.current)?void 0:n.contains(r))||o(!1)}return(0,r.useEffect)((()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),[]),r.createElement(r.Fragment,null,r.createElement(ht,{"aria-label":"More",ref:l,dropdownTheme:i,style:{visibility:n?"visible":"hidden"},onClick:function(){o(!a),null==d||d()}},r.createElement(vt,null)),r.createElement(mt,Be({ref:s,style:c.popper},u.popper),r.createElement(gt,{style:c.offset,visible:a,dropdownTheme:i},t.map((e=>r.createElement(bt,{key:e.name,"data-name":e.name,onClick:t=>{!function(e,t){e.stopPropagation(),t(),o(!1)}(t,e.action)}},e.name))))))}function Et(e){let{style:t={}}=void 0===e?{}:e;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",style:Be({},t)},r.createElement("circle",{cx:"50",cy:"50",r:"50"}))}function wt(e){if(!e)return null;for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];let a=e(...n);return"string"==typeof a?r.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):a}function kt(e){let{loaderRef:t}=e;return r.createElement("div",{ref:t},r.createElement(st,null,r.createElement(ct,null,r.createElement(ft,{circle:!0})),r.createElement(ut,null,r.createElement(dt,null,r.createElement(ft,null,"\xa0")),r.createElement(pt,null,r.createElement(ft,null,"\xa0")))),r.createElement(st,null,r.createElement(ct,null,r.createElement(ft,{circle:!0})),r.createElement(ut,null,r.createElement(dt,null,r.createElement(ft,null,"\xa0")),r.createElement(pt,null,r.createElement(ft,null,"\xa0")))))}function Pt(e){let{heading:t,description:n,imageUrl:i,clickableUrl:a,placeholderImage:o,read:l,time:s,id:c,data:u,renderNotificationBody:d,isMobile:p,onFeedItemClick:f,markAsClicked:h,deleteNotification:m}=e,[g,b]=(0,r.useState)(!1),[v,y]=(0,r.useState)(!1),E=(0,r.useRef)(null),w=(0,r.useMemo)((()=>l?[{name:"Delete",action:m}]:[{name:"Delete",action:m},{name:"Mark As Read",action:h}]),[l]),k=()=>{b(!0)},P=()=>{b(!1)};return r.createElement(tt,{clickable:null!=a,onMouseEnter:k,onMouseLeave:P,onFocus:k,onBlur:P,onClick:t=>{var n;if(null==(n=E.current)||!n.contains(t.target)){if(f)return void f(t,ze(Be({url:a},e),{markAsClicked:h}));!a||(h(),window.open(a,"__blank"))}}},r.createElement(nt,{src:i||o,onError:()=>{y(!0)}}),r.createElement(rt,null,wt(d,e)||r.createElement(r.Fragment,null,r.createElement(it,{dangerouslySetInnerHTML:{__html:t}}),r.createElement(at,{dangerouslySetInnerHTML:{__html:n}}),r.createElement(ot,null,s))),r.createElement(lt,{ref:E},r.createElement(yt,{items:w,isVisible:p||g,theme:Fe.dropdown}),r.createElement(Et,{style:{visibility:l?"hidden":"visible"}})))}var St=Pe.ZP.button`
  && {
    ${e=>{let{theme:{jumpToTop:t}}=e;return Pe.iv`
      display: flex;
      position: fixed;
      justify-items: center;
      align-content: center;
      box-shadow: ${t.shadow};
      border-width: 0;
      border-radius: ${t.borderRadius};
      margin: ${t.margin};
      padding: ${t.padding};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${t.background};
      transition: ${t.transition};
      &:hover {
      }

      svg {
        height: ${t.iconSize};
        width: ${t.iconSize};
        fill: ${t.iconFill};
      }
    `}}
  }
`;function Ct(){return r.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 330 330"},r.createElement("g",{id:"XMLID_85_"},r.createElement("path",{id:"XMLID_86_",d:"M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195\n\t\tc3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15\n\t\ts-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z"}),r.createElement("path",{id:"XMLID_87_",d:"M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150\n\t\tc-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394\n\t\tC307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z"})),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null),r.createElement("g",null))}function It(e){let{onClick:t}=e;return r.createElement(St,{"aria-label":"Jump to Top",onClick:t},r.createElement(Ct,null))}var xt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSJyZ2JhKDAsMTkxLDE2NiwuMykiIC8+Cjwvc3ZnPg==",Nt={transition:"opacity 150ms ease-in-out",opacity:0},Rt={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function At(e){let{empty:t=!1,renderCustomPlaceholderContent:n,renderCustomNotificationContent:i,renderNotificationBody:a,notifications:o=[],placeholderText:l="Shh! It's quiet around here..."}=e;var s;let c=We(),{onNotificationScroll:u,jumpToTop:d,showJumpToTop:p}=(null==(s=c.useJumpToTop)?void 0:s.call(c))||{},{placeholderImage:f=xt}=c,h=c.isMobile||!1,m=c.onFeedItemClick,g=c.setLoaderRef,b=c.hasMore,v=c.deleteNotification,y=c.markAsRead,E=e=>{var t;let n=null==(t=e.currentTarget.parentNode)?void 0:t.parentElement;null==d||d(n)};return r.createElement(Ye,{id:"engagespot-scroll-root",empty:t,onScroll:u},r.createElement(xe.ZP,{in:p,timeout:150},(e=>r.createElement(Qe,{style:Be(Be({},Nt),Rt[e])},r.createElement(It,{onClick:E})))),t?wt(n)||(e=>r.createElement(r.Fragment,null,r.createElement(et,null),r.createElement(Je,null,e)))(l):r.createElement(r.Fragment,null,o.map((e=>((e,t,n,i,a,o,l,s)=>wt(t,e)||r.createElement(Pt,{heading:e.heading,clickableUrl:e.clickableUrl,description:e.description,imageUrl:e.imageUrl,read:null!=e.clickedAt,time:e.time,placeholderImage:n,key:e.id,id:e.id,data:e.data,markAsClicked:()=>l(e.id),deleteNotification:()=>o(e.id),isMobile:i,onFeedItemClick:a,renderNotificationBody:s}))(e,i,f,h,m,v,y,a))),b&&r.createElement(kt,{loaderRef:g})))}function Tt(){return r.createElement("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{x:"0.925781",width:"12.8327",height:"1.30946",transform:"rotate(45 0.925781 0)"}),r.createElement("rect",{y:"9.07404",width:"12.8327",height:"1.30946",transform:"rotate(-45 0 9.07404)"}))}var $t=Pe.ZP.input`
  && {
    ${e=>{let{theme:{toggle:t}}=e;return Pe.iv`
      /* Toggle Button */
      & {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        border: 0;
        outline: 0;
        cursor: pointer;
        margin: 10px;
        transform: scale(0.7);
      }

      /* To create surface of toggle button */
      &:after {
        content: '';
        width: 60px;
        height: 28px;
        display: inline-block;
        background: ${t.background};
        border-radius: 18px;
        clear: both;
      }

      /* Contents before checkbox to create toggle handle */
      &:before {
        content: '';
        width: 32px;
        height: 32px;
        display: block;
        position: absolute;
        left: -1px;
        top: -2px;
        transform: scale(0.7);
        border-radius: 50%;
        background: ${t.dotColor};
      }

      /* Shift the handle to left on check event */
      &:checked:before {
        left: 29px;
      }
      /* Background color when toggle button will be active */
      &:checked:after {
        background: ${t.activeColor};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &,
      &:before,
      &:after,
      &:checked:before,
      &:checked:after {
        transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
        -moz-transition: ease 0.3s;
        -o-transition: ease 0.3s;
      }
    `}}
  }
`,Ot=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return Pe.iv`
      display: flex;
      position: relative;
      flex: 1;
      flex-direction: column;
      overflow-y: auto;
      height: ${t.height};
      align-items: stretch;
      justify-content: flex-start;
      padding: ${t.padding};
      color: ${t.fontColor};
      background: ${t.background};
    `}}
  }
`,Dt=Pe.ZP.h3`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return Pe.iv`
      font-size: 1rem;
      font-weight: 'bold';
      margin: 0.2rem 0rem;
    `}}
  }
`,Lt=Pe.ZP.label`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return Pe.iv`
      font-size: 0.8rem;
      margin: 0.4rem 0rem 0 0;
    `}}
  }
`,Mt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return Pe.iv`
      display: grid;
      grid-template-columns: repeat(2, minmax(min-content, 1fr));
      gap: 1.2rem;
      align-items: flex-start;
      padding: 0.5rem 0.7rem;
      margin: 0.8rem 0;
    `}}
  }
`,Bt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preference:t}}=e;return Pe.iv`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.4rem;

      label {
        margin: 0 0.2rem 0 0;
      }
    `}}
  }
`,zt=Pe.ZP.button`
  && {
    ${e=>{let{theme:{preference:t}}=e;return Pe.iv`
      margin-top: 3px;
    `}}
  }
`,Ft=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t,header:n}}=e;return Pe.iv`
      background-color: ${t.overlayBackground};
      opacity: ${t.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${n.height} 0 0 0;
    `}}
  }
`,_t=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      position: absolute;
      height: ${t.height};
      bottom: 0;
      left: 0;
      z-index: 1500;
      border-radius: ${t.borderRadius};
    `}}
  }
`,jt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      border-radius: ${t.borderRadius};
      background-color: ${t.background};
      backdrop-filter: ${t.backdropFilter};
      padding: ${t.padding};
      position: relative;
    `}}
  }
`,Wt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      display: flex;
      margin: ${t.headerMargin};
    `}}
  }
`,Ut=Pe.ZP.h6`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      font-size: ${t.headerFontSize};
      color: ${t.headingColor};
      margin-right: auto;
    `}}
  }
`,Zt=Pe.ZP.button`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      position: absolute;
      right: 1rem;
      top: 0.5rem;

      svg {
        height: ${t.closeButtonSize};
        width: ${t.closeButtonSize};
        fill: ${t.closeButtonColor};
      }
    `}}
  }
`,Gt=Pe.ZP.p`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      color: ${t.textPrimaryColor};
      margin: ${t.textPrimaryMargin};
      font-size: ${t.textPrimaryFontSize};
      text-align: ${t.textAlign};
    `}}
  }
`,Ht=Pe.ZP.p`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
      color: ${t.textSecondaryColor};
      margin: ${t.textSecondaryMargin};
      font-size: ${t.textSecondaryFontSize};
      text-align: ${t.textAlign};
    `}}
  }
`,Kt=Pe.ZP.button`
  && {
    ${e=>{let{theme:{preferenceModal:t,colors:n}}=e;return Pe.iv`
      color: ${t.buttonPrimaryColor};
      font-weight: ${t.primaryButtonFontWeight};
      background-color: ${t.buttonPrimaryBackgroundColor};
      padding: ${t.primaryButtonPadding};
      border-radius: ${t.primaryButtonBorderRadius};
      margin: ${t.primaryButtonMargin};
      transition: ${t.primaryButtonTransition};

      &:hover {
        background-color: ${t.buttonPrimaryHoverBackgroundColor};
      }
    `}}
  }
`,Vt=Pe.ZP.button`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return Pe.iv`
        transition: ${t.primaryButtonTransition};
        color: ${t.buttonSecondaryColor};
        background-color: ${t.buttonSecondaryBackgroundColor};

        &:hover {
          background-color: ${t.buttonSecondaryHoverBackgroundColor};
        }
      `}}
  }
`;function Xt(e){let{enableWebPush:t,webPushState:n}=e,i=We(),{preferences:a,setPreferences:o}=i;Re.log("prefs",a);let l=null==a?void 0:a.channels,s=null==a?void 0:a.userPreferences;return r.createElement(Ot,null,null==l?void 0:l.map((e=>r.createElement(r.Fragment,{key:null==e?void 0:e.id},r.createElement(Dt,null,null==e?void 0:e.name),"webPush"===(null==e?void 0:e.id)&&"denied"===n?r.createElement(Lt,null,"Web Push is currently disabled on the browser. Enable it manually by going into the browser settings"):null,r.createElement(Mt,null,null==s?void 0:s.map((i=>r.createElement(Bt,{key:i.category.id},r.createElement("label",{htmlFor:`${e.id}-${i.category.id}`},i.category.name),r.createElement($t,{type:"checkbox",id:`${e.id}-${i.category.id}`,checked:i.channels[e.id].enabled,disabled:"webPush"===e.id&&["denied"].includes(n),onChange:r=>((e,r)=>{let i=r.target.checked;"webPush"===e.channel&&"granted"!==n&&t(),null==o||o([{categoryId:e.categoryId,channels:[{enabled:i,channel:e.channel}]}])})({categoryId:i.category.id,channel:e.id},r)})))))))))}function qt(e){let{closeModal:t,allowNotifications:n}=e;return r.createElement(_t,null,r.createElement(jt,null,r.createElement(Wt,null,r.createElement(Ut,null,"Enable Desktop Notifications"),r.createElement(Zt,{onClick:t},r.createElement(Tt,null))),r.createElement(Gt,null,"Allow Engagespot to send you push notification when you have new messages and offers"),r.createElement(Kt,{onClick:n},"Yes"),r.createElement(Vt,{onClick:t},"Maybe later"),r.createElement(Ht,null,"You can change your preferences in Settings later, if needed")))}var Yt=Pe.ZP.div`
  && {
    ${e=>{let{theme:{footer:t}}=e;return Pe.iv`
      display: flex;
      height: ${t.height};
      border-top: ${t.border};
      align-items: center;
      justify-content: center;
      padding: ${t.padding};
      font-size: ${t.fontSize};
      color: ${t.fontColor};
      background: ${t.background};
      box-sizing: border-box;
    `}}
  }
`,Jt=Pe.ZP.h3`
  && {
    ${e=>{let{theme:{footer:t}}=e;return Pe.iv`
      font-size: ${t.fontSize};
      font-weight: ${t.fontWeight};
      color: ${t.fontColor};
    `}}
  }
`,Qt=Pe.ZP.a`
  && {
    ${e=>{let{theme:{footer:t}}=e;return Pe.iv`
      font-size: ${t.fontSize};
      color: ${t.fontColor};
      margin: ${t.linkMargin};
      cursor: pointer;

      svg {
        height: ${t.linkSize};
        width: ${t.linkSize};
        border-radius: ${t.linkRadius};
      }
    `}}
  }
`,en=Pe.ZP.button`
  && {
    ${e=>{let{theme:{footer:t}}=e;return Pe.iv`
      cursor: pointer;
      margin: ${t.preferenceButtonMargin};
      padding: ${t.preferenceButtonPadding};
      &:hover {
        transition: ${t.preferenceButtonHoverTransition};
        background: ${t.preferenceButtonHoverBackground};
      }

      svg {
        height: ${t.preferenceButtonSize};
        width: ${t.preferenceButtonSize};
        fill: ${t.preferenceButtonColor};
      }
    `}}
  }
`;function tn(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50pt",height:"50pt",viewBox:"0 0 50 50"},r.createElement("path",{d:"M2.445 0h45.11A2.444 2.444 0 0150 2.445v45.11A2.444 2.444 0 0147.555 50H2.445A2.444 2.444 0 010 47.555V2.445A2.444 2.444 0 012.445 0zm0 0",fill:"#1abc9c"}),r.createElement("path",{d:"M25.879 24.121a23.133 23.133 0 00-16.465-6.82 2.72 2.72 0 00-2.719 2.719 2.72 2.72 0 002.72 2.718c4.769 0 9.25 1.856 12.62 5.227a17.728 17.728 0 015.227 12.62 2.72 2.72 0 105.437 0 23.133 23.133 0 00-6.82-16.464zm0 0",fill:"#fff"}),r.createElement("path",{d:"M41.672 40.586c.004-8.617-3.352-16.715-9.445-22.809-6.094-6.093-14.196-9.449-22.813-9.449a2.72 2.72 0 100 5.438c7.164 0 13.902 2.789 18.965 7.855 5.066 5.067 7.855 11.8 7.855 18.965a2.717 2.717 0 002.72 2.703 2.717 2.717 0 002.718-2.703zm0 0",fill:"#fff"}))}function nn(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.createElement("path",{d:"M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"}))}function rn(e){let{footerContent:t,showPreferences:n}=e,{togglePreference:i}=We();return r.createElement(Yt,null,null==t?void 0:t(),n?r.createElement(en,{onClick:()=>{null==i||i((e=>!e))}},r.createElement(nn,null)):null)}function an(){return r.createElement("svg",{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.6129 5.79701C0.951277 5.45864 1.49989 5.45864 1.83827 5.79701L7.02994 10.9887C7.36832 11.3271 7.36831 11.8757 7.02994 12.2141V12.2141C6.69156 12.5524 6.14294 12.5524 5.80457 12.2141L0.612899 7.02238C0.274522 6.68401 0.274523 6.13539 0.6129 5.79701V5.79701Z",fill:"white"}),r.createElement("path",{d:"M0.612686 7.0428C0.274309 6.70442 0.274309 6.15581 0.612686 5.81743L5.81742 0.612699C6.15579 0.274322 6.70441 0.274322 7.04279 0.612699V0.612699C7.38117 0.951076 7.38117 1.49969 7.04279 1.83807L1.83806 7.0428C1.49968 7.38118 0.951063 7.38118 0.612686 7.0428V7.0428Z",fill:"white"}),r.createElement("path",{d:"M20 6.15465C20 6.63319 19.6121 7.02112 19.1335 7.02112L1.97744 7.02112L1.97744 5.28818L19.1335 5.28818C19.6121 5.28818 20 5.67611 20 6.15465V6.15465Z",fill:"white"}))}function on(e){let{notifications:t=[],panelProps:n,arrowProps:i,route:a,webPushState:o,setRoute:l,panelOffsetProps:s,footerContent:c,renderNotificationContent:u,renderNotificationBody:d,renderEmptyPlaceholderImage:p,togglePanelVisibility:f,visible:h=!1,showPreferences:m,enableWebPush:g,headerDropdownItems:b=[],headerText:v="Notifications"}=e,y="home"===a?v:"Preferences",E=()=>{l("home")},w=(m?[{name:"Preferences",action:()=>{l("preference")}}]:"prompt"===o?[{name:"Enable Desktop Notifications",action:g}]:[]).concat(b),[k,P]=(0,r.useState)(!0),[S,C,I]=(0,Ie.Z)("showNotificationOverlay","true"),x=()=>{P(!1),C("false")},N=()=>{P(!1),g(),C("false")};return r.createElement(Ze,Be({},n()),r.createElement(He,Be({},i())),r.createElement(Ge,ze(Be({},s()),{visible:h}),k&&"true"==S?r.createElement(r.Fragment,null,r.createElement(Ft,null),r.createElement(qt,{allowNotifications:N,closeModal:x})):null,((e,t)=>r.createElement(qe,null,r.createElement(zt,{onClick:E,style:{visibility:"preference"===e?"visible":"hidden"}},r.createElement(an,null)),r.createElement(Ve,null,t),w.length>0?r.createElement(yt,{items:w,isVisible:!0,theme:Fe.headerDropdown}):null,r.createElement(Xe,{onClick:()=>{null==f||f()}},r.createElement(Tt,null))))(a,y),(e=>"home"===e?r.createElement(At,{notifications:t,empty:0===t.length,renderCustomNotificationContent:u,renderNotificationBody:d,renderCustomPlaceholderContent:p}):"preference"===e?r.createElement(Xt,{enableWebPush:g,webPushState:o}):null)(a),r.createElement(rn,{footerContent:c,showPreferences:m})))}var ln=Pe.ZP.button`
  && {
    ${e=>{let{theme:{notificationButton:t},buttonType:n}=e;return Pe.iv`
      display: flex;
      justify-items: center;
      align-content: center;
      box-shadow: ${"floating"===n&&t.floatingButtonShadow};
      border-width: ${t.borderWidth};
      border-radius: ${"floating"===n?t.floatingButtonRadius:t.normalButtonRadius};
      margin: ${t.margin};
      padding: ${t.padding};
      box-sizing: border-box;
      outline: ${t.outline};
      user-select: none;
      cursor: pointer;
      position: relative;
      background-color: ${t.background};
      transition: ${t.transition};

      &:hover {
        background-color: ${t.hoverBackground};
      }

      svg {
        height: ${t.iconSize};
        width: ${t.iconSize};
        stroke: ${t.iconFill};
      }
    `}}
`,sn=Pe.ZP.span`
  && {
    ${e=>{let{theme:{unreadBadgeCount:t}}=e;return Pe.iv`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${t.background};
      color: ${t.color};
      position: absolute;
      font-size: ${t.fontSize};
      border-radius: ${t.borderRadius};
      inset: ${t.inset};
      height: ${t.size};
      width: ${t.size};
    `}}
  }
`;function cn(e){let{count:t}=e;return r.createElement(sn,null,t)}function un(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"presentation"},r.createElement("g",{transform:"translate(4.615 2.514)"},r.createElement("path",{d:"M7.382,0C2.947,0,1.021,4.015,1.021,6.67c0,1.984.288,1.4-.81,3.82-1.341,3.449,4.051,4.858,7.171,4.858s8.511-1.41,7.171-4.858c-1.1-2.42-.81-1.836-.81-3.82C13.743,4.015,11.815,0,7.382,0Z",transform:"translate(0 0)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"}),r.createElement("path",{d:"M4.62,0A2.992,2.992,0,0,1,0,0",transform:"translate(5.071 17.998)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"})))}function dn(e){let{type:t="normal",buttonProps:n,unreadCount:i,panelOpen:a,renderNotificationIcon:o}=e;return r.createElement(ln,Be({buttonType:t,"aria-label":"Notifications"},null==n?void 0:n()),i&&!a?r.createElement(cn,{count:i}):null,o?wt(o):r.createElement(un,null))}var pn=Pe.ZP.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  span,
  p,
  a,
  ol,
  ul,
  li,
  label,
  article,
  aside,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    vertical-align: baseline;
    line-height: normal;
    text-align: left;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`,fn={title:"heading",message:"description",icon:"imageUrl",url:"clickableUrl",id:"id",created:"time",clickedAt:"clickedAt",data:"data",markAsClicked:"markAsClicked",deleteNotification:"deleteNotification"},hn=(e,t)=>fn[t],mn=e=>a()(e,hn);function gn(e){var t=e,{theme:n,apiKey:i,panelOnly:a=!1,headerText:o,feedItemPlaceholderImage:l,userId:s,panelOpenByDefault:c=!1,renderFooterContent:u,renderNotificationIcon:d,renderEmptyPlaceholderImage:p,renderNotificationContent:f,renderNotificationBody:h,onFeedItemClick:m,headerDropdownItems:g}=t,b=((e,t)=>{var n={};for(var r in e)De.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Oe)for(var r of Oe(e))t.indexOf(r)<0&&Le.call(e,r)&&(n[r]=e[r]);return n})(t,["theme","apiKey","panelOnly","headerText","feedItemPlaceholderImage","userId","panelOpenByDefault","renderFooterContent","renderNotificationIcon","renderEmptyPlaceholderImage","renderNotificationContent","renderNotificationBody","onFeedItemClick","headerDropdownItems"]);let v=(0,r.useRef)();v.current=document.getElementById("engagespot-scroll-root");let{notifications:y,setLoaderRef:E,hasMore:w,isMobile:k,panelVisibility:P,getButtonProps:S,getPanelProps:C,getArrowProps:I,getPanelOffsetProps:x,togglePanelVisibility:N,useJumpToTop:R,hideBranding:A,enableWebPush:T,allowWebPush:$,webPushState:O,deleteNotification:D,markAsRead:L,unreadCount:M,preferences:B,getPreferences:z,setPreferences:F}=le(ze(Be({apiKey:i,userId:s},b),{floatingPanelOptions:{panelOpenByDefault:c},plugins:[de,be,we],scrollRoot:v.current})),[_,j]=(0,r.useState)(!1),W=e=>{j("preference"===e)},U=()=>A&&u?wt(u):A&&!u?null:r.createElement(r.Fragment,null,r.createElement(Qt,{href:"https://engagespot.co",target:"__blank","aria-label":"Engagespot Logo"},r.createElement(tn,null)),r.createElement(Jt,null,"Powered by Engagespot"));return r.createElement(Ue,{theme:n,state:{panelVisibility:P,placeholderImage:l,togglePanelVisibility:N,useJumpToTop:R,isMobile:k,preference:_,togglePreference:j,onFeedItemClick:m,setLoaderRef:E,hasMore:w,deleteNotification:D,markAsRead:L,preferences:B,setPreferences:F}},r.createElement(pn,null,(()=>{let e=()=>r.createElement(on,{visible:P,route:_?"preference":"home",setRoute:W,panelProps:C,panelOffsetProps:x,arrowProps:I,showPreferences:B.userPreferences&&B.userPreferences.length>0,renderNotificationContent:f,renderNotificationBody:h,renderEmptyPlaceholderImage:p,togglePanelVisibility:N,enableWebPush:T,webPushState:O,footerContent:U,headerText:o,headerDropdownItems:g||[],notifications:y?y.map(mn):[]});return r.createElement(r.Fragment,null,!a&&r.createElement(dn,{buttonProps:S,unreadCount:M,panelOpen:P,renderNotificationIcon:d}),k?Ne.createPortal(e(),document.body):e())})()))}},79604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return g}});var r=n(52685),i=n(27378),a=n(35318),o=n(23398),l=n(65894);const s=o.ZP.nav`
  width: 100%;
  height: 56px;
  color: white;
  border-radius: 5%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: orangered;
`,c=o.ZP.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`,u=o.ZP.li`
  display: flex;
  padding: 0 2.5rem;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
  }
`;function d(){let e=null;if(l.Z.canUseDOM){const{Engagespot:t}=n(21659);e=i.createElement(t,{apiKey:"shiynklpz18l3ktqyy6d9a",userId:"anand",endPointOverride:"https://api.staging.engagespot.co/v3/"})}return i.createElement("div",{style:{height:"800px"}},i.createElement(s,null,i.createElement(c,null,i.createElement(u,null,"Home"),i.createElement(u,null,"About"),i.createElement(u,{style:{marginRight:"10rem"}},"Login"),i.createElement(u,null,e))))}const p={sidebar_position:1,title:"Your First Notification Center"},f=void 0,h={unversionedId:"learn-by-examples/react-component/simple-notification",id:"learn-by-examples/react-component/simple-notification",title:"Your First Notification Center",description:"How to build a Notification Center in React App? | Engagespot",source:"@site/docs/learn-by-examples/react-component/simple-notification.mdx",sourceDirName:"learn-by-examples/react-component",slug:"/learn-by-examples/react-component/simple-notification",permalink:"/docs/learn-by-examples/react-component/simple-notification",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learn-by-examples/react-component/simple-notification.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Your First Notification Center"},sidebar:"tutorialSidebar",previous:{title:"Using Javascript Core",permalink:"/docs/javascript-guide/using-javascript-core-api"},next:{title:"Customizing your Notification Center",permalink:"/docs/learn-by-examples/react-component/customizing-notification"}},m={},g=[],b={toc:g};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"How to build a Notification Center in React App? | Engagespot"),(0,a.kt)("meta",{name:"description",content:"Built-in React component to build a Notification Inbox widget in your app. Show realtime notifications to improve the user experience of your app"})),(0,a.kt)("p",null,"This guide assumes that you've already went through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"Getting Started")," section. If you haven't already, please check it our first and then come back here. Don't worry, we'll wait \ud83d\ude09"),(0,a.kt)("p",null,"Today, we'll see how to integrate a simple notification center on your React powered website."),(0,a.kt)("p",null,"Let's start by creating a new create-react-app project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-notifications-app\ncd my-notifications-app\nnpm start\n")),(0,a.kt)("p",null,"If everything went well, you'll be seening this screen below"),(0,a.kt)("p",null,"Next step is to add engagespot to our dependency.\nWe'll be using the component version of engagespot in this tutorial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @engagespot/react-component\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Engagespot supports all popular modules systems namely ",(0,a.kt)("strong",{parentName:"p"},"UMD"),", ",(0,a.kt)("strong",{parentName:"p"},"AMD"),", ",(0,a.kt)("strong",{parentName:"p"},"Commonjs")," and ",(0,a.kt)("strong",{parentName:"p"},"ESModules"),". You are free to use it anywhere you want!")),(0,a.kt)("p",null,"Let's now create a new component called ",(0,a.kt)("inlineCode",{parentName:"p"},"Nav")," and add some styles to it. This will act as the navigation bar where we'll integrate the notification center later.\nWe'll be using ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-components")," for styling this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Nav.js\nimport styled from 'styled-components';\nimport React from 'react';\n\nconst NavBar = styled.nav`\n  width: 100%;\n  height: 56px;\n  color: white;\n  border-radius: 5%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: orangered;\n`;\n\nconst NavList = styled.ul`\n  list-style-type: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n`;\n\nconst NavItem = styled.li`\n  display: flex;\n  padding: 0 2.5rem;\n  cursor: pointer;\n\n  &:hover {\n    transition: all 0.5s;\n  }\n`;\n\nexport default function Nav({ children }) {\n  return (\n    <NavBar>\n      <NavList>{children}</NavList>\n    </NavBar>\n  );\n}\n\nNav.NavItem = NavItem;\n")),(0,a.kt)("p",null,"Now, import this component into your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," and add a few ",(0,a.kt)("inlineCode",{parentName:"p"},"NavItem"),"s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'//App.js\nimport "./styles.css";\nimport Nav from "./Nav";\nimport { Engagespot } from "@engagespot/react-component";\n\nexport default function App() {\n  return (\n    <div className="App">\n      <Nav>\n        <Nav.NavItem>Home</Nav.NavItem>\n        <Nav.NavItem>About</Nav.NavItem>\n        <Nav.NavItem>Contact</Nav.NavItem>\n      <h1>Hello CodeSandbox</h1>\n      <h2>Start editing to see some magic happen!</h2>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"Nice! Our Navigation is ready and things are really looking good. Only remaining step is to integrate our notification center. Let's import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Engagespot")," component for that"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Engagespot } from '@engagespot/core';\n")),(0,a.kt)("p",null,"Add it as a ",(0,a.kt)("inlineCode",{parentName:"p"},"NavItem")," with the required props"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Nav.NavItem>\n  <Engagespot apiKey="shiynklpz18l3ktqyy6d9a" userId="anandnew" />\n</Nav.NavItem>\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Engagespot packages have built-in typescript support OOTB. So even if you're not using typescript in your apps, IDEs like VSCode\nwould give you autocompletion by reading the type definitions from the package. How cool is that?")),(0,a.kt)("p",null,"If all went well, it should look somewhat like this \ud83d\udc47"),(0,a.kt)(d,{mdxType:"SimpleNotification"}),(0,a.kt)("p",null,"Here's the complete code for what we done so far."),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/elegant-wiles-kcvvp?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"800px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"elegant-wiles-kcvvp",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("p",null,"In the upcoming chapters, we'll discuss on how to customize the looks of notification center to make it truly your own!"))}v.isMDXComponent=!0}}]);