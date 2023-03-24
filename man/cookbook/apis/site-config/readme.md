在 `_config.yml` 文件中声明的用于控制主题预置渲染逻辑的配置项，它们都挂在 `ksio` 下面，通过 `site.ksio` 访问——

配置项「值类型」有 `Link` 字样的，代表 `Link` 是一个描述链接信息的对象，用 TypeScript 的类型表现为：

{% highlight typescript %}
interface Link {
  text: string;
  url?: string;
  children?: Link[];
}
{% endhighlight %}

可用配置项有：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `master` | `object` | - | 站长信息，[详见下方](#master) |
| `meta` | `object` | - | 网站信息，[详见下方](#meta) |
| `brand` | `object` | - | 品牌相关配置，主要控制页头左上角的链接与文本，[详见下方](#brand) |
| `copyright` | `object` | - | 网站版权声明，[详见下方](#copyright) |
| `header` | `object` | - | 页面头部，[详见下方](#header) |
| `footer` | `object` | - | 页面底部，[详见下方](#footer) |
| `social` | `object` | - | 社交相关功能的开关与配置，[详见下方](#social) |
| `seo` | `object` | - | SEO 相关配置，[详见下方](#seo) |
| `statistic` | `object` | - | 数据统计相关配置，[详见下方](#statistic) |

## `master`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `name` | `string` | `site.author.name` | 站长名称 |

## `meta`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | - | 网站发布后的访问链接 |

## `brand`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | `site.title` | 当前网站品牌所要显示的文本，不指定则显示网站标题 |
| `color` | `string` | - | 品牌主题色，[详见下方](#color) |
| `parent` | `Link` | - | 当前网站的父品牌，指定后会在当前网站品牌的左边显示 |

### `color`

设置之后，会在 `<head>` 标签内生成 [`<meta name="theme-color" content="指定主题色">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color){:target="_blank"}{:rel="external nofollow"}。

## `copyright`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `owner` | `Link` | - | 版权所有人，默认使用网站标题与地址 |
| `period` | `object` | - | 有效期间，[详见下方](#period) |

### `period`

结构、默认值与说明如下：

{% highlight js %}
{
  start: 当前年份, // 起始时间，一般只有年份
}
{% endhighlight %}

## `header`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `partial` | `string` | `'ksio/header.html'` | 预置布局模板中页头部分，可指定自定义的替换主题预置的 |
| `navs` | `Link[]` | - | 页面头部导航 |
| `navbar` | `object` | - | 页头导航栏，[详见下方](#navbar) |

### `navbar`

结构、默认值与说明如下：

{% highlight js %}
{
  placement: 'left', // 导航菜单显示位置
}
{% endhighlight %}

## `footer`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `partial` | `string` | `'ksio/footer.html'` | 预置布局模板中页脚部分，可指定自定义的替换主题预置的 |
| `links` | `Link[]` | - | 页面底部链接 |

## `social`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `feed` | `object` | - | feed 订阅功能，[详见下方](#feed) |
| `share` | `boolean` | `false` | 是否启用将页面分享到其他 SNS 的按钮 |
| `comment` | `object` | - | 评论功能，[详见下方](#comment) |

### `feed`

结构、默认值与说明如下：

{% highlight js %}
{
  rss: false, // 是否生成 RSS feed
  atom: false, // 是否生成 Atom feed
}
{% endhighlight %}

### `comment`

待补充。

## `seo`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `suffix` | `boolean` | `true` | 是否在 `<title>` 中将站名作为后缀拼接 |

## `statistic`

待补充。
