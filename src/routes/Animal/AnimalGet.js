import select from '../../database/Select';

const animalget = (req, res) => {
  const { id } = req.params;
  const { data } = select(id, 'animal');
  if (data == null) {
    res.status(404).send(data);
  } else {
    res.status(200).send(data);
  }
};

export default animalget;
