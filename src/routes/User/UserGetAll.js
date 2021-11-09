import select from '../../database/Select';

const usergetall = (req, res) => {
  const { data } = select('user', null, null);
  if (data == null) {
    res.status(404).send(data);
  } else {
    res.status(200).send(data);
  }
};

export default usergetall;
