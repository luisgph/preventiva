(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n  .body-content {\n    padding-top: 85px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cbiAgLmJvZHktY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDg1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pipe_formato_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/formato.pipe */ "./src/app/pipe/formato.pipe.ts");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm5/ngx-intl-tel-input.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_services_customer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth-guard */ "./src/app/guards/auth-guard.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/error-interceptor */ "./src/app/helpers/error-interceptor.ts");
/* harmony import */ var _app_services_token_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/outbound/outbound.component */ "./src/app/components/outbound/outbound.component.ts");
/* harmony import */ var _components_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/inbound/inbound.component */ "./src/app/components/inbound/inbound.component.ts");
/* harmony import */ var _components_call_call_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/call/call.component */ "./src/app/components/call/call.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_site_site_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/site/site.component */ "./src/app/components/site/site.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _components_grid_pnr_grid_pnr_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/grid-pnr/grid-pnr.component */ "./src/app/components/grid-pnr/grid-pnr.component.ts");
/* harmony import */ var _components_grid_vuelo_proteccion_grid_vuelo_proteccion_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/grid-vuelo-proteccion/grid-vuelo-proteccion.component */ "./src/app/components/grid-vuelo-proteccion/grid-vuelo-proteccion.component.ts");
/* harmony import */ var _components_reexpedition_reexpedition_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/reexpedition/reexpedition.component */ "./src/app/components/reexpedition/reexpedition.component.ts");
/* harmony import */ var _components_iropsvalidations_iropsvalidations_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/iropsvalidations/iropsvalidations.component */ "./src/app/components/iropsvalidations/iropsvalidations.component.ts");
/* harmony import */ var _components_iropsvalidations_details_iropsvalidations_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/iropsvalidations-details/iropsvalidations-details.component */ "./src/app/components/iropsvalidations-details/iropsvalidations-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//Rutas

//Servicios




//import { AuthChildrenGuard } from './guards/auth-children-guard';

//Componentes















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _components_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_22__["OutboundComponent"],
                _components_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_23__["InboundComponent"],
                _components_call_call_component__WEBPACK_IMPORTED_MODULE_24__["CallComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _components_site_site_component__WEBPACK_IMPORTED_MODULE_26__["SiteComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"],
                _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_28__["GridComponent"],
                _pipe_formato_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatoPipe"],
                _components_grid_pnr_grid_pnr_component__WEBPACK_IMPORTED_MODULE_29__["GridPNRComponent"],
                _components_grid_vuelo_proteccion_grid_vuelo_proteccion_component__WEBPACK_IMPORTED_MODULE_30__["GridVueloProteccionComponent"],
                _components_reexpedition_reexpedition_component__WEBPACK_IMPORTED_MODULE_31__["ReexpeditionComponent"],
                _components_iropsvalidations_iropsvalidations_component__WEBPACK_IMPORTED_MODULE_32__["IropsvalidationsComponent"],
                _components_iropsvalidations_details_iropsvalidations_details_component__WEBPACK_IMPORTED_MODULE_33__["IropsvalidationsDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_13__["APP_ROUTING"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__["ProgressSpinnerModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__["NgxIntlTelInputModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                //  AuthChildrenGuard,
                _app_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"],
                _app_services_customer_service__WEBPACK_IMPORTED_MODULE_14__["CustomerService"],
                _app_services_token_service__WEBPACK_IMPORTED_MODULE_18__["TokenService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/outbound/outbound.component */ "./src/app/components/outbound/outbound.component.ts");
/* harmony import */ var _components_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inbound/inbound.component */ "./src/app/components/inbound/inbound.component.ts");
/* harmony import */ var _components_site_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/site/site.component */ "./src/app/components/site/site.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth-guard */ "./src/app/guards/auth-guard.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_reexpedition_reexpedition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reexpedition/reexpedition.component */ "./src/app/components/reexpedition/reexpedition.component.ts");
/* harmony import */ var _components_iropsvalidations_iropsvalidations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/iropsvalidations/iropsvalidations.component */ "./src/app/components/iropsvalidations/iropsvalidations.component.ts");
/* harmony import */ var _components_iropsvalidations_details_iropsvalidations_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/iropsvalidations-details/iropsvalidations-details.component */ "./src/app/components/iropsvalidations-details/iropsvalidations-details.component.ts");







//import { AuthChildrenGuard } from './guards/auth-children-guard';




