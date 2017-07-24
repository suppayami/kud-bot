export default {
    regex: /ping/i,
    action: (message, props) => {
        message.reply('Wafuu~')
    },
    help: `**ping** - Ping to the bot`
}