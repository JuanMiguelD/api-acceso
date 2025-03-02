const User = require("../models/User");

class UserRepositories{
    async findByEmail(email){
        return await User.findByEmail(email);
    }
}

module.exports = new UserRepositories();
