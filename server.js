const http = require('http');
const fs = require('fs');
const path = require('path');

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
      console.log(err)
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}

const requestListener = function (request, response) {
  if(request.url === "/index"){
  		sendFileContent(response, "index.html", "text/html");
  	}
  	else if(request.url === "/"){
  		response.writeHead(200, {'Content-Type': 'text/html'});
  		response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
  	}
  	else if(/^\/[a-zA-Z0-9\/]*.js$/.test(request.url.toString())){
  		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
  	}
  	else if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
  		sendFileContent(response, request.url.toString().substring(1), "text/css");
  	}
  	else{
        sendFileContent(response, request.url.toString().substring(1), 'application/octet-stream');
  	}
}



const server = http.createServer(requestListener);
server.listen(80);
console.log('server started');
