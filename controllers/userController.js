const userService = require('../services/userService');

const loginUser = async (req, res) => {
    const body = req.body;

    try{
        const tryLogin = await userService.loginUser(body);
        if (tryLogin.errMessage) {
            return res.json({ errMessage: tryLogin.errMessage });
        }
        return res.json({token: tryLogin.token});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

const createUser = async (req, res) => {
    const body = req.body;

    try{
        const createNewUser = await userService.createUser(body);
        if (createUser.errMessage) {
            return res.json({ errMessage: tryLogin.errMessage });
        }
        return res.json({user: createNewUser});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    };
};

module.exports = {
    loginUser,
    createUser
}