const Poll = (sequelize, DataTypes) => {
  const Poll = sequelize.define('Poll', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    pollTitle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    published: {
      allowNull: false,
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated: {
      allowNull: false,
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    tableName: 'polls',
    timestamps: false,
  });

  Poll.associate = ({ User }) => {
    Poll.belongsTo(User, {foreignKey: 'userId', as: 'user' })
  };

  return Poll;
};

module.exports = Poll;