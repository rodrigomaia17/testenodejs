var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'teste'
    },
    port: 3000,
    db: 'mongodb://localhost/teste-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'teste'
    },
    port: 3000,
    db: 'mongodb://localhost/teste-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'teste'
    },
    port: 3000,
    db: 'mongodb://localhost/teste-production'
  }
};

module.exports = config[env];
