import update from '../../database/Update';
import select from '../../database/Select';

const userput = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { data } = await select('user', 'id', id);
  if (data == null) {
    res.status(404).send(id);
  } else {
    await update('user', 'id', id, body);
    res.status(200).send(id);
  }
};

export default userput;
