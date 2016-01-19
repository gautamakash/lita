console.log("Application Starts");
console.log("-----------------------Enviroment Veriables-----------------------");
console.log("process.env.IP:"+process.env.IP);
console.log("process.env.PORT:"+process.env.PORT);










/*var Microformats = require('microformat-node'),
    http = require('http'),
    options = {};
//var Cheerio = require('cheerio');    
//options.node = Cheerio.load('<a class="h-card" href="http://glennjones.net">Glenn</a>');

options.html = '<a class="h-card" href="http://glennjones.net"><span class="p-given-name">Glenn</span><span class="p-family-name">Jones</span></a>';

var retObj = false;
Microformats.get(options, function(err, data){
    console.log(JSON.stringify(data));
    retObj = data;
});

console.log(retObj);

console.log("--------Complete---------");*/

/*

var extractData = function(res){
  
  options.textFormat = "normalised";
  options.html = res;
  Microformats.get(options, function(err, data){
      // do something with data
      console.log("MicroFormat parshed");
      console.log("---------------------------------");
      console.log(JSON.stringify(data));
  });
};

// get HTML
var httpOptions = {
  host: 'www.google.com',
  port: '80',
  path: '/index.html'
};

http.get(options, function(res){
  res.setEncoding("utf8");
  var htmlConent = '';
  res.on("data", function (chunk) {
      htmlConent += chunk;
  });
  console.log(htmlConent);
  extractData(htmlConent);
});*/