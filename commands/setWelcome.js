const Welcome = require('../Schema/Bienvenidas')//Llamamos nuestro schema
<<<<<<< HEAD
const { MessageEmbed, Permissions } = require('discord.js')
=======
const { MessageEmbed } = require('discord.js')
>>>>>>> 3b61b10aba0698a513737fa10a4951845bec1484
const prefix = process.env.prefix

module.exports = {
    name: 'set-welcome',
    alias: ['setwelcome'],
    run: async (client, message, args) => {
        //Si utilizan execute remplazenlo por el run//
<<<<<<< HEAD
        if(!message.member.permissionsFor.has(Permissions.FLAGS.ADMINISTRATOR)) {//SI no tiene permisos de Administrador que retorne
=======
        if(!message.member.hasPermission('ADMINISTRATOR')) {//SI no tiene permisos de Administrador que retorne
>>>>>>> 3b61b10aba0698a513737fa10a4951845bec1484
            return message.channel.send(new MessageEmbed()
            .setTitle('Ups...')
            .setDescription('No tieneos los suficientes permisos para usar este comando')
            .setColor('RED')
            .setThumbnail(client.user.avatarURL())
            .setFooter(message.author.username, message.author.avatarURL())
            )
        }
        const canal = message.mentions.channels.first()
        if(!canal || canal.type !== 'text') {//Si no menciona un canal o el canal no es de texto que retorne
            return message.channel.send('Canal no valido')
        }
        if(!canal.permissionsFor(client.user).has('VIEW_CHANNEL')) {
            return message.channel.send('No puedo ver ese canal')
        }
           if(!canal.permissionsFor(client.user).has('SEND_MESSAGES')) {
            return message.channel.send('No puedo enviar mensajes en ese canal')
        }
        //SI el bot no tiene permisos de ver el canal o de enviar mensajes a ese canal que retorne
        const msg = args.slice(1).join(' ')
        if(!msg) {//SI no coloca un mensaje que retorne
            return message.channel.send(new MessageEmbed()
            .setTitle('Ups...')
            .setDescription('Debes escribir un texto, opciones para el texto:\n{user} = Usuario\n{memberCount} = numero de usuarios\n{ServerID} = ID de el servidor\n{Servidor} = Nombre de el servidor\n{userID} = ID de el usuario')
            .setColor('RED')
            )
        }

        //Parametros que usaremos
        //{user}
        //{memberCount}
        //{ServerID}
        //{Servidor}
        //{userID}

        const servidor = await Welcome.findOne({server_id: message.guild.id})//Buscamos el ID de el servidor
        const guardar = new Welcome({
            server_id: message.guild.id,
            canal_id: canal.id,
            mensaje: msg
        })//Creamos la nueva base de datos
        servidor ? await guardar.updateOne({server_id: message.guild.id}, {canal_id: canal.id}, {mensaje: msg}) : await guardar.save().catch(err => {
            message.channel.send('Ocurrio un error mientras guardaba los datos')
            console.log(err)
        })
        //SI la id de el servidor esta en la base de datos lo que hacemos es que actualizamos nuestra base de datos

        await message.channel.send('El mensaje a sido establecido correctamente\nPuedes visualizar la bienvenida usando el comando: **'+prefix+'test-welcome**')
        //Utilizamos un await para asegurarnos de que se cumpla todo lo de alli arriba
    }
}