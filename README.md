# web-standard
Front-end engineering development specifications, including custom usage of eslint, markdownlint, stylelint, commitlint, and husky.


## 1、web-standard-commitlint-config
构建commitlint的配置文件，用于规范git commit信息

### 安装

使用时，需要安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install web-standard-commitlint-config @commitlint/cli --save-dev
```

### 使用

在 `commitlint.config.js` 中集成本包:

```javascript
module.exports = {
	extends: ['web-standard-commitlint-config'],
};
```
### 安装husky
```bash
pnpm run prepare
npx husky add .husky/pre-commit "npm run lint-staged
```