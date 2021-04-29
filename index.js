module.exports = function () {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          'useBuiltIns': 'entry',
          'corejs': {
            'version': 3,
          },
        },
      ],
      '@babel/preset-react',
      '@emotion/babel-preset-css-prop',
    ],
    plugins: [
      // NOTE: preset 里是反序
      // NOTE: import 需在 auto-import-name 之前才正常加载
      'auto-import-name',

      // 使类库中不用加上 corejs 和 regenerator-runtime
      [
        '@babel/plugin-transform-runtime',
        {
          'corejs': 3,
        },
      ],

      // Stage 1
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-optional-chaining',

      // Stage 2
      ['@babel/plugin-proposal-decorators', {'legacy': true}],
      '@babel/plugin-proposal-export-namespace-from',

      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-proposal-class-properties', {'loose': true}],

      // Stage 4
      '@babel/plugin-proposal-object-rest-spread',

      // Others
      ['import', {
        'libraryName': 'antd',
        'libraryDirectory': 'es',
        'style': true,
      }],
      ['import', {
        'libraryName': '@mxjs/bootstrap',
        'libraryDirectory': '',
        'camel2DashComponentName': false,
      }, '@mxjs/bootstrap'],
    ],
  };
};
