import express from 'express';
import cors from 'cors';
import parserBody from 'body-parser';
import { config } from '../etc/config.json';
import * as dbUtil from './utils/db.js';


const app = express();


dbUtil.initConnection();


app.use( parserBody.json() );
app.use(cors({ origin: '*' }));


app.get('/posts', (req, res)=>{
    dbUtil.getPosts().then((data) => res.send(data))
});
app.post('/posts', (req, res)=>{
    dbUtil.createPost(req.body).then((data) => res.send(data))
});
app.delete('/posts/:id', (req, res)=>{
    dbUtil.removePost(req.params.id).then((data) => res.send(data))
});


const port = config.app.port;
const server = app.listen(port, () => {
    console.log('app started on http//localhost:' + port);
});