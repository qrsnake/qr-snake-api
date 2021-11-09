import update from '../../database/Update';
import select from '../../database/Select';

const animalput = async (req, res) => {
  const { chip } = req.params;
  const { body } = req;
  const data = await select('animal', 'chip', chip);
  if (data == null) {
    res.status(404).send(chip);
  } else {
    await update('animal', 'chip', chip, body);
    res.status(200).send(chip);
  }
};

export default animalput;
