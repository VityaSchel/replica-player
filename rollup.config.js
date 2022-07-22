import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import rootImport from 'rollup-plugin-root-import'
import json from '@rollup/plugin-json'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'

import postcssAutoprefixer from 'autoprefixer'

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
      svgr(),
      typescript({ 
        tsconfig: './tsconfig.json',
        sourceMap: process.env.NODE_ENV === 'development'
      }),
      rootImport({
        root: `${__dirname}/src`,
        useInput: 'prepend',

        extensions: ['.tsx', '.ts', '.js'],
      }),
      postcss({
        extract: 'index.css',
        modules: {
          generateScopedName: 'replicaPlayer_[local]_[hash:base64:5]',
          hashPrefix: 'prefix'
        },
        autoModules: false,
        use: ['sass'],
        minimize: process.env.NODE_ENV !== 'development',
        plugins: [postcssAutoprefixer]
      }),
      json(),
      resolve(),      
      commonjs(),
      process.env.NODE_ENV !== 'development' && terser()
    ]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  },
]