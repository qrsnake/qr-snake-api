import del from '../../database/Delete';
import select from '../../database/Select';

const speciedelete = async (req, res) => {
  const { id } = req.params;
  const { rows } = await select('species', 'id', id);
  if (!rows.length) {
    res.status(404).send(rows);
  } else {
    await del('species', 'id', id);
    res.status(200).send(rows);
  }
};

export default speciedelete;
