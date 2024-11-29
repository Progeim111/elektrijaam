import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());



import SeadmeController from "./controllers/SeadmeController";
import ArveController from "./controllers/ArveController";
import Tootajad from "./controllers/Tootajad";

app.use('/', SeadmeController);
app.use('/', ArveController);
app.use('/', Tootajad);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});