var APP_ROUTES = [
    {
        path: 'site', component: _components_site_site_component__WEBPACK_IMPORTED_MODULE_4__["SiteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], outlet: 'route1' },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], outlet: 'route1' },
            { path: 'outbound', component: _components_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_2__["OutboundComponent"], outlet: 'route1' },
            //{ path: 'outbound', component: OutboundComponent, outlet: 'route1', canActivate: [AuthChildrenGuard] },
            { path: 'inbound', component: _components_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_3__["InboundComponent"], outlet: 'route1' },
            { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], outlet: 'route1' },
            { path: 'reexpedition', component: _components_reexpedition_reexpedition_component__WEBPACK_IMPORTED_MODULE_8__["ReexpeditionComponent"], outlet: 'route1' },
            { path: 'iropsvalidations', component: _components_iropsvalidations_iropsvalidations_component__WEBPACK_IMPORTED_MODULE_9__["IropsvalidationsComponent"], outlet: 'route1' },
            { path: 'iropsvalidationsdetails/:id', component: _components_iropsvalidations_details_iropsvalidations_details_component__WEBPACK_IMPORTED_MODULE_10__["IropsvalidationsDetailsComponent"], outlet: 'route1' },
        ]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/call/call.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/call/call.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n    <div class=\"col\">\r\n        <p-progressSpinner *ngIf=\"loading\" class=\"text-center\"></p-progressSpinner>\r\n    </div>\r\n</div>\r\n<div class=\"col-12 animated fadeIn fast\" *ngIf=\"optionView\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n            <div class=\"card\" *ngIf=\"isPassenger\">\r\n                <h5 class=\"card-header\">Información Pasajeros</h5>\r\n                <div class=\"card-body\">\r\n                    <p-table [value]=\"objPassengersInfo\" sortField=\"firstName\" sortMode=\"single\" (onSort)=\"onSort()\" [paginator]=\"true\" [rows]=\"5\" [resizableColumns]=\"true\">\r\n                        <table>\r\n                            <ng-template pTemplate=\"header\">\r\n                                <tr>\r\n                                    <th pResizableColumn>Tipo Contacto</th>\r\n                                    <th pResizableColumn>Contacto</th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                                <tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.firstName].index === rowIndex\">\r\n                                    <td colspan=\"2\">\r\n                                        <span style=\"font-weight:bold\">{{rowData.firstName}} {{rowData.lastName}} ({{rowData.travellerType}})</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"ui-resizable-column\">{{rowData.descriptionCT}}</td>\r\n                                    <td class=\"ui-resizable-column\">{{rowData.descriptionC}}</td>\r\n                                </tr>\r\n                            </ng-template>\r\n                        </table>\r\n                    </p-table>\r\n                    <br>\r\n                    <form #forma=\"ngForm\">\r\n                        <table class=\"table table-striped table-bordered table-sm\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>Tipo de Contacto</th>\r\n                                    <th>Contacto</th>\r\n                                    <th>Acción</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let field of contactsArray; let i = index\">\r\n                                    <th scope=\"row\" class=\"text-center ruteNumber\">\r\n                                        {{i+1}}\r\n                                    </th>\r\n                                    <td>\r\n                                        <input [(ngModel)]=\"field.contactTypeDescription\" class=\"form-control\" type=\"text\" name=\"{{field.contactTypeDescription}}\" readonly />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input [(ngModel)]=\"field.description\" class=\"form-control\" type=\"text\" name=\"{{field.description}}\" readonly/>\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteFieldValue(i)\">Eliminar</button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                    </td>\r\n                                    <td>\r\n                                        <select class=\"form-control\" id=\"lstContactTypes\" [(ngModel)]=\"contactTypeId\" name=\"contactTypeId\" [ngClass]=\"{'is-invalid': (origin.errors?.required) && origin.touched}\" #origin=\"ngModel\" required (change)=\"contactTypeChange($event)\">\r\n                             <option *ngFor=\"let item of listContactTypes\" value=\"{{item.contactType_Id}}\">{{ item.description }}</option>\r\n                          </select>\r\n                                        <div class=\"invalid-feedback\" *ngIf=\"origin.errors?.required\">\r\n                                            El campo es requerido\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngx-intl-tel-input *ngIf=\"isPhone\"  [(ngModel)]=\"contactTypeName\" [cssClass]=\"'form-control'\"  [preferredCountries]=\"['co']\"  [onlyCountries]=\"\"  [enableAutoCountrySelect]=\"true\"  [enablePlaceholder]=\"true\"  id=\"contactTypeName\" name=\"contactTypeName\"\r\n                                            #contactName=\"ngModel\" required></ngx-intl-tel-input>\r\n                                        <input type=\"email\" *ngIf=\"!isPhone\" [(ngModel)]=\"contactTypeName\" id=\"contactTypeName\" name=\"contactTypeName\" class=\"form-control\" [ngClass]=\"{'is-invalid': (contactName.errors?.required) && contactName.touched}\" #contactName=\"ngModel\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                                        />\r\n                                        <!-- <div  class=\"invalid-feedback\" *ngIf=\"contactName.errors?.required\">\r\n                              El campo es requerido\r\n                          </div>  -->\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <button class=\"btn btn-danger\" type=\"button\" (click)=\"addFieldValue()\">Adicionar</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </form>\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <br *ngIf=\"isFrequentTraveller\" />\r\n            <div class=\"card\" *ngIf=\"isFrequentTraveller\">\r\n                <h5 class=\"card-header\">Información Viajero Frecuente</h5>\r\n                <div class=\"card-body\">\r\n                    <p-table [columns]=\"colsfrequentTraveller\" [value]=\"objFrequentTravellersInfo\" [paginator]=\"true\" [rows]=\"5\" [resizableColumns]=\"true\">\r\n                        <table>\r\n                            <ng-template pTemplate=\"header\" let-columns>\r\n                                <tr>\r\n                                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn>\r\n                                        {{col.header}}\r\n                                        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                                    </th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                                <tr>\r\n                                    <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n                                        {{rowData[col.field]}}\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-template>\r\n                        </table>\r\n                    </p-table>\r\n                </div>\r\n            </div>\r\n            <br *ngIf=\"isItinerary\" />\r\n            <div class=\"card\" *ngIf=\"isItinerary\">\r\n                <h5 class=\"card-header\">Itinerario</h5>\r\n                <div class=\"card-body\">\r\n                    <p-table [columns]=\"colsitinerariesInfo\" [value]=\"objItinerariesInfo\" [paginator]=\"true\" [rows]=\"5\" [resizableColumns]=\"true\">\r\n                        <table>\r\n                            <ng-template pTemplate=\"header\" let-columns>\r\n                                <tr>\r\n                                    <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                                        {{col.header}}\r\n                                    </th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"body\" let-rowData>\r\n                                <tr [ngClass]=\"rowData.statusCode == 'TK' ? 'gridSuccess' : rowData.statusCode == 'UN' ? 'gridDanger' : rowData.isProtected == 'True' ? 'gridDanger' : null\">\r\n                                    <td class=\"ui-resizable-column\">\r\n                                        {{ rowData.flightNumber }}\r\n                                    </td>\r\n                                    <td class=\"ui-resizable-column\">\r\n                                        {{rowData.departureDate | formato: 'departureDate' }}\r\n                                    </td>\r\n                                    <td class=\"ui-resizable-column\">\r\n                                        {{rowData.arriveDate | formato:'arriveDate' }}\r\n                                    </td>\r\n                                    <td class=\"ui-resizable-column\">\r\n                                        {{ rowData.origin }}\r\n                                    </td>\r\n                                    <td class=\"ui-resizable-column\">\r\n                                        {{ rowData.destination }}\r\n                                    </td>\r\n                                    <td class=\"ui-resizable-column\">\r\n                                        {{ rowData.statusCode }}\r\n                                    </td>\r\n                                    <td class=\"ui-resizable-column\">\r\n\r\n                                        <p-tableCheckbox [value]=\"rowData.isProtected\"></p-tableCheckbox>\r\n                                        {{ rowData.isProtected | formato: 'isProtected' }}\r\n                                        <!-- <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\"> -->\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-template>\r\n                        </table>\r\n                    </p-table>\r\n                </div>\r\n            </div>\r\n            <br *ngIf=\"isSpecialService\" />\r\n            <div class=\"card\" *ngIf=\"isSpecialService\">\r\n                <h5 class=\"card-header\">Servicios Especiales</h5>\r\n                <div class=\"card-body\">\r\n                    <p-table [columns]=\"colsspecialServicesInfo\" [value]=\"objSpecialServicesInfo\" [paginator]=\"true\" [rows]=\"5\">\r\n                        <table>\r\n                            <ng-template pTemplate=\"header\" let-columns>\r\n                                <tr>\r\n                                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                                        {{col.header}}\r\n                                        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                                    </th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                                <tr>\r\n                                    <td *ngFor=\"let col of columns\">\r\n                                        {{rowData[col.field]}}\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-template>\r\n                        </table>\r\n                    </p-table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"flagTipificacion\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Tipificación en CRM</h5>\r\n                    <div class=\"input-group input-group-sm mb-3\" pTooltip=\"Momento\" tooltipPosition=\"left\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <input type=\"checkbox\" id=\"inputGroup-sizing-sm\" aria-label=\"Checkbox for following text input\" checked disabled>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" [ngModel]=\"moment\" name=\"moment\" class=\"form-control\" aria-label=\"Text input with checkbox\" aria-describedby=\"inputGroup-sizing-sm\" disabled>\r\n                    </div>\r\n                    <div class=\"input-group input-group-sm mb-3\" pTooltip=\"Actividad\" tooltipPosition=\"left\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <input type=\"checkbox\" aria-label=\"Checkbox for following text input\" checked disabled>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [ngModel]=\"activity\" name=\"activity\" aria-label=\"Text input with checkbox\" aria-describedby=\"inputGroup-sizing-sm\" disabled>\r\n                    </div>\r\n                    <div class=\"input-group input-group-sm mb-3\" pTooltip=\"Razón\" tooltipPosition=\"left\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <input type=\"checkbox\" aria-label=\"Checkbox for following text input\" checked disabled>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [ngModel]=\"reason\" name=\"reason\" aria-label=\"Text input with checkbox\" aria-describedby=\"inputGroup-sizing-sm\" disabled>\r\n                    </div>\r\n                    <div class=\"input-group input-group-sm mb-3\" pTooltip=\"Detalle Razón\" tooltipPosition=\"left\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <input type=\"checkbox\" aria-label=\"Checkbox for following text input\" checked disabled>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [ngModel]=\"reasonDetail\" name=\"reasonDetail\" aria-label=\"Text input with checkbox\" aria-describedby=\"inputGroup-sizing-sm\" disabled>\r\n                    </div>\r\n                    <div class=\"input-group input-group-sm mb-3\" pTooltip=\"Motivo\" tooltipPosition=\"left\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <input type=\"checkbox\" aria-label=\"Checkbox for following text input\" checked disabled>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [ngModel]=\"motive\" name=\"motive\" aria-label=\"Text input with checkbox\" aria-describedby=\"inputGroup-sizing-sm\" disabled>\r\n                    </div>\r\n                    <h5 class=\"card-title\">Tipificación de la gestión</h5>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" id=\"fieldMotive\">\r\n              <option *ngFor=\"let option of optionGestion\" value=\"{{option.motive_Id}}\">{{ option.description }}</option>\r\n            </select>\r\n                    </div>\r\n                    <div>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-md btn-block\" (click)=\"saveReservation()\">Guardar</button>\r\n                        <!--<button type=\"button\" class=\"btn btn-secondary btn-md btn-block\">Borrar</button>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/call/call.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/call/call.component.ts ***!
  \***************************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/message/messages */ "./src/app/components/shared/message/messages.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CallComponent = /** @class */ (function () {
    function CallComponent(http, apiService, _tokenService) {
        this.http = http;
        this.apiService = apiService;
        this._tokenService = _tokenService;
        this.resources = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["resources"];
        //Variables publicas
        this.emitHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionView = true;
        this.objPassengersInfo = [];
        this.objFrequentTravellersInfo = [];
        this.objSpecialServicesInfo = [];
        this.objItinerariesInfo = [];
        this.isPassenger = true;
        this.isFrequentTraveller = true;
        this.isItinerary = true;
        this.isSpecialService = true;
        this.contactsArray = [];
        this.newAttribute = {};
        this.isProtected = false;
    }
    CallComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Columnas pasajeros
        this.colsPassengers = [
            { field: 'firstName', header: 'Nombres' },
            { field: 'lastName', header: 'Apellidos' },
            { field: 'travellerType', header: 'Tipo Viajero' },
            { field: 'descriptionCT', header: 'Tipo Contacto' },
            { field: 'descriptionC', header: 'Contacto' }
        ];
        //Columnas viajero frecuente
        this.colsfrequentTraveller = [
            { field: 'customerID', header: 'Viajero Frecuente' },
            { field: 'customerFirstName', header: 'Nombres' },
            { field: 'customerSurtName', header: 'Apellidos' },
            { field: 'customerLevelName', header: 'Nivel' }
        ];
        //Columnas itinerario
        this.colsitinerariesInfo = [
            { field: 'flightNumber', header: 'Número Vuelo' },
            { field: 'departureDate', header: 'Fecha Salida' },
            { field: 'arriveDate', header: 'Fecha Llegada' },
            { field: 'origin', header: 'Origen' },
            { field: 'destination', header: 'Destino' },
            { field: 'statusCode', header: 'Estado' },
            { field: 'isProtected', header: 'Protección' }
        ];
        //Columnas servicios especiales
        this.colsspecialServicesInfo = [
            { field: 'description', header: 'Código' },
            { field: 'value', header: 'Valor' }
        ];
        //Tipificación
        this.moment = "Antes del vuelo";
        this.activity = "Antes de la llegada del vuelo";
        this.reason = "Irregularidad operacional";
        this.reasonDetail = "Reubicación en otro vuelo";
        this.motive = "Gestión preventiva";
        this.isPhone = false;
        this._tokenService.token().subscribe(function (token) {
            _this.apiService.getContactTypes(token.Data.accessToken).subscribe(function (responseContactTypes) {
                _this.listContactTypes = responseContactTypes.Data;
            });
        });
    };
    CallComponent.prototype.onSort = function () {
        this.updateRowGroupMetaData();
    };
    //Consulta opción Outbound
    CallComponent.prototype.getOutbound = function (stateManagement_Id) {
        var _this = this;
        this.localStateManagement_Id = stateManagement_Id;
        if (stateManagement_Id != null) {
            var body_1 = {
                "user_Id": sessionStorage.getItem('user_id'),
                "stateManagement_Id": stateManagement_Id,
                "case_Id": "string",
                "motive_Id": "string",
                "pnr": "string"
            };
            //Cambio de estado 
            this.loading = true;
            this._tokenService.token().subscribe(function (token) {
                if (sessionStorage.getItem('stateManagement').toUpperCase() == 'DISPONIBLE') {
                    //Consulta Outbound
                    _this.apiService.outbound(body_1, token.Data.accessToken).subscribe(function (responseOutbound) {
                        if (responseOutbound.Data != null) {
                            _this.flagTipificacion = true;
                            _this.objFrontOutboundReserve = responseOutbound.Data;
                            _this.objHeader = _this.objFrontOutboundReserve.headerInfo;
                            _this.objPassengersInfo = _this.objFrontOutboundReserve.passengersInfo;
                            _this.objFrequentTravellersInfo = _this.objFrontOutboundReserve.frequentTravellersInfo;
                            _this.objItinerariesInfo = _this.objFrontOutboundReserve.itinerariesInfo;
                            _this.objSpecialServicesInfo = _this.objFrontOutboundReserve.specialServicesInfo;
                            _this.optionGestion = _this.objFrontOutboundReserve.motivesInfo;
                            _this.updateRowGroupMetaData();
                            _this.optionView = true;
                            _this.loading = false;
                            if (_this.objPassengersInfo.length == 0) {
                                _this.isPassenger = false;
                            }
                            if (_this.objFrequentTravellersInfo.length == 0) {
                                _this.isFrequentTraveller = false;
                            }
                            if (_this.objItinerariesInfo.length == 0) {
                                _this.isItinerary = false;
                            }
                            if (_this.objSpecialServicesInfo.length == 0) {
                                _this.isSpecialService = false;
                            }
                            if (_this.objHeader != null) {
                                if (_this.objHeader.notified == 'False') {
                                    _this.objHeader.notified = 'No';
                                }
                                else {
                                    _this.objHeader.notified = 'Si';
                                }
                            }
                            _this.emitHeader.emit(_this.objHeader);
                            var params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width = 700, height = 400, top = 50';
                            window.open(_this.objFrontOutboundReserve.urlCrm, 'Preventiva', params);
                        }
                        else {
                            _this.objHeader = null;
                            _this.emitHeader.emit(_this.objHeader);
                            _this.optionView = false;
                            _this.loading = false;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                title: 'Aviso!',
                                text: responseOutbound.ReturnMessage,
                                type: 'warning',
                                confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                                confirmButtonColor: '#dc3545'
                            });
                        }
                    });
                }
                else {
                    _this.loading = false;
                }
            }, function (err) {
                _this.loading = false;
            });
        }
    };
    //Consulta Inbound por PNR
    CallComponent.prototype.get_PNR = function (pnr) {
        var _this = this;
        var body = {
            "user_Id": sessionStorage.getItem('user_id'),
            "stateManagement_Id": "",
            "case_Id": "string",
            "motive_Id": "string",
            "pnr": pnr
        };
        //Consulta Inbound
        this.flagTipificacion = false;
        this.loading = true;
        this._tokenService.token().subscribe(function (token) {
            _this.apiService.inbound(body, token.Data.accessToken).subscribe(function (responseInbound) { return __awaiter(_this, void 0, void 0, function () {
                var params;
                return __generator(this, function (_a) {
                    if (responseInbound.Data != null) {
                        this.objFrontOutboundReserve = responseInbound.Data;
                        this.objHeader = this.objFrontOutboundReserve.headerInfo;
                        this.objPassengersInfo = this.objFrontOutboundReserve.passengersInfo;
                        this.objFrequentTravellersInfo = this.objFrontOutboundReserve.frequentTravellersInfo;
                        this.objItinerariesInfo = this.objFrontOutboundReserve.itinerariesInfo;
                        this.objSpecialServicesInfo = this.objFrontOutboundReserve.specialServicesInfo;
                        this.optionGestion = this.objFrontOutboundReserve.motivesInfo;
                        this.updateRowGroupMetaData();
                        this.optionView = true;
                        this.loading = false;
                        this.flagTipificacion = true;
                        if (this.objPassengersInfo.length == 0) {
                            this.isPassenger = false;
                        }
                        else {
                            this.isPassenger = true;
                        }
                        if (this.objFrequentTravellersInfo.length == 0) {
                            this.isFrequentTraveller = false;
                        }
                        else {
                            this.isFrequentTraveller = true;
                        }
                        if (this.objItinerariesInfo.length == 0) {
                            this.isItinerary = false;
                        }
                        else {
                            this.isItinerary = true;
                        }
                        if (this.objSpecialServicesInfo.length == 0) {
                            this.isSpecialService = false;
                        }
                        else {
                            this.isSpecialService = true;
                        }
                        if (this.objHeader != null) {
                            if (this.objHeader.notified == 'False') {
                                this.objHeader.notified = 'No';
                            }
                            else {
                                this.objHeader.notified = 'Si';
                            }
                        }
                        this.emitHeader.emit(this.objHeader);
                        params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width = 700, height = 400, top = 50';
                        window.open(this.objFrontOutboundReserve.urlCrm, 'Preventiva', params);
                    }
                    else {
                        this.optionView = false;
                        this.loading = false;
                        this.flagTipificacion = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            title: 'Error!',
                            text: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].messageReservationNotFound,
                            type: 'error',
                            confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                            confirmButtonColor: '#dc3545'
                        });
                    }
                    return [2 /*return*/];
                });
            }); }, function (err) {
                _this.loading = false;
            });
        }, function (err) {
            _this.loading = false;
        });
    };
    //Guardar reserva
    CallComponent.prototype.saveReservation = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Está seguro de guardar los cambios?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Aceptar'
        }).then(function (result) {
            if (result.value) {
                var motive = document.getElementById('fieldMotive');
                var body_2 = {
                    "user_Id": sessionStorage.getItem('user_id'),
                    "stateManagement_Id": "",
                    "case_Id": _this.objFrontOutboundReserve.case_Id,
                    "motive_Id": motive.options[motive.selectedIndex].value,
                    "pnr": _this.objHeader.reservationNumber
                };
                _this.loading = true;
                if (sessionStorage.getItem('module') == 'outbound') {
                    //Guarda reserva outbound
                    _this._tokenService.token().subscribe(function (token) {
                        _this.apiService.saveOutboundReservation(body_2, token.Data.accessToken).subscribe(function (responseSave) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.loading = false;
                                if (responseSave.IsSuccess) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                        type: 'success',
                                        title: 'Enhorabuena...',
                                        text: responseSave.Data,
                                        confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                                        confirmButtonColor: '#dc3545'
                                    });
                                }
                                else {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: responseSave.Data,
                                        confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                                        confirmButtonColor: '#dc3545'
                                    });
                                }
                                if (responseSave.ReturnMessage.toUpperCase() == 'DISPONIBLE') {
                                    this.getOutbound(this.localStateManagement_Id);
                                }
                                else {
                                    this.objHeader = null;
                                    this.emitHeader.emit(this.objHeader);
                                    this.optionView = false;
                                }
                                return [2 /*return*/];
                            });
                        }); }, function (err) {
                            _this.loading = false;
                        });
                    }, function (err) {
                        _this.loading = false;
                    });
                }
                else {
                    //Guarda reserva inbound
                    _this._tokenService.token().subscribe(function (token) {
                        _this.apiService.saveInboundReservation(body_2, token.Data.accessToken).subscribe(function (responseSave) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.loading = false;
                                if (responseSave.IsSuccess) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                        type: 'success',
                                        title: 'Enhorabuena...',
                                        text: responseSave.Data,
                                        confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                                        confirmButtonColor: '#dc3545'
                                    });
                                }
                                else {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: responseSave.Data,
                                        confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                                        confirmButtonColor: '#dc3545'
                                    });
                                }
                                this.objHeader = null;
                                this.emitHeader.emit(this.objHeader);
                                this.optionView = false;
                                return [2 /*return*/];
                            });
                        }); }, function (err) {
                            _this.loading = false;
                        });
                    }, function (err) {
                        _this.loading = false;
                    });
                }
            }
        });
    };
    CallComponent.prototype.updateRowGroupMetaData = function () {
        this.rowGroupMetadata = {};
        if (this.objPassengersInfo) {
            for (var i = 0; i < this.objPassengersInfo.length; i++) {
                var rowData = this.objPassengersInfo[i];
                var firstName = rowData.firstName;
                if (i == 0) {
                    this.rowGroupMetadata[firstName] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = this.objPassengersInfo[i - 1];
                    var previousRowGroup = previousRowData.firstName;
                    if (firstName === previousRowGroup)
                        this.rowGroupMetadata[firstName].size++;
                    else
                        this.rowGroupMetadata[firstName] = { index: i, size: 1 };
                }
            }
        }
    };
    CallComponent.prototype.getValidators = function (consolidatedReservation_Id) {
        var _this = this;
        this._tokenService.token().subscribe(function (token) {
            _this.apiService.getReservationDetail(consolidatedReservation_Id, sessionStorage.getItem('user_id'), token.Data.accessToken).subscribe(function (responseReservations) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (responseReservations.Data != null) {
                        this.objFrontOutboundReserve = responseReservations.Data;
                        this.objHeader = this.objFrontOutboundReserve.headerInfo;
                        this.objPassengersInfo = this.objFrontOutboundReserve.passengersInfo;
                        this.objFrequentTravellersInfo = this.objFrontOutboundReserve.frequentTravellersInfo;
                        this.objItinerariesInfo = this.objFrontOutboundReserve.itinerariesInfo;
                        this.objSpecialServicesInfo = this.objFrontOutboundReserve.specialServicesInfo;
                        this.optionGestion = this.objFrontOutboundReserve.motivesInfo;
                        this.updateRowGroupMetaData();
                        this.optionView = true;
                        this.loading = false;
                        this.flagTipificacion = true;
                        console.log(responseReservations.Data);
                        if (this.objPassengersInfo.length == 0) {
                            this.isPassenger = false;
                        }
                        else {
                            this.isPassenger = true;
                        }
                        if (this.objFrequentTravellersInfo.length == 0) {
                            this.isFrequentTraveller = false;
                        }
                        else {
                            this.isFrequentTraveller = true;
                        }
                        if (this.objItinerariesInfo.length == 0) {
                            this.isItinerary = false;
                        }
                        else {
                            this.isItinerary = true;
                        }
                        if (this.objSpecialServicesInfo.length == 0) {
                            this.isSpecialService = false;
                        }
                        else {
                            this.isSpecialService = true;
                        }
                        if (this.objHeader != null) {
                            if (this.objHeader.notified == 'False') {
                                this.objHeader.notified = 'No';
                            }
                            else {
                                this.objHeader.notified = 'Si';
                            }
                        }
                        this.emitHeader.emit(this.objHeader);
                    }
                    else {
                        this.optionView = false;
                        this.loading = false;
                        this.flagTipificacion = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            title: 'Error!',
                            text: responseReservations.ReturnMessage,
                            type: 'error',
                            confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_4__["messagesApp"].buttonAcept,
                            confirmButtonColor: '#dc3545'
                        });
                    }
                    return [2 /*return*/];
                });
            }); }, function (err) {
                _this.loading = false;
            });
        });
    };
    // tabla de insert de contactos 
    CallComponent.prototype.addFieldValue = function () {
        var contactType = document.getElementById('lstContactTypes');
        var contactName = this.contactTypeName;
        var realcontact;
        if (this.isPhone) {
            realcontact = contactName.internationalNumber;
        }
        else {
            realcontact = contactName;
        }
        this.newAttribute = {
            "contactType_Id": contactType.value,
            "contactTypeDescription": contactType.options[contactType.selectedIndex].text,
            "description": realcontact,
        };
        var result = this.contactsArray.filter(function (filterContacts) { return filterContacts.contactType_Id == contactType.value &&
            filterContacts.description == contactName; });
        if (result.length === 0) {
            this.contactsArray.push(this.newAttribute);
            this.newAttribute = {};
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                type: 'warning',
                title: 'Oops...',
                text: 'ya existe el contacto',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#de0108'
            });
        }
        this.contactTypeName = null;
        // contactType = "";
        // this.contactTypeChange(null);
    };
    CallComponent.prototype.deleteFieldValue = function (index) {
        this.contactsArray.splice(index, 1);
    };
    CallComponent.prototype.contactTypeChange = function (event) {
        if (event != null) {
            if (event.target.value === _environments_environment__WEBPACK_IMPORTED_MODULE_6__["resources"].contactTypePhoneId)
                this.isPhone = true;
            else
                this.isPhone = false;
        }
        else {
            this.isPhone = false;
        }
        this.contactTypeName = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CallComponent.prototype, "emitHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CallComponent.prototype, "optionView", void 0);
    CallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call',
            template: __webpack_require__(/*! ./call.component.html */ "./src/app/components/call/call.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], CallComponent);
    return CallComponent;
}());



