const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('pino')()

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
      logger.error(err);
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
  if(request.url === "/"){
  		sendFileContent(response, "index.html", "text/html");
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
server.listen(8080 || process.env.PORT);
logger.info('server started');
