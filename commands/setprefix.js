const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const Prefix = require('../Schema/prefix')


module.exports = {
    name: 'setprefix',
    alias: [],
    run: async (client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(new MessageEmbed()
            .setTitle('Algo a ocurrido')
            .setDescription('No tienes los suficientes permisos para ejecutar este comando')
            .setColor('RED')
            .setFooter(message.author.username)
            )
        }
        const prefix = args.join(' ')
        if(!prefix) {
            return message.channel.send('Debes ingresar el nuevo prefix')
        }
        if(prefix.length > 4) {
            return message.channel.send('El perfil no puede contener mas de 4 caracteres')
        }

        const servidor = await Prefix.findOne({server_id: message.guild.id})

        const guardar = new Prefix({
            server_id: message.guild.id,
            prefix: prefix
        })

        servidor ? await guardar.updateOne({server_id: message.guild.id}, {prefix: prefix}) : await guardar.save().catch(e => {
            message.channel.send('Algo a ocurrido')
            console.log(e)
        })

        message.channel.send(`Se establecio el nuevo prefix\nNuevo prefix: **${prefix}**`)
    }
}