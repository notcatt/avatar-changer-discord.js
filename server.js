const Discord = require("discord.js");
const client = new Discord.Client();
var func = require('./functions');
var glob = require("glob");
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('c179a88f6ab91130e3bfb6e23287ba4e');

var gnarpics = new Array();
var asdiiodf;
var i;
var numC = 0;
var fs = require('fs');

eval(fs.readFileSync('web.js')+'');





glob("cutegnarpics/*.jpg", function (er, files) {
	gnarpics = files;
});



client.on("ready", () => {
  var uptime = process.uptime();
  console.log("I am ready! Took "+func.formatS(uptime)+" seconds to login.");
  
  myMethod();

  client.user.setActivity('http://notcat.ml', { type: 'LISTENING' });
	setInterval(myMethod, 240050*1.2*gnarpics.length);
});

client.on("error", console.error)

function myMethod( )
{
	
gnarpics = func.shuffle(gnarpics)

for (var i = 0; i < gnarpics.length; i++) {
    (function(i) {
        setTimeout(function() {

        // client.user.setAvatar(gnarpics[i].toString()).then(user => console.log(`New avatar set! ( `+gnarpics[i].toString()+` )`)).catch(console.error); // 
         numC++
         var uptime = process.uptime();
         console.log("Changed avatar "+numC+" times in the span of "+func.format(uptime));

        fs.appendFile('stats.txt', 'Changed avatar '+numC+' times.'+func.format(uptime)+"</br>"+"\r\n", function (err) {
        });


         

     }, 240000*1.2 * i);
    })(i);
}
  	

}

  	
  	 //client.user.setAvatar('C:/cutegnarpics/1.jpg').then(user => console.log(`New avatar set! 1`)).catch(console.error); 

  
  

pastebin
  .getPaste('sbNPC5sV')
  .then(function (data) {
    // data contains the raw paste
    asdiiodf = data;
    console.log('trying to login using token');
    client.login(asdiiodf);
  })
  .fail(function (err) {
    // Something went wrong
    console.log(err);
  })








setInterval(toimerrrrr, 60000);





function toimerrrrr()
{
var uptime = process.uptime();
console.log("Uptime: "+func.format(uptime));

}