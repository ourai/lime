---
title: 关于本站
---

本站既是主题的使用文档，又是在线示例——在浏览学习如何使用本主题的同时，又将其所提供的外观和各种布局几乎都体验了个遍，一举两得！

虽说主题支持不同的静态网站生成器（SSG），但本站是基于 Jekyll 构建的，在其他静态网站生成器中使用的效果应该没什么区别。

{% contentfor footer %}
  {% include widgets/social.html %}
  {% include widgets/toc.html %}
{% endcontentfor %}
