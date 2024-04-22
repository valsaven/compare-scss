import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import { rimrafSync } from 'rimraf';

// Remove the 'dist' folder before starting the build
rimrafSync('dist');

export default [
  'base',
  'dev',
].map((name) => ({
  input: `./scss/${name}/main.scss`,
  output: {
    file: `./dist/${name}.css`,
  },
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [autoprefixer()],
      minimize: false,
    }),
  ],
}));
