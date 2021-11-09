import del from '../../database/Delete';
import select from '../../database/Select';

const userdelete = (req, res) => {
  const { id } = req.params;
  const { data } = select('user', 'id', id);
  if (data == null) {
    res.status(404).send(data);
  } else {
    del('user', 'id', id);
    res.status(200).send(data);
  }
};

export default userdelete;
