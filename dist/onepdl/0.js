(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../../node_modules/file-saver/dist/FileSaver.min.js":
/*!***********************************************************************!*\
  !*** C:/Users/vimsawan/node_modules/file-saver/dist/FileSaver.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/app/master-catalogs/csv.service.ts":
/*!************************************************!*\
  !*** ./src/app/master-catalogs/csv.service.ts ***!
  \************************************************/
/*! exports provided: CsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvService", function() { return CsvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "../../../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);



var CsvService = /** @class */ (function () {
    function CsvService() {
    }
    /**
     *
     * @param headers tuple array, [0] position is COLUMN HEADER TITLE (can have whitespaces)
     * [1] positoin is raw column Header ( Internal Name ) and can't have whitespaces.
     */
    CsvService.prototype.exportAsCsvFile = function (json, headers, fileName) {
        var _this = this;
        var csvStr = '';
        var csvLine = '';
        if (headers && headers.length) {
            headers.forEach(function (header) { return csvStr += (_this.normalizeData(header[0]) + ','); });
            csvStr = csvStr.slice(0, -1);
            csvStr += '\r\n';
        }
        if (json && json.length) {
            var jsonHeaders_1 = [];
            headers.forEach(function (headerTuple) { return jsonHeaders_1.push(headerTuple[1]); });
            json.forEach(function (jsonEntry) {
                csvLine = '';
                jsonHeaders_1.forEach(function (header) { return csvLine += _this.normalizeData(jsonEntry[header]) + ','; });
                csvLine = csvLine.slice(0, -1) + '\r\n';
                csvStr += csvLine;
            });
        }
        if (csvStr) {
            var blob = new Blob([csvStr], { type: 'text/plain;charset=utf-8' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, fileName);
        }
    };
    CsvService.prototype.normalizeData = function (data) {
        if (!data && data !== 0) { // null, undefined, emspty cases handled here - except zero.
            return '';
        }
        if (typeof data === 'string' && data.match(/\n|\"|,/gm) !== null) {
            return '"' + data.replace(/\"/g, '""') + '"';
        }
        return data;
    };
    CsvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CsvService);
    return CsvService;
}());



/***/ }),

/***/ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/edit-user/edit-user.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    {{edit}} {{itemName}}\r\n    <button mat-icon-button aria-label=\"Close dialog\" (click)=\"close();\" >\r\n        <em class=\"icon\">close</em>\r\n    </button>\r\n</div>\r\n\r\n<form [formGroup]=\"viewModel.form\" novalidate>\r\n    <div class=\"content\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"User ID\" formControlName=\"UserID\" required>\r\n            <mat-error *ngIf=\"viewModel.errors['UserID']\" >{{viewModel.errors['UserID']}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Service Contract(s)</mat-label>\r\n            <mat-select multiple formControlName=\"ServiceContracts\" required>\r\n                <mat-option *ngFor=\"let contract of serviceContractCatalog\" [value]=\"contract\">\r\n                    {{contract}}\r\n                </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"viewModel.errors['ServiceContracts']\" >{{viewModel.errors['ServiceContracts']}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"FirstName\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"LastName\">\r\n        </mat-form-field>\r\n        <mat-checkbox formControlName=\"Active\">\r\n            Active\r\n        </mat-checkbox>\r\n    </div>\r\n    <mat-dialog-actions align=\"center\">\r\n            <div class=\"saveError\">{{saveError}}</div>\r\n            <button mat-button (click)=\"save();\">Save</button>\r\n            <button mat-button (click)=\"close();\">Close</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/edit-user/edit-user.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin-bottom: 15px;\n  font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  color: #0033a1;\n  text-align: center;\n  font-size: 1.5em;\n  position: relative; }\n  .title button {\n    position: absolute;\n    right: -23px;\n    top: -26px; }\n  .title button em {\n      color: #2f3941; }\n  .content {\n  display: flex;\n  flex-direction: column; }\n  mat-dialog-actions, mat-progress-bar {\n  margin-top: 15px; }\n  mat-dialog-actions button {\n  margin-top: 5px; }\n  .saveError {\n  color: #f44336; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL2RpYWxvZ3MvZWRpdC11c2VyL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxhcHBcXG1hc3Rlci1jYXRhbG9nc1xcZGlhbG9nc1xcZWRpdC11c2VyXFxlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hc3Rlci1jYXRhbG9ncy9kaWFsb2dzL2VkaXQtdXNlci9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBa0I7RUN3Q2xCLGlGQUFnRjtFRHRDaEYsZUNKaUI7RURLakIsbUJBQWtCO0VDOENsQixpQkFBZ0I7RUQ1Q2hCLG1CQUFpQixFQVNwQjtFQWZEO0lBUVEsbUJBQWtCO0lBQ2xCLGFBQVc7SUFDWCxXQUFTLEVBSVo7RUFkTDtNQVlZLGVDTGMsRURNakI7RUFJVDtFQUNJLGNBQVk7RUFDWix1QkFBc0IsRUFDekI7RUFFRDtFQUNJLGlCQUFlLEVBQ2xCO0VBRUQ7RUFDSSxnQkFBYyxFQUNqQjtFQUVEO0VDSkksZUFBYyxFRE1qQiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci1jYXRhbG9ncy9kaWFsb2dzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9taXhpbnMuc2Nzcyc7XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5TmV1ZSgpO1xyXG4gICAgY29sb3I6ICRQcmltYXJ5Q29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAaW5jbHVkZSBiaWdnZXJGb250U2l6ZSgpO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0Oi0yM3B4O1xyXG4gICAgICAgIHRvcDotMjZweDtcclxuICAgICAgICBlbXtcclxuICAgICAgICAgICAgY29sb3I6JERhcmtUZXh0Q29sb3I5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucywgbWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5zYXZlRXJyb3J7XHJcbiAgICBAaW5jbHVkZSBlcnJvckNvbG9yKCk7IFxyXG59XHJcbiIsIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/edit-user/edit-user.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_vm_user_service_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/vm-user-service-contract */ "./src/app/master-catalogs/dialogs/edit-user/models/vm-user-service-contract.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(dialogRef, vmParameters, fb) {
        this.dialogRef = dialogRef;
        this.vmParameters = vmParameters;
        this.fb = fb;
        this.edit = 'New';
        this.itemName = '';
        this.saveError = '';
        // pending to connect the below to the actual catalog of service contracts
        this.serviceContractCatalog = ['SC1', 'SC2', 'SC3', 'SC4', 'SC5'];
        this.edit = !!(vmParameters[1]) ? 'Edit' : 'New';
        this.itemName = vmParameters[0].tableModel.itemName;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewModel = new _models_vm_user_service_contract__WEBPACK_IMPORTED_MODULE_3__["VmUserServiceContract"]((this.vmParameters[1] && this.vmParameters[1].originalData), this.fb);
        this.viewModel.form.valueChanges.subscribe(function (x) { return _this.saveError = ''; });
    };
    EditUserComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditUserComponent.prototype.save = function () {
        if (this.viewModel.form.valid) {
            this.close();
        }
        else {
            this.saveError = 'Unable to save. Please verify the above fields';
        }
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Array, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/master-catalogs/dialogs/edit-user/models/vm-user-service-contract.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/edit-user/models/vm-user-service-contract.ts ***!
  \**************************************************************************************/
/*! exports provided: VmUserServiceContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmUserServiceContract", function() { return VmUserServiceContract; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var VmUserServiceContract = /** @class */ (function () {
    /**
     * @param model if it is null, we'll assume it's 'Add New' functionality.
     * @param fb the form builder service provided through DI in the parent component
     */
    function VmUserServiceContract(model, fb) {
        var _this = this;
        this.model = model;
        this.fb = fb;
        this.errors = {}; // current errors.
        this.form = this.fb.group({
            UserID: [this.model && this.model.UserID, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            ServiceContracts: [this.model && this.convertUserServiceContractToArray(this.model.ServiceContractID), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            FirstName: fb.control({ value: this.model && this.model.FirstName, disabled: true }),
            LastName: fb.control({ value: this.model && this.model.LastName, disabled: true }),
            Active: [!(this.model) || this.model.Active === 'Yes']
        }, { updateOn: 'blur' });
        this.form.valueChanges.subscribe(function (x) {
            _this.errors = {};
            for (var _i = 0, _a = Object.keys(_this.form.controls); _i < _a.length; _i++) {
                var abstractControl = _a[_i];
                var formControl = _this.form.get(abstractControl);
                _this.errors[abstractControl] = '';
                if (formControl && formControl.dirty && !formControl.valid) {
                    _this.errors[abstractControl] = 'This field is required';
                }
            }
        });
    }
    VmUserServiceContract.prototype.convertUserServiceContractToArray = function (commaSeparated) {
        if (!commaSeparated) {
            return [];
        }
        var untrimmed = commaSeparated.split(',');
        var trimmedArr = [];
        untrimmed.forEach(function (x) { return trimmedArr.push(x.trim()); });
        return trimmedArr;
    };
    return VmUserServiceContract;
}());



/***/ }),

/***/ "./src/app/master-catalogs/dialogs/upload/upload.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/upload/upload.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    File Upload - {{itemName}}\r\n    <button mat-icon-button aria-label=\"Close dialog\" (click)=\"close();\" >\r\n        <em class=\"icon\">close</em>\r\n      </button>\r\n    </div>\r\n <div class=\"content\">\r\n      <ng-container *ngIf=\"status == 'start' || status =='selectionError' || status =='uploadError'\">\r\n          <label for=\"fileUpload\">\r\n              Select a file to upload:\r\n          </label>\r\n          <button mat-icon-button aria-label=\"Add file button\" (click)=\"file.click();\" class=\"addFileIcon\" >\r\n              <em class=\"icon\">add_circle_outline</em>\r\n          </button>\r\n      </ng-container>\r\n      <input type =\"file\" id=\"fileUpload\" accept=\"{{fileFormatsAccept}}\" #file (input)=\"selectedFile(file.files);\" /> \r\n      <div *ngIf=\"selectedFileName\" class=\"selectedFileName\">\r\n          {{status == 'uploading'? 'Uploading':'Selected'}} file:<br/> <strong>{{selectedFileName}}</strong> \r\n       </div>\r\n       <div *ngIf=\"status =='uploadError' || status == 'selectionError'\" class=\"error\">\r\n              <em class=\"inlineIcon\">error_outline</em> Error: {{errorMessage}}\r\n        </div>\r\n        <div class='success' *ngIf=\"status=='uploadSuccess'\">\r\n           <em class=\"inlineIcon\">check_circle_outline</em> Upload completed\r\n           <div>\r\n              - 2 of 5 rows were successfully uploaded\r\n              <br/>\r\n                - 3 of 5 rows were not uploaded due to the following errors:\r\n              <br/>\r\n                - Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Placeat fugit omnis doloremque voluptatum sapiente optio ullam,<br/> quod autem totam vitae ea libero est possimus corrupti deleniti.<br/> Voluptates distinctio eaque asperiores! \r\n           </div>\r\n        </div>\r\n       <div class=\"introText\" *ngIf=\"status== 'start' || status == 'selectionError' || status == 'uploadError'\">\r\n          File  format(s) accepted: {{fileFormatsAccept}}\r\n          <br/>\r\n          Max file size accepted: {{fileSize(maxFileSize)}}\r\n        </div>\r\n      <div class=\"uploading\" *ngIf=\"status == 'uploading'\">\r\n       <mat-progress-bar mode=\"determinate\" [value]=\"percentage\"></mat-progress-bar>\r\n        <div class=\"uploadData\">\r\n          <div>File size: {{selectedFileSize}}</div>\r\n          <div>{{percentage}}%</div>\r\n        </div>\r\n      </div>\r\n      \r\n </div>\r\n \r\n<mat-dialog-actions align=\"center\">\r\n  <button  (click)=\"downloadClick()\" mat-button>Download Template</button>\r\n <button [disabled]=\"(selectedFileName&&validFile)&&(!(status=='uploading'|| status =='uploadSuccess'))?false:true\"  mat-button (click)=\"uploadClick();\">Upload</button>\r\n  <button  mat-button (click)=\"close();\">Close</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/master-catalogs/dialogs/upload/upload.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/upload/upload.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='file'] {\n  visibility: hidden;\n  width: 1px;\n  height: 1px; }\n\n.title {\n  margin-bottom: 15px;\n  font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  color: #0033a1;\n  text-align: center;\n  font-size: 1.5em;\n  position: relative; }\n\n.title button {\n    position: absolute;\n    right: -23px;\n    top: -26px; }\n\n.title button em {\n      color: #2f3941; }\n\n.content {\n  color: #2f3941;\n  text-align: center; }\n\n.content label {\n    display: block; }\n\n.content .addFileIcon {\n    width: 48px;\n    height: 48px;\n    margin: 20px; }\n\n.content .addFileIcon em {\n      color: #0033a1;\n      font-size: 48px; }\n\n.content .addFileIcon:hover {\n      opacity: .75; }\n\n.content .uploadData {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px; }\n\n.content .success em {\n    font-size: 36px;\n    top: 11px;\n    color: #0033a1; }\n\n.content .success div {\n    margin-top: 15px;\n    text-align: left;\n    padding: 0 20px; }\n\n.selectedFileName {\n  margin: 0px 15px 1px 15px; }\n\n.error {\n  margin: 1px 15px 15px 15px;\n  color: #f44336; }\n\n.introText, .uploading {\n  margin-top: 15px; }\n\nmat-dialog-actions, mat-progress-bar {\n  margin-top: 15px; }\n\nmat-dialog-actions button {\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL2RpYWxvZ3MvdXBsb2FkL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxhcHBcXG1hc3Rlci1jYXRhbG9nc1xcZGlhbG9nc1xcdXBsb2FkXFx1cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hc3Rlci1jYXRhbG9ncy9kaWFsb2dzL3VwbG9hZC9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBa0I7RUFDbEIsV0FBUztFQUNULFlBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUFrQjtFQ2tDbEIsaUZBQWdGO0VEaENoRixlQ1ZpQjtFRFdqQixtQkFBa0I7RUN3Q2xCLGlCQUFnQjtFRHRDaEIsbUJBQWlCLEVBU3BCOztBQWZEO0lBUVEsbUJBQWtCO0lBQ2xCLGFBQVc7SUFDWCxXQUFTLEVBSVo7O0FBZEw7TUFZWSxlQ1hjLEVEWWpCOztBQUlUO0VBQ0ksZUNqQnNCO0VEcUJ0QixtQkFBa0IsRUFnQ3JCOztBQXJDRDtJQUdRLGVBQWEsRUFDaEI7O0FBSkw7SUFPUSxZQUFVO0lBQ1YsYUFBWTtJQUNaLGFBQVcsRUFRZDs7QUFqQkw7TUFXWSxlQ25DUztNRG9DVCxnQkFDSixFQUFDOztBQWJUO01BZVksYUFBWSxFQUNmOztBQWhCVDtJQW1CUSxjQUFZO0lBQ1osK0JBQThCO0lBQzlCLGdCQUFjLEVBRWpCOztBQXZCTDtJQTJCWSxnQkFBZTtJQUNmLFVBQVM7SUFDVCxlQ3JEUyxFRHNEWjs7QUE5QlQ7SUFnQ1ksaUJBQWU7SUFDZixpQkFBZ0I7SUFDaEIsZ0JBQWUsRUFDbEI7O0FBSVQ7RUFDSSwwQkFBd0IsRUFDM0I7O0FBQ0Q7RUFDSSwyQkFBMEI7RUN4QzFCLGVBQWMsRUQwQ2pCOztBQUVEO0VBQ0ksaUJBQWUsRUFDbEI7O0FBRUQ7RUFDSSxpQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGdCQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL2RpYWxvZ3MvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL21peGlucy5zY3NzJztcclxuXHJcbmlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDoxcHg7XHJcbiAgICBoZWlnaHQ6MXB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5TmV1ZSgpO1xyXG4gICAgY29sb3I6ICRQcmltYXJ5Q29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAaW5jbHVkZSBiaWdnZXJGb250U2l6ZSgpO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0Oi0yM3B4O1xyXG4gICAgICAgIHRvcDotMjZweDtcclxuICAgICAgICBlbXtcclxuICAgICAgICAgICAgY29sb3I6JERhcmtUZXh0Q29sb3I5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGNvbG9yOiAkRGFya1RleHRDb2xvcjkwMDtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuYWRkRmlsZUljb257XHJcbiAgICAgICAgd2lkdGg6NDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgZW17XHJcbiAgICAgICAgICAgIGNvbG9yOiRQcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0OHB4ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVwbG9hZERhdGF7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuc3VjY2Vzc3tcclxuICAgICAgICBcclxuICAgICAgICBlbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJFByaW1hcnlDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4uc2VsZWN0ZWRGaWxlTmFtZSB7XHJcbiAgICBtYXJnaW46MHB4IDE1cHggMXB4IDE1cHg7XHJcbn1cclxuLmVycm9yIHtcclxuICAgIG1hcmdpbjogMXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgQGluY2x1ZGUgZXJyb3JDb2xvcigpO1xyXG59XHJcblxyXG4uaW50cm9UZXh0LCAudXBsb2FkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWFjdGlvbnMsIG1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG59XHJcbiIsIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/master-catalogs/dialogs/upload/upload.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/master-catalogs/dialogs/upload/upload.component.ts ***!
  \********************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/confirm-dialog/confirm-dialog.component */ "./src/app/layout/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _models_vm_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/vm-table */ "./src/app/master-catalogs/models/vm-table.ts");
/* harmony import */ var _csv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../csv.service */ "./src/app/master-catalogs/csv.service.ts");
/* harmony import */ var src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout/confirm-dialog/confirm-dialog-model */ "./src/app/layout/confirm-dialog/confirm-dialog-model.ts");








