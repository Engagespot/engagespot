"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4346],{1659:function(e,t,n){n.r(t),n.d(t,{Engagespot:function(){return an}});var i=n(7378),r=n(9401),a=n.n(r),o=n(5981),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&h(e,n,t[n]);return e},g=(e,t)=>s(e,c(t)),f={apiHost:"https://api.engagespot.co/v3",wssHost:"wss://rtm.engagespot.co",wssPort:80},b=()=>{if("undefined"==typeof window)return"other";const e=navigator.userAgent;let t=e.indexOf("Chrome")>-1;const n=e.indexOf("MSIE")>-1||e.indexOf("rv:")>-1,i=e.indexOf("Firefox")>-1;let r=e.indexOf("Safari")>-1;t&&r&&(r=!1);const a=e.indexOf("OP")>-1;return t&&a&&(t=!1),t?"chrome":n?"ie":i?"firefox":r?"safari":a?"opera":void 0};function v(e){const t={method:e.method,cache:"no-cache",headers:m({"Content-Type":"application/json"},e.headers)};return null!==e.body&&(t.body=JSON.stringify(e.body)),fetch(e.url,t).then((async e=>{e.ok||await async function(e){let t;try{const{error:n="Unknown error",message:i="No description"}=await e.json();t=`Unexpected status code ${e.status}: ${n}, ${i}`}catch(_){t=`Unexpected status code ${e.status}: Cannot parse error response`}throw new Error(t)}(e);try{return await e.json()}catch(_){return null}}))}var y,E=class{constructor(e,t){this._client=void 0,this.id=void 0,this.title=void 0,this.message=null,this.icon=null,this.url=null,this.seenAt=null,this.clickedAt=null,this.createdAt=null,this.data=null,this._client=e,this.id=t.id,this.title=t.title,this.message=t.message,this.icon=t.icon,this.url=t.url,this.seenAt=t.seenAt,this.clickedAt=t.clickedAt,this.createdAt=t.createdAt,this.data=t.data}async markAsClicked(){const e={url:this._client.baseURL+"/notifications/"+this.id+"/click",method:"POST",headers:m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this._client.apiKey,"X-ENGAGESPOT-USER-ID":this._client.userId},this._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this._client.userSignature})};try{if(await v(e))return this;throw"Cannot mark notification as clicked"}catch(t){throw t}}async fetch(){const e={url:this._client.baseURL+"/notifications/"+this.id,method:"GET",headers:m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this._client.apiKey,"X-ENGAGESPOT-USER-ID":this._client.userId},this._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this._client.userSignature})};try{const t=await v(e);if(t)return this.title=t.data.title,this.message=t.data.message,this.icon=t.data.icon,this.url=t.data.url,this.seenAt=t.data.seenAt,this.clickedAt=t.data.clickedAt,this.createdAt=t.data.createdAt,this.data=t.data.data,this;throw"Cannot fetch notifications"}catch(t){throw t}}async delete(){const e={url:this._client.baseURL+"/notifications/"+this.id,method:"DELETE",headers:m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this._client.apiKey,"X-ENGAGESPOT-USER-ID":this._client.userId},this._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this._client.userSignature})};try{if(await v(e))return this;throw"Unable to delete notifications"}catch(t){throw t}}},w=(e=>(e[e.PERMISSION_REQUIRED=0]="PERMISSION_REQUIRED",e[e.PERMISSION_GRANTED=1]="PERMISSION_GRANTED",e[e.PERMISSION_DENIED=2]="PERMISSION_DENIED",e))(w||{}),P=class{constructor(e,t){if(this.debug=!1,this.isNative=!1,this.SERVICE_WORKER_URL="/service-worker.js?sdkVersion=3.0.0",this.apiKey=void 0,this.userId=void 0,this.userSignature=null,this.instanceState="none",this.endPoint=null,this.socket=null,this.realtimeClient=void 0,this._ready=void 0,this.enableNonHttpsWebPush=!1,this.enableWebPush=!1,this.supportedChannels={inApp:{name:"In-App",id:"inApp"},webPush:{name:"Web Push",id:"webPush"},email:{name:"Email",id:"email"},mobilePush:{name:"Mobile Push",id:"mobilePush"},sms:{name:"SMS",id:"sms"}},this.enabledChannels=[],this.unreadCount=0,this.deviceId=void 0,this.hideBranding=!1,this.serviceWorkerRegistration=null,this.publicKey="",this.subscribableEvents=["REALTIME_NOTIFICATION_RECEIVED","NOTIFICATION_CLICKED","NOTIFICATION_DELETED"],this.eventListenerStore={REALTIME_NOTIFICATION_RECEIVED:[],NOTIFICATION_CLICKED:[],NOTIFICATION_DELETED:[],NOTIFICATION_SEEN:[],WEBPUSH_PERMISSION_CHANGED:[]},this.apiRequestv2=void 0,this.isWebPushSupported=()=>"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window,function(e){if(null==e)throw"ES1007 - You must pass your API key when you instantiate Engagespot."}(e),this.apiKey=e,this.isNative="undefined"==typeof window,!t)throw"ES1000 - You must pass an options object when you instantiate Engagespot.";if(!t.userId)throw"ES1001 - You must pass userId when you instantiate Engagespot.";this.userId=t.userId,t.userSignature&&(this.userSignature=t.userSignature),t.enableNonHttpsWebPush&&(this.enableNonHttpsWebPush=t.enableNonHttpsWebPush),t.serviceWorkerRegistration&&(this.serviceWorkerRegistration=t.serviceWorkerRegistration),t.endPointOverride&&(this.endPoint=t.endPointOverride),t.debug&&(this.debug=t.debug),this.apiRequestv2=new class{constructor(e,t,n){void 0===n&&(n=null),this.apiKey=void 0,this.userId=void 0,this.userSignature=void 0,this.apiKey=e,this.userId=t,this.userSignature=n}async executeFetchRequest(e,t,n,i){void 0===n&&(n=null),void 0===i&&(i=null);const r=g(m({method:e,cache:"no-store"},["POST","PUT","PATCH"].includes(e)&&{body:JSON.stringify(n)}),{headers:m(m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this.apiKey,"X-ENGAGESPOT-USER-ID":this.userId},this.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this.userSignature}),i)});return fetch(t,r).then((async e=>{e.ok||await this.handleError(e);try{return await e.json()}catch(_){return null}}))}async handleError(e){let t;try{const{error:n="Unknown error",message:i="No description"}=await e.json();t=`Unexpected status code ${e.status}: ${n}, ${i}`}catch(_){t=`Unexpected status code ${e.status}: Cannot parse error response`}throw new Error(t)}async get(e,t){return void 0===t&&(t=null),await this.executeFetchRequest("GET",e,null,t)}async post(e,t,n){return void 0===n&&(n=null),await this.executeFetchRequest("POST",e,t,n)}async put(e,t,n){return void 0===n&&(n=null),await this.executeFetchRequest("PUT",e,t,n)}async patch(e,t,n){return void 0===n&&(n=null),await this.executeFetchRequest("PATCH",e,t,n)}async delete(e,t){return void 0===t&&(t=null),await this.executeFetchRequest("DELETE",e,null,t)}}(e,t.userId,t.userSignature),this._ready=this.init()}async _resolveInstanceState(){await this._ready}async isReady(){try{return await this._resolveInstanceState(),!0}catch(e){return!1}}async init(){if(this.deviceId)return this._log("Instance already have a deviceId. So skipping init()"),this;const e=this.getDeviceId();return this.deviceId=e||this.createNewDevice(),await this.connect()}async connect(){this.instanceState="connecting";const e={url:this.baseURL+"/sdk/connect",method:"POST",body:{deviceType:"browser",browserType:b()},headers:g(m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this.apiKey,"X-ENGAGESPOT-USER-ID":this.userId},this.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this.userSignature}),{"X-ENGAGESPOT-DEVICE-ID":this.deviceId})},t=await v(e);if(this.unreadCount=t.unreadCount,this.hideBranding=t.app.hideBranding,this.publicKey=t.app.publicKey,this.enableWebPush=t.app.enableWebPush,this.enabledChannels=t.app.channels||[],this._log("Response from connect API is given below "),this._log(t),this.isNative||!this.enableWebPush||this.enableNonHttpsWebPush)this._log("enableNonHttpsWebPush is "+this.enableNonHttpsWebPush),this._log("enableWebPush is "+this.enableWebPush);else if(this._log("enableNonHttpsWebPush is false"),this.serviceWorkerRegistration)await window.navigator.serviceWorker.ready;else try{this.serviceWorkerRegistration=await this.getServiceWorkerRegistration()}catch(n){console.warn("[Engagespot] ES1003 - Service worker registration failed. This error is probably due to missing service-worker file. Try turning off web-push channel in your Engagespot dashboard"),console.error(n)}try{this.realtimeConnect()}catch(n){throw n}return this.isNative||this.listenForWebPushPermissionChanges(),this.instanceState="connected",this}async _createTokenRequest(){const e={url:this.baseURL+"/sdk/realtimeTokenRequests",method:"POST",body:{deviceType:"browser",browserType:b()},headers:g(m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this.apiKey,"X-ENGAGESPOT-USER-ID":this.userId},this.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this.userSignature}),{"X-ENGAGESPOT-DEVICE-ID":this.deviceId})};return await v(e)}realtimeConnect(){this.realtimeClient=new o.Realtime({authCallback:async(e,t)=>{try{t("",await this._createTokenRequest())}catch(n){this._log(n),t(n,"")}}}),this.realtimeClient.connection.once("connected",(()=>{this._log("Subscribing to "+this.apiKey+"_"+this.userId),this.realtimeClient.channels.get(this.apiKey+"_"+this.userId).subscribe((e=>{this.handleIncomingRealtimeMessage(e)}))}))}handleIncomingRealtimeMessage(e){if(this._log(e),"NEW_NOTIFICATION"===e.name){const t=new E(this,{id:e.data.notification.id,title:e.data.notification.title,message:e.data.notification.description,icon:e.data.notification.icon,data:e.data.notification.data,url:e.data.notification.url,createdAt:e.data.notification.created_at});let n=0;this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.forEach((e=>{e(t),n++})),this._log("Published to "+n+" listeners")}"NOTIFICATION_DELETED"===e.name&&this.eventListenerStore.NOTIFICATION_DELETED.forEach((t=>{t(e.data.notification.id)})),"NOTIFICATION_CLICKED"===e.name&&this.eventListenerStore.NOTIFICATION_CLICKED.forEach((t=>{t(e.data.notification.id)})),"NOTIFICATION_SEEN"===e.name&&this.eventListenerStore.NOTIFICATION_SEEN.forEach((t=>{t(e.data.notification.id)}))}listenForWebPushPermissionChanges(){this.isWebPushSupported()?navigator.permissions.query({name:"notifications"}).then((e=>{e.onchange=e=>{const t=e.target.state;this.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.forEach((e=>{e(t)}))}})):this._log("Web push is not supported in this browser")}getNotificationList(){return new class{constructor(e){this.client=void 0,this.unreadCount=void 0,this.totalCount=void 0,this.currentPage=void 0,this.itemsPerPage=void 0,this.totalPages=void 0,this.data=void 0,this.client=e,this.unreadCount=0,this.totalCount=0,this.data=[],this.currentPage=1,this.itemsPerPage=15,this.totalPages=0}async fetch(e,t){void 0===e&&(e=1),void 0===t&&(t=15),this.currentPage=e,this.itemsPerPage=t;const n={url:this.client.baseURL+"/notifications?pageNo="+this.currentPage+"&limit="+this.itemsPerPage,method:"GET",headers:m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this.client.apiKey,"X-ENGAGESPOT-USER-ID":this.client.userId},this.client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this.client.userSignature})},i=await v(n);return this.unreadCount=i.unreadCount,this.totalCount=i.pagination.totalCount,this.totalPages=Math.ceil(this.totalCount/this.itemsPerPage),this.client.unreadCount=i.unreadCount,i.data.forEach((e=>{const t=new E(this.client,{id:e.id,title:e.title,message:e.message,icon:e.icon,url:e.url,createdAt:e.createdAt,seenAt:e.seenAt,data:e.data,clickedAt:e.clickedAt});this.data.push(t)})),this}async markAllAsSeen(){const e={url:this.client.baseURL+"/notifications/markAllNotificationsAsSeen",method:"POST",headers:m({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this.client.apiKey,"X-ENGAGESPOT-USER-ID":this.client.userId},this.client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":this.client.userSignature})};return await v(e),this}}(this)}async markAsRead(e){await this._resolveInstanceState();return new E(this,{id:e}).markAsClicked()}async deleteNotification(e){await this._resolveInstanceState();return new E(this,{id:e}).delete()}async httpsWebPushSubscribe(){if(await this._resolveInstanceState(),!this.isWebPushSupported())return void this._log("Web push is not supported in this browser");if(2!=await this.getWebPushRegistrationState()){if("granted"!==await this.askWebPushPermission())return void this._log("Web push permission was not granted.");const e=await this.getWebPushSubscription(this.publicKey);await this.attachPushSubscription(e)}}async getServiceWorkerRegistration(){if(this._log("getServiceWorkerRegistration called"),!this.isWebPushSupported())return this._log("Web push is not supported in this browser"),null;if(200!==(await fetch(this.SERVICE_WORKER_URL)).status)throw"ES1004 - Engagespot SDK initialization failed. Service worker missing: No file found at /service-worker.js";return window.navigator.serviceWorker.register(this.SERVICE_WORKER_URL,{updateViaCache:"none"}),window.navigator.serviceWorker.ready}async askWebPushPermission(){return new Promise((function(e,t){const n=Notification.requestPermission((function(t){e(t)}));n&&n.then(e,t)}))}async getWebPushSubscription(e){if(!this.serviceWorkerRegistration)throw new Error("ES1005 - A service worker must be registered before push can be subscribed");try{return await this.clearWebPushSubscription(),await this.serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:this.publicKey})}catch(t){return Promise.reject(t)}}async clearWebPushSubscription(){return navigator.serviceWorker.ready.then((e=>e.pushManager.getSubscription())).then((e=>{e&&e.unsubscribe()}))}async getPreferences(){await this._resolveInstanceState();const e=this.baseURL+"/preferences";return await this.apiRequestv2.get(e)}async setPreferences(e){await this._resolveInstanceState();const t=this.baseURL+"/preferences",n={preference:e};return this._log("setPreferences - Trying to send body"),this._log(n),await this.apiRequestv2.patch(t,n),this}async setProfileAttributes(e){const t=this.baseURL+"/profile";return await this.apiRequestv2.put(t,e),this}async getCategories(){const e=this.baseURL+"/categories";return await this.apiRequestv2.get(e)}get baseURL(){return null!==this.endPoint?this.endPoint:f.apiHost}async getWebPushRegistrationState(){return await this._resolveInstanceState(),this.isWebPushSupported()?"denied"===Notification.permission?2:"granted"===Notification.permission?1:0:2}async attachPushSubscription(e){return await this._resolveInstanceState(),fetch(this.baseURL+"/devices/"+this.deviceId+"/webPushSubscription",{method:"POST",cache:"no-cache",body:JSON.stringify(e),headers:{"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":this.apiKey,"X-ENGAGESPOT-USER-ID":this.userId,"X-ENGAGESPOT-USER-SIGNATURE":this.userSignature,"X-ENGAGESPOT-DEVICE-ID":this.deviceId}}).then((e=>(this._log("Push subscription attached"),e.json()))).then((e=>!0)).catch((e=>{const t=new Error("ES1006 - Failed to register push notification with Engagespot server - "+e);Promise.reject(t)}))}createNewDevice(){const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));return this.isNative||localStorage.setItem("_engagespotDeviceId",e),e}getDeviceId(){return this.isNative?localStorage.getItem("_engagespotDeviceId"):null}onNotificationReceive(e){return this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.push(e),!0}onNotificationClick(e){return this.eventListenerStore.NOTIFICATION_CLICKED.push(e),!0}onNotificationDelete(e){return this.eventListenerStore.NOTIFICATION_DELETED.push(e),!0}onNotificationSee(e){return this.eventListenerStore.NOTIFICATION_SEEN.push(e),!0}onWebPushPermissionChange(e){return this.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.push(e),!0}_log(e){this.debug&&console.log("[Engagespot-Core] ",e)}};h(P,"symbol"!=typeof(y="isReady")?y+"":y,!1);var k=P,S=n(8615),C=n(3440),I=n(3403),x=n(8454),N=(n(7827),n(5683)),R=n(7464),$=Object.defineProperty,A=Object.defineProperties,T=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&L(e,n,t[n]);if(O)for(var n of O(t))D.call(t,n)&&L(e,n,t[n]);return e},z=(e,t)=>A(e,T(t)),F=(e,t)=>{var n={};for(var i in e)M.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&O)for(var i of O(e))t.indexOf(i)<0&&D.call(e,i)&&(n[i]=e[i]);return n};function _(e){let t=e,{userId:n,apiKey:i}=t,r=F(t,["userId","apiKey"]),a=null!=e.core&&(e.core.userId!==e.userId||e.core.apiKey!==e.apiKey);return(!e.core||a)&&n&&i&&(e.core=function(e,t,n){return new k(e,z(B({},n),{userId:t}))}(i,n,B({},r))),a}var W=e=>(0,S.Z)(new Date(e),new Date,{addSuffix:!0}),Z={format:C.Z,formatDistance:S.Z,formatRelative:I.Z,subDays:x.Z};var U={Init:"Init"},j=(e,t)=>({type:e,payload:B({},t)}),G={page:1,data:[],rawData:[],hasMore:!1,unreadCount:0,webPushData:{},preferences:{channels:[],userPreferences:{}}};U.SetData="SetData",U.DeleteNotification="DeleteNotification",U.SetUnreadCount="SetUnreadCount",U.IncrementUnreadCount="IncrementUnreadCount",U.DecrementUnreadCount="DecrementUnreadCount",U.AddNotification="AddNotification",U.MarkAsRead="MarkAsRead",U.MarkAllAsSeen="MarkAllAsSeen",U.SetPreferences="SetPreferences",U.SetCategories="SetCategories",U.SetInitialPreferences="SetInitialPreferences";var H=function(e,t,n,i){var r,a,o,l,s,c,d;let u=function(e){return t=>z(B({},t),{created:e((null==t?void 0:t.createdAt)??"",Z)})}(i.formatDate||W),p=e=>B({},u(e));if(t.type===U.Init)return G;if(t.type===U.SetData){let n=null==(r=t.payload)?void 0:r.result,i=n.data.map(p),a=1==n.currentPage?{itemsPerPage:n.itemsPerPage,totalCount:n.totalCount,totalPages:n.totalPages,unreadCount:n.unreadCount}:{},o=e.rawData.concat([z(B({},n),{notifications:i})]);return delete o.data,z(B(z(B({},e),{currentPage:n.currentPage}),a),{rawData:o})}if(t.type===U.DeleteNotification){let n=e.rawData,i=null==(a=t.payload)?void 0:a.notificationId,r=n.map(((e,t)=>{let n=e.notifications.findIndex((e=>e.id===i));if(n<0)return e;let r=[...e.notifications];return r.splice(n,1),z(B({},e),{notifications:r})}));return z(B({},e),{rawData:r})}if(t.type===U.SetUnreadCount)return z(B({},e),{unreadCount:null==(o=t.payload)?void 0:o.unreadCount});if(t.type===U.IncrementUnreadCount)return z(B({},e),{unreadCount:e.unreadCount+1});if(t.type===U.DecrementUnreadCount)return z(B({},e),{unreadCount:e.unreadCount-1});if(t.type===U.AddNotification){let n=e.rawData,i=[{notifications:[p(null==(l=t.payload)?void 0:l.notification)]}].concat(n);return z(B({},e),{rawData:i})}if(t.type===U.MarkAsRead){let n=e.rawData,i=null==(s=t.payload)?void 0:s.notificationId,r=n.map(((e,t)=>{let n=e.notifications.map((e=>e.id!==i||e.clickedAt?e:z(B({},e),{clickedAt:(new Date).toUTCString()})));return z(B({},e),{notifications:n})}));return z(B({},e),{rawData:r})}if(t.type===U.SetInitialPreferences){let n=null==(c=t.payload)?void 0:c.preferences;return z(B({},e),{preferences:B({},n)})}if(t.type===U.SetPreferences){let n=null==(d=t.payload)?void 0:d.preferences,i=e.preferences.userPreferences.map((e=>{var t;let i=n.find((t=>e.category.id===t.categoryId));if(!i)return e;let r=B({},e);return null==(t=null==i?void 0:i.channels)||t.forEach((e=>{var t=e.channel;r.channels[t].enabled=Boolean(e.enabled)})),r}));return z(B({},e),{preferences:z(B({},e.preferences),{userPreferences:i})})}return e},K=function(e){return e};function V(e){e.stateReducers.push(H),e.dataTransformer.push(K),e.useInstance.push(X)}function X(e){let t=e.events,n=(0,i.useCallback)((t=>{e.core.deleteNotification(t),e.dispatch(j(U.DeleteNotification,{notificationId:t}))}),[]),r=(0,i.useCallback)((t=>{e.core.markAsRead(t),e.dispatch(j(U.MarkAsRead,{notificationId:t}))}),[]),a=(0,i.useCallback)((()=>{e.core.getNotificationList().markAllAsSeen(),e.dispatch(j(U.MarkAllAsSeen))}),[]);(0,i.useEffect)((()=>{!async function(){(t=>{e.dispatch({type:U.SetData,payload:{result:t}})})(await e.core.getNotificationList().fetch(e.reducerState.page||1))}()}),[e.reducerState.page,e.apiKey,e.userId]),(0,i.useEffect)((()=>{e.core.onNotificationReceive((n=>{var i;e.dispatch(j(U.AddNotification,{notification:n})),null==(i=null==t?void 0:t.onNotificationReceive)||i.call(t,n)})),e.core.onNotificationDelete((n=>{var i;e.dispatch(j(U.DeleteNotification,{notificationId:n})),null==(i=null==t?void 0:t.onNotificationDelete)||i.call(t,n)})),e.core.onNotificationClick((n=>{var i;e.dispatch(j(U.MarkAsRead,{notificationId:n})),null==(i=null==t?void 0:t.onNotificationClick)||i.call(t,n)})),e.core.onNotificationSee((e=>{var n;null==(n=null==t?void 0:t.onNotificationSee)||n.call(t,e)})),async function(){if(!e.apiKey||!e.userId||!await e.core.isReady())return;let t=e.core.enabledChannels,n=t.map((t=>e.core.supportedChannels[t])),i=await e.core.getPreferences();var r=(await e.core.getCategories()).map((e=>{var n;let r={category:e,channels:{}},a=i.find((e=>r.category.id===e.category.id));return Object.assign(r,a||{}),t.forEach((e=>{let t=!1,n=i.find((t=>t.channel===e));(!a||!n)&&(t=!0),r.channels[e]={enabled:t}})),null==(n=null==r?void 0:r.channelPreferences)||n.forEach((e=>{var n=e.channel;!t.includes(n)||(r.channels[n].enabled=Boolean(e.enabled))})),null==r||delete r.channelPreferences,r}));e.dispatch(j(U.SetInitialPreferences,{preferences:{userPreferences:r,channels:n}}))}()}),[e.apiKey,e.userId]);Object.assign(e,{notifications:e.reducerState.data,unreadCount:e.reducerState.unreadCount,preferences:e.reducerState.preferences,setPreferences:t=>{e.core.setPreferences(t),e.dispatch(j(U.SetPreferences,{preferences:t}))},getCategories:e.core.getCategories,deleteNotification:n,markAsRead:r,markAllAsSeen:a})}function q(e){let t=(0,i.useRef)();return t.current=e,(0,i.useCallback)((()=>t.current),[])}V.pluginName="useNotifications";function Y(e){var t,n;let r=function(e){let t=e,{formatDate:n=W,stateReducer:i=((e,t,n)=>e),dataTransformer:r=((e,t)=>t),plugins:a=[]}=t,o=F(t,["formatDate","stateReducer","dataTransformer","plugins"]),l=[V,...a];return e=B({formatDate:n,plugins:l,stateReducer:i,dataTransformer:r},o),l.flatMap((e=>e.applyDefaults?e.applyDefaults:[])).reduce(((e,t)=>t(e)),e)}(e),a=r,{apiKey:o,userId:l,plugins:s,stateReducer:c,dataTransformer:d}=a,u=(F(a,["apiKey","userId","plugins","stateReducer","dataTransformer"]),q((0,i.useRef)({}).current));Object.assign(u(),z(B({},r),{plugins:s,hooks:{stateReducers:[],dataTransformer:[],useInstance:[]}}));let p=_(u());s.filter(Boolean).forEach((e=>{let t=u().hooks;t&&e(t)}));let h=q(u().hooks);u().getHooks=h,delete u().hooks;let m=q(c),g=(0,i.useCallback)(((e,t)=>{if(!t.type)throw console.info({action:t}),new Error("Unknown Action \ud83d\udc46");let n=m();return[...h().stateReducers,...Array.isArray(n)?n:[n]].reduce(((n,i)=>i(n,t,e,u())||n),e)}),[h,m,u]),[f,b]=(0,i.useReducer)(g,void 0,(()=>g(G,{type:U.Init,payload:{instance:u()}})));p&&b({type:U.Init,payload:{instance:u()}}),Object.assign(u(),{reducerState:f,dispatch:b}),Object.assign(u(),{hideBranding:null==(t=u().core)?void 0:t.hideBranding}),function(e,t,n){void 0===n&&(n={}),e.forEach((e=>{e(t,n)}))}(null==(n=h())?void 0:n.useInstance,u());let v=q(d),y=(0,i.useCallback)((e=>[...h().dataTransformer,...Array.isArray(v())?v():[v()]].reduce(((t,n)=>n(e,t,u())),e)),[h,v]);return Object.assign(u(),{notifications:y(u().reducerState.rawData)}),u()}function J(e){void 0===e&&(e=300);let[t,n]=(0,i.useState)(!1);return{jumpToTop:function(e){null==e||e.scrollTo({top:0,left:0,behavior:"smooth"})},onNotificationScroll:function(t){var i;(null==(i=t.currentTarget)?void 0:i.scrollTop)>e?n(!0):n(!1)},showJumpToTop:t}}function Q(e,t){if(t.type===U.SetData){let t=e.page,n=e.totalPages;return z(B({},e),{hasMore:t<n})}return t.type===U.SetPage?z(B({},e),{page:t.payload.page}):t.type===U.IncrementPage?z(B({},e),{page:e.page+1}):t.type===U.SetHasMore?z(B({},e),{page:e.page+1,hasMore:t.payload.hasMore}):t.type===U.SetLoadRef?z(B({},e),{loaderRef:t.payload.loaderRef}):e}function ee(e,t){return e.flatMap((e=>e.notifications))}function te(e){e.stateReducers.push(Q),e.dataTransformer.push(ee),e.useInstance.push(ne)}function ne(e){let t=e.scrollRoot,n=e.reducerState.page,r=e.reducerState.loaderRef,a=((0,i.useCallback)((t=>e.dispatch({type:U.SetPage,payload:{page:t}})),[n]),(0,i.useCallback)((()=>e.dispatch({type:U.IncrementPage})),[])),o=(0,i.useCallback)((t=>{e.dispatch({type:U.SetLoadRef,payload:{loaderRef:t}})}),[]);(0,i.useEffect)((()=>{if(!r)return;let e=0;let n=new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting&&t.intersectionRatio>=e&&a(),e=t.intersectionRatio}))}),{root:t,rootMargin:"0px 0px 0px 0px",threshold:.3});return r&&n.observe(r),()=>n.disconnect()}),[r]),Object.assign(e,{hasMore:e.reducerState.hasMore,setLoaderRef:o})}U.SetPage="SetPage",U.IncrementPage="IncrementPage",U.SetHasMore="SetHasMore",U.SetLoadRef="SetLoadRef",te.pluginName="useInfiniteScroll";var ie="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3";var re="(1) New Notification Received";U.SetWebPushData="SetWebPushData";var ae=function(e,t){return t.type===U.SetWebPushData?z(B({},e),{webPushData:B(B({},e.webPushData),t.payload)}):e};function oe(e){e.stateReducers.push(ae),e.useInstance.push(le)}function le(e){var t,n,r,a;let o=e.core.enableWebPush&&e.core.isWebPushSupported(),l=(0,i.useCallback)((()=>{e.core.httpsWebPushSubscribe()}),[]),s=null==(n=null==(t=e.reducerState)?void 0:t.webPushData)?void 0:n.webPushState,c=null==(a=null==(r=e.reducerState)?void 0:r.webPushData)?void 0:a.notificationPermissionState,d=t=>{e.dispatch({type:U.SetWebPushData,payload:t})};(0,i.useEffect)((()=>{e.core.onWebPushPermissionChange((e=>{d({webPushState:e})})),e.core.onNotificationReceive((t=>{e.disableNotificationChime||async function(e){new Audio(e).play().catch((e=>{}))}(e.notificationChimeSrc),e.disableTitleUpdate||function(e){let t=document.title;document.title=e,setTimeout((()=>{document.title=t}),5e3)}(e.titleUpdateText)})),async function(){let t=await e.core.getWebPushRegistrationState(),n="denied";t===w.PERMISSION_GRANTED?n="granted":t===w.PERMISSION_DENIED?n="denied":t===w.PERMISSION_REQUIRED&&(n="prompt"),d({webPushState:n,notificationPermissionState:t})}()}),[e.apiKey,e.userId]),Object.assign(e,{allowWebPush:o,enableWebPush:l,webPushState:s,notificationPermissionState:c})}oe.pluginName="useBrowserWebPush",oe.applyDefaults=function(e){let t=e,{disableNotificationChime:n=!0,notificationChimeSrc:i=ie,disableTitleUpdate:r=!1,titleUpdateText:a=re}=t;return F(t,["disableNotificationChime","notificationChimeSrc","disableTitleUpdate","titleUpdateText"]),z(B({},e),{disableNotificationChime:n,notificationChimeSrc:i,disableTitleUpdate:r,titleUpdateText:a})};var se={placement:"bottom-end",preventOverflow:!0,enableArrow:!0,offset:[0,10]};de.pluginName="useFloatingNotification",de.applyDefaults=function(e){let t={panelOpenByDefault:!1,placementOptions:se,enableFloatingPanel:!0},n=e,{floatingPanelOptions:{panelOpenByDefault:i=!1,placementOptions:r=se,enableFloatingPanel:a=!1}=t}=n,o=F(n,["floatingPanelOptions"]);return B({floatingPanelOptions:{panelOpenByDefault:i,placementOptions:r,enableFloatingPanel:a}},o)},U.SetPanelVisibility="SetPanelVisibility",U.TogglePanelVisibility="TogglePanelVisibility";var ce=function(e,t,n,i){var r;return t.type===U.Init?z(B({},e),{panelVisibility:i.floatingPanelOptions.panelOpenByDefault}):t.type===U.SetPanelVisibility?z(B({},e),{panelVisibility:null==(r=t.payload)?void 0:r.panelVisibility}):t.type===U.TogglePanelVisibility?z(B({},e),{panelVisibility:!e.panelVisibility}):t.type===U.AddNotification?z(B({},e),{unreadCount:i.reducerState.panelVisibility?e.unreadCount:e.unreadCount+1}):t.type===U.MarkAllAsSeen?z(B({},e),{unreadCount:0}):e};function de(e){e.stateReducers.push(ce),e.useInstance.push(ue)}function ue(e){let t=e.floatingPanelOptions.placementOptions,n=(0,R.Z)("(max-width: 768px)"),r=(0,i.useRef)(null),a=(0,i.useRef)(null),o=(0,i.useRef)(null),l=e.reducerState.panelVisibility,s=(0,i.useCallback)((()=>{e.reducerState.panelVisibility||e.markAllAsSeen(),e.dispatch({type:U.TogglePanelVisibility})}),[e]),{styles:c,attributes:d,update:u}=(0,N.D)(r.current,a.current,{placement:null==t?void 0:t.placement,modifiers:[{name:"preventOverflow",enabled:null==t?void 0:t.preventOverflow},{name:"offset",enabled:!0,options:{offset:null==t?void 0:t.offset}},{name:"arrow",enabled:null==t?void 0:t.enableArrow,options:{element:o.current}}]});function p(t){var n,i;(null==(n=a.current)?void 0:n.contains(t.target))||(null==(i=r.current)?void 0:i.contains(t.target))||e.reducerState.panelVisibility&&s()}(0,i.useEffect)((()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),[]),(0,i.useEffect)((()=>{e.core.onNotificationReceive((t=>{e.reducerState.panelVisibility&&e.markAllAsSeen()}))}),[e.apiKey,e.userId]);let h={styles:{popper:{position:"fixed",top:0,left:0,zIndex:99999999999999,width:"100%",height:"100%"},offset:{height:"100%",width:"100%",borderRadius:"0"},arrow:{display:"none"}},attributes:{popper:{}}},m=()=>{s(),null==u||u()};Object.assign(e,{isMobile:n,togglePanelVisibility:s,panelVisibility:l,getButtonProps:()=>({onClick:m,ref:r}),getArrowProps:()=>({ref:o,style:n?h.styles.arrow:z(B({},c.arrow),{display:l&&(null==t?void 0:t.enableArrow)?"block":"none"})}),getPanelOffsetProps:()=>({style:n&&l?h.styles.offset:c.offset}),getPanelProps:()=>({ref:a,style:n&&l?h.styles.popper:z(B({},c.popper),{zIndex:999999999999999}),attributes:n&&l?h.attributes.popper:d.popper}),useJumpToTop:J})}var pe=n(7892),he=n(8412),me=n.n(he),ge=n(6509),fe=n(9381),be=n(6281),ve=n(1542),ye=Object.defineProperty,Ee=Object.defineProperties,we=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Ce=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ie=(e,t)=>{for(var n in t||(t={}))ke.call(t,n)&&Ce(e,n,t[n]);if(Pe)for(var n of Pe(t))Se.call(t,n)&&Ce(e,n,t[n]);return e},xe=(e,t)=>Ee(e,we(t)),Ne={colors:{brandingPrimary:"rgb(0,191,166)",colorPrimary:"#282c34",colorSecondary:"#686868"},panel:{boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",width:"30rem",height:"40rem",borderBottomLeftRadius:"11px",borderBottomRightRadius:"11px",borderTopLeftRadius:"11px",borderTopRightRadius:"11px",arrowSize:"10px",arrowInset:"-5px auto auto 0"},feed:{background:"white",placeholderTextColor:"#2c2c2c",height:"30rem",placeholderTextSize:"1rem",placeholderMargin:"1rem 0 0 0",placeholderFontWeight:"300"},feedItem:{border:"1px solid #edf4f2",background:"white",notificationDot:"green",hoverBackground:"#edf4f2",headerColor:"#1c1c1c",descriptionColor:"#464646",dateColor:"#888888",placeHolderBackground:"rgb(230, 230, 230)",placeHolderGradient:"linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%)",height:"30rem",padding:"0.5rem 0.7rem 0.5rem 0.7rem",placeholderTextSize:"1rem",notificationDotSize:".5rem",imageSize:"4.5rem",imageRadius:"50%",hoverTransition:"all 0.2s",textContentPadding:"0 .5rem 0 0",textContentMargin:"0 auto 0 1.2rem",headerFontWeight:"400",headerSize:".9rem",headerPadding:"0 0 0.3rem 0",descriptionSize:"0.8rem",descriptionPadding:"0 0 0.3rem 0",dateSize:".7rem",menuMargin:"0 1rem 0 0"},notificationButton:{background:"transparent",hoverBackground:"rgba(0,191,166, .2)",iconFill:"#edf4f2",floatingButtonShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1.5rem",outline:"none",margin:"0",padding:"5px",borderWidth:"0",normalButtonRadius:"5px",floatingButtonRadius:"50%",transition:"all .2s"},unreadBadgeCount:{background:"red",color:"white",borderRadius:"50%",fontSize:".6rem",inset:"-4px -4px auto auto",size:"1rem"},headerDropdown:{iconFill:"white",background:"transparent",hoverBackground:"",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".6rem",iconHeight:".7rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},dropdown:{iconFill:"#888888",background:"transparent",hoverBackground:"rgb(230, 230, 230)",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".5rem",iconHeight:".6rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},jumpToTop:{background:"white",iconFill:"#888888",shadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1rem",inset:"1.5rem 7rem auto auto",borderRadius:"50%",padding:"0.7rem",margin:"0",transition:"all ease-in-out 0.5s"},header:{fontColor:"white",closeButtonBackground:"transparent",fontSize:"1rem",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",closeButtonOutline:"none",closeButtonPadding:"5px",closeButtonFontSize:"1.6rem",closeButtonMargin:"0"},footer:{background:"white",fontColor:"#484848",preferenceButtonColor:"#484848",border:"1px solid rgb(230, 230, 230)",preferenceButtonHoverBackground:"rgb(230, 230, 230)",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",fontSize:"0.8rem",linkMargin:"0 0.5rem 0 auto",linkSize:"1.5rem",preferenceButtonMargin:"0 0 0 auto",preferenceButtonSize:"1.2rem",preferenceButtonPadding:".2rem",preferenceButtonHoverTransition:"all 0.2s",linkRadius:"3px"},toggle:{background:"rgba(196, 195, 195, 0.55)",activeColor:"#16a085",dotColor:"rgb(255, 255, 255);"},preference:{fontColor:"#1c1c1c",background:"white",height:"30rem",fontWeight:"400",padding:"1.2rem 1.5rem 1.2rem 1.5rem"},preferenceModal:{overlayBackground:"#2b2b2b",headingColor:"#1c1c1c",background:"rgba(255, 255, 255, 0.8)",closeButtonColor:"#bbb9b9",textPrimaryColor:"#1c1c1c",textSecondaryColor:"#525252",buttonPrimaryColor:"white",buttonPrimaryBackgroundColor:"#1abc9c",buttonPrimaryHoverBackgroundColor:"#1a9c82",buttonSecondaryColor:"#4e4e4e",buttonSecondaryBackgroundColor:"transparent",buttonSecondaryHoverBackgroundColor:"#cfcfcf",overlayOpacity:".6",height:"35%",backdropFilter:"blur(1px)",borderRadius:"1.5rem 1.5rem 0 0",padding:"1.2rem 2rem 1.2rem 2rem",textAlign:"center",headerMargin:"0 2rem",headerFontSize:"1rem",closeButtonSize:".6rem",textPrimaryMargin:"0.5rem 2rem",textPrimaryFontSize:".9rem",textSecondaryMargin:"1rem 0 0 0",textSecondaryFontSize:".8rem",primaryButtonFontWeight:"600",primaryButtonPadding:"0.6rem 4.5rem",primaryButtonBorderRadius:"10px",primaryButtonMargin:"0.6rem 0 0.2rem 0",primaryButtonTransition:"all 0.2s"}};function Re(e){return void 0===e&&(e={}),me()(Ne,e)}var $e=(0,i.createContext)({}),Ae=()=>(0,i.useContext)($e);function Te(e){let{theme:t,state:n,children:r}=e;return i.createElement($e.Provider,{value:n},i.createElement(pe.f6,{theme:Re(t)},r))}var Oe=pe.ZP.div``,Me=pe.ZP.div`
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
`,De=pe.ZP.div`
  && {
    ${e=>{let{theme:{panel:t,colors:n}}=e;return pe.iv`
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
`,Le=pe.ZP.div`
  && {
    ${e=>{let{theme:{header:t,colors:n,preference:i}}=e;return pe.iv`
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
`,Be=pe.ZP.h3`
  && {
    ${e=>{let{theme:{header:t}}=e;return pe.iv`
      font-size: ${t.fontSize};
      font-weight: ${t.fontWeight};
      color: ${t.fontColor};
      padding-left: 0.5rem;
      margin-right: auto;
    `}}
  }
`,ze=pe.ZP.button`
  && {
    ${e=>{let{theme:{header:t}}=e;return pe.iv`
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
`;function Fe(e){let{children:t}=e;return i.createElement(Le,null,t)}var _e=pe.ZP.div`
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
`,We=pe.ZP.p`
  && {
    ${e=>{let{theme:t}=e;return pe.iv`
      font-size: ${t.feed.placeholderTextSize};
      margin: ${t.feed.placeholderMargin};
      font-weight: ${t.feed.placeholderFontWeight};
      color: ${t.feed.placeholderTextColor};
    `}}
  }
`,Ze=pe.ZP.div`
  && {
    ${e=>{let{theme:t}=e;return pe.iv`
      position: absolute;
      inset: ${t.jumpToTop.inset};
    `}}
  }
`;function Ue(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 1100",width:"50%"},i.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},i.createElement("path",{d:"M92.8 863.1S55.4 820 33.3 766.2c-22.1-53.8-10.8-102.6 6.2-113.4 17-10.8 57.3 45.4 59.5 95.8 2.3 50.5 0 114.5 0 114.5h-6.2Z",fill:"#52CB96",fillRule:"nonzero"}),i.createElement("path",{d:"M96.2 863.1s-34-203.5-17.6-297.6c16.4-94.1 54.4-91.3 74.8-78.2 20.4 13.1 43.7 79.4 13.6 195.6-30 116.2-59 180.3-59 180.3H96.2v-.1Z",fill:"#37B37F",fillRule:"nonzero"}),i.createElement("path",{stroke:"#FFF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m104.7 863.1 23.1-273.7M96.2 863.1 60.5 727.8"}),i.createElement("path",{d:"M643.6 307.8s39.1-96.6 174.1-60.9c135 35.7 144.5 221.8 208.9 277.3 64.4 55.4 205.9 56.8 196.8 189.3-9.1 132.5-216.3 18-320.8 23.7-317.8 17.3-387 177.4-599.5 87.1-142.2-60.4-100.1-229.2 35.6-279.5 135.7-50.3 240.3-88.8 304.9-237Z",fill:"#F1F2F7",fillRule:"nonzero"}),i.createElement("ellipse",{fill:"#283444",fillRule:"nonzero",cx:557.1,cy:933.1,rx:143.2,ry:61.8}),i.createElement("path",{d:"M568.4 921.7s-3.7 4.5-13.6 4.5c-9.9 0-13.6-4.5-13.6-4.5v-127h27.2v127ZM22.8 863.1C8.8 880.3.4 902.2.4 926.1c0 55 44.6 99.7 99.7 99.7s99.7-44.6 99.7-99.7c0-23.9-8.4-45.8-22.4-63H22.8Z",fill:"#CED5E5",fillRule:"nonzero"}),i.createElement("path",{d:"M908.3 827.6v206.6c0 25.5 63.6 46.1 142 46.1s142-20.6 142-46.1V827.6h-284Z",fill:"#FFB3DA",fillRule:"nonzero"}),i.createElement("ellipse",{fill:"#ED85C3",fillRule:"nonzero",cx:1050.3,cy:827.6,rx:142,ry:67.2}),i.createElement("path",{d:"M267.1 513.8s-2.6-50.2 39.1-66.3c41.7-16.2 155.6-26.4 222-6.8 66.3 19.6-14.6 58 105.4 171.8C743 716.2 802 683.9 866.6 715.4S802 838.7 674.4 836.2s-198.1-28.1-261.1-70.6C350.5 723 262.9 615.9 267.1 513.8Z",fill:"#283444",fillRule:"nonzero"}),i.createElement("path",{d:"M525.8 746.2s21.8 22.5 67 34.1c45.9 11.8 113.1 19.9 174.6 28.3 120.9 16.7 305.6 43.1 305.6 43.1l-2.8-32.3s-293-51.9-430.7-104.9L569 681.1s-26.3 7.2-43.2 65.1Z",fill:"#5900CC",fillRule:"nonzero"}),i.createElement("path",{d:"m665.2 658.5 401 175.9-12.1 33.6-410.3-151.8-66.4-21.6 7.2-19.2c.1 0 53.7-28.7 80.6-16.9Z",fill:"#5900CC",fillRule:"nonzero"}),i.createElement("path",{d:"m401.3 448.4-9.2 57s28.3 8.5 41.8 1.6c13.5-6.9 18.9-22.4 18.9-22.4s-10.3-1.4-23.2-31.3l-28.3-4.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),i.createElement("path",{stroke:"#CED5E5",strokeWidth:3,opacity:.3,strokeLinecap:"round",strokeLinejoin:"round",d:"M1524.1 941.8 337.8 252.7v-72.8L1404.2 29.1"}),i.createElement("path",{d:"M387.3 441.5s30.3 19 55.6 11.3c25.2-7.7-8.6-109.1-8.6-109.1s-14-22.6-49.5-14.1c-35.6 8.5-40.3 74.4 2.5 111.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),i.createElement("path",{d:"M394.7 489.7s-17.6 10.5-34.6 29.3c-8.7 9.6 29.3 74.4 73.5 130.7 42.1 53.7 90.3 99.1 90.3 99.1s31-44.6 69.5-63.9c38.6-19.3 74.5-27.2 74.5-27.2s-90.7-78.2-141-125.5l-33.6-53.3s-20.4-2.3-47.2 1.1c-.1.2-14.7 17.3-51.4 9.7Z",fill:"#FFC933",fillRule:"nonzero"}),i.createElement("path",{d:"M473.4 597.9s18.1-8.1 36.2-10.6c18.1-2.6 12.3 20.4 6.2 29.1-6.1 8.7-48.7 12.3-48.7 12.3s-8.9-5.3-6.3-13.3c2.6-8 5.7-13.9 12.6-17.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),i.createElement("path",{d:"M493.2 479.1s35.5 2 89.1 30.7l16 10.5s33.6 21.4 39 34.2c5.4 12.8-.3 25.2-6.4 30.9l-33-28.8-69.9-22.5-34.8-55ZM360 519c-5.7 8.1-11.3 18.3-16.1 31.1-19.3 51-19.3 93-15.5 97.1 3.8 4.2 52.2 6 139.1-18.1 0 0-7.6-8.7 6.4-32.1 0 0-54.8 6.8-94.1 9.4l9.4-34s4.2-29.9-12.9-43.5L360 519Z",fill:"#FFC933",fillRule:"nonzero"}),i.createElement("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m547 550.9-31.2-28.5"}),i.createElement("path",{d:"m491.9 654.7 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4l103.6-43.5c1.8-.8 5.4-.2 8.1 2.1 1 .9-1.6 1.2-1.8 2.7l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-102.1 54.8c-3.5 1.8-10.9-1.7-10-6.7Z",fill:"#CED5E5",fillRule:"nonzero"}),i.createElement("path",{d:"m495.8 656.5 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4L618 524.5c3.3-1.4 6.8 1.4 6.2 4.9l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-105.5 52.7c-3.3 1.7-7-1.1-6.5-4.7Z",fill:"#F1F2F7",fillRule:"nonzero"}),i.createElement("ellipse",{fill:"#CED5E5",fillRule:"nonzero",transform:"rotate(-67.61 568.994 588.443)",cx:568.994,cy:588.443,rx:13.6,ry:9.5}),i.createElement("path",{d:"M624.3 558.8s-22.2 6-27.2 8.7c-4.9 2.6-12.5 4.9-12.5 12.5s6.8 17.8 12.9 18.5c6 .8 28.2-6.3 33.4-13.2 5.2-6.9 4.5-28-6.6-26.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),i.createElement("path",{d:"M435.2 346.6s6.5-11.4-6.5-18.9c-13-7.5-54.2-16.6-72 24.8 0 0-16.7 3.7-11.3 34.9 5.4 31.2 42 54.1 42 54.1l-3.6-37 8.2-5.1-9.7-26.3c-.1.1 39.5-1.9 52.9-26.5Z",fill:"#8B34FF",fillRule:"nonzero"}),i.createElement("path",{d:"M385.3 409.5s-.9-8.5-8.9-11.6c-8-3.1-15 4-13.3 13.6 1.7 9.7 14.9 18.7 26.5 13.2l-4.3-15.2Z",fill:"#FFDFD7",fillRule:"nonzero"}),i.createElement("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m474 597-94.2 9.4 9.5-34M467.5 629.1l-40.6 9.6"}),i.createElement("path",{d:"M1070.2 819.4s1.9-22.9 11.7-40.3c9.8-17.4 23.6-20 23.6-20l-.8 92.6H1073l-2.8-32.3Z",fill:"#FFF",fillRule:"nonzero"}),i.createElement("path",{d:"M1065.5 836.4s12.2-21.2 29.4-33.6c17.2-12.4 31.4-8.8 31.4-8.8l-42.8 89-30-14.1 12-32.5Z",fill:"#FFF",fillRule:"nonzero"}),i.createElement("path",{stroke:"#8B34FF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m667.8 725.1 385.7 143.7 12.7-34.5-62.7-27.5"}),i.createElement("path",{d:"M1070.9 828.1s16.6-26 34.6-31.4",stroke:"#F1F2F7",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M258.6 273.1H38.1c-15.3 0-27.6-12.4-27.6-27.6v-58.4c0-15.3 12.4-27.6 27.6-27.6h220.5c15.3 0 27.6 12.4 27.6 27.6v58.4c0 15.3-12.3 27.6-27.6 27.6ZM126.7.2h13.6v159.3h-13.6z",stroke:"#FEAC00",fill:"#FFB3DA",fillRule:"nonzero"}),i.createElement("path",{d:"M339 256.2h-6.3c-22.1 0-39.9-17.9-39.9-39.9 0-22.1 17.9-39.9 39.9-39.9h6.3v79.8Z",fill:"#ED85C3",fillRule:"nonzero"}),i.createElement("path",{d:"m1524.1 941.8-118.1-153c-3.2-4.1-4.9-9.2-4.9-14.4v-740c0-4 3.8-6.9 7.7-5.8l112.8 32.5c5.7 1.6 9.6 6.8 9.6 12.7v865.6c-.1 3.7-4.8 5.3-7.1 2.4Z",fill:"#F1F2F7",fillRule:"nonzero"}),i.createElement("path",{fill:"#ED85C3",fillRule:"nonzero",d:"M100.1.2h67.3v20h-67.3z"})))}var je=pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t},clickable:n}=e;return pe.iv`
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
`,Ge=pe.ZP.img`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      height: ${t.imageSize};
      width: ${t.imageSize};
      flex-shrink: 0;
      border-radius: ${t.imageRadius};
    `}}
  }
`,He=pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
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
`,Ke=pe.ZP.h4`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      font-weight: ${t.headerFontWeight};
      font-size: ${t.headerSize};
      padding: ${t.headerPadding};
      color: ${t.headerColor};
    `}}
  }
`,Ve=pe.ZP.p`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      font-size: ${t.descriptionSize};
      padding: ${t.descriptionPadding};
      color: ${t.descriptionColor};
    `}}
  }
`,Xe=pe.ZP.p`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      font-size: ${t.dateSize};
      color: ${t.dateColor};
    `}}
  }
`,qe=pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
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
`,Ye=pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      padding: ${t.padding};
      border: ${t.border};
      background: ${t.background};
    `}}
  }
`,Je=pe.ZP.div`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      height: ${t.imageSize};
      width: ${t.imageSize};
      flex-shrink: 0;
      background: ${t.placeHolderBackground};
      border-radius: ${t.imageRadius};
    `}}
  }
`,Qe=(0,pe.ZP)(He)`
  && {
    flex: 1;
    align-items: stretch;
  }
`,et=(0,pe.ZP)(Ke)`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      background: ${t.placeHolderBackground};
      color: ${t.placeHolderBackground};
      margin: 0 0 0.8rem 0 !important;
      padding: 0;
    `}}
  }
