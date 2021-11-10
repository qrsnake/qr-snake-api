import update from '../../database/Update';
import select from '../../database/Select';

const userput = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { rows } = await select('users', 'id', id);
  if (!rows.length) {
    res.status(404).send(id);
  } else {
    await update('users', 'id', id, body);
    res.status(200).send(id);
  }
};

export default userput;
