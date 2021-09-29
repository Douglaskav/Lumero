import express from "express";
import routes from "./routes";
import { createConnection } from "typeorm";

import "reflect-metadata";
createConnection();
const app = express();

app.set('port', 3333);
app.use(express.json());
app.use(routes);

app.listen(app.get('port'), () => {
  console.log(`This application are running on port ${app.get('port')} `);
})
