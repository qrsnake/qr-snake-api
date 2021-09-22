const userdelete = (req, res) => {
  const { id } = req.params;
  console.log(req.body, req.query);
  res.status(200).send('Hello World!!!');
};

export default userdelete;
