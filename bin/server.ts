import http from 'http';
import { Server } from "socket.io";

import { app } from '../app/app';

const port = normalizePort(process.env.PORT || '3000');

const server = http.createServer(app);

const io = new Server(server);

app.set('port', port);

import "../src/websocket/client";

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log("Running Server in Port: " + port);

function normalizePort(val: any) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');;
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr: any = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
}

export { io }