import express from 'express';
import {router as facts} from './facts/route'
import { Logger } from './services/logger-service';
import cors from 'cors';

export const app = express();
app.use(cors());

Logger.debug('1')

const port = 6969;

app.use('/facts', facts);

app.listen(port, () => {
    console.log('App listening on port ' + port);
})