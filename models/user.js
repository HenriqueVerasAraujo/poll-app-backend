const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = ({ Poll }) => {
    User.hasMany(Poll, {foreignKey: 'userId', as: 'polls' })
  };

  return User;
};

module.exports = User;