# Rainbow Firebase Modules

[![CircleCI](https://circleci.com/gh/nexxtway/rainbow-modules/tree/master.svg?style=svg&circle-token=53a582874a41afed402e56203edf4c7dac57d746)](https://circleci.com/gh/nexxtway/rainbow-modules/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/nexxtway/rainbow-modules/badge.svg?branch=master)](https://coveralls.io/github/nexxtway/rainbow-modules?branch=master)

## Development

1. `yarn install`
    1. Since we are using yarn workspaces this command will install the dependencies of the root folder and go into all package’s root folders and execute yarn install. It doesn’t make much sense to invoke lerna bootstrap since it just calls yarn install itself.
2. `yarn build`
    1. Needed for generate the lib folder inside each package as this folder (lib) will be required to use one package in the other packages like: `import { App } from 'package-1'`. Yarn workspaces will symlink each package which means that /node_modules/package-1 will point to the package folder itself and since the main field of the package.json is `"main": "lib/index.js",` lib is required as its `index.js` file will be the entry point of each package.
3. `yarn start`

_Note that you need environment variables in `.env` file in to root of the project_

```
# firebase project config
STORYBOOK_API_KEY=
STORYBOOK_AUTH_DOMAIN=
STORYBOOK_DATABASE_URL=
STORYBOOK_PROJECT_ID=
STORYBOOK_STORAGE_BUCKET=
STORYBOOK_MESSAGING_SENDER_ID=
STORYBOOK_APP_ID=

# maps
STORYBOOK_MAPBOX_ACCESS_TOKEN=map box access token
STORYBOOK_GOOGLE_MAPS_API_KEY=google maps api key
```

_If you want to run command in a specific package:_

```sh
yarn workspace <package-name> <command>
```

_If you want to add a common dependency to all packages:_

```sh
yarn add some-package -W
```
