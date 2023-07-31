import inquirer from 'inquirer'
import { questions } from './inquirer'
import handler from './handle'
import createCmd from './cmd'

function initInquirer() {
    inquirer.prompt<PromptOption>(questions).then(async (answer) => {
        handler(answer)
    })
}
createCmd()
initInquirer()
