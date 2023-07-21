import { Command } from 'commander'
import chalk from 'chalk'
import packageInfo from '../package.json'
import banner from './info/banner'
import help from './info/help'
import create from './handlers/create'

const { version } = packageInfo

export function generateCommand() {
    const program = new Command()
    program.name('parrot').usage('快速创建你的项目...')
    program.version(version)
    program.addHelpText('beforeAll', chalk.blueBright(banner))
    program.helpInformation = help
    program
        .command('create')
        .description('创建一个新项目')
        .action(() => {
            create()
        })
    program.parse(process.argv)
}
