(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-grid>\n    <div class=\"login-form\">\n      <ion-col>\n\n        <div class=\"txt-center\">\n          <ion-icon style=\"font-size: 55px;\" name=\"log-in-outline\"></ion-icon>\n          <br>\n          <strong>Login</strong>\n          <br>\n          <ion-label color=\"dark\">Sign Into Your Account.</ion-label>\n          <br>\n          <br>\n        </div>\n        <!-- login form -->\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <ion-input formControlName=\"email\" type=\"text\" required placeholder=\"Email\">\n            <ion-icon name=\"at-outline\">\n            </ion-icon>\n          </ion-input>\n          <br>\n          <ion-input formControlName=\"password\" required placeholder=\"Password\" type=\"Password\">\n            <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n          </ion-input>\n          <br>\n          <ion-button class=\"txt-center\" type=\"submit\" color=\"primary\">Login</ion-button>\n        </form>\n        <ion-footer class=\"txt-center\">\n          <br>\n          <a color=\"primary\" routerLink=\"/register\" (click)=\"app.openPage('Register');\">No account? Sign up here.</a>\n          <br>\n          <a color=\"primary\" style=\"cursor: pointer;text-decoration: underline;\" (click)=\"resetPass()\">Forgot Password? Click here.</a>\n        </ion-footer>\n      </ion-col>\n    </div>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/services/toaster.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");









let LoginPage = class LoginPage {
    constructor(router, fb, api, toaster, authService, alertCtrl, loadingCtrl, navCtrl, app) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toaster = toaster;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.authService.isLoggedin()) {
            if (localStorage.getItem('ur') == 'admin') {
                this.router.navigateByUrl('report');
            }
            else {
                if (localStorage.getItem('current_page_type') == 'flight') {
                    this.router.navigateByUrl('home');
                }
                else {
                    this.router.navigateByUrl('tickets');
                }
            }
        }
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let email = this.loginForm.get('email').value;
            let password = this.loginForm.get('password').value;
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            if (email == '') {
                this.presentAlert('Email is required ⚠️');
            }
            else if (password == '') {
                this.presentAlert('Password is required ⚠️');
            }
            else if (!this.api.validateEmail(email)) {
                this.presentAlert('Invalid email entered ❌');
            }
            else {
                yield loading.present();
                this.authService.login(email, password).subscribe(data => {
                    if (data.status == 0) {
                        loading.dismiss();
                        localStorage.setItem('uuid', data.data[0].uuid);
                        localStorage.setItem('ur', data.data[0].role);
                        this.app.isLoggedIn = true;
                        window.location.reload();
                    }
                    else if (data.status == 1) {
                        loading.dismiss();
                        this.do_activate_user(data.msg);
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
    resetPass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let email = this.loginForm.get('email').value;
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Reset Password!',
                inputs: [
                    {
                        name: 'email',
                        type: 'text',
                        placeholder: 'Enter your Email',
                        cssClass: 'specialClass',
                        attributes: {
                            inputmode: 'decimal',
                            value: ''
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadingCtrl.create({
                                cssClass: 'my-custom-class',
                                message: 'Please wait...',
                            });
                            if (data.email.length < 3) {
                                this.presentAlert('Email Required');
                            }
                            else {
                                yield loading.present();
                                this.api.reset_password(email).subscribe(data => {
                                    if (data.status == 0) {
                                        loading.dismiss();
                                        this.toaster.successToast(data.msg);
                                        this.presentAlert('Password reseted check your emails for further instructions!');
                                        console.log(data);
                                    }
                                    else {
                                        loading.dismiss();
                                        this.presentAlert(data.msg);
                                    }
                                }, error => {
                                    loading.dismiss();
                                    this.presentAlert(error.message);
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    do_activate_user(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let email = this.loginForm.get('email').value;
            console.log(email);
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Re-activate',
                message: msg,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Re-activate',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadingCtrl.create({
                                cssClass: 'my-custom-class',
                                message: 'Please wait...',
                            });
                            yield loading.present();
                            this.api.activate_user(email).subscribe(data => {
                                if (data.status == 0) {
                                    loading.dismiss();
                                    this.toaster.successToast(data.msg);
                                    this.presentAlert('Re-activation in process, check your emails for further instructions!');
                                    console.log(data);
                                }
                                else {
                                    loading.dismiss();
                                    this.presentAlert(data.msg);
                                }
                            }, error => {
                                loading.dismiss();
                                this.presentAlert(error.message);
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    revert() {
        this.loginForm.reset();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map