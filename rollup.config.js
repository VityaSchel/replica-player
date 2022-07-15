import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import rootImport from 'rollup-plugin-root-import'
import json from '@rollup/plugin-json'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs'
      }
    ],
    plugins: [
      external(),
      typescript({ tsconfig: './tsconfig.json' }),
      rootImport({
        root: `${__dirname}/src`,
        useInput: 'prepend',

        extensions: ['.tsx', '.ts', '.js'],
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
      }),
      json(),
      resolve(),

      
      commonjs(),
    ]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  },
]