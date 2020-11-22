(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <!-- toolbar -->\n  <ion-header>\n    <ion-toolbar>\n      <ion-item lines=\"none\">\n        <ion-item lines=\"none\" slot=\"start\">\n          <ion-title>\n            <a routerLink=\"/home\" style=\"text-decoration: wavy;\" (click)=\"openPage('Booking')\">{{title}}</a>\n          </ion-title>\n        </ion-item>\n        <ion-item slot=\"end\" lines=\"none\">\n          <strong>\n            {{header}}\n          </strong>\n          <ion-icon style=\"margin-left: 5px;\" name=\"menu\" (click)=\"openMenu()\"></ion-icon>\n        </ion-item>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- side menu navigation -->\n  <ion-menu side=\"end\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"\">\n        <ion-item lines=\"none\">\n          <ion-label>Menu</ion-label>\n          <ion-icon slot=\"end\" name=\"close\" (click)=\"closeMenu()\"></ion-icon>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n\n\n\n      <ion-list style=\"padding-top: 70px;\">\n\n        <ion-item *ngIf=\"role!='normal' && role!='admin'\">\n          Guest\n        </ion-item>\n\n        <ion-item *ngIf=\"role=='admin'\">\n          Admin\n        </ion-item>\n\n        <ion-item *ngIf=\"role==='normal' || role==='admin'\" routerLink=\"/profile\"\n          (click)=\"closeMenu();openPage('Profile');\">\n          <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Profile\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"role==='admin'\" routerLink=\"/report\" (click)=\"closeMenu();openPage('Report');\">\n          <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Reports\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"role!='admin'\" routerLink=\"/home\" (click)=\"closeMenu();openPage('Booking');\">\n          <ion-icon name=\"airplane\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Book Flight\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"role==='normal'\" routerLink=\"/tickets\" (click)=\"closeMenu();openPage('Tickets');\">\n          <ion-icon name=\"ticket\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Tickets\n          </ion-label>\n        </ion-item>\n\n\n        <ion-item *ngIf=\"!auth.isLoggedin()\" routerLink=\"/register\" (click)=\"closeMenu();openPage('Register');\">\n          <ion-icon name=\"person-add\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Register\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"!auth.isLoggedin()\" routerLink=\"/login\" (click)=\"closeMenu();openPage('Login');\">\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Login\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"auth.isLoggedin()\" (click)=\"logout();closeMenu();openPage('Booking');\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          <ion-label style=\"cursor: pointer;\">\n            Logout\n          </ion-label>\n        </ion-item>\n\n      </ion-list>\n      <ion-item lines=\"none\">\n        <ion-label>Useful links:</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" href=\"https://play.google.com/store/apps/details?id=za.gov.health.covidconnect\"\n        target=\"_blank\">\n        <img src=\"../assets/Screenshot_20201118-103408_My Vodacom.png\" width=\"100%%\" style=\"border-radius: 8px;\" />\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Social links:</ion-label>\n      </ion-item>\n      <ion-card>\n        <ion-card-content>\n          <ion-button href=\"https://www.instagram.com/airfood_sa/\" target=\"_blank\">\n            <ion-icon slot=\"icon-only\" color=\"light\"  style=\"font-size: 30px;\"\n              name='logo-instagram'></ion-icon>\n          </ion-button>\n          <ion-button href=\"https://twitter.com/airfood_sa/\" target=\"_blank\">\n            <ion-icon slot=\"icon-only\" color=\"light\"  style=\"font-size: 30px;\"\n              name='logo-twitter'></ion-icon>\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n\n\n    </ion-content>\n  </ion-menu>\n\n  <!-- navigated pagges -->\n  <ion-router-outlet id=\"main\">\n\n  </ion-router-outlet>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~home-home-module~register-register-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-register-module */
          [__webpack_require__.e("default~home-home-module~register-register-module"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | report-report-module */
          "report-report-module").then(__webpack_require__.bind(null,
          /*! ./report/report.module */
          "./src/app/report/report.module.ts")).then(function (m) {
            return m.ReportPageModule;
          });
        }
      }, {
        path: 'tickets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tickets-tickets-module */
          "tickets-tickets-module").then(__webpack_require__.bind(null,
          /*! ./tickets/tickets.module */
          "./src/app/tickets/tickets.module.ts")).then(function (m) {
            return m.TicketsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: 'reload',
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu {\n  --ion-background-color: var(--ion-color-light);\n}\nion-menu ion-toolbar {\n  --background: var(--ion-color-light);\n}\nion-menu ion-content {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7QUFDSjtBQUNJO0VBQ0Usb0NBQUE7QUFDTjtBQUVJO0VBQ0ksb0NBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICBcclxuICAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/services/auth.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, auth, route, popoverController, menu, actionSheetController, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.auth = auth;
          this.popoverController = popoverController;
          this.menu = menu;
          this.actionSheetController = actionSheetController;
          this.router = router;
          this.role = '';
          this.email = "email@mail.com";
          this.title = "Air Food ✈️";
          this.header = localStorage.getItem('page');
          this.initializeApp();
          this.role = localStorage.getItem('ur');
          this.isLoggedIn = auth.isLoggedin();
          this.header = localStorage.getItem('page');
        }

        _createClass(AppComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.closeMenu();
            this.role = localStorage.getItem('ur');
            this.isLoggedIn = this.auth.isLoggedin();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "openMenu",
          value: function openMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.menu.open();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.menu.close();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openFirst",
          value: function openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          key: "openEnd",
          value: function openEnd() {
            this.menu.open('end');
          }
        }, {
          key: "openCustom",
          value: function openCustom() {
            this.menu.enable(true, 'custom');
            this.menu.open('custom');
          }
        }, {
          key: "openPage",
          value: function openPage(title) {
            this.header = title;
            localStorage.setItem('page', title);
          }
        }, {
          key: "adminOptions",
          value: function adminOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: 'Options',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Profile',
                          icon: 'person-outline',
                          handler: function handler() {
                            _this.router.navigateByUrl('profile');
                          }
                        }, {
                          text: 'Reports',
                          icon: 'document-text-outline',
                          handler: function handler() {
                            _this.router.navigateByUrl('report');
                          }
                        }, {
                          text: 'Logout',
                          icon: 'log-out-outline',
                          handler: function handler() {
                            _this.auth.logout();

                            window.location.reload();
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "userOptions",
          value: function userOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        header: 'Options',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Profile',
                          icon: 'person-outline',
                          handler: function handler() {
                            _this2.router.navigateByUrl('profile');
                          }
                        }, {
                          text: 'Tickets',
                          icon: 'document-text-outline',
                          handler: function handler() {
                            _this2.router.navigateByUrl('tickets');
                          }
                        }, {
                          text: 'Flights',
                          icon: 'airplane-outline',
                          handler: function handler() {
                            _this2.router.navigateByUrl('home');
                          }
                        }, {
                          text: 'Logout',
                          icon: 'log-out-outline',
                          handler: function handler() {
                            localStorage.clear();
                            window.location.reload();
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "guestOptions",
          value: function guestOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.actionSheetController.create({
                        header: 'Options',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Login',
                          icon: 'log-out-outline',
                          handler: function handler() {
                            localStorage.clear();

                            _this3.router.navigateByUrl('login');
                          }
                        }, {
                          text: 'Register',
                          icon: 'log-in-outline',
                          handler: function handler() {
                            localStorage.clear();

                            _this3.router.navigateByUrl('register');
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context5.sent;
                      _context5.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout();
            window.location.reload();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this4 = this;

            this.platform.ready().then(function () {
              _this4.statusBar.backgroundColorByHexString('#3880ff');

              _this4.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: options, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "options", function () {
        return options;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/services/api.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/services/auth.service.ts");
      /* harmony import */


      var _services_toaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/toaster.service */
      "./src/services/toaster.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _providers_lists_province__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../providers/lists/province */
      "./src/providers/lists/province.ts");
      /* harmony import */


      var _providers_lists_destination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../providers/lists/destination */
      "./src/providers/lists/destination.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-mask */
      "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../services/excel.service */
      "./src/services/excel.service.ts");

      var options = null;

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production
        }), ngx_mask__WEBPACK_IMPORTED_MODULE_18__["NgxMaskModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _providers_lists_province__WEBPACK_IMPORTED_MODULE_14__["ProvinceList"], _providers_lists_destination__WEBPACK_IMPORTED_MODULE_15__["DestinationList"], _services_excel_service__WEBPACK_IMPORTED_MODULE_19__["ExcelService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "./src/providers/lists/destination.ts":
    /*!********************************************!*\
      !*** ./src/providers/lists/destination.ts ***!
      \********************************************/

    /*! exports provided: DestinationList */

    /***/
    function srcProvidersListsDestinationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DestinationList", function () {
        return DestinationList;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DestinationList = function DestinationList() {
        _classCallCheck(this, DestinationList);

        this.destination_list = {
          "Durban": [["Cape Town", 9909, 9909], ["Johannesburg", 9909]],
          "Cape Town": [["Durban", 9909], ["Johannesburg", 9909]],
          "Johannesburg": [["Durban", 9909], ["Cape Town", 9909]]
        };
      };

      DestinationList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // export class DestinationList {
      //     public destination_list: any = ["Johannesburg  JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR"];
      // }
      ], DestinationList);
      /***/
    },

    /***/
    "./src/providers/lists/province.ts":
    /*!*****************************************!*\
      !*** ./src/providers/lists/province.ts ***!
      \*****************************************/

    /*! exports provided: ProvinceList */

    /***/
    function srcProvidersListsProvinceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvinceList", function () {
        return ProvinceList;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProvinceList = function ProvinceList() {
        _classCallCheck(this, ProvinceList);

        this.Province_list = ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "Northern Cape", "North West", "Western Cape"];
      };

      ProvinceList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProvinceList);
      /***/
    },

    /***/
    "./src/services/api.service.ts":
    /*!*************************************!*\
      !*** ./src/services/api.service.ts ***!
      \*************************************/

    /*! exports provided: ApiService */

    /***/
    function srcServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http; //_Url = "http://localhost:8080/";

          this._Url = "https://kohaku-b.herokuapp.com/";
        }

        _createClass(ApiService, [{
          key: "validateCell",
          value: function validateCell(phone) {
            var re = /^[0]{1}[6-8]{1}[1-9]{1}/;

            if (re.test(String(phone).toLowerCase())) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "validateName",
          value: function validateName(name) {
            var format = /^[0-9!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]*$/;
            var re = /.*[0-9].*/;

            if (name.match(format) || name.match(re)) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "validatePass",
          value: function validatePass(password) {
            var numberOfElements = 0;
            numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements; // Lowercase letters

            numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements; // Uppercase letters

            numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements; // Numbers

            numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements; // Special characters (inc. space)

            return numberOfElements;
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          } //Register

        }, {
          key: "register",
          value: function register(email, password, lname, fname) {
            return this.http.post(this._Url + 'register', {
              email: email,
              password: password,
              fname: fname,
              lname: lname
            });
          } //UPDATE USER

        }, {
          key: "update_user",
          value: function update_user(fname, lname, email, cell, gender, province) {
            var uuid = localStorage.getItem('uuid');
            return this.http.post(this._Url + 'update_user', {
              fname: fname,
              lname: lname,
              email: email,
              cell: cell,
              gender: gender,
              province: province,
              uuid: uuid
            });
          } //UPDATE PASSWORD

        }, {
          key: "update_password",
          value: function update_password(password) {
            var uuid = localStorage.getItem('uuid');
            return this.http.post(this._Url + 'update_password', {
              password: password,
              uuid: uuid
            });
          } //Reset PASSWORD

        }, {
          key: "reset_password",
          value: function reset_password(email) {
            var uuid = localStorage.getItem('uuid');
            return this.http.get(this._Url + 'resetPassword/' + email, {});
          } //Remove user

        }, {
          key: "remove_user",
          value: function remove_user(uuid) {
            return this.http.post(this._Url + 'delete_user', {
              uuid: uuid
            });
          } //add ticket

        }, {
          key: "add_ticket",
          value: function add_ticket(from, to, depart, Return, adults, children, adult_price, child_price, meals, Class, totalAmt, time_slot) {
            var uuid = localStorage.getItem('uuid');
            return this.http.post(this._Url + 'add_ticket', {
              uuid: uuid,
              from: from,
              to: to,
              depart: depart,
              Return: Return,
              adults: adults,
              children: children,
              adult_price: adult_price,
              child_price: child_price,
              meals: meals,
              Class: Class,
              totalAmt: totalAmt,
              time_slot: time_slot
            });
          } //get all users

        }, {
          key: "get_all_verrified_users",
          value: function get_all_verrified_users() {
            return this.http.post(this._Url + 'get_all_verrified_users', {});
          }
        }, {
          key: "get_all_nonverrified_users",
          value: function get_all_nonverrified_users() {
            return this.http.post(this._Url + 'get_all_nonverrified_users', {});
          }
        }, {
          key: "get_all_users_by_search",
          value: function get_all_users_by_search(searchText) {
            return this.http.post(this._Url + 'get_all_users_by_search', {
              searchText: searchText
            });
          }
        }, {
          key: "get_all_users",
          value: function get_all_users() {
            return this.http.post(this._Url + 'get_all_users', {});
          } //register as admin

        }, {
          key: "register_as_admin",
          value: function register_as_admin(uuid, ur) {
            return this.http.post(this._Url + 'register_admin', {
              uuid: uuid,
              ur: ur
            });
          } //add user payment

        }, {
          key: "add_user_payment",
          value: function add_user_payment(ticket_id, amount, card_number, cvv, expire_date) {
            return this.http.post(this._Url + 'add_user_payment', {
              ticket_id: ticket_id,
              amount: amount,
              card_number: card_number,
              cvv: cvv,
              expire_date: expire_date
            });
          } //add user payment

        }, {
          key: "get_user_tickets",
          value: function get_user_tickets(searchText) {
            var uuid = localStorage.getItem('uuid');
            return this.http.post(this._Url + 'get_user_tickets', {
              searchText: searchText,
              uuid: uuid
            });
          } //add user payment

        }, {
          key: "generate_report",
          value: function generate_report(data) {
            return this.http.post(this._Url + 'generate_report', {
              data: data
            });
          } //add user payment

        }, {
          key: "deactivate_user",
          value: function deactivate_user() {
            var uuid = localStorage.getItem('uuid');
            return this.http.post(this._Url + 'deactivate_user', {
              uuid: uuid
            });
          } //activate user 

        }, {
          key: "activate_user",
          value: function activate_user(email) {
            return this.http.post(this._Url + 'activate_user', {
              email: email
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "./src/services/auth.service.ts":
    /*!**************************************!*\
      !*** ./src/services/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function srcServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "./src/services/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, api, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.api = api;
          this.router = router;
        } //login


        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            return this.http.post(this.api._Url + 'login', {
              email: email,
              password: password
            });
          }
        }, {
          key: "auth",
          value: function auth(uuid) {
            localStorage.setItem('uuid', uuid);
            this.router.navigateByUrl('home');
          }
        }, {
          key: "isLoggedin",
          value: function isLoggedin() {
            if (localStorage.getItem('uuid')) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "get_user",
          value: function get_user() {
            var uuid = localStorage.getItem('uuid');
            return this.http.post(this.api._Url + 'getUser', {
              uuid: uuid
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('uuid');
            localStorage.removeItem('ur');
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
      /***/
    },

    /***/
    "./src/services/excel.service.ts":
    /*!***************************************!*\
      !*** ./src/services/excel.service.ts ***!
      \***************************************/

    /*! exports provided: ExcelService */

    /***/
    function srcServicesExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExcelService", function () {
        return ExcelService;
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


      var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! file-saver */
      "./node_modules/file-saver/FileSaver.js");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! xlsx */
      "./node_modules/xlsx/xlsx.js");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      var EXCEL_EXTENSION = '.xlsx';

      var ExcelService = /*#__PURE__*/function () {
        function ExcelService() {
          _classCallCheck(this, ExcelService);
        }

        _createClass(ExcelService, [{
          key: "exportAsExcelFile",
          value: function exportAsExcelFile(json, excelFileName) {
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
            console.log('worksheet', worksheet);
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
              bookType: 'xlsx',
              type: 'array'
            }); //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

            this.saveAsExcelFile(excelBuffer, excelFileName);
          }
        }, {
          key: "saveAsExcelFile",
          value: function saveAsExcelFile(buffer, fileName) {
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
        }]);

        return ExcelService;
      }();

      ExcelService.ctorParameters = function () {
        return [];
      };

      ExcelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ExcelService);
      /***/
    },

    /***/
    "./src/services/toaster.service.ts":
    /*!*****************************************!*\
      !*** ./src/services/toaster.service.ts ***!
      \*****************************************/

    /*! exports provided: ToasterService */

    /***/
    function srcServicesToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
        return ToasterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToasterService = /*#__PURE__*/function () {
        function ToasterService(toastController) {
          _classCallCheck(this, ToasterService);

          this.toastController = toastController;
        }

        _createClass(ToasterService, [{
          key: "successToast",
          value: function successToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: msg,
                        header: 'Success',
                        duration: 5000,
                        position: 'top',
                        color: 'primary',
                        buttons: [{
                          side: 'start',
                          icon: 'checkmark-done-outline'
                        }]
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "warnToast",
          value: function warnToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: msg,
                        header: 'Warning',
                        duration: 5000,
                        position: 'top',
                        color: 'warning',
                        buttons: [{
                          side: 'start',
                          icon: 'help-outline'
                        }]
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: msg,
                        header: 'Error',
                        duration: 5000,
                        position: 'top',
                        color: 'danger',
                        buttons: [{
                          side: 'start',
                          icon: 'close-outline'
                        }]
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(msg, title) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastController.create({
                        message: msg,
                        header: title,
                        duration: 5000,
                        position: 'top',
                        color: 'danger',
                        buttons: [{
                          side: 'start',
                          icon: 'close-outline'
                        }]
                      });

                    case 2:
                      toast = _context9.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return ToasterService;
      }();

      ToasterService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }];
      };

      ToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ToasterService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\kree\Documents\Projects\Kohaku\src\main.ts */
      "./src/main.ts");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** stream (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map