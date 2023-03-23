## 与静态网站生成器集成

本主题可在一些主流的静态网站生成器中使用，如 Jekyll、Hexo 等。

为了尽量统一用法和便于自动化处理，在封装适配时遵循如下约定：

- 除了个别文件外，主题所提供的和强依赖的资源基本都放在 `ksio` 文件夹下；
- 用于控制主题预置渲染逻辑的配置项都挂在静态网站生成器配置文件中的 `ksio` 下面（详见《[网站配置]({{ site.baseurl }}/apis/site-config/)》）；
- 通过 [KnoSys](https://knosysio.github.io/){:target="_blank"}{:rel="external nofollow"} 生成的文件都在 `knosys` 或 `_knosys` 文件夹下。

### Jekyll
