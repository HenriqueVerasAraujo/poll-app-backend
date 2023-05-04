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

const fetchPoll = async(pollId, userId) => {
    // const findPoll = await Poll.findOne
};

const fetchAllPolls = async(userId) => {
    const allPolls = await Poll.findAll({ where: { userId } });
    return allPolls;
};

module.exports = {
    createPoll,
    fetchAllPolls
};