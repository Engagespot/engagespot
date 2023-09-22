# Change Log

## 1.1.9

### Patch Changes

- Fixes issue with channel names
- Updated dependencies
  - @engagespot/core@1.1.10

## 1.1.8

### Patch Changes

- add react-types as dependency
- Updated dependencies
  - @engagespot/core@1.1.8

## 1.1.7

### Patch Changes

- Fix title getting freezed while sending multiple notifications
- Updated dependencies
  - @engagespot/core@1.1.7

## 1.1.6

### Patch Changes

- added support for whatsapp and other channels
- Updated dependencies
  - @engagespot/core@1.1.6

## 1.1.5

### Patch Changes

- Support re-enabling desktop notifications when preferences are not set. Fix notifications not delivering through webpush after service worker expiry
- Updated dependencies
  - @engagespot/core@1.1.5

## 1.1.4

### Patch Changes

- Fix type issues in angular
- Updated dependencies
  - @engagespot/core@1.1.4

## 1.1.3

### Patch Changes

- target es5 for engagespot-core
- Updated dependencies
  - @engagespot/core@1.1.3

## 1.1.2

### Patch Changes

- Bump up date-fns version
- Updated dependencies
  - @engagespot/core@1.1.2

## 1.1.1

### Patch Changes

- Removed unwanted dependencies
- Updated dependencies
  - @engagespot/core@1.1.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/Engagespot/engagespot/compare/v1.0.3-alpha.0...v1.1.0) (2022-10-19)

**Note:** Version bump only for package @engagespot/react-hooks

## [1.0.3-alpha.0](https://github.com/Engagespot/engagespot/compare/v1.0.2...v1.0.3-alpha.0) (2022-10-18)

**Note:** Version bump only for package @engagespot/react-hooks

## [1.0.2](https://github.com/Engagespot/engagespot/compare/v1.0.1...v1.0.2) (2022-09-25)

### Bug Fixes

