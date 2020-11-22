(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"layer\">\n\n  <ion-row  class=\"booking-form \">\n    <ion-header>\n      <ion-segment>\n        <ion-segment-button (click)=\"filterBy('v')\" value=\"Verified\">\n          <ion-label>Verified users</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"filterBy('n')\" value=\"Non-Verified\">\n          <ion-label>Non-Verified users</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"filterBy('a')\" value=\"all\">\n          <ion-label>All users</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      \n      <ion-searchbar [(ngModel)]=\"searchText\" (ngModelChange)=\"searcher()\" showCancelButton=\"focus\"></ion-searchbar>\n    </ion-header>\n  </ion-row>\n\n  <div class=\"booking-form\">\n    <ion-list-header>\n      <ion-item lines=\"none\">\n        Users ({{count}})\n        <ion-icon (click)=\"download_report()\" name=\"save-outline\" slot=\"end\"></ion-icon>\n      </ion-item>\n      \n\n    </ion-list-header>\n    <ion-row (click) = \"userAlert(item.email, item.uuid)\" style=\"border-bottom: groove;\" *ngFor=\"let item of users;\">\n      <ion-col >\n        <ion-item lines=\"none\">\n          <ion-icon *ngIf=\"item.isVerified == 1\" color=\"success\" slot=\"\" name=\"checkmark-circle-outline\"></ion-icon>\n          <ion-icon *ngIf=\"item.isVerified == 0\" color=\"danger\" slot=\"\" name=\"close-circle-outline\"></ion-icon>\n          <ion-title style=\"text-align: left;font-size: medium;\">{{item.email}}</ion-title>\n        </ion-item>\n      </ion-col>\n\n      <ion-col >\n        <ion-item lines=\"none\">\n          <ion-title style=\"text-align: center;font-size: medium;\">{{item.created_at}}</ion-title>\n        </ion-item>\n      </ion-col>\n\n      <ion-col >\n        <ion-item lines=\"none\">\n          <ion-title style=\"text-align: right;font-size: medium;\">{{item.role}}</ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/report/report-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "./src/app/report/report.page.ts");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/report/report-routing.module.ts");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "./src/app/report/report.page.ts");







let ReportPageModule = class ReportPageModule {
};
ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"]
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
    })
], ReportPageModule);



/***/ }),

/***/ "./src/app/report/report.page.scss":
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/report/report.page.ts":
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/services/toaster.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/excel.service */ "./src/services/excel.service.ts");








let ReportPage = class ReportPage {
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
            this.api.get_all_users().subscribe(data => {
                if (data.status == 0) {
                    this.users = data.data;
                    this.count = this.users.length;
                }
                else {
                    this.presentAlert(data.msg);
                }
            }, error => {
                this.presentAlert(error.message);
            });
        }
    }
    init() {
        this.api.get_all_verrified_users().subscribe(data => {
            if (data.status == 0) {
                this.verifiedUsers = data.data;
            }
            else {
                this.presentAlert(data.msg);
            }
        }, error => {
            this.presentAlert(error.message);
        });
        this.api.get_all_nonverrified_users().subscribe(data => {
            if (data.status == 0) {
                this.nonVerifiedUsers = data.data;
            }
            else {
                this.presentAlert(data.msg);
            }
        }, error => {
            this.presentAlert(error.message);
        });
        this.api.get_all_users().subscribe(data => {
            if (data.status == 0) {
                this.all_users = data.data;
            }
            else {
                this.presentAlert(data.msg);
            }
        }, error => {
            this.presentAlert(error.message);
        });
        this.searcher();
    }
    searcher() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.searchText);
            this.api.get_all_users_by_search(this.searchText).subscribe(data => {
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
        let str = "email, created_at, user_role\n";
        for (let index = 0; index < this.users.length; index++) {
            str += this.users[index].email + ',' + this.users[index].created_at + ',' + this.users[index].role + '\n';
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
ReportPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
    { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
];
ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report.page.scss */ "./src/app/report/report.page.scss")).default]
    })
], ReportPage);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2015.js.map