import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [babel({
    babelrc: false,
    presets: ['es2015-rollup', 'stage-0'],
    runtimeHelpers: true
  })]
};
