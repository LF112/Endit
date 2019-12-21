<h2 align="center"><strong>Endit</strong></h2>
<p align="center">
What we have done in the past year¿
</p>

> <p align="center"><strong>——————————————————————</strong></p>
>
> 2019年最后一项目，下一年也继续努力吧~
>
> 本项目可能尚未构建完成，欢迎大家为本项目提交 PR ！
> 
> 祝大家在未来的新年里安康。

## 安装

使用 NPM 构建项目

0x01 拉取仓库
```bash
$ git clone https://github.com/LF112/Endit.git endit
$ cd endit
$ npm i
```

0x02 启动 / 构建项目
```bash
$ npm run serve # Dev
$ npm run build # 构建项目
```

## 配置

进入 ``src\components`` ，打开 ``endit.js`` 。该文件为 Endit 的配置文件，在配置之前，您或许得先了解 ``JSON``。

endit.js
```javascript
module.exports = {
    index: [
        [
            '仓库名字',
            '发布日期 (推荐格式：年份, 日期/月份)',
            '该项目的简介',
            '下角标 (推荐格式：由 XXX 创建 or 与 XXX 协作)',
            '长方形的预览图 (Url，可使用图床)',
            'Github Star量'
        ]
    ]
}
```

## 作者

Endit © [LF112](https://www.lf112.net), 根据 [MIT](./LICENSE) 开源许可发布。<br>
> [BLOG](https://blog.lf112.net) · GitHub [@LF112](https://github.com/LF112) · Twitter [@LF_Futiwolf](https://twitter.com/LF_Futiwolf) · Telegram Channel [@LF_Futiwolf](https://t.me/LF_Futiwolf)