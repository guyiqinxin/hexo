!function () {
    var cssCode = window.cssCode = `
/*欢迎访问My Hexo个人博客
请允许对我My Hexo做一个简单的介绍，但是纯文字太单调，所以我想来点特别的。
首先我准备一下样式。*/
*{
	transition: all .5s;
}
/*Hexo简介Hexo 是一个快速、简洁且高效的博客框架*/
html{
	background: #333034;
}
/*使用 Markdown解析文章和图片*/
#code{
    border: 2px solid #00FF1B;
    padding: 20px;
}
/*结合官网提供的靓丽的主题可快速生成*/
.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.punctuation{
    color: #f8f8f2;
}
.token.function{
    color: red;
}
#code{
    color: #f8f8f2;
}
/*具体使用可参考【小宇Boi】的视频*/
#code{
    animation: breath 4s linear infinite;
}
/*相关链接*/
/*https://www.bilibili.com/video/BV1ts4y1f7Gu*/
/*请稍等我调整一下位置*/
`
    var htmlCode = window.htmlCode = `
#code{
    display: inline-block;
    position: fixed;
    right: 0;
    width: 50%;
    height: 80%;
    margin-right: 20px;
}
#paper{
    position: fixed;
    left: 0;
    width: 45%;
    height: 80%;
    background: linear-gradient(to bottom, #59ed85, #37bf60); 
    padding: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    margin-top: 30%;
    
}
/*出现小BUG*/
/*努力修复中...*/
#paper:after {
    width: 25%;
    height: 5%;
    content: " ";
    margin-left: -90px;
    border: 1px solid rgba(200, 200, 200, .8);
    background: rgba(254, 254, 254, .6);
    box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    transform: rotate(-5deg);
    position: absolute;
    left: 50%;
    top:-15px;
}
#paper{
    margin-top: 0;
}
/*具体信息还是以文字介绍吧*/
`
    var markdown = window.markdown = `
***MyHexo***

***主题***：Ayer     https://gitee.com/mirrors/ayer.git

***评论***：Valine   https://valine.js.org/

***后台***：LeanCloud     https://console.leancloud.cn/apps

***友链***：https://www.yuwenchao.cn

***码云***:https://gitee.com/chaoogg-new/chaoogg-new/tree/master

***感谢***:https://space.bilibili.com/82363089

***邮箱***：guyiqinxin\_chao@163.com

***微信***：ChaooGG

![微信二维码](https://afflatus-1309221527.cos.ap-nanjing.myqcloud.com/afflatus/wx-md.jpg)

***返回首页：https://chaoogg-new.gitee.io***
`
    var changeCode = window.changeCode = `
/*markdown格式转换中......*/
`
    var conclusion = window.conclusion = `
/*这个就是My Hexo的简单介绍。如果您想要更多了解的话，请联系我吧*/
`
}.call()
