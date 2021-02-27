(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen>\r\n  <ion-grid>\r\n    <div class=\"login-form\">\r\n      <ion-col>\r\n\r\n        <div class=\"txt-center\">\r\n          <ion-icon style=\"font-size: 55px;\" name=\"log-in-outline\"></ion-icon>\r\n          <br>\r\n          <strong>Login</strong>\r\n          <br>\r\n          <ion-label color=\"dark\">Sign Into Your Account.</ion-label>\r\n          <br>\r\n          <br>\r\n        </div>\r\n        <!-- login form -->\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n          <ion-input formControlName=\"email\" type=\"text\" required placeholder=\"Email\">\r\n            <ion-icon name=\"at-outline\">\r\n            </ion-icon>\r\n          </ion-input>\r\n          <br>\r\n          <ion-input formControlName=\"password\" required placeholder=\"Password\" type=\"Password\">\r\n            <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\r\n          </ion-input>\r\n          <br>\r\n          <ion-button class=\"txt-center\" type=\"submit\" color=\"primary\">Login</ion-button>\r\n        </form>\r\n        <ion-footer class=\"txt-center\">\r\n          <br>\r\n          <a color=\"primary\" routerLink=\"/register\" (click)=\"app.openPage('Register');\">No account? Sign up here.</a>\r\n          <br>\r\n          <a color=\"primary\" style=\"cursor: pointer;text-decoration: underline;\" (click)=\"resetPass()\">Forgot Password? Click here.</a>\r\n        </ion-footer>\r\n      </ion-col>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "./src/app/app.component.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, fb, api, toaster, authService, alertCtrl, loadingCtrl, navCtrl, app) {
          _classCallCheck(this, LoginPage);

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

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.authService.isLoggedin()) {
              if (localStorage.getItem('ur') == 'admin') {
                this.router.navigateByUrl('report');
                this.app.openPage('Users');
              } else {
                if (localStorage.getItem('current_page_type') == 'flight') {
                  this.router.navigateByUrl('home');
                  this.app.openPage('Booking');
                } else {
                  this.router.navigateByUrl('tickets');
                  this.app.openPage('Tickets');
                }
              }
            }
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var email, password, loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      email = this.loginForm.get('email').value;
                      password = this.loginForm.get('password').value;
                      _context.next = 4;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 4:
                      loading = _context.sent;

                      if (!(email == '')) {
                        _context.next = 9;
                        break;
                      }

                      this.presentAlert('Email is required ⚠️');
                      _context.next = 20;
                      break;

                    case 9:
                      if (!(password == '')) {
                        _context.next = 13;
                        break;
                      }

                      this.presentAlert('Password is required ⚠️');
                      _context.next = 20;
                      break;

                    case 13:
                      if (this.api.validateEmail(email)) {
                        _context.next = 17;
                        break;
                      }

                      this.presentAlert('Invalid email entered ❌');
                      _context.next = 20;
                      break;

                    case 17:
                      _context.next = 19;
                      return loading.present();

                    case 19:
                      this.authService.login(email, password).subscribe(function (data) {
                        if (data.status == 0) {
                          loading.dismiss();
                          localStorage.setItem('uuid', data.data[0].uuid);
                          localStorage.setItem('ur', data.data[0].role);
                          localStorage.setItem('username', data.data[0].surname + ' ' + data.data[0].name);
                          _this.app.isLoggedIn = true; // this.app.openPage('Users');

                          window.location.reload();
                        } else if (data.status == 1) {
                          loading.dismiss();

                          _this.do_activate_user(data.msg);
                        } else {
                          loading.dismiss();

                          _this.presentAlert(data.msg);
                        }
                      }, function (error) {
                        loading.dismiss();

                        _this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
                      });

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Air Food ✈️',
                        subHeader: 'Warning',
                        message: msg,
                        buttons: ['OK']
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
          key: "resetPass",
          value: function resetPass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var email, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      email = this.loginForm.get('email').value;
                      _context4.next = 3;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Reset Password!',
                        inputs: [{
                          name: 'email',
                          type: 'text',
                          placeholder: 'Enter your Email',
                          cssClass: 'specialClass',
                          attributes: {
                            inputmode: 'decimal',
                            value: ''
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
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var _this3 = this;

                              var loading;
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.next = 2;
                                      return this.loadingCtrl.create({
                                        cssClass: 'my-custom-class',
                                        message: 'Please wait...'
                                      });

                                    case 2:
                                      loading = _context3.sent;

                                      if (!(data.email.length < 3)) {
                                        _context3.next = 7;
                                        break;
                                      }

                                      this.presentAlert('Email Required');
                                      _context3.next = 10;
                                      break;

                                    case 7:
                                      _context3.next = 9;
                                      return loading.present();

                                    case 9:
                                      this.api.reset_password(email).subscribe(function (data) {
                                        if (data.status == 0) {
                                          loading.dismiss();

                                          _this3.toaster.successToast(data.msg);

                                          _this3.presentAlert('Password reseted check your emails for further instructions!');

                                          console.log(data);
                                        } else {
                                          loading.dismiss();

                                          _this3.presentAlert(data.msg);
                                        }
                                      }, function (error) {
                                        loading.dismiss();

                                        _this3.presentAlert(error.message);
                                      });

                                    case 10:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          }
                        }]
                      });

                    case 3:
                      alert = _context4.sent;
                      _context4.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "do_activate_user",
          value: function do_activate_user(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var email, alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      email = this.loginForm.get('email').value;
                      console.log(email);
                      _context6.next = 4;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Re-activate',
                        message: msg,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: 'Re-activate',
                          handler: function handler(data) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
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
                                      this.api.activate_user(email).subscribe(function (data) {
                                        if (data.status == 0) {
                                          loading.dismiss();

                                          _this5.toaster.successToast(data.msg);

                                          _this5.presentAlert('Re-activation in process, check your emails for further instructions!');

                                          console.log(data);
                                        } else {
                                          loading.dismiss();

                                          _this5.presentAlert(data.msg);
                                        }
                                      }, function (error) {
                                        loading.dismiss();

                                        _this5.presentAlert(error.message);
                                      });

                                    case 6:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          }
                        }]
                      });

                    case 4:
                      alert = _context6.sent;
                      _context6.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "revert",
          value: function revert() {
            this.loginForm.reset();
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
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
          type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map