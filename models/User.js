const mongoose = require(  "mongoose");

const UserSchema= mongoose.Schema(
    {
        username:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        // verify:{ type : Boolean , default : false} //verification of user account

    },
    {timestamps:true}
);

const User = mongoose.model("users",UserSchema);
module.exports = User ;