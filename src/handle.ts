import cloneTemplate from './clone'
import ora from 'ora'

export default async function (params: PromptOption) {
    const oraIns = ora('开始获取远程仓库模板').start()
    try {
        const result = await cloneTemplate(params)
        if (result) {
            oraIns.succeed('模板获取完成')
        } else {
            oraIns.fail('模板获取失败')
        }
    } catch (err) {
        console.log(err)
        oraIns.fail(`模板获取失败,发生错误:${err}`)
    }
}
