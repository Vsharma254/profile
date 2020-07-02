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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"about\">\n  <div class=\"col-md-6 about-left\">\n    <div id=\"owl-demo1\" class=\"owl-carousel2\">\n      <div class=\"item\">\n        <div class=\"about-left-grid\">\n          <h2>Hi! I'm <span>Vivek Sharma</span></h2>\n          <p>I am a full stack engineer working with reputed MNC. I am having more than 7 years of experience in \n                          developing, designing and deploying the web application.\n                          Having expertise in front end and back end developments using the java script.\n                      </p>\n          <ul>\n            <li><a class=\"a-btn-a scroll\" href=\"#port\">My Work</a></li>\n            <li><a class=\"a-btn-h scroll\" href=\"#contact\">Hire Me</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 about-right\">\n\n  </div>\n  <div class=\"clearfix\"> </div>\n  <link href=\"/assets/css/owl.carousel.css\" rel=\"stylesheet\">\n  <script src=\"/assets/js/owl.carousel.js\"></script>\n  <script>\n    $(document).ready(function () {\n      $(\"#owl-demo1\").owlCarousel({\n        items: 1,\n        lazyLoad: false,\n        autoPlay: true,\n        navigation: false,\n        navigationText: false,\n        pagination: true,\n      });\n    });\n  </script>\n  <!-- Feedback -->\n  <script>\n    $(document).ready(function () {\n      $(\"#owl-demo3\").owlCarousel({\n        items: 1,\n        lazyLoad: false,\n        autoPlay: true,\n        navigation: false,\n        navigationText: true,\n        pagination: true,\n      });\n    });\n  </script>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blogs_bloglist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs/bloglist.component */ "./src/app/blogs/bloglist.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: {
            meta: {
                title: 'home.title',
                description: 'home.text',
                override: true,
            },
        },
    }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
        data: {
            meta: {
                title: 'home.title',
                description: 'home.text',
                override: true,
            },
        },
    }, {
        path: 'blogs',
        component: _blogs_bloglist_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"],
        data: {
            meta: {
                title: 'home.title',
                description: 'home.text',
                override: true,
            },
        },
    }, {
        path: 'Github',
        component: _github_github_component__WEBPACK_IMPORTED_MODULE_4__["GithubComponent"],
        data: {
            meta: {
                title: 'home.title',
                description: 'home.text',
                override: true,
            },
        },
    }]; // GithubComponent
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
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

