const helloWorld = (req, res) => {
  console.log(req.body, req.query);
  res.status(200).send('Hello World!!!');
};

export default helloWorld;