/***/ }),

/***/ "./src/app/components/grid-pnr/grid-pnr.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-pnr/grid-pnr.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <p-table #dt [columns]=\"cols\" [value]=\"datos\" [paginator]=\"true\" [rows]=\"10\" [scrollable]=\"true\">\r\n    <table>\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n            {{col.header}}\r\n            <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\"\r\n                        ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\">\r\n            {{rowData[col.field]}}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </table>\r\n  </p-table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/grid-pnr/grid-pnr.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/grid-pnr/grid-pnr.component.ts ***!
  \***********************************************************/
/*! exports provided: GridPNRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPNRComponent", function() { return GridPNRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridPNRComponent = /** @class */ (function () {
    function GridPNRComponent() {
        this.datos = [{
                proteccion: "prueba 1",
                vuelo: "prueba 2",
                reserva: "prueba 3",
                fechaVuelo: "prueba 4",
                horaVuelo: "prueba 5",
                motivo: "prueba 6",
                ruta: "prueba 7",
                fechaIdentificacion: "prueba 8",
                horaIdentificacion: "prueba 9",
                estado: "prueba 10",
                procesamiento: "prueba 11",
                contactabilidad: "prueba 12",
                vueltas: "prueba 13",
                medio: "prueba 14",
                canal: "prueba 15"
            },
            {
                proteccion: "prueba 1",
                vuelo: "prueba 2",
                reserva: "prueba 3",
                fechaVuelo: "prueba 4",
                horaVuelo: "prueba 5",
                motivo: "prueba 6",
                ruta: "prueba 7",
                fechaIdentificacion: "prueba 8",
                horaIdentificacion: "prueba 9",
                estado: "prueba 10",
                procesamiento: "prueba 11",
                contactabilidad: "prueba 12",
                vueltas: "prueba 13",
                medio: "prueba 14",
                canal: "prueba 15"
            }];
    }
    GridPNRComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'proteccion', header: 'Protección' },
            { field: 'vuelo', header: 'Vuelo' },
            { field: 'reserva', header: 'Reserva' },
            { field: 'fechaVuelo', header: 'Fecha de vuelo' },
            { field: 'horaVuelo', header: 'Hora de vuelo' },
            { field: 'motivo', header: 'Motivo de afectación' },
            { field: 'ruta', header: 'Ruta (OD)' },
            { field: 'fechaIdentificacion', header: 'Fecha de identificación en fuente' },
            { field: 'horaIdentificacion', header: 'Hora de identidicación en fuente' },
            { field: 'estado', header: 'Estado de la protección' },
            { field: 'procesamiento', header: 'Procesamiento' },
            { field: 'contactabilidad', header: 'Contactabilidad' },
            { field: 'vueltas', header: 'Vueltas' },
            { field: 'medio', header: 'Medio de notificación' },
            { field: 'canal', header: 'Canal de notificación' }
        ];
    };
    GridPNRComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-pnr',
            template: __webpack_require__(/*! ./grid-pnr.component.html */ "./src/app/components/grid-pnr/grid-pnr.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], GridPNRComponent);
    return GridPNRComponent;
}());



