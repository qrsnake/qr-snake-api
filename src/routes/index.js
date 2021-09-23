import animalget from './Animal/AnimalGet';
import specieget from './Specie/SpecieGet';
import usergetall from './User/UserGetAll';
import usergetid from './User/UserGetId';
import animalput from './Animal/AnimalPut';
import specieput from './Specie/SpeciePut';
import userput from './User/UserPut';
import animaldelete from './Animal/AnimalDelete';
import speciedelete from './Specie/SpecieDelete';
import userdelete from './User/UserDelete';
import animalpost from './Animal/AnimalPost';
import speciepost from './Specie/SpeciePost';
import userpost from './User/UserPost';

const router = (app) => {
  app.get('/animal/:id', animalget);
  app.get('/specie', specieget);
  app.get('/user', usergetall);
  app.get('/user/:id', usergetid);
  app.put('/animal/:id', animalput);
  app.put('/specie/:id', specieput);
  app.put('/user/:id', userput);
  app.delete('/animal/:id', animaldelete);
  app.delete('/specie/:id', speciedelete);
  app.delete('/user/:id', userdelete);
  app.post('/animal/', animalpost);
  app.post('/specie/', speciepost);
  app.post('/user/', userpost);
};

export default router;
