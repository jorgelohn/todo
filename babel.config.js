module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components/',
          constants: './src/constants/',
          hooks: './src/hooks/',
          lib: './src/lib/',
          routes: './src/routes/',
          views: './src/views/',
        },
        extensions: ['.ts', '.tsx'],
        typescript: {
          alwaysTryTypes: true,
        },
      },
    ],
  ],
};