var UploadComponent = /** @class */ (function () {
    function UploadComponent(dialogRef, dialogService, vmTable, csvService) {
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.vmTable = vmTable;
        this.csvService = csvService;
        // data expected from configuration:
        this.itemName = 'SampleItemName';
        this.fileFormatsAccept = '.sample, .sample2';
        this.maxFileSize = 100; // 50 MB in bytes
        this.uploadUri = '';
        this._status = 'start';
        this.errorMessage = '';
        this.validFile = false;
        this.selectedFileName = '';
        this.selectedFileSize = '';
        this.percentage = 0;
        this.closeWindowRef = null;
        this.itemName = vmTable.tableModel.itemName;
        this.maxFileSize = vmTable.tableModel.fileUploadMaxByteSize;
        this.fileFormatsAccept = vmTable.tableModel.fileUploadFormats;
        this.uploadUri = vmTable.tableModel.fileUploadUrl;
    }
    Object.defineProperty(UploadComponent.prototype, "status", {
        get: function () {
            return this._status;
        },
        /**
         * add initializers here please.
         */
        set: function (n) {
            if (n === 'uploading') {
                this.errorMessage = '';
                this.percentage = 0;
            }
            this._status = n;
        },
        enumerable: true,
        configurable: true
    });
    UploadComponent.prototype.ngOnInit = function () {
        // first successful test: CSV header
        // have to change file extension to csv:
        // const result = 'data:text/csv;charset=utf-8,' +
        // this.vmTable.getColumsForTemplate().join(',')
        // 
        // second successfull atempt.:
        // 
        // need to change extension to xls
        //  const ctx = {
        //   worksheet : this.vmTable.tableModel.itemName,
        //   table : '<table><tr><th>' + this.vmTable.getColumsForTemplate().join('</th><th>') + '</t></tr></table>'
        //   };
        //  const template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
        //   const result = 'data:application/vnd.ms-excel;base64,' +
        //   btoa(unescape(encodeURIComponent(template.replace(/{(\w+)}/g, (m, p) => ctx[p]))));
        //  this.templatePayload  = this.sanitizer.bypassSecurityTrustUrl(result);
    };
    UploadComponent.prototype.downloadClick = function () {
        this.csvService.exportAsCsvFile([], this.vmTable.getColumsForTemplate(), 'template_' + this.vmTable.tableModel.itemName + '.csv');
    };
    UploadComponent.prototype.close = function () {
        var _this = this;
        if (this.status === 'uploading') {
            this.closeWindowRef = this.dialogService.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                width: '350px',
                data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]('Upload in progress. Discard upload and close window?', [['Yes', true], ['No', false]])
            });
            this.closeWindowRef.afterClosed().subscribe(function (result) {
                if (result) {
                    // Means user clicked 'Yes' and result is true.
                    if (_this.status === 'uploading') {
                        _this.dialogRef.close();
                    }
                }
            });
        }
        else {
            this.dialogRef.close();
        }
    };
    UploadComponent.prototype.selectedFile = function (files) {
        this.validFile = false;
        this.errorMessage = '';
        if (files && files.length > 0) {
            this.selectedFileName = files[0].name;
            this.validFile = this.validateFile(files[0]);
            if (this.validFile) {
                this.selectedFileSize = this.fileSize(files[0].size);
                this.status = 'start';
            }
            else {
                this.status = 'selectionError';
            }
        }
        else {
            this.selectedFileName = '';
        }
    };
    UploadComponent.prototype.validateFile = function (file) {
        var result = true;
        // validate file extension.
        if (this.fileFormatsAccept && this.fileFormatsAccept.length) {
            var extensions = this.fileFormatsAccept.split(',');
            if (!extensions.find(function (x) { return file.name.toLocaleLowerCase().endsWith(x.trim().toLocaleLowerCase()); })) {
                this.errorMessage = 'Unsupported file format. Please choose another file';
                return false;
            }
        }
        // file size validation.
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.errorMessage = 'File exceeds size limit. Please choose another file';
            return false;
        }
        // empty file validation
        if (!file.size) {
            this.errorMessage = 'File appears to be empty. Please choose another file';
            return false;
        }
        return result;
    };
    UploadComponent.prototype.fileSize = function (bytes) {
        var exp = Math.log(bytes) / Math.log(1024) | 0;
        var result = (bytes / Math.pow(1024, exp)).toFixed(2);
        return result + ' ' + (exp === 0 ? 'bytes' : 'KMGTPEZY'[exp - 1] + 'B');
    };
    UploadComponent.prototype.uploadClick = function () {
        var _this = this;
        this.status = 'uploading';
        this.intevalHandler = window.setInterval(function (x) {
            _this.percentage++;
            if (_this.percentage >= 100) {
                // this.error = 'An error ocurred while trying to upload.';
                _this.status = 'uploadSuccess';
                if (_this.closeWindowRef) {
                    _this.closeWindowRef.close();
                    _this.closeWindowRef = null;
                }
                clearInterval(_this.intevalHandler);
            }
        }, 100);
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/master-catalogs/dialogs/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/master-catalogs/dialogs/upload/upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _models_vm_table__WEBPACK_IMPORTED_MODULE_5__["VmTable"],
            _csv_service__WEBPACK_IMPORTED_MODULE_6__["CsvService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/master-catalogs/master-catalogs-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/master-catalogs/master-catalogs-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MasterCatalogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCatalogsRoutingModule", function() { return MasterCatalogsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "./src/app/master-catalogs/table/table.component.ts");
/* harmony import */ var _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/resolver.service */ "./src/app/services/resolver.service.ts");
/* harmony import */ var _user_data_integration_user_data_integration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data-integration/user-data-integration.component */ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.ts");






var routes = [{
        path: '',
        children: [
            // children meant for /catalogs/{whateverChildRouteName}, except for actions. (see below)
            {
                path: 'parts', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                },
            },
            {
                path: 'skus', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                path: 'locations', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                path: 'demand', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                path: 'causal', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                path: 'product-rollout', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                path: 'product-bom', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                path: 'users', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            },
            {
                // meant for /actions/user-data-integration
                path: 'user-data-integration', component: _user_data_integration_user_data_integration_component__WEBPACK_IMPORTED_MODULE_5__["UserDataIntegrationComponent"],
                resolve: {
                    catalogsData: _services_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ResolverService"]
                }
            }
        ]
    }];
var MasterCatalogsRoutingModule = /** @class */ (function () {
    function MasterCatalogsRoutingModule() {
    }
    MasterCatalogsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MasterCatalogsRoutingModule);
    return MasterCatalogsRoutingModule;
}());



/***/ }),

/***/ "./src/app/master-catalogs/master-catalogs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/master-catalogs/master-catalogs.module.ts ***!
  \***********************************************************/
/*! exports provided: MasterCatalogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCatalogsModule", function() { return MasterCatalogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _master_catalogs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master-catalogs-routing.module */ "./src/app/master-catalogs/master-catalogs-routing.module.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./table/table.component */ "./src/app/master-catalogs/table/table.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/master-catalogs/table-filter/table-filter.component.ts");
/* harmony import */ var _dialogs_upload_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialogs/upload/upload.component */ "./src/app/master-catalogs/dialogs/upload/upload.component.ts");
/* harmony import */ var _dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialogs/edit-user/edit-user.component */ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var _user_data_integration_user_data_integration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-data-integration/user-data-integration.component */ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.ts");






















var MasterCatalogsModule = /** @class */ (function () {
    function MasterCatalogsModule() {
    }
    MasterCatalogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_17__["TableComponent"], _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_18__["TableFilterComponent"], _dialogs_upload_upload_component__WEBPACK_IMPORTED_MODULE_19__["UploadComponent"], _dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_20__["EditUserComponent"], _user_data_integration_user_data_integration_component__WEBPACK_IMPORTED_MODULE_21__["UserDataIntegrationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _master_catalogs_routing_module__WEBPACK_IMPORTED_MODULE_4__["MasterCatalogsRoutingModule"]
            ],
            entryComponents: [_dialogs_upload_upload_component__WEBPACK_IMPORTED_MODULE_19__["UploadComponent"], _dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_20__["EditUserComponent"]],
            providers: [
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { disableClose: true, hasBackdrop: true } }
            ]
        })
    ], MasterCatalogsModule);
    return MasterCatalogsModule;
}());



/***/ }),

/***/ "./src/app/master-catalogs/models/catalog-table-filters-per-column-type.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/master-catalogs/models/catalog-table-filters-per-column-type.ts ***!
  \*********************************************************************************/
/*! exports provided: TABLE_FILTERS_PER_COLUMN_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_FILTERS_PER_COLUMN_TYPE", function() { return TABLE_FILTERS_PER_COLUMN_TYPE; });
var genericNumberFilters = [
    { displayName: '=', compare: function (x, y) {
            var xNumber = parseFloat(x);
            var yNumber = parseFloat(y);
            if (isNaN(xNumber) || isNaN(yNumber)) {
                return x === y;
            }
            return xNumber === yNumber;
        } },
    { displayName: '>', compare: function (x, y) { return x > y; } },
    { displayName: '<', compare: function (x, y) { return x < y; } },
    { displayName: '>=', compare: function (x, y) { return x >= y; } },
    { displayName: '<=', compare: function (x, y) { return x <= y; } },
    { displayName: '<>', compare: function (x, y) {
            var xNumber = parseFloat(x);
            var yNumber = parseFloat(y);
            if (isNaN(xNumber) || isNaN(yNumber)) {
                return x !== y;
            }
            return xNumber !== yNumber;
        } }
];
var genericTextFilters = [
    { displayName: 'Begins With', compare: function (x, y) { return x && x.startsWith(y); } },
    { displayName: 'Contains', compare: function (x, y) { return x && (x.indexOf(y) >= 0); } },
    { displayName: 'Ends With', compare: function (x, y) { return x && x.endsWith(y); } },
    { displayName: 'Does Not Contain', compare: function (x, y) { return x && (x.indexOf(y) < 0); } },
    { displayName: 'Equal To', compare: function (x, y) { return x === y; } },
    { displayName: 'Not Equal To', compare: function (x, y) { return x !== y; } },
    { displayName: 'Empty', omitFilterValue: true, compare: function (x, y) { return !(x); } },
    { displayName: 'Not Empty', omitFilterValue: true, compare: function (x, y) { return !!(x); } },
    { displayName: 'Less Than', compare: function (x, y) { return x < y; } },
    { displayName: 'Greater Than', compare: function (x, y) { return x > y; } },
    { displayName: 'Regex', compare: function (x, y) { return true; } }
];
var checkBoxFilters = [
    { displayName: 'Equal To', compare: function (x, y) { return x === y; } },
    { displayName: 'Not Equal To', compare: function (x, y) { return x !== y; } }
];
var TABLE_FILTERS_PER_COLUMN_TYPE = {
    'OnePDLNumber': genericNumberFilters.slice(),
    'OnePDLCurrency': genericNumberFilters.slice(),
    'OnePDLDate': genericNumberFilters.slice(),
    'OnePDLString': genericTextFilters.slice(),
    'OnePDLTextarea': genericTextFilters.slice(),
    'OnePDLList': genericTextFilters.slice(),
    'OnePDLCheckbox': checkBoxFilters
};


/***/ }),

/***/ "./src/app/master-catalogs/models/vm-table-filter-criteria.ts":
/*!********************************************************************!*\
  !*** ./src/app/master-catalogs/models/vm-table-filter-criteria.ts ***!
  \********************************************************************/
/*! exports provided: VmTableFilterCriteria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmTableFilterCriteria", function() { return VmTableFilterCriteria; });
/* harmony import */ var _vm_table_filter_criterion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-table-filter-criterion */ "./src/app/master-catalogs/models/vm-table-filter-criterion.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");



/**
 * Represents all the filter criteria
 * * criterion: a single filter object.
 * criteria: a collection of many filter objects.
 */
var VmTableFilterCriteria = /** @class */ (function () {
    /**
     * @param fb if this is not null it means we are in edit mode.
     * @param preExisting the preExisting validated object to copy to a new instance.
     * three posibilities:
     * fb  = null and preExisting != null : will create a new object with no reactive uderlying objects
     * fb != null and preExisting != null  will create a new reactive form with values of preExisting object.
     * fb != null and preExisting = null  will create a new reactive form with empty intializations values
     *  and add 1 empty obj. into the array.
     */
    function VmTableFilterCriteria(fb, preExisting) {
        var _this = this;
        this.fb = fb;
        this.tableFilterCriteria = [];
        if (this.fb && !preExisting) {
            // means we are creating a new ngOnInit  empty model
            this.tableFilterCriteria.push(new _vm_table_filter_criterion__WEBPACK_IMPORTED_MODULE_0__["VmTableFilterCriterion"](null, this.fb));
            this.form = this.fb.group({
                partNumber: null,
                criteria: this.fb.array([this.tableFilterCriteria[0].form])
            });
            this.formArray = this.form.get('criteria');
        }
        if (this.fb && preExisting) {
            // means we are creating an edit model out of a current valid applied filter model.
            if (preExisting.tableFilterCriteria.length) {
                preExisting.tableFilterCriteria.forEach(function (appliedCriterion) {
                    return _this.tableFilterCriteria.push(new _vm_table_filter_criterion__WEBPACK_IMPORTED_MODULE_0__["VmTableFilterCriterion"](appliedCriterion, _this.fb));
                });
            }
            else { // criteria in edit mode got to show at least one empty element.
                this.tableFilterCriteria.push(new _vm_table_filter_criterion__WEBPACK_IMPORTED_MODULE_0__["VmTableFilterCriterion"](null, this.fb));
            }
            this.form = this.fb.group({
                partNumber: preExisting.partNumber,
                criteria: this.fb.array(this.tableFilterCriteria.map(function (x) { return x.form; }).slice())
            });
            this.formArray = this.form.get('criteria');
        }
        if (this.fb == null && preExisting) {
            // means we are creating an appliedFIlter model out of an editModel.
            this.partNumber = preExisting.form.get('partNumber').value;
            if (preExisting.hasNonEmptyValues()) {
                for (var i = 0; i < preExisting.tableFilterCriteria.length; i++) {
                    this.tableFilterCriteria.push(new _vm_table_filter_criterion__WEBPACK_IMPORTED_MODULE_0__["VmTableFilterCriterion"](preExisting.tableFilterCriteria[i], null));
                }
            }
        }
    }
    VmTableFilterCriteria.prototype.addNewCriterion = function () {
        var criterion = new _vm_table_filter_criterion__WEBPACK_IMPORTED_MODULE_0__["VmTableFilterCriterion"](null, this.fb);
        this.formArray.push(criterion.form);
        this.tableFilterCriteria.push(criterion);
    };
    /**
     * in the future we will check if fb is null we need to make
     * a service call so the server updates the model.
     */
    VmTableFilterCriteria.prototype.clearPartNumber = function () {
        this.partNumber = null;
    };
    /**
  * Removes the underlying viewmodel ogject as well as the reactive form part of it.
  * If there is only one element in array, it wipes the values but won't remove that element.
  * */
    VmTableFilterCriteria.prototype.removeCriterion = function (i) {
        if (this.fb == null) { // means this is an applied filter model
            this.tableFilterCriteria.splice(i, 1);
            return;
        }
        if (this.tableFilterCriteria.length > 1) {
            this.tableFilterCriteria.splice(i, 1);
            this.formArray.removeAt(i);
            this.form.markAsDirty();
        }
        else {
            var group = this.formArray.get(i + '');
            for (var control in group.controls) {
                if (group.controls[control] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                    group.controls[control].patchValue(null);
                }
            }
        }
    };
    /**
    * For the recycle bin to hide if no values are there to empty - exclusively index zero.
    * method called also from other places.
    */
    VmTableFilterCriteria.prototype.hasNonEmptyValues = function () {
        var group = this.formArray.get('0');
        for (var control in group.controls) {
            if (group.controls[control] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                if (group.controls[control].value) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Validates the filter form.
     * If it has not been changed, return false
     * If it is valid, then accept it. ( it means it must have filter values)
     * If it is not valid as per the valid property, there is still a chance for it to be valid
     * since they may want to filter only by part number   */
    VmTableFilterCriteria.prototype.validForApplying = function () {
        if (this.form.pristine) {
            return false;
        }
        if (this.form.valid) {
            return true;
        }
        // more complex validations must have a partNumber, must have the array with only one element and all empty values.
        var hasPartNumber = !!this.form.get('partNumber').value;
        if (hasPartNumber && this.formArray.length === 1 && !this.hasNonEmptyValues()) {
            return true;
        }
        return false;
    };
    VmTableFilterCriteria.prototype.isDirty = function () {
        return ((this.form && this.form.dirty) || this.tableFilterCriteria.length > 1);
    };
    /**
    * When button clear all filters is clicked
    * We reset the filter form.
    * We also call the server and fetch a fresh set of records ( pending )
    */
    VmTableFilterCriteria.prototype.clearAll = function () {
        this.form.reset();
        this.tableFilterCriteria.forEach(function (c) {
            c.operator = null; // clear cached operators.
        });
        if (this.formArray.length > 1) {
            var intialLength = this.formArray.length;
            for (var i = intialLength - 1; i > 0; i--) {
                this.removeCriterion(i);
            }
        }
    };
    VmTableFilterCriteria.prototype.partNumberCapped = function () {
        var result = this.partNumber;
        if (result && result.length > src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].UI.maxChipLength) {
            result = result.substring(0, src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].UI.maxChipLength) + '..';
        }
        return result;
    };
    return VmTableFilterCriteria;
}());



/***/ }),

/***/ "./src/app/master-catalogs/models/vm-table-filter-criterion.ts":
/*!*********************************************************************!*\
  !*** ./src/app/master-catalogs/models/vm-table-filter-criterion.ts ***!
  \*********************************************************************/
/*! exports provided: VmTableFilterCriterion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmTableFilterCriterion", function() { return VmTableFilterCriterion; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _catalog_table_filters_per_column_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog-table-filters-per-column-type */ "./src/app/master-catalogs/models/catalog-table-filters-per-column-type.ts");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");



/**
 * Represents a single entry of a filter criterion by the user.
 * criterion: a single filter object.
 * criteria: a collection of many filter objects.
 */
var VmTableFilterCriterion = /** @class */ (function () {
    function VmTableFilterCriterion(preExisting, fb) {
        var _this = this;
        if (fb) {
            if (preExisting) {
                this.form = fb.group({
                    operator: [preExisting.operator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    value: [preExisting.filterValue, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    column: [preExisting.column, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                });
            }
            else {
                this.form = fb.group({
                    operator: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                    column: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                });
            }
            this.form.get('operator').valueChanges.subscribe(function (value) {
                var valueFormControl = _this.form.get('value');
                if (value && value.omitFilterValue) {
                    if ((!_this.operator) || (!_this.operator.omitFilterValue)) { // look at previous value to see if change needed.
                        valueFormControl.clearValidators();
                        valueFormControl.patchValue(null);
                    }
                }
                else {
                    if (_this.operator && _this.operator.omitFilterValue) { // only change it if required.
                        valueFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
                    }
                }
                _this.operator = value; // preserve previuos value for future reference
            });
            this.form.get('column').valueChanges.subscribe(function (value) {
                var valueFormControl = _this.form.get('value');
                var operatorFormControl = _this.form.get('operator');
                operatorFormControl.patchValue(null);
                valueFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
                valueFormControl.patchValue(null);
            });
        }
        else {
            // it means it is a VMTableFilter Criterion. it'll extract
            this.column = preExisting.form.get('column').value;
            this.operator = preExisting.form.get('operator').value;
            this.filterValue = preExisting.form.get('value').value;
        }
    }
    VmTableFilterCriterion.prototype.getColumnFilters = function () {
        var column = this.form.get('column').value;
        if (column) {
            return _catalog_table_filters_per_column_type__WEBPACK_IMPORTED_MODULE_1__["TABLE_FILTERS_PER_COLUMN_TYPE"][column.columnType];
        }
        return [];
    };
    VmTableFilterCriterion.prototype.requiredValue = function () {
        var operator = this.form.get('operator').value;
        if (operator && operator.omitFilterValue) {
            return false;
        }
        return true; // for the sake of a consistent UI, expected behaviour.
    };
    VmTableFilterCriterion.prototype.toString = function () {
        var preResult = this.column.headerName + ' ' +
            this.operator.displayName +
            (this.operator.omitFilterValue ? '' : ' ' +
                (this.column.columnType !== 'OnePDLCheckbox' ? this.filterValue :
                    (this.filterValue ? 'Yes' : 'No')));
        if (preResult && preResult.length > src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].UI.maxChipLength) {
            preResult = preResult.substring(0, src_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].UI.maxChipLength) + '...';
        }
        return preResult;
    };
    return VmTableFilterCriterion;
}());



/***/ }),

