import del from '../../database/Delete';
import select from '../../database/Select';

const animaldelete = (req, res) => {
  const { id } = req.params;
  const { data } = select(id, 'animal');
  if (data == null) {
    res.status(404).send(data);
  } else {
    del(id, 'animal');
    res.status(200).send(data);
  }
};

export default animaldelete;
