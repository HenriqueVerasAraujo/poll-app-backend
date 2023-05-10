const userService = require('../services/userService');

const loginUser = async (req, res) => {
    const body = req.body;

    try{
        const tryLogin = await userService.loginUser(body);
        if (tryLogin.errMessage) {
            return res.json({ errMessage: tryLogin.errMessage });
        };
        return res.json({token: tryLogin.token, userId: tryLogin.userId });
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

const createUser = async (req, res) => {
    const body = req.body;

    try{
        const createNewUser = await userService.createUser(body);
        if (createNewUser.errMessage) {
            return res.json({ errMessage: createNewUser.errMessage });
        };
        return res.json({message: 'Account created!'});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

module.exports = {
    loginUser,
    createUser
}