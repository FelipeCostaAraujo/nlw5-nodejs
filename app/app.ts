import express from 'express';
import path from "path";
import cors from 'cors';
import "../src/database";
import { routes } from '../src/routes';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
