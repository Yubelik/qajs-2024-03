{
  'presets'[
    [
      '@babel/preset-env',
      {
        targets: {
          node: '20',
        },
        useBuiltIns: 'usage',
        corejs: '3.6.5',
      },
    ]
  ]
}
