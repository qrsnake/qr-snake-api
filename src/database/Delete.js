import connection from './db';

const del = async (id, table) => {
  let res = null;
  const client = connection();
  try {
    const text = 'DELETE FROM $1 WHERE id = $2;';
    const values = [table, id];
    res = await client.query(text, values);
  } catch (err) {
    console.log(err.stack);
  }
  return res;
};

export default del;
