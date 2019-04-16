module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
    },
    sessid: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  return User;
};
