import Discord from 'discord.js'

const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setGame('!kud command')
})

export default client