`,tt=(0,pe.ZP)(Ve)`
  && {
    ${e=>{let{theme:{feedItem:t}}=e;return pe.iv`
      background: ${t.placeHolderBackground};
      color: ${t.placeHolderBackground};
      margin: 0 12rem 0 0 !important;
      padding: 0;
    `}}
  }
`,nt=pe.ZP.span`
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
`,it=pe.ZP.button`
  && {
    ${e=>{let{theme:{colors:t},dropdownTheme:n}=e;return pe.iv`
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
`,rt=pe.ZP.div`
  z-index: 1000000;
`,at=pe.ZP.div`
  && {
    ${e=>{let{visible:t,dropdownTheme:n}=e;return pe.iv`
      display: ${t?"flex":"none"};
      flex-direction: column;
      background: ${n.menuBackground};
      border-radius: ${n.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${n.menuShadow}; ;
    `}}
  }
`,ot=pe.ZP.div`
  && {
    ${e=>{let{theme:{dropdown:t}}=e;return pe.iv`
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
`;function lt(){return i.createElement("svg",{id:"light",enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},i.createElement("g",null,i.createElement("path",{d:"m12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})),i.createElement("g",null,i.createElement("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})),i.createElement("g",null,i.createElement("path",{d:"m12 24c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})))}function st(e){let{items:t=[],isVisible:n,theme:r}=e,[a,o]=(0,i.useState)(!1),l=(0,i.useRef)(null),s=(0,i.useRef)(null),{styles:c,attributes:d,update:u}=(0,be.D)(l.current,s.current,{placement:"bottom",modifiers:[{name:"preventOverflow",enabled:!0},{name:"offset",enabled:!0,options:{offset:[-10,10]}}]});function p(e){var t,n;let i=e.target;(null==(t=l.current)?void 0:t.contains(i))||(null==(n=s.current)?void 0:n.contains(i))||o(!1)}return(0,i.useEffect)((()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),[]),i.createElement(i.Fragment,null,i.createElement(it,{"aria-label":"More",ref:l,dropdownTheme:r,style:{visibility:n?"visible":"hidden"},onClick:function(){o(!a),null==u||u()}},i.createElement(lt,null)),i.createElement(rt,Ie({ref:s,style:c.popper},d.popper),i.createElement(at,{style:c.offset,visible:a,dropdownTheme:r},t.map((e=>i.createElement(ot,{key:e.name,"data-name":e.name,onClick:t=>{!function(e,t){e.stopPropagation(),t(),o(!1)}(t,e.action)}},e.name))))))}function ct(e){let{style:t={}}=void 0===e?{}:e;return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",style:Ie({},t)},i.createElement("circle",{cx:"50",cy:"50",r:"50"}))}function dt(e){if(!e)return null;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let a=e(...n);return"string"==typeof a?i.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):a}function ut(e){let{loaderRef:t}=e;return i.createElement("div",{ref:t},i.createElement(Ye,null,i.createElement(Je,null,i.createElement(nt,{circle:!0})),i.createElement(Qe,null,i.createElement(et,null,i.createElement(nt,null,"\xa0")),i.createElement(tt,null,i.createElement(nt,null,"\xa0")))),i.createElement(Ye,null,i.createElement(Je,null,i.createElement(nt,{circle:!0})),i.createElement(Qe,null,i.createElement(et,null,i.createElement(nt,null,"\xa0")),i.createElement(tt,null,i.createElement(nt,null,"\xa0")))))}function pt(e){let{heading:t,description:n,imageUrl:r,clickableUrl:a,placeholderImage:o,read:l,time:s,id:c,data:d,renderNotificationBody:u,isMobile:p,onFeedItemClick:h,markAsClicked:m,deleteNotification:g}=e,[f,b]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),E=(0,i.useRef)(null),w=(0,i.useMemo)((()=>l?[{name:"Delete",action:g}]:[{name:"Delete",action:g},{name:"Mark As Read",action:m}]),[l]),P=()=>{b(!0)},k=()=>{b(!1)};return i.createElement(je,{clickable:null!=a,onMouseEnter:P,onMouseLeave:k,onFocus:P,onBlur:k,onClick:t=>{var n;if(null==(n=E.current)||!n.contains(t.target)){if(h)return void h(t,xe(Ie({url:a},e),{markAsClicked:m}));!a||(m(),window.open(a,"__blank"))}}},i.createElement(Ge,{src:r||o,onError:()=>{y(!0)}}),i.createElement(He,null,dt(u,e)||i.createElement(i.Fragment,null,i.createElement(Ke,{dangerouslySetInnerHTML:{__html:t}}),i.createElement(Ve,{dangerouslySetInnerHTML:{__html:n}}),i.createElement(Xe,null,s))),i.createElement(qe,{ref:E},i.createElement(st,{items:w,isVisible:p||f,theme:Ne.dropdown}),i.createElement(ct,{style:{visibility:l?"hidden":"visible"}})))}var ht=pe.ZP.button`
  && {
    ${e=>{let{theme:{jumpToTop:t}}=e;return pe.iv`
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
`;function mt(){return i.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 330 330"},i.createElement("g",{id:"XMLID_85_"},i.createElement("path",{id:"XMLID_86_",d:"M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195\n\t\tc3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15\n\t\ts-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z"}),i.createElement("path",{id:"XMLID_87_",d:"M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150\n\t\tc-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394\n\t\tC307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z"})),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null),i.createElement("g",null))}function gt(e){let{onClick:t}=e;return i.createElement(ht,{"aria-label":"Jump to Top",onClick:t},i.createElement(mt,null))}var ft="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSJyZ2JhKDAsMTkxLDE2NiwuMykiIC8+Cjwvc3ZnPg==",bt={transition:"opacity 150ms ease-in-out",opacity:0},vt={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function yt(e){let{empty:t=!1,renderCustomPlaceholderContent:n,renderCustomNotificationContent:r,renderNotificationBody:a,notifications:o=[],placeholderText:l="Shh! It's quiet around here..."}=e;var s;let c=Ae(),{onNotificationScroll:d,jumpToTop:u,showJumpToTop:p}=(null==(s=c.useJumpToTop)?void 0:s.call(c))||{},{placeholderImage:h=ft}=c,m=c.isMobile||!1,g=c.onFeedItemClick,f=c.setLoaderRef,b=c.hasMore,v=c.deleteNotification,y=c.markAsRead,E=e=>{var t;let n=null==(t=e.currentTarget.parentNode)?void 0:t.parentElement;null==u||u(n)};return i.createElement(_e,{id:"engagespot-scroll-root",empty:t,onScroll:d},i.createElement(fe.ZP,{in:p,timeout:150},(e=>i.createElement(Ze,{style:Ie(Ie({},bt),vt[e])},i.createElement(gt,{onClick:E})))),t?dt(n)||(e=>i.createElement(i.Fragment,null,i.createElement(Ue,null),i.createElement(We,null,e)))(l):i.createElement(i.Fragment,null,o.map((e=>((e,t,n,r,a,o,l,s)=>dt(t,e)||i.createElement(pt,{heading:e.heading,clickableUrl:e.clickableUrl,description:e.description,imageUrl:e.imageUrl,read:null!=e.clickedAt,time:e.time,placeholderImage:n,key:e.id,id:e.id,data:e.data,markAsClicked:()=>l(e.id),deleteNotification:()=>o(e.id),isMobile:r,onFeedItemClick:a,renderNotificationBody:s}))(e,r,h,m,g,v,y,a))),b&&i.createElement(ut,{loaderRef:f})))}function Et(){return i.createElement("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},i.createElement("rect",{x:"0.925781",width:"12.8327",height:"1.30946",transform:"rotate(45 0.925781 0)"}),i.createElement("rect",{y:"9.07404",width:"12.8327",height:"1.30946",transform:"rotate(-45 0 9.07404)"}))}var wt=pe.ZP.input`
  && {
    ${e=>{let{theme:{toggle:t}}=e;return pe.iv`
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
`,Pt=pe.ZP.div`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return pe.iv`
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
`,kt=pe.ZP.h3`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return pe.iv`
      font-size: 1rem;
      font-weight: 'bold';
      margin: 0.2rem 0rem;
    `}}
  }
`,St=pe.ZP.label`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return pe.iv`
      font-size: 0.8rem;
      margin: 0.4rem 0rem 0 0;
    `}}
  }
`,Ct=pe.ZP.div`
  && {
    ${e=>{let{theme:{preference:t,colors:n}}=e;return pe.iv`
      display: grid;
      grid-template-columns: repeat(2, minmax(min-content, 1fr));
      gap: 1.2rem;
      align-items: flex-start;
      padding: 0.5rem 0.7rem;
      margin: 0.8rem 0;
    `}}
  }
`,It=pe.ZP.div`
  && {
    ${e=>{let{theme:{preference:t}}=e;return pe.iv`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.4rem;

      label {
        margin: 0 0.2rem 0 0;
      }
    `}}
  }
`,xt=pe.ZP.button`
  && {
    ${e=>{let{theme:{preference:t}}=e;return pe.iv`
      margin-top: 3px;
    `}}
  }
`,Nt=pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t,header:n}}=e;return pe.iv`
      background-color: ${t.overlayBackground};
      opacity: ${t.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${n.height} 0 0 0;
    `}}
  }
`,Rt=pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
      position: absolute;
      height: ${t.height};
      bottom: 0;
      left: 0;
      z-index: 1500;
      border-radius: ${t.borderRadius};
    `}}
  }
`,$t=pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
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
`,At=pe.ZP.div`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
      display: flex;
      margin: ${t.headerMargin};
    `}}
  }
`,Tt=pe.ZP.h6`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
      font-size: ${t.headerFontSize};
      color: ${t.headingColor};
      margin-right: auto;
    `}}
  }
`,Ot=pe.ZP.button`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
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
`,Mt=pe.ZP.p`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
      color: ${t.textPrimaryColor};
      margin: ${t.textPrimaryMargin};
      font-size: ${t.textPrimaryFontSize};
      text-align: ${t.textAlign};
    `}}
  }
`,Dt=pe.ZP.p`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
      color: ${t.textSecondaryColor};
      margin: ${t.textSecondaryMargin};
      font-size: ${t.textSecondaryFontSize};
      text-align: ${t.textAlign};
    `}}
  }
