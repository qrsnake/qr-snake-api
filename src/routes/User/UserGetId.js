import select from '../../database/Select';

const usergetid = (req, res) => {
  const { id } = req.params;
  const { data } = select('user', 'id', id);
  if (data == null) {
    res.status(404).send(data);
  } else {
    res.status(200).send(data);
  }
};

export default usergetid;
