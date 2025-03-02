const userService = require("../services/User.service");

exports.login = async(req, res) => {
    const {email, password} = req.body;
    const result = await userService.login(email, password);

    if(!result){
        return res.status(401).json({message: "Credenciales inválidas"});
    }

    res.json({
        accessToken: result.token,
        userType: result.user.type
    });
};
