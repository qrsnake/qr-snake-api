import connection from './db';

const insert = async (tableName, data) => {
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
    const text = `INSERT INTO ${tableName} (${keys}) VALUES(${value});`;
    res = await client.query({ text });
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default insert;
