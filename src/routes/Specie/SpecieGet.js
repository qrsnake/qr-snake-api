import select from '../../database/Select';

const specieget = (req, res) => {
  const { data } = select('specie', null, null);
  if (data == null) {
    res.status(404).send(data);
  } else {
    res.status(200).send(data);
  }
};

export default specieget;
