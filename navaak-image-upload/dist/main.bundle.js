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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainapp_upload_upload_component__ = __webpack_require__("../../../../../src/app/mainapp/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_app_routes__ = __webpack_require__("../../../../../src/app/routes/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mainapp_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/mainapp/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mainapp_mainapp_component__ = __webpack_require__("../../../../../src/app/mainapp/mainapp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_inline_editor__ = __webpack_require__("../../../../ng2-inline-editor/ng2-inline-editor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mainapp_upload_uploadplace_uploadplace_component__ = __webpack_require__("../../../../../src/app/mainapp/upload/uploadplace/uploadplace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mainapp_upload_uploadhistory_uploadhistory_component__ = __webpack_require__("../../../../../src/app/mainapp/upload/uploadhistory/uploadhistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mainapp_upload_uploadhistory_your_service_service__ = __webpack_require__("../../../../../src/app/mainapp/upload/uploadhistory/your-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_collapsible__ = __webpack_require__("../../../../angular2-collapsible/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















 // <-- import the module


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__mainapp_upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mainapp_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mainapp_mainapp_component__["a" /* MainappComponent */], __WEBPACK_IMPORTED_MODULE_14__mainapp_upload_uploadplace_uploadplace_component__["a" /* UploadplaceComponent */], __WEBPACK_IMPORTED_MODULE_15__mainapp_upload_uploadhistory_uploadhistory_component__["a" /* UploadhistoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["FlexLayoutModule"],
            // DropzoneModule.forRoot(DROPZONE_CONFIG),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__routes_app_routes__["b" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_inline_editor__["a" /* InlineEditorModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_17_angular2_collapsible__["a" /* CollapsibleModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_clipboard__["a" /* ClipboardModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__["FileUploadModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__routes_app_routes__["a" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_16__mainapp_upload_uploadhistory_your_service_service__["a" /* yourService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.login-page{\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Website-Design-Background-1.jpg") + ");\r\n    background-size: 200vh 100vh;\r\n    height:100vh;\r\n}\r\n.login-form{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n     text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n    padding: 20px 20px;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);  \r\n    box-shadow:         1px 1px 3px 3px rgba(204, 204, 204, 0.37);\r\n}\r\n \r\n.login-form button{\r\n    margin-top: 10px;\r\n    width:25%;\r\n    \r\n}\r\n.login-form label{\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n.login-form input{\r\n    width:100%;\r\n    border: 0;\r\n    border-bottom: 1px solid rgb(103, 65, 114);\r\n    transition: border 1s;\r\n    background-color: #fff;\r\n}\r\n\r\n.login-form input:focus{\r\n    border-bottom: solid 2px #6B0C40;\r\n    outline: none;\r\n} \r\n\r\n.ribbon{\r\n    position: relative;\r\n    padding: 0 13em;\r\n    font-size:1.000em;\r\n    margin-left:-2.88em;\r\n    margin-bottom: 50px;\r\n    line-height: 1.875em;\r\n    color: white;\r\n    border-radius: 0 0.156em 0.156em 0;\r\n    background: rgb(103, 65, 114);\r\n    box-shadow: -1px 2px 3px rgba(0,0,0,0.5);\r\n  }\r\n  .ribbon:after{\r\n    \r\n\tcontent: ' ';\r\n\tposition: absolute;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tleft: 0px;\r\n\ttop: 100%;\r\n\tborder-width: 5px 10px;\r\n\tborder-style: solid;\r\n\tborder-color: rgb(224, 224, 224) rgb(224, 224, 224) transparent transparent;\r\n  }\r\n  .ribbon:before{\r\n    content: ' ';\r\n    position: absolute;\r\n    width: 49px;\r\n    height: 0;\r\n    left: -30px;\r\n    top: 15px;\r\n    border-width: 12px 10px;\r\n    border-style: solid;\r\n    border-color: rgb(103, 65, 114) rgb(103, 65, 114) rgb(103, 65, 114) transparent;\r\n    box-shadow: 0 8px 6px -6px rgba(204, 204, 204, 0.37);\r\n  }\r\n\r\n  \r\n  @media (max-width: 1400px) {\r\n    \r\n    \r\n    .ribbon{\r\n      line-height: 0.143em;\r\n      padding: 1em 8em;\r\n    }\r\n    \r\n    .ribbon:before, .ribbon:after{\r\n      font-size: 0.714em;\r\n    }\r\n  }\r\n  .btn{\r\n    background-color: rgb(103, 65, 114);\r\n    color:white;\r\n    margin:10px 10px ;\r\n    }\r\n\r\n  .btn:hover {\r\n    background-color: rgba(103, 65, 114, 0.849);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n<form class=\"login-form col-sm-3 \" (ngSubmit)=\"onSubmit(userid,password)\" >\n  <label for=\"signin\" class=\"ribbon\"> LOGIN</label>\n  <label for=\"userid\">User Name:</label>\n  <input name=\"userid\"  type=\"text\"  [(ngModel)]=\"userid\" [ngModelOptions]=\"{standalone: true}\">\n  <label for=\"password\" > Password:</label>\n  <input type=\"password\" type =\"password\" [(ngModel)]=\"password\"[ngModelOptions]=\"{standalone: true}\">\n  <button type=\"submit\" class=\"btn\">Login</button>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, router, route) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.userid = '';
        this.password = '';
        this.return = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the query params
        this.route.queryParams
            .subscribe(function (params) { return _this.return = params['return'] || '/forums'; });
    };
    LoginComponent.prototype.onSubmit = function (userid, password) {
        this.loginService.login(userid, password);
        // this.router.navigateByUrl(this.return);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(router) {
        this.router = router;
        this.currentUser = undefined;
    }
    LoginService.prototype.login = function (userid, password) {
        if (userid === 'shaghz' && password === '123') {
            this.router.navigate(['mainapp']);
            console.log('correct,Wlc dear ' + userid);
            localStorage.setItem(this.currentUser, JSON.stringify(userid));
        }
    };
    LoginService.prototype.logout = function () {
        this.currentUser = undefined;
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
        console.log('logged out');
    };
    LoginService.prototype.isValid = function () {
        this.currentUser = 'shaghz';
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/mainapp/mainapp.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"navbar\"><app-navbar></app-navbar></section>\r\n<section class=\"upload\"><app-upload></app-upload></section>"

/***/ }),

/***/ "../../../../../src/app/mainapp/mainapp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainappComponent; });
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

var MainappComponent = (function () {
    function MainappComponent() {
    }
    MainappComponent.prototype.ngOnInit = function () {
    };
    return MainappComponent;
}());
MainappComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mainapp',
        template: __webpack_require__("../../../../../src/app/mainapp/mainapp.component.html")
    }),
    __metadata("design:paramtypes", [])
], MainappComponent);

