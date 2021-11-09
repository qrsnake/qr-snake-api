import update from '../../database/Update';
import select from '../../database/Select';

const specieput = (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  const data = select('specie', 'id', id);
  if (data == null) {
    res.status(404).send(id);
  } else {
    update('specie', 'id', id, body);
    res.status(200).send(id);
  }
};

export default specieput;
