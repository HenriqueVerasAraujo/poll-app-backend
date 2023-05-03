const usernameValid = async(req, res, next) => {
    const { username } = req.body;
    if(!username) {
        return res.json({errMessage: "Username is required"});
    };
    next();
};

const emailValid = async(req, res, next) => {
    const { email } = req.body;
    if(!email) {
        return res.json({errMessage: "Email is required"});
    };
    next();
};

const passwordValid = async(req, res, next) => {
    const { password } = req.body;
    if(!password) {
        return res.json({errMessage: "Password is required"});
    };
    next();
};

module.exports = {
    emailValid,
    usernameValid,
    passwordValid,
};
