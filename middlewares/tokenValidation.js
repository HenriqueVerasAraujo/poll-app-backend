const jwt = require('jsonwebtoken'); 
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (!token) {
            return res.json({ message: 'Token not found' });
        };
        const tokenVerify = jwt.verify(token, secret);
        if (!tokenVerify) {
            return res.json({ message: 'Expired or invalid token' });
        };
        req.user = {
            userId: tokenVerify.id,
        };
        return next();

    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: err, message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidation,
};