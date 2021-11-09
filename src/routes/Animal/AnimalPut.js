import update from '../../database/Update';
import select from '../../database/Select';

const animalput = (req, res) => {
  const { chip } = req.params;
  const { body } = req.body;
  const data = select('animal', 'chip', chip);
  if (data == null) {
    res.status(404).send(chip);
  } else {
    update('animal', 'chip', chip, body);
    res.status(200).send(chip);
  }
};

export default animalput;
