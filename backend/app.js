// --------------------------- import module ------------------//


// importation mta3 l'express modules
const express = require("express");

// import body-parser module
const bodyParser = require("body-parser");

// import mongoose
const mongoose = require("mongoose");

// import bcrypt
const bcrypt = require("bcrypt");



// import multer
const multer = require("multer");

// module path : interne module
const path = require("path");


// assuranceDB ---> database name
mongoose.connect('mongodb://localhost:27017/assuranceDB');

const { ObjectId } = require("mongodb");



// --------------------------- models importation ------------------//

const User = require("./models/user");
const Demande = require("./models/demande");
const Reject = require("./models/reject");
const { url } = require("inspector");





// --------------------------- Create application ------------------//

// create express application
const app = express();


// --------------------------- App configuration ------------------//


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));
app.use('/pdfs', express.static(path.join('backend/pdfs')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf'
};

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        if (isValid && file.mimetype === 'application/pdf') {
            cb(null, 'backend/pdfs'); // Save PDF files in the 'backend/pdfs' directory
        } else {
            cb(null, 'backend/images'); // Save image files in the 'backend/images' directory
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const fileName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, fileName);
    }
});



// ------------------------- Security configuration ----------------------------------
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

















// ------------------------- Business logic User ----------------------------------


// Business Logic : Signup 
app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("here user", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        let verifEmail = EmailValid(req.body.email);
        if (!req.file) {
            req.file = {}
            req.file.filename = "defaultPic.png"
        }
        if (verifEmail) {
            let url = req.protocol + "://" + req.get("host");
            let userObj = new User({
                name: req.body.name,
                adresse: req.body.adresse,
                email: req.body.email,
                pwd: cryptedPwd,
                cin: req.body.cin,
                tel: req.body.tel,
                role: req.body.role,
                avatar: url + "/images/" + req.file.filename,
            });
            userObj.save((err, doc) => {
                if (err) {
                    res.json({ error: err })
                } else {
                    res.json({ message: "user saved with success", obj: doc })
                }
            });
        } else {
            res.json({ message: "please verif email format" })
        }
    })
});


// Business Logic : Login User
app.post("/users/login", (req, res) => {
    console.log("here obj", req.body);
    let user;
    User.findOne({ email: req.body.email })
        .then((doc) => {
            user = doc;
            console.log("this is founded user", doc);
            if (!doc) {
                res.json({ message: "User not founded" });
            }
            return bcrypt.compare(req.body.pwd, doc.pwd);
        })
        .then((pwdResponse) => {
            console.log("pwdResponse", pwdResponse);
            if (!pwdResponse) {
                res.json({ message: "Password incorrect" })
            } else {
                let userObj = user;
                console.log("Final user", userObj);
                res.json({ message: "2", user: userObj });
            }
        });
});















// ------------------------- Business logic Demandes ----------------------------------




// Business Logic : Add demande
app.post("/demandes/add-demande", multer({ storage: storageConfig }).single("img"),
    (req, res) => {
        console.log("here aslema", req.body);

        let url = req.protocol + "://" + req.get("host");
        let demandeObj = new Demande({
            type: req.body.type,
            prestataire: req.body.prestataire,
            montant: req.body.montant,
            justif: req.body.justif,
            idUser: ObjectId(req.body.idUser),
        });
        demandeObj.save((err, doc) => {
            if (err) {
                res.json({ error: err })
            } else {
                res.json({ message: "demande saved with success", obj: doc })
            }
        });

    });






// ---------------Business Logic : Get All Demandes With Users
app.get("/demandes/getAllDemandesWithUsers", (req, res) => {
    Demande.aggregate(
        [
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "idUser", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "user", // output array field
                },
            },
        ],
        (error, docs) => {
            res.status(200).json({
                AllDemandesWithUser: docs,
            });
        }
    );
});





// ---------------Business Logic : confirm Demande 
app.put('/demandes/confirmDemande/:idDemande', async (req, res) => {
    try {
        // get the command id and user id from the request
        const { idDemande } = req.params;
        // find the command that matches the idCmd and idUser
        const demande = await Demande.findOne({ _id: idDemande });
        // update the status of the command
        demande.status = "Confirmed";
        // save the updated command
        await demande.save();
        //   case updated success
        res.status(200).json({ message: '1' });
    } catch (err) {
        // case fama problem
        console.log(err);
        res.status(500).json({ message: '2' });
    }
});





// ---------------Business Logic : Reject Demande 
app.put('/demandes/rejectDemande/:idDemande', async (req, res) => {
    try {
        // get the command id and user id from the request
        const { idDemande } = req.params;
        // find the command that matches the idCmd and idUser
        const demande = await Demande.findOne({ _id: idDemande });
        // update the status of the command
        demande.status = "Rejected";
        // save the updated command
        await demande.save();
        //   case updated success
        res.status(200).json({ message: '1' });
    } catch (err) {
        // case fama problem
        console.log(err);
        res.status(500).json({ message: '2' });
    }
});







// ---------------Business Logic : Get Demande By User Id
app.get("/demandes/getDemandeByUserId/:id", (req, res) => {
    console.log("here user ID", req.params.id);
    let id = req.params.id;
    Demande.find({ _idUser: id }).then(
        (doc) => {
            console.log("demandes for this user :", doc);
            res.json({ demandes: doc });
        })
});














// ------------------------- Business logic Rejections ----------------------------------




// Business Logic : Add Rejection
app.post("/rejects/add-rejection", multer({ storage: storageConfig }).single("img"),
    (req, res) => {
        console.log("here rejection", req.body);

        let rejectObj = new Reject({
            cause: req.body.cause,
            idDemande: ObjectId(req.body.idDemande),
        });
        rejectObj.save((err, doc) => {
            if (err) {
                res.json({ error: err })
            } else {
                res.json({ message: "rejection saved with success", obj: doc })
            }
        });

    });





// ---------------Business Logic : Get Demande By User Id
app.get("/rejects/getRejectionByDemandId/:id", (req, res) => {
    console.log("here demand ID", req.params.id);
    let id = req.params.id;
    Reject.findOne({ idDemande: id }).then(
        (doc) => {
            console.log("demandes for this user :", doc);
            res.json({ rejection: doc });
        })
});



















































// --------------*** Functions ***--------------------

function EmailValid(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}









// make app importable from other files
module.exports = app;