import client from './db';

const select = async (id, table) => {
  let res = null;
  if (id == null) {
    try {
      const text = 'SELECT * FROM $1;';
      const values = [table];
      res = await client.query(text, values);
    } catch (err) {
      console.log(err.stack);
    }
  } else {
    try {
      const text = 'SELECT * FROM $1 WHERE id = $2;';
      const values = [table, id];
      res = await client.query(text, values);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return res;
};

export default select;
