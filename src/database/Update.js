import connection from './db';

const update = async (id, data, table) => {
  let res = null;
  const client = connection();
  try {
    const text = 'UPDATE $1 SET (id, $2) = (DEFAULT, $3) WHERE id = $4;';
    const auxkeys = '';
    const jkeys = JSON.keys(data);
    jkeys.forEach((i) => {
      auxkeys.concat(i, ', ');
    });
    auxkeys.slice(0, auxkeys.length - 2);
    const auxdata = '';
    const jdata = JSON.values(data);
    jdata.forEach((j) => {
      auxdata.concat(j, ', ');
    });
    auxdata.slice(0, auxdata.length - 2);
    const values = [table, auxkeys, auxdata, id];
    res = await client.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default update;
