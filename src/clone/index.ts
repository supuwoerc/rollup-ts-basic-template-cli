import download from 'download-git-repo'
import path from 'path'
import repository from '@/config/index'
import { rimraf } from 'rimraf'

function cloneTemplate(options: PromptOption): Promise<boolean> {
    return new Promise((resolve) => {
        const currentPath = process.cwd()
        const { projectName } = options
        const targetPath = path.resolve(currentPath, projectName)
        const targetURL = repository['basic-template']
        rimraf.sync(targetURL, {})
        download(targetURL, targetPath, {}, (err) => {
            if (err) {
                console.log(err)
                resolve(false)
            }
            resolve(true)
        })
    })
}

export default cloneTemplate