/***/ "./src/app/master-catalogs/models/vm-table-row.ts":
/*!********************************************************!*\
  !*** ./src/app/master-catalogs/models/vm-table-row.ts ***!
  \********************************************************/
/*! exports provided: VmTableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmTableRow", function() { return VmTableRow; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


/**
 * To avoid bloating will try to stay away from reactive forms and VmTableCell objects.
 * Let's see if this approach pays of in performance terms.
 */
var VmTableRow = /** @class */ (function () {
    function VmTableRow(originalData, parentTable) {
        this.originalData = originalData;
        this.parentTable = parentTable;
        this.dirty = false;
        this.changedData = {};
    }
    /**
     * invoked any time a cell is changed.
     * @param newValue
     * @param column
     */
    VmTableRow.prototype.patchValue = function (newValue, column) {
        var backendValue = this.getBackendValue(newValue, column);
        if (typeof (this.changedData[column.internalName]) !== 'undefined') {
            if (this.changedData[column.internalName] !== backendValue) {
                this.changedData[column.internalName] = backendValue;
                // then compare against original value and if things are same, cancel this change.
                if (this.originalData[column.internalName] !== backendValue) {
                    this.dirty = true;
                    return true;
                }
                else {
                    // same as original data, erase change object entry
                    delete this.changedData[column.internalName];
                }
            }
        }
        else if (this.originalData[column.internalName] !== backendValue) {
            this.changedData[column.internalName] = backendValue;
            this.dirty = true;
            return true;
        }
        this.recalculateDirty();
        return false;
    };
    VmTableRow.prototype.getRowValue = function (columnName) {
        if (typeof (this.changedData[columnName]) !== 'undefined') {
            return this.changedData[columnName];
        }
        return this.originalData[columnName];
    };
    VmTableRow.prototype.recalculateDirty = function () {
        if (Object.keys(this.changedData).length === 0) {
            this.dirty = false;
        }
    };
    /**
     * Finds out if the cell has changed
     *
     * @param columnName must be the column's internal name.
     */
    VmTableRow.prototype.hasCellChanged = function (columnName) {
        return typeof (this.changedData[columnName]) !== 'undefined';
    };
    /**
     * Acts as a translator or dictionary between UI controls and actual JSON value that is persisted
     * in the backend microservice.
     */
    VmTableRow.prototype.getBackendValue = function (newValue, column) {
        switch (column.columnType) {
            case 'OnePDLCheckbox': return newValue ? 1 : 0;
            default: return newValue;
        }
    };
    /**
     *  Gets rid of the changes that have been made on the clientside.
     */
    VmTableRow.prototype.undoAllChanges = function () {
        this.changedData = {};
        this.dirty = false;
    };
    /**
     * ONLY IF THE ITEM IS DIRTY, it will try to reach the backend and sync the changes.
     */
    VmTableRow.prototype.commitChanges = function () {
        var _this = this;
        if (this.dirty) {
            var submitObject_1 = {};
            Object.assign(submitObject_1, this.originalData);
            // then we overwrite the delta:
            Object.assign(submitObject_1, this.changedData);
            return this.parentTable.dataService.invoke(this.parentTable.tableModel.saveItemUri, 'POST', submitObject_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
                // this is done when successfully saved:
                _this.undoAllChanges();
                // doing this way instead of an '=' assingment because client side is handing ALL DATA (sorting, paging etc.)
                Object.assign(_this.originalData, submitObject_1);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('');
        }
    };
    return VmTableRow;
}());



/***/ }),

/***/ "./src/app/master-catalogs/models/vm-table.ts":
/*!****************************************************!*\
  !*** ./src/app/master-catalogs/models/vm-table.ts ***!
  \****************************************************/
/*! exports provided: VmTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmTable", function() { return VmTable; });
/* harmony import */ var _vm_table_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-table-row */ "./src/app/master-catalogs/models/vm-table-row.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var _user_data_integration_models_vm_service_contract_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-data-integration/models/vm-service-contract-config */ "./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config.ts");





var VmTable = /** @class */ (function () {
    /**
     * Mocking the connection to the backend with a constructor
     * that can accept MOCK JSON.
     */
    function VmTable(tableModel, dataService, serviceContractService) {
        this.tableModel = tableModel;
        this.dataService = dataService;
        this.serviceContractService = serviceContractService;
        this.columns = [];
        // by default we begin with an empty table.
        this.allRawData = [];
        this.initializeColumns();
    }
    /**
     * Connects to the backend servic(es) to provide data.
     * 1. Retrieve service contract Id for current environment
     * 2. Retrieve data utilizing provided service contract id
     * 3. Gracefully returns error in case of 'null'
     * 4. Taps Data to internally intialize component
     */
    VmTable.prototype.loadAllBackendData = function () {
        var _this = this;
        // point 1
        return this.serviceContractService.getCurrentScId().pipe(
        // point 2
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (scId) {
            return _this.dataService.invoke(_this.tableModel.getCatalogUri, _this.tableModel.getCatalogMethod, atob(_this.tableModel.getCatalogDefaultPayloadBase64).replace(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].jsonPayloadScIdReplacement, scId));
        }), 
        // point 3
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (result) {
            if (!result) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Service returned an unexpected null value');
            }
            if (_this.tableModel.key === '/catalogs/users') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([{
                        UserID: '123',
                        ServiceContractID: 'SC1, SC2',
                        FirstName: 'Matt',
                        LastName: 'Dean',
                        Email: 'mattdean@boeing.com',
                        UserType: 'Boeing Person',
                        Active: 'Yes',
                        CreatedBy: 'Katie Fang',
                        CreatedDate: '8/8/19',
                        UpdatedBy: 'Katie Fang',
                        UpdatedDate: '8/8/19'
                    }, {
                        UserID: '421',
                        ServiceContractID: 'SC3, SC4',
                        FirstName: 'John',
                        LastName: 'Doe',
                        Email: 'johndoe@boeing.com',
                        UserType: 'Non Boeing Person',
                        Active: 'Yes',
                        CreatedBy: 'Katie Fang',
                        CreatedDate: '8/8/19',
                        UpdatedBy: 'Katie Fang',
                        UpdatedDate: '8/8/19'
                    }, {
                        UserID: '1121',
                        ServiceContractID: 'SC1, SC2, SC3, SC4, SC5',
                        FirstName: 'Samuel',
                        LastName: 'Smith',
                        Email: 'samuelsmith@boeing.com',
                        UserType: 'Boeing Person',
                        Active: 'Yes',
                        CreatedBy: 'Katie Fang',
                        CreatedDate: '8/8/19',
                        UpdatedBy: 'Katie Fang',
                        UpdatedDate: '8/8/19'
                    }, {
                        UserID: '4532',
                        ServiceContractID: 'SC1',
                        FirstName: 'Katie',
                        LastName: 'Fang',
                        Email: 'katie.fang@boeing.com',
                        UserType: 'Boeing Person',
                        Active: 'Yes',
                        CreatedBy: 'Akbar Zindani',
                        CreatedDate: '7/4/19',
                        UpdatedBy: 'Akbar Zindani',
                        UpdatedDate: '7/4/19'
                    }]);
            }
            if (_this.tableModel.key === src_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].jsonCatalogKeyDataIntegrationStatus) {
                var vm = new _user_data_integration_models_vm_service_contract_config__WEBPACK_IMPORTED_MODULE_4__["VmServiceContractConfig"](_this.serviceContractService);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result), vm.getCurrentTransactions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
                    var labelCatalog = x && x[1];
                    var data = x && x[0];
                    if (data && data.length) {
                        data.forEach(function (element) {
                            // Converting date format to a human readable one.
                            // expected input format: "2019-09-09T21:13:28.420+0000"
                            // output : "2019-09-09 21:13 UTC"
                            if (element.createdDate && element.createdDate.length && element.createdDate.length >= 16) {
                                element.createdDate = element.createdDate.replace('T', ' ').substring(0, 16) + ' UTC';
                            }
                            // Mapping the transaction name to a 'UI name' / label one.
                            // example(s): transactionType: "orderplan-data" -> 'Order Plan'
                            // example 2 : transactionType: "stock-data" -> 'Stock'
                            if (element.transactionType && labelCatalog && labelCatalog.length &&
                                labelCatalog.find(function (y) { return y.model.name === element.transactionType; })) {
                                element.transactionType =
                                    labelCatalog.find(function (z) { return z.model.name === element.transactionType; }).model.label;
                            }
                        });
                        data.sort(function (a, b) { return b.downloadId - a.downloadId; });
                    }
                    return data;
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        }), 
        // point 4
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
            _this.allRawData = data;
            _this.initializeColumns();
        }));
    };
    /**
     * Sets up columns according to tableModel.columns.
     * if hideNonRegisteredColumns is false, it tries to autodetect and append unregistered columns
     */
    VmTable.prototype.initializeColumns = function () {
        if (this.tableModel && this.tableModel.columns) {
            this.columns = this.tableModel.columns;
            if (!this.tableModel.hideNonRegisteredColumns) {
                // append columns that are not pre-registered
                this.autoDetectColumns(this.allRawData);
            }
        }
        else {
            this.autoDetectColumns(this.allRawData);
        }
        this.columns.sort(function (a, b) {
            if (a.order === b.order) {
                return 0;
            }
            else if ((a.order === null) || typeof (a.order) === 'undefined') {
                return 1;
            }
            else if ((b.order === null) || typeof (b.order) === 'undefined') {
                return -1;
            }
            return a.order > b.order ? 1 : -1;
        });
        // hides clumns from the html table  of the table but are still used in other places
        this.columnNames = this.columns.filter(function (x) { return !(x.hidden); }).map(function (column) { return column.internalName; });
        this.dataSourceLength = this.allRawData.length;
    };
    /**
     *
     * Simulates pagination and filtering.
     * In futire it should connect to the microservice.
     *
     * Client side sorting, filtering and paging are left as raw data processing :
     * 1. for perfoamnce reasons
     * 2. because it may get server side implemented in the future.
     *
     * @param pageIndex Pagination from server should be more solid and be coursor based,
     *      send  -1 to make pageIndex zero and apply filter
     * @param pageSize  the number of records to retrieve
     * @param filterCriteria send it  along with -1 in pageINdex to filter.
     */
    VmTable.prototype.retrieveData = function (pageIndex, pageSize, filterCriteria, matSort) {
        var _this = this;
        if (pageIndex === -1) {
            // means filter or sorting is being applied (or cleared)
            pageIndex = 0;
            this.applyClientSideFilter(filterCriteria);
            this.applyClientSideSorting(matSort);
        }
        var startIndex = pageIndex * pageSize;
        var sourceData = this.filteredSortedData || this.allRawData;
        this.dataSourceLength = sourceData.length;
        return sourceData.slice(startIndex, startIndex + pageSize).map(function (x) { return new _vm_table_row__WEBPACK_IMPORTED_MODULE_0__["VmTableRow"](x, _this); });
    };
    VmTable.prototype.applyClientSideSorting = function (sort) {
        if (!sort.active || sort.direction === '') {
            return;
        }
        var sourceData = this.filteredSortedData || this.allRawData;
        sourceData = sourceData.slice(); // reference copy of the array.
        var sortColumn = this.columns.find(function (column) { return column.internalName === sort.active; });
        var sortAscending = sort.direction === 'asc';
        sourceData.sort(function (a, b) {
            if (typeof (a[sort.active]) === 'undefined' || a[sort.active] === null) {
                if (typeof (b[sort.active]) === 'undefined' || b[sort.active] === null) {
                    return 0;
                }
                return sortAscending ? -1 : 1;
            }
            if (typeof (b[sort.active]) === 'undefined' || b[sort.active] === null) {
                return sortAscending ? 1 : -1;
            }
            if (sortColumn.columnType === 'OnePDLCurrency' || sortColumn.columnType === 'OnePDLNumber' ||
                sortColumn.columnType === 'OnePDLCheckbox') {
                return sortAscending ? a[sort.active] - b[sort.active] : b[sort.active] - a[sort.active];
            }
            var aString = a[sort.active];
            var bString = b[sort.active];
            return sortAscending ? aString.localeCompare(bString) : bString.localeCompare(aString);
        });
        this.filteredSortedData = sourceData;
    };
    /**
  * Temporary Client side filtering.
  */
    VmTable.prototype.applyClientSideFilter = function (filterCriteria) {
        var _this = this;
        if (!filterCriteria) {
            this.filteredSortedData = null;
            return;
        }
        // begin with an unfiltered catalog.
        this.filteredSortedData = this.allRawData;
        if (filterCriteria.partNumber) {
            var separator = '\n';
            if (filterCriteria.partNumber.indexOf(',') >= 0) {
                separator = ',';
            }
            if (filterCriteria.partNumber.indexOf(';') >= 0) {
                separator = ';';
            }
            var parts_1 = filterCriteria.partNumber.split(separator).map(function (x) { return x.toLowerCase().trim(); });
            this.filteredSortedData = this.filteredSortedData.filter(function (x) {
                return parts_1.indexOf(x[_this.tableModel.partNumberColumnName].toLowerCase().trim()) >= 0;
            });
        }
        // filter based on the rest of the columns.
        if (filterCriteria.tableFilterCriteria && filterCriteria.tableFilterCriteria.length) {
            this.filteredSortedData = this.filteredSortedData.filter(function (x) {
                // if one criteria fails then we return false.
                return !filterCriteria.tableFilterCriteria.some(function (criterion) {
                    var columnValue = x[criterion.column.internalName];
                    if (typeof columnValue === 'string' && columnValue) {
                        columnValue = columnValue.trim().toLowerCase();
                    }
                    var filterValue = criterion.filterValue;
                    if (typeof filterValue === 'string' && columnValue) {
                        filterValue = filterValue.trim().toLowerCase();
                    }
                    return !criterion.operator.compare(columnValue, filterValue);
                });
            });
        }
    };
    VmTable.prototype.getDisplayNameOfPartNumberColumn = function () {
        var _this = this;
        var rValue = '';
        var foundColumn;
        if (this.tableModel.partNumberColumnName && this.columns && this.columns.length) {
            foundColumn = this.columns.find(function (x) { return x.internalName === _this.tableModel.partNumberColumnName; });
            if (foundColumn) {
                rValue = foundColumn.headerName || foundColumn.internalName;
            }
        }
        return rValue;
    };
    /**
     * Checks against the current 'this.columns' object and looks for the column's internal names
     * If they are not existenti, then it adds those columns.
     */
    VmTable.prototype.autoDetectColumns = function (initialCatalog) {
        if (initialCatalog && initialCatalog.length && initialCatalog[0]) {
            var _loop_1 = function (colName) {
                if (initialCatalog[0].hasOwnProperty(colName)) {
                    if (this_1.columns.filter(function (x) { return x.internalName === colName; }).length === 0) {
                        if (typeof initialCatalog[0][colName] === 'number') {
                            this_1.columns.push({
                                headerName: colName,
                                columnType: 'OnePDLNumber',
                                internalName: colName,
                            });
                        }
                        else {
                            this_1.columns.push({
                                headerName: colName,
                                columnType: 'OnePDLString',
                                internalName: colName,
                            });
                        }
                    }
                }
            };
            var this_1 = this;
            for (var colName in initialCatalog[0]) {
                _loop_1(colName);
            }
        }
    };
    /**
     * Used for downloading excel template
     *  returns an array of tuples where position 0 is friendly Title ( can contain spaces)
     * and postion 1 is internal name (can't contain spaces)
     */
    VmTable.prototype.getColumsForTemplate = function () {
        return this.columns.filter(function (x) { return !(x.hidden); }).map(function (column) { return [column.headerName, column.internalName]; });
    };
    VmTable.prototype.downloadData = function (useFilter) {
        return useFilter ? this.filteredSortedData : this.allRawData;
    };
    return VmTable;
}());



/***/ }),

