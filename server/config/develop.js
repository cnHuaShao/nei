module.exports = {
  salt: '0sY7fh6;wMt',
  sendNotification: false,
  logger: {
    level: 'debug',
    root: './logs/'
  },
  testDomain: 'https://faketestnei.netease.com',
  onlineDomain: 'https://nei.netease.com',
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'nei-test',
    connectionLimit: 100,
    dateStrings: true,
    charset: 'UTF8MB4_GENERAL_CI'
  },
  mongodb: {
    url: 'mongodb://127.0.0.1:27017',
    options: {
      useNewUrlParser: true
    },
    name: 'nei_local',
    key: 'test_'
  },
  redis: {
    key: 'test_',
    host: '127.0.0.1',
    port: '6379',
    expire: 2678400,
    password: ''
  },
  // ip 地址查询服务
  ip: {
    disabled: true
  },
  mail: {
    disabled: true
  },
  nos: {
    server: 'https://fakenos.netease.com'
  },
  static: {
    defer: true
  },
  mysqlLog: true
};
