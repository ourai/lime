像 Jekyll 这类静态网站生成器并没有「组件」相关支持，但通过它提供的 [`include`](https://jekyllrb.com/docs/includes/){:target="_blank"}{:rel="external nofollow"} 机制可以进行一定程度上的模拟。

虽没明说，但 `include` 这种复用机制就相当于是模板引擎的「partial」，故在此也将通过 `include` 使用的片段都称为「partial」。
