import update from '../../database/Update';
import select from '../../database/Select';

const specieput = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { rows } = await select('species', 'id', id);
  console.log(rows);
  if (!rows.length) {
    res.status(404).send(id);
  } else {
    await update('species', 'id', id, body);
    res.status(200).send(id);
  }
};

export default specieput;
