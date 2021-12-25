# Engagespot

A monorepo for all things engagespot

## Setting Up

This monorepo is configured using `lerna` and `yarn`. So make sure to have them installed globally.

`npm i -g lerna`

`npm i -g yarn`

Once they are installed, start by cloning the repo

`git clone https://gitlab.com/engagespot-new/engagespot.git`

```
$ cd engagespot
$ yarn
$ lerna bootstrap # These steps will install all the dependencies and symlinks all the packages together
$ lerna run build
```

And finally, to run the preview do
`lerna run dev --stream`

## Versioning and Publishing

Use `lerna publish [major | minor | patch prerelease]` to publish a version
Lerna will compare changes with the previous versions and only publishes the packages which have the changes.

