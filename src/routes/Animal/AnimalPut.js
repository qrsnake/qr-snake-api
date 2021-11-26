import update from '../../database/Update';
import select from '../../database/Select';

const animalput = async (req, res) => {
  const { chip } = req.params;
  const { body } = req;
  const { rows } = await select('animals', 'chip', chip);
  console.log(rows);
  if (!rows.length) {
    res.status(404).send(chip);
  } else {
    await update('animals', 'chip', chip, body);
    res.status(200).send(chip);
  }
};

export default animalput;
