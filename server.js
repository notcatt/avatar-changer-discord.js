

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

  
   client.user.setGame("http://notcat.ml")
});

setInterval(toimerrrrr, 2500);

function toimerrrrr( )
{
	console.log("dont make me go offline ty ty");

}

client.login("MTU5ODg5MDE4ODYyMDQzMTM3.DeKmWA.Io7lvhQpI5-Gadee4FdlwBhNvUQ");