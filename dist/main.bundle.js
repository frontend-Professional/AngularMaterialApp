webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<hzn-header></hzn-header>\n<router-outlet></router-outlet>\n<hzn-footer></hzn-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Horizon BCBS Doctor & Finder';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hzn-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materialmodule_material_module__ = __webpack_require__("../../../../../src/app/materialmodule/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/@ngui/map.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__doctor_profile_doctor_profile_component__ = __webpack_require__("../../../../../src/app/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialog_boxes_all_plans_dialog_all_plan_dialog_component__ = __webpack_require__("../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__doctor_profile_doctor_profile_component__["a" /* DoctorProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dialog_boxes_all_plans_dialog_all_plan_dialog_component__["a" /* AllPlanDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__materialmodule_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_7__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCnHvOe23VVXNvy7l-45Ze8N3ssNoDjZEI' })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* DoctorFinderService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__dialog_boxes_all_plans_dialog_all_plan_dialog_component__["a" /* AllPlanDialog */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor_profile_doctor_profile_component__ = __webpack_require__("../../../../../src/app/doctor-profile/doctor-profile.component.ts");


var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'profile/:docId', component: __WEBPACK_IMPORTED_MODULE_1__doctor_profile_doctor_profile_component__["a" /* DoctorProfileComponent */] },
    { path: '**', redirectTo: '/' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorFinderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorFinderService = (function () {
    function DoctorFinderService(http) {
        this.http = http;
    }
    DoctorFinderService.prototype.getDoctorData = function () {
        return this.http.get('assets/data/doctor_data.json').map(function (res) { return res.json(); });
    };
    DoctorFinderService.prototype.getURLData = function (apiURL) {
        return this.http.get(apiURL).map(function (res) { return res.json(); });
    };
    return DoctorFinderService;
}());
DoctorFinderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DoctorFinderService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    <p>List of all Dr. {{data.name}}'s accepted plans:</p>\n    <ul class=\"plans-list\">\n        <li>\n            OMNIA\n        </li>\n        <li>\n            OMNIA Bronze\n        </li>\n        <li>\n            OMNIA Gold\n        </li>\n        <li>\n            OMNIA Tier 1 Healthcare Services\n        </li>\n        <li>\n            OMNIA Silver HSA\n        </li>\n        <li>\n            Horizon MyWay HSA PPO\n        </li>\n        <li>\n            Horizon MyWay HRA PPO\n        </li>\n        <li>\n            Horizon Dental Traditional\n        </li>\n        <li>\n            Horizon NJ TotalCare (HMO SNP)\n        </li>\n        <li>\n            Dentemax - Dental Traditional\n        </li>\n        <li>\n            Horizon Healthy Smiles\n        </li>\n    </ul>\n    <button mat-raised-button color=\"primary\" matDialogClose>Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\n  font-family: \"Open Sans\", sans-serif, Roboto, monospace; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPlanDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AllPlanDialog = (function () {
    function AllPlanDialog(data) {
        this.data = data;
    }
    return AllPlanDialog;
}());
AllPlanDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'all-plan-dialog',
        template: __webpack_require__("../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.scss")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], AllPlanDialog);

