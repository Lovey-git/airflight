(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen id=\"main\">\r\n    <ion-grid>\r\n        <div *ngIf=\"current_page_type=='flight'\" class=\"login-form\">\r\n            <ion-col>\r\n                <div class=\"txt-center\">\r\n                    <ion-icon style=\"font-size: 55px;\" name=\"airplane-outline\"></ion-icon>\r\n                    <br>\r\n                    <strong>Flight</strong>\r\n                    <br>\r\n                    <ion-label color=\"dark\">You don't Always need wings to fly!, we got that covered </ion-label>\r\n                    <br>\r\n                    <br>\r\n                </div>\r\n                <form [formGroup]=\"flightForm\" (ngSubmit)=\"proceed()\">\r\n\r\n                    <ion-item>\r\n                        <ion-label>From:</ion-label>\r\n                        <ion-select formControlName=\"from\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                            <ion-select-option *ngFor=\"let item of destination_list;\" [disabled]=\"item == selectedTo\" (click)=\"getSelectedFromLocation(item)\">{{item}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                        <ion-label>To:</ion-label>\r\n                        <ion-select formControlName=\"to\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                            <ion-select-option *ngFor=\"let item of destination_list;\" [disabled]=\"item == selectedFrom\" (click)=\"getSelectedToDestination(item)\">{{item}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                        <ion-label>Flight Type:</ion-label>\r\n                        <ion-select formControlName=\"flight_type\" (ionChange)=\"selectedFlightType($event)\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                            <ion-select-option [disabled]=\"\">Round Trip</ion-select-option>\r\n                            <ion-select-option [disabled]=\"\">One Way Trip</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                        <ion-label>Departure Date:</ion-label>\r\n                        <ion-item>\r\n                            <ion-datetime formControlName=\"depart\" (ionChange)=\"selectedDepatDate($event)\" displayFormat=\"MMMM/DD/YYYY\" [min]=\"minDate\" [max]=\"maxDate\">\r\n                            </ion-datetime>\r\n                        </ion-item>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"flight_type != 'One Way Trip'\">\r\n                        <ion-label>Return Date:</ion-label>\r\n                        <ion-item>\r\n                            <ion-datetime formControlName=\"return\" displayFormat=\"MMMM/DD/YYYY\" [min]=\"minDate\" [max]=\"maxDate\" style=\"color: primary;\"></ion-datetime>\r\n                        </ion-item>\r\n                    </ion-item>\r\n\r\n\r\n\r\n                    <ion-item>\r\n                        <ion-label> Departure Time:</ion-label>\r\n                        <ion-select formControlName=\"time_slot\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                            <ion-select-option [disabled]=\"hours >= 6 \">06:00 am</ion-select-option>\r\n                            <ion-select-option [disabled]=\"hours >= 8 \">08:00 am</ion-select-option>\r\n                            <ion-select-option [disabled]=\"hours >= 12 \">12:00 am</ion-select-option>\r\n                            <ion-select-option [disabled]=\"hours >= 16 \">16:00 pm</ion-select-option>\r\n                            <ion-select-option [disabled]=\"hours >= 18 \">18:00 pm</ion-select-option>\r\n                            <ion-select-option [disabled]=\"hours >= 20 \">20:00 pm</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"flight_type != 'One Way Trip'\">\r\n                        <ion-label>Return Time:</ion-label>\r\n                        <ion-select formControlName=\"return_time_slot\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                            <ion-select-option>06:00 am</ion-select-option>\r\n                            <ion-select-option>08:00 am</ion-select-option>\r\n                            <ion-select-option>12:00 am</ion-select-option>\r\n                            <ion-select-option>16:00 pm</ion-select-option>\r\n                            <ion-select-option>18:00 pm</ion-select-option>\r\n                            <ion-select-option>20:00 pm</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Class:</ion-label>\r\n                        <ion-select formControlName=\"_class\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                            <ion-select-option>First Class</ion-select-option>\r\n                            <ion-select-option>Economy Class</ion-select-option>\r\n                            <ion-select-option>Business Class</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            Adults:\r\n                        </ion-label>\r\n                        <ion-label>{{adults}}</ion-label>\r\n                        <ion-range [(ngModel)]=\"adults\" formControlName=\"adults\" min=\"1\" max=\"10\" step=\"1\" snaps=\"true\" color=\"secondary\">\r\n                            <ion-icon (click)=\"removeAdult()\" size=\"small\" slot=\"start\" name=\"remove\"></ion-icon>\r\n                            <ion-icon (click)=\"addAdult()\" slot=\"end\" name=\"add\"></ion-icon>\r\n                        </ion-range>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            Children :\r\n                        </ion-label>\r\n                        <ion-label>{{children}}</ion-label>\r\n                        <ion-range [(ngModel)]=\"children\" formControlName=\"children\" min=\"0\" max=\"10\" step=\"1\" snaps=\"true\" color=\"secondary\">\r\n                            <ion-icon (click)=\"removeChildren()\" size=\"small\" slot=\"start\" name=\"remove\"></ion-icon>\r\n                            <ion-icon (click)=\"addChildren()\" slot=\"end\" name=\"add\"></ion-icon>\r\n                        </ion-range>\r\n                    </ion-item>\r\n                    <ion-button type=\"submit\" color=\"primary\">Proceed</ion-button>\r\n                </form>\r\n            </ion-col>\r\n        </div>\r\n\r\n        <div *ngIf=\"current_page_type=='meals'\" class=\"login-form\">\r\n            <ion-col>\r\n                <div class=\"txt-center\">\r\n                    <ion-icon style=\"font-size: 55px;\" name=\"fast-food-outline\"></ion-icon>\r\n                    <br>\r\n                    <strong>Meals</strong>\r\n                    <br>\r\n                    <ion-label color=\"dark\">Let's Dine aboard!</ion-label>\r\n                    <br>\r\n                    <br>\r\n                </div>\r\n                <form [formGroup]=\"flightForm\" (ngSubmit)=\"proceed()\">\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-button class=\"txt-center\" (click)=\"showPickerDepart()\" color=\"secondary\">\r\n                                <ion-icon name=\"add\"></ion-icon>\r\n                                Choose a Meal or beverage\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-list-header>\r\n                        <ion-label><strong>Selected Depart Meals</strong></ion-label>\r\n                    </ion-list-header>\r\n                    <ion-list *ngFor=\"let item of selectedMealsDepart;let i = index\">\r\n                        <ion-item lines=\"none\" slot=\"start\">\r\n                            <ion-label slot=\"start\" readonly>{{item.meal.text}}</ion-label>\r\n                            <ion-item lines=\"none\" slot=\"end\">\r\n                                <ion-label>\r\n                                    Qty: {{item.qty.value}}\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-item>\r\n                    </ion-list>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-button class=\"txt-center\" (click)=\"showPickerReturn()\" color=\"secondary\">\r\n                                <ion-icon name=\"add\"></ion-icon>\r\n                                Choose a Meal or beverage\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-list-header>\r\n                        <ion-label><strong>Selected Return Meals</strong></ion-label>\r\n                    </ion-list-header>\r\n                    <ion-list *ngFor=\"let item of selectedMealsReturn;let i = index\">\r\n                        <ion-item lines=\"none\" slot=\"start\">\r\n                            <ion-label slot=\"start\" readonly>{{item.meal.text}}</ion-label>\r\n                            <ion-item lines=\"none\" slot=\"end\">\r\n                                <ion-label>\r\n                                    Qty: {{item.qty.value}}\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-item>\r\n                    </ion-list>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-button class=\"txt-center\" type=\"submit\" routerLink=\"/home\" color=\"primary\">Proceed</ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-button (click)=\"restMeals()\" class=\"txt-center\" color=\"warning\">Reset</ion-button>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-button (click)=\"cancelOrder()\" color=\"danger\">\r\n                                Cancel Booking\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                </form>\r\n            </ion-col>\r\n        </div>\r\n\r\n        <div *ngIf=\"current_page_type=='booking'\" class=\"booking-form\">\r\n            <div class=\"txt-center\">\r\n                <br>\r\n                <ion-icon style=\"font-size: 55px;\" name=\"document-text-outline\"></ion-icon>\r\n                <br>\r\n                <strong>Booking Details</strong>\r\n                <br>\r\n                <ion-label color=\"dark\">Almost There!</ion-label>\r\n            </div>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <form [formGroup]=\"bookingForm\" (ngSubmit)=\"proceed()\">\r\n                        <ion-list-header>\r\n                            <ion-label><strong>Flight Details</strong></ion-label>\r\n                        </ion-list-header>\r\n                        <ion-list>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">From: </ion-label>\r\n                                <ion-label slot=\"\">{{from}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">To: </ion-label>\r\n                                <ion-label slot=\"\">{{to}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Depart: </ion-label>\r\n                                <ion-label slot=\"\">{{depart}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Return: </ion-label>\r\n                                <ion-label slot=\"\">{{return}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Class: </ion-label>\r\n                                <ion-label slot=\"\">{{_class}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Adults: </ion-label>\r\n                                <ion-label slot=\"\">{{adults}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Children (under 12): </ion-label>\r\n                                <ion-label slot=\"\">{{children}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Departure Time: </ion-label>\r\n                                <ion-label slot=\"\">{{time_slot}}</ion-label>\r\n                            </ion-item>\r\n                            <ion-item lines='full'>\r\n                                <ion-label slot=\"start\">Return Time: </ion-label>\r\n                                <ion-label slot=\"\">{{return_time_slot}}</ion-label>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                    </form>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"booking_Depart_Meals || booking_Return_Meals\">\r\n                    <form [formGroup]=\"bookingForm\" (ngSubmit)=\"proceed()\">\r\n                        <ion-list-header>\r\n                            <ion-label><strong>Selected Depart Meals</strong></ion-label>\r\n                        </ion-list-header>\r\n                        <ion-list *ngFor=\"let item of  booking_Depart_Meals;let i = index\">\r\n                            <ion-item lines=\"none\" slot=\"start\">\r\n                                <ion-label slot=\"start\" readonly>{{item.meal.text}}</ion-label>\r\n                                <ion-item lines=\"none\" slot=\"end\">\r\n                                    <ion-label>\r\n                                        Qty: {{item.qty.value}}\r\n                                    </ion-label>\r\n                                    <!-- <ion-icon (click)=\"removeItem(i)\" style=\"font-size: 30px;\" name=\"close-outline\"></ion-icon> -->\r\n                                </ion-item>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                    </form>\r\n\r\n                    <form [formGroup]=\"bookingForm\" (ngSubmit)=\"proceed()\">\r\n                        <ion-list-header>\r\n                            <ion-label><strong>Selected  Return Meals</strong></ion-label>\r\n                        </ion-list-header>\r\n                        <ion-list *ngFor=\"let item of  booking_Return_Meals;let i = index\">\r\n                            <ion-item lines=\"none\" slot=\"start\">\r\n                                <ion-label slot=\"start\" readonly>{{item.meal.text}}</ion-label>\r\n                                <ion-item lines=\"none\" slot=\"end\">\r\n                                    <ion-label>\r\n                                        Qty: {{item.qty.value}}\r\n                                    </ion-label>\r\n                                    <!-- <ion-icon (click)=\"removeItem(i)\" style=\"font-size: 30px;\" name=\"close-outline\"></ion-icon> -->\r\n                                </ion-item>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                    </form>\r\n\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <div class=\"txt-center\">\r\n                        <strong>\r\n              Flight total: R{{flight_price}}\r\n            </strong>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"booking_Depart_Meals || booking_Return_Meals\">\r\n                    <div class=\"txt-center\">\r\n                        <strong>\r\n              Meals total: R{{meal_tot}}\r\n            </strong>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-button (click)=\"booking()\">\r\n                        Confirm and Book\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button (click)=\"cancelOrder()\" color=\"danger\">\r\n                        Cancel Booking\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"current_page_type=='payment'\" class=\"login-form\">\r\n            <ion-col>\r\n                <div class=\"txt-center\">\r\n                    <ion-icon style=\"font-size: 55px;\" name=\"card-outline\"></ion-icon>\r\n                    <br>\r\n                    <strong>Payment</strong>\r\n                    <br>\r\n                    <ion-label color=\"dark\">Well we can't all fly for free!</ion-label>\r\n                    <br>\r\n                    <br>\r\n                    <img src=\"../../assets/download2.jpg\" />\r\n                    <br>\r\n                </div>\r\n                <form [formGroup]=\"paymentForm\">\r\n\r\n                    <ion-col>\r\n                        <ion-label>Card Number:</ion-label>\r\n                        <ion-input mask=\"(999) 999-9999\" placeholder=\"xxxx-xxxx-xxxx-xxxx\" style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\" formControlName=\"card_number\" type=\"text\"></ion-input>\r\n                    </ion-col>\r\n\r\n                    <ion-col>\r\n                        <ion-label>Card holders name:</ion-label>\r\n                        <ion-input autocomplete=\"cc-name\" formControlName=\"card_holder\" type=\"text\"></ion-input>\r\n                    </ion-col>\r\n\r\n                    <ion-col>\r\n                        <ion-item lines=\"none\">\r\n                            <ion-label slot=\"start\">Expiration Date</ion-label>\r\n                            <ion-label slot=\"end\">CVV</ion-label>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-datetime style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\" formControlName=\"card_expYear\" placeholder=\"YYYY\" displayFormat=\"YYYY\" min=\"2020\" max=\"2026\">\r\n                            </ion-datetime>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-datetime style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\" formControlName=\"card_expMonth\" [min]=\"2020-12-01\" placeholder=\"MM\" displayFormat=\"MM\"></ion-datetime>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-input style=\"text-align: center;border: 1px solid #3880ff;border-radius: 5px;\" formControlName=\"card_cvv\" type=\"number\" placeholder=\"CVV\" max=\"3\"></ion-input>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-col>\r\n                        <ion-button class=\"txt-center\" (click)=\"pay()\" color=\"primary\">Submit</ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button (click)=\"cancelOrder()\" color=\"danger\">\r\n                            Cancel Booking\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </form>\r\n            </ion-col>\r\n        </div>\r\n\r\n\r\n    </ion-grid>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.highlight {\n  background-color: #FFFF33 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkYzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIl19 */");

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
        //check if time slot is available
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
        this.destination_list = ["OR Tambo", "PE International", "Cape Town International", "King Shaka"];
        this.meals_prices = [50.00, 80.0, 60.0, 80.0, 50.0, 55.0, 30.0, 120, 80.0, 100, 70, 60.0, 82.0, 50.0, 20.0, 50.0, 40.0, 30.0, 30.0];
        this.meals = ["Fruit Platter", "Tofu and salad", "Tomato/Butternut soup", "Beef/Chicken Keebabs in sauce", "Assorted nuts and cheese", "Bacon and egg toast", "Chicken mayo sarmie",
            "Oatmeal + mik", " Beef lasgna + green salad", " Meatballs and pasta", "Pap/Rice, chicken +1 choice salad", "Nuggets", "Half cheesecake",
            "Malva pudding", "Wine by the glass", "440ml fizzy drink", "Hot drinks", "Fruit juice", "Water"];
        this.selectedMealsDepart = new Array();
        this.selectedMealsReturn = new Array();
        this.Destinations = this.d.destination_list;
        this.indexDepart = 0;
        this.indexReturn = 0;
        this.meal_tot = 0;
        this.flight_price = 0;
        //flight type
        this.flight_type = "One Way Trip";
        this.children = 0;
        this.adults = 1;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_8__().add(0, 'd').format().toString();
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_8__().add(60, 'd').format().toString();
        this.day = this.minDate;
        this.current_page = localStorage.getItem('current_page');
        this.current_page_type = localStorage.getItem('current_page_type');
        this.mask = {
            guide: true,
            showMask: true,
            mask: [/\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]
        };
        this.flightForm = this.fb.group({
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            depart: [this.minDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            return: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            children: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            adults: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            _class: ['Economy Class', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time_slot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            flight_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            return_time_slot: (this.flight_type == 'Round Trip') ? ['-', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] : ['One Way Trip', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
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
    selectedFlightType(ev) {
        this.flight_type = ev.detail.value;
        if (this.flight_type == 'One Way Trip') {
            this.flightForm.get('return').setValue('');
            this.flightForm.get('return_time_slot').setValue('');
        }
        else {
        }
    }
    selectedDepatDate(ev) {
        this.hours = ev.detail.value;
        console.log(ev.detail.value);
    }
    ngOnInit() {
        this.hours = new Date().getHours();
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
            var DepartMeals = JSON.parse(localStorage.getItem('DepartMeals'));
            var ReturnMeals = JSON.parse(localStorage.getItem('ReturnMeals'));
            this.booking_Depart_Meals = DepartMeals;
            this.booking_Return_Meals = ReturnMeals;
            this.to = localStorage.getItem('to');
            this.from = localStorage.getItem('from');
            this.depart = localStorage.getItem('depart').substr(0, 10);
            this.return = localStorage.getItem('return').substr(0, 10);
            this.adults = Number(localStorage.getItem('adults'));
            this.children = Number(localStorage.getItem('children'));
            this._class = localStorage.getItem('_class');
            this.time_slot = localStorage.getItem('time_slot');
            this.flight_type = localStorage.getItem('flight_type');
            this.return_time_slot = localStorage.getItem('return_time_slot');
            this.meal_tot = 0;
            for (let index = 0; index < DepartMeals.length; index++) {
                this.meal_tot += DepartMeals[index].meal.value * DepartMeals[index].qty.value;
            }
            for (let index = 0; index < ReturnMeals.length; index++) {
                this.meal_tot += ReturnMeals[index].meal.value * ReturnMeals[index].qty.value;
            }
            //["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR", "Dubai DUB"];
            if (this.to == "Cape Town International") {
                this.flight_price = 1418.00;
            }
            if (this.to == "PE International") {
                this.flight_price = 1849.00;
            }
            if (this.to == "King Shaka") {
                this.flight_price = 948.00;
            }
            if (this.to == "OR Tambo") {
                this.flight_price = 1348.00;
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
    addAdult() {
        if (this.adults < 10) {
            this.adults += 1;
        }
    }
    removeAdult() {
        if (this.adults > 1) {
            this.adults -= 1;
        }
    }
    addChildren() {
        if (this.children < 10) {
            this.children += 1;
        }
    }
    removeChildren() {
        if (this.children > 0) {
            this.children -= 1;
        }
    }
    proceed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d1 = new Date(String(this.flightForm.get('depart').value).substr(0, 10));
            var d2 = new Date(String(this.flightForm.get('return').value).substr(0, 10));
            console.log((this.flightForm.get('return_time_slot').value > this.flightForm.get('time_slot').value));
            var person = (Number(this.flightForm.get('adults').value) + Number(this.flightForm.get('children').value));
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
                else if (this.flightForm.get('flight_type').value == '') {
                    this.presentAlert('Choose flight type');
                }
                else if (this.flightForm.get('_class').value == '') {
                    this.presentAlert('Choose a class');
                }
                else if (this.flightForm.get('return').value == '' && this.flightForm.get('flight_type').value != 'One Way Trip') {
                    this.presentAlert('Choose return date');
                }
                else if (this.flightForm.get('time_slot').value == '') {
                    this.presentAlert('Choose depart time slot');
                }
                else if (this.flightForm.get('return_time_slot').value == '' && this.flightForm.get('flight_type').value != 'One Way Trip') {
                    this.presentAlert('Choose return time slot');
                }
                else if (person > 11) {
                    this.presentAlert('Both adults and children combine must not exceed 10');
                }
                else if (this.flightForm.get('time_slot').value == '06:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 6) {
                    this.presentAlert('flight for 06:00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '08:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 8) {
                    this.presentAlert('flight for 08:00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '12:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 12) {
                    this.presentAlert('flight for 12H00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '16:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 16) {
                    this.presentAlert('flight for 16H00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '18:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 18) {
                    this.presentAlert('flight for 18H00 am is nolonger available, Choose another time slot');
                }
                else if (this.flightForm.get('time_slot').value == '20:00 pm' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 20) {
                    this.presentAlert('All flights for today are nolonger available, Choose another Departure Date');
                }
                else if (this.flightForm.get('depart').value && (d1 > d2)) {
                    this.presentAlert('Return date cannot be less than the depart date ');
                }
                else if (((this.flightForm.get('depart').value).substr(0, 10) == (this.flightForm.get('return').value).substr(0, 10)) && (this.flightForm.get('return_time_slot').value < this.flightForm.get('time_slot').value)) {
                    this.presentAlert('Depart time must be less than the Return time ');
                }
                else {
                    localStorage.setItem('current_page_type', 'meals');
                    if (this.flight_type == 'One Way Trip') {
                        localStorage.setItem('return', "One Way");
                        localStorage.setItem('return_time_slot', "One Way");
                    }
                    else {
                        localStorage.setItem('return', this.flightForm.get('return').value);
                        localStorage.setItem('return_time_slot', this.flightForm.get('return_time_slot').value);
                    }
                    localStorage.setItem('from', this.flightForm.get('from').value);
                    localStorage.setItem('to', this.flightForm.get('to').value);
                    localStorage.setItem('depart', this.flightForm.get('depart').value);
                    localStorage.setItem('_class', this.flightForm.get('_class').value);
                    localStorage.setItem('adults', this.flightForm.get('adults').value);
                    localStorage.setItem('children', this.flightForm.get('children').value);
                    localStorage.setItem('time_slot', this.flightForm.get('time_slot').value);
                    localStorage.setItem('flight_type', this.flightForm.get('flight_type').value);
                    window.location.reload();
                }
            if (this.current_page_type == 'meals') {
                localStorage.setItem('current_page_type', 'booking');
                localStorage.setItem('DepartMeals', JSON.stringify(this.selectedMealsDepart));
                localStorage.setItem('ReturnMeals', JSON.stringify(this.selectedMealsReturn));
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
    showPickerDepart() {
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
                            if (this.selectedMealsDepart) {
                                this.selectedMealsDepart[this.indexDepart] = value;
                                this.selectedMealsDepart[this.indexDepart][0] = this.meals_prices[value.id];
                                console.log(this.selectedMealsDepart[this.indexDepart]);
                                this.indexDepart++;
                            }
                            else {
                                console.log(this.indexDepart);
                                console.log(value.qty.value);
                                this.selectedMealsDepart[this.indexDepart] = value;
                                console.log(this.selectedMealsDepart[this.indexDepart]);
                                this.indexDepart++;
                            }
                            //this.selectedMealsDepart[this.selectedMealsDepart.length]
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
    showPickerReturn() {
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
                            if (this.selectedMealsReturn) {
                                this.selectedMealsReturn[this.indexReturn] = value;
                                this.selectedMealsReturn[this.indexReturn][0] = this.meals_prices[value.id];
                                console.log(this.selectedMealsReturn[this.indexReturn]);
                                this.indexReturn++;
                            }
                            else {
                                console.log(this.indexReturn);
                                console.log(value.qty.value);
                                this.selectedMealsReturn[this.indexReturn] = value;
                                console.log(this.selectedMealsReturn[this.indexReturn]);
                                this.indexReturn++;
                            }
                            //this.selectedMealsReturn[this.selectedMealsReturn.length]
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
    getSelectedFromLocation(dest) {
        //return localStorage.getItem('from');
        //return 'PE International';
        this.selectedFrom = dest;
        console.log(this.selectedFrom);
    }
    getSelectedToDestination(dest) {
        //return localStorage.getItem('to');
        this.selectedTo = dest;
        console.log(this.selectedTo);
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
        let index = this.selectedMealsDepart.indexOf(i, 0);
        this.selectedMealsDepart.splice(index, 1);
        this.selectedMealsDepart[i] = new Array();
        console.log(this.selectedMealsDepart);
    }
    removeItem1(i) {
        console.log(i);
        let index = this.selectedMealsReturn.indexOf(i, 0);
        this.selectedMealsReturn.splice(index, 1);
        this.selectedMealsReturn[i] = new Array();
        console.log(this.selectedMealsReturn);
    }
    restMeals() {
        window.location.reload();
    }
    cancelOrder() {
        this.current_page_type = 'flight';
        localStorage.removeItem('current_page_type');
        localStorage.removeItem('to');
        localStorage.removeItem('from');
        localStorage.removeItem('flight_type');
        localStorage.removeItem('depart');
        localStorage.removeItem('return');
        localStorage.removeItem('adults');
        localStorage.removeItem('children');
        localStorage.removeItem('meals');
        localStorage.removeItem('_class');
        localStorage.removeItem('time_slot');
        localStorage.removeItem('return_time_slot');
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
            console.log('do book');
            this.api.add_ticket(localStorage.getItem('from'), localStorage.getItem('to'), localStorage.getItem('flight_type'), localStorage.getItem('depart'), localStorage.getItem('return'), localStorage.getItem('adults'), localStorage.getItem('children'), 0, 0, localStorage.getItem('DepartMeals'), 
            //  localStorage.getItem('ReturnMeals'),
            localStorage.getItem('_class'), localStorage.getItem('amount'), String(localStorage.getItem('time_slot')).substr(0, 5), 
            // String(localStorage.getItem('return_time_slot')),
            localStorage.getItem('username')).subscribe(data => {
                if (data.status == 0) {
                    loading.dismiss();
                    this.toaster.successToast(data.msg);
                    localStorage.setItem('t_id', data.t_id);
                    this.doPay();
                }
                else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                    console.log(data.err);
                }
            }, error => {
                loading.dismiss();
                this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
            });
        });
    }
    pay() {
        console.log(String(this.card_cvv).length);
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
        else if (String(this.card_cvv).length > 4 || String(this.card_cvv).length < 3) {
            this.presentAlert('CVV number should be atleast 3 digits long in length and not greater than 4!');
        }
        else if (String(this.card_expYear).substr(0, 4) == '2020' && Number(String(this.card_expMonth).substr(5, 2)) < Number(this.minDate.substr(5, 2))) {
            this.presentAlert('card already expired!');
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
            console.log('do pay');
            this.api.add_user_payment(localStorage.getItem('t_id'), localStorage.getItem('amount'), this.card_number, this.card_cvv, this.card_expYear + '-' + this.card_expMonth).subscribe(data => {
                if (data.status == 0) {
                    loading.dismiss();
                    this.toaster.successToast(data.msg);
                    localStorage.setItem('current_page_type', 'flight');
                    localStorage.removeItem('current_page_type');
                    localStorage.removeItem('to');
                    localStorage.removeItem('from');
                    localStorage.removeItem('depart');
                    localStorage.removeItem('return');
                    localStorage.removeItem('flight_type');
                    localStorage.removeItem('adults');
                    localStorage.removeItem('children');
                    localStorage.removeItem('DepartMeals');
                    localStorage.removeItem('ReturnMeals'),
                        localStorage.removeItem('_class');
                    localStorage.removeItem('time_slot');
                    localStorage.removeItem('return_time_slot');
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
                this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
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