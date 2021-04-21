import express from 'express';
import cors from 'cors';
import "../src/database";
import { routes } from '../src/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
