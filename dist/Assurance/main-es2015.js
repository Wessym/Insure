(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- app.component.html -->\n<div class=\"site-wrap\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ajout-modal/ajout-modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ajout-modal/ajout-modal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"demandeForm\">\n  <div class=\"head\">\n    <p class=\"text-center title\">Ajouter une demande</p>\n  </div>\n  \n  <table class=\"table caption-top container\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Numero</th>\n          <th scope=\"col\">Type</th>\n          <th scope=\"col\">Prestataire</th>\n          <th scope=\"col\">Montant</th>\n          <th scope=\"col\">Justificatif</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr >\n          <th scope=\"row\">1</th>\n          <td>\n            <select name=\"\" id=\"\" formControlName=\"type\">\n              <option value=\"\"></option>\n              <option value=\"Consultation\">Consultation</option>\n              <option value=\"Médicaments\">Médicaments</option>\n            </select>\n          </td>\n          <td>\n            <input type=\"text\" name=\"\" id=\"\" formControlName=\"prestataire\">\n          </td>\n          <td><input type=\"number\" name=\"\" id=\"\" formControlName=\"montant\"></td>\n          <td style=\"    display: flex;flex-direction: column-reverse;justify-content: space-evenly;align-items: baseline;\">\n\n            <!-- <input type=\"file\" name=\"file\" id=\"justif\" formControlName=\"justif\"> -->\n            <input type=\"file\" style=\"visibility: hidden;\" class=\"form-control text-center\" formControlName=\"justif\" #filePicker>\n            <button class=\"download-button\" (click)=\"filePicker.click()\" value=\"Signup\">\n              <div class=\"docs\"><svg class=\"css-i6dzq1\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"\n                  stroke-width=\"2\" stroke=\"currentColor\" height=\"20\" width=\"20\" viewBox=\"0 0 24 24\">\n                  <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n                  <polyline points=\"14 2 14 8 20 8\"></polyline>\n                  <line y2=\"13\" x2=\"8\" y1=\"13\" x1=\"16\"></line>\n                  <line y2=\"17\" x2=\"8\" y1=\"17\" x1=\"16\"></line>\n                  <polyline points=\"10 9 9 9 8 9\"></polyline>\n                </svg>Sélectionnez votre Justificatif\n              </div>\n              <div class=\"download\">\n                <svg class=\"css-i6dzq1\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"\n                  stroke-width=\"2\" stroke=\"currentColor\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\">\n                  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>\n                  <polyline points=\"7 10 12 15 17 10\"></polyline>\n                  <line y2=\"3\" x2=\"12\" y1=\"15\" x1=\"12\"></line>\n                </svg>\n              </div>\n            </button>\n          \n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"container\">\n      <button style=\"margin-left: 80%;\" (click)=\"ajoutDemande()\" class=\"btnenv\">\n        <div class=\"svg-wrapper-1\">\n          <div class=\"svg-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n              <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n              <path fill=\"currentColor\" d=\"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z\"></path>\n            </svg>\n          </div>\n        </div>\n        <span>Envoyer</span>\n      </button>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assure-profile/assure-profile.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assure-profile/assure-profile.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"main-body\">\n        <div class=\"row gutters-sm container\">\n            <div class=\"col-md-4 mb-3\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex flex-column align-items-center text-center\" style=\"border-radius: 6%;border-style: double;\">\n                            <div style=\"    border-radius: 15%;border-style: outset;\">\n                                <img src=\"{{connectedUser.avatar}}\" alt=\"Admin\" style=\"border: 150px;\"  width=\"130\">\n                            </div>\n\n\n\n\n                            <div class=\"mt-3\">\n                                <h4>{{connectedUser.name}}</h4>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <h6 class=\"mb-0\">Nom et prénom</h6>\n                            </div>\n                            <div class=\"col-sm-9 text-secondary\">\n                                {{connectedUser.name}}\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <h6 class=\"mb-0\">Email</h6>\n                            </div>\n                            <div class=\"col-sm-9 text-secondary\">\n                                {{connectedUser.email}}\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <h6 class=\"mb-0\">Téléphone</h6>\n                            </div>\n                            <div class=\"col-sm-9 text-secondary\">\n                                {{connectedUser.tel}}\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <h6 class=\"mb-0\">CIN</h6>\n                            </div>\n                            <div class=\"col-sm-9 text-secondary\">\n                                {{connectedUser.cin}}\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <h6 class=\"mb-0\">Adresse</h6>\n                            </div>\n                            <div class=\"col-sm-9 text-secondary\">\n                                {{connectedUser.adresse}}\n                            </div>\n                        </div>\n                        <hr>\n                    </div>\n                </div>\n                <div class=\"row gutters-sm\">\n                    <div class=\"col-sm-6 mb-3\"\n                        style=\"margin-left: 15%;margin-top: 10%;display: flex;justify-content: center;\">\n\n                        <!-- Button trigger modal -->\n\n                        <button data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" class=\"buttonx\" (click)=\"loading()\">\n                            <span class=\"shadow\"></span>\n                            <span class=\"edge\"></span>\n                            <span class=\"front text\"> Liste de mes demandes\n                            </span>\n                        </button>\n\n                        <!-- Button trigger modal -->\n\n                        <!-- Modal -->\n\n                        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\n                            <div class=\"modal-dialog\" style=\"width: 100%;margin-right: 50%;\">\n                                <div class=\"modal-content\" style=\"width: 200%;\">\n                                    <div class=\"modal-header\">\n                                        <h1 class=\"modal-title fs-5 text-center\" id=\"exampleModalLabel\"\n                                            style=\"margin-left: 35%;\">Liste de mes demandes</h1>\n                                        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"\n                                            aria-label=\"Close\" (click)=\"reloading()\"></button>\n                                    </div>\n\n                                    <div *ngIf=\"isLoading\">\n                                        <!-- Show loading indicator or message -->\n\n                                        <section class=\"dots-container\" style=\"margin: 5%;margin-bottom: 5%;margin-left: -2%;\">\n                                            <div class=\"dot\"></div>\n                                            <div class=\"dot\"></div>\n                                            <div class=\"dot\"></div>\n                                            <div class=\"dot\"></div>\n                                            <div class=\"dot\"></div>\n                                        </section>                                          \n                                    \n                                    </div>\n\n                                    <div *ngIf=\"!isLoading\">\n                                        <!-- Display the component content once loading is complete -->\n                                        <!-- Your existing code here -->\n                                        <div class=\"modal-body\">\n                                            <table class=\"table text-center\">\n                                                <thead>\n                                                    <tr>\n                                                        <th scope=\"col\" class=\"text-center\">Num Demande</th>\n                                                        <th scope=\"col\">Prestataire</th>\n                                                        <th scope=\"col\">Type</th>\n                                                        <th scope=\"col\">Montant</th>\n                                                        <th scope=\"col\">Justification</th>\n                                                        <th scope=\"col\">Etat</th>\n                                                        <th scope=\"col\"></th>\n        \n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let m of userDemandes; let i = index\">\n                                                        <th scope=\"row\" class=\"text-center\">{{ i + 1 }}</th>\n                                                        <td>{{m.prestataire}}</td>\n                                                        <td>{{m.type}}</td>\n                                                        <td>{{m.montant}}</td>\n                                                        <td>{{m.justif}}</td>\n                                                        <td>\n                                                            <ng-container *ngIf=\"m.status === 'Not Confirmed'\"><p style=\"color: orange;\">EN COURS</p></ng-container>\n                                                            <ng-container *ngIf=\"m.status === 'Rejected'\"><p style=\"color: red;\">REJETÉE</p></ng-container>\n                                                            <ng-container *ngIf=\"m.status === 'Confirmed'\"><p style=\"color: green;\">CONFIRMÉ</p></ng-container>\n                                                        </td>\n                                                        <td>\n                                                            <ng-container *ngIf=\"m.status === 'Confirmed'\">\n                                                                <button class=\"download-button\" (click)=\"facturation(m)\">\n                                                                    <div class=\"docs\"><svg class=\"css-i6dzq1\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" stroke-width=\"2\" stroke=\"currentColor\" height=\"20\" width=\"20\" viewBox=\"0 0 24 24\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line y2=\"13\" x2=\"8\" y1=\"13\" x1=\"16\"></line><line y2=\"17\" x2=\"8\" y1=\"17\" x1=\"16\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>Facture</div>\n                                                                    <div class=\"download\">\n                                                                      <svg class=\"css-i6dzq1\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" stroke-width=\"2\" stroke=\"currentColor\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line y2=\"3\" x2=\"12\" y1=\"15\" x1=\"12\"></line></svg>\n                                                                    </div>\n                                                                </button>\n                                                            </ng-container>              \n                                                            \n                                                            <ng-container *ngIf=\"m.status === 'Rejected'\">\n                                                                <button class=\"btn btn-outline-success\" data-bs-dismiss=\"modal\" [routerLink]=\"['/detail-demande', m._id]\">Détails</button>\n                                                            </ng-container>    \n                                                                   \n                                                        </td>\n                                                        \n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n\n\n\n\n\n                                    <div class=\"modal-footer\">\n                                        <button type=\"button\" class=\"btn btn-secondary\"\n                                            data-bs-dismiss=\"modal\" (click)=\"reloading()\">Fermer</button>\n\n                                        <button type=\"button\" routerLink=\"/ajout-modal\"\n                                            class=\"btn btn-primary buttonajt\" data-bs-dismiss=\"modal\"><span>\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\"\n                                                    height=\"24\">\n                                                    <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                                                    <path fill=\"currentColor\" d=\"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z\">\n                                                    </path>\n                                                </svg> Ajouter\n                                            </span></button>\n\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n\n\n\n\n\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assureur-profile/assureur-profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assureur-profile/assureur-profile.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header\">\n    <div class=\"header text-center\">\n        <h2 class=\"title\">Demandes</h2>\n    </div>\n</div>\n\n<div *ngIf=\"isLoading\" style=\"margin-left: 47%; margin-top: 5%;margin-bottom: 5%;\">\n    <!-- Show loading indicator or message -->\n    <div id=\"wifi-loader\">\n        <svg class=\"circle-outer\" viewBox=\"0 0 86 86\">\n            <circle class=\"back\" cx=\"43\" cy=\"43\" r=\"40\"></circle>\n            <circle class=\"front\" cx=\"43\" cy=\"43\" r=\"40\"></circle>\n            <circle class=\"new\" cx=\"43\" cy=\"43\" r=\"40\"></circle>\n        </svg>\n        <svg class=\"circle-middle\" viewBox=\"0 0 60 60\">\n            <circle class=\"back\" cx=\"30\" cy=\"30\" r=\"27\"></circle>\n            <circle class=\"front\" cx=\"30\" cy=\"30\" r=\"27\"></circle>\n        </svg>\n        <svg class=\"circle-inner\" viewBox=\"0 0 34 34\">\n            <circle class=\"back\" cx=\"17\" cy=\"17\" r=\"14\"></circle>\n            <circle class=\"front\" cx=\"17\" cy=\"17\" r=\"14\"></circle>\n        </svg>\n        <div class=\"text\" data-text=\"Loading...\"></div>\n    </div>\n\n</div>\n\n<div *ngIf=\"!isLoading\">\n    <!-- Display the component content once loading is complete -->\n    <!-- Your existing code here -->\n    <div class=\"main-content\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"places-buttons\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                                    <h4 class=\"card-title\">\n                                        Stock<p class=\"category\">Click to view notifications</p>\n                                    </h4>\n                                </div>\n                            </div>\n\n                            <table class=\"table text-center\">\n                                <thead>\n                                    <tr>\n                                        <th>ID</th>\n                                        <th>ASSURE</th>\n                                        <th>MONTANT</th>\n                                        <th>TYPE</th>\n                                        <th>PRESTATAIRE</th>\n                                        <th>JUSTIFICATIF</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container *ngFor=\"let m of demandesWithUsers\">\n                                      <tr *ngIf=\"m.status === 'Not Confirmed'\">\n                                        <td>{{ m._id }}</td>\n                                        <td>{{ m.user[0].name }}</td>\n                                        <td>{{ m.montant }}</td>\n                                        <td>{{ m.type }}</td>\n                                        <td>{{ m.prestataire }}</td>\n                                        <td>{{ m.justif }}</td>\n                                        <td>\n                                          <input type=\"button\" (click)=\"confirmDemande(m._id)\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" value=\"ACCEPTER\" class=\"btn btn-info btn-sm\" >\n                                          <input type=\"button\" value=\"ANNULER\" class=\"btn btn-danger btn-sm\" (click)=\"toggleRejectionTextArea(m._id)\">\n                                        </td>\n                                      </tr>\n                                      <tr *ngIf=\"showRejectionTextArea && rejectedDemandeId === m._id\">\n                                        <td colspan=\"6\">\n                                          <textarea [(ngModel)]=\"rejectionForm.cause\" #rejectionTextarea placeholder=\"Enter cause...\"></textarea>\n                                          <button class=\"btn btn-primary\" (click)=\"rejectDemande((m._id),rejectionTextarea.value)\">Confirm</button>\n                                        </td>\n                                      </tr>\n                                    </ng-container>\n                                  </tbody>\n                            </table>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\n    <div class=\"modal-dialog\" style=\"width: 100%;margin-left: 20%;\">\n        <div class=\"modal-content\" style=\"width: 100%;\">\n            <div class=\"modal-header\" style=\"height: 85px;width: 74%;\">\n                <h1 class=\"modal-title fs-5 text-center\" id=\"exampleModalLabel\"\n                    style=\"margin-left: 35%;\">Demande acceptée avec succès</h1>\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"\n                    aria-label=\"Close\"></button>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/banner/banner.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/banner/banner.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Topbar Start -->\n<div class=\"container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block\" style=\"margin-bottom: 30px;\">\n  <div class=\"row gx-0 align-items-center\">\n    <div class=\"col-lg-7 px-5 text-start\">\n      <div class=\"h-100 d-inline-flex align-items-center me-4\">\n        <small class=\"fa fa-phone-alt me-2\"></small>\n        <small>+216 22 222 222</small>\n      </div>\n      <div class=\"h-100 d-inline-flex align-items-center me-4\">\n        <small class=\"far fa-envelope-open me-2\"></small>\n        <small>insure@insure.tn</small>\n      </div>\n      <div class=\"h-100 d-inline-flex align-items-center me-4\">\n        <small class=\"far fa-clock me-2\"></small>\n        <small>Lun - Ven : 09 AM - 09 PM</small>\n      </div>\n    </div>\n    <div class=\"col-lg-5 px-5 text-end\">\n      <div class=\"h-100 d-inline-flex align-items-center\">\n        <a class=\"text-white-50 ms-4\" href=\"#\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a class=\"text-white-50 ms-4\" href=\"#\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n        <a class=\"text-white-50 ms-4\" href=\"#\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n        <a class=\"text-white-50 ms-4\" href=\"#\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Topbar End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contac/contac.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contac/contac.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- Team Start -->\n  <div class=\"container-xxl py-5\">\n    <div class=\"container\">\n      <div class=\"text-center mx-auto\" style=\"max-width: 500px\">\n        <h1 class=\"display-6 mb-5\">Rencontrez les assureurs de notre équipe professionnels</h1>\n      </div>\n      <div class=\"row g-4\">\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\n          <div class=\"team-item rounded\">\n            <img class=\"img-fluid\" src=\"assets/images/team-1.jpg\" alt=\"\" />\n            <div class=\"text-center p-4\">\n              <h5>Full Name</h5>\n              <span>Designation</span>\n            </div>\n            <div class=\"team-text text-center bg-white p-4\">\n              <h5>Full Name</h5>\n              <p>Designation</p>\n              <div class=\"d-flex justify-content-center\">\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-twitter\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-facebook-f\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-youtube\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-linkedin-in\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\n          <div class=\"team-item rounded\">\n            <img class=\"img-fluid\" src=\"assets/images/team-2.jpg\" alt=\"\" />\n            <div class=\"text-center p-4\">\n              <h5>Full Name</h5>\n              <span>Designation</span>\n            </div>\n            <div class=\"team-text text-center bg-white p-4\">\n              <h5>Full Name</h5>\n              <p>Designation</p>\n              <div class=\"d-flex justify-content-center\">\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-twitter\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-facebook-f\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-youtube\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-linkedin-in\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.5s\">\n          <div class=\"team-item rounded\">\n            <img class=\"img-fluid\" src=\"assets/images/team-3.jpg\" alt=\"\" />\n            <div class=\"text-center p-4\">\n              <h5>Full Name</h5>\n              <span>Designation</span>\n            </div>\n            <div class=\"team-text text-center bg-white p-4\">\n              <h5>Full Name</h5>\n              <p>Designation</p>\n              <div class=\"d-flex justify-content-center\">\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-twitter\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-facebook-f\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-youtube\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-linkedin-in\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.7s\">\n          <div class=\"team-item rounded\">\n            <img class=\"img-fluid\" src=\"assets/images/team-4.jpg\" alt=\"\" />\n            <div class=\"text-center p-4\">\n              <h5>Full Name</h5>\n              <span>Designation</span>\n            </div>\n            <div class=\"team-text text-center bg-white p-4\">\n              <h5>Full Name</h5>\n              <p>Designation</p>\n              <div class=\"d-flex justify-content-center\">\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-twitter\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-facebook-f\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-youtube\"></i></a>\n                <a class=\"btn btn-square btn-light m-1\" href=\"\"><i class=\"fab fa-linkedin-in\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Team End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/detail-demande/detail-demande.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/detail-demande/detail-demande.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"one-div container\" *ngFor=\"let x of rejection\">\r\n    {{x.cause}}\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error-component/error-component.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error-component/error-component.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n    <!-- 404 Start -->\n    <div class=\"container-xxl py-5 wow fadeInUp\" data-wow-delay=\"0.1s\">\n        <div class=\"container text-center\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n              <i class=\"bi bi-exclamation-triangle display-1 text-primary\"></i>\n              <h1 class=\"display-1\">404</h1>\n              <h1 class=\"mb-4\">Page non trouvée</h1>\n              <p class=\"mb-4\">\n                Nous sommes désolés, mais la page que vous recherchez ne se trouve pas sur notre site ! Allez peut-être sur notre page d'accueil ou essayez d'utiliser une recherche ?\n              </p>\n              <a class=\"btn btn-primary py-3 px-5\" routerLink=\"\">Retour à l'accueil</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- 404 End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer Start -->\n<footer class=\"footer-section\">\n    <div class=\"container-fluid bg-dark footer mt-5 pt-5 wow fadeIn\" data-wow-delay=\"0.1s\">\n        <div class=\"container py-5\">\n            <div class=\"row g-5\">\n                <div class=\"col-lg-3 col-md-6\">\n                    <h1 class=\"text-white mb-4\">\n                        <img class=\"img-fluid me-3\" src=\"assets/images/icon/icon-02-light.png\" alt=\"\" />Insure\n                    </h1>\n                    <div class=\"d-flex pt-2\">\n                        <a class=\"btn btn-square me-1\" href=\"#\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n                        <a class=\"btn btn-square me-1\" href=\"#\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a class=\"btn btn-square me-1\" href=\"#\" target=\"_blank\"><i class=\"fab fa-youtube\"></i></a>\n                        <a class=\"btn btn-square me-0\" href=\"#\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <h5 class=\"text-light mb-4\">Addresse</h5>\n                    <p>\n                        <i class=\"fa fa-map-marker-alt me-3\"></i>123 City, Tunis, Tunisia\n                    </p>\n                    <p><i class=\"fa fa-phone-alt me-3\"></i>+216 22 222 222</p>\n                    <p><i class=\"fa fa-envelope me-3\"></i>Insure@insure.tn</p>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <h5 class=\"text-light mb-4\">Liens rapides</h5>\n                    <a class=\"btn btn-link\">À propos</a>\n                    <a class=\"btn btn-link\">Nos Services</a>\n                    <a class=\"btn btn-link\">Termes et conditions</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid copyright\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 text-center text-md-start mb-3 mb-md-0\">\n                        &copy; <a>Insure</a>, All Right Reserved.\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n<nav class=\"navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5\">\n  <a href=\"index.html\" class=\"navbar-brand d-flex align-items-center\">\n    <h1 class=\"m-0\">\n      <img class=\"img-fluid me-3\" src=\"assets/images/icon/icon-02-primary.png\" alt=\"\" />Insure\n    </h1>\n  </a>\n  <button type=\"button\" class=\"navbar-toggler\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <div class=\"navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0\">\n      <a routerLink=\"\" class=\"nav-item nav-link active\">Accueil</a>\n      <a routerLink=\"/propos\" class=\"nav-item nav-link\">A Propos</a>\n      <a routerLink=\"nos-services\" class=\"nav-item nav-link\">Nos Services</a>\n      <a routerLink=\"contacter-nous\" class=\"nav-item nav-link\">Contacter Nous</a>\n    </div>\n  </div>\n\n\n\n\n\n\n  <!-- ************************************************* IF CONNECTED USER  ******************************************* -->\n<div *ngIf=\"name\">\n\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <img src=\"{{connectedUser.avatar}}\" width=\"40\" height=\"40\" class=\"rounded-circle\">\n      <b style=\"margin-left: 10px;\">{{name}}</b>\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n      <a class=\"dropdown-item\" [routerLink]=\"role === 'Assuré' ? '/assure-profile' : '/assureur-profile'\">Dashboard</a>\n      <!-- <a class=\"dropdown-item\" href=\"#\">Edit Profile</a> -->\n      <a class=\"dropdown-item\" href=\"\" (click)=\"logout()\">Log Out</a>\n    </div>\n  </li>   \n</ul>\n\n\n</div>\n\n<div class=\"navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5\" *ngIf=\"!name\">\n    <a routerLink=\"/login\" class=\"btn btn-primary px-3 d-none d-lg-block\" style=\"margin-right: 5px;\">Se Connecter</a>\n    <a routerLink=\"/signup\" class=\"btn btn-primary px-3 d-none d-lg-block\">S'inscrire</a>\n</div>\n\n\n\n\n\n  <!-- ************************************************* IF CONNECTED USER  ******************************************* -->\n\n\n</nav>\n<!-- Navbar End -->\n\n<app-banner></app-banner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Carousel Start -->\r\n  <div class=\"container-fluid p-0 mb-5 wow fadeIn\" data-wow-delay=\"0.1s\">\r\n    <div id=\"header-carousel\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img class=\"w-100\" src=\"assets/images/carousel-1.jpg\" alt=\"Image\" />\r\n          <div class=\"carousel-caption\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6\">\r\n                  <h1 class=\"display-3 text-dark mb-4 animated slideInDown\">\r\n                    L'assurance crée de la richesse pour tous\r\n                  </h1>\r\n                  <a href=\"\" class=\"btn btn-primary py-3 px-5\">Plus de détails</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img class=\"w-100\" src=\"assets/images/carousel-2.jpg\" alt=\"Image\" />\r\n          <div class=\"carousel-caption\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6\">\r\n                  <h1 class=\"display-3 text-dark mb-4 animated slideInDown\">\r\n                    La meilleure assurance commence ici\r\n                  </h1>\r\n                  <a href=\"\" class=\"btn btn-primary py-3 px-5\">Plus de détails</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#header-carousel\" data-bs-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Précédent</span>\r\n      </button>\r\n      <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#header-carousel\" data-bs-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Suivant</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <!-- Carousel End -->\r\n\r\n\r\n\r\n<app-propos></app-propos>\r\n\r\n\r\n\r\n\r\n  <!-- Features Start -->\r\n  <div class=\"container-xxl py-5\">\r\n    <div class=\"container\">\r\n      <div class=\"row g-5\">\r\n        <div class=\"col-lg-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\r\n          <h1 class=\"display-6 mb-5\" style=\"color: black;\">Quelques raisons pour lesquelles les gens nous choisissent !</h1>\r\n          <p class=\"mb-4\">\r\n          </p>\r\n          <div class=\"row g-3\">\r\n            <div class=\"col-sm-6 wow fadeIn\" data-wow-delay=\"0.1s\">\r\n              <div class=\"bg-light rounded h-100 p-3\">\r\n                <div class=\"bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3\">\r\n                  <img class=\"align-self-center mb-3\" src=\"assets/images/icon/icon-06-primary.png\" alt=\"\" />\r\n                  <h5 class=\"mb-0\">Processus simple</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 wow fadeIn\" data-wow-delay=\"0.2s\">\r\n              <div class=\"bg-light rounded h-100 p-3\">\r\n                <div class=\"bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3\">\r\n                  <img class=\"align-self-center mb-3\" src=\"assets/images/icon/icon-03-primary.png\" alt=\"\" />\r\n                  <h5 class=\"mb-0\">Livraison rapide</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 wow fadeIn\" data-wow-delay=\"0.3s\">\r\n              <div class=\"bg-light rounded h-100 p-3\">\r\n                <div class=\"bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3\">\r\n                  <img class=\"align-self-center mb-3\" src=\"assets/images/icon/icon-04-primary.png\" alt=\"\" />\r\n                  <h5 class=\"mb-0\">Contrôle des politiques</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 wow fadeIn\" data-wow-delay=\"0.4s\">\r\n              <div class=\"bg-light rounded h-100 p-3\">\r\n                <div class=\"bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3\">\r\n                  <img class=\"align-self-center mb-3\" src=\"assets/images/icon/icon-07-primary.png\" alt=\"\" />\r\n                  <h5 class=\"mb-0\">Économies d'argent</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 wow fadeInUp\" data-wow-delay=\"0.5s\">\r\n          <div class=\"position-relative rounded overflow-hidden h-100\" style=\"min-height: 400px\">\r\n            <img class=\"position-absolute w-100 h-100\" src=\"assets/images/feature.jpg\" alt=\"\" style=\"object-fit: cover\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Features End -->\r\n\r\n\r\n  \r\n<app-services></app-services>\r\n\r\n\r\n<app-contac></app-contac>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"vh-100\">\n    <div class=\"container-fluid h-custom\">\n      <div class=\"row d-flex justify-content-center align-items-center h-100\">\n        <div class=\"col-md-9 col-lg-6 col-xl-5\">\n          <img src=\"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp\"\n            class=\"img-fluid\" alt=\"Sample image\">\n        </div>\n        <div class=\"col-md-8 col-lg-6 col-xl-4 offset-xl-1\">\n          <form [formGroup]=\"userForm\">\n  \n            <!-- Email input -->\n            <div class=\"form-outline mb-4\">\n                <label class=\"form-label\" for=\"form3Example3\">Adresse e-mail</label>\n              <input type=\"email\" id=\"form3Example3\" class=\"form-control form-control-lg\" formControlName=\"email\" placeholder=\"E-mail\" />\n\n              <div *ngIf=\"userForm.controls['email'].invalid && (userForm.controls['email'].dirty || userForm.controls['email'].touched)\">\n                <div *ngIf=\"userForm.controls['email'].errors.required\" style=\"color: red;\">\n                Email is required\n                </div>\n                <div *ngIf=\"userForm.controls['email'].errors.email\" style=\"color: red;\">\n                    Veuillez entrer un email valide\n                </div>\n              </div>\n\n            </div>\n  \n            <!-- Password input -->\n            <div class=\"form-outline mb-3\">\n                <label class=\"form-label\" for=\"form3Example4\">Mot de Passe</label>\n              <input type=\"password\" id=\"form3Example4\" class=\"form-control form-control-lg\" formControlName=\"pwd\" placeholder=\"Mot De Passe\" />\n              \n              <div *ngIf=\"userForm.controls['pwd'].invalid && (userForm.controls['pwd'].dirty || userForm.controls['pwd'].touched)\">\n                <div *ngIf=\"userForm.controls['pwd'].errors.required\" style=\"color: red;\">\n                Mot de passe is required\n                </div>\n              </div>\n\n            </div>\n  \n            <div class=\"d-flex justify-content-between align-items-center\">\n              <!-- Checkbox -->\n              <div class=\"form-check mb-0\">\n                <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"form2Example3\" />\n                <label class=\"form-check-label\" for=\"form2Example3\">\n                    Souviens-toi de moi\n                </label>\n              </div>\n              <a href=\"#!\" class=\"text-body\">Mot de passe Oublié?</a>\n            </div>\n\n  \n            <div class=\"text-center text-lg-start mt-4 pt-2\">\n              <div style=\"color: red;font-size: 15px;margin-bottom: 15px;margin-left: -20px;font-family: monospace;\">\n                {{errorMsg}}\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"userForm.invalid\" style=\"padding-left: 2.5rem; padding-right: 2.5rem;\" (click)=\"login()\">Se Connecter</button>\n              <p class=\"small fw-bold mt-2 pt-1 mb-0\">Cliquez sur <a routerLink=\"/signup\" class=\"link-danger\">S'inscrire</a> pour créer votre compte</p>\n            </div>\n  \n          </form>\n\n          \n        </div>\n      </div>\n    </div>\n\n  </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/our-services/services.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/our-services/services.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <!-- Service Start -->\n  <div class=\"container-xxl py-5\">\n    <div class=\"container\">\n      <div class=\"text-center mx-auto\" style=\"max-width: 500px\">\n        <h1 class=\"display-6 mb-5\" style=\"color: black;\">\n          Nous fournissons des services d'assurance professionnels\n        </h1>\n      </div>\n      <div class=\"row g-4 justify-content-center\">\n        <div class=\"col-lg-4 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\n          <div class=\"service-item rounded h-100 p-5\">\n            <div class=\"d-flex align-items-center ms-n5 mb-4\">\n              <div class=\"service-icon flex-shrink-0 bg-primary rounded-end me-4\">\n                <img class=\"img-fluid\" src=\"assets/images/icon/icon-10-light.png\" alt=\"\" />\n              </div>\n              <h4 class=\"mb-0\" style=\"color: black;\">Assurance vie</h4>\n            </div>\n            <p class=\"mb-4\">\n              \n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\n          <div class=\"service-item rounded h-100 p-5\">\n            <div class=\"d-flex align-items-center ms-n5 mb-4\">\n              <div class=\"service-icon flex-shrink-0 bg-primary rounded-end me-4\">\n                <img class=\"img-fluid\" src=\"assets/images/icon/icon-01-light.png\" alt=\"\" />\n              </div>\n              <h4 class=\"mb-0\" style=\"color: black;\">Assurance santé</h4>\n            </div>\n            <p class=\"mb-4\">\n             \n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 wow fadeInUp\" data-wow-delay=\"0.5s\">\n          <div class=\"service-item rounded h-100 p-5\">\n            <div class=\"d-flex align-items-center ms-n5 mb-4\">\n              <div class=\"service-icon flex-shrink-0 bg-primary rounded-end me-4\">\n                <img class=\"img-fluid\" src=\"assets/images/icon/icon-05-light.png\" alt=\"\" />\n              </div>\n              <h4 class=\"mb-0\" style=\"color: black;\">Assurance habitation</h4>\n            </div>\n            <p class=\"mb-4\">\n            \n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\n          <div class=\"service-item rounded h-100 p-5\">\n            <div class=\"d-flex align-items-center ms-n5 mb-4\">\n              <div class=\"service-icon flex-shrink-0 bg-primary rounded-end me-4\">\n                <img class=\"img-fluid\" src=\"assets/images/icon/icon-08-light.png\" alt=\"\" />\n              </div>\n              <h4 class=\"mb-0\" style=\"color: black;\">Assurance des véhicules</h4>\n            </div>\n            <p class=\"mb-4\">\n            \n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\n          <div class=\"service-item rounded h-100 p-5\">\n            <div class=\"d-flex align-items-center ms-n5 mb-4\">\n              <div class=\"service-icon flex-shrink-0 bg-primary rounded-end me-4\">\n                <img class=\"img-fluid\" src=\"assets/images/icon/icon-07-light.png\" alt=\"\" />\n              </div>\n              <h4 class=\"mb-0\" style=\"color: black;\">Assurance des entreprises</h4>\n            </div>\n            <p class=\"mb-4\">\n          \n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 wow fadeInUp\" data-wow-delay=\"0.5s\">\n          <div class=\"service-item rounded h-100 p-5\">\n            <div class=\"d-flex align-items-center ms-n5 mb-4\">\n              <div class=\"service-icon flex-shrink-0 bg-primary rounded-end me-4\">\n                <img class=\"img-fluid\" src=\"assets/images/icon/icon-06-light.png\" alt=\"\" />\n              </div>\n              <h4 class=\"mb-0\" style=\"color: black;\">Assurance des biens</h4>\n            </div>\n            <p class=\"mb-4\">\n          \n            </p>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <!-- Service End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/propos/propos.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/propos/propos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n   <!-- About Start -->\n    <div class=\"container-xxl py-5\">\n        <div class=\"container\">\n          <div class=\"row g-5\">\n            <div class=\"col-lg-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\n              <div class=\"position-relative overflow-hidden rounded ps-5 pt-5 h-100\" style=\"min-height: 400px\">\n                <img class=\"position-absolute w-100 h-100\" src=\"assets/images/about.jpg\" alt=\"\" style=\"object-fit: cover\" />\n                <div class=\"position-absolute top-0 start-0 bg-white rounded pe-3 pb-3\" style=\"width: 200px; height: 200px\">\n                  <div class=\"d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3\">\n                    <h1 class=\"text-white mb-0\">25</h1>\n                    <h2 class=\"text-white\">Années</h2>\n                    <h5 class=\"text-white mb-0\">Expérience</h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 wow fadeInUp\" data-wow-delay=\"0.5s\">\n              <div class=\"h-100\">\n                <h1 class=\"display-6 mb-5\" style=\"color: black;\">\n                  Nous sommes là pour vous aider à explorer la protection\n                </h1>\n                <p class=\"fs-5 text-primary mb-4\">\n  \n                </p>\n                <div class=\"row g-4 mb-4\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"d-flex align-items-center\">\n                      <img class=\"flex-shrink-0 me-3\" src=\"assets/images/icon/icon-04-primary.png\" alt=\"\" />\n                      <h5 class=\"mb-0\" style=\"color: black;\">Plans d'assurance flexibles</h5>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"d-flex align-items-center\">\n                      <img class=\"flex-shrink-0 me-3\" src=\"assets/images/icon/icon-03-primary.png\" alt=\"\" />\n                      <h5 class=\"mb-0\" style=\"color: black;\">Garantie de remboursement</h5>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"mb-4\">\n                </p>\n                <div class=\"border-top mt-4 pt-4\">\n                  <div class=\"d-flex align-items-center\">\n                    <img class=\"flex-shrink-0 rounded-circle me-3\" src=\"assets/images/profile.jpg\" alt=\"\" />\n                    <h5 class=\"mb-0\" style=\"color: black;\">Appeler nous : +216 22 222 222</h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- About End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"vh-100\" style=\"margin-bottom: 62rem;\">\n    <div class=\"container h-100\">\n        <div class=\"row d-flex justify-content-center align-items-center h-100\">\n            <div class=\"col-lg-12 col-xl-11\">\n                <div>\n                    <div class=\"card-body p-md-5\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1\">\n\n\n                                <!-- **************************************************************** -->\n\n\n                                <div class=\"loader text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4\"\n                                    style=\"padding-bottom: 10%;\">\n                                    <span>S'inscrire</span>\n                                    <span>S'inscrire</span>\n                                </div>\n\n\n                                <!-- **************************************************************** -->\n\n\n\n\n\n                                <form class=\"mx-1 mx-md-4\" [formGroup]=\"userForm\">\n\n\n                                    <!-------------------------------Profile Pic--------------------------------------------------------->\n                                    <div style=\"margin-left: 3rem;\">\n                                        <div class=\"form-group text-center\">\n                                            <input type=\"file\" accept=\".png\" style=\"visibility: hidden;\"\n                                                class=\"form-control text-center\" #filePicker\n                                                (change)='onImageSelected($event)'>\n                                        </div>\n                                        <div class=\"d-flex text-center\">\n                                            <div class=\"align-items-center text-center\">\n                                                <img style=\"border-radius:800px;border-style: dotted;width: 200px;height: 200px;\"\n                                                    [src]=\"imagePreview\" alt=\"\">\n                                                <div class=\"form-group text-center\" style=\"margin-left: 20px;margin-top: 10px;\">\n                                                    <button type=\"button\" class=\"buttonp\" (click)=\"filePicker.click()\" value=\"Signup\">\n                                                        <span class=\"buttonp__text\">Photo</span>\n                                                        <span class=\"buttonp__icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke=\"currentColor\" height=\"24\" fill=\"none\" class=\"svg\"><line y2=\"19\" y1=\"5\" x2=\"12\" x1=\"12\"></line><line y2=\"12\" y1=\"12\" x2=\"19\" x1=\"5\"></line></svg></span>\n                                                      </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-------------------------------Profile Pic--------------------------------------------------------->\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-user fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example1c\" style=\"color: black;\">Nom &\n                                                Prénom</label>\n                                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['name'].invalid && (userForm.controls['name'].dirty || userForm.controls['name'].touched)\">\n                                        <div *ngIf=\"userForm.controls['name'].errors.required\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Nom & Prénom est requis\n                                        </div>\n                                        <div *ngIf=\"userForm.controls['name'].errors.minlength\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            S'il vous plaît entrer Nom & Prénom valide\n                                        </div>\n                                    </div>\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-user fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example1c\"\n                                                style=\"color: black;\">CIN</label>\n                                            <input type=\"number\" formControlName=\"cin\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['cin'].invalid && (userForm.controls['cin'].dirty || userForm.controls['cin'].touched)\">\n                                        <div *ngIf=\"userForm.controls['cin'].errors.required\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            CIN est requis\n                                        </div>\n                                        <div *ngIf=\"userForm.controls['cin'].errors.max || userForm.controls['cin'].errors.min\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            S'il vous plaît entrer une CIN valide\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-phone fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example1c\"\n                                                style=\"color: black;\">Téléphone</label>\n                                            <input type=\"number\" formControlName=\"tel\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['tel'].invalid && (userForm.controls['tel'].dirty || userForm.controls['tel'].touched)\">\n                                        <div *ngIf=\"userForm.controls['tel'].errors.required\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Numero Téléphone est requis\n                                        </div>\n                                        <div *ngIf=\"userForm.controls['tel'].errors.max || userForm.controls['tel'].errors.min\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            S'il vous plaît entrer une numero téléphone valide\n                                        </div>\n                                    </div>\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-home fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example1c\"\n                                                style=\"color: black;\">Adresse</label>\n                                            <input type=\"text\" formControlName=\"adresse\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['adresse'].invalid && (userForm.controls['adresse'].dirty || userForm.controls['adresse'].touched)\">\n                                        <div *ngIf=\"userForm.controls['adresse'].errors.required\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Adresse est requis\n                                        </div>\n                                        <div *ngIf=\"userForm.controls['adresse'].errors.minlength\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            S'il vous plaît entrer Adresse valide\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-envelope fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example3c\"\n                                                style=\"color: black;\">Email</label>\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['email'].invalid && (userForm.controls['email'].dirty || userForm.controls['email'].touched)\">\n                                        <div *ngIf=\"userForm.controls['email'].errors.required\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Email est requis\n                                        </div>\n                                        <div *ngIf=\"userForm.controls['email'].errors.email\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Format d'e-mail invalide\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-lock fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example4c\" style=\"color: black;\">Mot de\n                                                Passe</label>\n                                            <input type=\"password\" formControlName=\"pwd\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['pwd'].invalid && (userForm.controls['pwd'].dirty || userForm.controls['pwd'].touched)\">\n                                        <div *ngIf=\"userForm.controls['pwd'].errors.required\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Mot de passe requis\n                                        </div>\n                                        <div *ngIf=\"userForm.controls['pwd'].errors.minlength || userForm.controls['pwd'].errors.pattern\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Le mot de passe doit comporter au moins 8 caractères 1 lettre majuscule 1\n                                            caractères spéciaux\n                                        </div>\n                                    </div>\n\n\n\n                                    <div class=\"d-flex flex-row align-items-center mb-4\">\n                                        <i class=\"fas fa-key fa-lg me-3 fa-fw\"></i>\n                                        <div class=\"form-outline flex-fill mb-0\">\n                                            <label class=\"form-label\" for=\"form3Example4cd\"\n                                                style=\"color: black;\">Repeter votre Mot de Passe</label>\n                                            <input type=\"password\" formControlName=\"confirmPwd\" class=\"form-control\" />\n                                        </div>\n                                    </div>\n                                    <div\n                                        *ngIf=\"userForm.controls['confirmPwd'].invalid && (userForm.controls['confirmPwd'].dirty || userForm.controls['confirmPwd'].touched)\">\n                                        <div *ngIf=\"userForm.controls['confirmPwd'].errors.mustMatch\" class=\"textdanger\"\n                                            style=\"color: red;margin-top: -18px;margin-left: 30px;margin-bottom: 10px;\">\n                                            Confirmer le mot de passe doit correspondre au mot de passe\n                                        </div>\n                                    </div>\n\n                                    <div class=\"align-items-center\" style=\"margin-bottom: 30px;margin-left: 35px;\">\n                                        <input type=\"radio\" style=\"margin-left: 10px;\" formControlName=\"role\"\n                                            value=\"Assuré\"><label for=\"\"\n                                            style=\"color:black;margin-left: 5px; \">Assuré</label>\n                                        <input type=\"radio\" style=\"margin-left: 10px;\" formControlName=\"role\"\n                                            value=\"Assureur\"><label for=\"\"\n                                            style=\"color:black;margin-left: 5px; \">Assureur</label>\n                                    </div>\n\n\n                                    <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"form2Example3c\"\n                                        formControlName=\"regles\">\n                                    <div class=\"form-check d-flex justify-content-center mb-5\">\n\n                                        <label class=\"form-check-label\" for=\"form2Example3\" style=\"color: black;\">\n                                            Toutes les déclarations dans <a routerLink=\"/signup\"\n                                                style=\"color: black;\">Conditions d'utilisation</a>\n                                        </label>\n                                    </div>\n\n                                    <div\n                                        style=\"color: red;font-size: 25px;margin-bottom: 15px;margin-left: 25px;font-family: monospace;\">\n                                        {{errorMsg}}\n                                    </div>\n\n\n\n                                    <div class=\"d-flex justify-content-center mx-4 mb-3 mb-lg-4\">\n                                        <button type=\"submit\" class=\"button_top\" [disabled]=\"userForm.invalid\"\n                                            (click)=\"signup()\">S'inscrire</button>\n                                    </div>\n\n                                </form>\n                                <div>\n                                    <span>*NB : You can't signup before complete all required informations</span>\n                                </div>\n\n\n                            </div>\n                            <div class=\"col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2\">\n\n                                <img src=\"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp\"\n                                    class=\"img-fluid\" alt=\"Sample image\">\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/Services/demande.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/demande.service.ts ***!
  \*********************************************/
/*! exports provided: DemandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeService", function() { return DemandeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DemandeService = class DemandeService {
    constructor(http) {
        this.http = http;
        this.demandeUrl = "http://localhost:3000/demandes";
    }
    addDemande(obj) {
        let formData = new FormData();
        formData.append('type', obj.type);
        formData.append('prestataire', obj.prestataire);
        formData.append('montant', obj.montant);
        formData.append('justif', obj.justif);
        formData.append('idUser', obj.idUser);
        return this.http.post(`${this.demandeUrl}/add-demande`, formData);
    }
    getAllDemandesWithUsers() {
        return this.http.get(`${this.demandeUrl}/getAllDemandesWithUsers`);
    }
    getDemandeByUserId(idUser) {
        return this.http.get(`${this.demandeUrl}/getDemandeByUserId/${idUser}`);
    }
    confirmDemande(idDemande, noth) {
        return this.http.put(`${this.demandeUrl}/confirmDemande/${idDemande}`, noth);
    }
    rejectDemande(idDemande, noth) {
        return this.http.put(`${this.demandeUrl}/rejectDemande/${idDemande}`, noth);
    }
};
DemandeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DemandeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DemandeService);



/***/ }),

