const figlet = require('figlet')
const clc = require('cli-color')

const banner = figlet.textSync('parrot', {
    font: 'Isometric4',
    horizontalLayout: 'full',
})

export default clc.blue(`${banner}\n`)
