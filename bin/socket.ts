import { io } from "./server";
import { Socket } from "socket.io";
import "../src/websocket/client";
import "../src/websocket/admin";

io.on("connection", (socket: Socket) => {
    //console.log("Se conectou", socket.id);
});

export { io }