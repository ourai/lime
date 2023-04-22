页面配置即定义在 Front Matter 中的变量，除了会用到静态网站生成器预定义与约定俗成的变量之外，本主题也自定义了一些——

## 资源注入

除了整站共用的个别静态资源会写死在 `</head>` 与 `</body>` 前方之外，有些只跟特定布局和页面绑定的静态资源得按需注入，可与[设置页面配置默认值]({{ site.baseurl }}/zh/apis/site-config/#defaults)的能力相结合：

| 变量名 | 值类型/可选值 | 说明 |
| --- | --- | --- |
| `ksio_asset_js` | `string | string[]` | 省略扩展名的 JS 文件路径 |
| `ksio_asset_css` | `string | string[]` | 省略扩展名的 CSS 文件路径 |

## 布局插槽

主题预置布局模板中部分区域的内容可在外部自定义，这些区域叫做「插槽」：

| 变量名 | 值类型/可选值 | 说明 |
| ---| --- | --- |
| `ksio_slot_banner` | `string` | 头图 |
| `ksio_slot_header` | `string` | 头部 |
| `ksio_slot_title` | `string` | 标题 |
| `ksio_slot_meta` | `string` | 作者、标签等信息 |
| `ksio_slot_content` | `string` | 正文 |
| `ksio_slot_footer` | `string` | 底部，大尺寸设备中视觉上是正文右侧 |
| `ksio_slot_aside` | `string` | 侧边栏 |

## 功能开关

| 变量名 | 值类型/可选值 | 说明 |
| --- | --- | --- |
| `ksio_shareable` | `boolean` | 是否显示分享按钮 |

## SEO

影响生成 SEO 相关信息的变量：

| 变量名 | 值类型/可选值 | 说明 |
| --- | --- | --- |
| `ksio_seo_title` | `string` | 显示在 `<title>` 中的页面标题，不指定则使用 `title` |
| `ksio_seo_role` | `'writer' | 'developer'` | 根据角色生成特定的页面描述 |