/***/ }),

/***/ "./src/app/components/grid-vuelo-proteccion/grid-vuelo-proteccion.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/grid-vuelo-proteccion/grid-vuelo-proteccion.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticProteccion\">Protección</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticProteccion\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticVuelo\">Vuelo</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticVuelo\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticEstado\">Estado</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticEstado\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticCanalNotificacion\">Canal de notificación</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticCanalNotificacion\" readonly>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticCantidadVueltas\">Cantidad de vueltas</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticCantidadVueltas\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticHoraFechaCargue\">Hora/fecha de cargue</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticHoraFechaCargue\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticHoraFechaNotificación\">Hora/fecha de notificación</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticHoraFechaNotificación\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"staticMotivoAfectación\">Motivo afectación</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticMotivoAfectación\" readonly>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"staticCantidadClientes\">Cantidad clientes</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticCantidadClientes\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"staticNombreAsesorNotifico\">Nombre de asesor que notifico</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticNombreAsesorNotifico\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"staticSR\">SR</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticSR\" readonly>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"staticFF\">FF</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"staticFF\" readonly>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/grid-vuelo-proteccion/grid-vuelo-proteccion.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/grid-vuelo-proteccion/grid-vuelo-proteccion.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GridVueloProteccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridVueloProteccionComponent", function() { return GridVueloProteccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridVueloProteccionComponent = /** @class */ (function () {
    function GridVueloProteccionComponent() {
    }
    GridVueloProteccionComponent.prototype.ngOnInit = function () {
    };
    GridVueloProteccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-vuelo-proteccion',
            template: __webpack_require__(/*! ./grid-vuelo-proteccion.component.html */ "./src/app/components/grid-vuelo-proteccion/grid-vuelo-proteccion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], GridVueloProteccionComponent);
    return GridVueloProteccionComponent;
}());



/***/ }),

