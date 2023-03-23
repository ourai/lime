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
| `brand` | `object` | - | 品牌相关配置，主要控制页头左上角的链接与文本，详见下方 |
| `navs` | `Link[]` | - | 页面头部导航 |
| `links` | `Link[]` | - | 页面底部链接 |
| `modules` | `object` | - | 模块功能控制，详见下方 |

## `brand`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | `site.title` | 当前网站品牌所要显示的文本，不指定则显示网站标题 |
| `color` | `string` | - | 品牌主题色，详见下方 |
| `parent` | `Link` | - | 当前网站的父品牌，指定后会在当前网站品牌的左边显示 |

### `color`

设置之后，会在 `<head>` 标签内生成 [`<meta name="theme-color" content="指定主题色">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color){:target="_blank"}{:rel="external nofollow"}。

## `modules`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `social` | `object` | - | 社交相关功能的开关与配置，详见下方 |

### `social`

结构、默认值与说明如下：

{% highlight js %}
{
  share: false, // 是否启用将页面分享到其他 SNS 的按钮
}
{% endhighlight %}
