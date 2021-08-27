const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Here is the Ban Appeal Link: **https://forms.gle/boa3DPaHojzHQhK99**")
}

module.exports.config = {
    name: "appeal",
    description: "Sends the Ban Appeal Link",
    usage: ",appeal",
    accessableby: "Members",
    aliases: []
}