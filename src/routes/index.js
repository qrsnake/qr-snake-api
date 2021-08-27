import helloWorld from './HelloWorld';

const router = (app) => {
  app.get('/', helloWorld);
};

export default router;