/***/ "./src/app/Services/rejects.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/rejects.service.ts ***!
  \*********************************************/
/*! exports provided: RejectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectsService", function() { return RejectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let RejectsService = class RejectsService {
    constructor(http) {
        this.http = http;
        this.rejectsUrl = "http://localhost:3000/rejects";
    }
    addRejection(obj) {
        let formData = new FormData();
        formData.append('cause', obj.cause);
        formData.append('idDemande', obj.idDemande);
        return this.http.post(`${this.rejectsUrl}/add-rejection`, formData);
    }
    getRejectionByDemandeId(idDemande) {
        return this.http.get(`${this.rejectsUrl}/getRejectionByDemandId/${idDemande}`);
    }
};
RejectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RejectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RejectsService);



/***/ }),

/***/ "./src/app/Services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.userUrl = "http://localhost:3000/users";
    }
    login(obj) {
        return this.http.post(`${this.userUrl}/login`, obj);
    }
    signup(obj, img) {
        let formData = new FormData();
        formData.append('name', obj.name);
        formData.append('adresse', obj.adresse);
        formData.append('email', obj.email);
        formData.append('pwd', obj.pwd);
        formData.append('cin', obj.cin);
        formData.append('tel', obj.tel);
        formData.append('role', obj.role);
        if (!img) {
            formData.append('img', "defaultPic.png");
        }
        else {
            formData.append('img', obj.img);
        }
        return this.http.post(`${this.userUrl}/signup`, formData);
    }
    getUserByAnnonceUserId(id) {
        return this.http.get(`${this.userUrl}/getUserByAnnonceUserId/${id}`);
    }
    getUserById(id) {
        return this.http.get(`${this.userUrl}/getUserById/${id}`);
    }
    getAllUsers() {
        return this.http.get(this.userUrl);
    }
    getUserByName(name) {
        return this.http.get(`${this.userUrl}/getUserByName/${name}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_assure_profile_assure_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/assure-profile/assure-profile.component */ "./src/app/components/assure-profile/assure-profile.component.ts");
/* harmony import */ var _components_ajout_modal_ajout_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ajout-modal/ajout-modal.component */ "./src/app/components/ajout-modal/ajout-modal.component.ts");
/* harmony import */ var _components_detail_demande_detail_demande_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detail-demande/detail-demande.component */ "./src/app/components/detail-demande/detail-demande.component.ts");
/* harmony import */ var _components_assureur_profile_assureur_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/assureur-profile/assureur-profile.component */ "./src/app/components/assureur-profile/assureur-profile.component.ts");
/* harmony import */ var _components_our_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/our-services/services.component */ "./src/app/components/our-services/services.component.ts");
/* harmony import */ var _components_propos_propos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/propos/propos.component */ "./src/app/components/propos/propos.component.ts");
/* harmony import */ var _components_contac_contac_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contac/contac.component */ "./src/app/components/contac/contac.component.ts");













const routes = [
    // http://localhost:4200/
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    // http://localhost:4200/login
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // http://localhost:4200/register
    { path: "signup", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    // http://localhost:4200/assure-profile
    { path: "assure-profile", component: _components_assure_profile_assure_profile_component__WEBPACK_IMPORTED_MODULE_6__["AssureProfileComponent"] },
    // http://localhost:4200/assureur-profile
    { path: "assureur-profile", component: _components_assureur_profile_assureur_profile_component__WEBPACK_IMPORTED_MODULE_9__["AssureurProfileComponent"] },
    // http://localhost:4200/ajout-modal
    { path: "ajout-modal", component: _components_ajout_modal_ajout_modal_component__WEBPACK_IMPORTED_MODULE_7__["AjoutModalComponent"] },
    // http://localhost:4200/detail-demande
    { path: "detail-demande/:id", component: _components_detail_demande_detail_demande_component__WEBPACK_IMPORTED_MODULE_8__["DetailDemandeComponent"] },
    // http://localhost:4200/nos-services
    { path: "nos-services", component: _components_our_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    // http://localhost:4200/propos
    { path: "propos", component: _components_propos_propos_component__WEBPACK_IMPORTED_MODULE_11__["ProposComponent"] },
    // http://localhost:4200/contact
    { path: "contacter-nous", component: _components_contac_contac_component__WEBPACK_IMPORTED_MODULE_12__["ContacComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Assurance';
    }
    ngOnInit() {
        // let connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        // console.log("this is the connected user", connectedUser);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_assure_profile_assure_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/assure-profile/assure-profile.component */ "./src/app/components/assure-profile/assure-profile.component.ts");
/* harmony import */ var _components_assureur_profile_assureur_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/assureur-profile/assureur-profile.component */ "./src/app/components/assureur-profile/assureur-profile.component.ts");
/* harmony import */ var _components_ajout_modal_ajout_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ajout-modal/ajout-modal.component */ "./src/app/components/ajout-modal/ajout-modal.component.ts");
/* harmony import */ var _components_detail_demande_detail_demande_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/detail-demande/detail-demande.component */ "./src/app/components/detail-demande/detail-demande.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_error_component_error_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/error-component/error-component.component */ "./src/app/components/error-component/error-component.component.ts");
/* harmony import */ var _components_propos_propos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/propos/propos.component */ "./src/app/components/propos/propos.component.ts");
/* harmony import */ var _components_our_services_services_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/our-services/services.component */ "./src/app/components/our-services/services.component.ts");
/* harmony import */ var _components_contac_contac_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contac/contac.component */ "./src/app/components/contac/contac.component.ts");






















const routes = [
    { path: '**', component: _components_error_component_error_component_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponentComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _components_assure_profile_assure_profile_component__WEBPACK_IMPORTED_MODULE_13__["AssureProfileComponent"],
            _components_assureur_profile_assureur_profile_component__WEBPACK_IMPORTED_MODULE_14__["AssureurProfileComponent"],
            _components_ajout_modal_ajout_modal_component__WEBPACK_IMPORTED_MODULE_15__["AjoutModalComponent"],
            _components_detail_demande_detail_demande_component__WEBPACK_IMPORTED_MODULE_16__["DetailDemandeComponent"],
            _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_17__["BannerComponent"],
            _components_error_component_error_component_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponentComponent"],
            _components_propos_propos_component__WEBPACK_IMPORTED_MODULE_19__["ProposComponent"],
            _components_our_services_services_component__WEBPACK_IMPORTED_MODULE_20__["ServicesComponent"],
            _components_contac_contac_component__WEBPACK_IMPORTED_MODULE_21__["ContacComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/ajout-modal/ajout-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/ajout-modal/ajout-modal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n    font-size: 28px;\r\n    color: royalblue;\r\n    font-weight: 600;\r\n    letter-spacing: -1px;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding-left: 30px;\r\n  }\r\n\r\n  .title::before,.title::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    border-radius: 50%;\r\n    left: 0px;\r\n    background-color: royalblue;\r\n  }\r\n\r\n  .title::before {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: royalblue;\r\n  }\r\n\r\n  .title::after {\r\n    width: 18px;\r\n    height: 18px;\r\n    -webkit-animation: pulse 1s linear infinite;\r\n            animation: pulse 1s linear infinite;\r\n  }\r\n\r\n  .head {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 100%;\r\n    gap: 6px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n  @-webkit-keyframes pulse {\r\n    from {\r\n      -webkit-transform: scale(0.9);\r\n              transform: scale(0.9);\r\n      opacity: 1;\r\n    }\r\n  \r\n    to {\r\n      -webkit-transform: scale(1.8);\r\n              transform: scale(1.8);\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n  @keyframes pulse {\r\n    from {\r\n      -webkit-transform: scale(0.9);\r\n              transform: scale(0.9);\r\n      opacity: 1;\r\n    }\r\n  \r\n    to {\r\n      -webkit-transform: scale(1.8);\r\n              transform: scale(1.8);\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n  .btnenv {\r\n    font-family: inherit;\r\n    font-size: 18px;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#4dc7d9),to(#66a6ff));\r\n    background: linear-gradient(to bottom, #4dc7d9 0%,#66a6ff 100%);\r\n    color: white;\r\n    padding: 0.8em 1.2em;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    border: none;\r\n    border-radius: 25px;\r\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .btnenv:hover {\r\n    -webkit-transform: translateY(-3px);\r\n            transform: translateY(-3px);\r\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n  .btnenv:active {\r\n    -webkit-transform: scale(0.95);\r\n            transform: scale(0.95);\r\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .btnenv span {\r\n    display: block;\r\n    margin-left: 0.4em;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .btnenv svg {\r\n    width: 18px;\r\n    height: 18px;\r\n    fill: white;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .btnenv .svg-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    margin-right: 0.5em;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .btnenv:hover .svg-wrapper {\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n  }\r\n\r\n  .btnenv:hover svg {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n  }\r\n\r\n  .buttonDownload {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding: 10px 25px;\r\n    background-color: #4CC713;\r\n    color: white;\r\n    font-family: sans-serif;\r\n    text-decoration: none;\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    text-indent: 15px;\r\n    border: none;\r\n   }\r\n\r\n  .buttonDownload:hover {\r\n    background-color: #45a21a;\r\n    color: white;\r\n   }\r\n\r\n  .buttonDownload:before, .buttonDownload:after {\r\n    content: ' ';\r\n    display: block;\r\n    position: absolute;\r\n    left: 15px;\r\n    top: 52%;\r\n   }\r\n\r\n  .buttonDownload:before {\r\n    width: 10px;\r\n    height: 2px;\r\n    border-style: solid;\r\n    border-width: 0 2px 2px;\r\n   }\r\n\r\n  .buttonDownload:after {\r\n    width: 0;\r\n    height: 0;\r\n    margin-left: 3px;\r\n    margin-top: -7px;\r\n    border-style: solid;\r\n    border-width: 4px 4px 0 4px;\r\n    border-color: transparent;\r\n    border-top-color: inherit;\r\n    -webkit-animation: downloadArrow 1s linear infinite;\r\n            animation: downloadArrow 1s linear infinite;\r\n    -webkit-animation-play-state: paused;\r\n            animation-play-state: paused;\r\n   }\r\n\r\n  .buttonDownload:hover:before {\r\n    border-color: #cdefbd;\r\n   }\r\n\r\n  .buttonDownload:hover:after {\r\n    border-top-color: #cdefbd;\r\n    -webkit-animation-play-state: running;\r\n            animation-play-state: running;\r\n   }\r\n\r\n  @-webkit-keyframes downloadArrow {\r\n    0% {\r\n     margin-top: -7px;\r\n     opacity: 1;\r\n    }\r\n   \r\n    0.001% {\r\n     margin-top: -15px;\r\n     opacity: 0.4;\r\n    }\r\n   \r\n    50% {\r\n     opacity: 1;\r\n    }\r\n   \r\n    100% {\r\n     margin-top: 0;\r\n     opacity: 0.4;\r\n    }\r\n   }\r\n\r\n  @keyframes downloadArrow {\r\n    0% {\r\n     margin-top: -7px;\r\n     opacity: 1;\r\n    }\r\n   \r\n    0.001% {\r\n     margin-top: -15px;\r\n     opacity: 0.4;\r\n    }\r\n   \r\n    50% {\r\n     opacity: 1;\r\n    }\r\n   \r\n    100% {\r\n     margin-top: 0;\r\n     opacity: 0.4;\r\n    }\r\n   }\r\n\r\n  .download-button {\r\n    position: relative;\r\n    border-width: 0;\r\n    color: white;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n   }\r\n\r\n  .download-button .docs {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    gap: 10px;\r\n    min-height: 40px;\r\n    padding: 0 10px;\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n    background-color: #242a35;\r\n    border: solid 1px #e8e8e82d;\r\n    -webkit-transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n    transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n   }\r\n\r\n  .download-button:hover {\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n   }\r\n\r\n  .download {\r\n    position: absolute;\r\n    inset: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    z-index: -1;\r\n    border-radius: 4px;\r\n    -webkit-transform: translateY(0%);\r\n            transform: translateY(0%);\r\n    background-color: #0135e0;\r\n    border: solid 1px #01e0572d;\r\n    -webkit-transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n    transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n   }\r\n\r\n  .download-button:hover .download {\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%)\r\n   }\r\n\r\n  .download svg polyline,.download svg line {\r\n    -webkit-animation: docs 1s infinite;\r\n            animation: docs 1s infinite;\r\n   }\r\n\r\n  @-webkit-keyframes docs {\r\n    0% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   \r\n    50% {\r\n     -webkit-transform: translateY(-15%);\r\n             transform: translateY(-15%);\r\n    }\r\n   \r\n    100% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   }\r\n\r\n  @keyframes docs {\r\n    0% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   \r\n    50% {\r\n     -webkit-transform: translateY(-15%);\r\n             transform: translateY(-15%);\r\n    }\r\n   \r\n    100% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ham91dC1tb2RhbC9ham91dC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsV0FBVztJQUNYLFFBQVE7SUFDUix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0U7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjs7SUFFQTtNQUNFLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0VBQ0Y7O0VBVkE7SUFDRTtNQUNFLDZCQUFxQjtjQUFyQixxQkFBcUI7TUFDckIsVUFBVTtJQUNaOztJQUVBO01BQ0UsNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQixVQUFVO0lBQ1o7RUFDRjs7RUFLQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0ZBQStEO0lBQS9ELCtEQUErRDtJQUMvRCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyw0QkFBb0I7SUFBcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNEJBQW9CO0lBQXBCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUFvQjtJQUFwQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFJQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0dBQ2I7O0VBRUE7SUFDQyx5QkFBeUI7SUFDekIsWUFBWTtHQUNiOztFQUVBO0lBQ0MsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7R0FDVDs7RUFFQTtJQUNDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtHQUN4Qjs7RUFFQTtJQUNDLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxvQ0FBNEI7WUFBNUIsNEJBQTRCO0dBQzdCOztFQUVBO0lBQ0MscUJBQXFCO0dBQ3RCOztFQUVBO0lBQ0MseUJBQXlCO0lBQ3pCLHFDQUE2QjtZQUE3Qiw2QkFBNkI7R0FDOUI7O0VBRUE7SUFDQztLQUNDLGdCQUFnQjtLQUNoQixVQUFVO0lBQ1g7O0lBRUE7S0FDQyxpQkFBaUI7S0FDakIsWUFBWTtJQUNiOztJQUVBO0tBQ0MsVUFBVTtJQUNYOztJQUVBO0tBQ0MsYUFBYTtLQUNiLFlBQVk7SUFDYjtHQUNEOztFQW5CQTtJQUNDO0tBQ0MsZ0JBQWdCO0tBQ2hCLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGlCQUFpQjtLQUNqQixZQUFZO0lBQ2I7O0lBRUE7S0FDQyxVQUFVO0lBQ1g7O0lBRUE7S0FDQyxhQUFhO0tBQ2IsWUFBWTtJQUNiO0dBQ0Q7O0VBSUE7SUFDQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0dBQ1g7O0VBRUE7SUFDQyxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDJEQUFtRDtJQUFuRCxtREFBbUQ7R0FDcEQ7O0VBRUE7SUFDQyx1TEFBdUw7R0FDeEw7O0VBRUE7SUFDQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDJEQUFtRDtJQUFuRCxtREFBbUQ7R0FDcEQ7O0VBRUE7SUFDQyxtQ0FBMEI7WUFBMUI7R0FDRDs7RUFFQTtJQUNDLG1DQUEyQjtZQUEzQiwyQkFBMkI7R0FDNUI7O0VBRUE7SUFDQztLQUNDLGlDQUF5QjthQUF6Qix5QkFBeUI7SUFDMUI7O0lBRUE7S0FDQyxtQ0FBMkI7YUFBM0IsMkJBQTJCO0lBQzVCOztJQUVBO0tBQ0MsaUNBQXlCO2FBQXpCLHlCQUF5QjtJQUMxQjtHQUNEOztFQVpBO0lBQ0M7S0FDQyxpQ0FBeUI7YUFBekIseUJBQXlCO0lBQzFCOztJQUVBO0tBQ0MsbUNBQTJCO2FBQTNCLDJCQUEyQjtJQUM1Qjs7SUFFQTtLQUNDLGlDQUF5QjthQUF6Qix5QkFBeUI7SUFDMUI7R0FDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWpvdXQtbW9kYWwvYWpvdXQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogcm95YWxibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGU6OmJlZm9yZSwudGl0bGU6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZTo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5oZWFkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogNnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC5idG5lbnYge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGRjN2Q5IDAlLCM2NmE2ZmYgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuYnRuZW52OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5lbnY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5lbnYgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjRlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuYnRuZW52IHN2ZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5lbnYgLnN2Zy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bmVudjpob3ZlciAuc3ZnLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuICBcclxuICAuYnRuZW52OmhvdmVyIHN2ZyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICAuYnV0dG9uRG93bmxvYWQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQzcxMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtaW5kZW50OiAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnV0dG9uRG93bmxvYWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTIxYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG4gICBcclxuICAgLmJ1dHRvbkRvd25sb2FkOmJlZm9yZSwgLmJ1dHRvbkRvd25sb2FkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHRvcDogNTIlO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnV0dG9uRG93bmxvYWQ6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5idXR0b25Eb3dubG9hZDphZnRlciB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYW5pbWF0aW9uOiBkb3dubG9hZEFycm93IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5idXR0b25Eb3dubG9hZDpob3ZlcjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2RlZmJkO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnV0dG9uRG93bmxvYWQ6aG92ZXI6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2NkZWZiZDtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICB9XHJcbiAgIFxyXG4gICBAa2V5ZnJhbWVzIGRvd25sb2FkQXJyb3cge1xyXG4gICAgMCUge1xyXG4gICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgXHJcbiAgICAwLjAwMSUge1xyXG4gICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgXHJcbiAgICA1MCUge1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcblxyXG5cclxuICAgLmRvd25sb2FkLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgfVxyXG4gICBcclxuICAgLmRvd25sb2FkLWJ1dHRvbiAuZG9jcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmEzNTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNlOGU4ZTgyZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcclxuICAgfVxyXG4gICBcclxuICAgLmRvd25sb2FkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5kb3dubG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzVlMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMwMWUwNTcyZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcclxuICAgfVxyXG4gICBcclxuICAgLmRvd25sb2FkLWJ1dHRvbjpob3ZlciAuZG93bmxvYWQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpXHJcbiAgIH1cclxuICAgXHJcbiAgIC5kb3dubG9hZCBzdmcgcG9seWxpbmUsLmRvd25sb2FkIHN2ZyBsaW5lIHtcclxuICAgIGFuaW1hdGlvbjogZG9jcyAxcyBpbmZpbml0ZTtcclxuICAgfVxyXG4gICBcclxuICAgQGtleWZyYW1lcyBkb2NzIHtcclxuICAgIDAlIHtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIDUwJSB7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIDEwMCUge1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/ajout-modal/ajout-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ajout-modal/ajout-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: AjoutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutModalComponent", function() { return AjoutModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_demande_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/demande.service */ "./src/app/Services/demande.service.ts");





let AjoutModalComponent = class AjoutModalComponent {
    constructor(formBuilder, router, activatedRoute, demandeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.demandeService = demandeService;
    }
    ngOnInit() {
        this.path = this.router.url;
        console.log("Here path from compo ", this.path);
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        this.demandeForm = this.formBuilder.group({
            type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            prestataire: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            montant: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            justif: [""],
        });
    }
    ajoutDemande() {
        var idUser = this.connectedUser._id;
        this.demandeForm.value.idUser = idUser;
        this.demandeService.addDemande(this.demandeForm.value).subscribe((response) => {
            console.log("here response after add annonce", response);
            if (response.message == "demande saved with success") {
                this.router.navigate(['assure-profile']);
            }
            else {
                this.errorMsg = "Something went wrong with your annonce try again later";
            }
        });
    }
};
AjoutModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_Services_demande_service__WEBPACK_IMPORTED_MODULE_4__["DemandeService"] }
];
AjoutModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajout-modal',
        template: __webpack_require__(/*! raw-loader!./ajout-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ajout-modal/ajout-modal.component.html"),
        styles: [__webpack_require__(/*! ./ajout-modal.component.css */ "./src/app/components/ajout-modal/ajout-modal.component.css")]
    })
], AjoutModalComponent);



/***/ }),

/***/ "./src/app/components/assure-profile/assure-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/assure-profile/assure-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonx {\r\n    position: relative;\r\n    border: none;\r\n    background: transparent;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    outline-offset: 4px;\r\n    -webkit-transition: -webkit-filter 250ms;\r\n    transition: -webkit-filter 250ms;\r\n    transition: filter 250ms;\r\n    transition: filter 250ms, -webkit-filter 250ms;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    touch-action: manipulation;\r\n   }\r\n   \r\n   .shadow {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 12px;\r\n    background: hsl(0deg 0% 0% / 0.25);\r\n    will-change: transform;\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n    -webkit-transition: -webkit-transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n    transition: -webkit-transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n    transition: transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n    transition: transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1), -webkit-transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n   }\r\n   \r\n   .edge {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 12px;\r\n    background: -webkit-gradient(\r\n       linear,\r\n       right top, left top,\r\n       from(hsl(340deg 100% 16%)),\r\n       color-stop(8%, hsl(340deg 100% 32%)),\r\n       color-stop(92%, hsl(340deg 100% 32%)),\r\n       to(hsl(340deg 100% 16%))\r\n     );\r\n    background: linear-gradient(\r\n       to left,\r\n       hsl(340deg 100% 16%) 0%,\r\n       hsl(340deg 100% 32%) 8%,\r\n       hsl(340deg 100% 32%) 92%,\r\n       hsl(340deg 100% 16%) 100%\r\n     );\r\n   }\r\n   \r\n   .front {\r\n    display: block;\r\n    position: relative;\r\n    padding: 12px 27px;\r\n    border-radius: 12px;\r\n    font-size: 1.1rem;\r\n    color: white;\r\n    background: hsl(345deg 100% 47%);\r\n    will-change: transform;\r\n    -webkit-transform: translateY(-4px);\r\n            transform: translateY(-4px);\r\n    -webkit-transition: -webkit-transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n    transition: -webkit-transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n    transition: transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n    transition: transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1), -webkit-transform\r\n       600ms\r\n       cubic-bezier(.3, .7, .4, 1);\r\n   }\r\n   \r\n   .buttonx:hover {\r\n    -webkit-filter: brightness(110%);\r\n            filter: brightness(110%);\r\n   }\r\n   \r\n   .buttonx:hover .front {\r\n    -webkit-transform: translateY(-6px);\r\n            transform: translateY(-6px);\r\n    -webkit-transition: -webkit-transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n    transition: -webkit-transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n    transition: transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n    transition: transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5), -webkit-transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n   }\r\n   \r\n   .buttonx:active .front {\r\n    -webkit-transform: translateY(-2px);\r\n            transform: translateY(-2px);\r\n    -webkit-transition: -webkit-transform 34ms;\r\n    transition: -webkit-transform 34ms;\r\n    transition: transform 34ms;\r\n    transition: transform 34ms, -webkit-transform 34ms;\r\n   }\r\n   \r\n   .buttonx:hover .shadow {\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n    -webkit-transition: -webkit-transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n    transition: -webkit-transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n    transition: transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n    transition: transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5), -webkit-transform\r\n       250ms\r\n       cubic-bezier(.3, .7, .4, 1.5);\r\n   }\r\n   \r\n   .buttonx:active .shadow {\r\n    -webkit-transform: translateY(1px);\r\n            transform: translateY(1px);\r\n    -webkit-transition: -webkit-transform 34ms;\r\n    transition: -webkit-transform 34ms;\r\n    transition: transform 34ms;\r\n    transition: transform 34ms, -webkit-transform 34ms;\r\n   }\r\n   \r\n   .buttonx:focus:not(:focus-visible) {\r\n    outline: none;\r\n   }\r\n   \r\n   .buttonajt {\r\n    border: 2px solid #24b4fb;\r\n    background-color: #24b4fb;\r\n    border-radius: 0.9em;\r\n    padding: 0.8em 1.2em 0.8em 1em;\r\n    -webkit-transition: all ease-in-out 0.2s;\r\n    transition: all ease-in-out 0.2s;\r\n    font-size: 16px;\r\n   }\r\n   \r\n   .buttonajt span {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #fff;\r\n    font-weight: 600;\r\n   }\r\n   \r\n   .buttonajt:hover {\r\n    background-color: #0071e2;\r\n   }\r\n   \r\n   .dots-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n   \r\n   .dot {\r\n    height: 20px;\r\n    width: 20px;\r\n    margin-right: 10px;\r\n    border-radius: 10px;\r\n    background-color: #b3d4fc;\r\n    -webkit-animation: pulse 1.5s infinite ease-in-out;\r\n            animation: pulse 1.5s infinite ease-in-out;\r\n  }\r\n   \r\n   .dot:last-child {\r\n    margin-right: 0;\r\n  }\r\n   \r\n   .dot:nth-child(1) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n   \r\n   .dot:nth-child(2) {\r\n    -webkit-animation-delay: -0.1s;\r\n            animation-delay: -0.1s;\r\n  }\r\n   \r\n   .dot:nth-child(3) {\r\n    -webkit-animation-delay: 0.1s;\r\n            animation-delay: 0.1s;\r\n  }\r\n   \r\n   @-webkit-keyframes pulse {\r\n    0% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      background-color: #b3d4fc;\r\n      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-transform: scale(1.2);\r\n              transform: scale(1.2);\r\n      background-color: #6793fb;\r\n      box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);\r\n    }\r\n  \r\n    100% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      background-color: #b3d4fc;\r\n      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);\r\n    }\r\n  }\r\n   \r\n   @keyframes pulse {\r\n    0% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      background-color: #b3d4fc;\r\n      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-transform: scale(1.2);\r\n              transform: scale(1.2);\r\n      background-color: #6793fb;\r\n      box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);\r\n    }\r\n  \r\n    100% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      background-color: #b3d4fc;\r\n      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);\r\n    }\r\n  }\r\n   \r\n   .download-button {\r\n    position: relative;\r\n    border-width: 0;\r\n    color: white;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n   }\r\n   \r\n   .download-button .docs {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    gap: 10px;\r\n    min-height: 40px;\r\n    padding: 0 10px;\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n    background-color: #242a35;\r\n    border: solid 1px #e8e8e82d;\r\n    -webkit-transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n    transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n   }\r\n   \r\n   .download-button:hover {\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n   }\r\n   \r\n   .download {\r\n    position: absolute;\r\n    inset: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    z-index: -1;\r\n    border-radius: 4px;\r\n    -webkit-transform: translateY(0%);\r\n            transform: translateY(0%);\r\n    background-color: #01e056;\r\n    border: solid 1px #01e0572d;\r\n    -webkit-transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n    transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);\r\n   }\r\n   \r\n   .download-button:hover .download {\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%)\r\n   }\r\n   \r\n   .download svg polyline,.download svg line {\r\n    -webkit-animation: docs 1s infinite;\r\n            animation: docs 1s infinite;\r\n   }\r\n   \r\n   @-webkit-keyframes docs {\r\n    0% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   \r\n    50% {\r\n     -webkit-transform: translateY(-15%);\r\n             transform: translateY(-15%);\r\n    }\r\n   \r\n    100% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   }\r\n   \r\n   @keyframes docs {\r\n    0% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   \r\n    50% {\r\n     -webkit-transform: translateY(-15%);\r\n             transform: translateY(-15%);\r\n    }\r\n   \r\n    100% {\r\n     -webkit-transform: translateY(0%);\r\n             transform: translateY(0%);\r\n    }\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3N1cmUtcHJvZmlsZS9hc3N1cmUtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsd0NBQXdCO0lBQXhCLGdDQUF3QjtJQUF4Qix3QkFBd0I7SUFBeEIsOENBQXdCO0lBQ3hCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQiwwQkFBMEI7R0FDM0I7O0dBRUE7SUFDQyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUI7O2tDQUU4QjtJQUY5Qjs7a0NBRThCO0lBRjlCOztrQ0FFOEI7SUFGOUI7Ozs7a0NBRThCO0dBQy9COztHQUVBO0lBQ0Msa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkI7Ozs7Ozs7TUFNRTtJQU5GOzs7Ozs7TUFNRTtHQUNIOztHQUVBO0lBQ0MsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCOztrQ0FFOEI7SUFGOUI7O2tDQUU4QjtJQUY5Qjs7a0NBRThCO0lBRjlCOzs7O2tDQUU4QjtHQUMvQjs7R0FFQTtJQUNDLGdDQUF3QjtZQUF4Qix3QkFBd0I7R0FDekI7O0dBRUE7SUFDQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCOztvQ0FFZ0M7SUFGaEM7O29DQUVnQztJQUZoQzs7b0NBRWdDO0lBRmhDOzs7O29DQUVnQztHQUNqQzs7R0FFQTtJQUNDLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0dBQzNCOztHQUVBO0lBQ0Msa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQjs7b0NBRWdDO0lBRmhDOztvQ0FFZ0M7SUFGaEM7O29DQUVnQztJQUZoQzs7OztvQ0FFZ0M7R0FDakM7O0dBRUE7SUFDQyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDBDQUEwQjtJQUExQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtHQUMzQjs7R0FFQTtJQUNDLGFBQWE7R0FDZDs7R0FHQTtJQUNDLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5Qix3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0lBQ2hDLGVBQWU7R0FDaEI7O0dBRUE7SUFDQyxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtHQUNqQjs7R0FFQTtJQUNDLHlCQUF5QjtHQUMxQjs7R0FLQTtJQUNDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztFQUNiOztHQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrREFBMEM7WUFBMUMsMENBQTBDO0VBQzVDOztHQUVBO0lBQ0UsZUFBZTtFQUNqQjs7R0FFQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0dBRUE7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCOztHQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7R0FFQTtJQUNFO01BQ0UsNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQix5QkFBeUI7TUFDekIsNENBQTRDO0lBQzlDOztJQUVBO01BQ0UsNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQix5QkFBeUI7TUFDekIsNkNBQTZDO0lBQy9DOztJQUVBO01BQ0UsNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQix5QkFBeUI7TUFDekIsNENBQTRDO0lBQzlDO0VBQ0Y7O0dBbEJBO0lBQ0U7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6Qiw0Q0FBNEM7SUFDOUM7O0lBRUE7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6Qiw2Q0FBNkM7SUFDL0M7O0lBRUE7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6Qiw0Q0FBNEM7SUFDOUM7RUFDRjs7R0FLQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7R0FDWDs7R0FFQTtJQUNDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkRBQW1EO0lBQW5ELG1EQUFtRDtHQUNwRDs7R0FFQTtJQUNDLHVMQUF1TDtHQUN4TDs7R0FFQTtJQUNDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkRBQW1EO0lBQW5ELG1EQUFtRDtHQUNwRDs7R0FFQTtJQUNDLG1DQUEwQjtZQUExQjtHQUNEOztHQUVBO0lBQ0MsbUNBQTJCO1lBQTNCLDJCQUEyQjtHQUM1Qjs7R0FFQTtJQUNDO0tBQ0MsaUNBQXlCO2FBQXpCLHlCQUF5QjtJQUMxQjs7SUFFQTtLQUNDLG1DQUEyQjthQUEzQiwyQkFBMkI7SUFDNUI7O0lBRUE7S0FDQyxpQ0FBeUI7YUFBekIseUJBQXlCO0lBQzFCO0dBQ0Q7O0dBWkE7SUFDQztLQUNDLGlDQUF5QjthQUF6Qix5QkFBeUI7SUFDMUI7O0lBRUE7S0FDQyxtQ0FBMkI7YUFBM0IsMkJBQTJCO0lBQzVCOztJQUVBO0tBQ0MsaUNBQXlCO2FBQXpCLHlCQUF5QjtJQUMxQjtHQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3N1cmUtcHJvZmlsZS9hc3N1cmUtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbngge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAyNTBtcztcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgIH1cclxuICAgXHJcbiAgIC5zaGFkb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IGhzbCgwZGVnIDAlIDAlIC8gMC4yNSk7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm1cclxuICAgICAgIDYwMG1zXHJcbiAgICAgICBjdWJpYy1iZXppZXIoLjMsIC43LCAuNCwgMSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgaHNsKDM0MGRlZyAxMDAlIDE2JSkgMCUsXHJcbiAgICAgICBoc2woMzQwZGVnIDEwMCUgMzIlKSA4JSxcclxuICAgICAgIGhzbCgzNDBkZWcgMTAwJSAzMiUpIDkyJSxcclxuICAgICAgIGhzbCgzNDBkZWcgMTAwJSAxNiUpIDEwMCVcclxuICAgICApO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZnJvbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMzQ1ZGVnIDEwMCUgNDclKTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm1cclxuICAgICAgIDYwMG1zXHJcbiAgICAgICBjdWJpYy1iZXppZXIoLjMsIC43LCAuNCwgMSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5idXR0b254OmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcclxuICAgfVxyXG4gICBcclxuICAgLmJ1dHRvbng6aG92ZXIgLmZyb250IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybVxyXG4gICAgICAgMjUwbXNcclxuICAgICAgIGN1YmljLWJlemllciguMywgLjcsIC40LCAxLjUpO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnV0dG9ueDphY3RpdmUgLmZyb250IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNG1zO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnV0dG9ueDpob3ZlciAuc2hhZG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtXHJcbiAgICAgICAyNTBtc1xyXG4gICAgICAgY3ViaWMtYmV6aWVyKC4zLCAuNywgLjQsIDEuNSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5idXR0b254OmFjdGl2ZSAuc2hhZG93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDM0bXM7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5idXR0b254OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC5idXR0b25hanQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI0YjRmYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNGI0ZmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjllbTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDEuMmVtIDAuOGVtIDFlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnV0dG9uYWp0IHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgfVxyXG4gICBcclxuICAgLmJ1dHRvbmFqdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MWUyO1xyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAuZG90cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZG90IHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3Q6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3Q6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3Q6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3Q6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDRmYztcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE3OCwgMjEyLCAyNTIsIDAuNyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzkzZmI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgxNzgsIDIxMiwgMjUyLCAwKTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgxNzgsIDIxMiwgMjUyLCAwLjcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLmRvd25sb2FkLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgfVxyXG4gICBcclxuICAgLmRvd25sb2FkLWJ1dHRvbiAuZG9jcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmEzNTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNlOGU4ZTgyZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcclxuICAgfVxyXG4gICBcclxuICAgLmRvd25sb2FkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5kb3dubG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxZTA1NjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMwMWUwNTcyZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcclxuICAgfVxyXG4gICBcclxuICAgLmRvd25sb2FkLWJ1dHRvbjpob3ZlciAuZG93bmxvYWQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpXHJcbiAgIH1cclxuICAgXHJcbiAgIC5kb3dubG9hZCBzdmcgcG9seWxpbmUsLmRvd25sb2FkIHN2ZyBsaW5lIHtcclxuICAgIGFuaW1hdGlvbjogZG9jcyAxcyBpbmZpbml0ZTtcclxuICAgfVxyXG4gICBcclxuICAgQGtleWZyYW1lcyBkb2NzIHtcclxuICAgIDAlIHtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIDUwJSB7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIDEwMCUge1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/assure-profile/assure-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/assure-profile/assure-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: AssureProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssureProfileComponent", function() { return AssureProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_demande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/demande.service */ "./src/app/Services/demande.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AssureProfileComponent = class AssureProfileComponent {
    constructor(formBuilder, demandeService, router) {
        this.formBuilder = formBuilder;
        this.demandeService = demandeService;
        this.router = router;
        this.isLoading = true; // Added variable for loading status
    }
    ngOnInit() {
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        this.demandeService.getDemandeByUserId(this.connectedUser._id).subscribe((response) => {
            this.demandesTab = response.demandes;
            localStorage.setItem('demandes', JSON.stringify(this.demandesTab));
        });
        this.userForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
        }, {});
    }
    loading() {
        setTimeout(() => {
            this.isLoading = false; // Set isLoading to false after 5 seconds
            this.userDemandes = JSON.parse(localStorage.getItem('demandes'));
        }, 6000); // 5 seconds delay
    }
    reloading() {
        this.isLoading = true;
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        console.log("here file", file);
        this.userForm.patchValue({ img: file });
        this.userForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    facturation(m) {
        console.log('Facture button clicked!', m);
        let facturationValue;
        if (m.type === 'Médicaments') {
            facturationValue = m.montant * 0.6;
        }
        else if (m.type === 'Consultation') {
            facturationValue = m.montant * 0.7;
        }
        else {
            // Handle other types or show an error message
            return;
        }
        // Create a new jsPDF instance
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["jsPDF"]();
        // Set the font style for the title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        // Calculate the position for the centered title
        const titleWidth = doc.getStringUnitWidth('Facture') * 18 / doc.internal.scaleFactor;
        const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
        const titleY = 20;
        // Add the centered title
        doc.text('Facture', titleX, titleY);
        // Set the font style for the table
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        // Define the table headers
        const headers = ['Prestataire', 'Type', 'Montant', 'Justif'];
        // Define the table data
        const data = [
            [m.prestataire, m.type, m.montant.toString(), m.justif],
        ];
        // Calculate the table column widths and row height
        const columnWidths = [50, 40, 40, 60];
        const rowHeight = 10;
        // Calculate the table position
        const startX = (doc.internal.pageSize.getWidth() - columnWidths.reduce((a, b) => a + b, 0)) / 2;
        const startY = titleY + 20;
        // Add the table headers
        let currentX = startX;
        let currentY = startY;
        headers.forEach((header, index) => {
            doc.rect(currentX, currentY, columnWidths[index], rowHeight, 'S'); // Draw table cell border
            doc.text(header, currentX + columnWidths[index] / 2, currentY + rowHeight / 2, { align: 'center', baseline: 'middle' });
            currentX += columnWidths[index];
        });
        // Add the table data
        currentY += rowHeight;
        data.forEach((row) => {
            currentX = startX;
            row.forEach((cell, index) => {
                doc.rect(currentX, currentY, columnWidths[index], rowHeight, 'S'); // Draw table cell border
                if (index === 3) {
                    // Align justif text to the left
                    doc.text(cell, currentX + 2, currentY + rowHeight / 2, { baseline: 'middle' });
                }
                else {
                    // Align other data to the center
                    doc.text(cell, currentX + columnWidths[index] / 2, currentY + rowHeight / 2, { align: 'center', baseline: 'middle' });
                }
                currentX += columnWidths[index];
            });
            currentY += rowHeight;
        });
        // Add the facturationValue in the bottom right corner
        const facturationText = `Facturation: ${facturationValue}`;
        const facturationTextWidth = doc.getStringUnitWidth(facturationText) * 12 / doc.internal.scaleFactor;
        const facturationTextX = doc.internal.pageSize.getWidth() - facturationTextWidth - 10;
        const facturationTextY = currentY + 20;
        doc.text(facturationText, facturationTextX, facturationTextY, { align: 'right' });
        // Save the PDF file
        doc.save('facturation.pdf');
    }
};
AssureProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_Services_demande_service__WEBPACK_IMPORTED_MODULE_3__["DemandeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AssureProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assure-profile',
        template: __webpack_require__(/*! raw-loader!./assure-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assure-profile/assure-profile.component.html"),
        styles: [__webpack_require__(/*! ./assure-profile.component.css */ "./src/app/components/assure-profile/assure-profile.component.css")]
    })
], AssureProfileComponent);



/***/ }),

/***/ "./src/app/components/assureur-profile/assureur-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/assureur-profile/assureur-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n#wifi-loader {\r\n    --background: #62abff;\r\n    --front-color: #4f29f0;\r\n    --back-color: #c3c8de;\r\n    --text-color: #414856;\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 50px;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n\r\n#wifi-loader svg {\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n\r\n#wifi-loader svg circle {\r\n    position: absolute;\r\n    fill: none;\r\n    stroke-width: 6px;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    -webkit-transform: rotate(-100deg);\r\n            transform: rotate(-100deg);\r\n    -webkit-transform-origin: center;\r\n            transform-origin: center;\r\n  }\r\n\r\n\r\n#wifi-loader svg circle.back {\r\n    stroke: var(--back-color);\r\n  }\r\n\r\n\r\n#wifi-loader svg circle.front {\r\n    stroke: var(--front-color);\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-outer {\r\n    height: 86px;\r\n    width: 86px;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-outer circle {\r\n    stroke-dasharray: 62.75 188.25;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-outer circle.back {\r\n    -webkit-animation: circle-outer135 1.8s ease infinite 0.3s;\r\n            animation: circle-outer135 1.8s ease infinite 0.3s;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-outer circle.front {\r\n    -webkit-animation: circle-outer135 1.8s ease infinite 0.15s;\r\n            animation: circle-outer135 1.8s ease infinite 0.15s;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-middle {\r\n    height: 60px;\r\n    width: 60px;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-middle circle {\r\n    stroke-dasharray: 42.5 127.5;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-middle circle.back {\r\n    -webkit-animation: circle-middle6123 1.8s ease infinite 0.25s;\r\n            animation: circle-middle6123 1.8s ease infinite 0.25s;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-middle circle.front {\r\n    -webkit-animation: circle-middle6123 1.8s ease infinite 0.1s;\r\n            animation: circle-middle6123 1.8s ease infinite 0.1s;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-inner {\r\n    height: 34px;\r\n    width: 34px;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-inner circle {\r\n    stroke-dasharray: 22 66;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-inner circle.back {\r\n    -webkit-animation: circle-inner162 1.8s ease infinite 0.2s;\r\n            animation: circle-inner162 1.8s ease infinite 0.2s;\r\n  }\r\n\r\n\r\n#wifi-loader svg.circle-inner circle.front {\r\n    -webkit-animation: circle-inner162 1.8s ease infinite 0.05s;\r\n            animation: circle-inner162 1.8s ease infinite 0.05s;\r\n  }\r\n\r\n\r\n#wifi-loader .text {\r\n    position: absolute;\r\n    bottom: -40px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-transform: lowercase;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 0.2px;\r\n  }\r\n\r\n\r\n#wifi-loader .text::before, #wifi-loader .text::after {\r\n    content: attr(data-text);\r\n  }\r\n\r\n\r\n#wifi-loader .text::before {\r\n    color: var(--text-color);\r\n  }\r\n\r\n\r\n#wifi-loader .text::after {\r\n    color: var(--front-color);\r\n    -webkit-animation: text-animation76 3.6s ease infinite;\r\n            animation: text-animation76 3.6s ease infinite;\r\n    position: absolute;\r\n    left: 0;\r\n  }\r\n\r\n\r\n@-webkit-keyframes circle-outer135 {\r\n    0% {\r\n      stroke-dashoffset: 25;\r\n    }\r\n  \r\n    25% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  \r\n    65% {\r\n      stroke-dashoffset: 301;\r\n    }\r\n  \r\n    80% {\r\n      stroke-dashoffset: 276;\r\n    }\r\n  \r\n    100% {\r\n      stroke-dashoffset: 276;\r\n    }\r\n  }\r\n\r\n\r\n@keyframes circle-outer135 {\r\n    0% {\r\n      stroke-dashoffset: 25;\r\n    }\r\n  \r\n    25% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  \r\n    65% {\r\n      stroke-dashoffset: 301;\r\n    }\r\n  \r\n    80% {\r\n      stroke-dashoffset: 276;\r\n    }\r\n  \r\n    100% {\r\n      stroke-dashoffset: 276;\r\n    }\r\n  }\r\n\r\n\r\n@-webkit-keyframes circle-middle6123 {\r\n    0% {\r\n      stroke-dashoffset: 17;\r\n    }\r\n  \r\n    25% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  \r\n    65% {\r\n      stroke-dashoffset: 204;\r\n    }\r\n  \r\n    80% {\r\n      stroke-dashoffset: 187;\r\n    }\r\n  \r\n    100% {\r\n      stroke-dashoffset: 187;\r\n    }\r\n  }\r\n\r\n\r\n@keyframes circle-middle6123 {\r\n    0% {\r\n      stroke-dashoffset: 17;\r\n    }\r\n  \r\n    25% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  \r\n    65% {\r\n      stroke-dashoffset: 204;\r\n    }\r\n  \r\n    80% {\r\n      stroke-dashoffset: 187;\r\n    }\r\n  \r\n    100% {\r\n      stroke-dashoffset: 187;\r\n    }\r\n  }\r\n\r\n\r\n@-webkit-keyframes circle-inner162 {\r\n    0% {\r\n      stroke-dashoffset: 9;\r\n    }\r\n  \r\n    25% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  \r\n    65% {\r\n      stroke-dashoffset: 106;\r\n    }\r\n  \r\n    80% {\r\n      stroke-dashoffset: 97;\r\n    }\r\n  \r\n    100% {\r\n      stroke-dashoffset: 97;\r\n    }\r\n  }\r\n\r\n\r\n@keyframes circle-inner162 {\r\n    0% {\r\n      stroke-dashoffset: 9;\r\n    }\r\n  \r\n    25% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  \r\n    65% {\r\n      stroke-dashoffset: 106;\r\n    }\r\n  \r\n    80% {\r\n      stroke-dashoffset: 97;\r\n    }\r\n  \r\n    100% {\r\n      stroke-dashoffset: 97;\r\n    }\r\n  }\r\n\r\n\r\n@-webkit-keyframes text-animation76 {\r\n    0% {\r\n      -webkit-clip-path: inset(0 100% 0 0);\r\n              clip-path: inset(0 100% 0 0);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-clip-path: inset(0);\r\n              clip-path: inset(0);\r\n    }\r\n  \r\n    100% {\r\n      -webkit-clip-path: inset(0 0 0 100%);\r\n              clip-path: inset(0 0 0 100%);\r\n    }\r\n  }\r\n\r\n\r\n@keyframes text-animation76 {\r\n    0% {\r\n      -webkit-clip-path: inset(0 100% 0 0);\r\n              clip-path: inset(0 100% 0 0);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-clip-path: inset(0);\r\n              clip-path: inset(0);\r\n    }\r\n  \r\n    100% {\r\n      -webkit-clip-path: inset(0 0 0 100%);\r\n              clip-path: inset(0 0 0 100%);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3N1cmV1ci1wcm9maWxlL2Fzc3VyZXVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOzs7QUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7OztBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOzs7QUFFQTtJQUNFLDBEQUFrRDtZQUFsRCxrREFBa0Q7RUFDcEQ7OztBQUVBO0lBQ0UsMkRBQW1EO1lBQW5ELG1EQUFtRDtFQUNyRDs7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOzs7QUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7O0FBRUE7SUFDRSw2REFBcUQ7WUFBckQscURBQXFEO0VBQ3ZEOzs7QUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7RUFDdEQ7OztBQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7OztBQUVBO0lBQ0UsMERBQWtEO1lBQWxELGtEQUFrRDtFQUNwRDs7O0FBRUE7SUFDRSwyREFBbUQ7WUFBbkQsbURBQW1EO0VBQ3JEOzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7O0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7OztBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOzs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixzREFBOEM7WUFBOUMsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixPQUFPO0VBQ1Q7OztBQUVBO0lBQ0U7TUFDRSxxQkFBcUI7SUFDdkI7O0lBRUE7TUFDRSxvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7RUFDRjs7O0FBcEJBO0lBQ0U7TUFDRSxxQkFBcUI7SUFDdkI7O0lBRUE7TUFDRSxvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7RUFDRjs7O0FBRUE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4QjtFQUNGOzs7QUFwQkE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4QjtFQUNGOzs7QUFFQTtJQUNFO01BQ0Usb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0Usb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0Usc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCO0VBQ0Y7OztBQXBCQTtJQUNFO01BQ0Usb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0Usb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0Usc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCO0VBQ0Y7OztBQUVBO0lBQ0U7TUFDRSxvQ0FBNEI7Y0FBNUIsNEJBQTRCO0lBQzlCOztJQUVBO01BQ0UsMkJBQW1CO2NBQW5CLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLG9DQUE0QjtjQUE1Qiw0QkFBNEI7SUFDOUI7RUFDRjs7O0FBWkE7SUFDRTtNQUNFLG9DQUE0QjtjQUE1Qiw0QkFBNEI7SUFDOUI7O0lBRUE7TUFDRSwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0Usb0NBQTRCO2NBQTVCLDRCQUE0QjtJQUM5QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3N1cmV1ci1wcm9maWxlL2Fzc3VyZXVyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuI3dpZmktbG9hZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzYyYWJmZjtcclxuICAgIC0tZnJvbnQtY29sb3I6ICM0ZjI5ZjA7XHJcbiAgICAtLWJhY2stY29sb3I6ICNjM2M4ZGU7XHJcbiAgICAtLXRleHQtY29sb3I6ICM0MTQ4NTY7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciBzdmcgY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDZweDtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTAwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI3dpZmktbG9hZGVyIHN2ZyBjaXJjbGUuYmFjayB7XHJcbiAgICBzdHJva2U6IHZhcigtLWJhY2stY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnIGNpcmNsZS5mcm9udCB7XHJcbiAgICBzdHJva2U6IHZhcigtLWZyb250LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgI3dpZmktbG9hZGVyIHN2Zy5jaXJjbGUtb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG4gICAgd2lkdGg6IDg2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciBzdmcuY2lyY2xlLW91dGVyIGNpcmNsZSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA2Mi43NSAxODguMjU7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciBzdmcuY2lyY2xlLW91dGVyIGNpcmNsZS5iYWNrIHtcclxuICAgIGFuaW1hdGlvbjogY2lyY2xlLW91dGVyMTM1IDEuOHMgZWFzZSBpbmZpbml0ZSAwLjNzO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnLmNpcmNsZS1vdXRlciBjaXJjbGUuZnJvbnQge1xyXG4gICAgYW5pbWF0aW9uOiBjaXJjbGUtb3V0ZXIxMzUgMS44cyBlYXNlIGluZmluaXRlIDAuMTVzO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnLmNpcmNsZS1taWRkbGUge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciBzdmcuY2lyY2xlLW1pZGRsZSBjaXJjbGUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNDIuNSAxMjcuNTtcclxuICB9XHJcbiAgXHJcbiAgI3dpZmktbG9hZGVyIHN2Zy5jaXJjbGUtbWlkZGxlIGNpcmNsZS5iYWNrIHtcclxuICAgIGFuaW1hdGlvbjogY2lyY2xlLW1pZGRsZTYxMjMgMS44cyBlYXNlIGluZmluaXRlIDAuMjVzO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnLmNpcmNsZS1taWRkbGUgY2lyY2xlLmZyb250IHtcclxuICAgIGFuaW1hdGlvbjogY2lyY2xlLW1pZGRsZTYxMjMgMS44cyBlYXNlIGluZmluaXRlIDAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciBzdmcuY2lyY2xlLWlubmVyIHtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnLmNpcmNsZS1pbm5lciBjaXJjbGUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjIgNjY7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciBzdmcuY2lyY2xlLWlubmVyIGNpcmNsZS5iYWNrIHtcclxuICAgIGFuaW1hdGlvbjogY2lyY2xlLWlubmVyMTYyIDEuOHMgZWFzZSBpbmZpbml0ZSAwLjJzO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgc3ZnLmNpcmNsZS1pbm5lciBjaXJjbGUuZnJvbnQge1xyXG4gICAgYW5pbWF0aW9uOiBjaXJjbGUtaW5uZXIxNjIgMS44cyBlYXNlIGluZmluaXRlIDAuMDVzO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgLnRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICB9XHJcbiAgXHJcbiAgI3dpZmktbG9hZGVyIC50ZXh0OjpiZWZvcmUsICN3aWZpLWxvYWRlciAudGV4dDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gIH1cclxuICBcclxuICAjd2lmaS1sb2FkZXIgLnRleHQ6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gICN3aWZpLWxvYWRlciAudGV4dDo6YWZ0ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWZyb250LWNvbG9yKTtcclxuICAgIGFuaW1hdGlvbjogdGV4dC1hbmltYXRpb243NiAzLjZzIGVhc2UgaW5maW5pdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNpcmNsZS1vdXRlcjEzNSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyNTtcclxuICAgIH1cclxuICBcclxuICAgIDI1JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNjUlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMTtcclxuICAgIH1cclxuICBcclxuICAgIDgwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyNzY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI3NjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBjaXJjbGUtbWlkZGxlNjEyMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNztcclxuICAgIH1cclxuICBcclxuICAgIDI1JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNjUlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwNDtcclxuICAgIH1cclxuICBcclxuICAgIDgwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxODc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE4NztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBjaXJjbGUtaW5uZXIxNjIge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogOTtcclxuICAgIH1cclxuICBcclxuICAgIDI1JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNjUlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwNjtcclxuICAgIH1cclxuICBcclxuICAgIDgwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA5NztcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogOTc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgdGV4dC1hbmltYXRpb243NiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCAxMDAlIDAgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MCUge1xyXG4gICAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/assureur-profile/assureur-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/assureur-profile/assureur-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssureurProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssureurProfileComponent", function() { return AssureurProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_demande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/demande.service */ "./src/app/Services/demande.service.ts");
/* harmony import */ var src_app_Services_rejects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/rejects.service */ "./src/app/Services/rejects.service.ts");





let AssureurProfileComponent = class AssureurProfileComponent {
    constructor(demandeService, router, rejectsService) {
        this.demandeService = demandeService;
        this.router = router;
        this.rejectsService = rejectsService;
        this.rejectionForm = {};
        this.isLoading = true; // Added variable for loading status
        this.showRejectionTextArea = false;
        this.rejectedDemandeId = '';
        this.rejectionCause = '';
    }
    ngOnInit() {
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        setTimeout(() => {
            this.isLoading = false; // Set isLoading to false after 10 seconds
            this.demandesWithUsers = JSON.parse(localStorage.getItem('demandes'));
        }, 3000); // 5 seconds delay
        this.demandeService.getAllDemandesWithUsers().subscribe((response) => {
            this.demandesTab = response.AllDemandesWithUser;
            localStorage.setItem('demandes', JSON.stringify(this.demandesTab));
        });
    }
    // ------- confirm demande
    confirmDemande(idDemande) {
        let noth;
        this.demandeService.confirmDemande(idDemande, noth).subscribe((response) => {
            if (response.message == "1") {
                this.demandesWithUsers = this.demandesWithUsers.filter((m) => m._id !== idDemande);
            }
            else {
                alert("Error updating command status");
            }
        });
    }
    // -------- reject demande
    toggleRejectionTextArea(demandeId) {
        if (this.rejectedDemandeId === demandeId) {
            this.showRejectionTextArea = !this.showRejectionTextArea;
        }
        else {
            this.showRejectionTextArea = true;
            this.rejectedDemandeId = demandeId;
            this.rejectionCause = ''; // Reset the rejection cause when toggling
        }
    }
    rejectDemande(idDemande, cause) {
        this.showRejectionTextArea = false;
        this.rejectedDemandeId = '';
        this.rejectionCause = '';
        this.rejectionForm.idDemande = idDemande; // Assign value to idDemande property
        this.rejectionForm.cause = cause; // Assign value to cause property
        console.log("this is", this.rejectionForm);
        this.rejectsService.addRejection(this.rejectionForm).subscribe((response) => {
            console.log("here response after add rejection", response);
            if (response.message == "rejection saved with success") {
                this.demandesWithUsers = this.demandesWithUsers.filter((m) => m._id !== idDemande);
            }
            else {
                alert("Something went wrong with your annonce try again later");
            }
        });
        // ---------------Update the status--------------------------------
        var noth;
        this.demandeService.rejectDemande(idDemande, noth).subscribe((response) => {
            if (response.message == "1") {
                this.router.navigate(['assureur-profile']);
            }
            else {
                alert("Error updating command status");
            }
        });
    }
};
AssureurProfileComponent.ctorParameters = () => [
    { type: src_app_Services_demande_service__WEBPACK_IMPORTED_MODULE_3__["DemandeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_Services_rejects_service__WEBPACK_IMPORTED_MODULE_4__["RejectsService"] }
];
AssureurProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assureur-profile',
        template: __webpack_require__(/*! raw-loader!./assureur-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assureur-profile/assureur-profile.component.html"),
        styles: [__webpack_require__(/*! ./assureur-profile.component.css */ "./src/app/components/assureur-profile/assureur-profile.component.css")]
    })
], AssureurProfileComponent);



/***/ }),

/***/ "./src/app/components/banner/banner.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/banner/banner.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/banner/banner.component.html"),
        styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/components/banner/banner.component.css")]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/components/contac/contac.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/contac/contac.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjL2NvbnRhYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contac/contac.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/contac/contac.component.ts ***!
  \*******************************************************/
/*! exports provided: ContacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContacComponent", function() { return ContacComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContacComponent = class ContacComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contac',
        template: __webpack_require__(/*! raw-loader!./contac.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contac/contac.component.html"),
        styles: [__webpack_require__(/*! ./contac.component.css */ "./src/app/components/contac/contac.component.css")]
    })
], ContacComponent);



/***/ }),

/***/ "./src/app/components/detail-demande/detail-demande.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/detail-demande/detail-demande.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".one-div {\r\n    width: 300px;\r\n    height: 200px;\r\n    background-color: #f0f5f9;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 24px;\r\n    color: #333;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .one-div::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -10px;\r\n    left: -10px;\r\n    right: -10px;\r\n    bottom: -10px;\r\n    z-index: -1;\r\n    background-image: linear-gradient(45deg, #e1e8f2, #f0f5f9);\r\n    border-radius: 20px;\r\n    opacity: 0.8;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    -webkit-filter: blur(10px);\r\n            filter: blur(10px);\r\n  }\r\n  \r\n  .one-div:hover {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    -webkit-transition: -webkit-transform 0.3s ease;\r\n    transition: -webkit-transform 0.3s ease;\r\n    transition: transform 0.3s ease;\r\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .one-div:hover::before {\r\n    -webkit-animation: gradient-animation 5s linear infinite;\r\n            animation: gradient-animation 5s linear infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes gradient-animation {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n  \r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n  \r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n  \r\n  @keyframes gradient-animation {\r\n    0% {\r\n      background-position: 0% 50%;\r\n    }\r\n  \r\n    50% {\r\n      background-position: 100% 50%;\r\n    }\r\n  \r\n    100% {\r\n      background-position: 0% 50%;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwtZGVtYW5kZS9kZXRhaWwtZGVtYW5kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsMERBQTBEO0lBQzFELG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiwwQkFBa0I7WUFBbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwrQ0FBK0I7SUFBL0IsdUNBQStCO0lBQS9CLCtCQUErQjtJQUEvQiw0REFBK0I7SUFDL0IseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCOztJQUVBO01BQ0UsNkJBQTZCO0lBQy9COztJQUVBO01BQ0UsMkJBQTJCO0lBQzdCO0VBQ0Y7O0VBWkE7SUFDRTtNQUNFLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwtZGVtYW5kZS9kZXRhaWwtZGVtYW5kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9uZS1kaXYge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY1Zjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAub25lLWRpdjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlMWU4ZjIsICNmMGY1ZjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLm9uZS1kaXY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLm9uZS1kaXY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IGdyYWRpZW50LWFuaW1hdGlvbiA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZ3JhZGllbnQtYW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/detail-demande/detail-demande.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/detail-demande/detail-demande.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailDemandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDemandeComponent", function() { return DetailDemandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_rejects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/rejects.service */ "./src/app/Services/rejects.service.ts");




let DetailDemandeComponent = class DetailDemandeComponent {
    constructor(router, route, rejectService) {
        this.router = router;
        this.route = route;
        this.rejectService = rejectService;
    }
    ngOnInit() {
        // get connectedUser from LS
        this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
        // get all demandes from LS
        this.demandes = JSON.parse(localStorage.getItem("demandes"));
        // get the current demande id from the path
        this.route.paramMap.subscribe(params => {
            this.idDemande = params.get('id');
        });
        console.log("here", this.idDemande);
        this.rejectService.getRejectionByDemandeId(this.idDemande).subscribe((response) => {
            this.rejectionTab = response.rejection;
            this.rejection = Array.isArray(this.rejectionTab) ? this.rejectionTab : [this.rejectionTab];
            localStorage.setItem('rejection', JSON.stringify(this.rejectionTab));
        });
    }
};
DetailDemandeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_Services_rejects_service__WEBPACK_IMPORTED_MODULE_3__["RejectsService"] }
];
DetailDemandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-demande',
        template: __webpack_require__(/*! raw-loader!./detail-demande.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/detail-demande/detail-demande.component.html"),
        styles: [__webpack_require__(/*! ./detail-demande.component.css */ "./src/app/components/detail-demande/detail-demande.component.css")]
    })
], DetailDemandeComponent);



/***/ }),

/***/ "./src/app/components/error-component/error-component.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/error-component/error-component.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItY29tcG9uZW50L2Vycm9yLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/error-component/error-component.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/error-component/error-component.component.ts ***!
  \*************************************************************************/
/*! exports provided: ErrorComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponentComponent", function() { return ErrorComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponentComponent = class ErrorComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-component',
        template: __webpack_require__(/*! raw-loader!./error-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error-component/error-component.component.html"),
        styles: [__webpack_require__(/*! ./error-component.component.css */ "./src/app/components/error-component/error-component.component.css")]
    })
], ErrorComponentComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-custom-1 {\r\n    background-color: #85144b;\r\n  }\r\n  \r\n  .bg-custom-2 {\r\n  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7O0VBRUE7RUFDQSxrRUFBa0U7RUFDbEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jdXN0b20tMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUxNDRiO1xyXG4gIH1cclxuICBcclxuICAuYmctY3VzdG9tLTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgIzEzNTQ3YSAwJSwgIzgwZDBjNyAxMDAlKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
        this.name = this.connectedUser.name;
        this.role = this.connectedUser.role;
    }
    logout() {
        localStorage.clear();
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLHNCQUFxQjtZQUFyQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider:after,\r\n.divider:before {\r\ncontent: \"\";\r\n-webkit-box-flex: 1;\r\n        flex: 1;\r\nheight: 1px;\r\nbackground: #eee;\r\n}\r\n.h-custom {\r\nheight: calc(100% - 73px);\r\n}\r\n@media (max-width: 450px) {\r\n.h-custom {\r\nheight: 100%;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFdBQVc7QUFDWCxtQkFBTztRQUFQLE9BQU87QUFDUCxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlcjphZnRlcixcclxuLmRpdmlkZXI6YmVmb3JlIHtcclxuY29udGVudDogXCJcIjtcclxuZmxleDogMTtcclxuaGVpZ2h0OiAxcHg7XHJcbmJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuLmgtY3VzdG9tIHtcclxuaGVpZ2h0OiBjYWxjKDEwMCUgLSA3M3B4KTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuLmgtY3VzdG9tIHtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            pwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    login() {
        this.userService.login(this.userForm.value).subscribe((response) => {
            console.log('response after login', response);
            if (response.message != "2") {
                this.errorMsg = "Please check Email / Mot de Passe";
            }
            else {
                console.log("here user id bro", response.user._id);
                localStorage.setItem('connectedUser', JSON.stringify(response.user));
                if (response.user.role == "Assureur") {
                    this.navigateWithRefresh("assureur-profile");
                }
                else {
                    this.navigateWithRefresh("assure-profile");
                }
            }
        });
    }
    ;
    navigateWithRefresh(path) {
        const urlTree = this.router.createUrlTree([path]);
        const url = this.router.serializeUrl(urlTree);
        window.location.href = url;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/our-services/services.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/our-services/services.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3VyLXNlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/our-services/services.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/our-services/services.component.ts ***!
  \***************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/our-services/services.component.html"),
        styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/our-services/services.component.css")]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/components/propos/propos.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/propos/propos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvcG9zL3Byb3Bvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/propos/propos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/propos/propos.component.ts ***!
  \*******************************************************/
/*! exports provided: ProposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposComponent", function() { return ProposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProposComponent = class ProposComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propos',
        template: __webpack_require__(/*! raw-loader!./propos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/propos/propos.component.html"),
        styles: [__webpack_require__(/*! ./propos.component.css */ "./src/app/components/propos/propos.component.css")]
    })
], ProposComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .loader {\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .loader span {\r\n    position: absolute;\r\n    color: #fff;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-size: 65px;\r\n    letter-spacing: 5px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .loader span:nth-child(1) {\r\n    color: transparent;\r\n    -webkit-text-stroke: 0.3px rgb(128, 198, 255);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .loader span:nth-child(2) {\r\n    color: rgb(128, 198, 255);\r\n    -webkit-text-stroke: 1px rgb(128, 198, 255);\r\n    -webkit-animation: uiverse723 2s ease-in-out infinite;\r\n            animation: uiverse723 2s ease-in-out infinite;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  @-webkit-keyframes uiverse723 {\r\n    0%, 100% {\r\n      -webkit-clip-path: polygon(0% 45%, 15% 44%, 32% 50%, \r\n       54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);\r\n              clip-path: polygon(0% 45%, 15% 44%, 32% 50%, \r\n       54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-clip-path: polygon(0% 60%, 16% 65%, 34% 66%, \r\n       51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);\r\n              clip-path: polygon(0% 60%, 16% 65%, 34% 66%, \r\n       51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  @keyframes uiverse723 {\r\n    0%, 100% {\r\n      -webkit-clip-path: polygon(0% 45%, 15% 44%, 32% 50%, \r\n       54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);\r\n              clip-path: polygon(0% 45%, 15% 44%, 32% 50%, \r\n       54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-clip-path: polygon(0% 60%, 16% 65%, 34% 66%, \r\n       51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);\r\n              clip-path: polygon(0% 60%, 16% 65%, 34% 66%, \r\n       51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  button {\r\n    /* Variables */\r\n    --button_radius: 0.75em;\r\n    --button_color: #e8e8e8;\r\n    --button_outline_color: #000000;\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n    border: none;\r\n    border-radius: var(--button_radius);\r\n    background: var(--button_outline_color);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .button_top {\r\n    display: block;\r\n    box-sizing: border-box;\r\n    border: 2px solid var(--button_outline_color);\r\n    border-radius: var(--button_radius);\r\n    padding: 0.75em 1.5em;\r\n    background: var(--button_color);\r\n    color: var(--button_outline_color);\r\n    -webkit-transform: translateY(-0.2em);\r\n            transform: translateY(-0.2em);\r\n    -webkit-transition: -webkit-transform 0.1s ease;\r\n    transition: -webkit-transform 0.1s ease;\r\n    transition: transform 0.1s ease;\r\n    transition: transform 0.1s ease, -webkit-transform 0.1s ease;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  button:hover .button_top {\r\n    /* Pull the button upwards when hovered */\r\n    -webkit-transform: translateY(-0.33em);\r\n            transform: translateY(-0.33em);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  button:active .button_top {\r\n    /* Push the button downwards when pressed */\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp {\r\n    position: relative;\r\n    width: 150px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    border: 1px solid #24a4b3;\r\n    background-color: #27b0c0;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp, .buttonp__icon, .buttonp__text {\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp .buttonp__text {\r\n    -webkit-transform: translateX(30px);\r\n            transform: translateX(30px);\r\n    color: #fff;\r\n    font-weight: 600;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp .buttonp__icon {\r\n    position: absolute;\r\n    -webkit-transform: translateX(109px);\r\n            transform: translateX(109px);\r\n    height: 100%;\r\n    width: 39px;\r\n    background-color: #1b9fab;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp .svg {\r\n    width: 30px;\r\n    stroke: #fff;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp:hover {\r\n    background: #349797;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp:hover .buttonp__text {\r\n    color: transparent;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp:hover .buttonp__icon {\r\n    width: 148px;\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp:active .buttonp__icon {\r\n    background-color: #37939f;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .buttonp:active {\r\n    border: 1px solid #25849a;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7Ozs7Ozs7OztFQVNFO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7Ozs7Ozs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOzs7Ozs7Ozs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw2Q0FBNkM7RUFDL0M7Ozs7Ozs7OztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxxREFBNkM7WUFBN0MsNkNBQTZDO0VBQy9DOzs7Ozs7Ozs7RUFFQTtJQUNFO01BQ0U7K0RBQThHO2NBQTlHOytEQUE4RztJQUNoSDs7SUFFQTtNQUNFOytEQUE4RztjQUE5RzsrREFBOEc7SUFDaEg7RUFDRjs7Ozs7Ozs7O0VBUkE7SUFDRTtNQUNFOytEQUE4RztjQUE5RzsrREFBOEc7SUFDaEg7O0lBRUE7TUFDRTsrREFBOEc7Y0FBOUc7K0RBQThHO0lBQ2hIO0VBQ0Y7Ozs7Ozs7OztFQUdBO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyx1Q0FBdUM7RUFDekM7Ozs7Ozs7OztFQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7SUFDN0MsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsK0NBQStCO0lBQS9CLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFBL0IsNERBQStCO0VBQ2pDOzs7Ozs7Ozs7RUFFQTtJQUNFLHlDQUF5QztJQUN6QyxzQ0FBOEI7WUFBOUIsOEJBQThCO0VBQ2hDOzs7Ozs7Ozs7RUFFQTtJQUNFLDJDQUEyQztJQUMzQyxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCOzs7Ozs7Ozs7RUFTQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7Ozs7Ozs7OztFQUVBO0lBQ0UsNEJBQW9CO0lBQXBCLG9CQUFvQjtFQUN0Qjs7Ozs7Ozs7O0VBRUE7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7Ozs7Ozs7OztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOzs7Ozs7Ozs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7Ozs7Ozs7OztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7Ozs7Ozs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7Ozs7Ozs7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7Ozs7Ozs7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7Ozs7Ozs7OztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXIgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHggcmdiKDEyOCwgMTk4LCAyNTUpO1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIGNvbG9yOiByZ2IoMTI4LCAxOTgsIDI1NSk7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDEyOCwgMTk4LCAyNTUpO1xyXG4gICAgYW5pbWF0aW9uOiB1aXZlcnNlNzIzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHVpdmVyc2U3MjMge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNDUlLCAxNSUgNDQlLCAzMiUgNTAlLCBcclxuICAgICAgIDU0JSA2MCUsIDcwJSA2MSUsIDg0JSA1OSUsIDEwMCUgNTIlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAlIHtcclxuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDYwJSwgMTYlIDY1JSwgMzQlIDY2JSwgXHJcbiAgICAgICA1MSUgNjIlLCA2NyUgNTAlLCA4NCUgNDUlLCAxMDAlIDQ2JSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAvKiBWYXJpYWJsZXMgKi9cclxuICAgIC0tYnV0dG9uX3JhZGl1czogMC43NWVtO1xyXG4gICAgLS1idXR0b25fY29sb3I6ICNlOGU4ZTg7XHJcbiAgICAtLWJ1dHRvbl9vdXRsaW5lX2NvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1idXR0b25fcmFkaXVzKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbl9vdXRsaW5lX2NvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbl90b3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uX291dGxpbmVfY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uX3JhZGl1cyk7XHJcbiAgICBwYWRkaW5nOiAwLjc1ZW0gMS41ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25fY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbl9vdXRsaW5lX2NvbG9yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yZW0pO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIC5idXR0b25fdG9wIHtcclxuICAgIC8qIFB1bGwgdGhlIGJ1dHRvbiB1cHdhcmRzIHdoZW4gaG92ZXJlZCAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzZW0pO1xyXG4gIH1cclxuICBcclxuICBidXR0b246YWN0aXZlIC5idXR0b25fdG9wIHtcclxuICAgIC8qIFB1c2ggdGhlIGJ1dHRvbiBkb3dud2FyZHMgd2hlbiBwcmVzc2VkICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLmJ1dHRvbnAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjRhNGIzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YjBjMDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnAsIC5idXR0b25wX19pY29uLCAuYnV0dG9ucF9fdGV4dCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnAgLmJ1dHRvbnBfX3RleHQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucCAuYnV0dG9ucF9faWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTA5cHgpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDM5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZmFiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnAgLnN2ZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzM0OTc5NztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnA6aG92ZXIgLmJ1dHRvbnBfX3RleHQge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucDpob3ZlciAuYnV0dG9ucF9faWNvbiB7XHJcbiAgICB3aWR0aDogMTQ4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25wOmFjdGl2ZSAuYnV0dG9ucF9faWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5MzlmO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucDphY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI1ODQ5YTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var src_app_validators_confirmPwd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/confirmPwd */ "./src/app/validators/confirmPwd.ts");






let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            adresse: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            pwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
            confirmPwd: [""],
            role: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999)]],
            tel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999)]],
            regles: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            img: [""],
        }, {
            validators: Object(src_app_validators_confirmPwd__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])("pwd", "confirmPwd"),
        });
    }
    signup() {
        this.userService.signup(this.userForm.value, this.userForm.value.img).subscribe((response) => {
            console.log("here response after signup", response);
            if (response.message == "user saved with success") {
                this.router.navigate(['/login']);
            }
            else {
                this.errorMsg = "Email Already Exist";
            }
        });
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        console.log("here file", file);
        this.userForm.patchValue({ img: file });
        this.userForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/validators/confirmPwd.ts":
/*!******************************************!*\
  !*** ./src/app/validators/confirmPwd.ts ***!
  \******************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Desktop\ \Freelance\OussamaSassi\Assurance\Assurance\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map