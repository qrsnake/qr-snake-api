const animalput = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  console.log(req.body, req.query);
  res.status(200).send('Hello World!!!');
};

export default animalput;
