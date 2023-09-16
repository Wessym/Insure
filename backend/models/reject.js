// import mongoose
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
// schema (attributes + types)
const rejectSchema = mongoose.Schema({
    cause: String,
    idDemande: { type: mongoose.Schema.Types.ObjectId, ref: "Demande" },
});
// Apply the uniqueValidator plugin to rejectSchema.
rejectSchema.plugin(uniqueValidator);
// model name Schema
const reject = mongoose.model("Reject", rejectSchema);
// make reject importable in other places
module.exports = reject;