/***/ "./src/app/components/grid/grid.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n      <p-table #dt [columns]=\"cols\" [value]=\"datos\" [paginator]=\"true\" [rows]=\"10\">\r\n\r\n        <ng-template pTemplate=\"caption\">\r\n          <div style=\"text-align: right\">\r\n            <input type=\"text\" class=\"form-control form-control-sm\" pInputText size=\"50\" placeholder=\"Filtro Global\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\r\n                   style=\"width: auto\">\r\n          </div>\r\n        </ng-template>\r\n        <table>\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n              <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                {{col.header}}\r\n                <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\"\r\n                            ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n              <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                <input *ngSwitchCase=\"'name'\" class=\"form-control form-control-sm\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                <input *ngSwitchCase=\"'username'\" class=\"form-control form-control-sm\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n              <td *ngFor=\"let col of columns\">\r\n                {{rowData[col.field]}}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </table>\r\n      </p-table>\r\n    \r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = /** @class */ (function () {
    function GridComponent(http) {
        this.http = http;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(function (data) {
            _this.datos = data;
        });
        this.cols = [
            { field: 'name', header: 'Nombre' },
            { field: 'username', header: 'Usuario' },
            { field: 'email', header: 'Correo' },
            { field: 'phone', header: 'Teléfono' },
            { field: 'website', header: 'Sitio web' }
        ];
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/grid/grid.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Preventiva App</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inbound/inbound.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/inbound/inbound.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\r\n  <div class=\"card-body\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-3\">\r\n        <form class=\"form-inline\" (ngSubmit)=\"get_Search()\">\r\n          <div class=\"input-group \">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>PNR a notificar</strong></span>\r\n            </div>\r\n            <input type=\"search\" class=\"form-control text-uppercase {{isValidPNR}}\" aria-describedby=\"inputGroup-sizing-default\" [(ngModel)]=\"pnr\" name=\"pnr\" maxlength=\"6\" placeholder=\"PNR\">\r\n\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-secondary\" id=\"btnSearch\">Buscar</button>\r\n            </div>\r\n            <div class=\"invalid-feedback\">\r\n              El campo PNR es requerido\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Motivo afectación</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Ya fue notificada?</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"notified\" name=\"notified\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Fecha Notificación</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" value=\"{{ notifiedDate | date:'dd/MM/yyyy, h:mm a' }}\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-call (emitHeader)=\"getHeader($event)\" [optionView]=\"false\" #paramPNR></app-call>\r\n  <br />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/inbound/inbound.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/inbound/inbound.component.ts ***!
  \*********************************************************/
/*! exports provided: InboundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundComponent", function() { return InboundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../call/call.component */ "./src/app/components/call/call.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboundComponent = /** @class */ (function () {
    function InboundComponent() {
    }
    InboundComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('module', 'inbound');
    };
    InboundComponent.prototype.get_Search = function () {
        this.isValidate = true;
        if (this.pnr == "" || this.pnr == undefined) {
            this.isValidPNR = "is-invalid";
            this.isValidate = false;
        }
        else {
            this.isValidPNR = "";
        }
        if (this.isValidate) {
            this.searchPNR.get_PNR(this.pnr);
        }
    };
    InboundComponent.prototype.getHeader = function (header) {
        if (header != null) {
            this.description = header.description;
            this.affectationType = header.affectationType;
            this.notified = header.notified;
            this.notifiedDate = header.notifiedDate;
        }
        else {
            this.description = '';
            this.affectationType = '';
            this.notified = '';
            this.notifiedDate = '';
            this.pnr = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paramPNR'),
        __metadata("design:type", _call_call_component__WEBPACK_IMPORTED_MODULE_1__["CallComponent"])
    ], InboundComponent.prototype, "searchPNR", void 0);
    InboundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbound',
            template: __webpack_require__(/*! ./inbound.component.html */ "./src/app/components/inbound/inbound.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InboundComponent);
    return InboundComponent;
}());



/***/ }),

/***/ "./src/app/components/iropsvalidations-details/iropsvalidations-details.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/iropsvalidations-details/iropsvalidations-details.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\r\n  <div class=\"card-body\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>PNR a notificar</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reservationNumber\" name=\"reservationNumber\"\r\n            aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Tipo de gestión</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motiveDescription\" name=\"motiveDescription\"\r\n            aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Vuelo afectado</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"flightNumber\" name=\"flightNumber\"\r\n            aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Fecha del vuelo</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" value=\"{{flightDate | date:'dd/MM/yyyy, h:mm a'}}\" name=\"flightDate\"\r\n            aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Motivo afectación</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\"\r\n            aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Tipo afectación</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"affectationType\" name=\"affectationType\"\r\n            aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-call (emitHeader)=\"getHeader($event)\" [optionView]=\"false\" #paramValidators></app-call>\r\n  <br />\r\n</div>"

/***/ }),

