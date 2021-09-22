import update from '../../database/Update';
import select from '../../database/Select';
const specieput = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  /*
  const { data } = select(id, 'specie');
  if(data == null){
    res.status(404).send(id);
  }
  else{
    update(id, body, 'specie')
    res.status(200).send(id);
  }
  */
};

export default specieput;