module.exports = "\n<!-- container -->\n<script type=\"text/javascript\">\n    jQuery(document).ready(function ($) {\n        $(\".scroll\").click(function (event) {\n            event.preventDefault();\n            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);\n        });\n    });\n</script>\n\t<!-- header -->\n\t<div id=\"home\" class=\"header\">\n\t\t<div class=\"container\">\n\t\t\t<!-- top-hedader -->\n\t\t\t<div class=\"top-header\">\n\t\t\t\t<!-- /logo -->\n\t\t\t\t<!--top-nav---->\n\t\t\t\t<app-navigation></app-navigation>\n\t\t\t\t<app-banner></app-banner>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- about -->\n\t<router-outlet></router-outlet>\n\t<!-- /about -->\n\n\n\n\t\n\t<!-- /header -->\n\t\n\t<!-- //footer -->\n\t<!-- /container -->\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic4.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic9.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal3\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic5.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal4\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic6.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal5\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic10.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal6\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic11.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal7\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic13.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal8\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<h3>Image-Title</h3>\n\t\t\t\t\t\t\t<img src=\"assets/images/pic14.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n\t\t\t\t\t\t\t\thas been the industry's standard dummy text ever since the 1500s, when an unknown\n\t\t\t\t\t\t\t\tprinter took a galley of type and scrambled it to make a type specimen book.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"portfolio-modal modal fade slideanim\" id=\"portfolioModal9\" tabindex=\"-1\" role=\"dialog\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-content port-modal\">\n\t\t\t<div class=\"close-modal\" data-dismiss=\"modal\">\n\t\t\t\t<div class=\"lr\">\n\t\t\t\t\t<div class=\"rl\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<img src=\"assets/images/pic1.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <a href=\"#home\" id=\"toTop\" style=\"display: block;\"> <span id=\"toTopHover\" style=\"opacity: 1;\"> </span></a>\n    <script type=\"text/javascript\">\n\t\t$(document).ready(function () {\n\t\t\t/*\n\t\t\tvar defaults = {\n\t\t\t\t\tcontainerID: 'toTop', // fading element id\n\t\t\t\tcontainerHoverID: 'toTopHover', // fading element hover id\n\t\t\t\tscrollSpeed: 1200,\n\t\t\t\teasingType: 'linear' \n\t\t\t\t};\n\t\t\t*/\n\n\t\t\t$().UItoTop({ easingType: 'easeOutQuart' });\n\n\t\t});\n\t</script>\n\t<!--end-smooth-scrolling-->\n\t<!-- //for bootstrap working -->\n\t<script src=\"assets/js/bootstrap.js\"></script>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blogs_bloglist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogs/bloglist.component */ "./src/app/blogs/bloglist.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _blogs_bloglist_component__WEBPACK_IMPORTED_MODULE_6__["BlogListComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _github_github_component__WEBPACK_IMPORTED_MODULE_13__["GithubComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-info\">\n  <div class=\"col-md-7 header-right\">\n    <h1>Hi !</h1>\n    <h6>I Am Full Stack Developer</h6>\n    <ul class=\"address\">\n\n      <li>\n        <ul class=\"address-text\">\n          <li><b>NAME</b></li>\n          <li>VIVEK SHARMA</li>\n        </ul>\n      </li>\n      <li>\n        <ul class=\"address-text\">\n          <li><b>PHONE </b></li>\n          <li>+00 111 222 3333</li>\n        </ul>\n      </li>\n      <li>\n        <ul class=\"address-text\">\n          <li><b>ADDRESS </b></li>\n          <li>NOIDA INDIA</li>\n        </ul>\n      </li>\n      <li>\n        <ul class=\"address-text\">\n          <li><b>E-MAIL </b></li>\n          <li><a href=\"mailto:example@mail.com\"> vsharma254@gmail.com</a></li>\n        </ul>\n      </li>\n      <li>\n        <ul class=\"address-text\">\n          <li><b>WEBSITE </b></li>\n          <li><a href=\"http://www.engineervivek.in\">http://www.engineervivek.in</a></li>\n        </ul>\n      </li>\n\n    </ul>\n  </div>\n  <div class=\"col-md-5 header-left\">\n    <img src=\"assets/images/logo.png\" alt=\"\">\n  </div>\n  <div class=\"clearfix\"> </div>\n\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.scss":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/blogs/bloglist.component.html":
/*!***********************************************!*\
  !*** ./src/app/blogs/bloglist.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //portfolio -->\n\t<!-- top-grids -->\n\t<div class=\"blog\" id=\"blogs\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"service-head text-center\">\n\t\t\t\t<h4>BLOGS</h4>\n\t\t\t\t<h3>MY <span>BLOGS</span></h3>\n\t\t\t\t<span class=\"border one\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"news-grid w3l-agile\">\n\t\t\t\t<div class=\"col-md-6 news-img\">\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"assets/images/b1.jpg\" alt=\" \"\n\t\t\t\t\t\t\tclass=\"img-responsive\"></a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 news-text\">\n\t\t\t\t\t<h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<ul class=\"news\">\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n\t\t\t\t\t\tconsequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n\t\t\t\t\t\tipsum quia dolor sit amet.</p>\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n\t\t\t\t\t\tMore</a>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"news-grid\">\n\n\t\t\t\t<div class=\"col-md-6 news-text two\">\n\t\t\t\t\t<h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<ul class=\"news\">\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n\t\t\t\t\t\tconsequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n\t\t\t\t\t\tipsum quia dolor sit amet.</p>\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n\t\t\t\t\t\tMore</a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 news-img two\">\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"assets/images/b2.jpg\" alt=\" \"\n\t\t\t\t\t\t\tclass=\"img-responsive\"></a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"news-grid\">\n\t\t\t\t<div class=\"col-md-6 news-img\">\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"assets/images/b3.jpg\" alt=\" \"\n\t\t\t\t\t\t\tclass=\"img-responsive\"></a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 news-text\">\n\t\t\t\t\t<h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<ul class=\"news\">\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n\t\t\t\t\t\tconsequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n\t\t\t\t\t\tipsum quia dolor sit amet.</p>\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n\t\t\t\t\t\tMore</a>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- top-grids -->\n\t<!-- /blog-pop-->\n\t<div class=\"modal ab fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t<div class=\"modal-dialog about\" role=\"document\">\n\t\t\t<div class=\"modal-content about\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close ab\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n\t\t\t\t\t\t\taria-hidden=\"true\">&times;</span></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body about\">\n\t\t\t\t\t<div class=\"about\">\n\n\t\t\t\t\t\t<div class=\"about-inner\">\n\n\t\t\t\t\t\t\t<img src=\"assets/images/b3.jpg\" alt=\"about\" />\n\t\t\t\t\t\t\t<h4 class=\"tittle\">A Fews words about us</h4>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet Integer gravida,Lorem ipsum dolor sit amet Integer gravida\n\t\t\t\t\t\t\t\tvelit,Ming sits in the corner the whole day. She's into crochet. quis dolor\n\t\t\t\t\t\t\t\ttristiqumsan.Mirum est notare quam littera gothica, quam nunc putamus parum claram,\n\t\t\t\t\t\t\t\tanteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.\n\t\t\t\t\t\t\t\tvelit quis dolor tristiqumsan.</p>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet. Integer gravida velit quis dolor tristiqumsan.anteposuerit\n\t\t\t\t\t\t\t\tlitterarum formas humanitatis per seacula amet Integer gravida velit. </p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- //blog-pop-->\n"

/***/ }),

