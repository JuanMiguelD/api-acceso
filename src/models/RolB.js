const User = require("./User");

class RolB extends User {
    constructor(userData){
        super(userData)
        this.type="B"
    }
}

module.exports = RolB