/***/ "./src/app/master-catalogs/table-filter/table-filter.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/master-catalogs/table-filter/table-filter.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"firstArrow\" [ngClass]=\"{'firstArrowContracted':!filterExpanded}\">\r\n    <div (click)=\"expandContract()\"  matRipple [ngClass]=\"{'filterExpanded':filterExpanded}\" class=\"onePdlArrow filterArrow\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg>\r\n    </div>\r\n</div>\r\n<div class=\"chipContainer\" *ngIf=\"!editMode\">\r\n  <div class=\"filterTitle\">Applied Filter(s):</div>\r\n  <mat-chip-list>\r\n        <mat-chip *ngIf=\"appliedFilterModel.partNumber\" [removable]=\"true\">{{partNumberColumnDisplayName}}: {{appliedFilterModel.partNumberCapped()}}\r\n            <svg matChipRemove (click)=\"removeChip(-1)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n        </mat-chip>\r\n        <mat-chip *ngFor=\"let criterion of appliedFilterModel.tableFilterCriteria;let i= index\" [removable]=\"true\">{{criterion}}\r\n                <svg matChipRemove (click)=\"removeChip(i);\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n        </mat-chip>\r\n  </mat-chip-list>\r\n  <div class=\"controlButtons\">\r\n    <button mat-button (click)=\"editFilter();\">Edit</button>\r\n    <button *ngIf=\"filterExpanded&& (appliedFilterModel.tableFilterCriteria.length>1||(appliedFilterModel.tableFilterCriteria.length==1 && appliedFilterModel.partNumber))\"  (click)=\"clearAll();\" mat-button>Clear All Filters</button>\r\n  </div>\r\n</div>\r\n<!-- sample filter functionality it will  likely go away  and replaced with it's own component-->\r\n\r\n<form [formGroup]=\"editModel.form\" novalidate>\r\n    <div class=\"filterContainer\" [ngClass]=\"{'filterExpanded':filterExpanded}\" *ngIf=\"editMode\" >\r\n        <div class=\"partFilter\" *ngIf=\"filterExpanded&&partNumberColumnDisplayName\">\r\n            <mat-form-field>\r\n                <mat-label>{{partNumberColumnDisplayName}}</mat-label>\r\n                <textarea formControlName=\"partNumber\" rows=\"3\" matInput></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n        <div formArrayName=\"criteria\">\r\n            <div class=\"filterCriterion\"   *ngFor=\"let filterCriterion of editModel.tableFilterCriteria; let i = index;\" formGroupName=\"{{i}}\" >\r\n                <ng-container *ngIf=\"filterExpanded||(i==0)\">\r\n                    <div class=\"quickFilter\" *ngIf=\"!filterExpanded&&!filterFocused\">\r\n                            Quick filter: \r\n                    </div>\r\n                    <mat-form-field [ngClass]=\"{'hasValue':filterCriterion.form.get('column').value}\">\r\n                            <mat-select  *ngIf=\"!filterExpanded\" (openedChange)=\"selectOpenedChange(matSelectFilter)\"  #matSelectFilter=\"matSelect\" formControlName=\"column\" >\r\n                                <mat-option *ngFor=\"let column of orderedColumns\" [value]=\"getColumn(column.internalName)\">\r\n                                        {{column.headerName}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <mat-select  *ngIf=\"filterExpanded\"  #matSelectFilter=\"matSelect\" formControlName=\"column\" >\r\n                                    <mat-option *ngFor=\"let column of orderedColumns\" [value]=\"getColumn(column.internalName)\">\r\n                                            {{column.headerName}}\r\n                                    </mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Select a Filter Attribute</mat-label>\r\n                    </mat-form-field>\r\n                    <!-- dont worry about hiding the rest of the filter for now...-->\r\n                    <div class=\"restOfFilter\" *ngIf=\"filterFocused||filterExpanded\" >\r\n                            <mat-form-field [ngClass]=\"{'hasValue':filterCriterion.form.get('operator').value}\" class=\"operator\">\r\n                                    <mat-label  >Operator</mat-label>\r\n                                    <mat-select  #matFilterOperator  formControlName=\"operator\">\r\n                                        <mat-option  *ngFor=\"let columnFilter of filterCriterion.getColumnFilters()\" [value]=\"columnFilter\">\r\n                                        {{columnFilter.displayName}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                            </mat-form-field>\r\n                            <mat-form-field [ngClass]=\"{'hasValue':filterCriterion.form.get('value').value}\" *ngIf=\"filterCriterion.requiredValue()\">\r\n                                    <mat-label>Filter Value:</mat-label>\r\n                                    <mat-select *ngIf=\"filterCriterion.form.get('column').value?.columnType=='OnePDLCheckbox'; else elseCheckbox\" formControlName=\"value\">\r\n                                        <mat-option [value]=\"1\">Yes</mat-option>\r\n                                        <mat-option [value]=\"0\">No</mat-option>\r\n                                    </mat-select>\r\n                                    <ng-template #elseCheckbox>\r\n                                            <input formControlName=\"value\" type=\"text\" matInput >\r\n                                    </ng-template>\r\n                            </mat-form-field>\r\n                            <div *ngIf=\"filterExpanded\" class=\"addRemoveCriterion\">\r\n                                <div matRipple *ngIf=\"i!=0||editModel.hasNonEmptyValues()\" (click)=\"editModel.removeCriterion(i)\">\r\n                                        <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"/><path fill=\"none\" d=\"M0 0h24v24H0z\"/></svg>\r\n                                </div>\r\n                                <div matRipple  *ngIf=\"i==(editModel.tableFilterCriteria.length -1)\" (click)=\"editModel.addNewCriterion();\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n                                </div> \r\n                            </div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>  \r\n        <div class=\"controlButtons\" *ngIf=\"filterFocused||filterExpanded\" >\r\n                <button [disabled]=\"!editModel.validForApplying()\"  (click)=\"applyFilter()\" mat-button>Filter</button>\r\n                <button *ngIf=\"filterExpanded&&appliedFilterModel\"  (click)=\"clearAll();\" mat-button>Clear All Filters</button>\r\n                <button *ngIf=\"appliedFilterModel || editModel.isDirty()\" (click)=\"cancel();\" mat-button>Cancel</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div (click)=\"expandContract()\"  matRipple [ngClass]=\"{'filterExpanded':filterExpanded}\" class=\"onePdlArrow filterArrow\">\r\n  <svg  viewBox=\"0 0 24 24\">\r\n      <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg>\r\n</div>"

/***/ }),

/***/ "./src/app/master-catalogs/table-filter/table-filter.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/master-catalogs/table-filter/table-filter.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n\n.filterArrow {\n  transform: translate(0, 50%) rotate(90deg);\n  fill: currentColor;\n  position: absolute;\n  right: 4px;\n  bottom: 12px; }\n\n@media screen and (min-width: 768px) {\n    .filterArrow {\n      bottom: 50%; } }\n\n.filterArrow:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n  cursor: pointer; }\n\n.chipContainer {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  padding-left: 20px;\n  padding-right: 25px; }\n\n.chipContainer .filterArrow {\n    left: 0; }\n\n.chipContainer .filterTitle {\n    padding: 9px 10px; }\n\n.chipContainer mat-chip {\n    max-height: 60px;\n    display: flex;\n    flex-shrink: 0;\n    max-width: 100%; }\n\n@media screen and (min-width: 768px) {\n      .chipContainer mat-chip {\n        min-height: 26px;\n        margin-top: 9px; } }\n\n.chipContainer mat-chip svg {\n      height: 21px;\n      width: 21px;\n      z-index: 2; }\n\n.filterContainer {\n  padding-left: 20px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.filterContainer .filterCriterion {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 25px; }\n\n@media screen and (min-width: 768px) {\n      .filterContainer .filterCriterion {\n        margin: 0; } }\n\n.filterContainer .quickFilter {\n    padding-left: 10px;\n    padding-top: 9px; }\n\n.filterContainer .filterArrow {\n    left: 0; }\n\n.filterContainer .filterArrow:hover {\n    background-color: rgba(255, 255, 255, 0.15);\n    cursor: pointer; }\n\n.filterContainer .restOfFilter {\n    display: flex;\n    flex-wrap: wrap; }\n\n.filterContainer .restOfFilter mat-form-field.operator /deep/ {\n      width: 100px; }\n\n.filterContainer .restOfFilter mat-form-field.operator /deep/ .mat-select-value {\n        text-align: center; }\n\n.filterContainer .restOfFilter .addRemoveCriterion {\n      display: inline-block;\n      flex-wrap: wrap;\n      fill: currentColor;\n      position: relative;\n      padding-left: 3px;\n      top: -32px; }\n\n@media screen and (min-width: 768px) {\n        .filterContainer .restOfFilter .addRemoveCriterion {\n          top: 0;\n          display: flex; } }\n\n.filterContainer .restOfFilter .addRemoveCriterion div {\n        top: 3px; }\n\n.filterContainer .restOfFilter .addRemoveCriterion div:hover {\n        background-color: rgba(255, 255, 255, 0.15);\n        cursor: pointer; }\n\n.filterContainer .filterTitle {\n    padding: 10px;\n    padding-top: 17px; }\n\n.filterContainer mat-form-field /deep/ {\n    margin-left: 15px;\n    width: 172px; }\n\n.filterContainer mat-form-field /deep/ .mat-form-field-wrapper {\n      padding-bottom: 0; }\n\n.filterContainer mat-form-field /deep/ .mat-form-field-wrapper .mat-form-field-underline {\n        bottom: -.2em;\n        background-color: #ebedee; }\n\n.filterContainer mat-form-field /deep/ .mat-form-field-infix {\n      padding: 10px 0 0 15px;\n      border-top: none; }\n\n.filterContainer mat-form-field /deep/ .mat-form-field-infix .mat-select-value, .filterContainer mat-form-field /deep/ .mat-form-field-infix .mat-select-arrow {\n        color: inherit; }\n\n.filterContainer mat-form-field /deep/ label {\n      top: 22px;\n      opacity: .4; }\n\n.filterContainer mat-form-field /deep/ mat-label {\n      color: #ebedee; }\n\n.filterContainer mat-form-field /deep/ .mat-hint {\n      color: #ebedee; }\n\n.filterContainer mat-form-field:hover /deep/ label {\n    opacity: .7; }\n\n.filterContainer mat-form-field.hasValue /deep/ label {\n    visibility: hidden; }\n\n.filterContainer.filterExpanded {\n  padding: 9px 0;\n  display: flex;\n  flex-wrap: wrap; }\n\n.filterContainer.filterExpanded mat-form-field {\n    width: 240px;\n    padding-left: 15px; }\n\n.filterContainer.filterExpanded .restOfFilter mat-form-field.operator {\n    width: 240px; }\n\n@media screen and (min-width: 768px) {\n      .filterContainer.filterExpanded .restOfFilter mat-form-field.operator .restOfFilter mat-form-field.operator {\n        width: 170px; } }\n\n.filterArrow.filterExpanded {\n  transform: rotate(270deg);\n  bottom: 0; }\n\n.firstArrow.firstArrowContracted {\n  position: relative; }\n\n.firstArrow .filterArrow {\n  left: 0;\n  z-index: 1; }\n\n.controlButtons button {\n  margin: 5px 0 5px 30px;\n  line-height: 28px;\n  background-color: #ced1d4;\n  color: #001071; }\n\n@media screen and (min-width: 768px) {\n    .controlButtons button {\n      margin: 5px 0 5px 15px; } }\n\n.controlButtons button:hover:not([disabled]) {\n  cursor: pointer;\n  background-color: #ebedee; }\n\n.controlButtons button[disabled] {\n  opacity: .4; }\n\n.filterExpanded.filterContainer .controlButtons button {\n  display: block;\n  width: 128px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL3RhYmxlLWZpbHRlci9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcYXBwXFxtYXN0ZXItY2F0YWxvZ3NcXHRhYmxlLWZpbHRlclxcdGFibGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXN0ZXItY2F0YWxvZ3MvdGFibGUtZmlsdGVyL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQVksRUFDZjs7QUFDRDtFQUNJLDJDQUF5QztFQUN6QyxtQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFdBQVM7RUFDVCxhQUFXLEVBSWQ7O0FBSEc7SUFOSjtNQU9RLFlBQVUsRUFFakIsRUFBQTs7QUFDRDtFQytDSSw0Q0FBdUM7RUFDdkMsZ0JBQWUsRUQ5Q2xCOztBQUVEO0VBQ1EsY0FBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWlCO0VBQ2pCLG1CQUFpQjtFQUNqQixvQkFBa0IsRUFzQnpCOztBQTNCRDtJQU9RLFFBQU0sRUFDVDs7QUFSTDtJQVVRLGtCQUFpQixFQUNwQjs7QUFYTDtJQWFRLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsZUFBYztJQUNkLGdCQUFlLEVBVWxCOztBQVRHO01BakJSO1FBa0JZLGlCQUFlO1FBQ2YsZ0JBQWMsRUFPckIsRUFBQTs7QUExQkw7TUFzQlksYUFBVztNQUNYLFlBQVU7TUFDVixXQUFTLEVBQ1o7O0FBSVQ7RUFDSSxtQkFBaUI7RUFDakIsY0FBWTtFQUNaLGdCQUFlLEVBb0dsQjs7QUF2R0Q7SUFLUSxjQUFZO0lBQ1osZ0JBQWU7SUFDZixvQkFBbUIsRUFJdEI7O0FBSEc7TUFSUjtRQVNZLFVBQVMsRUFFaEIsRUFBQTs7QUFYTDtJQWFRLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDbkI7O0FBZkw7SUFpQk8sUUFBTSxFQUNSOztBQWxCTDtJQ2NJLDRDQUF1QztJQUN2QyxnQkFBZSxFRE1kOztBQXJCTDtJQXdCUSxjQUFZO0lBQ1osZ0JBQWUsRUF5QmxCOztBQWxETDtNQTJCWSxhQUFXLEVBSWQ7O0FBL0JUO1FBNkJnQixtQkFBa0IsRUFDckI7O0FBOUJiO01BaUNZLHNCQUFvQjtNQUNwQixnQkFBZTtNQUNmLG1CQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsa0JBQWdCO01BQ2hCLFdBQVUsRUFXYjs7QUFWRztRQXZDWjtVQXdDZSxPQUFLO1VBQ0wsY0FBYSxFQVFuQixFQUFBOztBQWpEVDtRQTRDZ0IsU0FBTyxFQUNWOztBQTdDYjtRQ2NJLDRDQUF1QztRQUN2QyxnQkFBZSxFRGlDTjs7QUFoRGI7SUFxRFEsY0FBWTtJQUNaLGtCQUFnQixFQUNuQjs7QUF2REw7SUE0RFEsa0JBQWdCO0lBQ2hCLGFBQVcsRUE2QmQ7O0FBMUZMO01BK0RhLGtCQUFnQixFQUtwQjs7QUFwRVQ7UUFpRWdCLGNBQVk7UUFDWiwwQkN2R1csRUR3R2Q7O0FBbkViO01Bc0VhLHVCQUFzQjtNQUN0QixpQkFBZSxFQUluQjs7QUEzRVQ7UUF5RWdCLGVBQWEsRUFDaEI7O0FBMUViO01BNkVZLFVBQVE7TUN6RmhCLFlBQVcsRUQyRk47O0FBL0VUO01BaUZZLGVDdEhlLEVEd0hsQjs7QUFuRlQ7TUF1RlksZUM1SGUsRUQ4SGxCOztBQXpGVDtJQThGWSxZQUFVLEVBQ2I7O0FBL0ZUO0lBb0dZLG1CQUFrQixFQUNyQjs7QUFJVDtFQUNJLGVBQWE7RUFDYixjQUFZO0VBQ1osZ0JBQWUsRUFhbEI7O0FBaEJEO0lBS1EsYUFBVztJQUNYLG1CQUFpQixFQUNwQjs7QUFQTDtJQVNRLGFBQVksRUFNZjs7QUFMRztNQVZSO1FBWWdCLGFBQVksRUFDZixFQUFBOztBQUtiO0VBQ0ksMEJBQXlCO0VBQ3pCLFVBQVMsRUFDWjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFFBQU07RUFDTixXQUFVLEVBQ2I7O0FBRUQ7RUFFUSx1QkFBc0I7RUFDdEIsa0JBQWdCO0VBQ2hCLDBCQ2hMaUI7RURpTGpCLGVDMUxrQixFRDhMckI7O0FBSEc7SUFOUjtNQU9ZLHVCQUFzQixFQUU3QixFQUFBOztBQVRMO0VBV1EsZ0JBQWM7RUFDZCwwQkN6TG1CLEVEMEx0Qjs7QUFiTDtFQ3BKSSxZQUFXLEVEb0tWOztBQUdMO0VBQ0ksZUFBYTtFQUNiLGFBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci1jYXRhbG9ncy90YWJsZS1maWx0ZXIvdGFibGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vbWl4aW5zLnNjc3MnO1xyXG46aG9zdHtcclxuICAgIGRpc3BsYXk6ZmxleDsgLy9wYXJlbnQgY29udGFpbmVyIHdpbGwgYmUgZmxleC4gaXQgbWF0dGVycyBpbiB0aGUgY29udHJhY3RlZCB2aWV3LlxyXG59XHJcbi5maWx0ZXJBcnJvd3tcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsNTAlKSByb3RhdGUoOTBkZWcpO1xyXG4gICAgZmlsbDpjdXJyZW50Q29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDo0cHg7XHJcbiAgICBib3R0b206MTJweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICBib3R0b206NTAlO1xyXG4gICAgfVxyXG59XHJcbi5maWx0ZXJBcnJvdzpob3ZlcntcclxuICAgIEBpbmNsdWRlIG1lbnVIb3ZlcigpO1xyXG59XHJcblxyXG4uY2hpcENvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MjVweDsgICBcclxuICAgIC5maWx0ZXJBcnJvd3tcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyVGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICBtYXQtY2hpcHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgbWluLWhlaWdodDoyNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjFweDtcclxuICAgICAgICAgICAgd2lkdGg6MjFweDtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlckNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAuZmlsdGVyQ3JpdGVyaW9ue1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6JFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludCl7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgLnF1aWNrRmlsdGVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlckFycm93e1xyXG4gICAgICAgbGVmdDowO1xyXG4gICAgfVxyXG4gICAgLmZpbHRlckFycm93OmhvdmVye1xyXG4gICAgICAgIEBpbmNsdWRlIG1lbnVIb3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXN0T2ZGaWx0ZXJ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZC5vcGVyYXRvciAvZGVlcC97XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMHB4OyAvLyBvcGVyYXRvciBmaWx0ZXIgZm9yIGRlbW8gcHVycG9zZXMgb25seS5cclxuICAgICAgICAgICAgLm1hdC1zZWxlY3QtdmFsdWV7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZFJlbW92ZUNyaXRlcmlvbntcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZmlsbDpjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjNweDtcclxuICAgICAgICAgICAgdG9wOiAtMzJweDtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpe1xyXG4gICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICB0b3A6M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpob3ZlcntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lbnVIb3ZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmlsdGVyVGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQgL2RlZXAve1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgd2lkdGg6MTcycHg7XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTowO1xyXG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOi0uMmVtOyAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMTVweDtcclxuICAgICAgICAgICAgIGJvcmRlci10b3A6bm9uZTtcclxuICAgICAgICAgICAgLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgdG9wOjIycHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIC5tYXQtaGludHtcclxuICAgICAgICAgICAgY29sb3I6ICRDb250cmFzdENvbG9yTWVudTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdC1mb3JtLWZpZWxkOmhvdmVyIC9kZWVwL3tcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgb3BhY2l0eTouNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQuaGFzVmFsdWUgL2RlZXAvIHtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlckNvbnRhaW5lci5maWx0ZXJFeHBhbmRlZHtcclxuICAgIHBhZGRpbmc6OXB4IDA7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDoyNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIH1cclxuICAgIC5yZXN0T2ZGaWx0ZXIgbWF0LWZvcm0tZmllbGQub3BlcmF0b3Ige1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6JFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludCl7XHJcbiAgICAgICAgICAgIC5yZXN0T2ZGaWx0ZXIgbWF0LWZvcm0tZmllbGQub3BlcmF0b3J7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXJBcnJvdy5maWx0ZXJFeHBhbmRlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcbi5maXJzdEFycm93LmZpcnN0QXJyb3dDb250cmFjdGVke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmlyc3RBcnJvdyAuZmlsdGVyQXJyb3cge1xyXG4gICAgbGVmdDowO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4gXHJcbi5jb250cm9sQnV0dG9uc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDVweCAwIDVweCAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjI4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJENvbnRyYXN0Q29sb3IxMDA7XHJcbiAgICAgICAgY29sb3I6JFRhYmxlTWVudUJHQ29sb3I7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMCA1cHggMTVweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICB9XHJcbiAgICBidXR0b25bZGlzYWJsZWRde1xyXG4gICAgICAgIEBpbmNsdWRlIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKClcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlckV4cGFuZGVkLmZpbHRlckNvbnRhaW5lciAuY29udHJvbEJ1dHRvbnMgYnV0dG9ue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEyOHB4O1xyXG59XHJcbiIsIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/master-catalogs/table-filter/table-filter.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/master-catalogs/table-filter/table-filter.component.ts ***!
  \************************************************************************/
