
//configuration values for the POSTGRESQL database
//we used the ip address specified from the google web page

module.exports = {
  HOST: "34.116.116.26",
  USER: "postgres",
  PASSWORD: "password",
  DB: "NewDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

