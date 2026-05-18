module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@contexts': './src/contexts',
          '@redux': './src/redux',
          '@shared': './src/shared',
          '@screens': './src/screens',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@config': './src/config',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};