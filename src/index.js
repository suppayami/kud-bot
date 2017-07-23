import Discord from 'discord.js'
import Config from './config'
import client from './client/client'
import commands from './commands/index'

commands(client)
client.login(Config.token)