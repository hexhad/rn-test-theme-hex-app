module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root:["."],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.svg',
          '.jpg',
          '.json',
        ],
        alias: {
          '@src': './src/',
          '@components': './src/components/',
          '@constants': './src/constants/',
          '@navigation': './src/navigation/',
          '@rtk': './src/redux/',
          '@services': './src/services/',
          '@utils': './src/utils/',
          '@styles': './src/styles/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
