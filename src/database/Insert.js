import connection from './db';

const insert = async (tableName, data) => {
  let res = null;
  const client = connection();
  try {
    const text = 'INSERT INTO $1 VALUES(DEFAULT, $2);';
    const aux = '';
    const jData = JSON.values(data);
    jData.forEach((i) => {
      aux.concat(i, ', ');
    });
    aux.slice(0, aux.length - 2);
    const values = [tableName, aux];
    res = await client.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
  client.end();
  return res;
};

export default insert;
