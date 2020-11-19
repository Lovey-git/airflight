(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-grid>\n    <div class=\"login-form\" style=\"position: relative;\">\n      <ion-col>\n\n        <div class=\"txt-center\">\n          <ion-icon style=\"font-size: 55px;\" name=\"person-add-outline\"></ion-icon>\n          <br>\n          <strong>Register</strong>\n          <br>\n          <ion-label color=\"dark\">Great adventures begin here!</ion-label>\n          <br>\n        </div>\n        <!-- register form -->\n        <form [formGroup]=\"registerForm\">\n          <ion-input formControlName=\"names\" type=\"text\" required placeholder=\"Names\"></ion-input>\n          <br>\n          <ion-input formControlName=\"surname\" type=\"text\" required placeholder=\"Surname\"></ion-input>\n          <br>\n          <ion-input formControlName=\"email\" type=\"text\" required placeholder=\"Email\"></ion-input>\n          <br>\n          <ion-input formControlName=\"cell\" type=\"tel\" required placeholder=\"Phone Number\"></ion-input>\n          <br>\n          <ion-datetime style=\"text-align: center;border: 1px solid #3880ff;color:  #3880ff; border-radius: 5px;\"\n            formControlName=\"dob\" placeholder=\"Date Of Birth\" displayFormat=\"YYYY-MM-DD\" max=\"2002\">\n          </ion-datetime>\n          <br>\n          <ion-input formControlName=\"password\" class=\"tooltip\" type=\"password\" required placeholder=\"Password\">\n            <span class=\"tooltiptext\">\n              <ol>\n                Password requirements:\n                <li>Use a minimum password length of 8</li>\n                <li>atleast one lowercase and uppercase alphabetic characters</li>\n                <li>atleast one number </li>\n                <li>atleast one special characters e.g. !@#$%^&* </li>\n              </ol>\n            </span>\n          </ion-input>\n          <br>\n          <br>\n          <ion-input style=\"position: relative;\" formControlName=\"password1\" type=\"password\" required\n            placeholder=\"Confirm Password\"></ion-input>\n          <br>\n\n          <ion-button class=\"txt-center\" type=\"submit\" (click)=\"register()\" color=\"primary\">Register</ion-button>\n          <div class=\"txt-center\">\n            <a color=\"primary\" style=\"cursor: pointer;text-decoration: underline;\" (click)=\"openTermsModal();\">By\n              proceeding you agree to Air-Food T&C's</a>\n          </div>\n        </form>\n        <ion-footer class=\"txt-center\">\n          <a color=\"primary\" routerLink=\"/login\" (click)=\"app.openPage('Login');\">already have an accout? sign in\n            here.</a>\n        </ion-footer>\n      </ion-col>\n    </div>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          <ion-card-title>End-User License Agreement (EULA) of Air Food ✈️</ion-card-title>\n          <ion-card-subtitle>\n            This End-User License Agreement (\"EULA\") is a legal agreement between you and TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\")\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            This EULA agreement governs your acquisition and use of our Air Food ✈️ software (\"Software\") directly from TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\")\n            or indirectly through a TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\") authorized reseller or distributor (a \"Reseller\").\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            Please read this EULA agreement carefully before completing the installation process and using the Air Food ✈️\n            software. It provides a license to use the Air Food ✈️ software and contains warranty information and liability\n            disclaimers.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            If you register for a free trial of the Air Food ✈️ software, this EULA agreement will also govern that trial. By\n            clicking \"accept\" or installing and/or using the Air Food ✈️ software, you are confirming your acceptance of the\n            Software and agreeing to become bound by the terms of this EULA agreement.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent\n            that you have the authority to bind such entity and its affiliates to these terms and conditions. If you\n            do not have such authority or if you do not agree with the terms and conditions of this EULA agreement,\n            do\n            not install or use the Software, and you must not accept this EULA agreement.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            This EULA agreement shall apply only to the Software supplied by TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\") herewith regardless of whether\n            other\n            software is referred to or described herein. The terms also apply to any updates, supplements,\n            Internet-based services, and support services for the Software, unless other terms accompany those itAir Food ✈️\n            on delivery. If so, those terms apply. This EULA was created by EULA Template for Air Food ✈️.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-title>License Grant:</ion-card-title>\n          <ion-card-subtitle>\n            TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\") hereby grants you a personal, non-transferable, non-exclusive licence to use the Air Food ✈️ software on\n            your\n            devices in accordance with the terms of this EULA agreement.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            You are permitted to load the Air Food ✈️ software (for example a PC, laptop, mobile or tablet) under your\n            control.\n            You are responsible for ensuring your device meets the minimum requirements of the Air Food ✈️ software.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-title>You are not permitted to:</ion-card-title>\n          <ion-card-subtitle>\n            Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor\n            permit\n            the whole or any part of the Software to be combined with or become incorporated in any other software,\n            nor\n            decompile, disassemble or reverse engineer the Software or attempt to do any such things\n            Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose\n            Allow any third party to use the Software on behalf of or for the benefit of any third party\n            Use the Software in any way which breaches any applicable local, national or international law\n            use the Software for any purpose that TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\") considers is a breach of this EULA agreement\n            Intellectual Property and Ownership\n            TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\") shall at all times retain ownership of the Software as originally downloaded by you and all\n            subsequent\n            downloads of the Software by you. The Software (and the copyright, and other intellectual property\n            rights\n            of\n            whatever nature in the Software, including any modifications made thereto) are and shall remain the\n            property\n            of TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\").\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\") reserves the right to grant licences to use the Software to third parties.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-title>Termination</ion-card-title>\n          <ion-card-subtitle>\n            This EULA agreement is effective from the date you first use the Software and shall continue until\n            terminated. You may terminate it at any time upon written notice to TSHWANE UNIVERSITY of TECHNOLOGY(\"TUT\").\n          </ion-card-subtitle>\n          <br>\n          <ion-card-subtitle>\n            It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such\n            termination, the licenses granted by this EULA agreement will immediately terminate and you agree to\n            stop\n            all access and use of the Software. The provisions that by their nature continue and survive will\n            survive\n            any termination of this EULA agreement.\n          </ion-card-subtitle>\n          <br>\n          <ion-card-title>Governing Law</ion-card-title>\n          <ion-card-subtitle>\n            This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be\n            governed by and construed in accordance with the laws of za.\n          </ion-card-subtitle>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/services/toaster.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _terms_terms_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../terms/terms.page */ "./src/app/terms/terms.page.ts");











let RegisterPage = class RegisterPage {
    constructor(router, fb, api, toaster, authService, alertCtrl, loadingCtrl, navCtrl, app, modalCtrl) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toaster = toaster;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_8__().add(0, 'd').format().toString();
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            names: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cell: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    openTermsModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _terms_terms_page__WEBPACK_IMPORTED_MODULE_10__["TermsPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        if (this.authService.isLoggedin()) {
            if (localStorage.getItem('ur') == 'admin') {
                this.router.navigateByUrl('report');
            }
            else {
                if (localStorage.getItem('current_page') == 'flight') {
                    this.router.navigateByUrl('home');
                }
                else {
                    this.router.navigateByUrl('home');
                }
            }
        }
    }
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Air Food ✈️',
                subHeader: 'Warning',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let email = this.registerForm.get('email').value;
            let password = this.registerForm.get('password').value;
            let password1 = this.registerForm.get('password1').value;
            let names = this.registerForm.get('names').value;
            let surname = this.registerForm.get('surname').value;
            let cell = this.registerForm.get('cell').value;
            this.dob = this.registerForm.get('dob').value;
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            if (email == null || password == '' || password1 == '' || names == '' || surname == '' || cell == '') {
                this.presentAlert('All fields are required! ⚠️');
            }
            else if (password != password1) {
                this.presentAlert('Passwords do not match ❌');
            }
            else if (isNaN(cell) || cell.length <= 9) {
                this.presentAlert('Phone number should consist of only numbers and atleast 10 digits long ❌');
            }
            else if (this.api.validateName(names) || this.api.validateName(surname)) {
                this.presentAlert('names and surname should consist of only characters and no special symbols ❌');
            }
            else if (!this.api.validateEmail(email)) {
                this.presentAlert('Invalid email entered ❌');
            }
            else if (this.dob.substr(0, 10) == this.minDate.substr(0, 10)) {
                this.presentAlert('You might just be a very smart 👶 infant to even use a computer!');
            }
            else if (parseInt(this.minDate.substr(0, 4)) - (parseInt(this.dob.substr(0, 4))) <= 17) {
                this.presentAlert('You must be atleast 18 years old to register! 🔞');
                console.log((parseInt(this.dob.substr(0, 4)) - parseInt(this.minDate.substr(0, 4))));
            }
            else if (!this.api.validateCell(cell)) {
                this.presentAlert('Invalid Phone number ❌');
            }
            else if (this.api.validatePass(password) < 4) {
                this.presentAlert('Weak Password detected 👎❌');
            }
            else {
                yield loading.present();
                this.api.register(email, password, names, surname).subscribe(data => {
                    if (data.status == 0) {
                        loading.dismiss();
                        console.log(data);
                        this.toaster.successToast(data.msg);
                        this.router.navigateByUrl('login');
                    }
                    else {
                        loading.dismiss();
                        this.presentAlert(data.msg);
                    }
                }, error => {
                    loading.dismiss();
                    this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
                });
            }
        });
    }
    revert() {
        this.registerForm.reset();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ }),

/***/ "./src/app/terms/terms.page.scss":
/*!***************************************!*\
  !*** ./src/app/terms/terms.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-light) @extend .layer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbURBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICBAZXh0ZW5kIC5sYXllcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/terms/terms.page.ts":
/*!*************************************!*\
  !*** ./src/app/terms/terms.page.ts ***!
  \*************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let TermsPage = class TermsPage {
    constructor(_location) {
        this._location = _location;
    }
    backClicked() {
        this._location.back();
    }
    ngOnInit() {
    }
};
TermsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
TermsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms.page.scss */ "./src/app/terms/terms.page.scss")).default]
    })
], TermsPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map