/***/ "./src/app/components/iropsvalidations-details/iropsvalidations-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/iropsvalidations-details/iropsvalidations-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IropsvalidationsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IropsvalidationsDetailsComponent", function() { return IropsvalidationsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../call/call.component */ "./src/app/components/call/call.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IropsvalidationsDetailsComponent = /** @class */ (function () {
    function IropsvalidationsDetailsComponent(activateRoute) {
        this.activateRoute = activateRoute;
    }
    IropsvalidationsDetailsComponent.prototype.ngOnInit = function () {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.param.getValidators(this.id);
    };
    IropsvalidationsDetailsComponent.prototype.getHeader = function (header) {
        if (header != null) {
            this.description = header.description;
            this.affectationType = header.affectationType;
            this.reservationNumber = header.reservationNumber;
            this.motiveDescription = header.motiveDescription;
            this.flightNumber = header.flightNumber;
            this.flightDate = header.flightDate;
        }
        else {
            this.description = '';
            this.affectationType = '';
            this.reservationNumber = '';
            this.motiveDescription = '';
            this.flightNumber = '';
            this.flightDate = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paramValidators'),
        __metadata("design:type", _call_call_component__WEBPACK_IMPORTED_MODULE_2__["CallComponent"])
    ], IropsvalidationsDetailsComponent.prototype, "param", void 0);
    IropsvalidationsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iropsvalidations-details',
            template: __webpack_require__(/*! ./iropsvalidations-details.component.html */ "./src/app/components/iropsvalidations-details/iropsvalidations-details.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], IropsvalidationsDetailsComponent);
    return IropsvalidationsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/iropsvalidations/iropsvalidations.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/iropsvalidations/iropsvalidations.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col\">\r\n            <p-progressSpinner *ngIf=\"loading\" class=\"text-center\"></p-progressSpinner>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <p-table [columns]=\"cols\" [value]=\"objReservations\" [paginator]=\"true\" [rows]=\"15\">\r\n                <table>\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr class=\"text-center\">\r\n                      <th scope=\"col\">Número de Reserva</th>\r\n                      <th scope=\"col\">Tipo de Gestión</th>\r\n                      <th scope=\"col\">Usuario Gestionando</th>\r\n                      <th scope=\"col\">Detalle</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template pTemplate=\"body\" let-rowData>\r\n                    <tr class=\"text-center\">\r\n                      <td>{{ rowData.reservationNumber }}</td>\r\n                      <td>{{ rowData.motiveDescription }}</td>\r\n                      <td>{{ rowData.userManagement }}</td>\r\n                      <td class=\"text-center\"><button type=\"button\" class=\"btn btn-danger fas fa-marker\" value={{rowData.consolidatedReservation_Id}} (click)=\"openReservation(rowData.consolidatedReservation_Id )\"></button></td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </table>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/iropsvalidations/iropsvalidations.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/iropsvalidations/iropsvalidations.component.ts ***!
  \***************************************************************************/
/*! exports provided: IropsvalidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IropsvalidationsComponent", function() { return IropsvalidationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var IropsvalidationsComponent = /** @class */ (function () {
    function IropsvalidationsComponent(apiService, _tokenService, router) {
        this.apiService = apiService;
        this._tokenService = _tokenService;
        this.router = router;
        this.cols = [
            { field: 'reservationNumber', header: 'Numero de reserva' },
            { field: 'userManagement', header: 'Usuario gestionando' },
            { field: 'motiveDescription', header: 'Motivo' }
        ];
    }
    IropsvalidationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._tokenService.token().subscribe(function (token) {
            _this.apiService.getListOfReservationsToValidate(token.Data.accessToken).subscribe(function (responseReservations) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.objReservations = responseReservations.Data;
                    console.log(this.objReservations);
                    this.loading = false;
                    return [2 /*return*/];
                });
            }); });
        });
    };
    IropsvalidationsComponent.prototype.openReservation = function (consolidatedReservation_id) {
        this.router.navigateByUrl('/site/(route1:iropsvalidationsdetails/' + consolidatedReservation_id + ')');
    };
    IropsvalidationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iropsvalidations',
            template: __webpack_require__(/*! ./iropsvalidations.component.html */ "./src/app/components/iropsvalidations/iropsvalidations.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IropsvalidationsComponent);
    return IropsvalidationsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"login()\" #forma=\"ngForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 mx-auto\" style=\"margin-top:40px\">\r\n      <div class=\"card bg-light\">\r\n        <div class=\"card-header text-center\">\r\n          Login\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Site</label>\r\n            <select class=\"form-control\" id=\"site\" *ngIf=\"flagSite\">\r\n              <option *ngFor=\"let site of objSite\" [value]=\"site.site_Id\">{{ site.description }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user\">User Name</label>\r\n            <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': (username.errors?.required) && username.touched}\" id=\"user\" placeholder=\"User Name\" [(ngModel)]=\"user\" name=\"user\" required #username=\"ngModel\">\r\n            <div class=\"invalid-feedback\" *ngIf=\"username.errors?.required\">\r\n              El campo User Name es requerido\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': (pass.errors?.required) && pass.touched}\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required #pass=\"ngModel\">\r\n            <div class=\"invalid-feedback\" *ngIf=\"pass.errors?.required\">\r\n              El campo Password es requerido\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!(forma.valid && flagSite)\">Login</button>\r\n          <div class=\"row text-center\">\r\n            <div class=\"col\">\r\n              <p-progressSpinner *ngIf=\"loading\" class=\"text-center\"></p-progressSpinner>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_message_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/message/messages */ "./src/app/components/shared/message/messages.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, customer, router, _tokenService) {
        var _this = this;
        this.apiService = apiService;
        this.customer = customer;
        this.router = router;
        this._tokenService = _tokenService;
        this.flagSite = false;
        this.loading = true;
        _tokenService.token().subscribe(function (token) {
            _this.apiService.site(token.Data.accessToken).subscribe(function (responseSite) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.loading = false;
                    this.flagSite = true;
                    this.objSite = responseSite.Data;
                    return [2 /*return*/];
                });
            }); }, function (err) {
                _this.loading = false;
            });
        }, function (err) {
            _this.loading = false;
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var site_id = document.getElementById('site');
        var body = {
            "siteName": site_id.options[site_id.selectedIndex].text,
            "userName": this.user,
            "password": this.password
        };
        this.loading = true;
        this._tokenService.token().subscribe(function (token) {
            _this.apiService.login(body, token.Data.accessToken).subscribe(function (responseLogin) {
                _this.loading = false;
                if (responseLogin.IsSuccess) {
                    _this.customer.setView(responseLogin.Data.views);
                    _this.customer.setToken(responseLogin.Data.user_Id);
                    _this.customer.setUser(responseLogin.Data.user_Id);
                    sessionStorage.setItem('stateManagement_id', responseLogin.Data.stateManagement_Id);
                    sessionStorage.setItem('userName', responseLogin.Data.userName);
                    sessionStorage.setItem('stateManagement', responseLogin.Data.stateManagement);
                    _this.router.navigateByUrl('/site');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        type: 'error',
                        title: 'Oops...',
                        text: responseLogin.ReturnMessage,
                        confirmButtonText: _shared_message_messages__WEBPACK_IMPORTED_MODULE_5__["messagesApp"].buttonAcept,
                        confirmButtonColor: '#ff4444'
                    });
                }
            }, function (err) {
                _this.loading = false;
            });
        }, function (err) {
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/outbound/outbound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/outbound/outbound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\r\n  <div class=\"card-body\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>PNR a notificar</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reservationNumber\" name=\"reservationNumber\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Motivo afectación</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"input-group \">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><strong>Tipo afectación</strong></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"affectationType\" name=\"affectationType\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\" disabled>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-call (emitHeader)=\"getHeader($event)\" [optionView]=\"false\" #paramMenu></app-call>\r\n  <br />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/outbound/outbound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/outbound/outbound.component.ts ***!
  \***********************************************************/
/*! exports provided: OutboundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundComponent", function() { return OutboundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../call/call.component */ "./src/app/components/call/call.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OutboundComponent = /** @class */ (function () {
    function OutboundComponent(apiService, _tokenService) {
        this.apiService = apiService;
        this._tokenService = _tokenService;
    }
    OutboundComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('module', 'outbound');
        this.state_id = sessionStorage.getItem('stateManagement_id');
        this.paramOption.getOutbound(this.state_id);
    };
    OutboundComponent.prototype.getHeader = function (header) {
        if (header != null) {
            this.description = header.description;
            this.affectationType = header.affectationType;
            this.reservationNumber = header.reservationNumber;
        }
        else {
            this.description = '';
            this.affectationType = '';
            this.reservationNumber = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paramMenu'),
        __metadata("design:type", _call_call_component__WEBPACK_IMPORTED_MODULE_1__["CallComponent"])
    ], OutboundComponent.prototype, "paramOption", void 0);
    OutboundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outbound',
            template: __webpack_require__(/*! ./outbound.component.html */ "./src/app/components/outbound/outbound.component.html")
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], OutboundComponent);
    return OutboundComponent;
}());



/***/ }),

