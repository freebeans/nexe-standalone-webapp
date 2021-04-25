import http = require('http');
// import colors = require('colors');
import { RequestListener, IncomingMessage, ServerResponse } from 'node:http';


const server = http.createServer( <RequestListener> requestHandler);
server.listen(8080);

function requestHandler(req: IncomingMessage, res: ServerResponse) {
    console.log(req, res);    
}

import  { mensagem } from './module';
console.log(mensagem);