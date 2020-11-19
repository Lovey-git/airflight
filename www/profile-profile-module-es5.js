(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen>\n  <ion-grid>\n    <div class=\"login-form\">\n\n        <div class=\"txt-center\">\n\n          <ion-icon style=\"font-size: 55px;\" name=\"person-circle-outline\"></ion-icon>\n          <br>\n          <strong>Profile</strong>\n          <br>\n\n          <ion-label color=\"dark\">Seasons change, so does reasons to your details </ion-label>\n          <br>\n          <br>\n        </div>\n        <!-- profile form -->\n        <form [formGroup]=\"profileForm\">\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"names\" type=\"text\" required placeholder=\"Names\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"surname\" type=\"text\" required placeholder=\"Surname\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"email\" type=\"text\" required placeholder=\"Email\"></ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-input formControlName=\"cell\" type=\"text\" required placeholder=\"Phone Number\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-datetime class=\"txt-center\" style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\"\n                formControlName=\"dob\" placeholder=\"Date Of Birth\" displayFormat=\"YYYY-MM-DD\" max=\"2002\">\n              </ion-datetime>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Gender:</ion-label>\n                <ion-select formControlName=\"gender\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"male\">male</ion-select-option>\n                  <ion-select-option value=\"female\">female</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Province:</ion-label>\n                <ion-select style=\"text-align: left;\" formControlName=\"province\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option *ngFor='let province of Province' value='{{province}}'>{{province}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button class=\"txt-center\" (click)=\"doUpdatetUser()\" color=\"primary\">Update profile</ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button class=\"txt-center\" (click)=\"changePass()\" color=\"secondary\">Change Password</ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button class=\"txt-center\" (click)=\"deactivate()\" color=\"warning\">Deactivate Account</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button class=\"txt-center\" (click)=\"deregister()\" color=\"danger\">Delete Account</ion-button>\n            </ion-col>\n          </ion-row>\n\n        </form>\n    </div>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/api.service */
      "./src/services/api.service.ts");
      /* harmony import */


      var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/toaster.service */
      "./src/services/toaster.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/services/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_lists_province__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../providers/lists/province */
      "./src/providers/lists/province.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../app.component */
      "./src/app/app.component.ts");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, fb, api, toaster, authService, alertCtrl, loadingCtrl, navCtrl, p, app) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.fb = fb;
          this.api = api;
          this.toaster = toaster;
          this.authService = authService;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.p = p;
          this.app = app;
          this.Province = this.p.Province_list;
          this.profileForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            names: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cell: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.authService.isLoggedin() == false) {
              this.router.navigateByUrl('home');
            } else {
              this.doGetUser();
            }
          }
        }, {
          key: "deregister",
          value: function deregister() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: '<strong>Delete account?  ⚠️</strong>!!!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            _this.doDeleteUser();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deactivate",
          value: function deactivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: '<strong>Deactivate account?  ⚠️</strong>!!!\nYou can always re-activate your account again at a later stage',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            _this2.doDeactivateUser();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changePass",
          value: function changePass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Change Password!',
                        inputs: [{
                          name: 'pass',
                          type: 'password',
                          placeholder: 'New Password',
                          cssClass: 'specialClass',
                          attributes: {
                            inputmode: 'decimal'
                          }
                        }, {
                          name: 'pass1',
                          type: 'password',
                          placeholder: 'Confirm Password',
                          cssClass: 'specialClass',
                          attributes: {
                            inputmode: 'decimal'
                          }
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            _this3.doChangePassword(data.pass, data.pass1);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "doChangePassword",
          value: function doChangePassword(password, password1) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context4.sent;

                      if (!(password == '' || password1 == '')) {
                        _context4.next = 7;
                        break;
                      }

                      this.presentAlert('Password fields required ⚠️');
                      _context4.next = 18;
                      break;

                    case 7:
                      if (!(password1 != password)) {
                        _context4.next = 11;
                        break;
                      }

                      this.presentAlert('Passwords do not match! ❌');
                      _context4.next = 18;
                      break;

                    case 11:
                      if (!this.api.validatePass(password)) {
                        _context4.next = 15;
                        break;
                      }

                      this.presentAlert('Weak Password detected 👎❌');
                      _context4.next = 18;
                      break;

                    case 15:
                      _context4.next = 17;
                      return loading.present();

                    case 17:
                      this.api.update_password(password).subscribe(function (data) {
                        if (data.status == 0) {
                          loading.dismiss();

                          _this4.toaster.successToast(data.msg);
                        } else {
                          loading.dismiss();

                          _this4.presentAlert(data.msg);
                        }
                      }, function (error) {
                        loading.dismiss();

                        _this4.presentAlert(error.message);
                      });

                    case 18:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "doDeleteUser",
          value: function doDeleteUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      this.api.remove_user(localStorage.getItem('uuid')).subscribe(function (data) {
                        if (data.status == 0) {
                          loading.dismiss();

                          _this5.toaster.successToast(data.msg);

                          _this5.authService.logout();
                        } else {
                          loading.dismiss();

                          _this5.presentAlert(data.msg);
                        }
                      }, function (error) {
                        loading.dismiss();

                        _this5.presentAlert("Could not connect to server 🖥️, check your internet connection!");
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "doDeactivateUser",
          value: function doDeactivateUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context6.sent;
                      _context6.next = 5;
                      return loading.present();

                    case 5:
                      this.api.deactivate_user().subscribe(function (data) {
                        if (data.status == 0) {
                          loading.dismiss();

                          _this6.toaster.successToast(data.msg);

                          _this6.authService.logout();

                          _this6.app.openPage('Booking');

                          location.reload();
                        } else {
                          loading.dismiss();

                          _this6.presentAlert(data.msg);
                        }
                      }, function (error) {
                        loading.dismiss();

                        _this6.presentAlert("Could not connect to server 🖥️, check your internet connection!");
                      });

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "doGetUser",
          value: function doGetUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context7.sent;
                      _context7.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.get_user().subscribe(function (data) {
                        if (data.status == 0) {
                          _this7.profileForm.setValue({
                            'email': data.data[0].email,
                            'names': data.data[0].name,
                            'surname': data.data[0].surname,
                            'cell': data.data[0].cell,
                            'province': data.data[0].province,
                            'gender': data.data[0].gender,
                            'dob': data.data[0].date_of_birth
                          });

                          _this7.profileForm.controls['email'].disable();

                          loading.dismiss();
                        } else {
                          loading.dismiss();

                          _this7.presentAlert(data.msg);
                        }
                      }, function (error) {
                        loading.dismiss();

                        _this7.presentAlert("Could not connect to server 🖥️, check your internet connection!");
                      });

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "doUpdatetUser",
          value: function doUpdatetUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              var loading, names, surname, cell, gender, province, email;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context8.sent;
                      names = this.profileForm.get('names').value;
                      surname = this.profileForm.get('surname').value;
                      cell = this.profileForm.get('cell').value;
                      gender = this.profileForm.get('gender').value;
                      province = this.profileForm.get('province').value;
                      email = this.profileForm.get('email').value;

                      if (!(email == null || gender == '' || province == '' || names == '' || surname == '' || cell == '')) {
                        _context8.next = 13;
                        break;
                      }

                      this.presentAlert('All fields are required! ⚠️');
                      _context8.next = 32;
                      break;

                    case 13:
                      if (!(isNaN(cell) || cell.length <= 9)) {
                        _context8.next = 17;
                        break;
                      }

                      this.presentAlert('Phone number should consist of only numbers and atleast 10 digits long ❌');
                      _context8.next = 32;
                      break;

                    case 17:
                      if (!(this.api.validateName(names) || this.api.validateName(surname))) {
                        _context8.next = 21;
                        break;
                      }

                      this.presentAlert('names and surname should consist of only characters and no special symbols ❌');
                      _context8.next = 32;
                      break;

                    case 21:
                      if (this.api.validateEmail(email)) {
                        _context8.next = 25;
                        break;
                      }

                      this.presentAlert('Invalid email entered ❌');
                      _context8.next = 32;
                      break;

                    case 25:
                      if (this.api.validateCell(cell)) {
                        _context8.next = 29;
                        break;
                      }

                      this.presentAlert('Invalid Phone number ❌');
                      _context8.next = 32;
                      break;

                    case 29:
                      _context8.next = 31;
                      return loading.present();

                    case 31:
                      this.api.update_user(names, surname, email, cell, gender, province).subscribe(function (data) {
                        if (data.status == 0) {
                          loading.dismiss();

                          _this8.toaster.successToast(data.msg);
                        } else {
                          loading.dismiss();

                          _this8.presentAlert(data.msg);
                        }
                      }, function (error) {
                        loading.dismiss();

                        _this8.presentAlert("Could not connect to server 🖥️, check your internet connection!");
                      });

                    case 32:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Air Food ✈️',
                        subHeader: 'Warning',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "revert",
          value: function revert() {
            this.profileForm.reset();
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _providers_lists_province__WEBPACK_IMPORTED_MODULE_8__["ProvinceList"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map