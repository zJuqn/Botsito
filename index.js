const Discord = require('discord.js')//Definimos nuestro discord.js
const intents = new Discord.Intents(32509)
const client = new Discord.Client({ intents })//Creamos nuestro client
require('dotenv').config();
const { MessageEmbed, Collection, Permissions} = require('discord.js')//Hacemos un collector y definimos MessageEmbed
const mongoose = require('mongoose')//Mandamos a llamar nuestra base data mongoose | npm i mongoose
const fs = require('fs'); //Mandamos a llamar fs | npm i fs
let { readdirSync } = require('fs');//npm i fs


mongoose.connect(process.env.mongodb_url, { //Haces la conexion con la url
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('Conectado a MongoDB')) //Le haces un console.log para saber que se ha conectado correctamente
.catch(err => console.error(err)) //Capturas el error


client.commands = new Discord.Collection();//Realizamos un collection para guardar nuestros comandos
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

for(const file of readdirSync('./events')){//guardamos nuestros eventos
  if(file.endsWith('.js')){
  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./events/${file}`); 

  client.on(fileName, fileContents.bind(null, client)); 
  }};

  client.on('ready', () => {
      console.log(`Estoy conectado como ${client.user.username}`)//Logeamos en la consola de que el bot a ensendido
  })

  client.login(process.env.token)