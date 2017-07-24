import Config from '../config'
import ping from './ping'
import slap from './slap'

const Commands = [
    ping,
    slap,
]

const help = {
    regex: /help/i,
    action: (message, props) => {
        let text = 'Commands list:'
        for (let command of Commands) {
            text += '\n' + command.help
        }
        message.reply(text)
    }
}

const useCommands = (message) => {
    const content = message.content

    for (let command of [].concat(Commands, [help])) {
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