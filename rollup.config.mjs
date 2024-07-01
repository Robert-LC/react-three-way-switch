import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import babel from '@rollup/plugin-babel'
import packageJson from './package.json' with { type: 'json' }

export default [
  {
    input: 'src/component/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      },
      {
        // for local browser development
        name: 'ThreeWaySwitch',
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true,
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled'
      })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      { file: 'dist/index.d.ts', format: 'esm' },
      { file: 'dist/index.cjs.d.ts', format: 'cjs' }
    ],
    plugins: [dts()]
  }
]
