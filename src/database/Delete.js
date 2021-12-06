import connection from './db';

const del = async (tableName, fieldName, fieldValue) => {
  let res = null;
  const client = connection();
  try {
    const text = `DELETE FROM ${tableName} WHERE ${fieldName} = ${fieldValue};`;
    res = await client.query(text);
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default del;
