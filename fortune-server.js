var fortune = require("./library/fortune.js");

var http = require("http");

var server = http.createServer(function(request, response) {
response.end(fortune())
});

server.listen(process.env.PORT); 