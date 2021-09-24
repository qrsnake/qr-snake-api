import dotenv from 'dotenv';
import express from 'express';
import router from './routes';

dotenv.config();

const app = express();
console.log(process.env.DATABASE_URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000, () => {
  console.info('listening on http://localhost:4000');

  router(app);
});
