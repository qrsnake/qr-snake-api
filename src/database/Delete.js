import connection from './db';

const del = async (tableName, fieldName, fieldValue) => {
  let res = null;
  const client = connection();
  try {
    const text = 'DELETE FROM $1 WHERE $2 = $3;';
    const values = [tableName, fieldName, fieldValue];
    res = await client.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default del;
