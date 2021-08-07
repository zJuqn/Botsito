const Discord = require('discord.js');
const { Client, MessageEmbed } = require ('discord.js');
const CustomPrefix = require('../Schema/prefix')

module.exports =  async (client, message) => {

  let prefix_custom = await CustomPrefix.findOne({server_id: message.guild.id})
    
    let prefix;
    if(prefix_custom) {
      prefix = prefix_custom.prefix;
    } else {
      prefix = process.env.prefix
    }
    
    
    if (message.author.bot) return;
  
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.find(
      (c) => c.name === command || (c.alias && c.alias.includes(command))
    );
    if (cmd) {
      cmd.run(client, message, args);//Realizamos un cmd.run osea que el command handler sea con run y no execute
    }

}