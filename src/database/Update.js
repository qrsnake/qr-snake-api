import connection from './db';

const update = async (tableName, fieldName, fieldValue, data) => {
  let res = null;
  const client = connection();
  try {
    const keys = Object.keys(data).join(', ');
    const value = Object.values(data).map((v) => {
      if (typeof v === 'string') {
        return `'${v}'`;
      }
      return v;
    }).join(', ');
    const text = `UPDATE ${tableName} SET (${keys}) = (${value}) WHERE ${fieldName} = ${fieldValue};`;
    res = await client.query({ text });
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default update;
