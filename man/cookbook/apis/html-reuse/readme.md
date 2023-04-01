对 HTML 所描述结构的复用，可分为「布局」与「片段」两大类。

## 布局

| 名称/路径 | 说明 |
| --- | --- |
| `default` | 作为其他布局的基础结构，包含了 `<head>` 及其内容，继承该布局的其他布局的内容会被渲染在 `<body>` 内 |
| `page` | 继承了 `default`，用于常规页面 |
| `post` | 继承了 `page`，用于文章 |
| `doc` | 继承了 `default`，用于使用指南、API 文档等 |
| `blank` | 没有任何 HTML 标签，完全空白 |

## 片段

像 Jekyll 这类静态网站生成器并没有「组件」相关支持，但通过它提供的 [`include`](https://jekyllrb.com/docs/includes/){:target="_blank"}{:rel="external nofollow"} 机制可以进行一定程度上的模拟。

虽没明说，但 `include` 这种复用机制就相当于是模板引擎的「partial」，故在此也将通过 `include` 使用的片段都称为「partial」。

### 常规

每个页面顶多会用到一次的非功能性片段：

| 名称/路径 | 说明 |
| --- | --- |
| `meta/seo` | SEO 相关标签 |
| `meta/render` | 页面渲染及兼容性相关标签 |
| `meta/feed` | Feed 订阅相关标签 |
| `meta/brand` | 网站品牌相关标签 |
| `head` | `<head>` 内非样式与脚本内容 |
| `header` | 页面头部 |
| `footer` | 页面底部 |

### 组件

多次使用的一般性可复用片段，通常会传入参数：

| 名称/路径 | 说明 |
| --- | --- |
| `link` | 用于站内或站外链接的 `<a>` 标签 |
| `brand-link` | 网站品牌链接 |
| `nav-list` | 导航菜单条目列表 |
| `copyright` | 版权声明文本及链接 |
| `doc-toc` | 用于使用指南、API 文档等的文档目录树 |

### 部件

为完成特定业务功能的片段，没有传入的参数：

| 名称/路径 | 说明 |
| --- | --- |
| `disqus` | Disqus 评论框 |
| `comment` | 综合评论框 |
| `share` | 分享到 SNS |
| `toc` | 页内目录树 |
