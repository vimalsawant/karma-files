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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");




var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // we may override loading actions by adding an /actions route before.
    // as we know it will stop matching at the first occurrence.
    { path: 'actions', loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./master-catalogs/master-catalogs.module */ "./src/app/master-catalogs/master-catalogs.module.ts")).then(function (mod) { return mod.MasterCatalogsModule; }); }
    },
    { path: 'catalogs',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./master-catalogs/master-catalogs.module */ "./src/app/master-catalogs/master-catalogs.module.ts")).then(function (mod) { return mod.MasterCatalogsModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wholeApp\" [ngStyle]=\"cursorStyle\">\r\n        <app-header></app-header>\r\n        <router-outlet></router-outlet>\r\n        <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wholeApp {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2aW1zYXdhblxcQm9laW5nXFxTT1VSQ0UtQ09ERVxcb25lcGRsLWdpdGxhYi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBWTtFQUNaLG1CQUFrQjtFQUNsQixPQUFLO0VBQ0wsUUFBTTtFQUNOLHVCQUFxQjtFQUNyQixhQUFXO0VBQ1gsY0FBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndob2xlQXBwe1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGhlaWdodDoxMDB2aDtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.title = 'OnePDL';
        this.cursorStyle = {};
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.cursorStyle['cursor'] = 'progress';
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                _this.cursorStyle['cursor'] = 'default';
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/menu/menu.component */ "./src/app/layout/menu/menu.component.ts");
/* harmony import */ var _layout_identity_identity_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layout/identity/identity.component */ "./src/app/layout/identity/identity.component.ts");
/* harmony import */ var _layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout/confirm-dialog/confirm-dialog.component */ "./src/app/layout/confirm-dialog/confirm-dialog.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"],
                _layout_identity_identity_component__WEBPACK_IMPORTED_MODULE_26__["IdentityComponent"],
                _layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
            entryComponents: [_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/**
 * Purpose of this file is to raise awareness that a constant is being used across one or
 * several locations in this application.
 */
var Constants = {
    jsonConfigLocation: 'assets/config/config.environment.json',
    httpRequestsTimeout: 300000,
    uriEnvironmentStringSubstitution: '{env}',
    jsonConfigSectionServiceContracts: 'serviceContractConfiguration',
    jsonConfigSectionOrchestrationService: 'spmOrchestrationService',
    jsonPayloadScIdReplacement: '{scId}',
    jsonCatalogKeyDataIntegrationStatus: '/actions/user-data-integration',
    jsonCOnfigSectionlastUpdateApplication: 'lastUpdateApplication',
    routerData: {
        catalogs: 'catalogsData',
        jsonConfigSection: 'catalogs'
    },
    UI: {
        responsiveModeBreakPoint: 768,
        maxChipLength: 30,
        snackBarDuration: {
            duration: 20000
        }
    }
};


/***/ }),

/***/ "./src/app/layout/confirm-dialog/confirm-dialog-model.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/confirm-dialog/confirm-dialog-model.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
var ConfirmDialogModel = /** @class */ (function () {
    /**
     * By default shows  'Accept' button only. (if only param provided is message)
     * Otherwise please provide button name and button value pair array
     * @param message string message to display
     * @param buttonOptions button message and button value pairs OR single button text string...  First button will be defaulted / focused.
     * @param showCloseIcon whether to show an X on the top right corner of the confirm dialog.
     */
    function ConfirmDialogModel(message, buttonOptions, showCloseIcon) {
        if (showCloseIcon === void 0) { showCloseIcon = false; }
        this.message = message;
        this.buttonOptions = buttonOptions;
        this.showCloseIcon = showCloseIcon;
        if (typeof buttonOptions === 'string' && buttonOptions) {
            this.buttonOptions = [[buttonOptions, true]];
        }
        if (!this.buttonOptions) {
            this.buttonOptions = [['Accept', true]];
        }
    }
    return ConfirmDialogModel;
}());



/***/ }),

/***/ "./src/app/layout/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"closeContainer\" *ngIf=\"data.showCloseIcon\" >\r\n    <button mat-icon-button aria-label=\"Close dialog\" (click)=\"close();\" >\r\n        <em class=\"icon\">close</em>\r\n    </button>\r\n</div>\r\n<div  mat-dialog-content>\r\n    {{data.message}}\r\n</div>\r\n<div mat-dialog-actions align=\"center\">\r\n    <button mat-button *ngFor=\"let buttonOption of data.buttonOptions; index as i;\" [mat-dialog-close]=\"buttonOption[1]\" [attr.cdkFocusInitial]=\"i==0?true: null\">{{buttonOption[0]}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/confirm-dialog/confirm-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closeContainer {\n  position: relative; }\n  .closeContainer button {\n    position: absolute;\n    right: -23px;\n    top: -26px; }\n  .closeContainer button em {\n      color: #2f3941; }\n  div[mat-dialog-content] {\n  color: #2f3941; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbmZpcm0tZGlhbG9nL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxhcHBcXGxheW91dFxcY29uZmlybS1kaWFsb2dcXGNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29uZmlybS1kaWFsb2cvQzpcXFVzZXJzXFx2aW1zYXdhblxcQm9laW5nXFxTT1VSQ0UtQ09ERVxcb25lcGRsLWdpdGxhYi9zcmNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQWtCLEVBU3JCO0VBVkQ7SUFHUSxtQkFBa0I7SUFDbEIsYUFBVztJQUNYLFdBQVMsRUFJWjtFQVRMO01BT1ksZUNBYyxFRENqQjtFQUtUO0VBQ0ksZUNQc0IsRURRekIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9taXhpbnMuc2Nzcyc7XHJcblxyXG4uY2xvc2VDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDotMjNweDtcclxuICAgICAgICB0b3A6LTI2cHg7XHJcbiAgICAgICAgZW17XHJcbiAgICAgICAgICAgIGNvbG9yOiREYXJrVGV4dENvbG9yOTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRde1xyXG4gICAgY29sb3I6JERhcmtUZXh0Q29sb3I5MDA7XHJcbn0iLCIvLyBDb2xvcnMgYWxyZWFkeSBpbiB1c2UgYWNyb3NzIGFwcC4gRklyc3QgdHJ5ICB0byB1c2UgcHJlZmVycmVkIHZhcmlhYmxlcyBiZWxvdyBcclxuJFByaW1hcnlDb2xvcjojMDAzM2ExO1xyXG4kUHJpbWFyeURhcmtDb2xvcjogIzAwMTA3MTtcclxuJFNlY29uZGFyeUNvbG9yOiAjNWI2NzcwO1xyXG4kU2Vjb25kYXJ5TGlnaHRDb2xvcjogIzg4OTU5ZTtcclxuXHJcblxyXG4vL1ByZWZlcnJlZCB2YXJpYWJsZXM6XHJcbiRIZWFkZXJCR0NvbG9yOiRQcmltYXJ5Q29sb3I7IC8vIHBsZWFzZSB1dGlsaXplIHRoaXMgYW5kIG5vdCAkUHJpbWFyeUNvbG9yXHJcbiREYXJrVGV4dENvbG9yOTAwOiAjMmYzOTQxOyAvL3ByZWZlcnJlZCB0ZXh0IGNvbG9yLlxyXG4kQ29udHJhc3RDb2xvck1lbnU6ICNlYmVkZWU7IC8vIGNvbnRyYXN0aW5nIHRleHQgY29sb3JcclxuJENvbnRyYXN0Q29sb3IxMDA6I2NlZDFkNDsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvciAgbm90IHNvIGNvbnRyYXN0aW5nLlxyXG4kVGFibGVNZW51QkdDb2xvcjogJFByaW1hcnlEYXJrQ29sb3I7IC8vdXNlZCBmb3IgYmFja2dyb3VuZCBvZiByaWJib24gKCB0YWJsZSBjb250cm9sIHBhbmUpIFxyXG4kVGFibGVNZW51QkdDb2xvckhvdmVyOiAjMjUzMjgxOyAvL25lZWRlZCBjYXVzZSB0cmFuc3BhcmVuY3kgY2F1c2VzIHNlZWluZyB0aGluZ3MgYmVsb3cuXHJcblxyXG5cclxuLy9jdXRvZmYgd2lkdGggZm9yIHJlc3BvbnNpdmUgbW9kZTpcclxuJFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludDogNzY4cHg7XHJcblxyXG4vL2F2YWlsYWJsZSBjb2xvcnMgdG8gdXNlLCAgUHJlZmVyIHRvIHJldXNlIHRoZSBhYm92ZSBvbmVzIGZpcnN0XHJcbiRQcmltYXJ5TGlnaHRDb2xvcjogIzUzNWNkMztcclxuJFNlY29uZGFyeURhcmtDb2xvcjogIzMxM2Q0NTtcclxuJFRleHRDb2xvcjogI2I4YzhkNDtcclxuJEFsdGVybmF0ZVRleHRDT2xvcjogIzU1NTtcclxuJEFsdGVybmF0ZVRleHRDb2xvcjI6ICM3Nzc7XHJcblxyXG5cclxuQG1peGluIGVycm9yQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNjtcclxufVxyXG5AbWl4aW4gc3VjY2Vzc0NvbG9yKCkge1xyXG4gICAgY29sb3I6ICM4MkJDMDA7XHJcbn1cclxuXHJcbkBtaXhpbiBkaXNhYmxlZEJ1dHRvbk9uVGFibGVDb250cm9sUGFuZSgpe1xyXG4gICAgb3BhY2l0eTogLjQ7ICAgIFxyXG59XHJcblxyXG5AbWl4aW4gZm9udEZhbWlseSgpe1xyXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udEZhbWlseU5ldWUoKXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVXMDEtVGhpblwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gZm9udFNpemVTdGQoKXtcclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvLyBkb24ndCBjaGFuZ2UgISEgY2hhbmdlIHRoaXMgb24gdGhlIHN0eWxlcy5jc3NcclxufVxyXG5AbWl4aW4gYmlnZ2VyRm9udFNpemUoKXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07IC8vc2FtZSBzdWdnZXN0aW9uIGFzIGFib3ZlLCBidXQgbm90IGFzIHJpZ2lkIG9mIGEgc3VnZ2VzdGlvbi5cclxufVxyXG5cclxuQG1peGluIHN0ZEZvbnRTaXplQW5kRmFtaWx5KCl7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZVN0ZCgpO1xyXG4gICAgQGluY2x1ZGUgZm9udEZhbWlseSgpO1xyXG59XHJcblxyXG5AbWl4aW4gbWVudUhvdmVyICgpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gaWYgZGVtb3MgYXJlIG5lZWRlZCBhbmQgdGhlcmUgaXMgc29tZXRoaW5nIHVuZGVyIGNvbnRydWN0aW9uLCB0aGUgYmVsb3cgYWRkcyBhIGdyZWF0IG92ZXJsYXkuXHJcbkBtaXhpbiBvdmVybGF5VW5kZXJDb25zdHJ1Y3Rpb24oKXtcclxuICAgIC8qXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXh0XCI+VW5kZXIgY29uc3RydWN0aW9uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAqL1xyXG4gICAgLm92ZXJsYXl7XHJcbiAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgI3RleHR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgei1pbmRleDoxMDI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6JFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHluYW1pY1ZlcnRpY2FsU2Nyb2xsYmFyKCl7XHJcbiAgICA6aG9zdHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLyogZm9yIGZpcmVmb3ggKi9cclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWF0ZXJpYWxJY29uKCkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog-model */ "./src/app/layout/confirm-dialog/confirm-dialog-model.ts");




