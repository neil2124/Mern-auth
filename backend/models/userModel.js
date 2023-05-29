import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name : {
        type : 'string',
        required : true,

    },
    email : {
        type : 'string',
        required : true,
        unique : true,
    },
    password : {
        type : 'string',
        required : true,

    },
},{
    timestamps:true
});

//Hash the password before saving
//Not using arrow function beacuse we have to this 'this' keyword which refers to user in this case..
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }

     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User' , userSchema);

export default User;