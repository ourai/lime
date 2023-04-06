const { isPlainObject } = require('@ntks/toolbox');

function resolveValuesFromLayout(layout, defaults) {
  if (!layout || !defaults[layout]) {
    return {};
  }

  const specificDefaults = defaults[layout];
  const extendedFrom = specificDefaults.extends && specificDefaults.extends !== layout ? resolveValuesFromLayout(specificDefaults.extends, defaults) : {};

  return { ...extendedFrom, ...specificDefaults.values };
}

function mergeValues(layoutValues, pageValues) {
  if (Object.keys(layoutValues).length === 0 || Object.keys(pageValues).length === 0) {
    return { ...layoutValues, ...pageValues };
  }

  const merged = { ...layoutValues };

  Object.entries(pageValues).forEach(([k, v]) => {
    merged[k] = Array.isArray(v) && Array.isArray(merged[k]) ? [...merged[k], ...v] : v;
  });

  return merged;
}

/**
 * the structure of `defaults` is just like what in Jekyll
 * @see https://jekyllrb.com/docs/configuration/front-matter-defaults/
 */
function resolvePageConfig(page, defaults) {
  let layoutDefaults;
  let pageDefaults;

  if (Array.isArray(defaults)) {
    layoutDefaults = {};
    pageDefaults = defaults;
  } else if (isPlainObject(defaults)) {
    layoutDefaults = defaults.layout || {};
    pageDefaults = defaults.page || [];
  }

  if (!pageDefaults || pageDefaults.length === 0 || !page.source) {
    return {};
  }

  let pageType = page.source.split('/').shift();

  if (pageType === '_posts') {
    pageType = 'posts';
  }

  let resolved = {};

  pageDefaults.forEach(settings => {
    if (!settings.scope || !settings.scope.type || settings.scope.type === pageType) {
      resolved = { ...resolved, ...settings.values };
    }
  });

  return mergeValues(resolveValuesFromLayout(resolved.layout || page.layout, layoutDefaults), resolved);
}

hexo.extend.filter.register('template_locals', function(locals) {
  if (locals.config.ksio && locals.config.ksio.defaults ) {
    locals.page = { ...locals.page, ...resolvePageConfig(locals.page, locals.config.ksio.defaults) };
  }

  return locals;
});
