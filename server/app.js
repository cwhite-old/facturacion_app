import express from 'express';
import config from './config/environment';
import startMongo from './config/mongo';
import routes from './routes';

const app = express();
startMongo();
routes(app);

app.listen(config.server.port, () => {
  console.log(`Server listening at ${config.server.port}`);
});