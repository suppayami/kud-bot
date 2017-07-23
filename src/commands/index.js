import Config from '../config'
import ping from './ping'

const Commands = [
    ping
]

const useCommands = (message) => {
    const content = message.content

    for (let command of Commands) {
        const matches = command.regex.exec(content)
        if (!matches) {
            continue
        }
        const props = matches.slice(1)
        command.action(message, props)
    }
}

export default (client) => {
    client.on('message', (message) => {
        const content = message.content
        const isCommand = Config.command.test(content)

        if (!isCommand) {
            return
        }

        useCommands(message)
    })
}