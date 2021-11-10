import del from '../../database/Delete';
import select from '../../database/Select';

const userdelete = async (req, res) => {
  const { id } = req.params;
  const { rows } = await select('users', 'id', id);
  if (!rows.length) {
    res.status(404).send(rows);
  } else {
    await del('users', 'id', id);
    res.status(200).send(rows);
  }
};

export default userdelete;
