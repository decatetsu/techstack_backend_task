import * as process from 'process';

export default () => ({
  database: {
    connectionString: process.env.DATABASE_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/apartments',
  }
});
