import update from '../../database/Update';
import select from '../../database/Select';
const userput = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  /*
  const { data } = select(id, 'user');
  if(data == null){
    res.status(404).send(id);
  }
  else{
    update(id, body, 'user')
    res.status(200).send(id);
  }
  */
};

export default userput;