/*! exports provided: TableFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterComponent", function() { return TableFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_vm_table_filter_criteria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/vm-table-filter-criteria */ "./src/app/master-catalogs/models/vm-table-filter-criteria.ts");
/* harmony import */ var _models_vm_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/vm-table */ "./src/app/master-catalogs/models/vm-table.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent(fb) {
        this.fb = fb;
        this.appliedFilterModel = null;
        // Master property that drives the view into the chip mode or the applied filters view.
        this.editMode = true;
        this._filterExpanded = true;
        this.allowFilter = true;
        this.expandedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterNotAllowed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterFocused = false; // used to save space (quick filter)
    }
    Object.defineProperty(TableFilterComponent.prototype, "tableViewModel", {
        get: function () {
            return this._tableViewModel;
        },
        set: function (table) {
            this._tableViewModel = table;
            this.columns = table.columns;
            this.orderedColumns = this.columns.filter(function (r) { return !(r.hidden); }).map(function (c) {
                return ({ headerName: (c.headerName ? c.headerName : c.internalName), internalName: c.internalName });
            });
            this.orderedColumns.sort(function (a, b) {
                var x = a.headerName.toLocaleLowerCase();
                var y = b.headerName.toLocaleLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
            this.partNumberColumnDisplayName = table.getDisplayNameOfPartNumberColumn();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableFilterComponent.prototype, "filterExpanded", {
        get: function () {
            return this._filterExpanded;
        },
        set: function (value) {
            this._filterExpanded = value;
            this.expandedChanged.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    TableFilterComponent.prototype.ngOnInit = function () {
        // new empty model created
        this.editModel = new _models_vm_table_filter_criteria__WEBPACK_IMPORTED_MODULE_3__["VmTableFilterCriteria"](this.fb, null);
    };
    /**
     * It hides or shows the rest of the 'quick filter'
     * @param matSelectFilter is the MatSelect
     */
    TableFilterComponent.prototype.selectOpenedChange = function (matSelectFilter) {
        var _this = this;
        if (matSelectFilter.value || matSelectFilter.focused || matSelectFilter.panelOpen) {
            this.filterFocused = true;
        }
        if (this.timeoutHolder) {
            clearTimeout(this.timeoutHolder);
        }
        this.timeoutHolder = setTimeout(function () {
            if (!matSelectFilter.value && !matSelectFilter.focused && !matSelectFilter.panelOpen) {
                _this.filterFocused = false;
                _this.timeoutHolder = null;
            }
        }, 1600);
    };
    /**
     * Once the filter is valid, we will call the service / server side code
     * Also generate the business objects that will hold the filter
     */
    TableFilterComponent.prototype.applyFilter = function () {
        if (!this.allowFilter) {
            this.filterNotAllowed.emit();
            return;
        }
        this.appliedFilterModel = new _models_vm_table_filter_criteria__WEBPACK_IMPORTED_MODULE_3__["VmTableFilterCriteria"](null, this.editModel);
        this.editMode = false;
        this.filterSelectionChanged.emit();
    };
    TableFilterComponent.prototype.cancel = function () {
        if (this.appliedFilterModel) {
            this.editMode = false;
        }
        else {
            this.editModel.clearAll();
            if (this._filterExpanded) {
                this.filterExpanded = false;
            }
            else {
                this.filterFocused = false;
            }
        }
    };
    TableFilterComponent.prototype.removeChip = function (index) {
        if (!this.allowFilter) {
            this.filterNotAllowed.emit();
            return;
        }
        if (index === -1) {
            this.appliedFilterModel.clearPartNumber();
        }
        else {
            this.appliedFilterModel.removeCriterion(index);
        }
        if (this.appliedFilterModel.tableFilterCriteria.length === 0 && (!this.appliedFilterModel.partNumber)) {
            this.editModel.clearAll();
            this.filterFocused = false;
            this.editMode = true;
            this.appliedFilterModel = null;
        }
        this.filterSelectionChanged.emit();
    };
    TableFilterComponent.prototype.clearAll = function () {
        if (!this.allowFilter) {
            this.filterNotAllowed.emit();
            return;
        }
        this.editModel.clearAll();
        this.filterFocused = false;
        if (this.editMode === false && this.filterExpanded) {
            this.filterExpanded = false;
        }
        this.editMode = true;
        this.appliedFilterModel = null;
        this.filterSelectionChanged.emit();
    };
    /**
     * copy model from appliedFilterModel.
     */
    TableFilterComponent.prototype.editFilter = function () {
        this.editModel = new _models_vm_table_filter_criteria__WEBPACK_IMPORTED_MODULE_3__["VmTableFilterCriteria"](this.fb, this.appliedFilterModel);
        if (this.appliedFilterModel.partNumber || this.appliedFilterModel.tableFilterCriteria.length > 1) {
            this.filterExpanded = true;
        }
        this.editMode = true;
        this.filterFocused = true;
    };
    /**
     * When contracting sometimes we'll have to clear filters as contracted view don't support multiple
     *  criterion or part numbers.
     */
    TableFilterComponent.prototype.expandContract = function () {
        if (this.filterExpanded && this.editMode) {
            if ((this.appliedFilterModel) && (this.editModel.form.get('partNumber').value || this.editModel.tableFilterCriteria.length > 1)) {
                this.editMode = false;
            }
            if (!this.appliedFilterModel) {
                if (this.editModel.tableFilterCriteria.length === 1 && (!this.editModel.form.get('partNumber').value) &&
                    this.editModel.hasNonEmptyValues()) {
                    this.filterFocused = true;
                }
                else {
                    this.editModel.clearAll();
                    this.filterFocused = false;
                }
            }
        }
        this.filterExpanded = !this.filterExpanded;
    };
    TableFilterComponent.prototype.getColumn = function (internalName) {
        return this.columns.find(function (c) { return c.internalName === internalName; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_vm_table__WEBPACK_IMPORTED_MODULE_4__["VmTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_vm_table__WEBPACK_IMPORTED_MODULE_4__["VmTable"]])
    ], TableFilterComponent.prototype, "tableViewModel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableFilterComponent.prototype, "allowFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TableFilterComponent.prototype, "expandedChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TableFilterComponent.prototype, "filterSelectionChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TableFilterComponent.prototype, "filterNotAllowed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSelectFilter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"])
    ], TableFilterComponent.prototype, "firstMatSelect", void 0);
    TableFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-filter',
            template: __webpack_require__(/*! ./table-filter.component.html */ "./src/app/master-catalogs/table-filter/table-filter.component.html"),
            styles: [__webpack_require__(/*! ./table-filter.component.scss */ "./src/app/master-catalogs/table-filter/table-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TableFilterComponent);
    return TableFilterComponent;
}());



/***/ }),

/***/ "./src/app/master-catalogs/table/table-data-source.ts":
/*!************************************************************!*\
  !*** ./src/app/master-catalogs/table/table-data-source.ts ***!
  \************************************************************/
/*! exports provided: TableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSource", function() { return TableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/**
 * Required interface implementation as per angular material's table
 */
var TableDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TableDataSource, _super);
    function TableDataSource() {
        var _this = _super.call(this) || this;
        _this.renderedSubjectPrivate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.loadingDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        return _this;
    }
    Object.defineProperty(TableDataSource.prototype, "renderedSubject", {
        get: function () {
            return this.renderedSubjectPrivate;
        },
        enumerable: true,
        configurable: true
    });
    TableDataSource.prototype.connect = function (collectionViewer) {
        return this.renderedSubjectPrivate.asObservable();
    };
    TableDataSource.prototype.disconnect = function (collectionViewer) {
        this.renderedSubjectPrivate.complete();
        this.loadingDataSubject.complete();
    };
    return TableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/master-catalogs/table/table.component.html":
/*!************************************************************!*\
  !*** ./src/app/master-catalogs/table/table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"tableHeader\">\r\n            <div class=\"tableTitle\">{{viewModel.tableModel?.title}}</div>\r\n            <mat-paginator #thePaginator\r\n                [length] = \"viewModel.dataSourceLength\"\r\n                [pageSize]= \"20\"\r\n                [showFirstLastButtons] = \"true\"\r\n                [pageSizeOptions] = \"[5,10,20,50,100]\">\r\n            </mat-paginator>\r\n    </div>\r\n    <div class=\"controlPane\" [ngClass]=\"{'filterExpanded':filterExpanded}\" >\r\n        <div  class=\"controlPaneInnerControls\">\r\n            <ng-container *ngIf=\"viewModel.tableModel.enablePopupAddOrEdit&&!showRefreshControlOnly\">\r\n                <!-- Controls for User / Roles-->\r\n                <button mat-button (click)=\"editItem()\">{{'Add '+ viewModel.tableModel.itemName}}</button>\r\n                <button mat-button *ngIf=\"viewModel.tableModel.enablePopupAddOrEdit\"\r\n                    [disabled]=\"!(selectedRow)\" (click)=\"editItem(selectedRow)\">Edit {{viewModel.tableModel.itemName}}</button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!viewModel.tableModel.enablePopupAddOrEdit&&!showRefreshControlOnly\">\r\n                <!-- Standard Control Ribbon-->\r\n                <button mat-button>Insert</button>\r\n                <button mat-button>Delete</button>\r\n                <button [disabled]=\"disableSave\" mat-button  (click)=\"saveClick()\">\r\n                    {{saveText}}\r\n                    <mat-spinner diameter=\"15\" *ngIf=\"saveText=='Saving'\"></mat-spinner>\r\n                </button>\r\n                <button mat-button [disabled]=\"viewModel.dataSourceLength==0\" (click)=\"downloadClick()\" >Download Results</button>\r\n                <button mat-button (click)=\"uploadClick()\">Upload...</button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"showRefreshControlOnly\">\r\n                <button mat-button (click)=\"viewAllClick()\">Refresh</button>\r\n            </ng-container>\r\n            </div>\r\n            <app-table-filter [allowFilter]=\"disableSave\" (filterNotAllowed)=\"warnAboutChanges(null);\" [tableViewModel]=\"viewModel\" (expandedChanged)=\"filterExpanded=$event\"></app-table-filter>\r\n        </div>\r\n    <div class=\"overlaysContainer\">\r\n        <div class=\"spinnerDiv\" *ngIf=\"loading\">\r\n                <div>\r\n                    <mat-spinner></mat-spinner>\r\n                </div>\r\n        </div>    \r\n        <div class=\"noRecords\" *ngIf=\"viewModel.dataSourceLength == 0&& !loading\">\r\n                <div *ngIf=\"!landingPage\">No records were found.</div>\r\n                <div *ngIf=\"landingPage\"><a (click)=\"selectFilterClick()\">Select Filter Above</a> or  <a (click)=\"viewAllClick()\">Show All Records</a> </div>\r\n        </div>\r\n        <div class=\"tableContainer\">\r\n            <table mat-table matSort [dataSource]=\"dataSource\">\r\n                <ng-container *ngFor=\"let column of viewModel.columns\" [matColumnDef]=\"column.internalName\" [sticky]=\"column.sticky\">\r\n                    <th matRipple mat-header-cell  mat-sort-header *matHeaderCellDef>{{column.headerName}}</th>\r\n                    <td [ngClass]=\"{'rightAlign':column.columnType=='OnePDLNumber'||column.columnType=='OnePDLCurrency', 'OnePdlCenter':column.columnType=='OnePDLCheckbox', 'cellChanged':vmTableRow.hasCellChanged(column.internalName)}\" mat-cell  *matCellDef=\"let vmTableRow\">\r\n                        <ng-container [ngSwitch]=\"column.columnType\">\r\n                            <ng-container *ngSwitchCase=\"'OnePDLCheckbox'\">\r\n                                <mat-checkbox [checked]=\"!!(vmTableRow.getRowValue(column.internalName))\" (change)=\"cellChanged($event.checked,column,vmTableRow)\"></mat-checkbox>\r\n                            </ng-container>\r\n                            <ng-container *ngSwitchDefault>\r\n                                    {{column.columnType=='OnePDLCurrency'?(vmTableRow.originalData[column.internalName]|currency):vmTableRow.originalData[column.internalName]}}\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </td>\r\n                </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"viewModel.columnNames;sticky: true\"></tr>\r\n            <tr mat-row [ngClass]=\"{'selected':z==selectedRow}\" (click)=\"rowClick(z)\" *matRowDef=\"let z; columns: viewModel.columnNames\" ></tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master-catalogs/table/table.component.scss":
/*!************************************************************!*\
  !*** ./src/app/master-catalogs/table/table.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  /* for firefox */\n  min-height: 0; }\n\n.wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  /* for firefox */\n  min-height: 0; }\n\n.wrapper .overlaysContainer {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* for firefox */\n    min-height: 0;\n    padding: 0;\n    margin: 0;\n    position: relative; }\n\n.wrapper .overlaysContainer .spinnerDiv {\n      position: absolute;\n      z-index: 102;\n      height: 100%;\n      background-color: rgba(255, 255, 255, 0.6);\n      width: 100%; }\n\n.wrapper .overlaysContainer .spinnerDiv div /deep/ {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%); }\n\n.wrapper .overlaysContainer .spinnerDiv div /deep/ circle {\n          opacity: .7;\n          stroke: #0033a1; }\n\n.wrapper .overlaysContainer .noRecords {\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.7);\n      position: absolute; }\n\n.wrapper .overlaysContainer .noRecords div {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        z-index: 101;\n        font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n        font-size: 1.3em;\n        color: white;\n        transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%); }\n\n@media screen and (min-width: 768px) {\n          .wrapper .overlaysContainer .noRecords div {\n            font-size: 1.8em; } }\n\n.wrapper .overlaysContainer .noRecords div a {\n          text-decoration: underline;\n          cursor: pointer; }\n\n.wrapper .overlaysContainer .tableContainer {\n      flex: 1;\n      overflow: auto;\n      min-height: 0;\n      padding: 0;\n      margin: 0; }\n\n.wrapper .tableHeader {\n    padding-top: 4px;\n    color: #ebedee;\n    background-color: #001071;\n    font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    padding: 0 0 0 10px;\n    display: flex;\n    flex-direction: column; }\n\n@media screen and (min-width: 768px) {\n      .wrapper .tableHeader {\n        flex-direction: row; } }\n\n.wrapper .tableHeader .tableTitle {\n      flex: 1;\n      font-size: 1.5em;\n      padding-top: 9px;\n      padding-left: 0;\n      padding-right: 0; }\n\n.wrapper .controlPane {\n    flex-direction: column;\n    position: relative;\n    border-top: 1px solid #0033a1;\n    background-color: #001071;\n    color: #ebedee; }\n\n@media screen and (min-width: 768px) {\n      .wrapper .controlPane {\n        display: flex;\n        flex-direction: row; } }\n\n.wrapper .controlPane .controlPaneInnerControls {\n      border-right: 1px solid #0033a1;\n      display: flex;\n      flex-wrap: wrap;\n      position: relative; }\n\n.wrapper .controlPane .controlPaneInnerControls .mat-button {\n        min-width: auto;\n        padding: 0 12px;\n        font-size: 1em; }\n\n.wrapper .controlPane .controlPaneInnerControls button:first-of-type {\n        padding-left: 10px; }\n\n.wrapper .controlPane .controlPaneInnerControls button {\n        border-radius: 0;\n        position: relative; }\n\n.wrapper .controlPane .controlPaneInnerControls button:not([disabled]):hover {\n        background-color: rgba(255, 255, 255, 0.15);\n        cursor: pointer; }\n\n.wrapper .controlPane .controlPaneInnerControls button.mat-button[disabled] {\n        opacity: .4;\n        cursor: not-allowed;\n        color: inherit; }\n\n.wrapper .controlPane .controlPaneInnerControls button mat-spinner {\n        position: absolute;\n        right: -8px;\n        top: 10px; }\n\n.wrapper .controlPane .controlPaneInnerControls button mat-spinner /deep/ circle {\n        stroke: currentColor; }\n\n@media screen and (min-width: 768px) {\n    .wrapper .controlPaneInnerControls {\n      display: flex;\n      flex-wrap: wrap;\n      overflow: hidden;\n      margin-bottom: 0; } }\n\n.wrapper .controlPane.filterExpanded {\n    display: block; }\n\n.wrapper .controlPane.filterExpanded .controlPaneInnerControls {\n      border-right: none;\n      border-bottom: 1px solid #0033a1; }\n\n.wrapper .tableContainer {\n    overflow-x: auto; }\n\n.wrapper table {\n    font-family: Helvetica, Arial, sans-serif;\n    background-color: #fff;\n    width: 100%; }\n\n.wrapper table .mat-header-cell, .wrapper table .mat-cell {\n      font-size: 1em; }\n\n.wrapper table .mat-header-cell {\n      color: #ebedee;\n      background-color: #001071;\n      border-left: 1px solid #0033a1;\n      border-top: 1px solid #0033a1;\n      padding-left: 5px;\n      padding-right: 5px; }\n\n.wrapper table th:hover {\n      background-color: #253281;\n      cursor: pointer; }\n\n.wrapper table th /deep/ .mat-sort-header-arrow {\n      color: #ebedee; }\n\n.wrapper table td.mat-cell:first-of-type, .wrapper table td.mat-footer-cell:first-of-type, .wrapper table th.mat-header-cell:first-of-type {\n      padding-left: 11px; }\n\n.wrapper table tr.mat-row {\n      height: 22px; }\n\n.wrapper table tr.mat-row.selected {\n      background-color: #535cd3; }\n\n.wrapper table tr.mat-row.selected:hover {\n      background-color: rgba(83, 92, 211, 0.5); }\n\n.wrapper table tr.mat-row.selected td {\n      color: #ebedee; }\n\n.wrapper table tr.mat-row.selected td:hover {\n        color: rgba(0, 0, 0, 0.87); }\n\n.wrapper table th:first-of-type, .wrapper table td.mat-table-sticky {\n      border-right: 2px solid rgba(0, 0, 0, 0.2); }\n\n.wrapper table tr:nth-child(odd) {\n      background-color: #e0e7f4; }\n\n.wrapper table tr.mat-header-row {\n      height: 28px; }\n\n.wrapper table tr.mat-row:hover {\n      background-color: #ebedee; }\n\n.wrapper table th:first-child {\n      border-left: none; }\n\n.wrapper table td {\n      border-left: 1px solid rgba(0, 0, 0, 0.12);\n      border-right: 1px solid rgba(0, 0, 0, 0.12);\n      padding-left: 5px;\n      padding-right: 5px; }\n\n.wrapper table td.rightAlign {\n        text-align: right; }\n\n.wrapper table td.cellChanged {\n        transition: background-color 0.8s ease;\n        background-color: rgba(231, 159, 20, 0.5); }\n\n.wrapper table td:hover {\n      border: 1px solid #88959e; }\n\n.wrapper table td:not(.cellChanged):hover {\n      background-color: #fff; }\n\n.wrapper .mat-paginator {\n    color: #ebedee;\n    background-color: #001071; }\n\n.wrapper .mat-paginator /deep/ {\n    font-size: 1em;\n    font-family: Helvetica, Arial, sans-serif; }\n\n.wrapper .mat-paginator /deep/ .mat-select-trigger {\n      font-size: inherit;\n      font-family: inherit;\n      text-align: right;\n      color: #ebedee; }\n\n.wrapper .mat-paginator /deep/ .mat-icon-button[disabled] {\n      color: #ebedee;\n      opacity: .4; }\n\n/*effort to make mat-toolbar thinner and it's layout as well*/\n\n.wrapper /deep/ mat-paginator {\n  align-self: start; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-range-label {\n    margin: 0; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container {\n    padding: 0;\n    min-height: inherit;\n    align-items: start; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size {\n      align-self: flex-end;\n      align-items: start; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n        .wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size {\n          align-self: flex-start; } }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size .mat-paginator-page-size-label {\n        padding-top: 10px; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size mat-form-field {\n        margin-top: -2px; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size mat-form-field .mat-form-field-wrapper {\n          padding-bottom: 0; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size mat-form-field .mat-form-field-wrapper .mat-form-field-underline {\n            bottom: 0.1em;\n            background-color: #ebedee; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size mat-form-field .mat-form-field-infix {\n          padding: 13px 0 4px 0;\n          border-top: none; }\n\n.wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size mat-form-field .mat-form-field-infix .mat-select-value, .wrapper /deep/ mat-paginator .mat-paginator-container .mat-paginator-page-size mat-form-field .mat-form-field-infix .mat-select-arrow {\n            color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL3RhYmxlL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL3RhYmxlL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxhcHBcXG1hc3Rlci1jYXRhbG9nc1xcdGFibGVcXHRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGSTtFQUNJLGFBQVk7RUFDWixjQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFhLEVBQ2hCOztBQ2xHTDtFQUNJLFFBQU87RUFDUCxjQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFhLEVBOFBoQjs7QUFuUUQ7SUFPUSxRQUFPO0lBQ1AsY0FBWTtJQUNaLHVCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsY0FBYTtJQUNiLFdBQVU7SUFDVixVQUFTO0lBQ1QsbUJBQWtCLEVBbURyQjs7QUFqRUw7TUFnQlksbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixhQUFZO01BQ1osMkNBQXNDO01BQ3RDLFlBQVcsRUFZZDs7QUFoQ1Q7UUFzQmdCLG1CQUFrQjtRQUNsQixTQUFPO1FBQ1AsVUFBUTtRQUNSLGlDQUErQjtRQUMvQixxQ0FBbUMsRUFLdEM7O0FBL0JiO1VBNEJvQixZQUFVO1VBQ1YsZ0JEL0JDLEVDZ0NKOztBQTlCakI7TUFrQ1ksWUFBVTtNQUNWLGFBQVk7TUFDWixxQ0FBaUM7TUFDakMsbUJBQWtCLEVBbUJyQjs7QUF4RFQ7UUF1Q2dCLG1CQUFrQjtRQUNsQixTQUFRO1FBQ1IsVUFBUztRQUNULGFBQVc7UURGdkIsaUZBQWdGO1FDSXBFLGlCQUFnQjtRQUloQixhQUFZO1FBQ1osaUNBQStCO1FBQy9CLHFDQUFtQyxFQUt0Qzs7QUFWRztVQTdDaEI7WUE4Q29CLGlCQUFnQixFQVN2QixFQUFBOztBQXZEYjtVQW9Eb0IsMkJBQTBCO1VBQzFCLGdCQUFlLEVBQ2xCOztBQXREakI7TUEwRFksUUFBTztNQUNQLGVBQWM7TUFDZCxjQUFhO01BQ2IsV0FBUztNQUNULFVBQVEsRUFFWDs7QUFoRVQ7SUFtRVEsaUJBQWU7SUFDZixlRDdEbUI7SUM4RG5CLDBCRHRFa0I7SUF5Q3RCLGlGQUFnRjtJQytCNUUsb0JBQWtCO0lBQ2xCLGNBQVk7SUFDWix1QkFBc0IsRUFXekI7O0FBVkc7TUExRVI7UUEyRVksb0JBQW1CLEVBUzFCLEVBQUE7O0FBcEZMO01BOEVZLFFBQU07TUQ3QmQsaUJBQWdCO01DK0JSLGlCQUFlO01BQ2YsZ0JBQWM7TUFDZCxpQkFBZSxFQUNsQjs7QUFuRlQ7SUF1RlEsdUJBQXNCO0lBS3RCLG1CQUFpQjtJQUNqQiw4QkQvRmE7SUNpR2IsMEJEaEdrQjtJQ2lHbEIsZUR6Rm1CLEVDK0h0Qjs7QUE5Q0c7TUF4RlI7UUF5RlksY0FBWTtRQUNaLG9CQUFtQixFQTRDMUIsRUFBQTs7QUF0SUw7TUFrR1ksZ0NEcEdTO01DcUdULGNBQVk7TUFDWixnQkFBZTtNQUVmLG1CQUFrQixFQStCckI7O0FBcklUO1FBd0dnQixnQkFBZTtRQUNmLGdCQUFlO1FEM0QzQixlQUFjLEVDNkRMOztBQTNHYjtRQTZHZ0IsbUJBQWlCLEVBQ3BCOztBQTlHYjtRQWdIZ0IsaUJBQWdCO1FBQ2hCLG1CQUFpQixFQUNwQjs7QUFsSGI7UUQwREksNENBQXVDO1FBQ3ZDLGdCQUFlLEVDMEROOztBQXJIYjtRRGdDSSxZQUFXO1FDd0ZDLG9CQUFrQjtRQUNsQixlQUFhLEVBQ2hCOztBQTFIYjtRQTRIZ0IsbUJBQWtCO1FBQ2xCLFlBQVc7UUFDWCxVQUFRLEVBQ1g7O0FBL0hiO1FBa0lvQixxQkFBbUIsRUFDdEI7O0FBSWI7SUF2SUo7TUF5SVksY0FBWTtNQUNaLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLGlCQUFnQixFQUNuQixFQUFBOztBQTdJVDtJQWdKUSxlQUFhLEVBS2hCOztBQXJKTDtNQWtKWSxtQkFBaUI7TUFDakIsaUNEckpTLEVDc0paOztBQXBKVDtJQXdKUSxpQkFBZSxFQUNsQjs7QUF6Skw7SURvQ0ksMENBQTBDO0lDeUh0Qyx1QkFBc0I7SUFDdEIsWUFBVyxFQThFZDs7QUE1T0w7TUQ4Q0ksZUFBYyxFQ29IVDs7QUFsS1Q7TUFvS1ksZUQ3SmU7TUM4SmYsMEJEdEtjO01DdUtkLCtCRHhLUztNQ3lLUiw4QkR6S1E7TUMwS1Qsa0JBQWdCO01BQ2hCLG1CQUFpQixFQUNwQjs7QUExS1Q7TUE2S1ksMEJEbkttQjtNQ29LbkIsZ0JBQWMsRUFDakI7O0FBL0tUO01Ba0xnQixlRDNLVyxFQzRLZDs7QUFuTGI7TUFzTFksbUJBQWlCLEVBQ3BCOztBQXZMVDtNQXlMWSxhQUFXLEVBQ2Q7O0FBMUxUO01BNkxZLDBCRDVLZSxFQzZLbEI7O0FBOUxUO01BZ01ZLHlDQUFxQyxFQUN4Qzs7QUFqTVQ7TUFtTVksZUQ1TGUsRUNnTWxCOztBQXZNVDtRQXFNZ0IsMkJBQXFCLEVBQ3hCOztBQXRNYjtNQTBNWSwyQ0FBcUMsRUFDeEM7O0FBM01UO01BNE0yQiwwQkFBd0IsRUFBRzs7QUE1TXREO01BOE1ZLGFBQVcsRUFDZDs7QUEvTVQ7TUFpTlksMEJEMU1lLEVDMk1sQjs7QUFsTlQ7TUFvTlksa0JBQWdCLEVBQ25COztBQXJOVDtNQXdOWSwyQ0FBc0M7TUFDdEMsNENBQXVDO01BQ3ZDLGtCQUFnQjtNQUNoQixtQkFBaUIsRUFTcEI7O0FBcE9UO1FBOE5nQixrQkFBaUIsRUFDcEI7O0FBL05iO1FBaU9nQix1Q0FBcUM7UUFDckMsMENBQW9DLEVBQ3ZDOztBQW5PYjtNQXVPWSwwQkR0T2lCLEVDdU9wQjs7QUF4T1Q7TUEwT1ksdUJBQXNCLEVBQ3pCOztBQTNPVDtJQStPUSxlRHhPbUI7SUN5T25CLDBCRGpQa0IsRUNrUHJCOztBQWpQTDtJRDhDSSxlQUFjO0lBVmQsMENBQTBDLEVDOE56Qzs7QUFsUUw7TUF3UFksbUJBQWlCO01BQ2pCLHFCQUFvQjtNQUNwQixrQkFBaUI7TUFDakIsZURwUGUsRUNxUGxCOztBQTVQVDtNQStQWSxlRHhQZTtNQXlCdkIsWUFBVyxFQ2lPTjs7QUFJVCw4REFBOEQ7O0FBQzlEO0VBR1Esa0JBQWdCLEVBdUNuQjs7QUExQ0w7SUFLWSxVQUFTLEVBQ1o7O0FBTlQ7SUFRWSxXQUFTO0lBQ1Qsb0JBQW1CO0lBQ25CLG1CQUFrQixFQStCckI7O0FBekNUO01BWWdCLHFCQUFtQjtNQVFuQixtQkFBa0IsRUFvQnJCOztBQTFCRztRQWRoQjtVQWVvQix1QkFBcUIsRUF5QjVCLEVBQUE7O0FBeENiO1FBa0JxQixrQkFBZ0IsRUFDcEI7O0FBbkJqQjtRQXNCb0IsaUJBQWdCLEVBZ0JuQjs7QUF0Q2pCO1VBd0J3QixrQkFBZ0IsRUFLbkI7O0FBN0JyQjtZQTBCNEIsY0FBWTtZQUNaLDBCRDFSRCxFQzJSRjs7QUE1QnpCO1VBZ0N3QixzQkFBcUI7VUFDckIsaUJBQWUsRUFJbEI7O0FBckNyQjtZQW1DNEIsZUFBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci1jYXRhbG9ncy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9ycyBhbHJlYWR5IGluIHVzZSBhY3Jvc3MgYXBwLiBGSXJzdCB0cnkgIHRvIHVzZSBwcmVmZXJyZWQgdmFyaWFibGVzIGJlbG93IFxyXG4kUHJpbWFyeUNvbG9yOiMwMDMzYTE7XHJcbiRQcmltYXJ5RGFya0NvbG9yOiAjMDAxMDcxO1xyXG4kU2Vjb25kYXJ5Q29sb3I6ICM1YjY3NzA7XHJcbiRTZWNvbmRhcnlMaWdodENvbG9yOiAjODg5NTllO1xyXG5cclxuXHJcbi8vUHJlZmVycmVkIHZhcmlhYmxlczpcclxuJEhlYWRlckJHQ29sb3I6JFByaW1hcnlDb2xvcjsgLy8gcGxlYXNlIHV0aWxpemUgdGhpcyBhbmQgbm90ICRQcmltYXJ5Q29sb3JcclxuJERhcmtUZXh0Q29sb3I5MDA6ICMyZjM5NDE7IC8vcHJlZmVycmVkIHRleHQgY29sb3IuXHJcbiRDb250cmFzdENvbG9yTWVudTogI2ViZWRlZTsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvclxyXG4kQ29udHJhc3RDb2xvcjEwMDojY2VkMWQ0OyAvLyBjb250cmFzdGluZyB0ZXh0IGNvbG9yICBub3Qgc28gY29udHJhc3RpbmcuXHJcbiRUYWJsZU1lbnVCR0NvbG9yOiAkUHJpbWFyeURhcmtDb2xvcjsgLy91c2VkIGZvciBiYWNrZ3JvdW5kIG9mIHJpYmJvbiAoIHRhYmxlIGNvbnRyb2wgcGFuZSkgXHJcbiRUYWJsZU1lbnVCR0NvbG9ySG92ZXI6ICMyNTMyODE7IC8vbmVlZGVkIGNhdXNlIHRyYW5zcGFyZW5jeSBjYXVzZXMgc2VlaW5nIHRoaW5ncyBiZWxvdy5cclxuXHJcblxyXG4vL2N1dG9mZiB3aWR0aCBmb3IgcmVzcG9uc2l2ZSBtb2RlOlxyXG4kUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50OiA3NjhweDtcclxuXHJcbi8vYXZhaWxhYmxlIGNvbG9ycyB0byB1c2UsICBQcmVmZXIgdG8gcmV1c2UgdGhlIGFib3ZlIG9uZXMgZmlyc3RcclxuJFByaW1hcnlMaWdodENvbG9yOiAjNTM1Y2QzO1xyXG4kU2Vjb25kYXJ5RGFya0NvbG9yOiAjMzEzZDQ1O1xyXG4kVGV4dENvbG9yOiAjYjhjOGQ0O1xyXG4kQWx0ZXJuYXRlVGV4dENPbG9yOiAjNTU1O1xyXG4kQWx0ZXJuYXRlVGV4dENvbG9yMjogIzc3NztcclxuXHJcblxyXG5AbWl4aW4gZXJyb3JDb2xvcigpIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcbkBtaXhpbiBzdWNjZXNzQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogIzgyQkMwMDtcclxufVxyXG5cclxuQG1peGluIGRpc2FibGVkQnV0dG9uT25UYWJsZUNvbnRyb2xQYW5lKCl7XHJcbiAgICBvcGFjaXR5OiAuNDsgICAgXHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5KCl7XHJcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250RmFtaWx5TmV1ZSgpe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVcwMS1UaGluXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiBmb250U2l6ZVN0ZCgpe1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8vIGRvbid0IGNoYW5nZSAhISBjaGFuZ2UgdGhpcyBvbiB0aGUgc3R5bGVzLmNzc1xyXG59XHJcbkBtaXhpbiBiaWdnZXJGb250U2l6ZSgpe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgLy9zYW1lIHN1Z2dlc3Rpb24gYXMgYWJvdmUsIGJ1dCBub3QgYXMgcmlnaWQgb2YgYSBzdWdnZXN0aW9uLlxyXG59XHJcblxyXG5AbWl4aW4gc3RkRm9udFNpemVBbmRGYW1pbHkoKXtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbn1cclxuXHJcbkBtaXhpbiBtZW51SG92ZXIgKCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBpZiBkZW1vcyBhcmUgbmVlZGVkIGFuZCB0aGVyZSBpcyBzb21ldGhpbmcgdW5kZXIgY29udHJ1Y3Rpb24sIHRoZSBiZWxvdyBhZGRzIGEgZ3JlYXQgb3ZlcmxheS5cclxuQG1peGluIG92ZXJsYXlVbmRlckNvbnN0cnVjdGlvbigpe1xyXG4gICAgLypcclxuICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRleHRcIj5VbmRlciBjb25zdHJ1Y3Rpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICovXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAjdGV4dHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkeW5hbWljVmVydGljYWxTY3JvbGxiYXIoKXtcclxuICAgIDpob3N0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvKiBmb3IgZmlyZWZveCAqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRlcmlhbEljb24oKSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9taXhpbnMuc2Nzcyc7XHJcbkBpbmNsdWRlIGR5bmFtaWNWZXJ0aWNhbFNjcm9sbGJhcigpO1xyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGZvciBmaXJlZm94ICovXHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgLm92ZXJsYXlzQ29udGFpbmVye1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLyogZm9yIGZpcmVmb3ggKi9cclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuc3Bpbm5lckRpdntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXYgL2RlZXAve1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xle1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6Ljc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAkSGVhZGVyQkdDb2xvciA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vUmVjb3Jkc3tcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjEwMTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnRGYW1pbHlOZXVlKCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxlQ29udGFpbmVye1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYmxlSGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjRweDtcclxuICAgICAgICBjb2xvcjogJENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JFRhYmxlTWVudUJHQ29sb3I7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udEZhbWlseU5ldWUoKTtcclxuICAgICAgICBwYWRkaW5nOjAgMCAwIDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpe1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGVUaXRsZXtcclxuICAgICAgICAgICAgZmxleDoxO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBiaWdnZXJGb250U2l6ZSgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250cm9sUGFuZXtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAkSGVhZGVyQkdDb2xvcjtcclxuICAgICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkVGFibGVNZW51QkdDb2xvcjtcclxuICAgICAgICBjb2xvcjogJENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgICAgIC5jb250cm9sUGFuZUlubmVyQ29udHJvbHN7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRIZWFkZXJCR0NvbG9yO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgLy8gb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5tYXQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnRTaXplU3RkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uOmZpcnN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1lbnVIb3ZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbi5tYXQtYnV0dG9uW2Rpc2FibGVkXXtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICBkaXNhYmxlZEJ1dHRvbk9uVGFibGVDb250cm9sUGFuZSgpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24gbWF0LXNwaW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICAgICAgICAgIHRvcDoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiBtYXQtc3Bpbm5lciAvZGVlcC97XHJcbiAgICAgICAgICAgICAgICBjaXJjbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOmN1cnJlbnRDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAuY29udHJvbFBhbmVJbm5lckNvbnRyb2xze1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udHJvbFBhbmUuZmlsdGVyRXhwYW5kZWR7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAuY29udHJvbFBhbmVJbm5lckNvbnRyb2xze1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRIZWFkZXJCR0NvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAudGFibGVDb250YWluZXJ7XHJcbiAgICAgICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgfVxyXG4gICAgdGFibGVcclxuICAgIHtcclxuICAgICAgICBAaW5jbHVkZSBmb250RmFtaWx5KCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jZWxse1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250U2l6ZVN0ZCgpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWhlYWRlci1jZWxse1xyXG4gICAgICAgICAgICBjb2xvcjogJENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkVGFibGVNZW51QkdDb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkSGVhZGVyQkdDb2xvcjtcclxuICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkSGVhZGVyQkdDb2xvciA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGg6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRUYWJsZU1lbnVCR0NvbG9ySG92ZXI7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aCAvZGVlcC97XHJcbiAgICAgICAgICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3d7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ci5tYXQtcm93e1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyLm1hdC1yb3cuc2VsZWN0ZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JFByaW1hcnlMaWdodENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ci5tYXQtcm93LnNlbGVjdGVkOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODMsIDkyLCAyMTEsLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ci5tYXQtcm93LnNlbGVjdGVkIHRke1xyXG4gICAgICAgICAgICBjb2xvcjogJENvbnRyYXN0Q29sb3JNZW51O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLDAsMCwuODcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC10YWJsZS1zdGlja3l7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDoycHggc29saWQgcmdiYSgwLDAsMCwuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGU3ZjQ7fVxyXG4gICAgICAgIHRyLm1hdC1oZWFkZXItcm93e1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHIubWF0LXJvdzpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDpub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5yaWdodEFsaWdue1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jZWxsQ2hhbmdlZHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjMxLDE1OSwyMCwuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkOmhvdmVye1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICRTZWNvbmRhcnlMaWdodENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZDpub3QoLmNlbGxDaGFuZ2VkKTpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1wYWdpbmF0b3J7XHJcbiAgICAgICAgY29sb3I6ICRDb250cmFzdENvbG9yTWVudTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRUYWJsZU1lbnVCR0NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtcGFnaW5hdG9yIC9kZWVwL3tcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgc3RkRm9udFNpemVBbmRGYW1pbHkoKTtcclxuXHJcbiAgICAgICAgLm1hdC1zZWxlY3QtdHJpZ2dlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOmluaGVyaXQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6ICRDb250cmFzdENvbG9yTWVudTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRde1xyXG4gICAgICAgICAgICBjb2xvcjogICRDb250cmFzdENvbG9yTWVudTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGlzYWJsZWRCdXR0b25PblRhYmxlQ29udHJvbFBhbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qZWZmb3J0IHRvIG1ha2UgbWF0LXRvb2xiYXIgdGhpbm5lciBhbmQgaXQncyBsYXlvdXQgYXMgd2VsbCovXHJcbi53cmFwcGVyIC9kZWVwL3tcclxuICAgXHJcbiAgICBtYXQtcGFnaW5hdG9ye1xyXG4gICAgICAgIGFsaWduLXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICAgICAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXple1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC8vIGllMTEgb25seSBDU1M6XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpICwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjAuMWVtOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkQ29udHJhc3RDb2xvck1lbnU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDAgNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6aW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/master-catalogs/table/table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/master-catalogs/table/table.component.ts ***!
  \**********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-data-source */ "./src/app/master-catalogs/table/table-data-source.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _models_vm_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/vm-table */ "./src/app/master-catalogs/models/vm-table.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../table-filter/table-filter.component */ "./src/app/master-catalogs/table-filter/table-filter.component.ts");