var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/layout/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/layout/confirm-dialog/confirm-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _confirm_dialog_model__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div>\r\n        Copyright © {{currentYear}} Boeing.\r\n    </div>\r\n    <div>\r\n        Application Version: {{appVersion}} \r\n    </div> \r\n    <div>\r\n        Last update {{lastUpdatedDate}}\r\n    </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  background-color: #5b6770;\n  color: #ebedee;\n  padding-top: 3px;\n  padding-bottom: 2px; }\n\nfooter > div {\n  justify-self: end;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: none; }\n\n@media screen and (min-width: 768px) {\n    footer > div {\n      display: block; } }\n\nfooter > div:first-child {\n  display: block;\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcYXBwXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNLLGNBQVk7RUFDWixvQkFBbUI7RUFDbkIsMEJBQXdCO0VBQ3hCLDBCQ0ZtQjtFREduQixlQ0lzQjtFREh0QixpQkFBZTtFQUNmLG9CQUFrQixFQUVwQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixtQkFBaUI7RUFDakIsb0JBQWtCO0VBQ2xCLGNBQVksRUFJYjs7QUFIQztJQUxGO01BTUksZUFBYSxFQUVoQixFQUFBOztBQUNEO0VBQ0UsZUFBYTtFQUNiLFFBQU0sRUFDUCIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vbWl4aW5zLnNjc3MnO1xyXG5mb290ZXIge1xyXG4gICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkU2Vjb25kYXJ5Q29sb3I7XHJcbiAgICAgY29sb3I6ICRDb250cmFzdENvbG9yTWVudTtcclxuICAgICBwYWRkaW5nLXRvcDozcHg7XHJcbiAgICAgcGFkZGluZy1ib3R0b206MnB4O1xyXG4gICBcclxuICB9XHJcbiAgZm9vdGVyPmRpdntcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpe1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb290ZXI+ZGl2OmZpcnN0LWNoaWxke1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZsZXg6MTtcclxuICB9XHJcbiAgIiwiLy8gQ29sb3JzIGFscmVhZHkgaW4gdXNlIGFjcm9zcyBhcHAuIEZJcnN0IHRyeSAgdG8gdXNlIHByZWZlcnJlZCB2YXJpYWJsZXMgYmVsb3cgXHJcbiRQcmltYXJ5Q29sb3I6IzAwMzNhMTtcclxuJFByaW1hcnlEYXJrQ29sb3I6ICMwMDEwNzE7XHJcbiRTZWNvbmRhcnlDb2xvcjogIzViNjc3MDtcclxuJFNlY29uZGFyeUxpZ2h0Q29sb3I6ICM4ODk1OWU7XHJcblxyXG5cclxuLy9QcmVmZXJyZWQgdmFyaWFibGVzOlxyXG4kSGVhZGVyQkdDb2xvcjokUHJpbWFyeUNvbG9yOyAvLyBwbGVhc2UgdXRpbGl6ZSB0aGlzIGFuZCBub3QgJFByaW1hcnlDb2xvclxyXG4kRGFya1RleHRDb2xvcjkwMDogIzJmMzk0MTsgLy9wcmVmZXJyZWQgdGV4dCBjb2xvci5cclxuJENvbnRyYXN0Q29sb3JNZW51OiAjZWJlZGVlOyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yXHJcbiRDb250cmFzdENvbG9yMTAwOiNjZWQxZDQ7IC8vIGNvbnRyYXN0aW5nIHRleHQgY29sb3IgIG5vdCBzbyBjb250cmFzdGluZy5cclxuJFRhYmxlTWVudUJHQ29sb3I6ICRQcmltYXJ5RGFya0NvbG9yOyAvL3VzZWQgZm9yIGJhY2tncm91bmQgb2YgcmliYm9uICggdGFibGUgY29udHJvbCBwYW5lKSBcclxuJFRhYmxlTWVudUJHQ29sb3JIb3ZlcjogIzI1MzI4MTsgLy9uZWVkZWQgY2F1c2UgdHJhbnNwYXJlbmN5IGNhdXNlcyBzZWVpbmcgdGhpbmdzIGJlbG93LlxyXG5cclxuXHJcbi8vY3V0b2ZmIHdpZHRoIGZvciByZXNwb25zaXZlIG1vZGU6XHJcbiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQ6IDc2OHB4O1xyXG5cclxuLy9hdmFpbGFibGUgY29sb3JzIHRvIHVzZSwgIFByZWZlciB0byByZXVzZSB0aGUgYWJvdmUgb25lcyBmaXJzdFxyXG4kUHJpbWFyeUxpZ2h0Q29sb3I6ICM1MzVjZDM7XHJcbiRTZWNvbmRhcnlEYXJrQ29sb3I6ICMzMTNkNDU7XHJcbiRUZXh0Q29sb3I6ICNiOGM4ZDQ7XHJcbiRBbHRlcm5hdGVUZXh0Q09sb3I6ICM1NTU7XHJcbiRBbHRlcm5hdGVUZXh0Q29sb3IyOiAjNzc3O1xyXG5cclxuXHJcbkBtaXhpbiBlcnJvckNvbG9yKCkge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuQG1peGluIHN1Y2Nlc3NDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjODJCQzAwO1xyXG59XHJcblxyXG5AbWl4aW4gZGlzYWJsZWRCdXR0b25PblRhYmxlQ29udHJvbFBhbmUoKXtcclxuICAgIG9wYWNpdHk6IC40OyAgICBcclxufVxyXG5cclxuQG1peGluIGZvbnRGYW1pbHkoKXtcclxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIGZvbnRGYW1pbHlOZXVlKCl7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlVzAxLVRoaW5cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIGZvbnRTaXplU3RkKCl7XHJcbiAgICBmb250LXNpemU6IDFlbTsgLy8gZG9uJ3QgY2hhbmdlICEhIGNoYW5nZSB0aGlzIG9uIHRoZSBzdHlsZXMuY3NzXHJcbn1cclxuQG1peGluIGJpZ2dlckZvbnRTaXplKCl7XHJcbiAgICBmb250LXNpemU6IDEuNWVtOyAvL3NhbWUgc3VnZ2VzdGlvbiBhcyBhYm92ZSwgYnV0IG5vdCBhcyByaWdpZCBvZiBhIHN1Z2dlc3Rpb24uXHJcbn1cclxuXHJcbkBtaXhpbiBzdGRGb250U2l6ZUFuZEZhbWlseSgpe1xyXG4gICAgQGluY2x1ZGUgZm9udFNpemVTdGQoKTtcclxuICAgIEBpbmNsdWRlIGZvbnRGYW1pbHkoKTtcclxufVxyXG5cclxuQG1peGluIG1lbnVIb3ZlciAoKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIGlmIGRlbW9zIGFyZSBuZWVkZWQgYW5kIHRoZXJlIGlzIHNvbWV0aGluZyB1bmRlciBjb250cnVjdGlvbiwgdGhlIGJlbG93IGFkZHMgYSBncmVhdCBvdmVybGF5LlxyXG5AbWl4aW4gb3ZlcmxheVVuZGVyQ29uc3RydWN0aW9uKCl7XHJcbiAgICAvKlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXknPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidGV4dFwiPlVuZGVyIGNvbnN0cnVjdGlvbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKi9cclxuICAgIC5vdmVybGF5e1xyXG4gICAgICAgIHotaW5kZXg6IDEwMTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICN0ZXh0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGR5bmFtaWNWZXJ0aWNhbFNjcm9sbGJhcigpe1xyXG4gICAgOmhvc3R7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC8qIGZvciBmaXJlZm94ICovXHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1hdGVyaWFsSWNvbigpIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService, dataServie) {
        this.authService = authService;
        this.dataServie = dataServie;
        this.currentYear = new Date().getFullYear();
        this.appVersion = '1.56.3';
        this.lastUpdatedDate = '01/01/2001';
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataServie.getConfigSection(src_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].jsonCOnfigSectionlastUpdateApplication).subscribe(function (x) {
            try {
                if (x && x.indexOf('-') >= 0) {
                    var dateParts = x.split('-');
                    var dateFromConfig = new Date(parseInt(dateParts[2], 10), parseInt(dateParts[0], 10) - 1, parseInt(dateParts[1], 10));
                    _this.lastUpdatedDate = dateFromConfig.toLocaleDateString();
                }
            }
            catch (x) { }
        });
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div matRipple class=\"areaLogo\">\r\n        <a href=\"http://inside.boeing.com\">\r\n            <img src=\"assets/logo.png\" alt=\"Boeing Logo\" />\r\n        </a>\r\n    </div>\r\n    <div matRipple class=\"areaAppName\">\r\n        OnePDL\r\n    </div>\r\n    <button *ngIf=\"authService.isLoggedIn\" class=\"areaMenuTrigger\" (click)=\"responsiveTriggerClicked()\" mat-button>\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>\r\n    </button>\r\n    <app-menu  *ngIf=\"authService.isLoggedIn\" ></app-menu>\r\n    <app-identity *ngIf=\"authService.isLoggedIn\"></app-identity>\r\n</header>"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  background-color: #0033a1;\n  box-shadow: 0 1px 5px #000;\n  color: #ebedee;\n  position: relative;\n  z-index: 102; }\n\napp-identity {\n  padding-top: 2px; }\n\n.areaLogo {\n  padding-top: 11px;\n  padding-left: 10px;\n  padding-bottom: 3px; }\n\n.areaLogo img {\n    width: 81px; }\n\n.areaAppName {\n  text-align: center;\n  font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 1.5em;\n  flex-grow: 1;\n  padding: 7px 10px 0 10px; }\n\n.areaMenuTrigger {\n  order: 1;\n  width: 35px;\n  height: 27px;\n  min-width: unset;\n  line-height: unset;\n  margin: 4px 10px 0 8px;\n  border: 1px solid #ebedee;\n  border-radius: 4px 4px 4px 4px;\n  padding: 0; }\n\n.areaMenuTrigger svg {\n    width: 33px;\n    height: 24px;\n    fill: #ebedee; }\n\n.hideNav {\n  display: none; }\n\napp-menu {\n  position: absolute;\n  top: 38px;\n  left: 0;\n  width: 100vw; }\n\n@media screen and (min-width: 768px) {\n  .areaLogo {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 0; }\n    .areaLogo img {\n      width: 100%; }\n  .areaAppName {\n    flex-grow: 0;\n    padding: 11px 10px 10px 10px;\n    border-left: 1px solid #88959e;\n    border-right: 1px solid #88959e;\n    background-color: #5b6770; }\n  app-identity:hover, .areaAppName:hover, .areaLogo:hover {\n    background-color: rgba(255, 255, 255, 0.15);\n    cursor: pointer; }\n  .areaAppName:hover {\n    background-color: #88959e; }\n  .areaMenuTrigger {\n    display: none; }\n  .hideNav {\n    display: block; }\n  app-menu {\n    flex: 1;\n    position: inherit;\n    width: inherit;\n    top: inherit; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVM7RUFDVCxjQUFZO0VBQ1osK0JBQThCO0VBQzlCLDBCQ0ppQjtFREtqQiwyQkFBMEI7RUFDMUIsZUNHdUI7RURGdkIsbUJBQWlCO0VBQ2pCLGFBQVcsRUFDZDs7QUFDRDtFQUNJLGlCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksa0JBQWdCO0VBQ2hCLG1CQUFpQjtFQUNqQixvQkFBa0IsRUFJckI7O0FBUEQ7SUFLUSxZQUFVLEVBQ2I7O0FBR0w7RUFDSSxtQkFBa0I7RUNtQmxCLGlGQUFnRjtFQVNoRixpQkFBZ0I7RUR6QmhCLGFBQVc7RUFDWCx5QkFBd0IsRUFDM0I7O0FBRUQ7RUFDSSxTQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QiwwQkM1QnVCO0VENkJ2QiwrQkFBOEI7RUFDOUIsV0FBVSxFQU1iOztBQWZEO0lBV1EsWUFBVTtJQUNWLGFBQVk7SUFDWixjQ2xDbUIsRURtQ3RCOztBQUVMO0VBQ0ksY0FBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVE7RUFDUixRQUFNO0VBQ04sYUFBVyxFQUNkOztBQUVEO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLGtCQUFnQjtJQUNoQixrQkFBaUIsRUFJcEI7SUFSRDtNQU1RLFlBQVUsRUFDYjtFQUVMO0lBQ0ksYUFBVztJQUNYLDZCQUE0QjtJQUM1QiwrQkNuRXFCO0lEb0VyQixnQ0NwRXFCO0lEcUVyQiwwQkN0RWdCLEVEd0VuQjtFQUNEO0lDZkEsNENBQXVDO0lBQ3ZDLGdCQUFlLEVEZ0JkO0VBQ0Q7SUFDSSwwQkM1RXFCLEVENkV4QjtFQUNEO0lBQ0ksY0FBWSxFQUNmO0VBQ0Q7SUFDSSxlQUFhLEVBQ2hCO0VBQ0Q7SUFDSSxRQUFPO0lBQ1Asa0JBQWdCO0lBQ2hCLGVBQWE7SUFDYixhQUFXLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vbWl4aW5zLnNjc3MnO1xyXG5oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkSGVhZGVyQkdDb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwO1xyXG4gICAgY29sb3I6JENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjEwMjtcclxufVxyXG5hcHAtaWRlbnRpdHl7XHJcbiAgICBwYWRkaW5nLXRvcDoycHg7XHJcbn1cclxuLmFyZWFMb2dve1xyXG4gICAgcGFkZGluZy10b3A6MTFweDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206M3B4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjgxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcmVhQXBwTmFtZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIGZvbnRGYW1pbHlOZXVlKCk7XHJcbiAgICBAaW5jbHVkZSBiaWdnZXJGb250U2l6ZSgpO1xyXG4gICAgZmxleC1ncm93OjE7XHJcbiAgICBwYWRkaW5nOiA3cHggMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbi5hcmVhTWVudVRyaWdnZXJ7XHJcbiAgICBvcmRlcjoxO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiA0cHggMTBweCAwIDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRDb250cmFzdENvbG9yTWVudTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBzdmd7XHJcbiAgICAgICAgd2lkdGg6MzNweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZmlsbDogJENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgfVxyXG59XHJcbi5oaWRlTmF2e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5hcHAtbWVudXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDozOHB4O1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6JFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludCkge1xyXG4gICAgLmFyZWFMb2dve1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcmVhQXBwTmFtZXtcclxuICAgICAgICBmbGV4LWdyb3c6MDtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJFNlY29uZGFyeUxpZ2h0Q29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJFNlY29uZGFyeUxpZ2h0Q29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokU2Vjb25kYXJ5Q29sb3I7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhcHAtaWRlbnRpdHk6aG92ZXIsLmFyZWFBcHBOYW1lOmhvdmVyLCAuYXJlYUxvZ286aG92ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVudUhvdmVyKCk7XHJcbiAgICB9XHJcbiAgICAuYXJlYUFwcE5hbWU6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokU2Vjb25kYXJ5TGlnaHRDb2xvcjtcclxuICAgIH1cclxuICAgIC5hcmVhTWVudVRyaWdnZXJ7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLmhpZGVOYXZ7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIGFwcC1tZW51e1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246aW5oZXJpdDtcclxuICAgICAgICB3aWR0aDppbmhlcml0O1xyXG4gICAgICAgIHRvcDppbmhlcml0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/layout/menu/menu.component.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.responsiveTriggerClicked = function () {
        this.menu.responsiveTriggerClicked();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"])
    ], HeaderComponent.prototype, "menu", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/identity/identity.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/identity/identity.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [matMenuTriggerFor]=\"identityMenu\" class='flex'>\r\n    <svg class=\"person\"xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\"><path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n<div class='name'>{{identity.displayName}}</div>\r\n<!--https://material.io/tools/icons/?icon=expand_more&style=baseline-->\r\n</div>\r\n<mat-menu #identityMenu=\"matMenu\">\r\n<button mat-menu-item>My profile</button>\r\n<button mat-menu-item>Logout</button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/layout/identity/identity.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/identity/identity.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  cursor: pointer; }\n  .flex .name {\n    display: none;\n    padding-top: 16px;\n    padding-left: 5px;\n    padding-right: 19px;\n    position: relative; }\n  .flex .name::after {\n    height: 0;\n    width: 0;\n    border-top: 5px solid #ebedee;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: 4px; }\n  .flex svg {\n    fill: #ebedee; }\n  @media screen and (min-width: 768px) {\n    .flex {\n      padding-right: 7px;\n      padding-left: 7px;\n      height: 96%; }\n      .flex .name {\n        display: block; }\n      .flex .person {\n        height: 24px;\n        width: 24px;\n        align-self: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2lkZW50aXR5L0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxhcHBcXGxheW91dFxcaWRlbnRpdHlcXGlkZW50aXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaWRlbnRpdHkvQzpcXFVzZXJzXFx2aW1zYXdhblxcQm9laW5nXFxTT1VSQ0UtQ09ERVxcb25lcGRsLWdpdGxhYi9zcmNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBWTtFQUNaLGdCQUFjLEVBcUNqQjtFQXZDRDtJQUlRLGNBQVk7SUFDWixrQkFBZ0I7SUFDaEIsa0JBQWdCO0lBQ2hCLG9CQUFrQjtJQUNsQixtQkFBaUIsRUFDcEI7RUFUTDtJQVdRLFVBQVM7SUFDVCxTQUFPO0lBQ1AsOEJDSm1CO0lES25CLG1DQUFrQztJQUNsQyxvQ0FBbUM7SUFDbkMsWUFBVztJQUNYLG1CQUFpQjtJQUNqQixTQUFPO0lBQ1AsV0FBUyxFQUNaO0VBcEJMO0lBc0JRLGNDYm1CLEVEY3RCO0VBQ0Q7SUF4Qko7TUF5QlEsbUJBQWlCO01BQ2pCLGtCQUFpQjtNQUNqQixZQUFVLEVBWWpCO01BdkNEO1FBNkJZLGVBQWEsRUFDaEI7TUE5QlQ7UUFpQ1ksYUFBVztRQUNYLFlBQVU7UUFDVixtQkFBaUIsRUFFcEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pZGVudGl0eS9pZGVudGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL21peGlucy5zY3NzJztcclxuLmZsZXh7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIC5uYW1le1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDoxOXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm5hbWU6OmFmdGVye1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB3aWR0aDowO1xyXG4gICAgICAgIGJvcmRlci10b3A6NXB4IHNvbGlkICRDb250cmFzdENvbG9yTWVudTtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgcmlnaHQ6NHB4O1xyXG4gICAgfVxyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6ICRDb250cmFzdENvbG9yTWVudTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6JFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludCl7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDo3cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgaGVpZ2h0Ojk2JTtcclxuICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGVyc29ue1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgd2lkdGg6MjRweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/identity/identity.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/identity/identity.component.ts ***!
  \*******************************************************/
