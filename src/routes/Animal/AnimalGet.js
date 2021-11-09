import select from '../../database/Select';

const animalget = (req, res) => {
  const { chip } = req.params;
  const { data } = select('animal', 'chip', chip);
  if (data == null) {
    res.status(404).send(data);
  } else {
    res.status(200).send(data);
  }
};

export default animalget;
