console.clear();

const Client = require("./Structures/Client.js");

const Discord = require("discord.js");

const config = require("./Data/config.json");

const client = new Client();

client.start(config.token);

client.on("ready", () =>
          {
            client.user.setPresence
            (
              {
                status: "idle",  // You can show online, idle... Do not disturb is dnd
                game:
                {
                  name: "Kazuto",  // The message shown
                  type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
                }
              }
            );
           }
         );
