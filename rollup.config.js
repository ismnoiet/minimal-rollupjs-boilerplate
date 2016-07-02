const buble = require('rollup-plugin-buble')
export default {
  entry: 'src/index.js',  
  dest: 'dist/bundle.js',
  plugins:[buble()]
};