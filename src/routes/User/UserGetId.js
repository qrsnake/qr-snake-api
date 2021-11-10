import select from '../../database/Select';

const usergetid = async (req, res) => {
  const { id } = req.params;
  const { rows } = await select('users', 'id', id);
  if (!rows.length) {
    res.status(404).send(rows);
  } else {
    res.status(200).send(rows);
  }
};

export default usergetid;
