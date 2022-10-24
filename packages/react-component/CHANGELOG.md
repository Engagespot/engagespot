# Change Log

## 1.1.5

### Patch Changes

- Add react reference types for component

## 1.1.4

### Patch Changes

- Fix type issues in angular
- Updated dependencies
  - @engagespot/react-hooks@1.1.4

## 1.1.3

### Patch Changes

- target es5 for engagespot-core
- Updated dependencies
  - @engagespot/react-hooks@1.1.3

## 1.1.2

### Patch Changes

- Bump up date-fns version
- Updated dependencies
  - @engagespot/react-hooks@1.1.2

## 1.1.1

### Patch Changes

- Removed unwanted dependencies
- Updated dependencies
  - @engagespot/react-hooks@1.1.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/Engagespot/engagespot/compare/v1.0.3-alpha.0...v1.1.0) (2022-10-19)

**Note:** Version bump only for package @engagespot/react-component

## [1.0.3-alpha.0](https://github.com/Engagespot/engagespot/compare/v1.0.2...v1.0.3-alpha.0) (2022-10-18)

### Features

- support for custom notification data ([7e7aa95](https://github.com/Engagespot/engagespot/commit/7e7aa951c7aa2eade222b8d958c2147a9cc2dfd0))

## [1.0.2](https://github.com/Engagespot/engagespot/compare/v1.0.1...v1.0.2) (2022-09-25)

### Bug Fixes

- enable unset preferences by default ([ae32511](https://github.com/Engagespot/engagespot/commit/ae32511b017ecc5d479c9a056753849fece61d4b))

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
- **core:** NotificationItem interface ([7a531c9](https://github.com/Engagespot/engagespot/commit/7a531c94b1b7fb35834ae864f866fc9b27a3dc4b))
- expose endpoint override ([d9277b6](https://github.com/Engagespot/engagespot/commit/d9277b6c22b7e531a8f4070fbb4c267d2a573115))
- Fix types on hooks, minor bug fixes ([#11](https://github.com/Engagespot/engagespot/issues/11)) ([dfa5790](https://github.com/Engagespot/engagespot/commit/dfa5790a1f691846ba89ed8fceca3275723dea66))
- notification bell fill default value to transparent ([9fa43ff](https://github.com/Engagespot/engagespot/commit/9fa43ffc218c0cf91b70c8941643b0613db6887c))
- **react-component:** :ambulance: bundle css using styled-components ([ea4a740](https://github.com/Engagespot/engagespot/commit/ea4a740501a9f34c4e85367f0713149e7f208d41))
- **react-component:** :bug: fix hiding bottom bar on mobile ([b6aeb8e](https://github.com/Engagespot/engagespot/commit/b6aeb8e85dcae7097ef4b4345f5040124ac5fb69))
- **react-component:** :bug: fix placeholder image ([42368c9](https://github.com/Engagespot/engagespot/commit/42368c9dc6da5d341458c96f9cd44f868602aed3))
- **react-component:** :bug: pass markAsRead to OnFeedItemClick ([5d95000](https://github.com/Engagespot/engagespot/commit/5d950003a82b27a5d6266ff505eb8e02086861e5))
- **react-component:** :lipstick: fix styling issues ([21f0c17](https://github.com/Engagespot/engagespot/commit/21f0c17793827f02a7fd888dd18da2b3538ba0cf))
- **react-component:** use portal to avoid panel overlay ([a8dce88](https://github.com/Engagespot/engagespot/commit/a8dce88da3df8f93fce016049d7cf6647d636b56))
- removed className=modal and overlay ([36d56cb](https://github.com/Engagespot/engagespot/commit/36d56cbb97ff7da7e66d19f05ebb6cdbddef0204))

### Features

- :lipstick: Adds new feed empty placeholder ([45a8344](https://github.com/Engagespot/engagespot/commit/45a834434aeb72a245a1bedb6e2f17f4518971e6))
- :sparkles: Add client package for direct use in vanilla js ([4fa3bdd](https://github.com/Engagespot/engagespot/commit/4fa3bdd51e1c7e2f2bf3e2b3c3271600f905b5fe))
- :sparkles: Allow html notification content ([607d971](https://github.com/Engagespot/engagespot/commit/607d9712027c1df3caac0a6bcd584c02e1d54dc5))
- :sparkles: allow webpush ([3267ae5](https://github.com/Engagespot/engagespot/commit/3267ae547dcc55e8e83b7a67dedad0dc3a219879))
- :sparkles: expose styling and dark mode ([e798e1c](https://github.com/Engagespot/engagespot/commit/e798e1c3cafc18f280e2b05d52e7fe9d9660a548))
- :sparkles: integrate mark as clicked and delete apis ([3a2b610](https://github.com/Engagespot/engagespot/commit/3a2b6109cb2a6f29157f62b43a7d7c77d7b14a52))
- :sparkles: integrate onNotificationRecieved event ([d99b2db](https://github.com/Engagespot/engagespot/commit/d99b2db34a6671c3db6ef4754a80258488ffa2a0))
- :sparkles: integrate unread badge ([598b053](https://github.com/Engagespot/engagespot/commit/598b05371c9163b8f22c82fa26b08885dee7c645))
- :sparkles: mobile support ([25d8906](https://github.com/Engagespot/engagespot/commit/25d890619b29ab6bb3d488aeb8c615aad3bfe860))
- :sparkles: Support date formatting ([e98db3d](https://github.com/Engagespot/engagespot/commit/e98db3d717244288442915f6033f2699de78e48c))
- :sparkles: switch theme based on system preference ([9e94902](https://github.com/Engagespot/engagespot/commit/9e94902c0eab8a85249c1947cdd624ebd18d8e9c))
- :sparkles: update created time on notification reopen ([eaa56db](https://github.com/Engagespot/engagespot/commit/eaa56db5f3d3908b069750fcf958fe5fbbd0543a))
- ✨ allow webpush ([00ff6ed](https://github.com/Engagespot/engagespot/commit/00ff6ed47d96e53e4f04c92d568ab9ab882d46e7))
- 🚀 added react-hooks and component packages ([11cfae0](https://github.com/Engagespot/engagespot/commit/11cfae02d25c0b9df7be1d25294fba7fe25b141e))
- added license ([a59b1ff](https://github.com/Engagespot/engagespot/commit/a59b1ff0180d4ca6b8a3ea5d50db9400bd9ef252))
- added new bell icon ([13c3971](https://github.com/Engagespot/engagespot/commit/13c3971198c793bdf77f608b69ed2684f809e2e3))
- **all:** :sparkles: hide branding on premium plan ([42c7888](https://github.com/Engagespot/engagespot/commit/42c788893ee09d1772ff7bd9862e444a57702f13))
- **dashboard:** migrate dashboard website ([#9](https://github.com/Engagespot/engagespot/issues/9)) ([d303562](https://github.com/Engagespot/engagespot/commit/d303562233ab520fd4ba272338b929681b364494))
- New notification icon + style updates ([481fd3b](https://github.com/Engagespot/engagespot/commit/481fd3baa612186ff854bbadeacc588d688cea3c))
- push notifications ([79e2d65](https://github.com/Engagespot/engagespot/commit/79e2d65b9cc054fc275f7df6807a6ea48e070c7d))
- **react-component:** :sparkles: programmatic navigation for feed item ([e45e222](https://github.com/Engagespot/engagespot/commit/e45e222d51294433cbcdfd26f1c6501e3c1532bf))
- **react-hooks:** adds notification preference ([ea6e87d](https://github.com/Engagespot/engagespot/commit/ea6e87dbb59234a98d650c401f991549fc013f6d))
- style updates ([6e88133](https://github.com/Engagespot/engagespot/commit/6e88133fb87460566401995c4f0a3db980861358))
