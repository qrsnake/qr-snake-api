import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

router(app);

app.listen(process.env.PORT || 5000, () => {
  console.info('listening on http://localhost:5000');

});
