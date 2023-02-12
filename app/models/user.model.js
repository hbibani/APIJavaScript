module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      translate: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return user;
  };
  