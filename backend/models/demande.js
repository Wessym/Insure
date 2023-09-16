// import mongoose
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
// schema (attributes + types)
const demandeSchema = mongoose.Schema({
    type: String,
    prestataire: String,
    montant: String,
    justif: String,
    status: { type: String, default: "Not Confirmed" },
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
// Apply the uniqueValidator plugin to demandeSchema.
demandeSchema.plugin(uniqueValidator);
// model name Schema
const demande = mongoose.model("Demande", demandeSchema);
// make demande importable in other places
module.exports = demande;