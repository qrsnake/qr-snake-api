const userput = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  /*
  const { data } = select(id);
  if(data == null){
    res.status(404).send(id);
  }
  else{
    update(id,body)
    res.status(200).send(id);
  }
  */
};

export default userput;
