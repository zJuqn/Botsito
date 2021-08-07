<<<<<<< HEAD
const { MessageEmbed, Permissions } = require('discord.js')
const Sugerencia = require('../Schema/sugerencias')//Llamamos nuestra schema

module.exports = {//exportamos el name, alias y la funcion run
    name: 'delete-suggest',//colocamos un nombre
    alias: ['deletesuggest'],//Colocamos un alias es opcional si no lo quieren colocar quiten las comillas y solamente dejen las llaves
    run: async (client, message, args) => {
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){//Si el usuario no tiene permisos de administrador...
            return message.channel.send(new MessageEmbed()//Retornamos con un new MessageEmbed()
            .setTitle('Algo a ocurrido')
            .setDescription('No tienes los permisos suficientes para ejecutar este comando')
            .addField('Permisos necesarios:', 'ADMINISTRATOR')
            .setColor('RED')
            .setTimestamp()
            .setFooter(message.author.username)
            )
            //Si la persona no tiene permisos retornamos con un MessageEmbed//
        }
        let sugges = await Sugerencia.findOne({server_id: message.guild.id})
        if(!sugges) return message.channel.send('No hay ningun canal de sugerencias en este servidor')
        //Si no encuentra en la base de datos el servidor retorna para no tener ninguna clase de error//

        const eliminar = await Sugerencia.deleteMany({server_id: message.guild.id})
        //Eliminamos con un deleteMany//

        message.channel.send('Se a eliminado el canal de las sugerencias')
        //Enviamos un mensaje de que todo a salido perfectamente bien//


    }
=======
const { MessageEmbed } = require('discord.js')
const Sugerencia = require('../Schema/sugerencias')//Llamamos nuestra schema

module.exports = {//exportamos el name, alias y la funcion run
    name: 'delete-suggest',//colocamos un nombre
    alias: ['deletesuggest'],//Colocamos un alias es opcional si no lo quieren colocar quiten las comillas y solamente dejen las llaves
    run: async (client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')){//Si el usuario no tiene permisos de administrador...
            return message.channel.send(new MessageEmbed()//Retornamos con un new MessageEmbed()
            .setTitle('Algo a ocurrido')
            .setDescription('No tienes los permisos suficientes para ejecutar este comando')
            .addField('Permisos necesarios:', 'ADMINISTRATOR')
            .setColor('RED')
            .setTimestamp()
            .setFooter(message.author.username)
            )
            //Si la persona no tiene permisos retornamos con un MessageEmbed//
        }
        let sugges = await Sugerencia.findOne({server_id: message.guild.id})
        if(!sugges) return message.channel.send('No hay ningun canal de sugerencias en este servidor')
        //Si no encuentra en la base de datos el servidor retorna para no tener ninguna clase de error//

        const eliminar = await Sugerencia.deleteMany({server_id: message.guild.id})
        //Eliminamos con un deleteMany//

        message.channel.send('Se a eliminado el canal de las sugerencias')
        //Enviamos un mensaje de que todo a salido perfectamente bien//


    }
>>>>>>> 3b61b10aba0698a513737fa10a4951845bec1484
}