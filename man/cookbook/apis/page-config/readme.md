页面配置即定义在 Front Matter 中的变量，除了会用到静态网站生成器预定义与约定俗成的变量之外，本主题也自定义了一些——

## SEO

影响生成 SEO 相关信息的变量：

| 变量名 | 值类型/可选值 | 说明 |
| --- | --- | --- | --- |
| `ksio_seo_title` | `string` | 显示在 `<title>` 中的页面标题，不指定则使用 `title` |
| `ksio_seo_role` | `'writer' | 'developer'` | 根据角色生成特定的页面描述 |
