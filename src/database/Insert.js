const insert = (data, table) => {
  const conn = connect()
  const res = conn.querry(`INSERT INTO ${table} VALUES(${data});`);
};

export default insert;
