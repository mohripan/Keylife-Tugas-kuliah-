import {mongoose} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    nim: {
        type: String,
        required:true,
        unique: true,
    },
    username: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: false,
        default: "",
    },
    lastName: {
        type: String,
        required: false,
        default: "",
    },
    university: {
        type: String,
        required: false,
        default: "",
    },
    saldo: {
        type: Number,
        required: true,
        default: 0,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
})

userSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;