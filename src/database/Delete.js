const del = (id, table) => {
  const conn = connect()
  const res = conn.querry(`DELETE FROM ${table} WHERE id = ${id};`);
};

export default del;
