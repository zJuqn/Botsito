const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const Prefix = require('../Schema/prefix')//Requerimos nuestro schema

//Exportaremos el nombre y el alias luego realizaremos la funcion run
module.exports = {
    name: 'setprefix',
    alias: [],
    run: async (client, message, args) => {//Si utilizas execute remplazalo por el run

        if(!message.member.hasPermission('ADMINISTRATOR')) {//Si el usuario no tiene permisos que retorne
            return message.channel.send(new MessageEmbed()
            .setTitle('Algo a ocurrido')
            .setDescription('No tienes los suficientes permisos para ejecutar este comando')
            .setColor('RED')
            .setFooter(message.author.username)
            )//Enviamos embed de no permisos
        }//Cerramos if
        const prefix = args.join(' ')//Que coloque el prefix
        if(!prefix) {
            return message.channel.send('Debes ingresar el nuevo prefix')
        }//Si no coloca prefix retornamos | Cerramos IF
        if(prefix.length > 4) {
            return message.channel.send('El perfil no puede contener mas de 4 caracteres')
            //Si el prefix contiene mas de 4 letras/numeros/caracteres que retorne
        }//Cerramos IF

        const servidor = await Prefix.findOne({server_id: message.guild.id})
        //Buscamos en nuestra base de datos el ID de el servidor

        const guardar = new Prefix({
            server_id: message.guild.id,
            prefix: prefix
        })

        servidor ? await guardar.updateOne({server_id: message.guild.id}, {prefix: prefix}) : await guardar.save().catch(e => {
            message.channel.send('Algo a ocurrido')
            console.log(e)
        })
        //Aqui lo que hacemos es que si ya existe el servidor actualize los cambios y si no existe
        //Que guarde el nuevo prefix

        message.channel.send(`Se establecio el nuevo prefix\nNuevo prefix: **${prefix}**`)
        //Enviamos un mensaje de que todo a salido perfect
    }//Cerramos la funcion run
}//Cerramos exports