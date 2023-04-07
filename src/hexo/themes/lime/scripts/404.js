hexo.extend.generator.register('404', () => {
  return {
    path: '404.html',
    layout: ['page', 'index'],
    data: { title: '警察局', ksio_page_404: true },
  };
});
