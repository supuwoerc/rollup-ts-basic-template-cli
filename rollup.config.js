import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import typescript from 'rollup-plugin-typescript2'
// import babel from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'
import path from 'path'
import { fileURLToPath } from 'url'

const entries = ['src/index.ts']

const plugins = [
    // eslint(),
    // babel({
    //     babelrc: false,
    //     babelHelpers: 'bundled',
    //     presets: ['@babel/preset-env'],
    //     exclude: 'node_modules/**',
    //     compact: false,
    // }),
    // resolve({
    //     preferBuiltins: true,
    // }),
    // alias({
    //     entries: [
    //         {
    //             find: '@',
    //             replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    //         },
    //     ],
    // }),
    // json(),
    // commonjs(),
    // esbuild(),
    // terser(),
    // cleaner({ targets: ['./dist/'], silent: false }),
    typescript(),
]

export default [
    ...entries.map((input) => ({
        input,
        output: [
            {
                file: input.replace('src/', 'dist/').replace('.ts', '.js'),
                format: 'cjs',
                banner: '#!/usr/bin/env node',
            },
        ],
        external: [],
        plugins,
    })),
    ...entries.map((input) => ({
        input,
        output: {
            file: input.replace('src/', '').replace('.ts', '.d.ts'),
            format: 'esm',
        },
        external: [],
        plugins: [dts({ respectExternal: true })],
    })),
]
