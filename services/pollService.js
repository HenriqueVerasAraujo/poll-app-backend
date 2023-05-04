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

const fetchAllPolls = async(userId) => {
    const allPolls = await Poll.findAll({ where: { userId } });
    return allPolls;
};

const fetchOnePoll = async(pollId) => {
    const singlePoll = await Poll.findOne({ where: { id: pollId } });
    if (!singlePoll) {
        return {errMessage: 'Poll not found'}
    }
    return singlePoll;
};

module.exports = {
    createPoll,
    fetchAllPolls,
    fetchOnePoll,
};