const itemService = require('../services/itemService')

const addVote = async (req, res) => {
    const itemId = req.params.id;

    try{
        const vote = await itemService.addVote(itemId);

        if(vote.errMessage) {
            return res.json({ errMessage: vote.errMessage });
        };

        return res.json({update: 'vote added'});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

const removeVote = async (req, res) => {
    const itemId = req.params.id;

    try{
        const vote = await itemService.removeVote(itemId);

        if(vote.errMessage) {
            return res.json({ errMessage: vote.errMessage });
        };

        return res.json({update: 'vote removed'});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

module.exports = {
    addVote,
    removeVote,
};
