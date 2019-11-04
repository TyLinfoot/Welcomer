const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const config = require("./config.json");

bot.on("ready", () => {
    console.log(`${bot.user.username} is now online!`);
})

bot.on(`guildMemberAdd`, async member => {
    let embed = new Discord.RichEmbed()
        .setColor(config.colour)
        .setAuthor(`Welcome, ${member.user.tag}!`, member.user.displayAvatarURL)
        .setDescription(config.welcome_message.replace(`{user}`, member.user))
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .setFooter(config.footer)

    let channel = member.guild.channels.find(x => x.name === config.channel);
        channel.send(embed);
})

bot.login(config.token);