/***/ "./src/app/blogs/bloglist.component.ts":
/*!*********************************************!*\
  !*** ./src/app/blogs/bloglist.component.ts ***!
  \*********************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LINKS = [
    { link: '/home', name: 'home', icon: 'home' },
    { link: '/mock', name: 'mock', icon: 'info_outline' },
    { link: '/async', name: 'async-http', icon: 'swap_vert' },
    { link: '/back', name: 'back-http', icon: 'swap_vert' },
    { link: '/static/back', name: 'static-back-http', icon: 'swap_vert' },
    { link: '/nonexistent', name: 'nonexistent', icon: 'error' }
];
var BlogListComponent = /** @class */ (function () {
    function BlogListComponent() {
        this.links = [];
    }
    BlogListComponent.prototype.ngOnInit = function () {
        var linkTemp = JSON.parse(JSON.stringify(LINKS));
        this.links = linkTemp.map(function (link) {
            link.name = "sidebar." + link.name;
            return link;
        });
        this.loadScript();
    };
    BlogListComponent.prototype.loadScript = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = '/customscript.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    BlogListComponent.prototype.logout = function () {
    };
    BlogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./bloglist.component.html */ "./src/app/blogs/bloglist.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" id=\"contact\">\n    <div class=\"container\">\n        <div class=\"service-head one text-center\">\n            <h4>CONTACT ME</h4>\n            <h3>GET <span>IN TOUCH WITH ME</span></h3>\n            <span class=\"border two\"></span>\n        </div>\n        <div class=\"mail_us\">\n            <div class=\"col-md-6 mail_left\">\n                <div class=\"contact-grid1-left\">\n                    <div class=\"contact-grid1-left1\">\n                        <span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>\n                        <h4>Contact By Email</h4>\n                        <ul>\n                            <li>Mail1: <a href=\"mailto:info@example.com\">info@example1.com</a></li>\n                            <li>Mail2: <a href=\"mailto:info@example.com\">info@example2.com</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"contact-grid1-left\">\n                    <div class=\"contact-grid1-left1\">\n                        <span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span>\n                        <h4>Contact By Phone</h4>\n                        <ul>\n                            <li>Phone: +0000 123 312</li>\n                            <li>Fax: +123 312</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"contact-grid1-left\">\n                    <div class=\"contact-grid1-left1\">\n                        <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n                        <h4>Looking For Address</h4>\n                        <ul>\n                            <li>Address: General Pvt 66, Dong Da</li>\n                            <li>Hanoi, Vietnam.</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"clearfix\"> </div>\n            </div>\n            <div class=\"col-md-6 mail_right\">\n                <form action=\"#\" method=\"post\">\n                    <input type=\"text\" name=\"Name\" value=\"Name\" onfocus=\"this.value = '';\"\n                        onblur=\"if (this.value == '') {this.value = 'Name';}\" required=\"\">\n                    <input type=\"email\" name=\"Email\" value=\"Email\" onfocus=\"this.value = '';\"\n                        onblur=\"if (this.value == '') {this.value = 'Email';}\" required=\"\">\n                    <input type=\"text\" name=\"Mobile number\" value=\"Mobile number\" onfocus=\"this.value = '';\"\n                        onblur=\"if (this.value == '') {this.value = 'Mobile number';}\" required=\"\">\n                    <textarea name=\"Message...\" onfocus=\"this.value = '';\"\n                        onblur=\"if (this.value == '') {this.value = 'Message...';}\"\n                        required=\"\">Message...</textarea>\n                    <input type=\"submit\" value=\"Send\">\n\n                </form>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"copy_right text-center\">\n            <p>&copy; 2016 Preface . All rights reserved | Design by <a href=\"http://w3layouts.com/\"\n                    target=\"_blank\">W3layouts.</a></p>\n            <ul class=\"social-icons two\">\n                <li><a href=\"#\"> </a></li>\n                <li><a href=\"#\" class=\"fb\"> </a></li>\n                <li><a href=\"#\" class=\"in\"> </a></li>\n                <li><a href=\"#\" class=\"dott\"> </a></li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LINKS = [
    { link: '/home', name: 'home', icon: 'home' },
    { link: '/mock', name: 'mock', icon: 'info_outline' },
    { link: '/async', name: 'async-http', icon: 'swap_vert' },
    { link: '/back', name: 'back-http', icon: 'swap_vert' },
    { link: '/static/back', name: 'static-back-http', icon: 'swap_vert' },
    { link: '/nonexistent', name: 'nonexistent', icon: 'error' }
];
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.links = [];
    }
    ContactComponent.prototype.ngOnInit = function () {
        var linkTemp = JSON.parse(JSON.stringify(LINKS));
        this.links = linkTemp.map(function (link) {
            link.name = "sidebar." + link.name;
            return link;
        });
        this.loadScript();
    };
    ContactComponent.prototype.loadScript = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = '/customscript.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    ContactComponent.prototype.logout = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/github/github.component.html":