/* harmony import */ var _dialogs_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialogs/upload/upload.component */ "./src/app/master-catalogs/dialogs/upload/upload.component.ts");
/* harmony import */ var _dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialogs/edit-user/edit-user.component */ "./src/app/master-catalogs/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var _layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layout/confirm-dialog/confirm-dialog.component */ "./src/app/layout/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/layout/confirm-dialog/confirm-dialog-model */ "./src/app/layout/confirm-dialog/confirm-dialog-model.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _csv_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../csv.service */ "./src/app/master-catalogs/csv.service.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_service_contract_config_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/service-contract-config.service */ "./src/app/services/service-contract-config.service.ts");






















var TableComponent = /** @class */ (function () {
    function TableComponent(activatedRoute, matDialog, dataService, snackBar, zone, csvService, uiService, serviceContractService) {
        this.activatedRoute = activatedRoute;
        this.matDialog = matDialog;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.zone = zone;
        this.csvService = csvService;
        this.uiService = uiService;
        this.serviceContractService = serviceContractService;
        this.filterExpanded = true;
        this.loading = false;
        this.landingPage = true;
        this.disableSave = true;
        this.saveText = 'Save';
        this.selectedRow = null;
        // without providing the option to either show filter or not.
        this.hideLoadOptions = false;
        // will hide all the other controls such as insert or upload.
        this.showRefreshControlOnly = false;
        this.confirmDialog = null;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            // we begin with an empty dataset.
            _this.viewModel = new _models_vm_table__WEBPACK_IMPORTED_MODULE_11__["VmTable"](data[_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].routerData.catalogs], _this.dataService, _this.serviceContractService);
        });
        this.dataSource = new _table_data_source__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"]();
        this.uiService.setUnloadHandler(function () {
            return _this.disableSave ? '' : 'You have pending unsaved changes. Continue and discard changes?';
        });
    };
    TableComponent.prototype.ngOnDestroy = function () {
        this.uiService.unsetUnloadHanlder();
    };
    TableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paginator.page.subscribe(function () {
            _this.loading = true;
            _this.loadVisibleData();
        });
        this.filter.filterSelectionChanged.subscribe(function () {
            if (_this.landingPage) {
                _this.triggerBackendConnection(true);
            }
            else {
                _this.loading = true;
                _this.loadVisibleData(true);
            }
        });
        this.sort.sortChange.subscribe(function () {
            _this.loading = true;
            _this.loadVisibleData(true);
        });
        if (this.hideLoadOptions) {
            this.triggerBackendConnection();
        }
        else {
            this.loadVisibleData();
        }
        setTimeout(function () {
            // try to get sticky columns fixed:
            _this.table.updateStickyColumnStyles();
        }, 300);
        // venturing outside Angular as it does not support capturing events.
        this.paginatorRaw.nativeElement.addEventListener('click', this.warnAboutChanges.bind(this), true);
    };
    TableComponent.prototype.warnAboutChanges = function (mouseEvent) {
        var _this = this;
        if (!this.disableSave) {
            if (mouseEvent) {
                mouseEvent.stopPropagation();
            }
            // venturing outside Angular as it does not support capturing events.
            // this should get us back into angular's zone.
            this.zone.run(function () {
                _this.confirmDialog = _this.matDialog.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], {
                    width: '350px',
                    data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModel"]('You have pending unsaved changes. Continue and discard changes?', [['Discard unsaved changes', true], ['Cancel', false]])
                });
                _this.confirmDialog.afterClosed().subscribe(function (result) {
                    if (result) { // User clicked 'Discard unsaved changes' and return result is true. 
                        // cleanup all the current data.
                        _this.dataSource.renderedSubject.getValue().forEach(function (x) { return x.undoAllChanges(); });
                        _this.disableSave = true;
                    }
                });
            });
        }
    };
    TableComponent.prototype.viewAllClick = function () {
        this.triggerBackendConnection();
    };
    /**
     * This is either first 'stage' of filtering, and then filter occurs on the client side.
     * Or it is also called on 'view all records'
     * @param calledFromFilter optional it needs to be true to filter the data.
     */
    TableComponent.prototype.triggerBackendConnection = function (calledFromFilter) {
        var _this = this;
        if (calledFromFilter === void 0) { calledFromFilter = false; }
        this.loading = true;
        this.viewModel.loadAllBackendData().subscribe(function (i) {
            // once data is loaded,  reset UI for sorting:
            _this.sort.sort({ disableClear: false, id: '', start: 'asc' });
            _this.loadVisibleData(calledFromFilter);
            _this.filterExpanded = false;
            _this.filter.filterExpanded = false;
            if (_this.landingPage) {
                _this.landingPage = false;
            }
            _this.loading = false;
            // prevent sorting in case that a some modification happened:
            // venturing outside Angular as it does not support capturing events.
            Array.from(document.querySelectorAll('th[mat-header-cell]')).forEach(function (tableHeaderElementRef) {
                tableHeaderElementRef.addEventListener('click', _this.warnAboutChanges.bind(_this), true);
            });
        }, function (err) {
            return _this.matDialog.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], {
                width: '350px',
                data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModel"]('Error: ' + (err.message ? err.message : err), 'Accept')
            }).afterClosed().subscribe(function () { return _this.loading = false; });
        });
    };
    TableComponent.prototype.selectFilterClick = function () {
        this.filter.firstMatSelect.open();
    };
    /**
     * called when a pagination event happens
     * or when a filtering eveng happens
     * or on page load.
     * @param resetPaging should be true whenever new sorting or filtering criteria is being applied.
     */
    TableComponent.prototype.loadVisibleData = function (resetPaging) {
        var _this = this;
        setTimeout(function () {
            try {
                var pageIndexParam = -1;
                if (resetPaging) {
                    _this.paginator.pageIndex = 0;
                }
                else {
                    pageIndexParam = _this.paginator.pageIndex;
                }
                // clean selection in case that it' there:
                _this.selectedRow = null;
                _this.dataSource.renderedSubject.next(_this.viewModel.retrieveData(pageIndexParam, _this.paginator.pageSize, _this.filter.appliedFilterModel, _this.sort));
            }
            finally {
                _this.loading = false;
            }
        }, 700);
    };
    TableComponent.prototype.uploadClick = function () {
        this.matDialog.open(_dialogs_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"], { data: this.viewModel });
    };
    TableComponent.prototype.downloadClick = function () {
        var _this = this;
        if (!(this.filter.appliedFilterModel)) {
            this.csvService.exportAsCsvFile(this.viewModel.downloadData(false), this.viewModel.getColumsForTemplate(), 'allData_' + this.viewModel.tableModel.itemName + '.csv');
        }
        else {
            // generate dialog:
            this.confirmDialog = this.matDialog.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], {
                data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModel"]('Download All Results or Filtered Results?', [['Download All', 'All'], ['Download Filtered', 'Filtered']], true)
            });
            this.confirmDialog.afterClosed().subscribe(function (result) {
                if (result === 'All') { // cleanup all the current data.
                    _this.csvService.exportAsCsvFile(_this.viewModel.downloadData(false), _this.viewModel.getColumsForTemplate(), 'allData_' + _this.viewModel.tableModel.itemName + '.csv');
                }
                else if (result === 'Filtered') {
                    _this.csvService.exportAsCsvFile(_this.viewModel.downloadData(true), _this.viewModel.getColumsForTemplate(), 'filteredData_' + _this.viewModel.tableModel.itemName + '.csv');
                }
            });
        }
    };
    /**
     * Reflects a change in the UI to be tracked.
     * @param newValue
     * @param internalColumnName
     * @param entireRow
     */
    TableComponent.prototype.cellChanged = function (newValue, column, row) {
        if (row.patchValue(newValue, column)) {
            this.disableSave = false;
        }
        else {
            // recalculate if there's anything needed to be saved:
            this.disableSave = this.dataSource.renderedSubject.getValue().every(function (x) { return !x.dirty; });
        }
    };
    TableComponent.prototype.saveClick = function () {
        var _this = this;
        this.saveText = 'Saving';
        this.disableSave = true;
        var currentData = this.dataSource.renderedSubject.getValue();
        var observables = [];
        this.saveErrorCount = 0;
        if (currentData && currentData.length) {
            currentData.forEach(function (row, index) {
                if (row.dirty) {
                    observables.push(row.commitChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (x) { return x; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (x) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_this.saveErrorCount++); })));
                }
            });
        }
        if (observables.length === 0) {
            this.snackBar.open('Nothing was saved as data is unchanged', 'Close', _constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].UI.snackBarDuration);
            this.saveText = 'Save';
        }
        else {
            window.setTimeout(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(observables).subscribe(function (x) {
                    _this.saveText = 'Save';
                    if (_this.saveErrorCount) {
                        _this.disableSave = false; // allow user to retry on errored rows
                        // gotta show a proper error message.
                        _this.confirmDialog = _this.matDialog.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], {
                            width: '350px',
                            data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModel"](_this.saveErrorCount + 'items failed while trying to save.', 'Accept')
                        });
                    }
                    else {
                        _this.snackBar.open('Successfully saved ' + observables.length + ' rows.', 'Close', _constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].UI.snackBarDuration);
                    }
                });
            }, 1300);
        }
    };
    /**
     * Selects or deselects an item
     * Pending -- add property 'editItemEnabled' to Table model
     * @param z
     */
    TableComponent.prototype.rowClick = function (clickedRow) {
        if (!this.viewModel.tableModel.enablePopupAddOrEdit) {
            return; // selecting an item , edit / add popup is disabled. Do nothing.
        }
        if (clickedRow === this.selectedRow) {
            this.selectedRow = null;
            return;
        }
        this.selectedRow = clickedRow;
    };
    /**
     * Shows a popup for to add new or edit currently selected user.
     */
    TableComponent.prototype.editItem = function (row) {
        if (!this.viewModel.tableModel.enablePopupAddOrEdit) {
            return; // selecting an item , edit / add popup is disabled. Do nothing.
        }
        this.matDialog.open(_dialogs_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_14__["EditUserComponent"], {
            width: '350px',
            data: [this.viewModel, row]
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_12__["TableFilterComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_12__["TableFilterComponent"])
    ], TableComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thePaginator', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TableComponent.prototype, "paginatorRaw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], TableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTable"])
    ], TableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])() // if set to true it will directly load all the data
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "hideLoadOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "showRefreshControlOnly", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/master-catalogs/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/master-catalogs/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _csv_service__WEBPACK_IMPORTED_MODULE_18__["CsvService"],
            src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_19__["UiService"],
            src_app_services_service_contract_config_service__WEBPACK_IMPORTED_MODULE_20__["ServiceContractConfigService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/models/model-spm-orchestrator-trigger-request.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/models/model-spm-orchestrator-trigger-request.ts ***!
  \********************************************************************************************************/
/*! exports provided: ModelSpmOrchestratorTriggerRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelSpmOrchestratorTriggerRequest", function() { return ModelSpmOrchestratorTriggerRequest; });
var ModelSpmOrchestratorTriggerRequest = /** @class */ (function () {
    function ModelSpmOrchestratorTriggerRequest(scId, transactionTypes) {
        this.scId = scId;
        this.transactionTypes = transactionTypes;
    }
    return ModelSpmOrchestratorTriggerRequest;
}());



/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config-transaction.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config-transaction.ts ***!
  \********************************************************************************************************/
/*! exports provided: VmServiceContractConfigTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmServiceContractConfigTransaction", function() { return VmServiceContractConfigTransaction; });
var VmServiceContractConfigTransaction = /** @class */ (function () {
    function VmServiceContractConfigTransaction(model, checked) {
        if (checked === void 0) { checked = false; }
        this.model = model;
        this.checked = checked;
    }
    return VmServiceContractConfigTransaction;
}());



/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config.ts ***!
  \********************************************************************************************/
/*! exports provided: VmServiceContractConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmServiceContractConfig", function() { return VmServiceContractConfig; });
/* harmony import */ var _vm_service_contract_config_transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-service-contract-config-transaction */ "./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config-transaction.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var VmServiceContractConfig = /** @class */ (function () {
    function VmServiceContractConfig(serviceContractConfigService) {
        this.serviceContractConfigService = serviceContractConfigService;
    }
    VmServiceContractConfig.prototype.getCurrentTransactions = function () {
        return this.serviceContractConfigService.getServiceContractConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (wholeConfig) { return wholeConfig[0].transactions ?
            wholeConfig[0].transactions.map(function (x) { return new _vm_service_contract_config_transaction__WEBPACK_IMPORTED_MODULE_0__["VmServiceContractConfigTransaction"](x); }).sort(function (a, b) { return a.model.label.localeCompare(b.model.label); })
            : []; }));
    };
    return VmServiceContractConfig;
}());



