// import mongoose
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
// schema (attributes + types)
const userSchema = mongoose.Schema({
    name: String,
    adresse: String,
    email: { type: String, unique: true },
    pwd: String,
    cin: Number,
    tel: Number,
    role: {type: String},
    avatar: String,
    });
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
// model name Schema
const user = mongoose.model("User", userSchema);
// make user importable in other places
module.exports = user;