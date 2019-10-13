(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/riccirich/Documents/Github/richard_sithole/blockchaininfo/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row class=\"fill-remaining-space\">\n    <span>Blockchain Explorer</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/riccirich/Documents/Github/richard_sithole/blockchaininfo/node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"block\">\n  <h1>Block details</h1>\n  <p><b>Previous block:</b> {{ block.details.prev_block }}</p>\n  <p><b>Block index:</b> {{ block.details.block_index }}</p>\n  <p><b>Size:</b> {{ block.details.size }}</p>\n  <h1>List of transactions</h1>\n  <h3>\n    Output wallet addresses:\n  </h3>\n  <ul *ngFor=\"let transaction of block.details.tx.slice(1, 10)\">\n    <li *ngIf=\"transaction.out[0].addr\">{{ transaction.out[0].addr }}</li>\n  </ul>\n  <h3>\n    Input wallet addresses:\n  </h3>\n  <ul *ngFor=\"let transaction of block.details.tx.slice(1, 10); let tot\">\n    <li *ngIf=\"transaction.inputs[0].prev\">\n      {{ transaction.inputs[0].prev.addr }}\n    </li>\n  </ul>\n  <br />\n  <h2>\n    Output total in BTC:\n    {{ blogTotal }}\n  </h2>\n</div>\n<button mat-button (click)=\"closeDialog()\" mat-flat-button color=\"primary\">\n  Close\n</button>\n<section class=\"spinner-section\" *ngIf=\"!block\">\n  <mat-progress-spinner\n    class=\"spinner-margin\"\n    color=\"primary\"\n    mode=\"indeterminate\"\n  >\n  </mat-progress-spinner>\n</section>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/components/grid/grid.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/riccirich/Documents/Github/richard_sithole/blockchaininfo/node_modules/raw-loader/dist/cjs.js!./src/app/components/grid/grid.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field floatLabel=\"always\">\n  <input\n    matInput\n    (keyup)=\"applyFilter($event.target.value)\"\n    placeholder=\"Filter by hash\"\n  />\n</mat-form-field>\n<ng-container>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n    <!-- Hash Column -->\n    <ng-container matColumnDef=\"Block hash\" sticky>\n      <th mat-sort-header *matHeaderCellDef mat-header-cell>Hash</th>\n      <td (click)=\"openDialog(element.hash)\" mat-cell *matCellDef=\"let element\">\n        {{ element.hash }}\n      </td>\n    </ng-container>\n    <!-- Time Column -->\n    <ng-container matColumnDef=\"Block time\" sticky>\n      <th mat-sort-header *matHeaderCellDef mat-header-cell>Time</th>\n      <td (click)=\"openDialog(element.hash)\" mat-cell *matCellDef=\"let element\">\n        {{ now - element.time | date: 'medium' }}\n      </td>\n    </ng-container>\n    <!-- Height Column -->\n    <ng-container matColumnDef=\"Block height\" sticky>\n      <th mat-sort-header *matHeaderCellDef mat-header-cell>Height</th>\n      <td (click)=\"openDialog(element.hash)\" mat-cell *matCellDef=\"let element\">\n        {{ element.height }}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n\n  <mat-paginator\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    showFirstLastButtons\n    [length]=\"dataSourceLength\"\n    [pageSize]=\"8\"\n  ></mat-paginator>\n</ng-container>\n<ng-template #noDataTemplate>\n  <p>No blocks found!</p>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/containers/block-list/block-list.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/riccirich/Documents/Github/richard_sithole/blockchaininfo/node_modules/raw-loader/dist/cjs.js!./src/app/containers/block-list/block-list.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"results\">\n    <blockchaininfo-grid></blockchaininfo-grid>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!********************************************************************************************************!*\
  !*** /Users/riccirich/Documents/Github/richard_sithole/blockchaininfo/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fill-remaining-space {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNjaXJpY2gvRG9jdW1lbnRzL0dpdGh1Yi9yaWNoYXJkX3NpdGhvbGUvYmxvY2tjaGFpbmluZm8vYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcHMvYmxvY2tjaGFpbmluZm8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2Jsb2NrY2hhaW5pbmZvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIiwiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/blocks.service */ "./src/app/blocks/blocks.service.ts");



let AppComponent = class AppComponent {
    constructor(blockService) {
        this.blockService = blockService;
    }
    ngOnInit() {
        this.blocks$ = this.blockService.getLatestBlocks();
    }
};
AppComponent.ctorParameters = () => [
    { type: _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_2__["BlocksService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blockchaininfo-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blocks_blocks_service__WEBPACK_IMPORTED_MODULE_2__["BlocksService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _containers_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/block-list/block-list.component */ "./src/app/containers/block-list/block-list.component.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _ui_ui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/ui-material */ "./src/app/ui/ui-material.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");












const routes = [{ path: '', component: _containers_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_6__["BlockListComponent"] }];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _containers_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_6__["BlockListComponent"],
            _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"],
            _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            ..._ui_ui_material__WEBPACK_IMPORTED_MODULE_9__["material"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"], useValue: {} },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"], useValue: [] }
        ],
        entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/blocks/blocks.service.ts":
/*!******************************************!*\
  !*** ./src/app/blocks/blocks.service.ts ***!
  \******************************************/
/*! exports provided: BlocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksService", function() { return BlocksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let BlocksService = class BlocksService {
    constructor(http) {
        this.http = http;
        this.blockBaseUrl = 'api/blocks'; // URL to web api
        this.hash$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    getLatestBlocks() {
        return this.http.get(this.blockBaseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((results) => results.blocks), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getBlockDetails(hash) {
        const url = `${this.blockBaseUrl}/${hash}`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    setHash(hash) {
        this.hash$.next(hash);
    }
    getHash() {
        return this.hash$.value;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it accordingly
            console.error('An error occured:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what was wrong
            console.log(`Backend returned code ${error.status}, body was: ${error.status}`);
        }
        // return an observable wuth a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened, please try again later.');
    }
};
BlocksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlocksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BlocksService);



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ninput {\n  color: #966996;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.mat-dialog-content {\n  min-width: 300px;\n}\n\n.spinner-margin {\n  margin: 0 10px;\n}\n\n.spinner-section {\n  display: flex;\n  justify-content: center;\n  height: 30em;\n  align-items: center;\n}\n\n.mat-dialog-actions {\n  justify-content: flex-end;\n}\n\nbutton:hover {\n  background: #777;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNjaXJpY2gvRG9jdW1lbnRzL0dpdGh1Yi9yaWNoYXJkX3NpdGhvbGUvYmxvY2tjaGFpbmluZm8vYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsImFwcHMvYmxvY2tjaGFpbmluZm8vc3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2Jsb2NrY2hhaW5pbmZvL3NyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogcmdiKDE1MCwgMTA1LCAxNTApO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLnNwaW5uZXItbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5zcGlubmVyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMGVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3NztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogIzk2Njk5Njtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5zcGlubmVyLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uc3Bpbm5lci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzBlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/blocks.service */ "./src/app/blocks/blocks.service.ts");




let DialogComponent = class DialogComponent {
    constructor(dialogRef, blockService, 
    /* prevent error if no data is passed */
    data) {
        this.dialogRef = dialogRef;
        this.blockService = blockService;
        this.data = data;
        this.blogTotal = 0;
    }
    ngOnInit() {
        this.hash = this.blockService.getHash();
        this.dataSource$ = this.blockService.getBlockDetails(this.hash);
        this.processDetails();
    }
    closeDialog() {
        this.dialogRef.close();
    }
    processDetails() {
        this.dataSource$.subscribe(details => {
            this.block = details;
            details.details.tx.map(transaction => {
                transaction.out.map(outputItem => {
                    this.blogTotal += Number(outputItem.value);
                });
            });
        });
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_3__["BlocksService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blockchaininfo-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.scss */ "./src/app/components/dialog/dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_3__["BlocksService"], Object])
], DialogComponent);



