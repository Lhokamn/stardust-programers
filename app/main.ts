import express from 'express';
import {router as facts} from './facts/route'

export const app = express();

const port = 6969;

app.get('/', (req, res) => {
    res.json('Hello worldl')
})

app.use('/facts', facts);

app.listen(port, () => {
    console.log('App listening on port ' + port);
})