const pollService = require('../services/pollService')

const createPoll = async (req, res) => {
    const body = req.body;
    const userId = req.user.userId;
    try{
        const tryCreatePoll= await pollService.createPoll(body, userId);
        return res.json({ poll: tryCreatePoll });
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

module.exports = {
    createPoll,
};