/***/ }),

/***/ "./src/app/components/grid/grid.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr:hover {\n  background: #777;\n}\n\ntd {\n  border-bottom-width: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNjaXJpY2gvRG9jdW1lbnRzL0dpdGh1Yi9yaWNoYXJkX3NpdGhvbGUvYmxvY2tjaGFpbmluZm8vYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvYmxvY2tjaGFpbmluZm8vc3JjL2FwcC9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG50ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG50ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/blocks.service */ "./src/app/blocks/blocks.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm2015/sort.js");








let GridComponent = class GridComponent {
    constructor(dialog, blockService) {
        this.dialog = dialog;
        this.blockService = blockService;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedColumns = ['Block hash', 'Block time', 'Block height'];
        this.now = new Date().getTime();
    }
    ngOnInit() {
        this.blockService.getLatestBlocks().subscribe((blocks) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](blocks);
            this.dataSourceLength = blocks.length;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    openDialog(hash) {
        this.blockService.setHash(hash);
        this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            disableClose: false,
            width: '600px',
            height: '600px'
        });
    }
};
GridComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_4__["BlocksService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GridComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
], GridComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], GridComponent.prototype, "sort", void 0);
GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blockchaininfo-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/components/grid/grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid.component.scss */ "./src/app/components/grid/grid.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_4__["BlocksService"]])
], GridComponent);



/***/ }),

/***/ "./src/app/containers/block-list/block-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/block-list/block-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNjaXJpY2gvRG9jdW1lbnRzL0dpdGh1Yi9yaWNoYXJkX3NpdGhvbGUvYmxvY2tjaGFpbmluZm8vYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2NvbnRhaW5lcnMvYmxvY2stbGlzdC9ibG9jay1saXN0LmNvbXBvbmVudC5zY3NzIiwiYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2NvbnRhaW5lcnMvYmxvY2stbGlzdC9ibG9jay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy9ibG9ja2NoYWluaW5mby9zcmMvYXBwL2NvbnRhaW5lcnMvYmxvY2stbGlzdC9ibG9jay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/containers/block-list/block-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/block-list/block-list.component.ts ***!
  \***************************************************************/
/*! exports provided: BlockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListComponent", function() { return BlockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/blocks.service */ "./src/app/blocks/blocks.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






let BlockListComponent = class BlockListComponent {
    constructor(dialog, blockService) {
        this.dialog = dialog;
        this.blockService = blockService;
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    ngOnInit() {
        this.dataSource$ = this.refresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(_ => this.blockService.getLatestBlocks()));
    }
};
BlockListComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_3__["BlocksService"] }
];
BlockListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blockchaininfo-block-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/containers/block-list/block-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-list.component.scss */ "./src/app/containers/block-list/block-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _blocks_blocks_service__WEBPACK_IMPORTED_MODULE_3__["BlocksService"]])
], BlockListComponent);



/***/ }),

/***/ "./src/app/ui/ui-material.ts":
/*!***********************************!*\
  !*** ./src/app/ui/ui-material.ts ***!
  \***********************************/
/*! exports provided: material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return material; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm2015/paginator.js");















const material = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"]
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/riccirich/Documents/Github/richard_sithole/blockchaininfo/apps/blockchaininfo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map