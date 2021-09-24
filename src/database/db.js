import { Client } from 'pg';

const connection = () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  client.connect();

  return client;
};

export default connection;
