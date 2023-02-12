module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    text: {
      type: Sequelize.STRING
    },
    day: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    reminder: {
      type: Sequelize.BOOLEAN
    }
  });

  return Task;
};
