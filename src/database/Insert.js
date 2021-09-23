import connection from './db';

const insert = async (data, table) => {
  let res = null;
  const client = connection();
  try {
    const text = 'INSERT INTO $1 VALUES(DEFAULT, $2);';
    const aux = '';
    const jdata = JSON.values(data);
    jdata.forEach((i) => {
      aux.concat(i, ', ');
    });
    aux.slice(0, aux.length - 2);
    const values = [table, aux];
    res = await client.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
  return res;
};

export default insert;
