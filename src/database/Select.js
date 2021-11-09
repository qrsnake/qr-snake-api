import connection from './db';

const select = async (tableName, fieldName, fieldValue) => {
  let res = null;
  const client = connection();
  if (fieldValue == null) {
    try {
      const text = 'SELECT * FROM $1;';
      const values = [tableName];
      res = await client.query(text, values);
    } catch (err) {
      console.log(err.stack);
    }
  } else {
    try {
      const text = 'SELECT * FROM $1 WHERE $2 = $3;';
      const values = [tableName, fieldName, fieldValue];
      res = await client.query(text, values);
    } catch (err) {
      console.log(err.stack);
    }
  }
  client.end();
  return res;
};

export default select;
