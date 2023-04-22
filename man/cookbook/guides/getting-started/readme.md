下述内容将会告知让本主题在你的网站项目中顺利运行并看到效果的基本条件。

## 目录结构

为保持在不同静态网站生成器中使用体验一致性，主题预置的静态资源存放在：

```text
[ASSET_ROOT]
   ├── fonts
   │   └── ...
   ├── images
   │   └── ...
   ├── javascripts
   │   └── ...
   └── stylesheets
       └── ...
```

`[ASSET_ROOT]` 在 Jekyll 和 Hexo 中分别是 `_assets` 与 `themes/lime/source`。即便如此，在实际使用时自定义文件的目录结构可以不按照这个来。

另外，无论是静态资源还是动态模板，主题所提供的和强依赖的基本都放在 `ksio` 或 `_ksio` 文件夹下。

## 下载安装

为满足多种使用场景，本主题提供了相应的方式——

### 包管理器

Jekyll 的主题暂不支持通过 [Gem](https://rubygems.org/){:target="_blank"}{:rel="external nofollow"} 的方式使用，且 Ruby 版本最好为 `2.3.0`。

若 Hexo 的版本在 [`5.0.0`](https://hexo.io/news/2020/07/29/hexo-5-released/){:target="_blank"}{:rel="external nofollow"} 及以上，可在项目根文件夹下通过 `npm i hexo-theme-lime` 安装使用。

### 压缩包

访问源码仓库的 [GitHub Releases](https://github.com/ourai/lime/releases){:target="_blank"}{:rel="external nofollow"} 页面，在目标版本的「Assets」中下载与静态网站生成器相匹配的压缩包到本地：

- `jekyll-theme-lime.zip`
- `hexo-theme-lime.zip`

解压后将文件夹与文件复制或挪动到自己项目的指定位置。

## 创建文件

有几个静态资源文件是要手动创建的——

### 全局依赖

创建 `[ASSET_ROOT]/stylesheets/_helper.scss`，内容为：

```scss
@import "ksio/helper";
```

创建 `[ASSET_ROOT]/stylesheets/global.scss`，内容为：

```scss
@import "ksio/all";
```

若是在 Jekyll 中使用，还要创建 `[ASSET_ROOT]/javascripts/global.js`，内容为：

```js
//= require ./ksio/vendors/jquery-1.11.3.min
//= require ./ksio/bootstrap-sprockets.js
```

### 页面依赖

当要使用主题预置页面的样式时，需要为每个页面创建单独的样式文件并通过 `@import` 去导入：

| 页面 | 布局模板 | 预置样式文件 |
| --- | --- | --- |
| 文章列表 | `ksio/page` 或 `page` | `[ASSET_ROOT]/stylesheets/ksio/pages/_posts.scss` |
| 文章详情 | `ksio/post` 或 `post` | `[ASSET_ROOT]/stylesheets/ksio/pages/_post.scss` |
| 文档详情 | `ksio/doc` | `[ASSET_ROOT]/stylesheets/ksio/pages/_doc.scss` |

## 全局配置

### 主题配置

在 Hexo 中，可通过[指定方式](https://hexo.io/zh-cn/docs/configuration#%E4%BD%BF%E7%94%A8%E4%BB%A3%E6%9B%BF%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6){:target="_blank"}{:rel="external nofollow"}为主题进行全局配置；而 Jekyll 并没有指定的配置方式，故主题的全局配置都挂在[配置文件](https://jekyllrb.com/docs/configuration/){:target="_blank"}{:rel="external nofollow"}中的 `ksio` 下面：

```yaml
ksio:
  brand:
    color: "#0871ab"
  copyright:
    owner:
      text: 欧雷流
      url: https://ourai.ws/
```

全部配置项详见《[网站配置#模板]({{ site.baseurl }}/zh/apis/site-config/#template)》。

### 页面配置

即定义在 Front Matter 中的变量，可用配置项详见《[页面配置]({{ site.baseurl }}/zh/apis/page-config/)》。

在 Jekyll 中可按匹配规则为页面配置[批量设置默认值](https://jekyllrb.com/docs/configuration/front-matter-defaults/){:target="_blank"}{:rel="external nofollow"}，虽 Hexo 本身不具备此机制，但本主题在一定程度上进行了模拟，需在[网站配置文件](https://hexo.io/zh-cn/docs/configuration){:target="_blank"}{:rel="external nofollow"}中添加：

```yaml
ksio:
  defaults:
    layout: # 用于布局模板，值为对象
    page: # 用于页面，值为数组
```

具体用法详见《[网站配置#defaults]({{ site.baseurl }}/zh/apis/site-config/#defaults)》。

## 定制扩展

为尽量满足使用者的定制化需求，主题提供了强大的扩展能力与很多可复用资源，如：主题配置、布局插槽、模板片段、Sass mixin 等。

为避免后续升级主题时所产生的不必要的问题，及让主题能够良性且可持续地发展，在满足自身需求时**不推荐去修改主题预置的动态模板与静态资源**，即存放在 `ksio` 或 `_ksio` 文件夹下的文件。

若你认为本主题在哪方面应该加强，欢迎到 [GitHub Issues](https://github.com/ourai/lime/issues/new/choose){:target="_blank"}{:rel="external nofollow"} 详细地提出你的建议；若有可能，再提交 [PR](https://github.com/ourai/lime/pulls){:target="_blank"}{:rel="external nofollow"} 实现它。
