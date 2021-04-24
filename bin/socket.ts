import { server } from "./server";
import { Server, Socket } from "socket.io";

import "../src/websocket/client";

const io = new Server(server);

io.on("connection", (socket: Socket) => {
    //console.log("Se conectou", socket.id);
});

export { io }