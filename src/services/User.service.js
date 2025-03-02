const bcrypt = require("bcrypt");
const userRepository = require("../Repositories/UserRepository");
const jwt = require("jsonwebtoken");

class UserService {
    async login(email, password){
        const user = await userRepository.findByEmail(email);
        if(!user) return null;
        
        if(password != user.password) return null

        const token = jwt.sign(
            {id:user.id, email: user.email}, 
            null,
            {algorithm:"none", expiresIn:process.env.JWT_EXPIRES_IN} 
        )

        return {user,token};
    }

}

module.exports = new UserService();