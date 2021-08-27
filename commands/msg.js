const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You have insufficient permissions to execute this command!")
    let MSG = message.content.split(`,msg `).join("")
    if (!MSG) return message.channel.send('You did not specify your message to send!')
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor('Oakridge County')
    .setDescription(MSG)
    message.channel.send(embed)

}

module.exports.config = {
    name: "msg",
    description: "Send a Message through the embed format",
    usage: ",msg <message here>",
    accessableby: "Admins",
    aliases: ['']
}