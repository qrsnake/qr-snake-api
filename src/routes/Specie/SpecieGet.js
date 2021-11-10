import select from '../../database/Select';

const specieget = async (req, res) => {
  const { rows } = await select('species', null, null);
  console.log(rows);
  if (!rows.length) {
    res.status(404).send(rows);
  } else {
    res.status(200).send(rows);
  }
};

export default specieget;
