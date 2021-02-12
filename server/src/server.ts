import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import routes from './routes';
import './database/connection';

const app = express();
app.use(bodyParser.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333, () => {
    console.log('server runing in port 3333')
})
