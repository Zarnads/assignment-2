var http = require('http');
var fs = require('fs');

// create server
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hi!!');
// create a file demo.txt
var readme = fs.readFileSync('demo.txt','utf8');
fs.writeFileSync('writeme.txt',demo);


// read the created file
var readme = fs.readFileSync('writeme.txt','utf8');
console.log(readme);
});

// update the created file
fs.appendFile('demo.txt','this is updated line', function(err){
    if (err) throw err;
   
});
// rename the created file
var changed = fs.renameSync('demo.txt','final-demo.txt');
console.log(changed) ;

// delete the old demo.txt file
var remove = fs.unlink('demo.txt');
console.log(remove);


   
  

server.listen(8002);
console.log('it worked');
