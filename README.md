## 说明

该文档使用 next.js 和 [netra](https://nextra.site/docs) 构建。文档新内容提交至该仓库 main 分支后会自动构建并部署。

文档支持 markdown 格式。

## 目录结构

所有文档存放在`pages`目录中，目录可多层嵌套。

每层目录下有一个`_meta.json`文件用于组织和配置该层目录下的文档， 在 pages 根目录下的 `_meta.json` 主要用于配置页面和导航栏。其他多层目录下用于具体页面下左侧边栏文档目录组织。

具体可以参考： https://nextra.site/docs/docs-theme/page-configuration

## 本地调试

本地电脑安装`Node.js`环境

安装 `yarn` 包管理器 (推荐)

```bash
npm install yarn -g
```

克隆仓库到本地电脑后，到项目目录下执行命令：

```bash
yarn

yarn dev
```

浏览器打开 http://localhost:3000 即可调试

## 在线修改

支持在 github 中直接添加和编辑文档内容。