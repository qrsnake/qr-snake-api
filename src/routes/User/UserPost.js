const userpost = (req, res) => {
  const { data } = req.body;
  console.log(req.body, req.query);
  res.status(200).send('Hello World!!!');
};

export default userpost;
