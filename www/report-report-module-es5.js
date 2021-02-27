(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportReportPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"layer\">\r\n\r\n  <ion-row  class=\"booking-form \">\r\n\r\n    <!-- <google-chart [title]=\"chartTitle\" [type]=\"chartType\" [data]=\"chartData\" [columns]=\"chartLabels\">\r\n    </google-chart> -->\r\n\r\n    <ion-header>\r\n      <ion-segment>\r\n        <ion-segment-button (click)=\"filterBy('v')\" value=\"Verified\">\r\n          <ion-label>Verified users</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"filterBy('n')\" value=\"Non-Verified\">\r\n          <ion-label>Non-Verified users</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"filterBy('a')\" value=\"all\">\r\n          <ion-label>All users</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n      \r\n      <ion-searchbar  [(ngModel)]=\"searchText\" (ngModelChange)=\"searcher()\" showCancelButton=\"focus\"></ion-searchbar>\r\n    </ion-header>\r\n  </ion-row>\r\n\r\n  <div class=\"booking-form\">\r\n    <ion-list-header>\r\n      <ion-item lines=\"none\">\r\n        Users ({{count}})\r\n        <ion-icon (click)=\"download_report_alert()\" name=\"save-outline\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      \r\n\r\n    </ion-list-header>\r\n    <ion-row (click) = \"userAlert(item.email, item.uuid)\" style=\"border-bottom: groove;\" *ngFor=\"let item of users;\">\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-icon *ngIf=\"item.isVerified == 1\" color=\"success\" slot=\"\" name=\"checkmark-circle-outline\"></ion-icon>\r\n          <ion-icon *ngIf=\"item.isVerified == 0\" color=\"danger\" slot=\"\" name=\"close-circle-outline\"></ion-icon>\r\n          <ion-title style=\"text-align: left;font-size: medium;\">{{item.email}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: center;font-size: medium;\">{{item.created_at}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: right;font-size: medium;\">{{item.role}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/report/report-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/report/report-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ReportPageRoutingModule */

    /***/
    function srcAppReportReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function () {
        return ReportPageRoutingModule;
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


      var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report.page */
      "./src/app/report/report.page.ts");

      var routes = [{
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
      }];

      var ReportPageRoutingModule = function ReportPageRoutingModule() {
        _classCallCheck(this, ReportPageRoutingModule);
      };

      ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/report/report.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/report/report.module.ts ***!
      \*****************************************/

    /*! exports provided: ReportPageModule */

    /***/
    function srcAppReportReportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPageModule", function () {
        return ReportPageModule;
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


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./report-routing.module */
      "./src/app/report/report-routing.module.ts");
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./report.page */
      "./src/app/report/report.page.ts");
      /* harmony import */


      var angular_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-google-charts */
      "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

      var ReportPageModule = function ReportPageModule() {
        _classCallCheck(this, ReportPageModule);
      };

      ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"]],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
      })], ReportPageModule);
      /***/
    },

    /***/
    "./src/app/report/report.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/report/report.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportReportPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/report/report.page.ts":
    /*!***************************************!*\
      !*** ./src/app/report/report.page.ts ***!
      \***************************************/

    /*! exports provided: ReportPage */

    /***/
    function srcAppReportReportPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPage", function () {
        return ReportPage;
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

      var ReportPage = /*#__PURE__*/function () {
        function ReportPage(api, authService, alertCtrl, loadingCtrl, navCtrl, router, toaster, excelService) {
          _classCallCheck(this, ReportPage);

          this.api = api;
          this.authService = authService;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.router = router;
          this.toaster = toaster;
          this.excelService = excelService;
          this.chartType = 'line';
          this.chartTitle = 'Report';
          this.searchText = '';
          this.count = 0;
        }

        _createClass(ReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartData = [{
              data: [3, 1, 4, 2, 5],
              label: 'Anthracnose',
              fill: false
            }];
            this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
            this.chartColors = [{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: 'rgba(0, 0, 0, 1)'
            }];
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            if (this.authService.isLoggedin() == false || localStorage.getItem('ur') != 'admin') {
              this.router.navigateByUrl('home');
            } else {
              this.init();
              this.api.get_all_users().subscribe(function (data) {
                if (data.status == 0) {
                  _this.users = data.data;
                  _this.count = _this.users.length;
                } else {
                  _this.presentAlert(data.msg);
                }
              }, function (error) {
                _this.presentAlert(error.message);
              });
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            this.api.get_all_verrified_users().subscribe(function (data) {
              if (data.status == 0) {
                _this2.verifiedUsers = data.data;
              } else {
                _this2.presentAlert(data.msg);
              }
            }, function (error) {
              _this2.presentAlert(error.message);
            });
            this.api.get_all_nonverrified_users().subscribe(function (data) {
              if (data.status == 0) {
                _this2.nonVerifiedUsers = data.data;
              } else {
                _this2.presentAlert(data.msg);
              }
            }, function (error) {
              _this2.presentAlert(error.message);
            });
            this.api.get_all_users().subscribe(function (data) {
              if (data.status == 0) {
                _this2.all_users = data.data;
              } else {
                _this2.presentAlert(data.msg);
              }
            }, function (error) {
              _this2.presentAlert(error.message);
            });
            this.searcher();
          }
        }, {
          key: "searcher",
          value: function searcher() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.api.get_all_users_by_search(this.searchText).subscribe(function (data) {
                        if (data.status == 0) {
                          _this3.users = data.data;
                          _this3.count = data.data.length;
                        } else {
                          _this3.presentAlert(data.msg);
                        }
                      }, function (error) {
                        _this3.presentAlert(error.message);
                      });

                    case 1:
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
            var str = "email, created_at, user_role\n";

            for (var index = 0; index < this.users.length; index++) {
              str += this.users[index].email + ',' + this.users[index].created_at + ',' + this.users[index].role + '\n';
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
              var _this4 = this;

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
                            _this4.download_report();
                          }
                        }, {
                          text: 'xlsx',
                          handler: function handler() {
                            _this4.download_xlsx();
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
              var _this5 = this;

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
                            _this5.register_admin(uuid, 'normal');
                          }
                        }, {
                          text: 'Register as Admin',
                          handler: function handler() {
                            _this5.register_admin(uuid, 'admin');
                          }
                        }, {
                          text: 'Delete user',
                          handler: function handler() {
                            _this5.delete_user(uuid);
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
            var _this6 = this;

            this.api.register_as_admin(uuid, ur).subscribe(function (data) {
              if (data.status == 0) {
                _this6.toaster.successToast(data.msg);

                _this6.init();
              } else {
                _this6.presentAlert(data.msg);
              }
            }, function (error) {
              _this6.presentAlert(error.message);
            });
          }
        }, {
          key: "delete_user",
          value: function delete_user(uuid) {
            var _this7 = this;

            this.api.remove_user(uuid).subscribe(function (data) {
              if (data.status == 0) {
                _this7.toaster.successToast(data.msg);

                _this7.init();

                _this7.count -= 1;
              } else {
                _this7.presentAlert(data.msg);
              }
            }, function (error) {
              _this7.presentAlert(error.message);
            });
          }
        }]);

        return ReportPage;
      }();

      ReportPage.ctorParameters = function () {
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

      ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./report.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./report.page.scss */
        "./src/app/report/report.page.scss"))["default"]]
      })], ReportPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-report-module-es5.js.map