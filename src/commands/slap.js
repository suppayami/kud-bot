const slapActions = ['slaps', 'hits', 'attacks', 'bangs',]

export default {
    regex: /slap (.+)/i,
    action: (message, props) => {
        const channel = message.channel
        const target = channel.members.find(member => member.displayName === props[0])
        const mention = !!target ? `${target}` : `${props[0]}`

        channel.send(
            `*${slapActions[Math.floor(Math.random() * slapActions.length)]} ${mention}, deals ${Math.floor(Math.random() * 100)} damage*`
        )
            .then(message => null)
            .catch(console.error)
    },
    help: `**slap DisplayName** - Slaps a member`
}