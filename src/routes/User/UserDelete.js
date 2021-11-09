import del from '../../database/Delete';
import select from '../../database/Select';

const userdelete = async (req, res) => {
  const { id } = req.params;
  const { data } = await select('user', 'id', id);
  if (data == null) {
    res.status(404).send(data);
  } else {
    await del('user', 'id', id);
    res.status(200).send(data);
  }
};

export default userdelete;
