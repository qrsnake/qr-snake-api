import insert from '../../database/Select';

const animalpost = (req, res) => {
  const { body } = req.body;
  const data = insert('animal', body);
  if (data == null) {
    res.status(400).send(data.id);
  } else {
    res.status(201).send(data.id);
  }
};

export default animalpost;