//# sourceMappingURL=all.plan.dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/doctor-profile/doctor-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hzn-container\" *ngIf=\"doctorProfile\">\n    <mat-card>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"30px\">\n            <div fxFlex=\"60\">\n                <mat-list>\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n                            <img matListAvatar [src]=\"doctorProfile.gender == 'female' ? 'assets/images/avtar/female.png' : 'assets/images/avtar/male.png'\" alt=\"\" class=\"avtar-img\" fxHide.xs=\"true\" *ngIf=\"doctorProfile.gender\">\n                            <div fxFlex=\"70\" fxLayoutAlign=\" start\" fxLayout=\"column\">\n                                <h2 class=\"mat-headline mar-btm-0\">{{doctorProfile.firstname}} {{doctorProfile.lastname}}</h2>\n                                <span>{{doctorProfile.board_certified == true ? 'Board Certified in' : ''}} {{doctorProfile.specialties}}</span>\n                                <span class=\"plan-accepted\">{{doctorProfile.gender == 'female' ? 'She' : 'He'}} accepts <strong>OMNIA</strong> plans as a Tier 1 doctor.</span>\n                                <span><a href=\"javascript:void(0);\" (click)=\"openPlansDialog($event);\">View all accepted plans</a></span>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n            <div fxFlex=\"40\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n                <div>\n                    <address class=\"mat-body-2\">\n                        <mat-icon>location_on</mat-icon>\n                        <span class=\"doctor-details\">{{doctorProfile.address1}}\n                        <br>\n                        {{doctorProfile.city}}, {{doctorProfile.state}} {{doctorProfile.zipcode}}</span>\n                    </address>\n                </div>\n                <div>\n                    <mat-icon>directions</mat-icon><span class=\"doctor-details\"><i>between John F.Kennedy<br>Boulevard &amp; West Side Avenue</i></span>\n                </div>\n                <div>\n                    <mat-icon>directions_car</mat-icon>\n                    <a href=\"#\" class=\"doctor-details\">Get Directions </a> - 0.8 miles away\n                    <p class=\"hzn-list-icon\">\n                        <span><mat-icon>phone</mat-icon><a href=\"tel:{{doctorProfile.phone}}\" class=\"doctor-details\">{{doctorProfile.phone}}</a></span>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </mat-card>\n    <mat-card class=\"no-margin-bottom\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n            <div fxFlex=\"62\">\n                <h3 class=\"mat-title\">Dr. {{doctorProfile.firstname}} Locations</h3>\n                <div id=\"map\">\n                    <ngui-map [options]=\"mapOptions\">\n                        <marker *ngFor=\"let pos of positions\" [position]=\"pos\" draggable=\"true\" (click)=\"clicked($event)\"></marker>\n                        <info-window id=\"iw\">\n                            <div *ngIf=\"marker.display\">\n                                <strong>{{doctorProfile.address1}}\n                                <br> {{doctorProfile.city}}, {{doctorProfile.state}} {{doctorProfile.zipcode}}</strong>\n                            </div>\n                        </info-window>\n                    </ngui-map>\n                </div>\n            </div>\n            <div fxFlex=\"38\">\n                <p fxLayout=\"column\">\n                    <span class=\"mat-body-2\">Office Hours</span>\n                    <span>Please call {{doctorProfile.phone}} to confirm office hours.</span>\n                </p>\n                <p fxLayout=\"column\">\n                    <span class=\"mat-body-2\">Location Code</span>\n                    <span>{{doctorProfile.zipcode}}</span>\n                </p>\n                <p fxLayout=\"column\" fxHide>\n                    <span class=\"mat-body-2\">More locations</span>\n                    <span>More data</span>\n                </p>\n            </div>\n        </div>\n    </mat-card>\n    <div class=\"mat-toolbar mat-primary\" fxLayoutAlign=\"start center\">\n        <ul class=\"mat-body-1 special-features\" fxLayout=\"row\" fxLayout.xs=\"column\">\n            <li>\n                <mat-icon>accessible</mat-icon>Wheelchair accessible </li>\n            <li>Special appointments </li>\n            <li>Special needs Development disabilities</li>\n        </ul>\n    </div>\n    <mat-card fxLayout=\"column\">\n        <h2 class=\"mat-title\">More Details about Dr. {{doctorProfile.firstname}}</h2>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n            <div fxFlex=\"40\" fxLayout=\"column\">\n                <span class=\"mat-body-2\">Group affiliations</span>\n                <a href=\"#\" class=\"mat-body\">{{doctorProfile.group_name}}</a>\n                <br>\n                <span class=\"mat-body-2\">Hospital affiliations</span>\n                <ul class=\"hospital-affilations\" *ngIf=\"doctorProfile['hospital_details']\">\n                    <li *ngFor=\"let hs of doctorProfile['hospital_details']\">\n                        <a  href=\"#\" class=\"mat-body\" (click)=\"openDialog()\">{{hs.name}}</a>\n                    </li>\n                </ul>\n            </div>\n            <div fxFlex=\"20\" fxLayout=\"column\">\n                <span class=\"mat-body-2\">Languages</span>\n                <span>{{doctorProfile.language}}</span>\n                <br>\n                <span class=\"mat-body-2\">NPI</span>\n                <span>{{doctorProfile.nationalproviderid}}</span>\n            </div>\n            <br>\n            <div fxFlex=\"40\" fxLayout=\"column\" class=\"more-details\">\n                <span class=\"mat-body-2\">Provider ID <mat-icon matTooltip=\"National Provider Identifier is a 10 digit unique identification number issued to health care providers by CMS (Centers for Medicare and Medicaid Services)\">info_outline</mat-icon></span>\n                <span>60136295 (Internal Medicine)</span>\n            </div>\n        </div>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/doctor-profile/doctor-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avtar-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px; }\n\nmat-card {\n  color: #333;\n  margin: 20px 0; }\n  mat-card.no-margin-bottom {\n    margin-bottom: 0; }\n  mat-card .mar-btm-0 {\n    margin-bottom: 0; }\n  mat-card ul.hospital-affilations {\n    list-style-type: none;\n    padding-left: 0; }\n    mat-card ul.hospital-affilations li {\n      padding-bottom: 10px; }\n\nul.special-features {\n  list-style-type: none;\n  padding-left: 0; }\n  ul.special-features li {\n    padding-right: 25px; }\n\nmat-list-item .plan-accepted {\n  padding-top: 10px; }\n\nmat-icon {\n  color: #d6d6d6;\n  vertical-align: middle;\n  font-size: 20px; }\n\n.doctor-details {\n  display: inline-block;\n  vertical-align: top;\n  padding-left: 3px; }\n\n.more-details mat-icon {\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/doctor-profile/doctor-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_boxes_all_plans_dialog_all_plan_dialog_component__ = __webpack_require__("../../../../../src/app/dialog-boxes/all-plans-dialog/all.plan.dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoctorProfileComponent = (function () {
    function DoctorProfileComponent(route, router, _doctorFinderService, dialog) {
        this.route = route;
        this.router = router;
        this._doctorFinderService = _doctorFinderService;
        this.dialog = dialog;
        this.lat = 0;
        this.lng = 0;
        this.mapOptions = {
            center: { lat: this.lat, lng: this.lng },
            zoom: 16
        };
        this.marker = {
            display: true,
            lat: null,
            lng: null,
        };
        this.positions = [[0, 0]];
    }
    DoctorProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._doctorFinderService.getDoctorData().subscribe(function (data) {
            _this.doctorProfile = data.providers[0];
            _this.lat = parseFloat(_this.doctorProfile.location.lat);
            _this.lng = parseFloat(_this.doctorProfile.location.lon);
            _this.mapOptions.center = { lat: _this.lat, lng: _this.lng };
            _this.positions[0] = [_this.lat, _this.lng];
            _this.hospitalIDs = _this.doctorProfile.hospitals;
            _this._doctorFinderService.getURLData('assets/data/hospital_data.json').subscribe(function (data) {
                _this.hospitalList = data.providers;
                _this.doctorProfile.hospital_details = [];
                for (var i = 0; i < _this.hospitalIDs.length; i++) {
                    for (var j = 0; j < _this.hospitalList.length; j++) {
                        if (_this.hospitalIDs[i] == _this.hospitalList[j].bid) {
                            _this.doctorProfile.hospital_details[i] = _this.hospitalList[j];
                            break;
                        }
                    }
                }
            });
        });
    };
    DoctorProfileComponent.prototype.openPlansDialog = function (e) {
        e.stopPropagation();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_boxes_all_plans_dialog_all_plan_dialog_component__["a" /* AllPlanDialog */], {
            width: '500px',
            data: { name: this.doctorProfile.name }
        });
        false;
    };
    DoctorProfileComponent.prototype.clicked = function (_a) {
        var marker = _a.target;
        this.marker.lat = marker.getPosition().lat();
        this.marker.lng = marker.getPosition().lng();
        marker.nguiMapComponent.openInfoWindow('iw', marker);
    };
    DoctorProfileComponent.prototype.hideMarkerInfo = function () {
        this.marker.display = !this.marker.display;
    };
    return DoctorProfileComponent;
}());
DoctorProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hzn-doctor-profile',
        template: __webpack_require__("../../../../../src/app/doctor-profile/doctor-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/doctor-profile/doctor-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* DoctorFinderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* DoctorFinderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _d || Object])
], DoctorProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=doctor-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-container mat-toolbar mat-primary\">\n    <div class=\"hzn-container\" fxLayout=\"column\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n            <div fxFlex=\"70\">\n                <ul class=\"footer-links\">\n                    <li>\n                        <a href=\"#\">Create Custom Directory</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">NJ Division of Consumer Affairs</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Legal Notice</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Privacy Policy</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Notice of Non-Discrimination</a>\n                    </li>\n                </ul>\n            </div>\n            <div fxLayout=\"30\">\n                <mat-form-field>\n                    <mat-select [(value)]=\"langselected\" (change)=\"onSelectionChange($event)\" placeholder=\"Select the language\">\n                        <mat-option>None</mat-option>\n                        <mat-option value=\"#spanish\" lang=\"es\">Español</mat-option>\n                        <mat-option value=\"#chinese\" lang=\"zh\">中文</mat-option>\n                        <mat-option value=\"#korean\" lang=\"ko\">한국어</mat-option>\n                        <mat-option value=\"#tagalog\" lang=\"tl\">Tagalog</mat-option>\n                        <mat-option value=\"#gujarati\" lang=\"gu\">ગુજરાતી</mat-option>\n                        <mat-option value=\"#polish\" lang=\"pl\">Polski</mat-option>\n                        <mat-option value=\"#russian\" lang=\"ru\">Русский язык</mat-option>\n                        <mat-option value=\"#italian\" lang=\"it\">Italiano</mat-option>\n                        <mat-option value=\"#hindi\" lang=\"hi\">हिंदी </mat-option>\n                        <mat-option value=\"#french\" lang=\"fr\">Français </mat-option>\n                        <mat-option value=\"#arabic\" lang=\"ar\">عربي</mat-option>\n                        <mat-option value=\"#urdu\" lang=\"ur\">اردو</mat-option>\n                        <mat-option value=\"#portuguese\" lang=\"pt\">Português</mat-option>\n                        <mat-option value=\"#haitian-creole\" lang=\"ht\">Kreyòl ayisyen</mat-option>\n                        <mat-option value=\"#vietnamese\" lang=\"vi\">Tiếng Việt</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n        <p class=\"mat-body-1\">Horizon Blue Cross Blue Shield of New Jersey is an independent licensee of the Blue Cross and Blue Shield Association. The Blue Cross &reg; and Blue Shield &reg; names and symbols are registered marks of the Blue Cross and Blue Shield Association. The Horizon&reg; name and symbols are registered marks, and OMNIA is a service mark, of Horizon Blue Cross Blue Shield of New Jersey. &copy; 2017 Horizon Blue Cross Blue Shield of New Jersey. Three Penn Plaza East, Newark, New Jersey 07105.</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-container .footer-links {\n  -webkit-column-count: 2;\n          column-count: 2; }\n\n.footer-container ul {\n  padding: 0; }\n  .footer-container ul li {\n    list-style-type: none; }\n\n.footer-container a {\n  color: #fff;\n  font-size: 16px;\n  font-weight: normal; }\n\n.footer-container mat-form-field {\n  font-size: 16px; }\n  .footer-container mat-form-field mat-select {\n    font-size: 16px; }\n  .footer-container mat-form-field /deep/ .mat-form-field-underline {\n    background: #fff !important; }\n  .footer-container mat-form-field /deep/ .mat-select-value, .footer-container mat-form-field /deep/ .mat-select-arrow, .footer-container mat-form-field /deep/ .mat-form-field-placeholder {\n    color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onSelectionChange = function (obj) {
        var lang = obj.value;
        window.location.assign('https://www.horizonblue.com/additional-languages' + lang);
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hzn-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div class=\"hzn-container\" fxLayoutAlign=\"end center\">\n        <a href=\"https://www.horizonblue.com\" mat-button target=\"_blank\">HorizonBlue.com</a>\n        <a href=\"#\" mat-button target=\"_blank\">En Español</a>\n        <a href=\"https://www.horizonblue.com/contact-us\" mat-button target=\"_blank\">Contact us</a>\n    </div>\n</mat-toolbar>\n<div class=\"hzn-container\">\n    <a href=\"/\"><img src=\"assets/images/logo.png\" alt=\"Horizon BCBS Logo\" width=\"295\" height=\"55\"> </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-toolbar {\n  margin-bottom: 25px; }\n  .mat-toolbar /deep/ .mat-toolbar-row {\n    display: block; }\n  .mat-toolbar .hzn-container {\n    padding: 15px 0 0 0; }\n\n.header-links {\n  max-width: 1200px;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hzn-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hzn-container\">\n    <a [routerLink]=\"['/profile', doctor.bid]\" class=\"doctor-list\" *ngFor=\"let doctor of doctor_list\" fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start center\">\n        <img matListAvatar width=\"50\" height=\"50\" [src]=\"doctor.gender == 'female' ? 'assets/images/avtar/female.png' : 'assets/images/avtar/male.png'\" alt=\"\" class=\"avtar-img\" fxHide.xs=\"true\" *ngIf=\"doctor.gender\">\n        <span>{{doctor.name}}</span>\n    </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".doctor-list {\n  padding: 50px 25px;\n  border-left: 3px solid #00529b;\n  text-decoration: initial;\n  color: initial;\n  font-weight: 700;\n  color: #00529b;\n  margin: 30px 0; }\n  .doctor-list:hover {\n    background: #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_doctorFinderService) {
        this._doctorFinderService = _doctorFinderService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._doctorFinderService.getDoctorData().subscribe(function (data) { _this.doctor_list = data.providers; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hzn-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DoctorFinderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DoctorFinderService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/materialmodule/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */]
        ],
        declarations: []
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map