`,Lt=pe.ZP.button`
  && {
    ${e=>{let{theme:{preferenceModal:t,colors:n}}=e;return pe.iv`
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
`,Bt=pe.ZP.button`
  && {
    ${e=>{let{theme:{preferenceModal:t}}=e;return pe.iv`
        transition: ${t.primaryButtonTransition};
        color: ${t.buttonSecondaryColor};
        background-color: ${t.buttonSecondaryBackgroundColor};

        &:hover {
          background-color: ${t.buttonSecondaryHoverBackgroundColor};
        }
      `}}
  }
`;function zt(e){let{enableWebPush:t,webPushState:n}=e,r=Ae(),{preferences:a,setPreferences:o}=r,l=null==a?void 0:a.channels.filter((e=>"sms"!==e.id)),s=null==a?void 0:a.userPreferences;return i.createElement(Pt,null,null==l?void 0:l.map((e=>i.createElement(i.Fragment,{key:null==e?void 0:e.id},i.createElement(kt,null,null==e?void 0:e.name),"webPush"===(null==e?void 0:e.id)&&"denied"===n?i.createElement(St,null,"Web Push is currently disabled on the browser. Enable it manually by going into the browser settings"):null,i.createElement(Ct,null,null==s?void 0:s.map((r=>i.createElement(It,{key:r.category.id},i.createElement("label",{htmlFor:`${e.id}-${r.category.id}`},r.category.name),i.createElement(wt,{type:"checkbox",id:`${e.id}-${r.category.id}`,checked:r.channels[e.id].enabled,disabled:"webPush"===e.id&&["denied"].includes(n),onChange:i=>((e,i)=>{let r=i.target.checked;"webPush"===e.channel&&"granted"!==n&&t(),null==o||o([{categoryId:e.categoryId,channels:[{enabled:r,channel:e.channel}]}])})({categoryId:r.category.id,channel:e.id},i)})))))))))}function Ft(e){let{closeModal:t,allowNotifications:n}=e;return i.createElement(Rt,null,i.createElement($t,null,i.createElement(At,null,i.createElement(Tt,null,"Enable Desktop Notifications"),i.createElement(Ot,{onClick:t},i.createElement(Et,null))),i.createElement(Mt,null,"Allow Engagespot to send you push notification when you have new messages and offers"),i.createElement(Lt,{onClick:n},"Yes"),i.createElement(Bt,{onClick:t},"Maybe later"),i.createElement(Dt,null,"You can change your preferences in Settings later, if needed")))}var _t=pe.ZP.div`
  && {
    ${e=>{let{theme:{footer:t}}=e;return pe.iv`
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
`,Wt=pe.ZP.h3`
  && {
    ${e=>{let{theme:{footer:t}}=e;return pe.iv`
      font-size: ${t.fontSize};
      font-weight: ${t.fontWeight};
      color: ${t.fontColor};
    `}}
  }
`,Zt=pe.ZP.a`
  && {
    ${e=>{let{theme:{footer:t}}=e;return pe.iv`
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
`,Ut=pe.ZP.button`
  && {
    ${e=>{let{theme:{footer:t}}=e;return pe.iv`
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
`;function jt(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50pt",height:"50pt",viewBox:"0 0 50 50"},i.createElement("path",{d:"M2.445 0h45.11A2.444 2.444 0 0150 2.445v45.11A2.444 2.444 0 0147.555 50H2.445A2.444 2.444 0 010 47.555V2.445A2.444 2.444 0 012.445 0zm0 0",fill:"#1abc9c"}),i.createElement("path",{d:"M25.879 24.121a23.133 23.133 0 00-16.465-6.82 2.72 2.72 0 00-2.719 2.719 2.72 2.72 0 002.72 2.718c4.769 0 9.25 1.856 12.62 5.227a17.728 17.728 0 015.227 12.62 2.72 2.72 0 105.437 0 23.133 23.133 0 00-6.82-16.464zm0 0",fill:"#fff"}),i.createElement("path",{d:"M41.672 40.586c.004-8.617-3.352-16.715-9.445-22.809-6.094-6.093-14.196-9.449-22.813-9.449a2.72 2.72 0 100 5.438c7.164 0 13.902 2.789 18.965 7.855 5.066 5.067 7.855 11.8 7.855 18.965a2.717 2.717 0 002.72 2.703 2.717 2.717 0 002.718-2.703zm0 0",fill:"#fff"}))}function Gt(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},i.createElement("path",{d:"M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"}))}function Ht(e){let{footerContent:t,showPreferences:n}=e,{togglePreference:r}=Ae();return i.createElement(_t,null,null==t?void 0:t(),n?i.createElement(Ut,{onClick:()=>{null==r||r((e=>!e))}},i.createElement(Gt,null)):null)}function Kt(){return i.createElement("svg",{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.6129 5.79701C0.951277 5.45864 1.49989 5.45864 1.83827 5.79701L7.02994 10.9887C7.36832 11.3271 7.36831 11.8757 7.02994 12.2141V12.2141C6.69156 12.5524 6.14294 12.5524 5.80457 12.2141L0.612899 7.02238C0.274522 6.68401 0.274523 6.13539 0.6129 5.79701V5.79701Z",fill:"white"}),i.createElement("path",{d:"M0.612686 7.0428C0.274309 6.70442 0.274309 6.15581 0.612686 5.81743L5.81742 0.612699C6.15579 0.274322 6.70441 0.274322 7.04279 0.612699V0.612699C7.38117 0.951076 7.38117 1.49969 7.04279 1.83807L1.83806 7.0428C1.49968 7.38118 0.951063 7.38118 0.612686 7.0428V7.0428Z",fill:"white"}),i.createElement("path",{d:"M20 6.15465C20 6.63319 19.6121 7.02112 19.1335 7.02112L1.97744 7.02112L1.97744 5.28818L19.1335 5.28818C19.6121 5.28818 20 5.67611 20 6.15465V6.15465Z",fill:"white"}))}function Vt(e){let{notifications:t=[],panelProps:n,arrowProps:r,route:a,webPushState:o,setRoute:l,panelOffsetProps:s,footerContent:c,renderNotificationContent:d,renderNotificationBody:u,renderEmptyPlaceholderImage:p,togglePanelVisibility:h,visible:m=!1,showPreferences:g,enableWebPush:f,headerDropdownItems:b=[],headerText:v="Notifications"}=e,y="home"===a?v:"Preferences",E=()=>{l("home")},w=(g?[{name:"Preferences",action:()=>{l("preference")}}]:[]).concat(b),[P,k]=(0,i.useState)(!0),[S,C,I]=(0,ge.Z)("showNotificationOverlay","true"),x=()=>{k(!1),C("false")},N=()=>{k(!1),f(),C("false")};return i.createElement(Oe,Ie({},n()),i.createElement(De,Ie({},r())),i.createElement(Me,xe(Ie({},s()),{visible:m}),P&&g&&"true"==S?i.createElement(i.Fragment,null,i.createElement(Nt,null),i.createElement(Ft,{allowNotifications:N,closeModal:x})):null,((e,t)=>i.createElement(Fe,null,i.createElement(xt,{onClick:E,style:{visibility:"preference"===e?"visible":"hidden"}},i.createElement(Kt,null)),i.createElement(Be,null,t),w.length>0?i.createElement(st,{items:w,isVisible:!0,theme:Ne.headerDropdown}):null,i.createElement(ze,{onClick:()=>{null==h||h()}},i.createElement(Et,null))))(a,y),"home"===(R=a)?i.createElement(yt,{notifications:t,empty:0===t.length,renderCustomNotificationContent:d,renderNotificationBody:u,renderCustomPlaceholderContent:p}):"preference"===R?i.createElement(zt,{enableWebPush:f,webPushState:o}):null,i.createElement(Ht,{footerContent:c,showPreferences:g})));var R}var Xt=pe.ZP.button`
  && {
    ${e=>{let{theme:{notificationButton:t},buttonType:n}=e;return pe.iv`
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
`,qt=pe.ZP.span`
  && {
    ${e=>{let{theme:{unreadBadgeCount:t}}=e;return pe.iv`
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
`;function Yt(e){let{count:t}=e;return i.createElement(qt,null,t)}function Jt(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"presentation"},i.createElement("g",{transform:"translate(4.615 2.514)"},i.createElement("path",{d:"M7.382,0C2.947,0,1.021,4.015,1.021,6.67c0,1.984.288,1.4-.81,3.82-1.341,3.449,4.051,4.858,7.171,4.858s8.511-1.41,7.171-4.858c-1.1-2.42-.81-1.836-.81-3.82C13.743,4.015,11.815,0,7.382,0Z",transform:"translate(0 0)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"}),i.createElement("path",{d:"M4.62,0A2.992,2.992,0,0,1,0,0",transform:"translate(5.071 17.998)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"})))}function Qt(e){let{type:t="normal",buttonProps:n,unreadCount:r,panelOpen:a,renderNotificationIcon:o}=e;return i.createElement(Xt,Ie({buttonType:t,"aria-label":"Notifications"},null==n?void 0:n()),r&&!a?i.createElement(Yt,{count:r}):null,o?dt(o):i.createElement(Jt,null))}var en=pe.ZP.div`
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
`,tn={title:"heading",message:"description",icon:"imageUrl",url:"clickableUrl",id:"id",created:"time",clickedAt:"clickedAt",data:"data",markAsClicked:"markAsClicked",deleteNotification:"deleteNotification"},nn=(e,t)=>tn[t],rn=e=>a()(e,nn);function an(e){var t=e,{theme:n,apiKey:r,panelOnly:a=!1,headerText:o,feedItemPlaceholderImage:l,userId:s,panelOpenByDefault:c=!1,renderFooterContent:d,renderNotificationIcon:u,renderEmptyPlaceholderImage:p,renderNotificationContent:h,renderNotificationBody:m,onFeedItemClick:g,headerDropdownItems:f}=t,b=((e,t)=>{var n={};for(var i in e)ke.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&Pe)for(var i of Pe(e))t.indexOf(i)<0&&Se.call(e,i)&&(n[i]=e[i]);return n})(t,["theme","apiKey","panelOnly","headerText","feedItemPlaceholderImage","userId","panelOpenByDefault","renderFooterContent","renderNotificationIcon","renderEmptyPlaceholderImage","renderNotificationContent","renderNotificationBody","onFeedItemClick","headerDropdownItems"]);let v=(0,i.useRef)();v.current=document.getElementById("engagespot-scroll-root");let{notifications:y,setLoaderRef:E,hasMore:w,isMobile:P,panelVisibility:k,getButtonProps:S,getPanelProps:C,getArrowProps:I,getPanelOffsetProps:x,togglePanelVisibility:N,useJumpToTop:R,hideBranding:$,enableWebPush:A,allowWebPush:T,webPushState:O,deleteNotification:M,markAsRead:D,unreadCount:L,preferences:B,getPreferences:z,setPreferences:F}=Y(xe(Ie({apiKey:r,userId:s},b),{floatingPanelOptions:{panelOpenByDefault:c},plugins:[te,oe,de],scrollRoot:v.current})),[_,W]=(0,i.useState)(!1),Z=e=>{W("preference"===e)},U=()=>$&&d?dt(d):$&&!d?null:i.createElement(i.Fragment,null,i.createElement(Zt,{href:"https://engagespot.co",target:"__blank","aria-label":"Engagespot Logo"},i.createElement(jt,null)),i.createElement(Wt,null,"Powered by Engagespot"));return i.createElement(Te,{theme:n,state:{panelVisibility:k,placeholderImage:l,togglePanelVisibility:N,useJumpToTop:R,isMobile:P,preference:_,togglePreference:W,onFeedItemClick:g,setLoaderRef:E,hasMore:w,deleteNotification:M,markAsRead:D,preferences:B,setPreferences:F}},i.createElement(en,null,(()=>{let e=()=>i.createElement(Vt,{visible:k,route:_?"preference":"home",setRoute:Z,panelProps:C,panelOffsetProps:x,arrowProps:I,showPreferences:B.userPreferences&&B.userPreferences.length>0,renderNotificationContent:h,renderNotificationBody:m,renderEmptyPlaceholderImage:p,togglePanelVisibility:N,enableWebPush:A,webPushState:O,footerContent:U,headerText:o,headerDropdownItems:f||[],notifications:y?y.map(rn):[]});return i.createElement(i.Fragment,null,!a&&i.createElement(Qt,{buttonProps:S,unreadCount:L,panelOpen:k,renderNotificationIcon:u}),P?ve.createPortal(e(),document.body):e())})()))}},9604:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return g}});var i=n(5773),r=n(7378),a=n(5318),o=n(1464),l=n(5894);const s=o.ZP.nav`
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
`,d=o.ZP.li`
  display: flex;
  padding: 0 2.5rem;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
  }
`;function u(){let e=null;if(l.Z.canUseDOM){const{Engagespot:t}=n(1659);e=r.createElement(t,{apiKey:"shiynklpz18l3ktqyy6d9a",userId:"anand",endPointOverride:"https://api.staging.engagespot.co/v3/"})}return r.createElement("div",{style:{height:"800px"}},r.createElement(s,null,r.createElement(c,null,r.createElement(d,null,"Home"),r.createElement(d,null,"About"),r.createElement(d,{style:{marginRight:"10rem"}},"Login"),r.createElement(d,null,e))))}const p={sidebar_position:1,title:"Your First Notification Center"},h=void 0,m={unversionedId:"learn-by-examples/react-component/simple-notification",id:"learn-by-examples/react-component/simple-notification",title:"Your First Notification Center",description:"How to build a Notification Center in React App? | Engagespot",source:"@site/docs/learn-by-examples/react-component/simple-notification.mdx",sourceDirName:"learn-by-examples/react-component",slug:"/learn-by-examples/react-component/simple-notification",permalink:"/docs/learn-by-examples/react-component/simple-notification",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learn-by-examples/react-component/simple-notification.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Your First Notification Center"},sidebar:"tutorialSidebar",previous:{title:"Enabling HMAC Authentication",permalink:"/docs/HMAC-authentication/enabling-HMAC-authentication"},next:{title:"Customizing your Notification Center",permalink:"/docs/learn-by-examples/react-component/customizing-notification"}},g=[],f={toc:g};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"How to build a Notification Center in React App? | Engagespot"),(0,a.kt)("meta",{name:"description",content:"Built-in React component to build a Notification Inbox widget in your app. Show realtime notifications to improve the user experience of your app"})),(0,a.kt)("p",null,"This guide assumes that you've already went through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"Getting Started")," section. If you haven't already, please check it our first and then come back here. Don't worry, we'll wait \ud83d\ude09"),(0,a.kt)("p",null,"Today, we'll see how to integrate a simple notification center on your React powered website."),(0,a.kt)("p",null,"Let's start by creating a new create-react-app project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-notifications-app\ncd my-notifications-app\nnpm start\n")),(0,a.kt)("p",null,"If everything went well, you'll be seening this screen below"),(0,a.kt)("p",null,"Next step is to add engagespot to our dependency.\nWe'll be using the component version of engagespot in this tutorial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @engagespot/react-component\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Engagespot supports all popular modules systems namely ",(0,a.kt)("strong",{parentName:"p"},"UMD"),", ",(0,a.kt)("strong",{parentName:"p"},"AMD"),", ",(0,a.kt)("strong",{parentName:"p"},"Commonjs")," and ",(0,a.kt)("strong",{parentName:"p"},"ESModules"),". You are free to use it anywhere you want!"))),(0,a.kt)("p",null,"Let's now create a new component called ",(0,a.kt)("inlineCode",{parentName:"p"},"Nav")," and add some styles to it. This will act as the navigation bar where we'll integrate the notification center later.\nWe'll be using ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-components")," for styling this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Nav.js\nimport styled from 'styled-components';\nimport React from 'react';\n\nconst NavBar = styled.nav`\n  width: 100%;\n  height: 56px;\n  color: white;\n  border-radius: 5%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: orangered;\n`;\n\nconst NavList = styled.ul`\n  list-style-type: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n`;\n\nconst NavItem = styled.li`\n  display: flex;\n  padding: 0 2.5rem;\n  cursor: pointer;\n\n  &:hover {\n    transition: all 0.5s;\n  }\n`;\n\nexport default function Nav({ children }) {\n  return (\n    <NavBar>\n      <NavList>{children}</NavList>\n    </NavBar>\n  );\n}\n\nNav.NavItem = NavItem;\n")),(0,a.kt)("p",null,"Now, import this component into your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," and add a few ",(0,a.kt)("inlineCode",{parentName:"p"},"NavItem"),"s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'//App.js\nimport "./styles.css";\nimport Nav from "./Nav";\nimport { Engagespot } from "@engagespot/react-component";\n\nexport default function App() {\n  return (\n    <div className="App">\n      <Nav>\n        <Nav.NavItem>Home</Nav.NavItem>\n        <Nav.NavItem>About</Nav.NavItem>\n        <Nav.NavItem>Contact</Nav.NavItem>\n      <h1>Hello CodeSandbox</h1>\n      <h2>Start editing to see some magic happen!</h2>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"Nice! Our Navigation is ready and things are really looking good. Only remaining step is to integrate our notification center. Let's import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Engagespot")," component for that"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Engagespot } from '@engagespot/core';\n")),(0,a.kt)("p",null,"Add it as a ",(0,a.kt)("inlineCode",{parentName:"p"},"NavItem")," with the required props"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Nav.NavItem>\n  <Engagespot apiKey="shiynklpz18l3ktqyy6d9a" userId="anandnew" />\n</Nav.NavItem>\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Engagespot packages have built-in typescript support OOTB. So even if you're not using typescript in your apps, IDEs like VSCode\nwould give you autocompletion by reading the type definitions from the package. How cool is that?"))),(0,a.kt)("p",null,"If all went well, it should look somewhat like this \ud83d\udc47"),(0,a.kt)(u,{mdxType:"SimpleNotification"}),(0,a.kt)("p",null,"Here's the complete code for what we done so far."),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/elegant-wiles-kcvvp?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"800px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"elegant-wiles-kcvvp",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("p",null,"In the upcoming chapters, we'll discuss on how to customize the looks of notification center to make it truly your own!"))}b.isMDXComponent=!0}}]);