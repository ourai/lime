---
title: 概述
layout: ksio/doc
css:
  - ksio/pages/post
  - ksio/pages/doc
js:
  - ksio/initializers/time
  - ksio/initializers/lazyload
repo: cookbook
permalink: /guides/
---

本主题由[欧雷](https://linxoid.com/ourai/?utm_source=ourai.github.io/lime){:target="_blank"}{:rel="external nofollow"}于 2015 年开始设计与开发，并在个人网站「[欧雷流](https://ourai.ws/?utm_source=ourai.github.io/lime){:target="_blank"}{:rel="external nofollow"}」及个人各种开源软件的文档站上使用多年；在设计时以提高阅读体验和保持简洁风格为最高原则，体现个性在其次。

因而，适用于博客、个人网站、API 文档站等以内容为主的网站。

## 支持

在编写主题代码时，尽可能地使用兼容性高的写法，并适配多种网站构建方式——

### 浏览器兼容性

大部分 PC 与移动端现代浏览器。

### 静态网站生成器

- Jekyll（非 gem-based）
- Hexo（计划中）

## 依赖

除了具体的静态网站生成器之外，本主题构建在以下技术与服务之上——

### 源码编写

- 内容结构
  - [Markdown](https://www.markdownguide.org/){:target="_blank"}{:rel="external nofollow"}（[kramdown](https://kramdown.gettalong.org/){:target="_blank"}{:rel="external nofollow"}）
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML){:target="_blank"}{:rel="external nofollow"}
  - [Liquid](https://shopify.dev/docs/api/liquid){:target="_blank"}{:rel="external nofollow"}
- 界面样式
  - [Sass](https://sass-lang.com/){:target="_blank"}{:rel="external nofollow"}（SCSS）
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS){:target="_blank"}{:rel="external nofollow"}
- 交互脚本
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"}{:rel="external nofollow"}
  - [CoffeeScript](https://coffeescript.org/){:target="_blank"}{:rel="external nofollow"}

### 辅助库

- [Bootstrap v3.3.6](https://getbootstrap.com/docs/3.3/){:target="_blank"}{:rel="external nofollow"}
- [Font Awesome v4.7](https://fontawesome.com/v4/icons/){:target="_blank"}{:rel="external nofollow"}

### 社交功能

- [LinXoid](https://linxoid.com/){:target="_blank"}{:rel="external nofollow"}
- [Disqus](https://disqus.com/){:target="_blank"}{:rel="external nofollow"} & [DisqusJS](https://disqusjs.skk.moe/){:target="_blank"}{:rel="external nofollow"}
- [Share.js](https://github.com/overtrue/share.js){:target="_blank"}{:rel="external nofollow"}

## 使用

虽说本主题源码开源并免费使用，但还是希望能够在使用时保留主题和作者的名字与来源；如果可以，请在网站底部（即 `footer` 中）加上如下 HTML 代码：

{% highlight html %}
本站主题 <a href="https://ourai.github.io/lime/" target="_blank" rel="external nofollow">Lime</a> 由 <a href="https://linxoid.com/ourai/" target="_blank" rel="external nofollow">欧雷</a> 提供
{% endhighlight %}

关于主题的使用方式详见《[快速上手]({{ site.baseurl }}/guides/getting-started/)》。