/***/ "./src/app/components/reexpedition/reexpedition.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/reexpedition/reexpedition.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/reexpedition/reexpedition.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/reexpedition/reexpedition.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReexpeditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReexpeditionComponent", function() { return ReexpeditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReexpeditionComponent = /** @class */ (function () {
    function ReexpeditionComponent() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ReexpeditionComponent.prototype.ngOnInit = function () {
        window.location.href = this.env.reexpedicionesUrl + '?uid=' + sessionStorage.getItem('user_id');
    };
    ReexpeditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reexpedition',
            template: __webpack_require__(/*! ./reexpedition.component.html */ "./src/app/components/reexpedition/reexpedition.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReexpeditionComponent);
    return ReexpeditionComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\r\n  <div class=\"card-body\">\r\n    <form (ngSubmit)=\"search()\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"input-group\">\r\n            <select class=\"form-control\" id=\"inputGroupSelect04\" [(ngModel)]=\"opcionBuscar\" name=\"opcionBuscar\" (change)=\"getTipoConsulta()\">\r\n              <option value=\"0\">Tipo de consulta</option>\r\n              <option value=\"1\">PNR</option>\r\n              <option value=\"2\">Vuelo o Protección</option>\r\n            </select>\r\n            <input type=\"text\" class=\"form-control text-uppercase {{isValidOpcion}}\" aria-describedby=\"inputGroup-sizing-default\" maxlength=\"6\" [(ngModel)]=\"valorBuscar\" name=\"valorBuscar\" placeholder=\"Buscar\">\r\n            <div class=\"invalid-feedback\">\r\n              El campo es requerido\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><strong>Fecha Inicio - Fecha Final</strong></span>\r\n            </div>\r\n            <input type=\"text\"\r\n                   placeholder=\"Fecha Inicio - Fecha Final\"\r\n                   class=\"form-control {{isValidDate}}\"\r\n                   #drp=\"bsDaterangepicker\"\r\n                   [bsConfig]=\"bsConfig\"\r\n                   [(ngModel)]=\"dateRangePickerModel\"\r\n                   name=\"dateRangePickerModel\"\r\n                   bsDaterangepicker>\r\n            <div class=\"invalid-feedback\">\r\n              El campo Fecha Inicio - Fecha Fin es requerido\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"input-group\">\r\n            <button class=\"btn btn-secondary btn-block\" id=\"btnSearch\">Buscar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <app-grid *ngIf=\"flagInicial\"></app-grid>\r\n  <app-grid-pnr *ngIf=\"flagPNR\"></app-grid-pnr>\r\n  <app-grid-vuelo-proteccion *ngIf=\"flagVuelo\"></app-grid-vuelo-proteccion>\r\n  <br />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/index.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["defineLocale"])('es', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_3__["esLocale"]);
var SearchComponent = /** @class */ (function () {
    function SearchComponent(localeService) {
        this.localeService = localeService;
        this.flagInicial = true;
        this.flagPNR = false;
        this.flagVuelo = false;
        this.colorTheme = 'theme-red';
        this.opcionBuscar = '0';
        localeService.use('es');
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, dateInputFormat: 'DD/MM/YYYY' });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function () {
        this.isValidate = true;
        if (this.valorBuscar == "" || this.valorBuscar == undefined) {
            this.isValidOpcion = "is-invalid";
            this.isValidate = false;
        }
        else {
            this.isValidOpcion = "";
        }
        if (this.dateRangePickerModel == undefined) {
            this.isValidDate = "is-invalid";
            this.isValidate = false;
        }
        else {
            this.isValidDate = "";
        }
        if (this.isValidate) {
            //PNR
            if (this.opcionBuscar == "1") {
                this.flagInicial = false;
                this.flagPNR = true;
                this.flagVuelo = false;
            }
            else if (this.opcionBuscar == "2") {
                this.flagInicial = false;
                this.flagPNR = false;
                this.flagVuelo = true;
            }
        }
    };
    SearchComponent.prototype.getTipoConsulta = function () {
        if (this.opcionBuscar == "0") {
            this.valorBuscar = "";
            this.dateRangePickerModel = undefined;
            this.flagInicial = true;
            this.flagPNR = false;
            this.flagVuelo = false;
        }
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__["BsLocaleService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/message/messages.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/shared/message/messages.ts ***!
  \*******************************************************/
/*! exports provided: messagesApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesApp", function() { return messagesApp; });
var messagesApp = {
    messageCreateReservation: '¿Desea crear una nueva reserva?',
    messageErrorGeneral: 'Ocurrió un error en el sistema, por favor inténtalo más tarde',
    messageReservationNotFound: 'La reserva no fue encontrada, por favor ingrese una nueva reserva',
    messageUnauthorized: 'Petición no autorizada',
    messageUnavailable: 'El sitio no está disponible',
    buttonSave: 'Guardar',
    buttonCancel: 'Cancelar',
    buttonAcept: 'Aceptar'
};


/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/site', {outlets: {'route1': ['home']}}]\">\r\n        <img src=\"{{env.imgLogo}}\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> PREVENTIVA\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"flagOutbound\">\r\n                <a class=\"nav-link {{flagMenu}}\"\r\n                    [routerLink]=\"['/site', {outlets: {'route1': ['outbound']}}]\"><strong>Outbound</strong></a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"flagInbound\">\r\n                <a class=\"nav-link {{flagMenu}}\"\r\n                    [routerLink]=\"['/site', {outlets: {'route1': ['inbound']}}]\"><strong>Inbound</strong></a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"flagIropsValidations\">\r\n                <a class=\"nav-link {{flagMenu}}\"\r\n                    [routerLink]=\"['/site', {outlets: {'route1': ['iropsvalidations']}}]\"><strong>Validaciones</strong></a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"flagReexpeditions\">\r\n                <a class=\"nav-link {{flagMenu}}\"\r\n                    [routerLink]=\"['/site', {outlets: {'route1': ['reexpedition']}}]\"><strong>Reexpediciones</strong></a>\r\n            </li>\r\n            <!-- <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/site', {outlets: {'route1': ['search']}}]\"><strong>Administrador</strong></a>\r\n            </li> -->\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Estado del usuario\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" *ngIf=\"flagState\">\r\n            <!-- <option *ngFor=\"let st of objState.Data\" value=\"{{ st.stateManagement_Id }}\" [selected]=\"st.distributable | formato:st.distributable\">{{ st.description }}</option> -->\r\n                   <a *ngFor=\"let st of objState.Data\" class=\"dropdown-item\" (click)= \"changeState(st.stateManagement_Id, st.description )\" >{{ st.description }}</a>\r\n                </div>\r\n            </li>\r\n                  <li class=\"nav-item\">\r\n                        <a class=\"nav-link disabled\" tabindex=\"-1\" aria-disabled=\"true\">{{labelState}}</a>\r\n                      </li>\r\n        </ul>\r\n        Hola, {{ userName }}\r\n        <a class=\"nav-link fas fa-power-off\" (click)=\"Salir()\"></a>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _message_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/messages */ "./src/app/components/shared/message/messages.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, customer, apiService, _tokenService) {
        this.router = router;
        this.customer = customer;
        this.apiService = apiService;
        this._tokenService = _tokenService;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.labelState = sessionStorage.getItem('stateManagement');
        if (this.labelState.toUpperCase() === "DISPONIBLE") {
            this.flagMenu = "";
        }
        else {
            this.flagMenu = "is-disabled";
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flagState = false;
        this._tokenService.token().subscribe(function (token) {
            _this.apiService.optionState(token.Data.accessToken).subscribe(function (responseState) {
                _this.objState = responseState;
                _this.flagState = true;
            }, function (err) { });
        }, function (err) { });
        this.userName = sessionStorage.getItem('userName');
        var views = this.customer.getViews().split(',');
        this.flagOutbound = false;
        this.flagInbound = false;
        this.flagSearch = false;
        this.flagIropsValidations = false;
        this.flagReexpeditions = false;
        views.forEach(function (element) {
            switch (element) {
                case 'outbound':
                    _this.flagOutbound = true;
                    break;
                case 'inbound':
                    _this.flagInbound = true;
                    break;
                // case 'search':
                //   this.flagSearch = true;
                //   break;
                case 'bo irops':
                    _this.flagReexpeditions = true;
                    break;
                case 'irops_validaciones':
                    _this.flagIropsValidations = true;
                    break;
                default:
                    break;
            }
        });
    };
    NavbarComponent.prototype.Salir = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Desea salir del sistema?',
            text: "",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d',
            confirmButtonText: _message_messages__WEBPACK_IMPORTED_MODULE_5__["messagesApp"].buttonAcept
        }).then(function (result) {
            if (result.value) {
                _this._tokenService.token().subscribe(function (token) {
                    var body = {
                        "user_Id": sessionStorage.getItem('user_id'),
                        "stateManagement_Id": "",
                        "case_Id": "string",
                        "motive_Id": "string",
                        "pnr": "string"
                    };
                    _this.apiService.logout(body, token.Data.accessToken).subscribe(function (responseChange) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (responseChange.IsSuccess) {
                                sessionStorage.clear();
                                this.router.navigateByUrl('/login');
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
            }
        });
    };
    NavbarComponent.prototype.changeState = function (statemanagement_id, description) {
        var _this = this;
        var localstatemanagement = sessionStorage.getItem('stateManagement_id');
        if (statemanagement_id != localstatemanagement) {
            sessionStorage.setItem('stateManagement_id', statemanagement_id);
            sessionStorage.setItem('stateManagement', description);
            this.labelState = description;
            if (this.labelState.toUpperCase() === "DISPONIBLE") {
                this.flagMenu = "";
            }
            else {
                this.flagMenu = "is-disabled";
            }
            var body_1 = {
                "user_Id": sessionStorage.getItem('user_id'),
                "stateManagement_Id": statemanagement_id,
                "case_Id": "string",
                "motive_Id": "string",
                "pnr": "string"
            };
            //Cambio de estado 
            this.loading = true;
            this._tokenService.token().subscribe(function (token) {
                _this.apiService.changeStateManagement(body_1, token.Data.accessToken).subscribe(function (responseChange) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (responseChange.IsSuccess) {
                            this.loading = false;
                        }
                        return [2 /*return*/];
                    });
                }); });
            });
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/site/site.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/site/site.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<div class=\"col-12 main-container\">\r\n  <router-outlet name=\"route1\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/site/site.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/site/site.component.ts ***!
  \***************************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteComponent = /** @class */ (function () {
    function SiteComponent() {
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/components/site/site.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        if (this.customerService.isLogged()) {
            return true;
        }
        this.router.navigateByUrl(this.router.createUrlTree(['/login'], { queryParams: { redirectUrl: redirectUrl } }));
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/error-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error-interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/message/messages */ "./src/app/components/shared/message/messages.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
            }
        }, function (error) {
            // http response status code
            //console.log("----response----");
            //console.error(error);
            //console.error("status code:");
            //console.error(error.status);
            //console.error(error.message);
            //console.log("--- end of response---");
            if (error.status === 500 || error.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__["messagesApp"].messageErrorGeneral,
                    confirmButtonText: _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__["messagesApp"].buttonAcept,
                    confirmButtonColor: '#dc3545'
                });
            }
            if (error.status === 401) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__["messagesApp"].messageUnauthorized,
                    confirmButtonText: _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__["messagesApp"].buttonAcept,
                    confirmButtonColor: '#dc3545'
                });
            }
            if (error.status === 403) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__["messagesApp"].messageUnavailable,
                    confirmButtonText: _components_shared_message_messages__WEBPACK_IMPORTED_MODULE_2__["messagesApp"].buttonAcept,
                    confirmButtonColor: '#dc3545'
                });
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/jwt-helper.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/jwt-helper.ts ***!
  \***************************************/