/*! exports provided: IdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityComponent", function() { return IdentityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");



var IdentityComponent = /** @class */ (function () {
    function IdentityComponent() {
        this.identity = { bemsId: '3256744', displayName: 'Herdt, Dean R' };
    }
    IdentityComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], IdentityComponent.prototype, "identity", void 0);
    IdentityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identity',
            template: __webpack_require__(/*! ./identity.component.html */ "./src/app/layout/identity/identity.component.html"),
            styles: [__webpack_require__(/*! ./identity.component.scss */ "./src/app/layout/identity/identity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IdentityComponent);
    return IdentityComponent;
}());



/***/ }),

/***/ "./src/app/layout/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ng-container *ngIf=\"!responsive\">\r\n    <div matRipple class=\"arrowWrapper\" [matMenuTriggerFor]=\"adminMenu\">Admin</div>\r\n    <div matRipple class=\"arrowWrapper\" [matMenuTriggerFor]=\"menu\">Data Maintenance</div>\r\n    <div matRipple class=\"arrowWrapper\" [matMenuTriggerFor]=\"actionsMenu\">Actions</div>\r\n    <!-- Action menu starts-->\r\n    <mat-menu #actionsMenu=\"matMenu\">\r\n        <button mat-menu-item routerLink=\"/actions/user-data-integration\">Run Data Integration</button>\r\n    </mat-menu> \r\n    <!-- Action menu ends-->\r\n    <!-- Admin menu starts-->\r\n    <mat-menu #adminMenu=\"matMenu\">\r\n        <button mat-menu-item routerLink=\"/catalogs/users\">Users</button>\r\n    </mat-menu> \r\n    <!-- Admin menu ends-->\r\n    <mat-menu #menu=\"matMenu\">\r\n      <span>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"masterDataMenu\">Master Data</button>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"forecastingMenu\">Forecasting</button>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"ioOverridesMenu\">IO Overrides</button>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"inventoryMenu\">Inventory Positions</button>\r\n      </span>\r\n    </mat-menu>\r\n    <mat-menu #masterDataMenu=\"matMenu\">\r\n      <div  class=\"masterDataMenuBox bigPdlMenu\">\r\n        <div>\r\n          <div>\r\n              <h5>Base Data</h5>\r\n              <button mat-menu-item routerLink=\"/catalogs/parts\">Part Master</button>\r\n              <button mat-menu-item  routerLink=\"/catalogs/skus\">SKU</button>\r\n              <button mat-menu-item  routerLink=\"/catalogs/locations\">Location</button>\r\n          </div>\r\n          <div>\r\n              <h5>Part Relationships</h5>\r\n              <button mat-menu-item>Part Chain</button>\r\n              <button mat-menu-item>Part SUBS</button>\r\n              <button mat-menu-item>Part Kits</button>\r\n          </div>\r\n          <div>\r\n              <h5>Vendors</h5>\r\n              <button mat-menu-item>Vendor Loc SKU LT</button>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"expand2Cols\">\r\n            <h5>Replenishment Lead Times</h5>\r\n            <button mat-menu-item>Loc Loc Lead Time</button>\r\n            <button mat-menu-item>SKU Loc Lead Time</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-menu>\r\n    <mat-menu #forecastingMenu=\"matMenu\">\r\n        <div  class=\"forecastingMenuBox bigPdlMenu\" >\r\n          <div>\r\n            <h5>Causal</h5>\r\n            <button mat-menu-item  routerLink=\"/catalogs/causal\">Causal Value</button>\r\n            <button mat-menu-item>Part MTBF</button>\r\n            <button mat-menu-item>Product</button>\r\n            <button mat-menu-item  routerLink=\"/catalogs/product-rollout\">Product Rollout</button>\r\n            <button mat-menu-item routerLink=\"/catalogs/product-bom\">Product BOM</button>\r\n            <button mat-menu-item>Part Causal Type</button>\r\n          </div>\r\n          <div>\r\n              <h5>Demand</h5>\r\n              <button mat-menu-item  routerLink=\"/catalogs/demand\">Demand</button>\r\n          </div>\r\n          <div>\r\n              <h5>Replacement</h5>\r\n              <button mat-menu-item>Replacement</button>\r\n          </div>\r\n          <div>\r\n              <h5>External</h5>\r\n              <button mat-menu-item>External</button>\r\n          </div>\r\n        </div>\r\n    </mat-menu>\r\n    <mat-menu #ioOverridesMenu=\"matMenu\">\r\n        <span  >\r\n          <button mat-menu-item>Overrides</button>\r\n          <button mat-menu-item>SKU Overrides</button>\r\n        </span>\r\n    </mat-menu>\r\n    <mat-menu #inventoryMenu=\"matMenu\">\r\n        <span   >\r\n          <button mat-menu-item>Inventory</button>\r\n          <button mat-menu-item>Stock Amount</button>\r\n        </span>\r\n    </mat-menu>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"responsive && showResponsive\">\r\n      <div matRipple class=\"responsive arrowWrapper\" [ngClass]=\"{'topContainerMenu': showAdmin}\"  (click)=\"showAdmin = !showAdmin\">Admin</div>\r\n      <div class=\"level1\" *ngIf=\"showAdmin\">\r\n            <div class=\"responsive\" matRipple (click)=\"responsiveClick('/catalogs/users')\" >Users</div>\r\n       </div>\r\n      <div matRipple class=\"responsive arrowWrapper\"  [ngClass]=\"{'topContainerMenu': showDataMaintenance}\" (click)=\"showDataMaintenance = !showDataMaintenance;\">Data Maintenance</div>\r\n          <div class=\"level1\" *ngIf=\"showDataMaintenance\">\r\n            <div matRipple class=\"responsive arrowWrapper\" [ngClass]=\"{'topContainerMenu': showMasterData}\"  (click)=\"showMasterData = !showMasterData\"  >Master Data        </div>\r\n                <div *ngIf=\"showMasterData\" class=\"level2\">\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Base Data</h5>\r\n                        <div matRipple (click)=\"responsiveClick('/catalogs/parts')\">Part Master      </div>\r\n                        <div matRipple (click)=\"responsiveClick('/catalogs/skus')\">SKU              </div>\r\n                        <div matRipple (click)=\"responsiveClick('/catalogs/locations')\">Location         </div>\r\n                    </div>\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Part Relationships</h5>\r\n                        <div  matRipple>Part Chain       </div>\r\n                        <div  matRipple>Part SUBS        </div>\r\n                        <div  matRipple>Part Kits        </div>\r\n                    </div>\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Vendors</h5>\r\n                        <div  matRipple>Vendor Loc SKU LT </div>\r\n                    </div>\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Replenishment Lead Times</h5>\r\n                        <div  matRipple>Loc Loc Lead Time </div>\r\n                        <div  matRipple>SKU Loc Lead Time </div>\r\n                    </div>\r\n                  </div>\r\n            <div matRipple class=\"responsive arrowWrapper\" (click)= \"showForecasting= !showForecasting\"  [ngClass]=\"{'topContainerMenu': showForecasting, 'bottomContainerMenu': showMasterData }\" >Forecasting        </div>\r\n                <div *ngIf=\"showForecasting\" class=\"level2\">\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Causal</h5>\r\n                        <div matRipple (click)=\"responsiveClick('/catalogs/causal')\">Causal Value      </div>\r\n                        <div matRipple>Part MTBF       </div>\r\n                        <div matRipple>Product        </div>\r\n                        <div matRipple (click)=\"responsiveClick('/catalogs/product-rollout')\">Product Rollout       </div>\r\n                        <div matRipple (click)=\"responsiveClick('/catalogs/product-bom')\">Product BOM       </div>\r\n                        <div matRipple>Part Causal Type  </div>\r\n                    </div>\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Demand</h5>\r\n                        <div  matRipple (click)=\"responsiveClick('/catalogs/demand')\">Demand     </div>\r\n                    </div>\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>Replacement</h5>\r\n                        <div  matRipple>Replacement</div>\r\n                    </div>\r\n                    <div class=\"bigResponsiveMenu\">\r\n                        <h5>External</h5>\r\n                        <div  matRipple>External</div>\r\n                    </div>\r\n                  </div>\r\n            <div matRipple class=\"responsive arrowWrapper\" (click)=\"showIOOverrides = ! showIOOverrides\" [ngClass]=\"{'bottomContainerMenu': showForecasting, 'topContainerMenu': showIOOverrides }\" >IO Overrides       </div>\r\n              <div *ngIf=\"showIOOverrides\" class=\"level2\">\r\n                <div class=\"bigResponsiveMenu\">\r\n                    <div matRipple>Overrides      </div>\r\n                    <div matRipple>SKU Overrides</div>\r\n                </div>\r\n              </div>\r\n            <div matRipple class=\"responsive arrowWrapper\" (click)=\"showInventoryPositions = ! showInventoryPositions\" [ngClass]=\"{'bottomContainerMenu': showIOOverrides,  'topContainerMenu': showInventoryPositions}\" >Inventory Positions</div>\r\n              <div *ngIf=\"showInventoryPositions\" class=\"level2\">\r\n                <div class=\"bigResponsiveMenu\">\r\n                    <div matRipple>Inventory     </div>\r\n                    <div matRipple>Stock Amounts</div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      <div matRipple class=\"responsive arrowWrapper\" [ngClass]=\"{'topContainerMenu': showActions, 'bottomContainerMenu': showDataMaintenance}\" (click)=\"showActions = !showActions;\">Actions</div>\r\n      <div class=\"level1\" *ngIf=\"showActions\">\r\n         <div class=\"responsive\" matRipple (click)=\"responsiveClick('/actions/user-data-integration')\" >Run Data Integration </div>\r\n    </div>\r\n  </ng-container>\r\n</nav>"

