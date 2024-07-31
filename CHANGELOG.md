# [0.8.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.7.0...v0.8.0) (2024-07-31)


### Code Refactoring

* **babel-preset-miaoxing:** 移除已不再使用的 `plugin-proposal-export-default-from` 和 `plugin-proposal-decorators` 插件 ([5eaa8af](https://github.com/miaoxing/babel-preset-miaoxing/commit/5eaa8afef1045a20acc71f17f4c5b292399e31da))


### Features

* **babel-preset-miaoxing:** 增加 `core-js` 依赖 ([c858e7e](https://github.com/miaoxing/babel-preset-miaoxing/commit/c858e7eafbdbbb874b6ce6aaf848040db335157c))
* **babel-preset-miaoxing:** 更新 `@babel/runtime-corejs3` 以支持 `Promise.withResolvers` ([a3297ba](https://github.com/miaoxing/babel-preset-miaoxing/commit/a3297ba46b842934420a3b63910b821039fb1aa1))


### BREAKING CHANGES

* **babel-preset-miaoxing:** 移除已不再使用的 `plugin-proposal-export-default-from` 和 `plugin-proposal-decorators` 插件

# [0.7.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.6.1...v0.7.0) (2023-05-31)


### Bug Fixes

* 增加 `@babel/preset-env` `7.20` 不包含的包 ([4b152fd](https://github.com/miaoxing/babel-preset-miaoxing/commit/4b152fd504eb8ef2f8ddfe91a4180e8d23d91f2c))


### Code Refactoring

* **babel-preset-miaoxing, antd5:** 移除 `babel-plugin-import`，`antd` v5 不再需要导入 ([355ea36](https://github.com/miaoxing/babel-preset-miaoxing/commit/355ea36ec744a29527bd44ec709bd537a19610e7))


### BREAKING CHANGES

* **babel-preset-miaoxing, antd5:** 移除 `babel-plugin-import`，`antd` v5 不再需要导入

## [0.6.1](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.6.0...v0.6.1) (2022-07-01)


### Features

* **babel-preset-miaoxing:** 移除 `babel-plugin-auto-import-name` ([6d91406](https://github.com/miaoxing/babel-preset-miaoxing/commit/6d9140657a85b8c90348b7b4e065f1485144c527))

# [0.6.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.5.0...v0.6.0) (2022-01-12)


### Code Refactoring

* **babel-preset-miaoxing:** 移除 `@mxjs/bootstrap` 自动加载 ([49bbb1c](https://github.com/miaoxing/babel-preset-miaoxing/commit/49bbb1c0bc66d10463f5802d3fe70b5958ffdbc9))


### BREAKING CHANGES

* **babel-preset-miaoxing:** 移除 `@mxjs/bootstrap` 自动加载

# [0.5.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.4.0...v0.5.0) (2021-10-28)


### Features

* 更新 `@babel/preset-react` 和 `emotion` 支持  `react` 17 ([6289a6f](https://github.com/miaoxing/babel-preset-miaoxing/commit/6289a6f4e0892ca1dc79d6e3978a7f613033dbe6))


### BREAKING CHANGES

* 更新 `emotion` 支持  `react` 17

# [0.4.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.3.0...v0.4.0) (2021-05-11)


### Bug Fixes

* **babel-preset-miaoxing:** 移除 `useBuiltIns`，由项目自行指定 ([b907c29](https://github.com/miaoxing/babel-preset-miaoxing/commit/b907c29b9d322ddd7cdf7e2b963faa365811bf4b))
* 增加 `@emotion/babel-preset-css-prop` 所需的 `@emotion/react` ([51b347f](https://github.com/miaoxing/babel-preset-miaoxing/commit/51b347fa1d06d91207c41042716b40676a0a4290))


### Features

* 增加 `@babel/plugin-transform-runtime`，使类库中不用加上 regenerator-runtime ([b512d36](https://github.com/miaoxing/babel-preset-miaoxing/commit/b512d369306c0c2414d48f7dc69513cf4bfea555))
* 增加 `@babel/plugin-transform-runtime`，使类库中不用加上 regenerator-runtime ([5463f99](https://github.com/miaoxing/babel-preset-miaoxing/commit/5463f99505422f3b6ef72ce4c0d93481ec156a43))


### BREAKING CHANGES

* **babel-preset-miaoxing:** `babel-preset-miaoxing` 移除 `useBuiltIns`，由项目自行指定

# [0.3.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.2.0...v0.3.0) (2021-04-27)


### Features

* 升级 `emotion` 到 11 ([24dd4e8](https://github.com/miaoxing/babel-preset-miaoxing/commit/24dd4e82a30280e5d5c687a09735f9f48cd3c48d))


### BREAKING CHANGES

* 升级 `emotion` 到 11

# [0.2.0](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.1.5...v0.2.0) (2021-03-22)


### Code Refactoring

* 移除 `react-hot-loader` 相关功能 ([55ae621](https://github.com/miaoxing/babel-preset-miaoxing/commit/55ae621000b1cb78168e1b504475f2b1f9d1f1c4))


### BREAKING CHANGES

* 移除 `react-hot-loader` 相关功能

## [0.1.5](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.1.4...v0.1.5) (2021-03-12)


### Bug Fixes

* 更新前端包依赖 ([1721b9c](https://github.com/miaoxing/babel-preset-miaoxing/commit/1721b9cc4d6cbeb70125e6caa50fe258d100241f))

## [0.1.4](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.1.3...v0.1.4) (2020-08-14)


### Bug Fixes

* **deps:** @emotion/babel-preset-css-prop 依赖 @emotion/core ([f8a1f73](https://github.com/miaoxing/babel-preset-miaoxing/commit/f8a1f73f0bc9e50187e55f2f5febf373be3152a6))
* **deps:** 增加 @babel/core 依赖 ([292699e](https://github.com/miaoxing/babel-preset-miaoxing/commit/292699e8c659ffa47b0d50ccc96a1aeaaf9ec6a6))

## [0.1.3](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.1.2...v0.1.3) (2020-08-12)


### Bug Fixes

* 移除 modules: false, 解决 jest 测试 Cannot use import statement outside a module 错误 ([3d2fc61](https://github.com/miaoxing/babel-preset-miaoxing/commit/3d2fc619f36f5e593950379a19d1ae56704f2569))

## [0.1.2](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.1.1...v0.1.2) (2020-08-12)


### Bug Fixes

* **deps:** 增加 react-hot-loader 依赖 ([3cf0ca2](https://github.com/miaoxing/babel-preset-miaoxing/commit/3cf0ca2e64aea77bd959d05aeed7730e03a049b5))

## [0.1.1](https://github.com/miaoxing/babel-preset-miaoxing/compare/v0.1.0...v0.1.1) (2020-08-12)


### Bug Fixes

* 更正依赖配置 ([42d6855](https://github.com/miaoxing/babel-preset-miaoxing/commit/42d68557f2603c76fe3b724bd57a08f3173df4ec))

# 0.1.0 (2020-08-12)


### Features

* add babel-preset-miaoxing ([79d27ae](https://github.com/miaoxing/babel-preset-miaoxing/commit/79d27ae596955f286e39fa7c8b7770e7efeaf271))
