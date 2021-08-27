const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You have insufficient permissions to execute this command!")
    message.channel.send("**Stop talking about this topic or face punishment**")
}

module.exports.config = {
    name: "stop",
    description: "Sends a warning to stop the conversation",
    usage: ",stop",
    accessableby: "Admins",
    aliases: []
}