/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/services/spm-orchestration.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/services/spm-orchestration.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: SpmOrchestrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpmOrchestrationService", function() { return SpmOrchestrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_service_contract_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/service-contract-config.service */ "./src/app/services/service-contract-config.service.ts");
/* harmony import */ var _models_model_spm_orchestrator_trigger_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/model-spm-orchestrator-trigger-request */ "./src/app/master-catalogs/user-data-integration/models/model-spm-orchestrator-trigger-request.ts");








var SpmOrchestrationService = /** @class */ (function () {
    function SpmOrchestrationService(dataService, serviceContractConfigService) {
        this.dataService = dataService;
        this.serviceContractConfigService = serviceContractConfigService;
    }
    /**
     * Triggers the service for the given transactions
     * Caller is responsible of error handling.
     * @param transactions string array that come from the 'name' property of the transactions.
     */
    SpmOrchestrationService.prototype.trigger = function (transactions) {
        var _this = this;
        var scId$ = this.serviceContractConfigService.getCurrentScId();
        var parameters$ = this.dataService.getConfigSection(src_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].jsonConfigSectionOrchestrationService);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(scId$, parameters$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (results) { return _this.dataService.invoke(results[1].getCatalogUri, results[1].getCatalogMethod, new _models_model_spm_orchestrator_trigger_request__WEBPACK_IMPORTED_MODULE_7__["ModelSpmOrchestratorTriggerRequest"](results[0], transactions)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.downloadId; }));
    };
    SpmOrchestrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_service_contract_config_service__WEBPACK_IMPORTED_MODULE_6__["ServiceContractConfigService"]])
    ], SpmOrchestrationService);
    return SpmOrchestrationService;
}());



/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/user-data-integration.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"bgwhite\">\r\n    <div class=\"masterContainer\">\r\n        <div class=\"title\">{{pageTitle}}</div>\r\n        <div class=\"spinnerDiv\" *ngIf=\"loading\">\r\n            <div>\r\n                <mat-spinner></mat-spinner>\r\n            </div>\r\n        </div>    \r\n        <div class=\"mat-checkbox-box\" *ngIf=\"!loading\">\r\n        <p>\r\n            <mat-checkbox aria-label=\"Select All\" [checked]=\"allSelected\" [indeterminate]=\"indeterminate\"\r\n            (change)=\"toggleSelectAll($event)\">\r\n            <strong>{{lblSelectAll}}</strong>\r\n            </mat-checkbox>\r\n        </p>\r\n        <div class=\"innerCheckboxes\">\r\n            <div *ngFor=\"let transaction of transactions\">\r\n                <mat-checkbox [checked]=\"transaction.checked\" (change)=\"rundataCheckboxes(transaction,$event)\">\r\n                {{transaction.model.label}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"buttonDiv\">\r\n                <button [disabled]=\"(!indeterminate)&&(!allSelected)\" mat-button color=\"primary\" (click)=\"submit()\">Submit\r\n                        <mat-spinner diameter=\"15\" *ngIf=\"submitting\"></mat-spinner>\r\n                </button>\r\n        </div>\r\n        </div>        \r\n    </div>\r\n    <app-table [hideLoadOptions]=\"true\" [showRefreshControlOnly] = \"true\"></app-table>\r\n  </div>\r\n  <!--  -->"

