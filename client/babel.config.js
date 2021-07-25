module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '>= 1%, not dead',
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = ['transform-class-properties'];
  return { presets, plugins };
};
