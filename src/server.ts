import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './database';
import createRouter from './controller/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', (r, s, n)=>{console.log(r.url); n()}, createRouter(express.Router()));

app.use(cors());

export default app;