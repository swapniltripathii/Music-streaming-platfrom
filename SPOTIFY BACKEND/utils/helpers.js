const jwt = require("jsonwebtoken");

exports = {};
exports.getToken = async (email, user) => {
    //assume this code is complete
    const token = jwt.sign(
        { identifier: user._id},
        "ThisIsASecretCode"
    );
    return token;
};

module.exports = exports;