const Welcome = require('../Schema/Bienvenidas')

module.exports = {
    name: 'test-welcome',
    alias: [],
    run: async (client, message, args) => {
        //Si utilizas execute remplazalo por el run//
<<<<<<< HEAD
        if(!message.member.permissions.has('MANAGE_CHANNELS')) {
=======
        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
>>>>>>> 3b61b10aba0698a513737fa10a4951845bec1484
            return message.channel.send(':x: | NO tienes permisos')
        }
        const Schema = await Welcome.findOne({server_id: message.guild.id})
        if(!Schema) {//SI no existe serverid en nuestra data base que retorne
            return message.channel.send('NO hay ningun mensaje de bienvenidas establecido en este servidor')
        }
        const mensaje = Schema.mensaje//Buscamos el mensaje
if(!mensaje) {
    return;//SI no tiene el mensaje retornamos
}
const mensaje_con_replace = mensaje.replace(/{user}/, message.author.username).replace(/{userID}/, message.id).replace(/{Servidor}/, message.guild.name).replace(/{memberCount}/, message.guild.memberCount).replace(/{ServidorID}/, message.guild.id)
//Remplazamos los parametros que usamos en el setWelcome//
message.channel.send('Previsualizacion de bienvenida:')
message.channel.send(mensaje_con_replace)//ENviamos
    }
}