const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let suggestion = args.join(" ");
   if(message.channel.id !== "460426915677732865") return message.channel.send("Suggesteer suggesties in <#460426915677732865>!");
  if(!args[0] || args[0] === "help") return message.channel.send(" -suggestion <suggestie>");

    let suggestionEmbed = new Discord.RichEmbed()
    .setDescription(`Nieuwe suggestie van: ${message.author}`)
    .addField("Suggestie", `${suggestion}`)
    .setColor("#ffffff")
    .setTimestamp()
    .setFooter(`© ForestMC`, "https://imgur.com/tfBmDbI.png");
	
    let suggestions = message.guild.channels.find("name", "poll");

    message.delete()
    suggestions.sendEmbed(suggestionEmbed).then(async function (message) {
		await message.react("1️⃣")
		await message.react("2️⃣")
    }).catch(function() {})

};


module.exports.help = {
  name: "suggest"
}
