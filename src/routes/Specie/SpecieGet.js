import select from '../../database/Select';

const specieget = async (req, res) => {
  const { data } = await select('specie', null, null);
  if (data == null) {
    res.status(404).send(data);
  } else {
    res.status(200).send(data);
  }
};

export default specieget;
