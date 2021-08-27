import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.info('listening on http://localhost:4000');

  router(app);
});
