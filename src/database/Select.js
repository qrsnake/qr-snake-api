const select = (id, table) => {
  const conn = connect()
  if(id == null){
    const res = conn.querry(`SELECT * FROM ${table};`);
  }
  else{
    const res = conn.querry(`SELECT * FROM ${table} WHERE id = ${id};`);
  }
};

export default select;
