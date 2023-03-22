---
title: 关于本站
---

{% assign utm_params = "utm_source=ourai.github.io/lime&utm_medium=about" %}
{% assign sponsor_url = "https://ourai.ws/sponsor/?" | append: utm_params %}

本站既是主题的使用文档，又是在线示例——在浏览学习如何使用本主题的同时，又将其所提供的外观和各种布局几乎都体验了个遍，一举两得！

虽说主题支持不同的静态网站生成器（SSG），但本站是基于 Jekyll 构建的，在其他静态网站生成器中使用的效果应该没什么区别。

## 资助
{:#donation}

若您正在使用或喜欢本主题，请考虑[请我喝杯咖啡]({{ sponsor_url }}#donation){:target="_blank"}{:rel="external nofollow"}以表心意；也许除了本主题之外，还看好[我写的文章](https://ourai.ws/posts/?{{ utm_params }}){:target="_blank"}{:rel="external nofollow"}和[其他作品](https://oss.ourai.ws/?{{ utm_params }}){:target="_blank"}{:rel="external nofollow"}，希望能够保持长期且高质量的产出，也可以考虑[赞助]({{ sponsor_url }}#sponsor){:target="_blank"}{:rel="external nofollow"}我，感激不尽！

{% contentfor footer %}
  {% include widgets/social.html %}
  {% include widgets/toc.html %}
{% endcontentfor %}
