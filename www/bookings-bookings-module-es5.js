(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBookingsBookingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"layer\">\r\n\r\n  <ion-row  class=\"booking-form \">\r\n    <ion-header>      \r\n      <ion-searchbar [(ngModel)]=\"searchText\" (ngModelChange)=\"searcher()\" showCancelButton=\"focus\"></ion-searchbar>\r\n    </ion-header>\r\n  </ion-row>\r\n\r\n  <div class=\"booking-form\">\r\n    <ion-list-header>\r\n      <ion-item lines=\"none\">\r\n        Bookings ({{count}})\r\n        <ion-icon (click)=\"download_report_alert()\" name=\"save-outline\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      \r\n    </ion-list-header>\r\n    <ion-row  style=\"border-bottom: groove;\" *ngFor=\"let item of users;\">\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-icon *ngIf=\"item.isVerified == 1\" color=\"success\" slot=\"\" name=\"checkmark-circle-outline\"></ion-icon>\r\n          <ion-title style=\"text-align: left;font-size: medium;\">{{item.destination}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: center;font-size: medium;\">Tickets: <ion-badge color=\"tertiary\">{{item.tickets}}</ion-badge></ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: right;font-size: medium;\">R {{item.tot_amt}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: right;font-size: medium;\">{{item.depart_date}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/bookings/bookings-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/bookings/bookings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BookingsPageRoutingModule */

    /***/
    function srcAppBookingsBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function () {
        return BookingsPageRoutingModule;
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


      var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookings.page */
      "./src/app/bookings/bookings.page.ts");

      var routes = [{
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
      }];

      var BookingsPageRoutingModule = function BookingsPageRoutingModule() {
        _classCallCheck(this, BookingsPageRoutingModule);
      };

      BookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/bookings/bookings.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/bookings/bookings.module.ts ***!
      \*********************************************/

    /*! exports provided: BookingsPageModule */

    /***/
    function srcAppBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function () {
        return BookingsPageModule;
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


      var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bookings-routing.module */
      "./src/app/bookings/bookings-routing.module.ts");
      /* harmony import */


      var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookings.page */
      "./src/app/bookings/bookings.page.ts");

      var BookingsPageModule = function BookingsPageModule() {
        _classCallCheck(this, BookingsPageModule);
      };

      BookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"]],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
      })], BookingsPageModule);
      /***/
    },

    /***/
    "./src/app/bookings/bookings.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/bookings/bookings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppBookingsBookingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/bookings/bookings.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/bookings/bookings.page.ts ***!
      \*******************************************/

    /*! exports provided: BookingsPage */

    /***/
    function srcAppBookingsBookingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPage", function () {
        return BookingsPage;
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


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      "./src/services/api.service.ts");
      /* harmony import */


      var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/toaster.service */
      "./src/services/toaster.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/services/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/excel.service */
      "./src/services/excel.service.ts");

      var BookingsPage = /*#__PURE__*/function () {
        function BookingsPage(api, authService, alertCtrl, loadingCtrl, navCtrl, router, toaster, excelService) {
          _classCallCheck(this, BookingsPage);

          this.api = api;
          this.authService = authService;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.router = router;
          this.toaster = toaster;
          this.excelService = excelService;
          this.searchText = '';
          this.count = 0;
        }

        _createClass(BookingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.authService.isLoggedin() == false || localStorage.getItem('ur') != 'admin') {
              this.router.navigateByUrl('home');
            } else {
              this.init();
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.searcher();
          }
        }, {
          key: "searcher",
          value: function searcher() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(this.searchText);
                      this.api.get_all_bookings(this.searchText).subscribe(function (data) {
                        if (data.status == 0) {
                          _this.users = data.data;
                          _this.count = data.data.length;
                        } else {
                          _this.presentAlert(data.msg);
                        }
                      }, function (error) {
                        _this.presentAlert(error.message);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filterBy",
          value: function filterBy(ev) {
            if (ev == 'v') {
              this.users = this.verifiedUsers;
              this.count = this.verifiedUsers.length;
            } else if (ev == 'n') {
              this.users = this.nonVerifiedUsers;
              this.count = this.nonVerifiedUsers.length;
            } else if (ev == 'a') {
              this.users = this.all_users;
              this.count = this.all_users.length;
            }
          }
        }, {
          key: "download_report",
          value: function download_report() {
            var str = "destination, tickets, tot_amt, depart_date\n";

            for (var index = 0; index < this.users.length; index++) {
              str += this.users[index].tot_amt + ',' + this.users[index].tickets + ',' + this.users[index].tot_amt + ',' + this.users[index].depart_date + '\n';
            }

            var link = document.createElement('a');
            var blob = new Blob([str], {
              type: 'text/csv'
            });
            var url = window.URL.createObjectURL(blob);
            link.setAttribute('target', '_self');
            link.setAttribute('href', url);
            link.setAttribute('download', "report.csv");
            document.body.appendChild(link);
            link.click();
            link.remove();
          }
        }, {
          key: "download_xlsx",
          value: function download_xlsx() {
            var data = this.users;
            this.excelService.exportAsExcelFile(data, 'report');
          }
        }, {
          key: "download_report_alert",
          value: function download_report_alert() {
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
                        header: 'Air Food ✈️',
                        subHeader: 'Download Report',
                        message: 'Save Report as ?',
                        buttons: [{
                          text: 'csv',
                          handler: function handler() {
                            _this2.download_report();
                          }
                        }, {
                          text: 'xlsx',
                          handler: function handler() {
                            _this2.download_xlsx();
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
          key: "downloadMyFile",
          value: function downloadMyFile() {
            var link = document.createElement('a');
            link.setAttribute('target', '_self');
            link.setAttribute('href', 'http://localhost:8080/download/' + JSON.stringify(this.users));
            link.setAttribute('download', "Ticket.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Air Food ✈️',
                        subHeader: 'Warning',
                        message: msg,
                        buttons: ['OK']
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
          key: "userAlert",
          value: function userAlert(email, uuid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Air Food ✈️',
                        subHeader: 'User :' + email,
                        message: '',
                        buttons: [{
                          text: 'Register as Normal User',
                          role: 'Danger',
                          cssClass: 'secondary',
                          handler: function handler() {
                            _this3.register_admin(uuid, 'normal');
                          }
                        }, {
                          text: 'Register as Admin',
                          handler: function handler() {
                            _this3.register_admin(uuid, 'admin');
                          }
                        }, {
                          text: 'Delete user',
                          handler: function handler() {
                            _this3.delete_user(uuid);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "register_admin",
          value: function register_admin(uuid, ur) {
            var _this4 = this;

            this.api.register_as_admin(uuid, ur).subscribe(function (data) {
              if (data.status == 0) {
                _this4.toaster.successToast(data.msg);

                _this4.init();
              } else {
                _this4.presentAlert(data.msg);
              }
            }, function (error) {
              _this4.presentAlert(error.message);
            });
          }
        }, {
          key: "delete_user",
          value: function delete_user(uuid) {
            var _this5 = this;

            this.api.remove_user(uuid).subscribe(function (data) {
              if (data.status == 0) {
                _this5.toaster.successToast(data.msg);

                _this5.init();

                _this5.count -= 1;
              } else {
                _this5.presentAlert(data.msg);
              }
            }, function (error) {
              _this5.presentAlert(error.message);
            });
          }
        }]);

        return BookingsPage;
      }();

      BookingsPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
        }, {
          type: _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]
        }];
      };

      BookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bookings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bookings.page.scss */
        "./src/app/bookings/bookings.page.scss"))["default"]]
      })], BookingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bookings-bookings-module-es5.js.map