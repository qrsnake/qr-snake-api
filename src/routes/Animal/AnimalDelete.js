import del from '../../database/Delete';
import select from '../../database/Select';

const animaldelete = async (req, res) => {
  const { chip } = req.params;
  const { data } = await select('animal', 'chip', chip);
  if (data == null) {
    res.status(404).send(data);
  } else {
    await del('animal', 'chip', chip);
    res.status(200).send(data);
  }
};

export default animaldelete;
