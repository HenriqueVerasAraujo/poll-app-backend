const { Poll, Item, User } = require('../models');

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
    const singlePoll = await Poll.findOne({
        where: { id: pollId },
        attributes: { exclude: ["userId", "updatedAt"] },
        include: [
            {model: Item, as: "items", attributes: { exclude: ["pollId"] }},
            {model: User, as: "user", attributes: { exclude: ["id", "email", "password"] }},
        ]
    });

    if (!singlePoll) {
        return {errMessage: 'Poll not found'};
    };

    return singlePoll;
};

const pollStatusUpdate = async(pollId) => {
    await Poll.update(
        {pollStatus: 2 },
        { where: { id: pollId }}
    );
    const singlePoll = await Poll.findOne({ where: { id: pollId } });

    return singlePoll;
};

module.exports = {
    createPoll,
    fetchAllPolls,
    fetchOnePoll,
    pollStatusUpdate
};
