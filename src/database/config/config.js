module.exports = {
  development: {
    username: 'root',
    password: 'e2HHGdBc4DFcFC6eA5A4GHda-gec1CB4',
    database: 'railway',
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
