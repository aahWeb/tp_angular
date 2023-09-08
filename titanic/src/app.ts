'use strict';
import express, { Express } from 'express';

import cors from "cors";
import router from './routes';
import { port, host } from "./config";

const corsOptions = {
  origin: `${host}:${port}`, // Mettez l'URL de votre application Angular
  optionsSuccessStatus: 200 // Facultatif, indiquez le code de statut de succès
};

const app : Express = express();

app.use(cors(corsOptions));

// router
app.use("/api", router);

app.listen(port, () =>
  console.log(`listen ${host}:${port}`),
);