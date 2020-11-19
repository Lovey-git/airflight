(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen id=\"main\">\n  <ion-grid>\n    <div *ngIf=\"current_page_type=='flight'\" class=\"login-form\">\n      <ion-col>\n        <div class=\"txt-center\">\n          <ion-icon style=\"font-size: 55px;\" name=\"airplane-outline\"></ion-icon>\n          <br>\n          <strong>Flight</strong>\n          <br>\n          <ion-label color=\"dark\">You don't Always need wings to fly!, we got that covered </ion-label>\n          <br>\n          <br>\n        </div>\n        <form [formGroup]=\"flightForm\" (ngSubmit)=\"proceed()\">\n\n          <ion-item>\n            <ion-label>From:</ion-label>\n            <ion-select formControlName=\"from\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n              <ion-select-option *ngFor=\"let item of destination_list;\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>To:</ion-label>\n            <ion-select formControlName=\"to\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n              <ion-select-option *ngFor=\"let item of destination_list;\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Depart:</ion-label>\n            <ion-item>\n              <ion-datetime formControlName=\"depart\" displayFormat=\"MMMM/DD/YYYY\" [min]=\"minDate\" [max]=\"maxDate\">\n              </ion-datetime>\n            </ion-item>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Return:</ion-label>\n            <ion-item>\n              <ion-datetime formControlName=\"return\" displayFormat=\"MMMM/DD/YYYY\" [min]=\"minDate\" [max]=\"maxDate\"\n                style=\"color: primary;\" placeholder=\"One Way\"></ion-datetime>\n            </ion-item>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Time Slot:</ion-label>\n            <ion-select formControlName=\"time_slot\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n              <ion-select-option>08:00 am</ion-select-option>\n              <ion-select-option>12:00 am</ion-select-option>\n              <ion-select-option>16:00 pm</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Class:</ion-label>\n            <ion-select formControlName=\"_class\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n              <ion-select-option>First Class</ion-select-option>\n              <ion-select-option>Economy Class</ion-select-option>\n              <ion-select-option>Business Class</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>\n              Adults:\n            </ion-label>\n            <ion-label>{{adults}}</ion-label>\n            <ion-range [(ngModel)]=\"adults\" formControlName=\"adults\" min=\"1\" max=\"10\" step=\"1\" snaps=\"true\"\n              color=\"secondary\">\n              <ion-icon size=\"small\" slot=\"start\" name=\"remove\"></ion-icon>\n              <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n            </ion-range>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>\n              Children :\n            </ion-label>\n            <ion-label>{{children}}</ion-label>\n            <ion-range [(ngModel)]=\"children\" formControlName=\"children\" min=\"0\" max=\"10\" step=\"1\" snaps=\"true\"\n              color=\"secondary\">\n              <ion-icon size=\"small\" slot=\"start\" name=\"remove\"></ion-icon>\n              <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n            </ion-range>\n          </ion-item>\n          <ion-button type=\"submit\" color=\"primary\">Proceed</ion-button>\n        </form>\n      </ion-col>\n    </div>\n\n    <div *ngIf=\"current_page_type=='meals'\" class=\"login-form\">\n      <ion-col>\n        <div class=\"txt-center\">\n          <ion-icon style=\"font-size: 55px;\" name=\"fast-food-outline\"></ion-icon>\n          <br>\n          <strong>Meals</strong>\n          <br>\n          <ion-label color=\"dark\">Let's Dine aboard!</ion-label>\n          <br>\n          <br>\n        </div>\n        <form [formGroup]=\"flightForm\" (ngSubmit)=\"proceed()\">\n          <ion-row>\n            <ion-col>\n              <ion-button class=\"txt-center\" (click)=\"showPicker()\" color=\"secondary\">\n                <ion-icon name=\"add\"></ion-icon>\n                Choose a Meal or beverage\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-list-header>\n            <ion-label><strong>Selected Meals</strong></ion-label>\n          </ion-list-header>\n          <ion-list *ngFor=\"let item of selectedMeals;let i = index\">\n            <ion-item lines=\"none\" slot=\"start\">\n              <ion-label slot=\"start\" readonly>{{item.meal.text}}</ion-label>\n              <ion-item lines=\"none\" slot=\"end\">\n                <ion-label>\n                  Qty: {{item.qty.value}}\n                </ion-label>\n              </ion-item>\n            </ion-item>\n          </ion-list>\n\n          <ion-row>\n            <ion-col>\n              <ion-button class=\"txt-center\" type=\"submit\" routerLink=\"/home\" color=\"primary\">Proceed</ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button (click)=\"restMeals()\" class=\"txt-center\" color=\"warning\">Reset</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button (click)=\"cancelOrder()\" color=\"danger\">\n                Cancel Booking\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </form>\n      </ion-col>\n    </div>\n\n    <div *ngIf=\"current_page_type=='booking'\" class=\"booking-form\">\n      <div class=\"txt-center\">\n        <br>\n        <ion-icon style=\"font-size: 55px;\" name=\"document-text-outline\"></ion-icon>\n        <br>\n        <strong>Booking Details</strong>\n        <br>\n        <ion-label color=\"dark\">Almost There!</ion-label>\n      </div>\n      <ion-row>\n        <ion-col>\n          <form [formGroup]=\"bookingForm\" (ngSubmit)=\"proceed()\">\n            <ion-list-header>\n              <ion-label><strong>Flight Details</strong></ion-label>\n            </ion-list-header>\n            <ion-list>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">From: </ion-label>\n                <ion-label slot=\"\">{{from}}</ion-label>\n              </ion-item>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">To: </ion-label>\n                <ion-label slot=\"\">{{to}}</ion-label>\n              </ion-item>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">Depart: </ion-label>\n                <ion-label slot=\"\">{{depart}}</ion-label>\n              </ion-item>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">Return: </ion-label>\n                <ion-label slot=\"\">{{return}}</ion-label>\n              </ion-item>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">Class: </ion-label>\n                <ion-label slot=\"\">{{_class}}</ion-label>\n              </ion-item>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">Adults: </ion-label>\n                <ion-label slot=\"\">{{adults}}</ion-label>\n              </ion-item>\n              <ion-item lines='full'>\n                <ion-label slot=\"start\">Children (under 12): </ion-label>\n                <ion-label slot=\"\">{{children}}</ion-label>\n              </ion-item><ion-item lines='full'>\n                <ion-label slot=\"start\">Departure Time: </ion-label>\n                <ion-label slot=\"\">{{time_slot}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </form>\n        </ion-col>\n        <ion-col *ngIf=\"booking_meals\">\n          <form [formGroup]=\"bookingForm\" (ngSubmit)=\"proceed()\">\n            <ion-list-header>\n              <ion-label><strong>Selected Meals</strong></ion-label>\n            </ion-list-header>\n            <ion-list *ngFor=\"let item of booking_meals;let i = index\">\n              <ion-item lines=\"none\" slot=\"start\">\n                <ion-label slot=\"start\" readonly>{{item.meal.text}}</ion-label>\n                <ion-item lines=\"none\" slot=\"end\">\n                  <ion-label>\n                    Qty: {{item.qty.value}}\n                  </ion-label>\n                  <!-- <ion-icon (click)=\"removeItem(i)\" style=\"font-size: 30px;\" name=\"close-outline\"></ion-icon> -->\n                </ion-item>\n              </ion-item>\n            </ion-list>\n          </form>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"txt-center\">\n            <strong>\n              Flight total: R{{flight_price}}\n            </strong>\n          </div>\n        </ion-col>\n        <ion-col *ngIf=\"booking_meals\">\n          <div class=\"txt-center\">\n            <strong>\n              Meals total: R{{meal_tot}}\n            </strong>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"booking()\">\n            Confirm and Book\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button (click)=\"cancelOrder()\" color=\"danger\">\n            Cancel Booking\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n    <div *ngIf=\"current_page_type=='payment'\" class=\"login-form\">\n      <ion-col>\n        <div class=\"txt-center\">\n          <ion-icon style=\"font-size: 55px;\" name=\"card-outline\"></ion-icon>\n          <br>\n          <strong>Payment</strong>\n          <br>\n          <ion-label color=\"dark\">Well we can't all fly for free!</ion-label>\n          <br>\n          <br>\n        </div>\n        <form [formGroup]=\"paymentForm\">\n\n          <ion-col>\n            <ion-label>Card Number:</ion-label>\n            <ion-input mask=\"0000 0000 0000 0000\" placeholder=\"xxxx-xxxx-xxxx-xxxx\"\n              style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\" formControlName=\"card_number\"\n              type=\"number\"></ion-input>\n          </ion-col>\n\n          <ion-col>\n            <ion-label>Card Holders:</ion-label>\n            <ion-input formControlName=\"card_holder\" type=\"text\"></ion-input>\n          </ion-col>\n\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-label slot=\"start\">Expiration Date</ion-label>\n              <ion-label slot=\"end\">CVV</ion-label>\n            </ion-item>\n          </ion-col>\n\n          <ion-row>\n            <ion-col>\n              <ion-datetime style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\"\n                formControlName=\"card_expYear\" placeholder=\"YYYY\" displayFormat=\"YYYY\" min=\"2015\" max=\"2026\">\n              </ion-datetime>\n            </ion-col>\n            <ion-col>\n              <ion-datetime style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\"\n                formControlName=\"card_expMonth\" placeholder=\"MM\" displayFormat=\"MM\"></ion-datetime>\n            </ion-col>\n            <ion-col>\n              <ion-input style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\"\n                formControlName=\"card_cvv\" type=\"number\" placeholder=\"CVV\" max=\"3\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-col>\n            <ion-button class=\"txt-center\" (click)=\"pay()\" color=\"primary\">Submit</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"cancelOrder()\" color=\"danger\">\n              Cancel Booking\n            </ion-button>\n          </ion-col>\n        </form>\n      </ion-col>\n    </div>\n\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.highlight {\n  background-color: #FFFF33 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjMzICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/services/toaster.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_lists_destination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/lists/destination */ "./src/providers/lists/destination.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");











let HomePage = class HomePage {
    constructor(router, fb, api, toaster, authService, alertCtrl, loadingCtrl, navCtrl, pickerController, d, app) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toaster = toaster;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.pickerController = pickerController;
        this.d = d;
        this.app = app;
        this.destination_list = ["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "George GEO", "Port Elizabeth PLZ", "Durban DUR", "East London EAS"];
        this.meals_prices = [50.00, 80.0, 60.0, 25.00, 80.0, 50.0, 60.0, 55.0, 30.0, 120, 80.0, 100, 70, 60.0, 82.0, 50.0, 20.0, 50.0, 40.0, 30.0, 30.0];
        this.meals = ["Fruit Platter", "Tofu and salad", "Tomato/Butternut soup", "fish and chips", "Beef/Chicken Keebabs in sauce", " Arsorted nuts and cheese", "bacon and egg toast", "chicken mayo sarmie", "chicken mayo sarmie",
            " oatmeal + mik", " Beef lasgna + green salad", " Meatballs and pasta", "Pap/Rice, chicken +1 choice salad", "nuggets", "half cheesecake",
            "Malva pudding", "wine by the glass", "440ml fizzy drink", "Hot drinks", "Fruit juice", "water"];
        this.selectedMeals = new Array();
        this.Destinations = this.d.destination_list;
        this.index = 0;
        this.meal_tot = 0;
        this.flight_price = 0;
        this.children = 0;
        this.adults = 1;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_8__().add(0, 'd').format().toString();
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_8__().add(60, 'd').format().toString();
        this.day = this.minDate;
        this.current_page = localStorage.getItem('current_page');
        this.current_page_type = localStorage.getItem('current_page_type');
        this.flightForm = this.fb.group({
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            depart: [this.minDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            return: ['One Way Trip', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            children: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            adults: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            _class: ['Economy Class', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time_slot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.mealsForm = this.fb.group({
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            depart: [this.minDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            return: ['One Way', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            children: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            adults: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.bookingForm = this.fb.group({
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            depart: [this.minDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            return: ['One Way', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            children: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            adults: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.paymentForm = this.fb.group({
            card_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            card_holder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            card_expMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            card_expYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            card_cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.isLogged = this.authService.isLoggedin();
        if (!localStorage.getItem('current_page')) {
            this.current_page = 'flight';
            localStorage.setItem('current_page', this.current_page);
        }
        if (!localStorage.getItem('current_page_type')) {
            this.current_page_type = 'flight';
            localStorage.setItem('current_page_type', this.current_page_type);
        }
        if (this.current_page_type == 'booking') {
            var meals = JSON.parse(localStorage.getItem('meals'));
            this.booking_meals = meals;
            this.to = localStorage.getItem('to');
            this.from = localStorage.getItem('from');
            this.depart = localStorage.getItem('depart').substr(0, 10);
            this.return = localStorage.getItem('return');
            this.adults = Number(localStorage.getItem('adults'));
            this.children = Number(localStorage.getItem('children'));
            this._class = localStorage.getItem('_class');
            this.time_slot = localStorage.getItem('time_slot');
            this.meal_tot = 0;
            for (let index = 0; index < meals.length; index++) {
                this.meal_tot += meals[index].meal.value * meals[index].qty.value;
            }
            //["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR", "Dubai DUB"];
            if (this.to == "Cape Town CPT") {
                this.flight_price = 1418;
            }
            if (this.to == "Bloemfontain BFN") {
                this.flight_price = 1968;
            }
            if (this.to == "Windhoek WDH") {
                this.flight_price = 1438;
            }
            if (this.to == "Port Elizabeth PLZ") {
                this.flight_price = 1849;
            }
            if (this.to == "Durban DUR") {
                this.flight_price = 948;
            }
            if (this.to == "George GEO") {
                this.flight_price = 1529;
            }
            if (this.to == "East London EAS") {
                this.flight_price = 1948;
            }
            if (this._class == 'Business') {
                this.flight_price = (this.flight_price * this.adults) + this.flight_price * this.children * .8;
                this.flight_price *= this.flight_price;
            }
            else {
                this.flight_price = (this.flight_price * this.adults) + this.flight_price * this.children * .8;
            }
        }
    }
    proceed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.current_page_type == 'flight')
                if (this.flightForm.get('from').value == '') {
                    this.presentAlert('Destination from : cannot be empty');
                }
                else if (this.flightForm.get('to').value == '') {
                    this.presentAlert('Destination to : cannot be empty');
                }
                else if (this.flightForm.get('from').value == this.flightForm.get('to').value) {
                    this.presentAlert('Destinations cannot be the same');
                }
                else if (this.flightForm.get('_class').value == '') {
                    this.presentAlert('Choose a class');
                }
                else if (this.flightForm.get('time_slot').value == '') {
                    this.presentAlert('Choose a time slot');
                }
                else if (this.flightForm.get('time_slot').value == '08H00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 8) {
                    this.presentAlert('flight for 08:00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '12:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 12) {
                    this.presentAlert('flight for 12H00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '16:00 pm' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 16) {
                    this.presentAlert('All flights for today are nolonger available, Choose another Departure Date');
                }
                else {
                    localStorage.setItem('current_page_type', 'meals');
                    localStorage.setItem('from', this.flightForm.get('from').value);
                    localStorage.setItem('to', this.flightForm.get('to').value);
                    localStorage.setItem('depart', this.flightForm.get('depart').value);
                    localStorage.setItem('return', this.flightForm.get('return').value);
                    localStorage.setItem('_class', this.flightForm.get('_class').value);
                    localStorage.setItem('adults', this.flightForm.get('adults').value);
                    localStorage.setItem('children', this.flightForm.get('children').value);
                    localStorage.setItem('time_slot', this.flightForm.get('time_slot').value);
                    window.location.reload();
                }
            if (this.current_page_type == 'meals') {
                localStorage.setItem('current_page_type', 'booking');
                localStorage.setItem('meals', JSON.stringify(this.selectedMeals));
                console.log(localStorage.getItem('meals'));
                window.location.reload();
            }
        });
    }
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Air Food ✈️',
                subHeader: 'Caution',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            if (this.selectedMeals) {
                                this.selectedMeals[this.index] = value;
                                this.selectedMeals[this.index][0] = this.meals_prices[value.id];
                                console.log(this.selectedMeals[this.index]);
                                this.index++;
                            }
                            else {
                                console.log(this.index);
                                console.log(value.qty.value);
                                this.selectedMeals[this.index] = value;
                                console.log(this.selectedMeals[this.index]);
                                this.index++;
                            }
                            //this.selectedMeals[this.selectedMeals.length]
                        }
                    }
                ],
                columns: [
                    {
                        name: 'meal',
                        options: this.getMealsOptions()
                    },
                    {
                        name: 'qty',
                        options: this.getQuantityOptions()
                    }
                ]
            };
            let picker = yield this.pickerController.create(options);
            picker.present();
        });
    }
    getMealsOptions() {
        let options = [];
        for (let x = 0; x < this.meals.length; x++) {
            options.push({ text: this.meals[x], value: this.meals_prices[x] });
        }
        return options;
    }
    getQuantityOptions() {
        let options = [];
        for (let index = 1; index < 10; index++) {
            options.push({ text: index, value: index });
        }
        return options;
    }
    removeItem(i) {
        console.log(i);
        let index = this.selectedMeals.indexOf(i, 0);
        this.selectedMeals.splice(index, 1);
        this.selectedMeals[i] = new Array();
        console.log(this.selectedMeals);
    }
    restMeals() {
        window.location.reload();
    }
    cancelOrder() {
        this.current_page_type = 'flight';
        localStorage.removeItem('current_page_type');
        localStorage.removeItem('to');
        localStorage.removeItem('from');
        localStorage.removeItem('depart');
        localStorage.removeItem('return');
        localStorage.removeItem('adults');
        localStorage.removeItem('children');
        localStorage.removeItem('meals');
        localStorage.removeItem('_class');
        localStorage.removeItem('time_slot');
        localStorage.removeItem('amount');
        this.app.openPage('Booking');
        window.location.reload();
    }
    ionViewWillEnter() {
        console.log(this.isLogged);
        this.isLogged = this.authService.isLoggedin();
        console.log(this.isLogged);
    }
    paymentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Card Details',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Name on card',
                        cssClass: 'specialClass',
                        attributes: {
                            inputmode: 'decimal'
                        }
                    },
                    {
                        name: 'cardNumber',
                        type: 'number',
                        max: 10,
                        placeholder: 'Card Number',
                        cssClass: 'specialClass',
                        attributes: {
                            inputmode: 'decimal'
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    booking() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.authService.isLoggedin()) {
                localStorage.setItem('current_page_type', 'payment');
                let amount = this.meal_tot + this.flight_price;
                localStorage.setItem('amount', amount + '');
                this.app.openPage('Payment');
                window.location.reload();
            }
            else {
                this.loginAlert();
            }
        });
    }
    loginAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Login!',
                message: '<strong>To proceed login to your account</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'login',
                        handler: () => {
                            this.router.navigateByUrl('login');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    doBook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.api.add_ticket(localStorage.getItem('from'), localStorage.getItem('to'), localStorage.getItem('depart'), localStorage.getItem('return'), localStorage.getItem('adults'), localStorage.getItem('children'), 0, 0, localStorage.getItem('meals'), localStorage.getItem('_class'), this.meal_tot + this.flight_price, String(localStorage.getItem('time_slot')).substr(0, 5)).subscribe(data => {
                if (data.status == 0) {
                    loading.dismiss();
                    this.toaster.successToast(data.msg);
                    localStorage.setItem('t_id', data.t_id);
                    this.doPay();
                }
                else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                }
            }, error => {
                loading.dismiss();
                this.presentAlert(error);
            });
        });
    }
    pay() {
        this.card_number = this.paymentForm.get('card_number').value;
        this.card_holder = this.paymentForm.get('card_holder').value;
        this.card_expMonth = this.paymentForm.get('card_expMonth').value;
        this.card_expYear = this.paymentForm.get('card_expYear').value;
        this.card_cvv = this.paymentForm.get('card_cvv').value;
        console.log(String(this.card_number).length);
        if (this.card_number == '' ||
            this.card_holder == '' ||
            this.card_expMonth == '' ||
            this.card_expYear == '' ||
            this.card_cvv == '') {
            this.presentAlert('Fill in all required fields!');
        }
        else if (String(this.card_number).length < 16 || String(this.card_number).length > 16) {
            this.presentAlert('card number should be 16 digits long!');
        }
        else if (this.api.validateName(this.card_holder)) {
            this.presentAlert('Invalid card holders name!');
        }
        else if (String(this.card_cvv).length > 4 || String(this.card_cvv).length < 2) {
            this.presentAlert('CVV number should be atleast 3 digits long in length and not greater than 4!');
        }
        else {
            this.doBook();
        }
    }
    downloadMyFile() {
        const link = document.createElement('a');
        link.setAttribute('target', '_self');
        link.setAttribute('href', 'https://kohaku-b.herokuapp.com/download/' + localStorage.getItem('uuid') + localStorage.getItem('t_id') + '.pdf');
        link.setAttribute('download', `Ticket.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    doPay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.api.add_user_payment(localStorage.getItem('t_id'), localStorage.getItem('amount'), this.card_number, this.card_cvv, this.card_expYear + '-' + this.card_expMonth).subscribe(data => {
                if (data.status == 0) {
                    loading.dismiss();
                    this.toaster.successToast(data.msg);
                    localStorage.setItem('current_page_type', 'payment');
                    localStorage.removeItem('current_page_type');
                    localStorage.removeItem('current_page_type');
                    localStorage.removeItem('to');
                    localStorage.removeItem('from');
                    localStorage.removeItem('depart');
                    localStorage.removeItem('return');
                    localStorage.removeItem('adults');
                    localStorage.removeItem('children');
                    localStorage.removeItem('meals');
                    localStorage.removeItem('_class');
                    localStorage.removeItem('time_slot');
                    localStorage.removeItem('amount');
                    this.downloadMyFile();
                    this.router.navigateByUrl('tickets');
                    this.app.openPage('Tickets');
                }
                else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                }
            }, error => {
                loading.dismiss();
                this.presentAlert(error);
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PickerController"] },
    { type: _providers_lists_destination__WEBPACK_IMPORTED_MODULE_9__["DestinationList"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map