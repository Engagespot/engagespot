# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.2](https://github.com/Engagespot/engagespot/compare/v1.0.1...v1.0.2) (2022-09-25)

### Bug Fixes

- enable unset preferences by default ([ae32511](https://github.com/Engagespot/engagespot/commit/ae32511b017ecc5d479c9a056753849fece61d4b))

### Features

- **core:** :sparkles: adds enabledChannels property to Engagespot ([6e41656](https://github.com/Engagespot/engagespot/commit/6e4165619778277ddb8ada7382b4ea4668a143c2))

## [1.0.1](https://github.com/Engagespot/engagespot/compare/v1.0.0...v1.0.1) (2022-07-16)

### Bug Fixes

- fix cache issue in getPreferences api ([97092cf](https://github.com/Engagespot/engagespot/commit/97092cf353bfe7cb78655435fb75d3e2d811ac68))

# 1.0.0 (2022-07-16)

### Bug Fixes

- :bug: Fix text overflow ([c0c3126](https://github.com/Engagespot/engagespot/commit/c0c3126631e22898ad5f19d6bab5ed380d2e15e6))
- :bug: increase specificity of styles ([53fcdb8](https://github.com/Engagespot/engagespot/commit/53fcdb8f67fab6a2db5c0209e8957e379334b034))
- :bug: infinite scroll appending duplicate items ([22e7d5d](https://github.com/Engagespot/engagespot/commit/22e7d5d073d5425c6a03dbdeabe7a803baaaf508))
- :bug: panel visibility on document click ([e5e5222](https://github.com/Engagespot/engagespot/commit/e5e52221b7c1ecdc41947b20fd054e8513c59c51))
- :bug: Popper positioning issues ([c3ed833](https://github.com/Engagespot/engagespot/commit/c3ed833e51b2b95eb5c8c5bdbccff690f09c14be))
- :lipstick: font colors ([518bb14](https://github.com/Engagespot/engagespot/commit/518bb148fb02aa4928cb9e9fdd4be9febf79d88f))
- :lipstick: updated font-sizes ([9f932b0](https://github.com/Engagespot/engagespot/commit/9f932b0babd57f602dff2a70d1d61e2c078e82fc))
- :lipstick: use border-box ([b6ca817](https://github.com/Engagespot/engagespot/commit/b6ca817532c7f5e31f835b2c85d236d6bbe5cf83))
- :rotating_light: update type for notification header ([1f7c39d](https://github.com/Engagespot/engagespot/commit/1f7c39d8be81f9c49fd218443ff67fd47a915070))
- **all:** :bug: hide push notification preferences for unsupported browsers ([722a36a](https://github.com/Engagespot/engagespot/commit/722a36ad6512940047cad2b24387d3230d370387))
- **core:** added isWebPushSupported() to prevent errors in Safari ([e8b6753](https://github.com/Engagespot/engagespot/commit/e8b67530e558ee6c784d9b6c0218db59ad253c43))
- **core:** added try-catch for serviceWorker registration ([a07460e](https://github.com/Engagespot/engagespot/commit/a07460e61f320fed79475f85197393d057297298))
- **core:** fixes duplicate channel subscriptions by ably client ([0c41596](https://github.com/Engagespot/engagespot/commit/0c41596bb5d0493a099185ca8a8e0607aca13961))
- **core:** NotificationItem interface ([7a531c9](https://github.com/Engagespot/engagespot/commit/7a531c94b1b7fb35834ae864f866fc9b27a3dc4b))
- **core:** onWebPushPermissionChange returns true ([0a2d61a](https://github.com/Engagespot/engagespot/commit/0a2d61ae15c03dd1417fbd728d1ac3c82de30961))
- **examples-component:** added missing service-worker.js ([c5791c9](https://github.com/Engagespot/engagespot/commit/c5791c995bae5fc78fabad635562bde868e27270))
- expose endpoint override ([d9277b6](https://github.com/Engagespot/engagespot/commit/d9277b6c22b7e531a8f4070fbb4c267d2a573115))
- Fix types on hooks, minor bug fixes ([#11](https://github.com/Engagespot/engagespot/issues/11)) ([dfa5790](https://github.com/Engagespot/engagespot/commit/dfa5790a1f691846ba89ed8fceca3275723dea66))
- fixed event listeners ([ea1dd40](https://github.com/Engagespot/engagespot/commit/ea1dd40cc55aad2341eb1ee9079c78c2761e4b2d))
- **hooks:** updated z-index ([9fffbc7](https://github.com/Engagespot/engagespot/commit/9fffbc74eb3aa5df1c6b2b4d7dd41f020019daa2))
- **hooks:** z-index in web ([d45dce5](https://github.com/Engagespot/engagespot/commit/d45dce568ec3bc06369bc2bf8f708a1cf0b46a69))
- markAllAsSeen api url fix ([eb01562](https://github.com/Engagespot/engagespot/commit/eb015624c7836ef3cf9279bd0a93cec9133e99d1))
- notification bell fill default value to transparent ([9fa43ff](https://github.com/Engagespot/engagespot/commit/9fa43ffc218c0cf91b70c8941643b0613db6887c))
- **react-component:** :ambulance: bundle css using styled-components ([ea4a740](https://github.com/Engagespot/engagespot/commit/ea4a740501a9f34c4e85367f0713149e7f208d41))
- **react-component:** :bug: fix hiding bottom bar on mobile ([b6aeb8e](https://github.com/Engagespot/engagespot/commit/b6aeb8e85dcae7097ef4b4345f5040124ac5fb69))
- **react-component:** :bug: fix placeholder image ([42368c9](https://github.com/Engagespot/engagespot/commit/42368c9dc6da5d341458c96f9cd44f868602aed3))
- **react-component:** :bug: pass markAsRead to OnFeedItemClick ([5d95000](https://github.com/Engagespot/engagespot/commit/5d950003a82b27a5d6266ff505eb8e02086861e5))
- **react-component:** :lipstick: fix styling issues ([21f0c17](https://github.com/Engagespot/engagespot/commit/21f0c17793827f02a7fd888dd18da2b3538ba0cf))
- **react-component:** use portal to avoid panel overlay ([a8dce88](https://github.com/Engagespot/engagespot/commit/a8dce88da3df8f93fce016049d7cf6647d636b56))
- **react-hooks:** :technologist: Removed hardcoded endPointOverride property from react-hooks ([8e7537b](https://github.com/Engagespot/engagespot/commit/8e7537ba695107066d204a6808219ffbb0b23ce5))
- removed className=modal and overlay ([36d56cb](https://github.com/Engagespot/engagespot/commit/36d56cbb97ff7da7e66d19f05ebb6cdbddef0204))
- removed hardcoded enableNonHttpsWebPush:true property from react-hooks & added service-worker.js to example-component ([be3a135](https://github.com/Engagespot/engagespot/commit/be3a135fe867e2a1659066c47298a96e17da371b))
- **worker:** added missing files ([9848dd3](https://github.com/Engagespot/engagespot/commit/9848dd3eb08c63d56ab98678b4f78cf33b58cfa4))

### Features

- :lipstick: Adds new feed empty placeholder ([45a8344](https://github.com/Engagespot/engagespot/commit/45a834434aeb72a245a1bedb6e2f17f4518971e6))
- :sparkles: Add client package for direct use in vanilla js ([4fa3bdd](https://github.com/Engagespot/engagespot/commit/4fa3bdd51e1c7e2f2bf3e2b3c3271600f905b5fe))
- :sparkles: Allow html notification content ([607d971](https://github.com/Engagespot/engagespot/commit/607d9712027c1df3caac0a6bcd584c02e1d54dc5))
- :sparkles: allow webpush ([3267ae5](https://github.com/Engagespot/engagespot/commit/3267ae547dcc55e8e83b7a67dedad0dc3a219879))
- :sparkles: document title update on notification received ([1e64a3d](https://github.com/Engagespot/engagespot/commit/1e64a3d06cc9f8dff67a33a60ee48e29815e1d70))
- :sparkles: expose styling and dark mode ([e798e1c](https://github.com/Engagespot/engagespot/commit/e798e1c3cafc18f280e2b05d52e7fe9d9660a548))
- :sparkles: integrate mark as clicked and delete apis ([3a2b610](https://github.com/Engagespot/engagespot/commit/3a2b6109cb2a6f29157f62b43a7d7c77d7b14a52))
- :sparkles: integrate onNotificationRecieved event ([d99b2db](https://github.com/Engagespot/engagespot/commit/d99b2db34a6671c3db6ef4754a80258488ffa2a0))
- :sparkles: integrate unread badge ([598b053](https://github.com/Engagespot/engagespot/commit/598b05371c9163b8f22c82fa26b08885dee7c645))
- :sparkles: mobile support ([25d8906](https://github.com/Engagespot/engagespot/commit/25d890619b29ab6bb3d488aeb8c615aad3bfe860))
- :sparkles: panelOpenByDefault property ([7a1c0ec](https://github.com/Engagespot/engagespot/commit/7a1c0ec563a9797493c0c00e0acad0d875d4f0c8))
- :sparkles: Support date formatting ([e98db3d](https://github.com/Engagespot/engagespot/commit/e98db3d717244288442915f6033f2699de78e48c))
- :sparkles: support notification chime ([ac5e8da](https://github.com/Engagespot/engagespot/commit/ac5e8da5a1a5fe3cd8552c129b7c131ce49f817f))
- :sparkles: switch theme based on system preference ([9e94902](https://github.com/Engagespot/engagespot/commit/9e94902c0eab8a85249c1947cdd624ebd18d8e9c))
- :sparkles: update created time on notification reopen ([eaa56db](https://github.com/Engagespot/engagespot/commit/eaa56db5f3d3908b069750fcf958fe5fbbd0543a))
- :tada: add docs package ([afa1143](https://github.com/Engagespot/engagespot/commit/afa114337c765f4f6ac0c6a7baccf38890dda8de))
- ✨ allow webpush ([00ff6ed](https://github.com/Engagespot/engagespot/commit/00ff6ed47d96e53e4f04c92d568ab9ab882d46e7))
- 🚀 added react-hooks and component packages ([11cfae0](https://github.com/Engagespot/engagespot/commit/11cfae02d25c0b9df7be1d25294fba7fe25b141e))
- add markAllAsSeen api ([e4934a0](https://github.com/Engagespot/engagespot/commit/e4934a0426a08c21e09563a298ed833f240b3c4b))
- added license ([a59b1ff](https://github.com/Engagespot/engagespot/commit/a59b1ff0180d4ca6b8a3ea5d50db9400bd9ef252))
- added new bell icon ([13c3971](https://github.com/Engagespot/engagespot/commit/13c3971198c793bdf77f608b69ed2684f809e2e3))
- added notification fetch api ([6125ecc](https://github.com/Engagespot/engagespot/commit/6125ecc0c4617fe0653f238bbea2579bfe3d78ec))
- adds service worker ([ae188c4](https://github.com/Engagespot/engagespot/commit/ae188c413076b73c677ddf9ff485c22ba34c3abd))
- **all:** :sparkles: hide branding on premium plan ([42c7888](https://github.com/Engagespot/engagespot/commit/42c788893ee09d1772ff7bd9862e444a57702f13))
- **core:** adds enableWebPush property and it's conditions ([7f928b6](https://github.com/Engagespot/engagespot/commit/7f928b6e98f13556be0ed82c56d28c1fef205c9f))
- **core:** adds onWebPushPermissionChange event listener ([112b840](https://github.com/Engagespot/engagespot/commit/112b840ee8ff15dac2cba6bf80f0021f53af0166))
- **core:** fixes serviceWorkerRegistration logic ([feea0be](https://github.com/Engagespot/engagespot/commit/feea0be8177c5c84dfd097a032d7acc9f41b1010))
- **dashboard:** migrate dashboard website ([#9](https://github.com/Engagespot/engagespot/issues/9)) ([d303562](https://github.com/Engagespot/engagespot/commit/d303562233ab520fd4ba272338b929681b364494))
- docs and core ([c084897](https://github.com/Engagespot/engagespot/commit/c084897b74ed81afd7ebd2b38d5ae725c1599875))
- **docs:** added hmac auth ([5b506ed](https://github.com/Engagespot/engagespot/commit/5b506ed636f94fae5fc05cbbb38f8c1b18470131))
- **docs:** added intro ([57806ab](https://github.com/Engagespot/engagespot/commit/57806ab99f5cbd80c08e7d6aaadfd94bc5c82690))
- **docs:** added web push ([7e1c4d2](https://github.com/Engagespot/engagespot/commit/7e1c4d245bad1c704e27bba1e6bab7d5b61f3003))
- integrate realtime delete ([ff2d01e](https://github.com/Engagespot/engagespot/commit/ff2d01e3d2cca7b571344264b0685fa7c7cb8652))
- New notification icon + style updates ([481fd3b](https://github.com/Engagespot/engagespot/commit/481fd3baa612186ff854bbadeacc588d688cea3c))
- push notifications ([79e2d65](https://github.com/Engagespot/engagespot/commit/79e2d65b9cc054fc275f7df6807a6ea48e070c7d))
- **react-component:** :sparkles: programmatic navigation for feed item ([e45e222](https://github.com/Engagespot/engagespot/commit/e45e222d51294433cbcdfd26f1c6501e3c1532bf))
- **react-hooks:** adds notification preference ([ea6e87d](https://github.com/Engagespot/engagespot/commit/ea6e87dbb59234a98d650c401f991549fc013f6d))
- style updates ([6e88133](https://github.com/Engagespot/engagespot/commit/6e88133fb87460566401995c4f0a3db980861358))

### Performance Improvements

- **react-hooks:** :zap: avoid attaching handlers multiple times ([38340fc](https://github.com/Engagespot/engagespot/commit/38340fc4aedcec8e5876669f20ecf2e8bdec85b4))
