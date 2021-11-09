import del from '../../database/Delete';
import select from '../../database/Select';

const speciedelete = (req, res) => {
  const { id } = req.params;
  const { data } = select('specie', 'id', id);
  if (data == null) {
    res.status(404).send(data);
  } else {
    del('specie', 'id', id);
    res.status(200).send(data);
  }
};

export default speciedelete;
