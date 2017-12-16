var net = require("net");

var client = new net.Socket();
client.connect(8000, function(){
  console.log("CONNECTED TO SERVER!");
  client.write("Welcome server!")
});

client.on("data", function(data){
  console.log("Data received: " + data);
  client.destroy();
})

client.on("close", function(){
  console.log('CONNECTION CLOSED!');
})