/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/user-data-integration.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  :host {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    /* for firefox */\n    min-height: 0; } }\n\n.masterContainer {\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  position: relative; }\n\n@media screen and (min-width: 768px) {\n    .masterContainer {\n      flex: 25%; } }\n\n.bgwhite {\n  flex: 1;\n  display: block;\n  flex-direction: column;\n  /* for firefox */\n  min-height: 0;\n  color: #2f3941; }\n\n@media screen and (min-width: 768px) {\n    .bgwhite {\n      flex-direction: row;\n      display: flex; } }\n\n.bgwhite .page-title {\n    color: #fff;\n    font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-style: normal;\n    font-size: 1.5em; }\n\n.bgwhite .title {\n    font-family: \"HelveticaNeueW01-Thin\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    color: #0033a1;\n    text-align: left;\n    font-size: 1.5em; }\n\n.bgwhite .mat-checkbox-box {\n    margin-right: 20px;\n    flex: 1; }\n\n.bgwhite .mat-checkbox-box mat-checkbox {\n      display: block; }\n\n.bgwhite .mat-checkbox-box p {\n      margin-top: 9px;\n      border-top: 1px solid #777;\n      padding-top: 12px; }\n\n.bgwhite .sucess-msg {\n    color: #82BC00; }\n\n.bgwhite .error-msg {\n    color: #f44336; }\n\n.bgwhite button.mat-button[mat-button] {\n    color: #2f3941; }\n\n.bgwhite {\n  background-color: #fff;\n  padding: 15px; }\n\n.bgwhite mat-card {\n    border: solid 1px #5b6770; }\n\nbutton.mat-button {\n  margin-top: 10px; }\n\n.buttonDiv {\n  margin-top: 10px;\n  text-align: center; }\n\n.spinnerDiv {\n  position: absolute;\n  z-index: 102;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 100%; }\n\n.spinnerDiv div /deep/ {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n\n.spinnerDiv div /deep/ circle {\n      opacity: .7;\n      stroke: #0033a1; }\n\nbutton mat-spinner /deep/ circle {\n  stroke: currentColor; }\n\nbutton {\n  position: relative; }\n\nbutton mat-spinner {\n    position: absolute;\n    top: 10px;\n    right: -20px; }\n\napp-table {\n  height: 75vh;\n  margin-top: 10px; }\n\n@media screen and (min-width: 768px) {\n    app-table {\n      margin-top: -7px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyLWNhdGFsb2dzL3VzZXItZGF0YS1pbnRlZ3JhdGlvbi9DOlxcVXNlcnNcXHZpbXNhd2FuXFxCb2VpbmdcXFNPVVJDRS1DT0RFXFxvbmVwZGwtZ2l0bGFiL3NyY1xcYXBwXFxtYXN0ZXItY2F0YWxvZ3NcXHVzZXItZGF0YS1pbnRlZ3JhdGlvblxcdXNlci1kYXRhLWludGVncmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXN0ZXItY2F0YWxvZ3MvdXNlci1kYXRhLWludGVncmF0aW9uL0M6XFxVc2Vyc1xcdmltc2F3YW5cXEJvZWluZ1xcU09VUkNFLUNPREVcXG9uZXBkbC1naXRsYWIvc3JjXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQzZGSTtJQUNJLGFBQVk7SUFDWixjQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixjQUFhLEVBQ2hCLEVBQUE7O0FEaEdMO0VBQ1EsdUJBQXNCO0VBQ3RCLFFBQU87RUFJUCxjQUFhO0VBQ2IsbUJBQWtCLEVBQ3pCOztBQUxPO0lBSFI7TUFJWSxVQUFRLEVBSW5CLEVBQUE7O0FBQ0Q7RUFDSSxRQUFPO0VBQ1AsZUFBYTtFQUNiLHVCQUFzQjtFQUt0QixpQkFBaUI7RUFDakIsY0FBYTtFQUNiLGVDZnNCLEVEbUR6Qjs7QUExQ0c7SUFKSjtNQUtRLG9CQUFtQjtNQUNuQixjQUFZLEVBd0NuQixFQUFBOztBQTlDRDtJQVlRLFlBQVU7SUNpQmQsaUZBQWdGO0lEZjVFLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDbkI7O0FBaEJMO0lDNkJJLGlGQUFnRjtJRFQ1RSxlQ2pDYTtJRGtDYixpQkFBZ0I7SUNpQnBCLGlCQUFnQixFRGZmOztBQXZCTDtJQTBCUSxtQkFBaUI7SUFDakIsUUFBTSxFQVNUOztBQXBDTDtNQTZCWSxlQUFhLEVBQ2hCOztBQTlCVDtNQWdDWSxnQkFBZTtNQUNmLDJCQ3ZCYztNRHdCZCxrQkFBZ0IsRUFDbkI7O0FBbkNUO0lDaUJJLGVBQWMsRURzQmI7O0FBdkNMO0lDY0ksZUFBYyxFRDRCYjs7QUExQ0w7SUE0Q1EsZUNqRGtCLEVEa0RyQjs7QUFHTDtFQUNJLHVCQUFzQjtFQUN0QixjQUFhLEVBSWhCOztBQU5EO0lBSVEsMEJDL0RnQixFRGdFbkI7O0FBR0w7RUFDSSxpQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGlCQUFlO0VBQ2YsbUJBQWtCLEVBQ3JCOztBQUdEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhQUFZO0VBQ1osMkNBQXNDO0VBQ3RDLFlBQVcsRUFZZDs7QUFqQkQ7SUFPUSxtQkFBa0I7SUFDbEIsU0FBTztJQUNQLFVBQVE7SUFDUixpQ0FBK0I7SUFDL0IscUNBQW1DLEVBS3RDOztBQWhCTDtNQWFZLFlBQVU7TUFDVixnQkM1RlMsRUQ2Rlo7O0FBSVQ7RUFFUSxxQkFBbUIsRUFDdEI7O0FBR0w7RUFDSSxtQkFBaUIsRUFNcEI7O0FBUEQ7SUFHUSxtQkFBa0I7SUFDbEIsVUFBUTtJQUNSLGFBQVcsRUFDZDs7QUFJTDtFQUNJLGFBQVc7RUFDWCxpQkFBZSxFQUtsQjs7QUFKRztJQUhKO01BSVEsaUJBQWdCLEVBR3ZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXItY2F0YWxvZ3MvdXNlci1kYXRhLWludGVncmF0aW9uL3VzZXItZGF0YS1pbnRlZ3JhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL21peGlucy5zY3NzJztcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgIEBpbmNsdWRlIGR5bmFtaWNWZXJ0aWNhbFNjcm9sbGJhcigpO1xyXG59XHJcbi5tYXN0ZXJDb250YWluZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICAgICAgZmxleDoyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iZ3doaXRle1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOiRSZXNwb25zaXZlTG9va0JyZWFrUG9pbnQpe1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgfVxyXG4gICAgLyogZm9yIGZpcmVmb3ggKi9cclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBjb2xvcjogJERhcmtUZXh0Q29sb3I5MDA7XHJcbiAgICAucGFnZS10aXRsZXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnRGYW1pbHlOZXVlKCk7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnRGYW1pbHlOZXVlKCk7XHJcbiAgICAgICAgY29sb3I6ICRQcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBAaW5jbHVkZSBiaWdnZXJGb250U2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LWNoZWNrYm94LWJveHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDsgLy8gZGVza3RvcFxyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBtYXQtY2hlY2tib3h7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDlweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkQWx0ZXJuYXRlVGV4dENvbG9yMjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VjZXNzLW1zZ3tcclxuICAgICAgICBAaW5jbHVkZSBzdWNjZXNzQ29sb3I7XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItbXNne1xyXG4gICAgICAgIEBpbmNsdWRlIGVycm9yQ29sb3I7XHJcbiAgICB9XHJcbiAgICBidXR0b24ubWF0LWJ1dHRvblttYXQtYnV0dG9uXXtcclxuICAgICAgICBjb2xvcjogJERhcmtUZXh0Q29sb3I5MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZ3doaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXQtY2FyZHtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkU2Vjb25kYXJ5Q29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbi5tYXQtYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5idXR0b25EaXZ7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc3Bpbm5lckRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXYgL2RlZXAve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgY2lyY2xle1xyXG4gICAgICAgICAgICBvcGFjaXR5Oi43O1xyXG4gICAgICAgICAgICBzdHJva2U6ICRIZWFkZXJCR0NvbG9yIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbiBtYXQtc3Bpbm5lciAvZGVlcC97XHJcbiAgICBjaXJjbGV7XHJcbiAgICAgICAgc3Ryb2tlOmN1cnJlbnRDb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBtYXQtc3Bpbm5lcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjEwcHg7XHJcbiAgICAgICAgcmlnaHQ6LTIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hcHAtdGFibGV7XHJcbiAgICBoZWlnaHQ6NzV2aDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDokUmVzcG9uc2l2ZUxvb2tCcmVha1BvaW50KXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN3B4OyAgICBcclxuICAgICAgICAvL2BtYXgtaGVpZ2h0Ojc1dmg7XHJcbiAgICB9XHJcbn0iLCIvLyBDb2xvcnMgYWxyZWFkeSBpbiB1c2UgYWNyb3NzIGFwcC4gRklyc3QgdHJ5ICB0byB1c2UgcHJlZmVycmVkIHZhcmlhYmxlcyBiZWxvdyBcclxuJFByaW1hcnlDb2xvcjojMDAzM2ExO1xyXG4kUHJpbWFyeURhcmtDb2xvcjogIzAwMTA3MTtcclxuJFNlY29uZGFyeUNvbG9yOiAjNWI2NzcwO1xyXG4kU2Vjb25kYXJ5TGlnaHRDb2xvcjogIzg4OTU5ZTtcclxuXHJcblxyXG4vL1ByZWZlcnJlZCB2YXJpYWJsZXM6XHJcbiRIZWFkZXJCR0NvbG9yOiRQcmltYXJ5Q29sb3I7IC8vIHBsZWFzZSB1dGlsaXplIHRoaXMgYW5kIG5vdCAkUHJpbWFyeUNvbG9yXHJcbiREYXJrVGV4dENvbG9yOTAwOiAjMmYzOTQxOyAvL3ByZWZlcnJlZCB0ZXh0IGNvbG9yLlxyXG4kQ29udHJhc3RDb2xvck1lbnU6ICNlYmVkZWU7IC8vIGNvbnRyYXN0aW5nIHRleHQgY29sb3JcclxuJENvbnRyYXN0Q29sb3IxMDA6I2NlZDFkNDsgLy8gY29udHJhc3RpbmcgdGV4dCBjb2xvciAgbm90IHNvIGNvbnRyYXN0aW5nLlxyXG4kVGFibGVNZW51QkdDb2xvcjogJFByaW1hcnlEYXJrQ29sb3I7IC8vdXNlZCBmb3IgYmFja2dyb3VuZCBvZiByaWJib24gKCB0YWJsZSBjb250cm9sIHBhbmUpIFxyXG4kVGFibGVNZW51QkdDb2xvckhvdmVyOiAjMjUzMjgxOyAvL25lZWRlZCBjYXVzZSB0cmFuc3BhcmVuY3kgY2F1c2VzIHNlZWluZyB0aGluZ3MgYmVsb3cuXHJcblxyXG5cclxuLy9jdXRvZmYgd2lkdGggZm9yIHJlc3BvbnNpdmUgbW9kZTpcclxuJFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludDogNzY4cHg7XHJcblxyXG4vL2F2YWlsYWJsZSBjb2xvcnMgdG8gdXNlLCAgUHJlZmVyIHRvIHJldXNlIHRoZSBhYm92ZSBvbmVzIGZpcnN0XHJcbiRQcmltYXJ5TGlnaHRDb2xvcjogIzUzNWNkMztcclxuJFNlY29uZGFyeURhcmtDb2xvcjogIzMxM2Q0NTtcclxuJFRleHRDb2xvcjogI2I4YzhkNDtcclxuJEFsdGVybmF0ZVRleHRDT2xvcjogIzU1NTtcclxuJEFsdGVybmF0ZVRleHRDb2xvcjI6ICM3Nzc7XHJcblxyXG5cclxuQG1peGluIGVycm9yQ29sb3IoKSB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNjtcclxufVxyXG5AbWl4aW4gc3VjY2Vzc0NvbG9yKCkge1xyXG4gICAgY29sb3I6ICM4MkJDMDA7XHJcbn1cclxuXHJcbkBtaXhpbiBkaXNhYmxlZEJ1dHRvbk9uVGFibGVDb250cm9sUGFuZSgpe1xyXG4gICAgb3BhY2l0eTogLjQ7ICAgIFxyXG59XHJcblxyXG5AbWl4aW4gZm9udEZhbWlseSgpe1xyXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udEZhbWlseU5ldWUoKXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVXMDEtVGhpblwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gZm9udFNpemVTdGQoKXtcclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvLyBkb24ndCBjaGFuZ2UgISEgY2hhbmdlIHRoaXMgb24gdGhlIHN0eWxlcy5jc3NcclxufVxyXG5AbWl4aW4gYmlnZ2VyRm9udFNpemUoKXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07IC8vc2FtZSBzdWdnZXN0aW9uIGFzIGFib3ZlLCBidXQgbm90IGFzIHJpZ2lkIG9mIGEgc3VnZ2VzdGlvbi5cclxufVxyXG5cclxuQG1peGluIHN0ZEZvbnRTaXplQW5kRmFtaWx5KCl7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZVN0ZCgpO1xyXG4gICAgQGluY2x1ZGUgZm9udEZhbWlseSgpO1xyXG59XHJcblxyXG5AbWl4aW4gbWVudUhvdmVyICgpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gaWYgZGVtb3MgYXJlIG5lZWRlZCBhbmQgdGhlcmUgaXMgc29tZXRoaW5nIHVuZGVyIGNvbnRydWN0aW9uLCB0aGUgYmVsb3cgYWRkcyBhIGdyZWF0IG92ZXJsYXkuXHJcbkBtaXhpbiBvdmVybGF5VW5kZXJDb25zdHJ1Y3Rpb24oKXtcclxuICAgIC8qXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXh0XCI+VW5kZXIgY29uc3RydWN0aW9uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAqL1xyXG4gICAgLm92ZXJsYXl7XHJcbiAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgI3RleHR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgei1pbmRleDoxMDI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6JFJlc3BvbnNpdmVMb29rQnJlYWtQb2ludCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHluYW1pY1ZlcnRpY2FsU2Nyb2xsYmFyKCl7XHJcbiAgICA6aG9zdHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLyogZm9yIGZpcmVmb3ggKi9cclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWF0ZXJpYWxJY29uKCkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/master-catalogs/user-data-integration/user-data-integration.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserDataIntegrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataIntegrationComponent", function() { return UserDataIntegrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_service_contract_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/service-contract-config.service */ "./src/app/services/service-contract-config.service.ts");
/* harmony import */ var _models_vm_service_contract_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/vm-service-contract-config */ "./src/app/master-catalogs/user-data-integration/models/vm-service-contract-config.ts");
/* harmony import */ var src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/confirm-dialog/confirm-dialog-model */ "./src/app/layout/confirm-dialog/confirm-dialog-model.ts");
/* harmony import */ var _layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/confirm-dialog/confirm-dialog.component */ "./src/app/layout/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _services_spm_orchestration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/spm-orchestration.service */ "./src/app/master-catalogs/user-data-integration/services/spm-orchestration.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");









var UserDataIntegrationComponent = /** @class */ (function () {
    function UserDataIntegrationComponent(serviceContractConfigService, dialogService, spmOrchestrationService, snackBar) {
        this.serviceContractConfigService = serviceContractConfigService;
        this.dialogService = dialogService;
        this.spmOrchestrationService = spmOrchestrationService;
        this.snackBar = snackBar;
        this.pageTitle = 'Run Data Integration';
        this.lblSelectAll = 'Select All';
        this.submitting = false;
        this.allSelected = false;
        this.indeterminate = false;
        this.loading = true;
    }
    UserDataIntegrationComponent.prototype.rundataCheckboxes = function (userData, event) {
        userData.checked = event.checked;
        var totalSelected = this.transactions.filter(function (i) { return i.checked; }).length;
        if (totalSelected === 0) {
            this.allSelected = false;
            this.indeterminate = false;
        }
        else if (totalSelected > 0 && totalSelected < this.transactions.length) {
            this.allSelected = false;
            this.indeterminate = true;
        }
        else if (totalSelected === this.transactions.length) {
            this.allSelected = true;
            this.indeterminate = false;
        }
    };
    UserDataIntegrationComponent.prototype.toggleSelectAll = function (event) {
        this.allSelected = event.checked;
        this.indeterminate = event.isChecked;
        this.transactions.forEach(function (transaction) {
            transaction.checked = event.checked;
        });
    };
    UserDataIntegrationComponent.prototype.submit = function () {
        var _this = this;
        var transactionNames = this.transactions.filter(function (t) { return t.checked; }).map(function (u) { return u.model.name; });
        this.submitting = true;
        this.spmOrchestrationService.trigger(transactionNames).subscribe(function (downloadId) {
            _this.snackBar.open('Request #' + downloadId + ' Submitted', 'Close', _constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].UI.snackBarDuration);
            _this.submitting = false;
        }, function (e) { return _this.dialogService.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            width: '350px',
            data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]('Error: ' + e)
        }).afterClosed().subscribe(function () { return _this.submitting = false; }); });
    };
    UserDataIntegrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vmServiceContractConfig = new _models_vm_service_contract_config__WEBPACK_IMPORTED_MODULE_4__["VmServiceContractConfig"](this.serviceContractConfigService);
        this.vmServiceContractConfig.getCurrentTransactions()
            .subscribe(function (result) { return _this.transactions = result; }, function (e) { return _this.dialogService.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            width: '350px',
            data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]( true ? e.message : undefined)
        }).afterClosed().subscribe(function () { return _this.loading = false; }); }, function () { return _this.loading = false; });
    };
    UserDataIntegrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-data-integration',
            template: __webpack_require__(/*! ./user-data-integration.component.html */ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.html"),
            styles: [__webpack_require__(/*! ./user-data-integration.component.scss */ "./src/app/master-catalogs/user-data-integration/user-data-integration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service_contract_config_service__WEBPACK_IMPORTED_MODULE_3__["ServiceContractConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_spm_orchestration_service__WEBPACK_IMPORTED_MODULE_7__["SpmOrchestrationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UserDataIntegrationComponent);
    return UserDataIntegrationComponent;
}());



/***/ }),

/***/ "./src/app/services/resolver.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resolver.service.ts ***!
  \**********************************************/
/*! exports provided: ResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverService", function() { return ResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout/confirm-dialog/confirm-dialog-model */ "./src/app/layout/confirm-dialog/confirm-dialog-model.ts");
/* harmony import */ var _layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/confirm-dialog/confirm-dialog.component */ "./src/app/layout/confirm-dialog/confirm-dialog.component.ts");









var ResolverService = /** @class */ (function () {
    function ResolverService(router, dataService, dialogService) {
        this.router = router;
        this.dataService = dataService;
        this.dialogService = dialogService;
    }
    /**
     * This should be used to pre fetch both the configuration and the actual data from the server
     */
    ResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var url = state.url.toLowerCase();
        url = url.split('#')[0];
        url = url.split('?')[0];
        return this.dataService.getConfigSection(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].routerData.jsonConfigSection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.find(function (item) { return item.key === url; }); }), // navigation the JSON config on this line
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.dialogService.open(_layout_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
                width: '350px',
                data: new src_app_layout_confirm_dialog_confirm_dialog_model__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]('Error: ' + err, 'Accept')
            });
            return err;
        }));
    };
    ResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ResolverService);
    return ResolverService;
}());



/***/ }),

/***/ "./src/app/services/service-contract-config.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/service-contract-config.service.ts ***!
  \*************************************************************/
/*! exports provided: ServiceContractConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceContractConfigService", function() { return ServiceContractConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");






var ServiceContractConfigService = /** @class */ (function () {
    function ServiceContractConfigService(dataService) {
        this.dataService = dataService;
    }
    ServiceContractConfigService.prototype.getCurrentScId = function () {
        var _this = this;
        if (this.currentScId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.currentScId);
        }
        return this.dataService.invokeFromConfigSection(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].jsonConfigSectionServiceContracts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (result) {
            // validate that scId is properly coming back from service and it's non empty:
            if (result && result.length && result[0].scId) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Service Contract Configuration Service did not return a valid Service Contract Id');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) { return _this.currentScId = x[0].scId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x[0].scId; }));
    };
    /**
     * As opposed to ScId, the below object may often change if a status  / user integration download Id or
     * some sort of current data is shared.
     *
     */
    ServiceContractConfigService.prototype.getServiceContractConfig = function () {
        return this.dataService.invokeFromConfigSection(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].jsonConfigSectionServiceContracts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (result) {
            // validate that scId is properly coming back from service and it's non empty:
            if (result && result.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Service Contract Configuration Service did not return a Service Contract Configuration');
        }));
    };
    ServiceContractConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ServiceContractConfigService);
    return ServiceContractConfigService;
}());



/***/ })

}]);
//# sourceMappingURL=0.js.map