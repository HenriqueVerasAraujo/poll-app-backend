const { Poll } = require('../models');

require('dotenv').config();


const createPoll = async(body, userId) => {
    const { pollTitle } = body;
    
    const newPoll = await Poll.create({ pollTitle, userId });

    return newPoll;
};


module.exports = {
    createPoll,
};