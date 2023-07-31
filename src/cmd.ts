import { Command } from 'commander'
import pkg from '../package.json'
import banner from './info/banner'

export default function createCmd() {
    const cmd = new Command()
    cmd.name(pkg.name)
    cmd.usage('react-admin [commands]')
    cmd.version(pkg.version)
    cmd.addHelpText('beforeAll', banner)
    cmd.command('create').description('创建新项目')
    cmd.parse(process.argv)
}
