module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@utils': './src/utils',
            '@components': './src/components',
            // '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};