const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const loginUser = async(body) => {
    const { email, password } = body;
    
    const validUser = await User.findOne({where: { email } });
    if (!validUser) {
        return {errMessage: "Invalid Email."};
    };

    const comparePass = await bcrypt.compare(password, validUser.password);
    if (!comparePass) {
        return { errMessage: 'Invalid password.' };
    };

    const token = jwt.sign({ 
        id: validUser.id,
        username: validUser.username,
        email: validUser.email
     }, secret);

     return { token };
};

const createUser = async(body) => {
    const { email, password, username } = body;
    
    const validEmail = await User.findOne({ where: { email } });
    if (validEmail) {
        return {errMessage: "Email already in use."};
    };

    const validUsername = await User.findOne({ where: { username } });
    if (validUsername) {
        return {errMessage: "Username already in use."};
    };

    const hashPass = await bcrypt.hash(password, 10);
    const createNewUser = await User.create({ username, password: hashPass, email });

    return createNewUser;
};

module.exports = {
    loginUser,
    createUser
};