/***/ }),

/***/ "./src/app/layout/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bigPdlMenu h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 5px;\n  color: #0033a1;\n  font-size: 1.5em;\n  font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif; }\n\n.arrowWrapper::after {\n  height: 0;\n  width: 0;\n  border-top: 5px solid #ebedee;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 4px; }\n\n.responsive.arrowWrapper::after {\n  right: 12px; }\n\ndiv.responsive {\n  border-top: 1px solid #ebedee;\n  padding: 8px 3px 8px 10px;\n  background-color: #001071;\n  font-size: 1em; }\n\n.level1 div.responsive {\n  padding-left: 25px;\n  background-color: #5b6770; }\n\n.level1 div.responsive:first-child {\n  border-top-style: none; }\n\n.level2 .bigResponsiveMenu h5, .level2 .bigResponsiveMenu div {\n  padding: 8px 3px 8px 10px;\n  padding-left: 40px;\n  border-top: 1px solid #ebedee;\n  font-size: 1em;\n  background-color: #ced1d4;\n  color: #2f3941;\n  margin: 0; }\n\n.level2 .bigResponsiveMenu h5 {\n  background-color: #88959e; }\n\n.level2 .bigResponsiveMenu:first-child h5 {\n  border-top-style: none; }\n\n.level2 .bigResponsiveMenu div {\n  padding-left: 55px; }\n\ndiv.topContainerMenu.responsive {\n  box-shadow: 0 2px 7px black; }\n\n.level1 div.topContainerMenu.responsive {\n  box-shadow: 0 2px 7px black; }\n\ndiv.bottomContainerMenu.responsive {\n  box-shadow: 0 -2px 7px black;\n  border-top-style: none; }\n\n.level1 div.bottomContainerMenu {\n  box-shadow: 0 -2px 7px black;\n  border-top-style: none;\n  /*z-index:1;*/ }\n\n@media screen and (min-width: 768px) {\n  nav {\n    display: flex;\n    height: 100%; }\n  nav > div {\n    padding: 17px 15px 10px 15px;\n    font-family: Helvetica, Arial, sans-serif; }\n  nav > div.arrowWrapper {\n    position: relative;\n    padding-right: 18px; }\n  nav > div:hover {\n    background-color: rgba(255, 255, 255, 0.15);\n    cursor: pointer; }\n  .bigPdlMenu h5 {\n    padding-left: 15px;\n    padding-right: 16px; }\n  .forecastingMenuBox {\n    display: flex; }\n  .masterDataMenuBox > div {\n    display: flex; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUvQzpcXFVzZXJzXFx2aW1zYXdhblxcQm9laW5nXFxTT1VSQ0UtQ09ERVxcb25lcGRsLWdpdGxhYi9zcmNcXGFwcFxcbGF5b3V0XFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbWVudS9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFnQjtFQUNoQixlQ0ppQjtFQW1EakIsaUJBQWdCO0VBVGhCLGlGQUFnRixFRG5DbkY7O0FBR0Q7RUFDSSxVQUFTO0VBQ1QsU0FBTztFQUNQLDhCQ0p1QjtFREt2QixtQ0FBa0M7RUFDbEMsb0NBQW1DO0VBQ25DLFlBQVc7RUFDWCxtQkFBaUI7RUFDakIsU0FBTztFQUNQLFdBQVMsRUFDWjs7QUFFRDtFQUNJLFlBQVUsRUFDYjs7QUFHRDtFQUNJLDhCQ25CdUI7RURvQnZCLDBCQUF5QjtFQUN6QiwwQkM3QnNCO0VBK0N0QixlQUFjLEVEaEJqQjs7QUFFRDtFQUNJLG1CQUFpQjtFQUNqQiwwQkNsQ29CLEVEbUN2Qjs7QUFDRDtFQUNJLHVCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsOEJDcEN1QjtFQXVDdkIsZUFBYztFRERkLDBCQ3JDcUI7RURzQ3JCLGVDeENzQjtFRHlDdEIsVUFBUyxFQUNaOztBQUNEO0VBQ0ksMEJDakR5QixFRGtENUI7O0FBRUQ7RUFDSSx1QkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUE7RUFDRyw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsdUJBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLHVCQUFxQjtFQUNyQixjQUFjLEVBQ2pCOztBQUlEO0VBQ0k7SUFDSSxjQUFZO0lBQ1osYUFBVyxFQUNkO0VBQ0Q7SUFDSSw2QkFBNEI7SUNwRGhDLDBDQUEwQyxFRHNEekM7RUFDRDtJQUNJLG1CQUFpQjtJQUNqQixvQkFBa0IsRUFDckI7RUFDRDtJQ3JDQSw0Q0FBdUM7SUFDdkMsZ0JBQWUsRURzQ2Q7RUFDRDtJQUVRLG1CQUFpQjtJQUNqQixvQkFBa0IsRUFDckI7RUFFTDtJQUNJLGNBQVksRUFDZjtFQUNEO0lBQ1EsY0FBWSxFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL21peGlucy5zY3NzJztcclxuLmJpZ1BkbE1lbnUgaDV7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgIGNvbG9yOiRIZWFkZXJCR0NvbG9yO1xyXG4gICAgQGluY2x1ZGUgYmlnZ2VyRm9udFNpemUoKTtcclxuICAgIEBpbmNsdWRlIGZvbnRGYW1pbHlOZXVlKCk7XHJcbn1cclxuXHJcblxyXG4uYXJyb3dXcmFwcGVyOjphZnRlcntcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOjA7XHJcbiAgICBib3JkZXItdG9wOjVweCBzb2xpZCAkQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHJpZ2h0OjRweDtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUuYXJyb3dXcmFwcGVyOjphZnRlcntcclxuICAgIHJpZ2h0OjEycHg7XHJcbn1cclxuXHJcblxyXG5kaXYucmVzcG9uc2l2ZXtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICBwYWRkaW5nOiA4cHggM3B4IDhweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJFByaW1hcnlEYXJrQ29sb3I7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZVN0ZCgpO1xyXG59XHJcblxyXG4ubGV2ZWwxIGRpdi5yZXNwb25zaXZle1xyXG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkU2Vjb25kYXJ5Q29sb3I7XHJcbn1cclxuLmxldmVsMSAgZGl2LnJlc3BvbnNpdmU6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOm5vbmU7XHJcbn1cclxuXHJcbi5sZXZlbDIgLmJpZ1Jlc3BvbnNpdmVNZW51IGg1LCAubGV2ZWwyIC5iaWdSZXNwb25zaXZlTWVudSBkaXZ7XHJcbiAgICBwYWRkaW5nOiA4cHggM3B4IDhweCAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRDb250cmFzdENvbG9yTWVudTtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQ29udHJhc3RDb2xvcjEwMDtcclxuICAgIGNvbG9yOiAkRGFya1RleHRDb2xvcjkwMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubGV2ZWwyIC5iaWdSZXNwb25zaXZlTWVudSBoNXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRTZWNvbmRhcnlMaWdodENvbG9yO1xyXG59XHJcblxyXG4ubGV2ZWwyICAuYmlnUmVzcG9uc2l2ZU1lbnU6Zmlyc3QtY2hpbGQgaDV7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOm5vbmU7XHJcbn1cclxuXHJcbi5sZXZlbDIgLmJpZ1Jlc3BvbnNpdmVNZW51IGRpdntcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxufVxyXG5cclxuIGRpdi50b3BDb250YWluZXJNZW51LnJlc3BvbnNpdmV7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA3cHggYmxhY2s7XHJcbn1cclxuLmxldmVsMSBkaXYudG9wQ29udGFpbmVyTWVudS5yZXNwb25zaXZle1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggN3B4IGJsYWNrO1xyXG59XHJcblxyXG5cclxuZGl2LmJvdHRvbUNvbnRhaW5lck1lbnUucmVzcG9uc2l2ZXtcclxuICAgIGJveC1zaGFkb3c6IDAgLTJweCA3cHggYmxhY2s7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOm5vbmU7XHJcbn1cclxuXHJcbi5sZXZlbDEgZGl2LmJvdHRvbUNvbnRhaW5lck1lbnV7XHJcbiAgICBib3gtc2hhZG93OiAwIC0ycHggN3B4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTpub25lO1xyXG4gICAgLyp6LWluZGV4OjE7Ki9cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpIHtcclxuICAgIG5hdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcbiAgICBuYXYgPiBkaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMTdweCAxNXB4IDEwcHggMTVweDtcclxuICAgICAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbiAgICB9XHJcbiAgICBuYXY+ZGl2LmFycm93V3JhcHBlcntcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjE4cHg7XHJcbiAgICB9XHJcbiAgICBuYXY+ZGl2OmhvdmVye1xyXG4gICAgIEBpbmNsdWRlIG1lbnVIb3ZlcigpO1xyXG4gICAgfVxyXG4gICAgLmJpZ1BkbE1lbnV7XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcmVjYXN0aW5nTWVudUJveHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICB9XHJcbiAgICAubWFzdGVyRGF0YU1lbnVCb3g+ZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(ren, uiService, router) {
        var _this = this;
        this.ren = ren;
        this.uiService = uiService;
        this.router = router;
        this.enteredButton = false;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.buttonEnterTimeout = null;
        this._showResponsive = false;
        this._responsive = false;
        this._showDataMaintenance = false;
        this._showMasterData = false;
        this._showForecasting = false;
        this._showIOOverrides = false;
        this._showInventoryPositions = false;
        this._showActions = false;
        this._showAdmin = false;
        this.uiService.isResponsiveMode$.subscribe(function (x) { return _this.responsive = x; });
    }
    Object.defineProperty(MenuComponent.prototype, "showResponsive", {
        get: function () {
            return this._showResponsive;
        },
        set: function (x) {
            if (x) {
                this.resetResponsiveMenu();
            }
            this._showResponsive = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (x) {
            if (x) {
                this.showResponsive = false;
            }
            this._responsive = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showDataMaintenance", {
        get: function () {
            return this._showDataMaintenance;
        },
        set: function (showDatMaintenance) {
            this._showDataMaintenance = showDatMaintenance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showMasterData", {
        get: function () {
            return this._showMasterData;
        },
        set: function (showMasterData) {
            this._showMasterData = showMasterData;
            if (this._showMasterData) {
                this._showInventoryPositions = false;
                this._showIOOverrides = false;
                this._showForecasting = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showForecasting", {
        get: function () {
            return this._showForecasting;
        },
        set: function (showForecasting) {
            this._showForecasting = showForecasting;
            if (this._showForecasting) {
                this._showInventoryPositions = false;
                this._showIOOverrides = false;
                this._showMasterData = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showIOOverrides", {
        get: function () {
            return this._showIOOverrides;
        },
        set: function (showIOOverrides) {
            this._showIOOverrides = showIOOverrides;
            if (showIOOverrides) {
                this._showInventoryPositions = false;
                this._showForecasting = false;
                this._showMasterData = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showInventoryPositions", {
        get: function () {
            return this._showInventoryPositions;
        },
        set: function (showInventoryPositions) {
            this._showInventoryPositions = showInventoryPositions;
            if (showInventoryPositions) {
                this._showIOOverrides = false;
                this._showForecasting = false;
                this._showMasterData = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showActions", {
        get: function () {
            return this._showActions;
        },
        set: function (showActions) {
            this._showActions = showActions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "showAdmin", {
        get: function () {
            return this._showAdmin;
        },
        set: function (showAdmin) {
            this._showAdmin = showAdmin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used in responsive mode whenever the trigger is clicked.
     */
    MenuComponent.prototype.responsiveTriggerClicked = function () {
        this.showResponsive = !this.showResponsive;
    };
    /**
     * Reset menu to initial state.
     */
    MenuComponent.prototype.resetResponsiveMenu = function () {
        this.showDataMaintenance = this.showForecasting = this.showIOOverrides = this.showInventoryPositions = this.showMasterData = false;
        this.showActions = false;
        this.showAdmin = false;
    };
    MenuComponent.prototype.responsiveClick = function (url) {
        this.showResponsive = false;
        this.router.navigateByUrl(url);
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/layout/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/layout/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-toolbar>\r\n       <h1>Welcome to OnePDL</h1> \r\n      </mat-toolbar>\r\n      <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"BEMS ID\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n          <input matInput type=\"password\" placeholder=\"Password (Case sensitive)\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Business Unit\" required>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"OnePdlCenter\">\r\n        <button mat-raised-button [disabled]=\"processing\"  (click)=\"loginClick()\">Login\r\n            <mat-spinner diameter=\"25\" *ngIf=\"processing\" ></mat-spinner>\r\n        </button>\r\n      </div>\r\n</mat-card> "

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  display: block; }\n\nmat-toolbar {\n  margin-bottom: 15px;\n  color: #0033a1; }\n\nmat-card {\n  margin: 40px 15px; }\n\n@media screen and (min-width: 768px) {\n    mat-card {\n      margin: 40px 250px 160px 250px; } }\n\nmat-form-field /deep/ label {\n  padding-left: 15px; }\n\ninput, select {\n  padding-left: 15px; }\n\nbutton {\n  position: relative; }\n\nbutton mat-spinner {\n    position: absolute;\n    top: 5px;\n    right: -30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx2aW1zYXdhblxcQm9laW5nXFxTT1VSQ0UtQ09ERVxcb25lcGRsLWdpdGxhYi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFhLEVBQ2hCOztBQUNEO0VBQ0ksb0JBQWtCO0VBQ2xCLGVDTGlCLEVETXBCOztBQUNEO0VBQ0ksa0JBQWlCLEVBS3BCOztBQUpHO0lBRko7TUFHUSwrQkFBOEIsRUFHckMsRUFBQTs7QUFDRDtFQUVRLG1CQUFpQixFQUNwQjs7QUFFTDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFpQixFQU1wQjs7QUFQRDtJQUdRLG1CQUFrQjtJQUNsQixTQUFPO0lBQ1AsYUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9taXhpbnMuc2Nzcyc7XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG5tYXQtdG9vbGJhcntcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgIGNvbG9yOiAkSGVhZGVyQkdDb2xvcjtcclxufVxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbjogNDBweCAxNXB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICBtYXJnaW46IDQwcHggMjUwcHggMTYwcHggMjUwcHg7XHJcblxyXG4gICAgfVxyXG59XHJcbm1hdC1mb3JtLWZpZWxkIC9kZWVwL3tcclxuICAgIGxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgfVxyXG59XHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWF0LXNwaW5uZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDo1cHg7XHJcbiAgICAgICAgcmlnaHQ6LTMwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzIGFscmVhZHkgaW4gdXNlIGFjcm9zcyBhcHAuIEZJcnN0IHRyeSAgdG8gdXNlIHByZWZlcnJlZCB2YXJpYWJsZXMgYmVsb3cgXHJcbiRQcmltYXJ5Q29sb3I6IzAwMzNhMTtcclxuJFByaW1hcnlEYXJrQ29sb3I6ICMwMDEwNzE7XHJcbiRTZWNvbmRhcnlDb2xvcjogIzViNjc3MDtcclxuJFNlY29uZGFyeUxpZ2h0Q29sb3I6ICM4ODk1OWU7XHJcblxyXG5cclxuLy9QcmVmZXJyZWQgdmFyaWFibGVzOlxyXG4kSGVhZGVyQkdDb2xvcjokUHJpbWFyeUNvbG9yOyAvLyBwbGVhc2UgdXRpbGl6ZSB0aGlzIGFuZCBub3QgJFByaW1hcnlDb2xvclxyXG4kRGFya1RleHRDb2xvcjkwMDogIzJmMzk0MTsgLy9wcmVmZXJyZWQgdGV4dCBjb2xvci5cclxuJENvbnRyYXN0Q29sb3JNZW51OiAjZWJlZGVlOyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yXHJcbiRDb250cmFzdENvbG9yMTAwOiNjZWQxZDQ7IC8vIGNvbnRyYXN0aW5nIHRleHQgY29sb3IgIG5vdCBzbyBjb250cmFzdGluZy5cclxuJFRhYmxlTWVudUJHQ29sb3I6ICRQcmltYXJ5RGFya0NvbG9yOyAvL3VzZWQgZm9yIGJhY2tncm91bmQgb2YgcmliYm9uICggdGFibGUgY29udHJvbCBwYW5lKSBcclxuJFRhYmxlTWVudUJHQ29sb3JIb3ZlcjogIzI1MzI4MTsgLy9uZWVkZWQgY2F1c2UgdHJhbnNwYXJlbmN5IGNhdXNlcyBzZWVpbmcgdGhpbmdzIGJlbG93LlxyXG5cclxuXHJcbi8vY3V0b2ZmIHdpZHRoIGZvciByZXNwb25zaXZlIG1vZGU6XHJcbiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQ6IDc2OHB4O1xyXG5cclxuLy9hdmFpbGFibGUgY29sb3JzIHRvIHVzZSwgIFByZWZlciB0byByZXVzZSB0aGUgYWJvdmUgb25lcyBmaXJzdFxyXG4kUHJpbWFyeUxpZ2h0Q29sb3I6ICM1MzVjZDM7XHJcbiRTZWNvbmRhcnlEYXJrQ29sb3I6ICMzMTNkNDU7XHJcbiRUZXh0Q29sb3I6ICNiOGM4ZDQ7XHJcbiRBbHRlcm5hdGVUZXh0Q09sb3I6ICM1NTU7XHJcbiRBbHRlcm5hdGVUZXh0Q29sb3IyOiAjNzc3O1xyXG5cclxuXHJcbkBtaXhpbiBlcnJvckNvbG9yKCkge1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuQG1peGluIHN1Y2Nlc3NDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjODJCQzAwO1xyXG59XHJcblxyXG5AbWl4aW4gZGlzYWJsZWRCdXR0b25PblRhYmxlQ29udHJvbFBhbmUoKXtcclxuICAgIG9wYWNpdHk6IC40OyAgICBcclxufVxyXG5cclxuQG1peGluIGZvbnRGYW1pbHkoKXtcclxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIGZvbnRGYW1pbHlOZXVlKCl7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlVzAxLVRoaW5cIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIGZvbnRTaXplU3RkKCl7XHJcbiAgICBmb250LXNpemU6IDFlbTsgLy8gZG9uJ3QgY2hhbmdlICEhIGNoYW5nZSB0aGlzIG9uIHRoZSBzdHlsZXMuY3NzXHJcbn1cclxuQG1peGluIGJpZ2dlckZvbnRTaXplKCl7XHJcbiAgICBmb250LXNpemU6IDEuNWVtOyAvL3NhbWUgc3VnZ2VzdGlvbiBhcyBhYm92ZSwgYnV0IG5vdCBhcyByaWdpZCBvZiBhIHN1Z2dlc3Rpb24uXHJcbn1cclxuXHJcbkBtaXhpbiBzdGRGb250U2l6ZUFuZEZhbWlseSgpe1xyXG4gICAgQGluY2x1ZGUgZm9udFNpemVTdGQoKTtcclxuICAgIEBpbmNsdWRlIGZvbnRGYW1pbHkoKTtcclxufVxyXG5cclxuQG1peGluIG1lbnVIb3ZlciAoKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIGlmIGRlbW9zIGFyZSBuZWVkZWQgYW5kIHRoZXJlIGlzIHNvbWV0aGluZyB1bmRlciBjb250cnVjdGlvbiwgdGhlIGJlbG93IGFkZHMgYSBncmVhdCBvdmVybGF5LlxyXG5AbWl4aW4gb3ZlcmxheVVuZGVyQ29uc3RydWN0aW9uKCl7XHJcbiAgICAvKlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXknPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidGV4dFwiPlVuZGVyIGNvbnN0cnVjdGlvbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKi9cclxuICAgIC5vdmVybGF5e1xyXG4gICAgICAgIHotaW5kZXg6IDEwMTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICN0ZXh0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGR5bmFtaWNWZXJ0aWNhbFNjcm9sbGJhcigpe1xyXG4gICAgOmhvc3R7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC8qIGZvciBmaXJlZm94ICovXHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1hdGVyaWFsSWNvbigpIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.router.navigate(['/catalogs/demand']);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginClick = function () {
        var _this = this;
        this.processing = true;
        setTimeout(function () {
            _this.authService.isLoggedIn = true;
            _this.processing = false;
        }, 2000);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.isLoggedIn = true;
    }
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.cachedConfig = null;
    }
    /**
     * @param uri url string
     * @param method optional. Default is get. otherwise, specify  uppercase.
     * @param payload for either post or put
     */
    DataService.prototype.invoke = function (uri, method, payload) {
        // below line replaces '{env}'
        uri = uri.replace(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].uriEnvironmentStringSubstitution, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].uriSegment);
        if (method && method !== 'GET') {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            if (method === 'PUT') {
                return this.http.put(uri, payload, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].httpRequestsTimeout));
            }
            if (method === 'POST') {
                return this.http.post(uri, payload, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].httpRequestsTimeout));
            }
        }
        else {
            return this.http.get(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].httpRequestsTimeout));
        }
    };
    DataService.prototype.invokeFromConfigSection = function (configSection) {
        var _this = this;
        return this.getConfigSection(configSection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (x) { return _this.invoke(x.getCatalogUri, x.getCatalogMethod, atob(x.getCatalogDefaultPayloadBase64)); }));
    };
    /**
     * Obtains the configuration from the assets folder.
     * it also caches the whole configuration to avoid future requests
     *
     *  @param configSection meant to be a key in the JSON
     */
    DataService.prototype.getConfigSection = function (configSection) {
        var _this = this;
        if (this.cachedConfig) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.cachedConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x[configSection]; }));
        }
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].jsonConfigLocation.replace('environment', src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) { return _this.cachedConfig = x; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x[configSection]; }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/ui.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");





var UiService = /** @class */ (function () {
    function UiService() {
        this.isResponsiveMode$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            return window.innerWidth < _constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].UI.responsiveModeBreakPoint;
        })), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(window.innerWidth < _constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].UI.responsiveModeBreakPoint)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        // take care of unsaved changes before leaving page:
        window.addEventListener('beforeunload', this.handleBeforeUnloadMultiBrowser.bind(this));
    }
    UiService.prototype.handleBeforeUnloadMultiBrowser = function (event) {
        var result = this.canLeavePage();
        if (result) {
            event.preventDefault();
            event.returnValue = result;
        }
    };
    /**
     * MUST CALL unsetUnloadHandler on OnDestroy !!!!!!!!!!!!!!!!
     * @param handler this function should return non empty strin if we need to warn user before unloading page
     */
    UiService.prototype.setUnloadHandler = function (handler) {
        this.canLeavePage = handler;
    };
    /**
     * by default user can unload a page.
     */
    UiService.prototype.unsetUnloadHanlder = function () {
        this.canLeavePage = function () { return ''; };
    };
    UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    name: 'dev',
    production: false,
    uriSegment: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vimsawan\Boeing\SOURCE-CODE\onepdl-gitlab\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map