/*!**********************************************!*\
  !*** ./src/app/github/github.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //portfolio -->\n\t<!-- top-grids -->\n\t<div class=\"blog\" id=\"blogs\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"service-head text-center\">\n\t\t\t\t<h4>Git Hub</h4>\n\t\t\t\t<h3>My <span>Git References</span></h3>\n\t\t\t\t<span class=\"border one\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"news-grid w3l-agile\">\n\t\t\t\t<div class=\"col-md-6 news-img\">\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"assets/images/b1.jpg\" alt=\" \"\n\t\t\t\t\t\t\tclass=\"img-responsive\"></a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 news-text\">\n\t\t\t\t\t<h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<ul class=\"news\">\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n\t\t\t\t\t\tconsequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n\t\t\t\t\t\tipsum quia dolor sit amet.</p>\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n\t\t\t\t\t\tMore</a>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"news-grid\">\n\n\t\t\t\t<div class=\"col-md-6 news-text two\">\n\t\t\t\t\t<h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<ul class=\"news\">\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n\t\t\t\t\t\tconsequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n\t\t\t\t\t\tipsum quia dolor sit amet.</p>\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n\t\t\t\t\t\tMore</a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 news-img two\">\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"assets/images/b2.jpg\" alt=\" \"\n\t\t\t\t\t\t\tclass=\"img-responsive\"></a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"news-grid\">\n\t\t\t\t<div class=\"col-md-6 news-img\">\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\"> <img src=\"assets/images/b3.jpg\" alt=\" \"\n\t\t\t\t\t\t\tclass=\"img-responsive\"></a>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 news-text\">\n\t\t\t\t\t<h3> <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">HERE GOES AN AWESOME BLOG TITLE</a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<ul class=\"news\">\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">Admin</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-comment\"></i> <a href=\"#\">2 Comments</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-heart\"></i> <a href=\"#\">50 Likes</a></li>\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-tags\"></i> <a href=\"#\">3 Tags</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n\t\t\t\t\t\tconsequatur aut perferendis doloribus asperiores repellat. Neque porro quisquam est, qui dolorem\n\t\t\t\t\t\tipsum quia dolor sit amet.</p>\n\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"read hvr-shutter-in-horizontal\">Read\n\t\t\t\t\t\tMore</a>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- top-grids -->\n\t<!-- /blog-pop-->\n\t<div class=\"modal ab fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t<div class=\"modal-dialog about\" role=\"document\">\n\t\t\t<div class=\"modal-content about\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close ab\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n\t\t\t\t\t\t\taria-hidden=\"true\">&times;</span></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body about\">\n\t\t\t\t\t<div class=\"about\">\n\n\t\t\t\t\t\t<div class=\"about-inner\">\n\n\t\t\t\t\t\t\t<img src=\"assets/images/b3.jpg\" alt=\"about\" />\n\t\t\t\t\t\t\t<h4 class=\"tittle\">A Fews words about us</h4>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet Integer gravida,Lorem ipsum dolor sit amet Integer gravida\n\t\t\t\t\t\t\t\tvelit,Ming sits in the corner the whole day. She's into crochet. quis dolor\n\t\t\t\t\t\t\t\ttristiqumsan.Mirum est notare quam littera gothica, quam nunc putamus parum claram,\n\t\t\t\t\t\t\t\tanteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.\n\t\t\t\t\t\t\t\tvelit quis dolor tristiqumsan.</p>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet. Integer gravida velit quis dolor tristiqumsan.anteposuerit\n\t\t\t\t\t\t\t\tlitterarum formas humanitatis per seacula amet Integer gravida velit. </p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- //blog-pop-->\n"

/***/ }),