//# sourceMappingURL=mainapp.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainapp/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n    background-color:  rgb(103, 65, 114) ;\r\n    border-color:  #2A363B ;\r\n}\r\nul{\r\n    background-color:  rgb(103, 65, 114) ;\r\n    list-style-type:none;\r\n    padding-bottom:50px;\r\n}\r\nli:first-child{\r\n    float: left;       \r\n}\r\nli {\r\n    color:white;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-family: 'Acme', sans-serif;\r\n    padding-top: 15px;\r\n}\r\nli:last-child{\r\n    margin-right:25px;\r\n}\r\nbutton{\r\n   \r\n    background-color: rgb(103, 65, 114) ;\r\n    border:0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainapp/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>       \n  <ul >\n     <li class=\"navbar-left\"><span class=\"glyphicon glyphicon-upload\"></span> Upload Files</li>\n\n     <li class=\"navbar-right \">{{user}}\n       <button class=\"logout\" type=\"button\" (click)=\"onLogOut()\" >log out?!</button>\n       <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Link 1</a>\n\n        </div>\n     </li>\n    </ul>\n </nav> "

/***/ }),

/***/ "../../../../../src/app/mainapp/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(loginService) {
        this.loginService = loginService;
        this.user = JSON.parse(localStorage.getItem(this.currentUser));
    }
    NavbarComponent.prototype.onLogOut = function () {
        this.loginService.logout();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/mainapp/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainapp/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.app-title {\r\n    font-size: 24px;\r\n    margin-top:20px;\r\n  }\r\n  \r\n  .box-title {\r\n    font-size: 20px;\r\n    \r\n  }\r\n  \r\n  .box-container {\r\n    box-sizing: border-box;\r\n    width: 800px;\r\n    min-height:500px;\r\n    max-width: 90%;\r\n   padding :10px 10px;\r\n    margin: 30px auto;\r\n    border-radius: 4px;\r\n\r\n    color: #555;\r\n    background-color: #eee;\r\n    box-shadow:\r\n      0 6px 20px rgba(0, 0, 0, 0.18),\r\n      0 6px 6px rgba(0, 0, 0, 0.25);\r\n  }\r\n  .upload{\r\n    border-top: 1px solid #ddd;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n.tabs{\r\n  list-style: none;\r\n  display: inline;\r\n padding-bottom:10px;\r\n  \r\n}\r\n.tab{\r\n  padding: 20px 20px;\r\n  display: inline;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin: 0 0 -1px;\r\n  padding: 15px 25px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  color: #bbb;\r\n  border: 1px solid transparent;\r\n}\r\n.tab:before{\r\n  font-family: fontawesome;\r\n  font-weight: normal;\r\n  margin-right: 10px;\r\n}\r\n\r\n.tab.selected{\r\n\r\n  color: #555;\r\n  border: 1px solid #ddd;\r\n  border-top: 2px solid rgb(103, 65, 114);\r\n  border-bottom: 1px solid #eee;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box-container\">\n    <ul class=\"tabs\">\n       <li *ngFor=\"let state of states\" (click)=\"setState(state)\" class=\"tab\" [class.selected]=\"currentState === state\">{{state}}</li>\n    </ul>\n     <div class=\"upload\">\n      <uploadhistory *ngIf=\"currentState === 'uploadhistory'\"></uploadhistory>\n      <uploadplace *ngIf=\"currentState === 'uploadplace'\"></uploadplace>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
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

var UploadComponent = (function () {
    function UploadComponent() {
        this.states = [
            'uploadplace',
            'uploadhistory'
        ];
        this.currentState = this.states[0];
    }
    UploadComponent.prototype.setState = function (state) {
        this.currentState = state;
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/mainapp/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainapp/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UploadComponent);

//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadhistory/uploadhistory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    list-style: none;\r\n    \r\n}\r\n\r\nbutton{\r\n    outline: none;\r\n    background-color: rgb(103, 65, 114);\r\n    color: white;\r\n   border-radius: 10px;\r\n\r\n}\r\nbutton:hover{\r\nbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n.main{\r\n    width:780px;\r\n    height:400px;\r\n    overflow-y: scroll;\r\n}\r\n.container{\r\n    margin-top:50px;\r\n    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadhistory/uploadhistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<div class=\"container col-sm-12\">\n<ul *ngFor=\"let name of names;let i = index\">\n   <collapsible-list [type]=\"'accordion'\">\n    <collapsible-list-item>\n      <collapsible-header class=\"waves-effect\">\n        {{names[i].name}} ({{names[i].type}})\n      </collapsible-header>\n      <collapsible-body  [expanded]=\"false\">\n       <ul *ngFor=\"let name of names[i].children;let k = index\">\n         <li #sth >\n           {{names[i].children[k].name}}({{names[i].children[k].type}})\n           <button (click)=\"copyToClipboard(i,k)\"  ngxClipboard  [cbContent]=\"textToCopy\" #url data-value=\"i\">\n              <i class=\"fa fa-clipboard\" aria-hidden=\"true\"></i>\n          </button>\n           <button (click)=\"imageWindow(i,k)\"  ><i class=\"fa fa-sign-out\" aria-hidden=\"true\"title=\"hi\"></i></button>\n          </li>\n        </ul>\n      </collapsible-body>\n    </collapsible-list-item>\n </collapsible-list>\n</ul>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadhistory/uploadhistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadhistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__your_service_service__ = __webpack_require__("../../../../../src/app/mainapp/upload/uploadhistory/your-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadhistoryComponent = (function () {
    function UploadhistoryComponent(http, yourService) {
        this.http = http;
        this.yourService = yourService;
    }
    UploadhistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yourService.getData().subscribe(function (data) {
            console.log("what is in the data ", data);
            var word = data.children;
            _this.names = word;
        });
    };
    UploadhistoryComponent.prototype.copyToClipboard = function (i, k) {
        this.textToCopy = 'https://static-do-srv1.navaak.com/images/other/' + this.names[i].name + '/' + this.names[i].children[k].name;
        console.log('copied' + this.textToCopy);
    };
    UploadhistoryComponent.prototype.imageWindow = function (i, k) {
        window.open('https://static-do-srv1.navaak.com/images/other/' + this.names[i].name + '/' + this.names[i].children[k].name);
    };
    return UploadhistoryComponent;
}());
UploadhistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'uploadhistory',
        template: __webpack_require__("../../../../../src/app/mainapp/upload/uploadhistory/uploadhistory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainapp/upload/uploadhistory/uploadhistory.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__your_service_service__["a" /* yourService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__your_service_service__["a" /* yourService */]) === "function" && _b || Object])
], UploadhistoryComponent);

