const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const lineReply = require('discord-reply')

//Vale empezaremos con un codigo simple//
//Empezaremos con un comando Say vale//
//Espero que les guste, sera un say sin mentions//

module.exports = {//Exportamos
    name: 'say',
    alias: [],//Si ustedes no colocaran un alias quiten las ''
    run: async (client, message, args) => {

        let text = args.join(' ')//Definimos el texto que colocara
        if(!text) return message.lineReply('Debes colocar un texto')//Si no coloca un texto retornamos con este mensaje

        //Ahora enviaremos el texto//

        message.channel.send(`${texto}`, { allowedMentions: { parse: [] } })
        //Enviamos nuestro texto, con el allowedMentions el parse y el array vacio desabilitamos las menciones//
        //Como les dije es un codigo muy sencillo//

        //Espero les funcione//

    }//Cerramos el run
}//Cerramos module exports