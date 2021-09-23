import del from '../../database/Delete';
import select from '../../database/Select';

const speciedelete = (req, res) => {
  const { id } = req.params;
  /*
  const { data } = select(id, 'specie');
  if(data == null){
    res.status(404).send(data);
  }
  else{
    del(id, 'specie')
    res.status(200).send(data);
  }
  */
};

export default speciedelete;