- enable unset preferences by default ([ae32511](https://github.com/Engagespot/engagespot/commit/ae32511b017ecc5d479c9a056753849fece61d4b))

## [1.0.1](https://github.com/Engagespot/engagespot/compare/v1.0.0...v1.0.1) (2022-07-16)

**Note:** Version bump only for package @engagespot/react-hooks

# 1.0.0 (2022-07-16)

### Bug Fixes

- :bug: infinite scroll appending duplicate items ([22e7d5d](https://github.com/Engagespot/engagespot/commit/22e7d5d073d5425c6a03dbdeabe7a803baaaf508))
- :bug: panel visibility on document click ([e5e5222](https://github.com/Engagespot/engagespot/commit/e5e52221b7c1ecdc41947b20fd054e8513c59c51))
- :bug: Popper positioning issues ([c3ed833](https://github.com/Engagespot/engagespot/commit/c3ed833e51b2b95eb5c8c5bdbccff690f09c14be))
- :lipstick: use border-box ([b6ca817](https://github.com/Engagespot/engagespot/commit/b6ca817532c7f5e31f835b2c85d236d6bbe5cf83))
- **all:** :bug: hide push notification preferences for unsupported browsers ([722a36a](https://github.com/Engagespot/engagespot/commit/722a36ad6512940047cad2b24387d3230d370387))
- **core:** NotificationItem interface ([7a531c9](https://github.com/Engagespot/engagespot/commit/7a531c94b1b7fb35834ae864f866fc9b27a3dc4b))
- expose endpoint override ([d9277b6](https://github.com/Engagespot/engagespot/commit/d9277b6c22b7e531a8f4070fbb4c267d2a573115))
- Fix types on hooks, minor bug fixes ([#11](https://github.com/Engagespot/engagespot/issues/11)) ([dfa5790](https://github.com/Engagespot/engagespot/commit/dfa5790a1f691846ba89ed8fceca3275723dea66))
- **hooks:** updated z-index ([9fffbc7](https://github.com/Engagespot/engagespot/commit/9fffbc74eb3aa5df1c6b2b4d7dd41f020019daa2))
- **hooks:** z-index in web ([d45dce5](https://github.com/Engagespot/engagespot/commit/d45dce568ec3bc06369bc2bf8f708a1cf0b46a69))
- **react-component:** :bug: fix hiding bottom bar on mobile ([b6aeb8e](https://github.com/Engagespot/engagespot/commit/b6aeb8e85dcae7097ef4b4345f5040124ac5fb69))
- **react-component:** :bug: fix placeholder image ([42368c9](https://github.com/Engagespot/engagespot/commit/42368c9dc6da5d341458c96f9cd44f868602aed3))
- **react-component:** :lipstick: fix styling issues ([21f0c17](https://github.com/Engagespot/engagespot/commit/21f0c17793827f02a7fd888dd18da2b3538ba0cf))
- **react-hooks:** :technologist: Removed hardcoded endPointOverride property from react-hooks ([8e7537b](https://github.com/Engagespot/engagespot/commit/8e7537ba695107066d204a6808219ffbb0b23ce5))
- removed hardcoded enableNonHttpsWebPush:true property from react-hooks & added service-worker.js to example-component ([be3a135](https://github.com/Engagespot/engagespot/commit/be3a135fe867e2a1659066c47298a96e17da371b))

### Features

- :sparkles: allow webpush ([3267ae5](https://github.com/Engagespot/engagespot/commit/3267ae547dcc55e8e83b7a67dedad0dc3a219879))
- :sparkles: document title update on notification received ([1e64a3d](https://github.com/Engagespot/engagespot/commit/1e64a3d06cc9f8dff67a33a60ee48e29815e1d70))
- :sparkles: integrate mark as clicked and delete apis ([3a2b610](https://github.com/Engagespot/engagespot/commit/3a2b6109cb2a6f29157f62b43a7d7c77d7b14a52))
- :sparkles: integrate onNotificationRecieved event ([d99b2db](https://github.com/Engagespot/engagespot/commit/d99b2db34a6671c3db6ef4754a80258488ffa2a0))
- :sparkles: integrate unread badge ([598b053](https://github.com/Engagespot/engagespot/commit/598b05371c9163b8f22c82fa26b08885dee7c645))
- :sparkles: mobile support ([25d8906](https://github.com/Engagespot/engagespot/commit/25d890619b29ab6bb3d488aeb8c615aad3bfe860))
- :sparkles: panelOpenByDefault property ([7a1c0ec](https://github.com/Engagespot/engagespot/commit/7a1c0ec563a9797493c0c00e0acad0d875d4f0c8))
- :sparkles: Support date formatting ([e98db3d](https://github.com/Engagespot/engagespot/commit/e98db3d717244288442915f6033f2699de78e48c))
- :sparkles: support notification chime ([ac5e8da](https://github.com/Engagespot/engagespot/commit/ac5e8da5a1a5fe3cd8552c129b7c131ce49f817f))
- :sparkles: switch theme based on system preference ([9e94902](https://github.com/Engagespot/engagespot/commit/9e94902c0eab8a85249c1947cdd624ebd18d8e9c))
- :sparkles: update created time on notification reopen ([eaa56db](https://github.com/Engagespot/engagespot/commit/eaa56db5f3d3908b069750fcf958fe5fbbd0543a))
- ✨ allow webpush ([00ff6ed](https://github.com/Engagespot/engagespot/commit/00ff6ed47d96e53e4f04c92d568ab9ab882d46e7))
- 🚀 added react-hooks and component packages ([11cfae0](https://github.com/Engagespot/engagespot/commit/11cfae02d25c0b9df7be1d25294fba7fe25b141e))
- added license ([a59b1ff](https://github.com/Engagespot/engagespot/commit/a59b1ff0180d4ca6b8a3ea5d50db9400bd9ef252))
- **dashboard:** migrate dashboard website ([#9](https://github.com/Engagespot/engagespot/issues/9)) ([d303562](https://github.com/Engagespot/engagespot/commit/d303562233ab520fd4ba272338b929681b364494))
- integrate realtime delete ([ff2d01e](https://github.com/Engagespot/engagespot/commit/ff2d01e3d2cca7b571344264b0685fa7c7cb8652))
- push notifications ([79e2d65](https://github.com/Engagespot/engagespot/commit/79e2d65b9cc054fc275f7df6807a6ea48e070c7d))
- **react-component:** :sparkles: programmatic navigation for feed item ([e45e222](https://github.com/Engagespot/engagespot/commit/e45e222d51294433cbcdfd26f1c6501e3c1532bf))
- **react-hooks:** adds notification preference ([ea6e87d](https://github.com/Engagespot/engagespot/commit/ea6e87dbb59234a98d650c401f991549fc013f6d))

### Performance Improvements

- **react-hooks:** :zap: avoid attaching handlers multiple times ([38340fc](https://github.com/Engagespot/engagespot/commit/38340fc4aedcec8e5876669f20ecf2e8bdec85b4))
