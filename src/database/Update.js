const update = (id, data, table) => {
  const conn = connect()
  const res = conn.querry(`UPDATE ${table} SET ${data} WHERE id = ${id};`);
};

export default update;
