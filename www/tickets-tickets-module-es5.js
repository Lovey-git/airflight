(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tickets-tickets-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tickets/tickets.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tickets/tickets.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTicketsTicketsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row   class=\"booking-form\">\r\n    <ion-header>\r\n      <ion-searchbar  [(ngModel)]=\"searchText\" (ngModelChange)=\"init()\" showCancelButton=\"focus\"></ion-searchbar>\r\n    </ion-header>\r\n  </ion-row>\r\n\r\n  <div  class=\"booking-form\">\r\n    <ion-list-header>Tickets ({{count}})</ion-list-header>\r\n\r\n    <!-- data table -->\r\n    <ion-row style=\"border-bottom: groove;\" *ngFor=\"let item of users;\">\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-icon  color=\"success\" slot=\"\" name=\"airplane-outline\"></ion-icon>\r\n          <ion-title style=\"text-align: left;font-size: medium;\">Destination: {{item.airport_name}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: center;font-size: medium;\">Boarding time:{{item.boarding_time}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      \r\n\r\n      \r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title slot=\"start\" style=\"text-align: right;font-size: medium;\">Ticket no :#AF{{item.ticket_id}}</ion-title>\r\n          <ion-icon slot=\"end\" (click)=\"downloadMyFile(item.ticket_id)\" name=\"save-outline\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tickets/tickets-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/tickets/tickets-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TicketsPageRoutingModule */

    /***/
    function srcAppTicketsTicketsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketsPageRoutingModule", function () {
        return TicketsPageRoutingModule;
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


      var _tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tickets.page */
      "./src/app/tickets/tickets.page.ts");

      var routes = [{
        path: '',
        component: _tickets_page__WEBPACK_IMPORTED_MODULE_3__["TicketsPage"]
      }];

      var TicketsPageRoutingModule = function TicketsPageRoutingModule() {
        _classCallCheck(this, TicketsPageRoutingModule);
      };

      TicketsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TicketsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tickets/tickets.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/tickets/tickets.module.ts ***!
      \*******************************************/

    /*! exports provided: TicketsPageModule */

    /***/
    function srcAppTicketsTicketsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function () {
        return TicketsPageModule;
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


      var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tickets-routing.module */
      "./src/app/tickets/tickets-routing.module.ts");
      /* harmony import */


      var _tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tickets.page */
      "./src/app/tickets/tickets.page.ts");

      var TicketsPageModule = function TicketsPageModule() {
        _classCallCheck(this, TicketsPageModule);
      };

      TicketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketsPageRoutingModule"]],
        declarations: [_tickets_page__WEBPACK_IMPORTED_MODULE_6__["TicketsPage"]]
      })], TicketsPageModule);
      /***/
    },

    /***/
    "./src/app/tickets/tickets.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/tickets/tickets.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppTicketsTicketsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldHMvdGlja2V0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tickets/tickets.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/tickets/tickets.page.ts ***!
      \*****************************************/

    /*! exports provided: TicketsPage */

    /***/
    function srcAppTicketsTicketsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketsPage", function () {
        return TicketsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TicketsPage = /*#__PURE__*/function () {
        function TicketsPage(api, authService, alertCtrl, loadingCtrl, navCtrl, router) {
          _classCallCheck(this, TicketsPage);

          this.api = api;
          this.authService = authService;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.router = router;
          this.searchText = '';
          this.count = 0;
        }

        _createClass(TicketsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadMyFile",
          value: function downloadMyFile(t_id) {
            var link = document.createElement('a');
            link.setAttribute('target', '_self');
            link.setAttribute('href', 'https://kohaku-b.herokuapp.com/download/' + localStorage.getItem('uuid') + t_id + '.pdf');
            link.setAttribute('download', "Ticket.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
          }
        }, {
          key: "share",
          value: function share(title, id) {
            console.log(id);

            if (window.navigator && window.navigator.share) {
              window.navigator['share']({
                title: title,
                text: 'description',
                'url': 'https://che.ac.za/new/#/moreitemdetails/?f_id=' + id
              }).then(function () {
                return console.log('Successful share');
              })["catch"](function (error) {
                return console.log('Error sharing', error);
              });
            } else {
              alert('share not supported');
            }
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(this.searchText);
                      this.api.get_user_tickets(this.searchText).subscribe(function (data) {
                        if (data.status == 0) {
                          console.log(data);
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.authService.isLoggedin() == false) {
              this.router.navigateByUrl('home');
            } else {
              this.init();
            }
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
        }]);

        return TicketsPage;
      }();

      TicketsPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      TicketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tickets',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tickets.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tickets/tickets.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tickets.page.scss */
        "./src/app/tickets/tickets.page.scss"))["default"]]
      })], TicketsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tickets-tickets-module-es5.js.map