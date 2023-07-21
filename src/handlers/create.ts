import inquirer, { QuestionCollection } from 'inquirer'

interface ProjectInfo {
    projectName: string
    templateName: string
}

const PROMPT_LIST: QuestionCollection = [
    {
        type: 'input',
        message: '请输入项目名称',
        name: 'projectName',
        default: 'test',
    },
    {
        type: 'list',
        message: '是否添加single-spa以支持微服务?',
        name: 'templateName',
        choices: ['test-vue'],
    },
]

export default function create() {
    inquirer.prompt<ProjectInfo>(PROMPT_LIST).then(async (answer) => {
        // eslint-disable-next-line no-console
        console.log(answer)
    })
}
