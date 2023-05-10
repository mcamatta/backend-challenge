import express from 'express';
import router from './routes';

const app = express();

app.use('/api', router);

app.listen(
    process.env.PORT ? Number(process.env.PORT) : 3333, 
    () => console.log('HTTP Server Running')
);