var _a, _b;
//# sourceMappingURL=uploadhistory.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadhistory/your-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return yourService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var yourService = (function () {
    function yourService(http) {
        this.http = http;
        this._url = "../../../../assets/names.json";
    }
    yourService.prototype.getData = function () {
        return this.http.get(this._url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("User data" + JSON.stringify(data)); });
    };
    return yourService;
}());
yourService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], yourService);

var _a;
//# sourceMappingURL=your-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadplace/uploadplace.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .row{\r\n    box-sizing: border-box;\r\n  }\r\n  table td:first-child{\r\n    width: 240px;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n}\r\n  .menubox {\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    box-sizing: border-box;\r\n    width: calc(100% - 16px);\r\n    min-height: 10px;\r\n    padding: 2px 16px 10px 16px;\r\n    margin: 8px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 14px;\r\n  }\r\n\r\n  .ribbon{\r\n    position: relative;\r\n    padding: 0 0.3em;\r\n    font-size:1.000em;\r\n    margin: 0 0 0 -3.83em;\r\n    line-height: 1.875em;\r\n    color: white;\r\n    border-radius: 0.156em 0.156em 0.156em 0.156em;\r\n    background: rgb(103, 65, 114);\r\n    box-shadow: -1px 2px 3px rgba(0,0,0,0.5);\r\n  }\r\n  \r\n  .ribbon:before, .ribbon:after{\r\n    position:absolute;\r\n    content: '';\r\n    display: block;\r\n  }\r\n  .ribbon:after{\r\n    \r\n    content: ' ';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    left: 0px;\r\n    top: 100%;\r\n    border-width: 5px 10px;\r\n    border-style: solid;\r\n    border-color: rgb(224, 224, 224) rgb(224, 224, 224) transparent transparent;\r\n    }\r\n    .ribbon:before{\r\n      content: ' ';\r\n      position: absolute;\r\n      width: 49px;\r\n      height: 0;\r\n      left: -30px;\r\n      top: 15px;\r\n      border-width: 12px 10px;\r\n      border-style: solid;\r\n      border-color: rgb(103, 65, 114) rgb(103, 65, 114) rgb(103, 65, 114) transparent;\r\n      box-shadow: 0 8px 6px -6px rgba(204, 204, 204, 0.37);\r\n    }\r\n  \r\n  /* .ribbon:before{\r\n    width: 0.469em;\r\n    height: 100%;\r\n    padding: 0 0 0.438em;\r\n    top:0;\r\n    left: -0.469em;\r\n    background:inherit;\r\n    border-radius: 0.313em 0 0 0.313em;\r\n  } */\r\n/*   \r\n  .ribbon:after{\r\n    width: 0.313em;\r\n    height: 0.313em;\r\n    background: rgba(0,0,0,0.35);\r\n    bottom: -0.313em;\r\n    left: -0.313em;\r\n    border-radius: 0.313em 0 0 0.313em;\r\n    box-shadow: inset -1px 2px 2px rgba(0,0,0,0.3);\r\n  }\r\n   */\r\n  @media (max-width: 600px) {\r\n    \r\n    \r\n    .ribbon{\r\n      line-height: 1.143em;\r\n      padding: 1em;\r\n    }\r\n    \r\n    .ribbon:before, .ribbon:after{\r\n      font-size: 0.714em;\r\n    }\r\n  }\r\n  .button-area{\r\n    box-sizing: border-box;\r\n    width: calc(100% - 32px);\r\n    min-height: 10px;\r\n    padding: 4px 8px;\r\n    margin: 8px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 14px;\r\n  }\r\n\r\n  input [type=\"checkbox\"]{\r\n    padding-right:20px;\r\n  }\r\n \r\n  .size-form{\r\n   display:-webkit-box;\r\n   display:-ms-flexbox;\r\n   display:flex;\r\n   -webkit-box-orient: vertical;\r\n   -webkit-box-direction: normal;\r\n       -ms-flex-direction: column;\r\n           flex-direction: column;\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n   text-align: center;\r\n  }\r\n\r\n  .lil-btn{\r\n    width:25px;\r\n    height: 25px;\r\n    margin-left:2px;\r\n  }\r\n  .glyphicon{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  text-align: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n\r\n  }\r\n\r\n .glyphicon-pencil{\r\n  font-size: 0.8em;\r\n  float:right;\r\n  padding-top:10px;\r\n }\r\n \r\n td{\r\n   padding-top:10px;\r\n }\r\n\r\n input[type=file]{\r\n  font-size: 10px;\r\n  padding: 20px 0 35px 0 ;\r\n\r\n  background-color: #eee;\r\n  border:0;\r\n }\r\n .resize-area label{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: baseline;\r\n      -ms-flex-align: baseline;\r\n          align-items: baseline;\r\n }\r\n .resize-box{\r\n   padding-top: 20px;\r\n }\r\n\r\n .resize-box span {\r\n    padding-left: 10px\r\n}\r\n\r\n@-webkit-keyframes click-wave {\r\n  0% {\r\n    height: 40px;\r\n    width: 40px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 200px;\r\n    width: 200px;\r\n    margin-left: -80px;\r\n    margin-top: -80px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes click-wave {\r\n  0% {\r\n    height: 40px;\r\n    width: 40px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 200px;\r\n    width: 200px;\r\n    margin-left: -80px;\r\n    margin-top: -80px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.option-input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -ms-appearance: none;\r\n  -o-appearance: none;\r\n  position: relative;\r\n  top: 3px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 15px;\r\n  width: 15px;\r\n  transition: all 0.15s ease-out 0s;\r\n  background: #cbd1d8;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  outline: none;\r\n  position: relative;\r\n  z-index: 1000;\r\n}\r\n.option-input:hover {\r\n  background: #9faab7;\r\n}\r\n.option-input:checked {\r\n  background: rgb(165, 98, 186);\r\n}\r\n.option-input:checked::before {\r\n  height: 15px;\r\n  width: 15px;\r\n  position: absolute;\r\n  content: '\\2714';\r\n  display: inline-block;\r\n  font-size: 10px;\r\n  text-align: center;\r\n  line-height: 15px;\r\n}\r\n.option-input:checked::after {\r\n  -webkit-animation: click-wave 0.65s;\r\n  animation: click-wave 0.65s;\r\n  background: rgb(165, 98, 186);\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n    box-sizing: border-box;\r\n}\r\nbutton span {\r\n    transition: 0.6s;\r\n    transition-delay: 0.2s;\r\n}\r\n\r\nbutton:before,\r\nbutton:after {\r\n    content: '';\r\n    position: absolute;\r\n    \r\n    width: 100%;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: .4s,opacity .6s;\r\n}\r\n\r\nbutton:before {\r\n    content: attr(data-hover);\r\n    -webkit-transform: translate(-150%,0);\r\n    transform: translate(-150%,0);\r\n}\r\n\r\nbutton:after {\r\n    content: attr(data-active);\r\n    -webkit-transform: translate(150%,0);\r\n    transform: translate(150%,0);\r\n}\r\n\r\nbutton:hover span,\r\nbutton:active span {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.3);\r\n    transform: scale(0.3);\r\n}\r\n\r\nbutton:hover:before,\r\nbutton:active:after {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0,0);\r\n    transform: translate(0,0);\r\n    transition-delay: .4s;\r\n}\r\n\r\nbutton:active:before {\r\n    -webkit-transform: translate(-150%,0);\r\n    transform: translate(-150%,0);\r\n    transition-delay: 0s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadplace/uploadplace.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n      <form  class=\"size-form\">\n          <div class=\"form-group menubox\">\n              <div for=\"multiple\"class=\"headlabel ribbon\"><Strong>Upload Here:</Strong></div>\n              <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect  [uploader]=\"uploader\" multiple  />\n          </div>\n\n      <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"menubox resize-area\">\n         <div class=\"headlabel ribbon\"><strong>Choose Size:  </strong></div> \n          <div class=\"resize-box\">\n            <label for=\"500\">\n            <input type=\"checkbox\" class=\"option-input checkbox\" (change)=\"check()\"[(ngModel)]=\"size1\" [ngModelOptions]=\"{standalone: true}\" ><label for=\"my-checkbox\"></label>\n            <span>500 x 500</span>\n            </label> \n            <label for=\"400\">\n            <input type=\"checkbox\" class=\"option-input checkbox\" (change)=\"check()\"[(ngModel)]=\"size2\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>400 x 400</span>\n            </label>\n            <label for=\"320\">\n            <input type=\"checkbox\" class=\"option-input checkbox\" (change)=\"check()\"[(ngModel)]=\"size3\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>320 x 320</span>\n            </label>\n            <label for=\"300\">\n            <input type=\"checkbox\" class=\"option-input checkbox\" (change)=\"check()\"[(ngModel)]=\"size4\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>300 x 300</span>\n            </label>\n            <label for=\"280\">\n            <input type=\"checkbox\" class=\"option-input checkbox\" (change)=\"check()\" [(ngModel)]=\"size5\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>280 x 280</span>\n            </label>\n            <label for=\"200\">\n            <input type=\"checkbox\"  class=\"option-input checkbox\" (change)=\"check()\"[(ngModel)]=\"size6\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>200 x 200</span>\n            </label>\n            <label for=\"140\">\n            <input type=\"checkbox\"class=\"option-input checkbox\" (change)=\"check()\" [(ngModel)]=\"size7\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>140 x 140</span>\n            </label>\n            <label for=\"96\">\n            <input type=\"checkbox\"class=\"option-input checkbox\" (change)=\"check()\" [(ngModel)]=\"size8\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>96 x 96</span>\n            </label>\n            <label for=\"50\">\n            <input type=\"checkbox\"class=\"option-input checkbox\" (change)=\"check()\" [(ngModel)]=\"size9\"[ngModelOptions]=\"{standalone: true}\" >\n            <span>50 x 50</span>\n            </label>  \n          </div>\n      </div>  \n\n            <div class=\"button-area\">\n            <button  type=\"submit\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length || !togglebutton\">\n            <span class=\"glyphicon glyphicon-upload\"></span> Resize all \n            </button>\n\n            <button type=\"button\" class=\"btn btn-danger btn-s\"   (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n            <span class=\"glyphicon glyphicon-trash\"></span> Remove all</button>\n            </div>\n        </form>\n    </form>\n    </div>\n    <div class=\"col-md-8\">\n    <div >{{err}}</div>\n      Queue length: {{ uploader?.queue?.length }}\n     \n      <table class=\"table\">\n          <thead>\n          <tr>\n              <th width=\"50%\">Name</th>\n              <th>Size</th>\n              <th>Progress</th>\n              <th>Status</th>\n              <th>Actions</th>\n          </tr>\n          </thead>\n          <tbody>\n             <tr *ngFor=\"let item of uploader.queue;let i = index; trackBy: arrayTrackBy\">\n                 \n                <td>\n                    \n                   <img [src]=\"imagepreviewArray[i]\" width=\"50\" *ngIf=\"filePreviewPath\" class=\"tmp\" /> <strong> {{ item.file.name }}</strong>\n                    <i (click)=\"hideme[i] = !hideme[i]\" class=\"glyphicon glyphicon-pencil\"></i>   \n                    <div [hidden]=\"!hideme[i]\">\n                        <input name=\"value\" type=\"text\" [(ngModel)]=\"item.file.name \">\n                    </div>\n                </td>\n                <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                <td>\n                  <div class=\"progress\" style=\"margin-bottom: 0;\">\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                  </div>\n                </td>\n\n                <td class=\"text-center\">\n                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                </td>\n                <button type=\"button\" class=\"btn btn-success lil-btn\"  (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> \n                </button>\n                <button type=\"button\" class=\"btn btn-danger lil-btn\" (click)=\"item.remove()\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> \n                </button>\n               \n\n                \n          </tr>\n        </tbody>\n      </table>         \n          <div>\n              Queue progress:\n            <div class=\"progress\">\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n            </div>\n          </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainapp/upload/uploadplace/uploadplace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadplaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadplaceComponent = (function () {
    function UploadplaceComponent(http, fb, element, sanitizer) {
        var _this = this;
        this.http = http;
        this.fb = fb;
        this.element = element;
        this.sanitizer = sanitizer;
        this.togglebutton = false;
        this.imagepreviewArray = [];
        this.size1 = false;
        this.size2 = false;
        this.size3 = false;
        this.size4 = false;
        this.size5 = false;
        this.size6 = false;
        this.size7 = false;
        this.size8 = false;
        this.size9 = false;
        this.value = '';
        this.show = false;
        this.dimensions = [];
        this.imgName = [];
        this.hideme = [];
        this.sizes = { 'dimensions': this.dimensions, 'imgName': this.imgName };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({ url: 'http://46.101.254.122:3001/upload' });
        this.uploader.onAfterAddingFile = function (item) {
            _this.filePreviewPath = _this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(item._file)));
            _this.imagepreviewArray.push(_this.filePreviewPath);
        };
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onCompleteItem = function (item, response, status, header) {
            _this.imgName.pop();
            _this.imgName.push(item.file.name);
            if (status === 200) {
                return _this.http.post('http://46.101.254.122:3001/sizes', _this.sizes)
                    .subscribe();
            }
        };
    }
    UploadplaceComponent.prototype.onChange = function (files) {
    };
    UploadplaceComponent.prototype.arrayTrackBy = function (index, value) {
        return index;
    };
    UploadplaceComponent.prototype.check = function () {
        if (!this.size1 && !this.size2 && !this.size3 && !this.size4 && !this.size5 && !this.size6 && !this.size7 && !this.size8 && !this.size9) {
            this.togglebutton = false;
        }
        else {
            this.togglebutton = true;
        }
    };
    UploadplaceComponent.prototype.onSubmit = function (value) {
        this.dimensions.pop();
        if (this.size1) {
            this.dimensions.push({ width: '500', height: '500' });
        }
        if (this.size2) {
            this.dimensions.push({ width: '400', height: '400' });
        }
        if (this.size3) {
            this.dimensions.push({ width: '320', height: '320' });
        }
        if (this.size4) {
            this.dimensions.push({ width: '300', height: '300' });
        }
        if (this.size5) {
            this.dimensions.push({ width: '280', height: '280' });
        }
        if (this.size6) {
            this.dimensions.push({ width: '200', height: '200' });
        }
        if (this.size7) {
            this.dimensions.push({ width: '140', height: '140' });
        }
        if (this.size8) {
            this.dimensions.push({ width: '96', height: '96' });
        }
        if (this.size9) {
            this.dimensions.push({ width: '50', height: '50' });
        }
    };
    UploadplaceComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response);
        this.err = error['err'];
    };
    return UploadplaceComponent;
}());
UploadplaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'uploadplace',
        template: __webpack_require__("../../../../../src/app/mainapp/upload/uploadplace/uploadplace.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainapp/upload/uploadplace/uploadplace.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], UploadplaceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=uploadplace.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainapp_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/mainapp/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainapp_mainapp_component__ = __webpack_require__("../../../../../src/app/mainapp/mainapp.component.ts");




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'mainapp', component: __WEBPACK_IMPORTED_MODULE_3__mainapp_mainapp_component__["a" /* MainappComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_2__mainapp_navbar_navbar_component__["a" /* NavbarComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/assets/Website-Design-Background-1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Website-Design-Background-1.d078968bc905921e539a.jpg";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map