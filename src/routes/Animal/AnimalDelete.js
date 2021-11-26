import del from '../../database/Delete';
import select from '../../database/Select';

const animaldelete = async (req, res) => {
  const { chip } = req.params;
  const { rows } = await select('animals', 'chip', chip);
  console.log(rows);
  if (!rows.length) {
    res.status(404).send(rows);
  } else {
    await del('animal', 'chip', chip);
    res.status(200).send(rows);
  }
};

export default animaldelete;
