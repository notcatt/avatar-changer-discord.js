

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

	client.user.setActivity('http://notcat.ml', { type: 'LISTENING' })
   //client.user.setGame("http://notcat.ml")
});

setInterval(toimerrrrr, 15000);

function format(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}



function toimerrrrr( )
{
	var uptime = process.uptime();
console.log("Uptime: "+format(uptime));

}

client.login("MTU5ODg5MDE4ODYyMDQzMTM3.DeKmWA.Io7lvhQpI5-Gadee4FdlwBhNvUQ");