const { MessageEmbed, Permissions } = require('discord.js')
const Sugerencia = require('../Schema/sugerencias')//Buscamos nuestro Scema

module.exports = {//Exportamos nuestro nombre, alias y la funcion run
   name: 'suggest',
   alias: [],
   run: async (client, message, args) => {//si ustedes utlizan execute remplazenlopor el run
    
    var canal = Sugerencia.findOne({server_id: message.guild.id})
    if(!canal) {//Si no existe el servidor en la database
        return message.channel.send('No se a establecido ningun canal de sugerencias aun')
        //Retornamos con el mensaje//
    }//Cerramos if

    const sugges = args.join(' ')
    if(!sugges) {//Si no coloca una sugerencia
    return message.channel.send('Debes ingresar tu sugerencias')
    //Retornamos con el mensaje
    }//Cerramos IF

    const embed = new MessageEmbed()//Creamos un embed para depositar la sugerencia
    .setTitle('Nueva sugerencia')
    .setDescription('Sugerencia:\n**'+sugges+'**')
    .setThumbnail(message.author.avatarURL())
    .setColor('BLUE')
    .setFooter('Sugerencia escrita por: ' + message.author.username)

    client.channels.resolve(canal.canal_id).send({embeds: [embed]})//Buscamos el ID de el canal y enviamos
    await message.channel.send('La sugerencia a sido enviada a el canal establecido')
    //Enviamos en el canal donde se escribio el mensaje que la sugerencia a sido enviada//
}
}