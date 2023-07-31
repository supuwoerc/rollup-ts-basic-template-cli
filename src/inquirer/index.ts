import type { QuestionCollection } from 'inquirer'

export const questions: QuestionCollection = [
    {
        type: 'input',
        message: '请输入项目名称',
        name: 'projectName',
        default: 'rollup-ts-basic-template',
    },
]
