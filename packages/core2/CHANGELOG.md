# Change Log

## 1.1.8

### Patch Changes

- add react-types as dependency

## 1.1.7

### Patch Changes

- Fix title getting freezed while sending multiple notifications

## 1.1.6

### Patch Changes

- added support for whatsapp and other channels

## 1.1.5

### Patch Changes

- Support re-enabling desktop notifications when preferences are not set. Fix notifications not delivering through webpush after service worker expiry

## 1.1.4

### Patch Changes

- Fix type issues in angular

## 1.1.3

### Patch Changes

- target es5 for engagespot-core

## 1.1.2

### Patch Changes

- Bump up date-fns version

## 1.1.1

### Patch Changes

- Removed unwanted dependencies

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/Engagespot/engagespot/compare/v1.0.3-alpha.0...v1.1.0) (2022-10-19)

**Note:** Version bump only for package @engagespot/core

## [1.0.3-alpha.0](https://github.com/Engagespot/engagespot/compare/v1.0.2...v1.0.3-alpha.0) (2022-10-18)

### Features

- support for custom notification data ([7e7aa95](https://github.com/Engagespot/engagespot/commit/7e7aa951c7aa2eade222b8d958c2147a9cc2dfd0))

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

- :bug: infinite scroll appending duplicate items ([22e7d5d](https://github.com/Engagespot/engagespot/commit/22e7d5d073d5425c6a03dbdeabe7a803baaaf508))
- :lipstick: use border-box ([b6ca817](https://github.com/Engagespot/engagespot/commit/b6ca817532c7f5e31f835b2c85d236d6bbe5cf83))
- **all:** :bug: hide push notification preferences for unsupported browsers ([722a36a](https://github.com/Engagespot/engagespot/commit/722a36ad6512940047cad2b24387d3230d370387))
- **core:** added isWebPushSupported() to prevent errors in Safari ([e8b6753](https://github.com/Engagespot/engagespot/commit/e8b67530e558ee6c784d9b6c0218db59ad253c43))
- **core:** added try-catch for serviceWorker registration ([a07460e](https://github.com/Engagespot/engagespot/commit/a07460e61f320fed79475f85197393d057297298))
- **core:** fixes duplicate channel subscriptions by ably client ([0c41596](https://github.com/Engagespot/engagespot/commit/0c41596bb5d0493a099185ca8a8e0607aca13961))
- **core:** NotificationItem interface ([7a531c9](https://github.com/Engagespot/engagespot/commit/7a531c94b1b7fb35834ae864f866fc9b27a3dc4b))
- **core:** onWebPushPermissionChange returns true ([0a2d61a](https://github.com/Engagespot/engagespot/commit/0a2d61ae15c03dd1417fbd728d1ac3c82de30961))
- expose endpoint override ([d9277b6](https://github.com/Engagespot/engagespot/commit/d9277b6c22b7e531a8f4070fbb4c267d2a573115))
- fixed event listeners ([ea1dd40](https://github.com/Engagespot/engagespot/commit/ea1dd40cc55aad2341eb1ee9079c78c2761e4b2d))
- markAllAsSeen api url fix ([eb01562](https://github.com/Engagespot/engagespot/commit/eb015624c7836ef3cf9279bd0a93cec9133e99d1))

### Features

- :sparkles: allow webpush ([3267ae5](https://github.com/Engagespot/engagespot/commit/3267ae547dcc55e8e83b7a67dedad0dc3a219879))
- :sparkles: integrate mark as clicked and delete apis ([3a2b610](https://github.com/Engagespot/engagespot/commit/3a2b6109cb2a6f29157f62b43a7d7c77d7b14a52))
- :sparkles: Support date formatting ([e98db3d](https://github.com/Engagespot/engagespot/commit/e98db3d717244288442915f6033f2699de78e48c))
- ✨ allow webpush ([00ff6ed](https://github.com/Engagespot/engagespot/commit/00ff6ed47d96e53e4f04c92d568ab9ab882d46e7))
- 🚀 added react-hooks and component packages ([11cfae0](https://github.com/Engagespot/engagespot/commit/11cfae02d25c0b9df7be1d25294fba7fe25b141e))
- add markAllAsSeen api ([e4934a0](https://github.com/Engagespot/engagespot/commit/e4934a0426a08c21e09563a298ed833f240b3c4b))
- added license ([a59b1ff](https://github.com/Engagespot/engagespot/commit/a59b1ff0180d4ca6b8a3ea5d50db9400bd9ef252))
- added notification fetch api ([6125ecc](https://github.com/Engagespot/engagespot/commit/6125ecc0c4617fe0653f238bbea2579bfe3d78ec))
- **core:** adds enableWebPush property and it's conditions ([7f928b6](https://github.com/Engagespot/engagespot/commit/7f928b6e98f13556be0ed82c56d28c1fef205c9f))
- **core:** adds onWebPushPermissionChange event listener ([112b840](https://github.com/Engagespot/engagespot/commit/112b840ee8ff15dac2cba6bf80f0021f53af0166))
- **core:** fixes serviceWorkerRegistration logic ([feea0be](https://github.com/Engagespot/engagespot/commit/feea0be8177c5c84dfd097a032d7acc9f41b1010))
- **dashboard:** migrate dashboard website ([#9](https://github.com/Engagespot/engagespot/issues/9)) ([d303562](https://github.com/Engagespot/engagespot/commit/d303562233ab520fd4ba272338b929681b364494))
- docs and core ([c084897](https://github.com/Engagespot/engagespot/commit/c084897b74ed81afd7ebd2b38d5ae725c1599875))
- **react-hooks:** adds notification preference ([ea6e87d](https://github.com/Engagespot/engagespot/commit/ea6e87dbb59234a98d650c401f991549fc013f6d))
