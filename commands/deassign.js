var fs = require("fs"),
    numbers = JSON.parse(fs.readFileSync("././json/numbers.json", "utf8"));

exports.run = (bot, message, args) => {
	  var support = user_id => bot.guilds.get('281815661317980160').roles.get('281815839936741377').members.map(member => member.id).indexOf(user_id) > -1;
      if (!support(message.author.id)) {return;}
      if (message.content.split(" ")[1] === undefined) {
			    message.reply("<:bloblul:356789385875816448> **You forgot a parameter!**");
			    return;
			}
			var number = numbers.find(function(item) {
				return item.number === message.content.split(" ")[1];
			});
			if (number === undefined) {
			    message.reply("<:oliy:327462998610280448> **This number never even existed *in the first place*.**");
				return;
			}
			var theregistry = phonebook.find(function(item) {
				return item.number === message.content.split(" ")[1];
			});
			if (theregistry !== undefined) {
				phonebook.splice(phonebook.indexOf(theregistry), 1);
				fs.writeFileSync("././json/phonebook.json", JSON.stringify(phonebook), "utf8");
			}
			numbers.splice(numbers.indexOf(number), 1);
			fs.writeFileSync("././json/numbers.json", JSON.stringify(numbers), "utf8");
			message.reply("<:blobsad:386228996486070272> This number's been deassigned.. R.I.P `" + message.content.split(" ")[1] + "`.");
			bot.channels.get("282253502779228160").send(":closed_book: Number `"+message.content.split(" ")[2]+"` is DE-assigned from channel "+number.channel+" by "+message.author.username+".");
}
