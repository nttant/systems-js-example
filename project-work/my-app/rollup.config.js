export default [
    {
      input: './src/my-app.js',
      external: ['globalHeader', 'globalFooter'],
      output: {
        file: './dist/my-app.js',
        format: 'iife'
      }
    }
];
