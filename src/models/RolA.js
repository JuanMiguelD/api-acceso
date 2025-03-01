const User = require("./User");

class RolA extends User{
    constructor(userData){
        super(userData);
        this.type = "A"
    }
}

module.export = RolA;