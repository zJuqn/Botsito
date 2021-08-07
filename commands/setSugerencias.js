<<<<<<< HEAD
const { MessageEmbed, Permissions } = require('discord.js')
const Sugerencia = require('../Schema/sugerencias')//Requerimos nuestro Schema

module.exports = {//Exportamos el nombre el alias y la funcion
    name: 'set-sugerencias',
    alias: ['setsugerencias'],
    run: async (client, message, args) => {//Realizamos la funcion run
        //Si ustedes usan execute, remplazenlo por el run

        if(!message.member.permissionsFor.has(Permissions.FLAGS.ADMINISTRATOR)) {//Si no tiene permisos...
            return message.channel.send('No tienes los suficientes permisos para ejecutar este comando')
            //Retornamos con el mensaje no tienes los suficientes permisos
        }

        const canal = message.mentions.channels.first()//Que mencione un canal
        if(!canal || canal.type !== 'text') {//Si no menciona un canal o si el canal no es de texto...
            return message.channel.send('Eso no es un canal valido')
            //Retornamos
        }//Cerramos if

        if(!canal.permissionsFor(client.user).has('VIEW_CHANNEL')) {//Si el bot no tiene permisos de ver el canal
            return message.channel.send('No puedo ver ese canal')
            //Retornamos//
        }//Cerramos IF
        if(!canal.permissionsFor(client.user).has('SEND_MESSAGES')) {//Si el bot no tiene permisos de enviar mensajes...
            return message.channel.send('No tengo permsiso para enviar mensajes en ese canal')
            //Retornamos//
        }//Cerramos IF

        const servidor = await Sugerencia.findOne({server_id: message.guild.id})
        //Buscamos la ID del servidor en la data base//

        const guardar = new Sugerencia({//Si no existe servidor guardamos en MongoDB la nueva database
            server_id: message.guild.id,//Guardamos el ID de el servidor//
            canal_id: canal.id//Guardamos la ID de el canal//
        })//Cerramos


        //Si existe servidor actualizamos los datos y si no existe guardamos nuestros nuevos datos//
        servidor ? await guardar.updateOne({server_id: message.guild.id}, {canal_id: canal.id}) : await guardar.save().catch(err => {
            message.channel.send('Algo a ocurrido mal intente mas tarde')
            console.log(err)
            //Si tenemos un error que nos envie un mensaje y en la consola coloque el ERROR//
        })//Cerramos el Catch

        message.channel.send(`Se establecio el nuevo canal de las sugerencias`)
        //Enviamos un mensaje de que todo a salido bien :D

    }
=======
const { MessageEmbed } = require('discord.js')//Definimos nuestro MessageEmbed
const Sugerencia = require('../Schema/sugerencias')//Requerimos nuestro Schema

module.exports = {//Exportamos el nombre el alias y la funcion
    name: 'set-sugerencias',
    alias: ['setsugerencias'],
    run: async (client, message, args) => {//Realizamos la funcion run
        //Si ustedes usan execute, remplazenlo por el run

        if(!message.member.hasPermission('ADMINISTRATOR')) {//Si no tiene permisos...
            return message.channel.send('No tienes los suficientes permisos para ejecutar este comando')
            //Retornamos con el mensaje no tienes los suficientes permisos
        }

        const canal = message.mentions.channels.first()//Que mencione un canal
        if(!canal || canal.type !== 'text') {//Si no menciona un canal o si el canal no es de texto...
            return message.channel.send('Eso no es un canal valido')
            //Retornamos
        }//Cerramos if

        if(!canal.permissionsFor(client.user).has('VIEW_CHANNEL')) {//Si el bot no tiene permisos de ver el canal
            return message.channel.send('No puedo ver ese canal')
            //Retornamos//
        }//Cerramos IF
        if(!canal.permissionsFor(client.user).has('SEND_MESSAGES')) {//Si el bot no tiene permisos de enviar mensajes...
            return message.channel.send('No tengo permsiso para enviar mensajes en ese canal')
            //Retornamos//
        }//Cerramos IF

        const servidor = await Sugerencia.findOne({server_id: message.guild.id})
        //Buscamos la ID del servidor en la data base//

        const guardar = new Sugerencia({//Si no existe servidor guardamos en MongoDB la nueva database
            server_id: message.guild.id,//Guardamos el ID de el servidor//
            canal_id: canal.id//Guardamos la ID de el canal//
        })//Cerramos


        //Si existe servidor actualizamos los datos y si no existe guardamos nuestros nuevos datos//
        servidor ? await guardar.updateOne({server_id: message.guild.id}, {canal_id: canal.id}) : await guardar.save().catch(err => {
            message.channel.send('Algo a ocurrido mal intente mas tarde')
            console.log(err)
            //Si tenemos un error que nos envie un mensaje y en la consola coloque el ERROR//
        })//Cerramos el Catch

        message.channel.send(`Se establecio el nuevo canal de las sugerencias`)
        //Enviamos un mensaje de que todo a salido bien :D

    }
>>>>>>> 3b61b10aba0698a513737fa10a4951845bec1484
}