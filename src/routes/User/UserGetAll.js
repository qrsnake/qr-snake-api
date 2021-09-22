const usergetall = (req, res) => {
  console.log(req.body, req.query);
  res.status(200).send('Hello World!!!');
};

export default usergetall;
