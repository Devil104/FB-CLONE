(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  // Configure one or more authentication providers
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  }) // ...add more providers here
  ],
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL
}));

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYmNsb25lLXl0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly9kYmNsb25lLXl0L2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiLCJkYXRhYmFzZSIsIkRBVEFCQVNFX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxnREFBUSxDQUFDO0FBQ3RCO0FBQ0FDLFdBQVMsRUFBRSxDQUNUQyxtRUFBQSxDQUFtQjtBQUNqQkMsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FDVkMsa0JBRmlCO0FBR2pCQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FDZEc7QUFKaUIsR0FBbkIsQ0FEUyxDQU9UO0FBUFMsR0FGVztBQVl0QjtBQUNBQyxVQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztBQWJBLENBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5cclxuICAgICAgRkFDRUJPT0tfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlxyXG4gICAgICBGQUNFQk9PS19DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxyXG4gIF0sXHJcblxyXG4gIC8vIEEgZGF0YWJhc2UgaXMgb3B0aW9uYWwsIGJ1dCByZXF1aXJlZCB0byBwZXJzaXN0IGFjY291bnRzIGluIGEgZGF0YWJhc2VcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=