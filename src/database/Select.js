import connection from './db';

const select = async (tableName, fieldName, fieldValue) => {
  let res = null;
  const client = connection();
  if (fieldValue == null) {
    try {
      const text = `SELECT * FROM ${tableName};`;
      res = await client.query({ text });
    } catch (err) {
      console.log(err.stack);
    }
  } else {
    try {
      const text = `SELECT * FROM ${tableName} WHERE ${fieldName} = ${fieldValue};`;
      res = await client.query({ text });
    } catch (err) {
      console.log(err.stack);
    }
  }
  client.end();
  return res;
};

export default select;
