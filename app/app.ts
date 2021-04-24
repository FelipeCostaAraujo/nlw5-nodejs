import express from 'express';
import { createServer } from "http"
import { Server, Socket } from "socket.io";
import cors from 'cors';
import "../src/database";
import { routes } from '../src/routes';

const app = express();

const http = createServer(app);
const io = new Server(http);

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
