import "reflect-metadata";
import { createConnection } from "typeorm"; // Cria conexão com banco de dados
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express()
createConnection() 

app.use(bodyParser.json())
app.use(routes)

app.listen(3333) // Porta para conexão