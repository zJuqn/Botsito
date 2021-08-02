const Discord = require('discord.js')

//Realizaremos un comando de Say-Channel
//Que significa
//Pues un comando de say donde tu mencionas un canal colocas un texto
//Y el bot habla en ese canal ;D

module.exports = {//Exportamos la funcion run
    name: 'say-channel',
    alias: [],
    run: async (client, message, args) => {

        const canal = message.mentions.channels.first()//Aqui lo que hace es que reciba la mencion a un canal//
        if(!canal || canal.type !== 'text') {//Si no menciona a el canal o el canal no es de texto que retorne
            return message.channel.send('Canal invalido')
        }
        const texto = args.slice(1).join(' ')//Aqui lo que hacemos es que resiva lo que el usuario escribira
        //Con el slice ignoramos la mencion a el canal osea que pasa de la mencion y solamente toma el texto que sigue despues de la mencion//
        if(!texto) {//Si no coloca el texto que retorne
            return message.channel.send('Debes escribir un texto')
        }
        if(texto.length > 200) {//Si escribe mas de 200 caracteres retornamos//
            //Si quieren pueden quitar esto es opcional yo lo pongo ps para que quede mas largo el code xd
            return message.channel.send('El limite son 200 caracteres')
        }
        const validacion = client.channels.cache.get(canal.id)//Validamos que el canal no sea de otro server
        if(!validacion) {//Si no es valido el canal retornamos
            return message.channel.send('Ese canal no es valido')
        }

        client.channels.resolve(canal).send(`${texto}`,  { allowedMentions: { parse: [] } })
        //Enviamos el texto a el canal y quitamos las mentions//

        message.channel.send('El texto a sido enviado correctamente a el canal: **'+canal.name+'**')
        //Enviamos a el canal donde se escribio el mensaje que todo salio bien y que el texto se envio a el canal
        //Que menciono
    }
}