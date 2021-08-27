const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You have insufficient permissions to execute this command!")
    message.channel.send("**<@&863798140859449376>\nSERVER START UP!\nRemember to read our <#859214899054116875> before joining!**\nOur code: **WfUpT**\nSERVER NAME: **OakRidge County I ENFORCED**\nSERVER OWNER: **JustSimplyStorm**\nStatus: **Open**\n**https://www.roblox.com/games/2534724415/UPDATE-Emergency-Response-Liberty-County?refPageId=9746552c-cb11-4491-85ed-06edf4e214f3#!/game-instances**")
}

module.exports.config = {
    name: "ssu",
    description: "Sends the SSU Notification",
    usage: ",ssu",
    accessableby: "Members",
    aliases: []
}