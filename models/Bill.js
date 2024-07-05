const mongoose = require(  "mongoose");

const BillSchema= mongoose.Schema(
    {
        customerName:{type:String, required:true},
        phoneNumber:{type:String, required:true},
        paymentMethod:{type:String, required:true},
        address:{type: String,required: true} ,
        cartItems:{type:Array, required:true},
        subTotal:{type:Number, required:true},
        tax:{type:Number, required:true},
        totalAmount:{type:Number, required:true},
        
    },
    {timestamps:true}
);

const Bill = mongoose.model("bills",BillSchema);
module.exports = Bill ;