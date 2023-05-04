const pollService = require('../services/pollService')

const createPoll = async (req, res) => {
    const body = req.body;
    const userId = req.user.userId;
    try{
        await pollService.createPoll(body, userId);
        return res.json({ message: "Poll created!" });
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

const fetchAllPolls = async(req, res) => {
    const userId = req.user.userId;
    try{
        const allPolls = await pollService.fetchAllPolls(userId);
        if(allPolls.length > 0) {
            return res.json(allPolls);
        };
        return res.json({errMessage: "Create a new Poll."});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

module.exports = {
    createPoll,
    fetchAllPolls
};
