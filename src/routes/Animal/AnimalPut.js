import update from '../../database/Update';
import select from '../../database/Select';
const animalput = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  /*
  const { data } = select(id, 'animal');
  if(data == null){
    res.status(404).send(id);
  }
  else{
    update(id, body, 'animal')
    res.status(200).send(id);
  }
  */
};

export default animalput;
