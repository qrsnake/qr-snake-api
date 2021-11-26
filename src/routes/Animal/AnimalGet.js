import select from '../../database/Select';

const animalget = async (req, res) => {
  const { chip } = req.params;
  const { rows } = await select('animals', 'chip', chip);
  console.log(rows);
  if (rows == null) {
    res.status(404).send(rows);
  } else {
    res.status(200).send(rows);
  }
};

export default animalget;
