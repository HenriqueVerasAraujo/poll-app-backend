const { Poll, Item} = require('../models');

require('dotenv').config();


const createPoll = async(body, userId) => {
    const { pollTitle, items } = body;
    
    const newPoll = await Poll.create({ pollTitle, userId });
    await Promise.all(items
        .map(async (singleItem) => Item
        .create({ pollId: newPoll.id, itemTitle: singleItem.itemTitle, votes: 0 })));
    return newPoll;
};

module.exports = {
    createPoll,
};