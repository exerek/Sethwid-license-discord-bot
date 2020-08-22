const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = async (bot,message,args) => {

    let linkdecompra = "------------------------------"

    const logs = message.guild.channels.find(channel => channel.name === "🔅logs-commands");

    let nome = message.author.username
    let discriminator = message.author.discriminator
    
    let nickfull = nome + "#" + discriminator;

    let embedlog = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Log")
    .setDescription("Log: " + nickfull + "\nComando: !sethwid.")
    .setFooter("Logs",  message.author.avatarURL)
    .setTimestamp(message.createdAt)
    // ------------------------------------------------------- //
    let embedbaixar = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("\----------")
    .setDescription("-------------- " + linkdecompra)
    .setTimestamp(message.createdAt)
    if(message.member.roles.some(r=> ["ＦＯＵＮＤＥＲ"].includes(r.name))) {
        message.reply("Your HWID has been successfully defined")
        logs.send(embedlog)
    }
    else if(message.member.roles.some(r=> ["𝐅 𝐎 𝐔A 𝐍 𝐃 𝐄 𝐑"].includes(r.name))) {
        message.channel.send("Look at Your Dm!")
        logs.send(embedlog)
    }
    else if(message.member.roles.some(r=> ["𝐀 𝐃A 𝐌 𝐈 𝐍"].includes(r.name))) {
        message.channel.send("Look at Your Dm!")
        message.author.send(embedbaixar)
        logs.send(embedlog)
    }
    else if(message.member.roles.some(r=> ["ＦＯＵＮAＤＥＲ"].includes(r.name))) {
        message.channel.send("IDK")
        logs.send(embedlog)
    }
    else if(!message.member.roles.some(r=> ["𝐕  𝐈  𝐏"].includes(r.name))) {
        message.reply("redeem a key before");
        logs.send(embedlog)
    }
    if(message.content.startsWith(prefix + 'hwid')) { //nome do comando pode ser trocado para o q vc quiser
        const mysql = require('mysql'); 
        //Entrando na mysql
        const connection = mysql.createConnection({ //Info da database, para conectar
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'getnek_modem_launcher'
        });
    }
}
    
exports.help = {
    name: "sethwid"
}