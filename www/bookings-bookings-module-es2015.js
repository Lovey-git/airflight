(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"layer\">\r\n\r\n  <ion-row  class=\"booking-form \">\r\n    <ion-header>      \r\n      <ion-searchbar [(ngModel)]=\"searchText\" (ngModelChange)=\"searcher()\" showCancelButton=\"focus\"></ion-searchbar>\r\n    </ion-header>\r\n  </ion-row>\r\n\r\n  <div class=\"booking-form\">\r\n    <ion-list-header>\r\n      <ion-item lines=\"none\">\r\n        Bookings ({{count}})\r\n        <ion-icon (click)=\"download_report_alert()\" name=\"save-outline\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      \r\n    </ion-list-header>\r\n    <ion-row  style=\"border-bottom: groove;\" *ngFor=\"let item of users;\">\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-icon *ngIf=\"item.isVerified == 1\" color=\"success\" slot=\"\" name=\"checkmark-circle-outline\"></ion-icon>\r\n          <ion-title style=\"text-align: left;font-size: medium;\">{{item.destination}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: center;font-size: medium;\">Tickets: <ion-badge color=\"tertiary\">{{item.tickets}}</ion-badge></ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: right;font-size: medium;\">R {{item.tot_amt}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col >\r\n        <ion-item lines=\"none\">\r\n          <ion-title style=\"text-align: right;font-size: medium;\">{{item.depart_date}}</ion-title>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/bookings/bookings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BookingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function() { return BookingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ "./src/app/bookings/bookings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings-routing.module */ "./src/app/bookings/bookings-routing.module.ts");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"]
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })
], BookingsPageModule);



/***/ }),

/***/ "./src/app/bookings/bookings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/bookings/bookings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/services/toaster.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/excel.service */ "./src/services/excel.service.ts");








let BookingsPage = class BookingsPage {
    constructor(api, authService, alertCtrl, loadingCtrl, navCtrl, router, toaster, excelService) {
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.authService.isLoggedin() == false || localStorage.getItem('ur') != 'admin') {
            this.router.navigateByUrl('home');
        }
        else {
            this.init();
        }
    }
    init() {
        this.searcher();
    }
    searcher() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.searchText);
            this.api.get_all_bookings(this.searchText).subscribe(data => {
                if (data.status == 0) {
                    this.users = data.data;
                    this.count = data.data.length;
                }
                else {
                    this.presentAlert(data.msg);
                }
            }, error => {
                this.presentAlert(error.message);
            });
        });
    }
    filterBy(ev) {
        if (ev == 'v') {
            this.users = this.verifiedUsers;
            this.count = this.verifiedUsers.length;
        }
        else if (ev == 'n') {
            this.users = this.nonVerifiedUsers;
            this.count = this.nonVerifiedUsers.length;
        }
        else if (ev == 'a') {
            this.users = this.all_users;
            this.count = this.all_users.length;
        }
    }
    download_report() {
        let str = "destination, tickets, tot_amt, depart_date\n";
        for (let index = 0; index < this.users.length; index++) {
            str += this.users[index].tot_amt + ',' + this.users[index].tickets + ',' + this.users[index].tot_amt + ',' + this.users[index].depart_date + '\n';
        }
        const link = document.createElement('a');
        const blob = new Blob([str], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        link.setAttribute('target', '_self');
        link.setAttribute('href', url);
        link.setAttribute('download', `report.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    download_xlsx() {
        let data = this.users;
        this.excelService.exportAsExcelFile(data, 'report');
    }
    download_report_alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Air Food ✈️',
                subHeader: 'Download Report',
                message: 'Save Report as ?',
                buttons: [
                    {
                        text: 'csv',
                        handler: () => {
                            this.download_report();
                        }
                    },
                    {
                        text: 'xlsx',
                        handler: () => {
                            this.download_xlsx();
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    downloadMyFile() {
        const link = document.createElement('a');
        link.setAttribute('target', '_self');
        link.setAttribute('href', 'http://localhost:8080/download/' + JSON.stringify(this.users));
        link.setAttribute('download', `Ticket.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
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
    userAlert(email, uuid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Air Food ✈️',
                subHeader: 'User :' + email,
                message: '',
                buttons: [
                    {
                        text: 'Register as Normal User',
                        role: 'Danger',
                        cssClass: 'secondary',
                        handler: () => {
                            this.register_admin(uuid, 'normal');
                        }
                    }, {
                        text: 'Register as Admin',
                        handler: () => {
                            this.register_admin(uuid, 'admin');
                        }
                    },
                    {
                        text: 'Delete user',
                        handler: () => {
                            this.delete_user(uuid);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }
                ]
            });
            yield alert.present();
        });
    }
    register_admin(uuid, ur) {
        this.api.register_as_admin(uuid, ur).subscribe(data => {
            if (data.status == 0) {
                this.toaster.successToast(data.msg);
                this.init();
            }
            else {
                this.presentAlert(data.msg);
            }
        }, error => {
            this.presentAlert(error.message);
        });
    }
    delete_user(uuid) {
        this.api.remove_user(uuid).subscribe(data => {
            if (data.status == 0) {
                this.toaster.successToast(data.msg);
                this.init();
                this.count -= 1;
            }
            else {
                this.presentAlert(data.msg);
            }
        }, error => {
            this.presentAlert(error.message);
        });
    }
};
BookingsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
    { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
];
BookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bookings.page.scss */ "./src/app/bookings/bookings.page.scss")).default]
    })
], BookingsPage);



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module-es2015.js.map