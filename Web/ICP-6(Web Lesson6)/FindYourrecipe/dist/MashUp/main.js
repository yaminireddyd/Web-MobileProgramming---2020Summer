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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");





var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search-recipe', component: _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_4__["SearchRecipeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\n  height:60em; background-size:cover; width:100%;\n  background-image:url('1.jpg');\n  background-position:50% 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsV0FBVztFQUMvQyw4QkFBOEI7RUFDOUIsNEJBQTRCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gIGhlaWdodDo2MGVtOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcxLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MashUp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__["SearchRecipeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default background\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand background\">Find your Recipe!!!</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse tx\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/home\">Home</a></li>\n        <li><a routerLink=\"/search-recipe\">Search Recipe</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Contact Us</a></li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [".background {background:#000000; color: white}", "li a { color: white}", "ul.nav a:hover { color: #fffccc  }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\n  position: relative;\n  height:100%;\n  width: 100%;\n}\n\n.child-container {\n  color: cornflowerblue;\n  text-align: center;\n  position: center;\n\n}\n\n.desc {\n  font-family: Georgia;\n  font-size: 17px;\n}\n\n.gobtn{\n  background-color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCOztDQUVsQjs7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6MTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGlsZC1jb250YWluZXIge1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGNlbnRlcjtcblxufVxuLmRlc2Mge1xuICBmb250LWZhbWlseTogR2VvcmdpYTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uZ29idG57XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\n  <div class=\"child-container\">\n    <h2>Hello, Welcome to <b>Find Your Recipe!!!\n    </b></h2>\n    <span class=\"desc\">Find Your Recipe is a Mashup Web Application which is built using <i>Foursquare & Edamam's Recipe Search API</i> . This application find Recipe and Place to find that Food.</span><br><br><br>\n    <form>\n      <div class=\"form-group\">\n        <label>Subscribe to our news letter:</label><br><br>\n        <div class=\"form-group col-lg-4 col-lg-offset-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"name@example.com\" />\n        </div><br>\n        <button class=\"btn btn-dark col-lg-2 col-lg-offset-5 gobtn \">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\n  position: relative;\n  height:100%;\n  width: 100%;\n}\n\n.child-container {\n  color: lavender;\n  text-align: center;\n  position: center;\n\n}\n\n.desc {\n  font-family: Georgia;\n  font-size: 17px;\n}\n\n.thumbnail {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\n  transition: 0.3s;\n  min-width: 40%;\n  border-radius: 5px;\n}\n\n.thumbnail-description {\n  min-height: 40px;\n}\n\n.thumbnail:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);\n}\n\n.gobtn{\n  background-color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlY2lwZS9zZWFyY2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCOztDQUVsQjs7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDO0NBQzNDOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlY2lwZS9zZWFyY2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hpbGQtY29udGFpbmVyIHtcbiAgY29sb3I6IGxhdmVuZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG5cbn1cbi5kZXNjIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgbWluLXdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRodW1ibmFpbC1kZXNjcmlwdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi50aHVtYm5haWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG4uZ29idG57XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\n  <div class=\"child-container\">\n    <h2><b>Search for your recipe!!\n    </b></h2><br>\n    <form>\n      <div class=\"form-group\">\n        <div class=\"form-group col-lg-6 col-lg-offset-3 input-group\">\n          <input #recipe class=\"form-control\" placeholder=\"Recipe name\" type=\"text\">\n          <span class=\"input-group-addon\">-</span>\n          <input #place class=\"form-control\" placeholder=\"Place\" type=\"text\">\n          <span class=\"input-group-addon\">-</span>\n\n        </div>\n        <br>\n        <button (click)=\"getVenues()\" class=\"btn btn-dark col-lg-2 col-lg-offset-5 gobtn\" type=\"button\">Go</button>\n\n      </div>\n    </form>\n  </div>\n</div><br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"panel panel-default col-6\">\n        <div class=\"panel-heading\"><b>How to make</b></div>\n        <div class=\"panel-body\">\n          <div *ngFor=\"let recipe of recipeList\" class=\"list-group-item clearfix\">\n            <div class=\"pull-left\">\n              <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n              <a href=\"{{recipe.url}}\" class=\"list-group-item-text\">{{ recipe.url }}</a>\n\n            </div>\n\n            <span class=\"pull-right\">\n          <img src=\"{{recipe.icon}}\" style=\"width: 70px; height: 50px;\" align=\"center\"/>\n\n      </span>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"panel panel-default col-6\">\n        <div class=\"panel-heading\"><b>Where to get</b></div>\n        <div class=\"panel-body\">\n\n          <div *ngFor=\"let venue of venueList\" class=\"list-group-item clearfix\">\n            <div class=\"pull-left\">\n              <h4 class=\"list-group-item-heading\">{{ venue.name }}</h4>\n            </div>\n\n            <span class=\"pull-right\">\n             <a target=\"_blank\" href=\"http://maps.google.com/maps?saddr={{currentLat}},{{currentLong}}\n             &daddr={{venue.formattedAddress[0]}},{{venue.formattedAddress[1]}},{{venue.formattedAddress[2]}}\">\n               <img src=\"../../assets/google.png\" style=\"width: 30px; height: 30px;\"></a>\n      </span>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRecipeComponent", function() { return SearchRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchRecipeComponent = /** @class */ (function () {
    function SearchRecipeComponent(_http) {
        this._http = _http;
        this.venueList = [];
        this.recipeList = [];
        this.formattedAddress = [];
        this.recepieApi = 'https://api.edamam.com/search?q=';
        this.recepieAppid = '&app_id=ba18fdc5';
        this.recepieKey = '&app_key=588b400e488e39a56644f2a2e8094f12';
    }
    SearchRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for getting the users current location
        window.navigator.geolocation.getCurrentPosition(function (position) {
            _this.geolocationPosition = position;
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
        });
    };
    //this method get the locations and we are only storing the label, icons and url and showing it on the html page.
    SearchRecipeComponent.prototype.getVenues = function () {
        var _this = this;
        this.recipeValue = this.recipes.nativeElement.value;
        this.placeValue = this.places.nativeElement.value;
        //for the recipes we are limiting the results to 5 recipes
        if (this.recipeValue !== null) {
            this._http.get("https://api.edamam.com/search?q=" + this.recipeValue + "&app_id=ba18fdc5&app_key=588b400e488e39a56644f2a2e8094f12&to=5")
                .subscribe(function (result) {
                console.log(result);
                _this.recipeList = Object.keys(result.hits).map(function (k) {
                    var i = result.hits[k].recipe;
                    return { name: i.label, icon: i.image, url: i.url };
                });
            });
        }
        //for the location search we are limiting the location to 8 results
        if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
            this._http.get("https://api.foursquare.com/v2/venues/search?client_id=R0DXXKM5BTJMRK3HRXMCRZ3QK3UG3LM1AUDLHDNEBQZRCYTZ" +
                "&client_secret=IOWJRGIHCVO2UIYKFLPQCRL3WDYIEDX1FJVLET2J3XMRHLHT&v=20180323&limit=8&near=" + this.placeValue).subscribe(function (result) {
                console.log(result);
                _this.venueList = Object.keys(result.response.venues).map(function (k) {
                    var i = result.response.venues[k];
                    return { name: i.name, currentLat: '39.0349657', currentLong: '-94.5787524', formattedAddress: i.location.formattedAddress };
                });
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recipe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "recipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('place'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "places", void 0);
    SearchRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-recipe',
            template: __webpack_require__(/*! ./search-recipe.component.html */ "./src/app/search-recipe/search-recipe.component.html"),
            styles: [__webpack_require__(/*! ./search-recipe.component.css */ "./src/app/search-recipe/search-recipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchRecipeComponent);
    return SearchRecipeComponent;
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

module.exports = __webpack_require__(/*! /Users/yamini/Desktop/FindYourrecipe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map