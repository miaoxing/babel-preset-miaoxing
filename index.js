module.exports = function () {
  return {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {'runtime': 'automatic', 'importSource': '@emotion/react'},
      ],
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

      // Stage 2
      ['@babel/plugin-proposal-decorators', {'legacy': true}],

      // Stage 3
      '@babel/plugin-proposal-class-properties',

      // Stage 4
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-object-rest-spread',

      // Others
      '@emotion/babel-plugin',

      ['import', {
        'libraryName': 'antd',
        'libraryDirectory': 'es',
        'style': true,
      }],
    ],
  };
};
