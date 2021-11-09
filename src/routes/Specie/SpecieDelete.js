import del from '../../database/Delete';
import select from '../../database/Select';

const speciedelete = async (req, res) => {
  const { id } = req.params;
  const { data } = await select('specie', 'id', id);
  if (data == null) {
    res.status(404).send(data);
  } else {
    await del('specie', 'id', id);
    res.status(200).send(data);
  }
};

export default speciedelete;
