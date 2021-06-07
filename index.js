const Discord = require("Discord.js")
const client = new Discord.Client()
const config = require('./config.json');


client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}')
})

client.on("message", msg => {
    if (msg.content === "ping"){
        msg.reply("active")
    }
})

client.login(config.token)
