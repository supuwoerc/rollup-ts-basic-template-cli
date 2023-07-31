#!/usr/bin/env node
"use strict";var inquirer=require("inquirer"),download=require("download-git-repo"),path=require("path"),rimraf=require("rimraf"),ora=require("ora"),commander=require("commander");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var inquirer__default=_interopDefaultLegacy(inquirer),download__default=_interopDefaultLegacy(download),path__default=_interopDefaultLegacy(path),ora__default=_interopDefaultLegacy(ora);const questions=[{type:"input",message:"请输入项目名称",name:"projectName",default:"rollup-ts-basic-template"}];var repository$1={"basic-template":"direct:https://codeload.github.com/supuwoerc/rollup-ts-basic-template/zip/refs/heads/main"};function cloneTemplate(i){return new Promise(r=>{var e=process.cwd(),t=i["projectName"],e=path__default.default.resolve(e,t),t=repository$1["basic-template"];rimraf.rimraf.sync(t,{}),download__default.default(t,e,{},e=>{e&&(console.log(e),r(!1)),r(!0)})})}async function handler(e){var r=ora__default.default("开始获取远程仓库模板").start();try{await cloneTemplate(e)?r.succeed("模板获取完成"):r.fail("模板获取失败")}catch(e){console.log(e),r.fail("模板获取失败,发生错误:"+e)}}var name="rollup-ts-basic-template-cli",version="1.0.0",description="create project cli tools",main="./dist/index.js",bin={parrot:"./dist/index.js"},scripts={dev:"ts-node -r tsconfig-paths/register --files ./src/index.ts",build:"rollup --config rollup.config.js"},dependencies={chalk:"^5.3.0","cli-color":"^2.0.3",commander:"^8.0.0","download-git-repo":"^3.0.2",figlet:"^1.6.0",inquirer:"^8.1.1",ora:"^5.4.1",rimraf:"^5.0.1",typescript:"^4.3.5"},devDependencies={"@rollup/plugin-json":"^6.0.0","@rollup/plugin-typescript":"^8.2.1","@types/inquirer":"^7.3.3","@types/node":"^16.3.1",rollup:"^2.53.1","rollup-plugin-uglify":"^6.0.4","ts-node":"^10.1.0","tsconfig-paths":"^3.10.1"},exports$1={".":{import:"./dist/index.js",require:"./dist/index.js"}},files=["dist","*.d.ts"],keywords=["cli","lib","rollup","typescript"],repository={type:"git",url:"git+https://github.com/supuwoerc/rollup-ts-basic-template-cli.git"},author="QiMeng Zhang <zhangzhouou@gmail.com>(https://github.com/supuwoerc)",homepage="https://supuwoerc.github.io/rollup-ts-basic-template-cli",bugs={url:"https://github.com/supuwoerc/rollup-ts-basic-template-cli/issues"},license="MIT",pkg={name:name,version:version,description:description,main:main,bin:bin,scripts:scripts,dependencies:dependencies,devDependencies:devDependencies,exports:exports$1,files:files,keywords:keywords,repository:repository,author:author,homepage:homepage,bugs:bugs,license:license};const figlet=require("figlet"),clc=require("cli-color"),banner=figlet.textSync("parrot",{font:"Isometric4",horizontalLayout:"full"});var banner$1=clc.blue(banner+`
`);function createCmd(){var e=new commander.Command;e.name(pkg.name),e.usage("react-admin [commands]"),e.version(pkg.version),e.addHelpText("beforeAll",banner$1),e.command("create").description("创建新项目"),e.parse(process.argv)}function initInquirer(){inquirer__default.default.prompt(questions).then(async e=>{handler(e)})}createCmd(),initInquirer();
