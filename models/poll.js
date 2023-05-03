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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    tableName: 'polls',
    timestamps: true,
  });

  Poll.associate = ({ User, Item}) => {
    Poll.belongsTo(User, {foreignKey: 'userId', as: 'user' })
    Poll.hasMany(Item, {foreignKey: 'pollId', as: 'items' })
  };

  return Poll;
};

module.exports = Poll;