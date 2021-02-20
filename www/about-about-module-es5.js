(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-card class=\"booking-form\">\r\n    <ion-card-header>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card-title style=\"font-size: large;text-align: center;\">WELCOME TO AIRFOOD</ion-card-title>\r\n          <br>\r\n          <ion-card-title>ABOUT AIRFOOD </ion-card-title>\r\n          <ion-card-subtitle>\r\n            Airfood is synonymous with innovation and convenience as well as a full tummy of course. You need a quick\r\n            and effortless way to book? Don’t worry, we have your back. The safety and comfort of our guests is of\r\n            utmost importance to us. We endeavor to always keep our guests happy by offering pleasant flights at\r\n            affordable rates.\r\n          </ion-card-subtitle>\r\n          <br>\r\n\r\n          <br>\r\n          <ion-card-title>OUR MISSION </ion-card-title>\r\n          <ion-card-subtitle>\r\n            To globalize the online booking system with the priority of being the first choice in delivering quality\r\n            customer services. We aim to provide satisfaction for customers to book flights ticket along with their\r\n            desired meal.\r\n          </ion-card-subtitle>\r\n          <br>\r\n\r\n          <br>\r\n          <ion-card-title>OUR VISION </ion-card-title>\r\n          <ion-card-subtitle>\r\n            South-Africa’s leading airline.\r\n          </ion-card-subtitle>\r\n          <br>\r\n\r\n          <br>\r\n          <ion-card-title>OUR OBJECTIVE </ion-card-title>\r\n          <ion-card-subtitle>\r\n            <ul>\r\n              <li>Provide excellent customer services </li>\r\n              <li>Faster performance excellence </li>\r\n              <li>Cut costs</li>\r\n              <li>Customer satisfaction </li>\r\n            </ul>\r\n          </ion-card-subtitle>\r\n          <br>\r\n\r\n          <br>\r\n          <ion-card-title>OUR VALUES </ion-card-title>\r\n          <ion-card-subtitle>\r\n            <br>\r\n            <strong>Customer Focused</strong>\r\n            <br>\r\n            Striving to meet the unique needs of our customers. .\r\n            <br><br>\r\n            <strong>Integrity</strong> <br>\r\n\r\n            Practicing highest standards of ethical behavior in all our work and maintaining credibility by ensuring our\r\n            actions match our words.\r\n            <br><br>\r\n            <strong>Safety</strong> <br>\r\n\r\n            Living our safety philosophy by striving for zero safety incidents through risk management and adherence to\r\n            safety regulations at all times.\r\n            <br><br>\r\n            <strong>Excellence In Performance </strong> <br>\r\n\r\n            Setting goals beyond the best, reinforcing high quality performance standards and achieving excellence.\r\n            <br><br>\r\n            <strong>Valuing Our People</strong> <br>\r\n\r\n            Committing to their satisfaction, development, and well-being\r\n          </ion-card-subtitle>\r\n          <br>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-header>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/about/about-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/about/about-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function srcAppAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
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


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "./src/app/about/about.page.ts");

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/about/about.module.ts":
    /*!***************************************!*\
      !*** ./src/app/about/about.module.ts ***!
      \***************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
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


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-routing.module */
      "./src/app/about/about-routing.module.ts");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about.page */
      "./src/app/about/about.page.ts");

      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "./src/app/about/about.page.scss":
    /*!***************************************!*\
      !*** ./src/app/about/about.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/about/about.page.ts":
    /*!*************************************!*\
      !*** ./src/app/about/about.page.ts ***!
      \*************************************/

    /*! exports provided: AboutPage */

    /***/
    function srcAppAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AboutPage = /*#__PURE__*/function () {
        function AboutPage() {
          _classCallCheck(this, AboutPage);
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./about.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./about.page.scss */
        "./src/app/about/about.page.scss"))["default"]]
      })], AboutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=about-about-module-es5.js.map