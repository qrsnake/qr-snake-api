import connection from './db';

const update = async (tableName, fieldName, fieldValue, data) => {
  let res = null;
  const client = connection();
  try {
    const text = 'UPDATE $1 SET (id, $2) = (DEFAULT, $3) WHERE $4 = $5;';
    const auxKeys = '';
    const jKeys = Object.Keys(data).join(', ');
    jKeys.forEach((i) => {
      auxKeys.concat(i, ', ');
    });
    auxKeys.slice(0, auxKeys.length - 2);
    const auxData = '';
    const jData = Object.values(data).join(', ');
    jData.forEach((j) => {
      auxData.concat(j, ', ');
    });
    auxData.slice(0, auxData.length - 2);
    const values = [tableName, auxKeys, auxData, fieldName, fieldValue];
    res = await client.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default update;
