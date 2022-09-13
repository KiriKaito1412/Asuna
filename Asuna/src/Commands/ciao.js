const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ciao",
	description: "Ciao!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply("Ciao!");
	}
});
