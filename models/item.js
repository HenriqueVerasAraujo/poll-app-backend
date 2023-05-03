const Item = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    itemTitle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pollId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'polls',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    tableName: 'items',
    timestamps: false,
  });

  Item.associate = ({ Poll }) => {
    Item.belongsTo(Poll, {foreignKey: 'pollId', as: 'poll' })
  };

  return Item;
};

module.exports = Item;