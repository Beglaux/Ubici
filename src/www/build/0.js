webpackJsonp([0],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = (function () {
    function RegistroPageModule() {
    }
    return RegistroPageModule;
}());
RegistroPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
        ],
    })
], RegistroPageModule);

//# sourceMappingURL=registro.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = (function () {
    function RegistroPage(navCtrl, iab, fileOpener, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.fileOpener = fileOpener;
        this.navParams = navParams;
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.openLink = function () {
        this.iab.create("https://www.facebook.com");
    };
    RegistroPage.prototype.openFile = function () {
        this.fileOpener.open('path/to/file.pdf', 'application/pdf')
            .then(function () { return console.log('File is opened'); })
            .catch(function (e) { return console.log('Error openening file', e); });
    };
    return RegistroPage;
}());
RegistroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registro',template:/*ion-inline-start:"C:\Users\MAICOL MARIN\UbiciV1\src\pages\registro\registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n          Datos del Usuario\n        </ion-list-header>\n        <ion-item>\n          <ion-icon name="person" item-left></ion-icon>\n          <ion-input type="text" placeholder="Nombres" [(ngModel)]="nombres"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon  item-left></ion-icon>\n          <ion-input type="text" placeholder="Apellidos" [(ngModel)]="apellidos"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="body" item-left></ion-icon>\n            <ion-label>Genero</ion-label>\n            <ion-select interface="action-sheet" [(ngModel)]="genero">\n              <ion-option >Masculino</ion-option>\n              <ion-option >Femenino</ion-option>\n              <ion-option >Otro</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="calendar" item-left></ion-icon>\n            <ion-label>Fecha de Nacimiento</ion-label>\n            <ion-datetime displayFormat="DD MM, YYYY" [(ngModel)]="fechaNacimiento"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="at" item-left></ion-icon>\n          <ion-input type="text" placeholder="Correo" [(ngModel)]="correo"></ion-input>\n        </ion-item>\n  </ion-list>\n    <ion-list>\n        <ion-list-header>\n          Datos de la Cuenta\n        </ion-list-header>  \n        <ion-card>\n            <img width="200" height="280" src="../assets/img/perfil2.jpg"/>\n        </ion-card>         \n        <ion-item>\n          <ion-icon name="contact" item-left></ion-icon>\n          <ion-label stacked >Nombre de Usuario</ion-label>\n          <ion-input type="text" [(ngModel)]="usuario"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="unlock" item-left></ion-icon>\n            <ion-label stacked >Contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="unlock" item-left></ion-icon>\n            <ion-label stacked >Repetir Contraseña</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button block color="secondary">Crear Cuenta</button>\n    <button ion-button block  color="light">Cancelar</button>\n    <button ion-button block color="primary" (click)="openLink()">Registrarse con Facebook</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\MAICOL MARIN\UbiciV1\src\pages\registro\registro.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object])
], RegistroPage);

var _a, _b, _c, _d;
//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileOpener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File Opener
 * @description
 * This plugin will open a file on your device file system with its default application.
 *
 * @usage
 * ```typescript
 * import { FileOpener } from '@ionic-native/file-opener';
 *
 * constructor(private fileOpener: FileOpener) { }
 *
 * ...
 *
 * this.fileOpener.open('path/to/file.pdf', 'application/pdf')
 *   .then(() => console.log('File is opened'))
 *   .catch(e => console.log('Error openening file', e));
 *
 * ```
 */
var FileOpener = (function (_super) {
    __extends(FileOpener, _super);
    function FileOpener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open an file
     * @param filePath {string} File Path
     * @param fileMIMEType {string} File MIME Type
     * @returns {Promise<any>}
     */
    FileOpener.prototype.open = function (filePath, fileMIMEType) { return; };
    /**
     * Uninstalls a package
     * @param packageId {string}  Package ID
     * @returns {Promise<any>}
     */
    FileOpener.prototype.uninstall = function (packageId) { return; };
    /**
     * Check if an app is already installed
     * @param packageId {string} Package ID
     * @returns {Promise<any>}
     */
    FileOpener.prototype.appIsInstalled = function (packageId) { return; };
    return FileOpener;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
FileOpener.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
FileOpener.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FileOpener.prototype, "open", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileOpener.prototype, "uninstall", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileOpener.prototype, "appIsInstalled", null);
FileOpener = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
        pluginName: 'FileOpener',
        plugin: 'cordova-plugin-file-opener2',
        pluginRef: 'cordova.plugins.fileOpener2',
        repo: 'https://github.com/pwlin/cordova-plugin-file-opener2',
        platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
    })
], FileOpener);

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map