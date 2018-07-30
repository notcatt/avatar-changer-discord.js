const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  
   client.user.setGame("http://notcat.ml")
});

client.login("MTU5ODg5MDE4ODYyMDQzMTM3.DeKmWA.Io7lvhQpI5-Gadee4FdlwBhNvUQ");