import express from 'express';
import path from "path";
import cors from 'cors';
import "../src/database";
import { routes } from '../src/routes';
import { createServer } from 'http'
import { Server, Socket } from "socket.io"

const app = express();

const http = createServer(app)
const io = new Server(http)

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
})

app.use(cors());
app.use(express.json());
app.use(routes);

// io.on("connection", (socket: Socket) => {
//     console.log("Se conectou", socket.id)
// })


export { http, app, io };
