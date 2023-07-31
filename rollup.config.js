import json from '@rollup/plugin-json'
import path from 'path'
import rollupTypescript from '@rollup/plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'

export default () => [
    {
        input: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            file: path.resolve(__dirname, 'dist', 'index.js'),
            format: 'cjs',
            banner: '#!/usr/bin/env node',
        },
        plugins: [
            rollupTypescript({
                tsconfig: path.resolve(__dirname, './tsconfig.prod.json'),
            }),
            json(),
            uglify(),
        ],
        external: ['download-git-repo', 'fs', 'path', 'ora', 'inquirer', 'commander'],
    },
]
