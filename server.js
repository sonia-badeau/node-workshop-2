var http = require("http");

var server = http.createServer(function(request, response) {// this callback function is passed something
 // my server lives in that variable
    response.end("hello!"); // we use response instead of return because we are on the web

});

server.listen(process.env.PORT); // we attached the listen method, listen takes a port and listen to it