/***/ "./src/app/github/github.component.scss":
/*!**********************************************!*\
  !*** ./src/app/github/github.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi9naXRodWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/github/github.component.ts":
/*!********************************************!*\
  !*** ./src/app/github/github.component.ts ***!
  \********************************************/
/*! exports provided: GithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GithubComponent = /** @class */ (function () {
    function GithubComponent() {
    }
    GithubComponent.prototype.ngOnInit = function () {
    };
    GithubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-github',
            template: __webpack_require__(/*! ./github.component.html */ "./src/app/github/github.component.html"),
            styles: [__webpack_require__(/*! ./github.component.scss */ "./src/app/github/github.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubComponent);
    return GithubComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-about></app-about>\n<app-services></app-services>\n<app-works></app-works>\n<app-blogs></app-blogs>\n<app-contact></app-contact>"

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
        this.loadScript();
    };
    HomeComponent.prototype.loadScript = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = '/customscript.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
        var scriptCarosel = document.createElement('script');
        scriptCarosel.innerHTML = '';
        scriptCarosel.src = '/carousel.js';
        scriptCarosel.async = true;
        scriptCarosel.defer = true;
        body.appendChild(scriptCarosel);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-nav\">\n  <div class=\"navigation\">\n    <div class=\"logo\">\n      <h1><a href=\"index.html\"><span>V</span>IVEK</a></h1>\n    </div>\n    <div class=\"navigation-right\">\n      <span class=\"menu\"><img src=\"assets/images/menu.png\" alt=\" \" /></span>\n      <nav class=\"link-effect-3\" id=\"link-effect-3\">\n        <ul class=\"nav1 nav nav-wil\">\n          <li class=\"active\"><a data-hover=\"Home\" href=\"index.html\">Home</a></li>\n          <li><a class=\"scroll\" data-hover=\"About\" href=\"#about\">About</a></li>\n          <li><a class=\"scroll\" data-hover=\"Services\" href=\"#services\">Services</a></li>\n          <li><a class=\"scroll\" data-hover=\"Experience\" href=\"#work\">Experience</a></li>\n          <li><a class=\"scroll\" data-hover=\"Portfolio\" href=\"#port\">Portfolio</a></li>\n          <li><a class=\"scroll\" data-hover=\"Blog\" href=\"#blogs\">Blog</a></li>\n          <li><a class=\"scroll\" data-hover=\"Contact\" href=\"#contact\">Contact</a></li>\n        </ul>\n      </nav>\n      <!-- script-for-menu -->\n      <script>\n        $(\"span.menu\").click(function () {\n          $(\"ul.nav1\").slideToggle(300, function () {\n            // Animation complete.\n          });\n        });\n      </script>\n      <!-- /script-for-menu -->\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <!-- /top-hedader -->\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  background-color: #6b6692; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9EOlxccGVyc29uYWxcXHBcXG15LWFwcC9zcmNcXGFwcFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge2JhY2tncm91bmQtY29sb3I6ICM2YjY2OTI7fSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- services -->\n\t<div id=\"services\" class=\"services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"service-head one text-center \">\n\t\t\t\t<h4>WHAT I DO</h4>\n\t\t\t\t<h3>MY <span>SERVICES</span></h3>\n\t\t\t\t<span class=\"border two\"></span>\n\t\t\t</div>\n\t\t\t<!-- services-grids -->\n\t\t\t<div class=\"wthree_about_right_grids w3l-agile\">\n\t\t\t\t<div class=\"col-md-6 wthree_about_right_grid\">\n\t\t\t\t\t<div class=\"col-xs-4 wthree_about_right_grid_left\">\n\t\t\t\t\t\t<div class=\"hvr-rectangle-in\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-pencil\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-8 wthree_about_right_grid_right\">\n\t\t\t\t\t\t<h4>Web Development</h4>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 wthree_about_right_grid\">\n\t\t\t\t\t<div class=\"col-xs-4 wthree_about_right_grid_left\">\n\t\t\t\t\t\t<div class=\"hvr-rectangle-in\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-cog\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-8 wthree_about_right_grid_right\">\n\t\t\t\t\t\t<h4>Deployment</h4>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 wthree_about_right_grid\">\n\t\t\t\t\t<div class=\"col-xs-4 wthree_about_right_grid_left\">\n\t\t\t\t\t\t<div class=\"hvr-rectangle-in\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-leaf\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-8 wthree_about_right_grid_right\">\n\t\t\t\t\t\t<h4>Mobile application development</h4>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 wthree_about_right_grid\">\n\t\t\t\t\t<div class=\"col-xs-4 wthree_about_right_grid_left\">\n\t\t\t\t\t\t<div class=\"hvr-rectangle-in\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-gift\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-8 wthree_about_right_grid_right\">\n\t\t\t\t\t\t<h4>AWS</h4>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t</div>\n\n\t\t\t<!-- services-grids -->\n\t\t</div>\n\t</div>\n\t<!-- services -->"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/works/works.component.html":
/*!********************************************!*\
  !*** ./src/app/works/works.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!--work-experience-->\n\t<div id=\"work\" class=\"work\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"service-head text-center\">\n\t\t\t\t<h4>WHAT I DID</h4>\n\t\t\t\t<h3>MY <span>EXPERIENCE</span></h3>\n\t\t\t\t<span class=\"border one\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"time-main w3l-agile\">\n\t\t\t\t<div class=\"col-md-6 year-info\">\n\t\t\t\t\t<ul class=\"year\">\n\t\t\t\t\t\t<li>2019</li>\n\t\t\t\t\t\t<li>2018</li>\n\t\t\t\t\t\t<li>2016</li>\n\t\t\t\t\t\t<li>2014</li>\n\t\t\t\t\t\t<li>2013</li>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"col-md-6 timeline\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"timeline-badge info\"><i class=\"glyphicon glyphicon-briefcase\"></i></div>\n\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">BARCO ELECTRONICS INDIA PVT LTD </h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t\t<p>Working as Sr. Software Engineer in BARCO ELECTRONICS INDIA PVT LTD, NOIDA (Uttar Pradesh)\n                                    Duration:  From February 2019 – Present\n                           </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"timeline-badge primary\"><i class=\"glyphicon glyphicon-briefcase\"></i></div>\n\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">GENPACT HEADSTRONG CAPITAL MARKET</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t\t<p>Worked as Consultant in GENPACT HEADSTRONG CAPITAL MARKET, NOIDA (Uttar Pradesh)\n                                    Duration:  From October 2017 – February 2019\n                            </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"timeline-badge danger\"><i class=\"glyphicon glyphicon-briefcase\"></i></div>\n\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">GLOBAL LOGIC INDIA PVT LTD</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t\t<p>Worked as Sr. SOFTWARE ENGINEER in GLOBAL LOGIC INDIA PVT LTD, NOIDA (Uttar Pradesh)\n                                    Duration:  From May 2016 – October 2017\n                            </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"timeline-badge success\"><i class=\"glyphicon glyphicon-briefcase\"></i></div>\n\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">AGDOVA TECHNOLOGIES PVT LTD</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t\t<p>Worked as SOFTWARE DEVELOPER in AGDOVA TECHNOLOGIES PVT LTD, Faridabad (Haryana)\n                                    Duration:  From April 2014 – May 2016\n                           </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"timeline-badge pass\"><i class=\"glyphicon glyphicon-briefcase\"></i></div>\n\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">KV SOFTECH PVT LTD </h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t\t<p>Worked as SOFTWARE DEVELOPER in KV SOFTECH PVT LTD, NOIDA (Uttar Pradesh)\n                                    Duration:  From March 2013 – April, 2014\n                            </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--//work-experience-->"

/***/ }),

/***/ "./src/app/works/works.component.scss":
/*!********************************************!*\
  !*** ./src/app/works/works.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.scss */ "./src/app/works/works.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
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

module.exports = __webpack_require__(/*! D:\personal\p\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map