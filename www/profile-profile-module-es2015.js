(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-grid>\n    <div class=\"login-form\">\n      <ion-col>\n\n        <div class=\"txt-center\">\n\n          <ion-icon style=\"font-size: 55px;\" name=\"person-outline\"></ion-icon>\n          <br>\n          <strong>Profile</strong>\n          <br>\n\n          <ion-label color=\"dark\">Seasons change, so does reasons to your details </ion-label>\n          <br>\n          <br>\n        </div>\n        <form [formGroup]=\"profileForm\">\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"names\" type=\"text\" required placeholder=\"Names\"></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-input formControlName=\"surname\" type=\"text\" required placeholder=\"Surname\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"email\" type=\"text\" required placeholder=\"Email\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"cell\" type=\"text\" required placeholder=\"Phone Number\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Gender:</ion-label>\n                <ion-select formControlName=\"gender\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"male\">male</ion-select-option>\n                  <ion-select-option value=\"female\">female</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Province:</ion-label>\n                <ion-select formControlName=\"province\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option *ngFor='let province of Province' value='{{province}}'>{{province}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-button class=\"txt-center\" type=\"submit\" (click)=\"doUpdatetUser()\" color=\"primary\">Update profile</ion-button>\n          <ion-button class=\"txt-center\" type=\"submit\" (click)=\"changePass()\" color=\"primary\">Change Password</ion-button>\n          <ion-button class=\"txt-center\" type=\"submit\" (click)=\"deregister()\" color=\"danger\">Delete Account</ion-button>\n\n        </form>\n      </ion-col>\n    </div>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/services/toaster.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_lists_province__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/lists/province */ "./src/providers/lists/province.ts");









let ProfilePage = class ProfilePage {
    constructor(router, fb, api, toaster, authService, alertCtrl, loadingCtrl, navCtrl, p) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toaster = toaster;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.p = p;
        this.Province = this.p.Province_list;
        this.profileForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            names: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cell: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.doGetUser();
    }
    deregister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Delete account?</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.doDeleteUser();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    changePass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Change Password!',
                inputs: [
                    {
                        name: 'pass',
                        type: 'password',
                        placeholder: 'New Password',
                        cssClass: 'specialClass',
                        attributes: {
                            inputmode: 'decimal'
                        }
                    },
                    {
                        name: 'pass1',
                        type: 'password',
                        placeholder: 'Confirm Password',
                        cssClass: 'specialClass',
                        attributes: {
                            inputmode: 'decimal'
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Pass: ' + data.pass);
                            console.log('Pass1: ' + data.pass1);
                            this.doChangePassword(data.pass, data.pass1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    doChangePassword(password, password1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            if (password == '' || password1 == '') {
                this.presentAlert('Password fields required');
            }
            else if (password1 != password) {
                this.presentAlert('Passwords do not match! ');
            }
            else {
                yield loading.present();
                this.api.update_password(password).subscribe(data => {
                    if (data.status == 0) {
                        loading.dismiss();
                        this.toaster.successToast(data.msg);
                    }
                    else {
                        loading.dismiss();
                        this.presentAlert(data.msg);
                    }
                }, error => {
                    //console.log(error);
                });
            }
        });
    }
    doDeleteUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.api.remove_user().subscribe(data => {
                if (data.status == 0) {
                    loading.dismiss();
                    this.toaster.successToast(data.msg);
                    localStorage.clear();
                }
                else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                }
            }, error => {
                //console.log(error);
            });
        });
    }
    doGetUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.authService.get_user().subscribe(data => {
                console.log(data);
                if (data.status == 0) {
                    this.profileForm.setValue({
                        'email': data.data[0].email,
                        'names': data.data[0].names,
                        'surname': data.data[0].surname,
                        'cell': data.data[0].cell,
                        'province': data.data[0].province,
                        'gender': data.data[0].gender,
                        'dob': data.data[0].gender,
                    });
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                }
            }, error => {
                loading.dismiss();
                this.presentAlert(error.message);
            });
        });
    }
    doUpdatetUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            let names = this.profileForm.get('names');
            let surname = this.profileForm.get('surname');
            let cell = this.profileForm.get('cell');
            let gender = this.profileForm.get('gender');
            let province = this.profileForm.get('province');
            let email = this.profileForm.get('email');
            this.api.update_user(names, surname, email, cell, gender, province).subscribe(data => {
                if (data.status == 0) {
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                }
            }, error => {
                loading.dismiss();
                this.presentAlert(error.message);
            });
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
    revert() {
        this.profileForm.reset();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _providers_lists_province__WEBPACK_IMPORTED_MODULE_8__["ProvinceList"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map