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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"login-form\">\n    <ion-list-header>Verified Users</ion-list-header>\n    <ion-list>\n      <ion-item *ngFor=\"let item of user;\">\n        <ion-title>\n          {{item.email}}\n        </ion-title>\n        <ion-title>\n          {{item.names}}\n        </ion-title>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>";
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

      var ReportPageModule = function ReportPageModule() {
        _classCallCheck(this, ReportPageModule);
      };

      ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"]],
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

      var ReportPage = /*#__PURE__*/function () {
        function ReportPage(api) {
          _classCallCheck(this, ReportPage);

          this.api = api;
        }

        _createClass(ReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.api.get_all_users().subscribe(function (data) {
              if (data.status == 0) {
                console.log(data.data);
                _this.user = data.data;
              } else {}
            }, function (error) {});
          }
        }]);

        return ReportPage;
      }();

      ReportPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
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