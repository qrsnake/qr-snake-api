import insert from '../../database/Insert';

const userpost = async (req, res) => {
  const { body } = req;
  const data = await insert('users', body);
  if (data == null) {
    res.status(400).send(data.id);
  } else {
    res.status(201).send(data.id);
  }
};

export default userpost;
