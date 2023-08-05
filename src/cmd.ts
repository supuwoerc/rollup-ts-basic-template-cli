import { Command } from 'commander'
import inquirer from 'inquirer'
import { questions } from './inquirer'
import handler from './handle'
import pkg from '../package.json'
import banner from './info/banner'

function initInquirer() {
    inquirer.prompt<PromptOption>(questions).then(async (answer) => {
        handler(answer)
    })
}

export default function createCmd() {
    const cmd = new Command()
    cmd.name(pkg.name)
    cmd.usage('react-admin [commands]')
    cmd.version(pkg.version)
    cmd.addHelpText('beforeAll', banner)
    cmd.command('create')
        .action(() => {
            initInquirer()
        })
        .description('创建新项目')
    cmd.parse(process.argv)
}
