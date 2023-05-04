const { Item } = require('../models');

require('dotenv').config();

const addVote = async(itemId) => {
    const singleItem = await Item.findOne({ where:{ id: itemId } });
    if(!singleItem) {
        return { errMessage: 'Item not found.' };
    };

    const [updateItem] = await Item.update(
        {votes: singleItem.votes + 1 },
        { where: { id: itemId }}
    );
    return updateItem;
};

const removeVote = async(itemId) => {
    const singleItem = await Item.findOne({ where:{ id: itemId } });
    if(!singleItem) {
        return { errMessage: 'Item not found.' };
    };

    const [updateItem] = await Item.update(
        {votes: singleItem.votes - 1 },
        { where: { id: itemId }}
    );
    return updateItem;
};

module.exports = {
    addVote,
    removeVote,
};