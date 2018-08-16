const Discord = require("discord.js");
const client = new Discord.Client();

var glob = require("glob");
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('c179a88f6ab91130e3bfb6e23287ba4e');

var gnarpics = new Array();
var token;
var i;



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

glob("C:/cutegnarpics/*.jpg", function (er, files) {
	gnarpics = files;
});



client.on("ready", () => {
  console.log("I am ready!");
  	myMethod();
  	client.user.setActivity('http://notcat.ml', { type: 'LISTENING' });
	setInterval(myMethod, 240050*1.5*gnarpics.length);
});

client.on("error", console.error)

function myMethod( )
{
	
gnarpics = shuffle(gnarpics)

for (var i = 0; i < gnarpics.length; i++) {
    (function(i) {
        setTimeout(function() {

         client.user.setAvatar(gnarpics[i].toString()).then(user => console.log(`New avatar set! ( `+gnarpics[i].toString()+` )`)).catch(console.error); // 

     }, 240000*1.5 * i);
    })(i);
}
  	

}

  	
  	 //client.user.setAvatar('C:/cutegnarpics/1.jpg').then(user => console.log(`New avatar set! 1`)).catch(console.error); 
  
  

  
  

pastebin
  .getPaste('sbNPC5sV')
  .then(function (data) {
    // data contains the raw paste
    token = data;
  })
  .fail(function (err) {
    // Something went wrong
    console.log(err);
  })

client.login(data);






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



function toimerrrrr()
{
	var uptime = process.uptime();
console.log("Uptime: "+format(uptime));

}