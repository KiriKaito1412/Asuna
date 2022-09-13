const Command = require("../Structures/Command.js");
const cli = require("../Data/config.json");

module.exports = new Command({
	name: "say",
	description: "say what you say",
	permission: "SEND_MESSAGES",
	async run(message, args, client) 
	{
		let text = args.join(' ');
		
		let txt = text.substr(text.indexOf(" ") + 1);
		
		if(txt == "say")
		{
			message.channel.send("Papa', cosa devo dire?");
		}		
		else
		{
			message.delete();
			message.channel.send(txt);
		}
	 }
});