/*! exports provided: JwtHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelper", function() { return JwtHelper; });
var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    /**
     * this is used to decode our token if passed or pick it from the local storage
     * @param token
     */
    JwtHelper.prototype.decodeToken = function (token) {
        if (token == null) {
            token = localStorage.getItem('accessToken');
        }
        /**
         * if it is still null, we return null since no token yet
         */
        if (token == null) {
            return null;
        }
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        if (token == null) {
            token = localStorage.getItem('accessToken');
        }
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        if (token == null) {
            token = localStorage.getItem('accessToken');
        }
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());



/***/ }),

/***/ "./src/app/pipe/formato.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/formato.pipe.ts ***!
  \**************************************/
/*! exports provided: FormatoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatoPipe", function() { return FormatoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormatoPipe = /** @class */ (function () {
    function FormatoPipe() {
    }
    FormatoPipe.prototype.transform = function (value, arg) {
        switch (arg) {
            case 'isProtected':
                if (value == 'True') {
                    value = 'Si';
                }
                else {
                    value = 'No';
                }
                break;
            case 'departureDate':
            case 'arriveDate':
                value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value, 'dd/MM/yyyy, h:mm a', 'en-US');
                break;
            case 0:
                value = 'true';
                break;
            case 1:
            case 2:
                value = 'false';
                break;
        }
        return value;
    };
    FormatoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'formato'
        })
    ], FormatoPipe);
    return FormatoPipe;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ApiService.prototype.login = function (body, token) {
        return this.http.post(this.env.preventivaUrl + 'api/Users/Login', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.logout = function (body, token) {
        return this.http.post(this.env.preventivaUrl + 'api/Users/logout', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.outbound = function (body, token) {
        return this.http.post(this.env.preventivaUrl + 'api/OutBound/GetOutBoundReservation', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.inbound = function (body, token) {
        return this.http.post(this.env.preventivaUrl + 'api/InBound/GetInBoundReservation', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.optionState = function (token) {
        return this.http.get(this.env.preventivaUrl + 'api/StateManagements/GetStatesManagements', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.changeStateManagement = function (body, token) {
        return this.http.post(this.env.preventivaUrl + 'api/StateManagements/ChangeStateManagement', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.saveOutboundReservation = function (body, token) {
        return this.http.post(this.env.preventivaUrl + '/api/OutBound/SaveOutBoundReservation', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.saveInboundReservation = function (body, token) {
        return this.http.post(this.env.preventivaUrl + '/api/InBound/SaveInBoundReservation', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.changeUserStateManagementToDisconect = function (body, token) {
        return this.http.post(this.env.preventivaUrl + 'api/StateManagements/ChangeUserStateManagementToDisconect ', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.site = function (token) {
        return this.http.get(this.env.preventivaUrl + 'api/Sites/GetSites', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.getListOfReservationsToValidate = function (token) {
        return this.http.get(this.env.preventivaUrl + 'api/IropsValidations/getlistofreservations', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.getReservationDetail = function (id, user_id, token) {
        return this.http.get(this.env.preventivaUrl + 'api/IropsValidations/getReservationDetails?consolidatedReservation_Id=' + id + '&user_id=' + user_id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService.prototype.getContactTypes = function (token) {
        return this.http.get(this.env.preventivaUrl + 'api/ContactTypes/getlistofcontactTypes', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_jwt_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/jwt-helper */ "./src/app/helpers/jwt-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TOKEN = 'accessToken';
var USER_ID = 'user_id';
var VIEW = 'views';
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this._jwt = new _helpers_jwt_helper__WEBPACK_IMPORTED_MODULE_1__["JwtHelper"]();
    }
    CustomerService.prototype.setToken = function (token) {
        sessionStorage.setItem(TOKEN, token);
    };
    CustomerService.prototype.setUser = function (user_id) {
        sessionStorage.setItem(USER_ID, user_id);
    };
    CustomerService.prototype.getUser = function () {
        return sessionStorage.getItem(USER_ID);
    };
    CustomerService.prototype.setView = function (views) {
        sessionStorage.setItem(VIEW, views.toString());
    };
    CustomerService.prototype.getViews = function () {
        return sessionStorage.getItem(VIEW);
    };
    CustomerService.prototype.isLogged = function () {
        return sessionStorage.getItem(TOKEN) != null;
    };
    /**
     * check for expiration and if token is still existing or not
     * @return {boolean}
     */
    CustomerService.prototype.isAuthenticated = function () {
        return localStorage.getItem(TOKEN) != null && !this._jwt.isTokenExpired();
    };
    CustomerService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    CustomerService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    /**
     * this is used to clear anything that needs to be removed
     */
    CustomerService.prototype.clear = function () {
        localStorage.clear();
    };
    /**
     * this returns the token for the user
     * @param email
     * @param password
     */
    CustomerService.prototype.authenticate = function (email, password) {
        //return this._apiHandler.callService("/user/login", RequestMethod.Post, { email: email, password: password })
        //  .map(res => <string>res.text())
        //  .do((token: string) => {
        //    localStorage.setItem('token', token);
        //    this._userService.set(this._jwt.decodeToken());
        //  });
        return null;
    };
    /**
     * this is used to alert our caller if we should go get token for next request or
     * to be carried out request
     *
     * @param threshold_seconds  is like a threshold to check if we should or not check for token
     * default we use 2min before the token expires
     *
     * @return {boolean}
     */
    CustomerService.prototype.shouldIGetToken = function (threshold_seconds) {
        if (threshold_seconds === void 0) { threshold_seconds = 120; }
        var expDate = this._jwt.getTokenExpirationDate().valueOf() - (threshold_seconds * 1000);
        return new Date().valueOf() > expDate;
    };
    /**
     * this is used to retrieve a newer token since the current one is going to expire soon
     *
     */
    CustomerService.prototype.retrieveToken = function () {
        //return this._apiHandler.callService("/user/token", RequestMethod.Get)
        //  .map(res => <string>res.text())
        //  .do((token: string) => {
        //    this.clear();
        //    localStorage.setItem('token', token);
        //    this._userService.set(this._jwt.decodeToken());
        //  });
        return null;
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    TokenService.prototype.token = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Clientid': '76fbb33b-a2ab-4967-a072-c29828f114f6',
            'Secretkey': 'df3b8844-8744-4b9e-8eb6-68869f2890f2'
        });
        return this.http.post(this.env.preventivaUrl + 'token', {}, { headers: headers });
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
var environment = {
    production: false,
    preventivaUrl: " https://app-preventive-v1-dev-crd-hd.azurewebsites.net/apipreventive/",
    imgLogo: "../assets/img/Avianca-Logo.png",
    reexpedicionesUrl: "http://localhost:4201/reissues/" // Url del front end de reexpediciones
};
var resources = {
    contactTypePhoneId: "02FA564D-2513-4D91-A8F8-2F58B95ADCF2"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectos\Gestion Preventiva\apppreventivemanagement\Preventiva\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map