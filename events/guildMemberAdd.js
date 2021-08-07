const Discord = require('discord.js')
const { MessageEmbed } = require ('discord.js')
const Welcome = require('../Schema/Bienvenidas')

module.exports =  async (client, member) => {

const Schema = await Welcome.findOne({server_id: member.guild.id})//Buscamos el ID de el servidor
const canal = Schema.canal_id//Buscamos si tiene canal
if(!canal) {
    return;//Si no tiene canal retornamos
}
const mensaje = Schema.mensaje//Buscamos el mensaje
if(!mensaje) {
    return;//SI no tiene el mensaje retornamos
}
const mensaje_con_replace = mensaje.replace(/{user}/, member.username).replace(/{userID}/, member.id).replace(/{Servidor}/, member.guild.name).replace(/{memberCount}/, member.guild.memberCount).replace(/{ServidorID}/, member.guild.id)
//Remplazamos los parametros que usamos en el setWelcome//

client.channels.resolve(canal.id).send(mensaje_con_replace)
//Enviamos el mensaje a el canal//

}