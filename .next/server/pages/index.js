(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Contact.js";



const Contects = props => {
  const closeChat = () => {
    props.closeChat();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: props.state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        position: "fixed",
        bottom: "0",
        right: "0%",
        height: "450px",
        minHeight: "450px",
        maxHeight: "450px",
        background: "#ffffff",
        width: "330px",
        borderTopLeftRadius: "7px",
        borderTopRightRadius: "7px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          padding: "15px",
          borderBottom: "1px solid #f0f2f5"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "50%",
            display: "flex",
            alignItems: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              overflow: "hidden"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              },
              src: props.current.image ? props.current.image : "",
              alt: "user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              marginLeft: "6px",
              fontWeight: "600"
            },
            children: props.current.name ? props.current.name : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "50%",
            display: "flex",
            justifyContent: "flex-end"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaVideo, {
            style: {
              margin: "10px 5px",
              color: "blue",
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPhone, {
            style: {
              margin: "10px 5px",
              color: "green",
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegWindowClose, {
            style: {
              margin: "10px 5px",
              color: "red",
              cursor: "pointer"
            },
            onClick: closeChat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          padding: "14px",
          fontSize: "14px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "flex",
            justifyContent: "flex-start"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              display: "inline-block",
              background: "#f0f2f5",
              padding: "7px",
              color: "#333",
              borderRadius: "6px",
              marginTop: "6px"
            },
            children: "Hi,h r y?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "flex",
            justifyContent: "flex-end"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              display: "inline-block",
              background: "#0d8cf1",
              padding: "7px",
              color: "#fff",
              borderRadius: "6px",
              marginTop: "6px"
            },
            children: "I m fine.and y?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "flex",
            justifyContent: "flex-start"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              display: "inline-block",
              background: "#f0f2f5",
              padding: "7px",
              color: "#333",
              borderRadius: "6px",
              marginTop: "6px"
            },
            children: "Not doing well."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "flex",
            justifyContent: "flex-end"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              display: "inline-block",
              background: "#0d8cf1",
              padding: "7px",
              color: "#fff",
              borderRadius: "6px",
              marginTop: "6px"
            },
            children: "see ya"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          position: "fixed",
          bottom: "0px",
          width: "400px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          style: {
            width: "330px",
            border: "none",
            background: "#f0f2f5",
            outline: "none",
            padding: "15px 13px"
          },
          placeholder: "Aa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined) : ""
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Contects);

/***/ }),

/***/ "./components/Feed.js":
/*!****************************!*\
  !*** ./components/Feed.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stories */ "./components/Stories.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputBox */ "./components/InputBox.js");
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Posts */ "./components/Posts.js");

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Feed.js";




function Feed() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y:auto scrollbar-hide",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-auto max-w-md md:max-w-lg lg:max-2-2xl",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Stories__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputBox__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posts__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _HeaderIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderIcon */ "./components/HeaderIcon.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Header.js";







function Header() {
  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "https://links.papareact.com/5me",
        width: 40,
        height: 40,
        layout: "fixed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex ml-2 items-center rounded-full bg-gray-100 p-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
          className: "h-6 text-gray-600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink",
          type: "text",
          placeholder: "search Facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-center flex-grow",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-6 md:space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__.default, {
          active: true,
          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.HomeIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__.default, {
          Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.FlagIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__.default, {
          Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PlayIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__.default, {
          Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ShoppingCartIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__.default, {
          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UserGroupIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center sm:space-x-2 jsutify-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_5__.signOut,
        className: "rounded-full cursor-pointer",
        src: session.user.image,
        width: "40",
        height: "40",
        layout: "fixed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_5__.signOut,
        className: "whitespace-nowrap font-semibold pr-3",
        children: session.user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ViewGridIcon, {
        className: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChatIcon, {
        className: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.BellIcon, {
        className: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon, {
        className: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderIcon.js":
/*!**********************************!*\
  !*** ./components/HeaderIcon.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\HeaderIcon.js";

function HeaderIcon({
  Icon,
  active
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group ",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
      className: `h-5 text-gray-500 text-center sm:h-7 max-auto
             group-hover:text-blue-500 ${active && "text-blue-500"}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderIcon);

/***/ }),

/***/ "./components/InputBox.js":
/*!********************************!*\
  !*** ./components/InputBox.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\InputBox.js";








function InputBox() {
  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const {
    0: imageToPost,
    1: setImageToPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);

  const sendPost = e => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    _firebase__WEBPACK_IMPORTED_MODULE_6__.db.collection('posts').add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase__WEBPACK_IMPORTED_MODULE_7___default().firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      if (imageToPost) {
        const uploadTask = _firebase__WEBPACK_IMPORTED_MODULE_6__.storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');
        removeImage();
        uploadTask.on('state_change', null, error => console.error(error), () => {
          //when the upload completes
          _firebase__WEBPACK_IMPORTED_MODULE_6__.storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
            _firebase__WEBPACK_IMPORTED_MODULE_6__.db.collection('posts').doc(doc.id).set({
              postImage: url
            }, {
              merge: true
            });
          });
        });
      }
    });
    inputRef.current.value = "";
  };

  const addImageToPost = e => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex space-x-4 p-4 items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "rounded-full",
        src: session.user.image,
        width: 40,
        height: 40,
        layout: "fixed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flex flex-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "rounded-full h-12  bg-gray-100 flex-grow px-10 outline-none",
          type: "text",
          ref: inputRef,
          placeholder: `what's on your mind, ${session.user.name}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          hidden: true,
          type: "submit",
          onClick: sendPost,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), imageToPost && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: removeImage,
        className: "flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "h-10 object-contain",
          src: imageToPost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-red-500 text-center",
          children: "Remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-evenly p-3 border-1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.VideoCameraIcon, {
          className: "h-6 text-red-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs sm:test-sm xl:text-base",
          children: "Live Video"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => filepickerRef.current.click(),
        className: "inputIcon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.CameraIcon, {
          className: "h-6 text-green-400"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs sm:test-sm xl:text-base",
          children: "Photo/Video"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: filepickerRef,
          onChange: addImageToPost,
          type: "file",
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.EmojiHappyIcon, {
          className: "h-6 text-yellow-300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs sm:test-sm xl:text-base",
          children: "Feeling/Activity"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (InputBox);

/***/ }),

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Login.js";



function Login() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid place-items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "https://links.papareact.com/t4i",
      height: 400,
      width: 400,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn,
      className: "p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer",
      children: "Login with Facebook"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/firestore */ "react-firebase-hooks/firestore");
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Posts.js";





function Posts() {
  const [realtimePosts] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__.useCollection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection("posts").orderBy("timestamp", "desc"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: realtimePosts === null || realtimePosts === void 0 ? void 0 : realtimePosts.docs.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100%",
        margin: "15px auto",
        background: "#f0f2f5",
        borderRadius: "10px",
        boxshadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "empty",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: "35px",
              height: "35px",
              borderRadius: "70%",
              overflow: "hidden"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              },
              src: post.data().image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 23
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              marginLeft: "12px",
              fontWeight: "600"
            },
            children: post.data().name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: "100%",
              margin: "12px 0"
            },
            children: post.data().message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 23
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "show__body-img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              style: {
                width: "100%",
                height: "100%"
              },
              src: post.data().postImage,
              alt: "post"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-evenly p-3 border-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inputIcon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ThumbUpIcon, {
              className: "h-6 text-red-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-xs sm:test-sm xl:text-base",
              children: "Like"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inputIcon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChatAltIcon, {
              className: "h-6 text-green-400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-xs sm:test-sm xl:text-base",
              children: "Comments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inputIcon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ShareIcon, {
              className: "h-6 text-yellow-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-xs sm:test-sm xl:text-base",
              children: "Share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, post.id, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 19
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _SidebarRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarRow */ "./components/SidebarRow.js");

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Sidebar.js";





function Sidebar() {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-2 mt-5 max-w-[600px] xl:min-w-[300pc]",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      src: session.user.image,
      title: session.user.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.UserIcon,
      title: "Friends"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UserGroupIcon,
      title: "Groups"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ShoppingBagIcon,
      title: "Marketplace"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.DesktopComputerIcon,
      title: "watch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CalendarIcon,
      title: "Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ClockIcon,
      title: "Memories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarRow__WEBPACK_IMPORTED_MODULE_4__.default, {
      Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
      title: "See More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/SidebarRow.js":
/*!**********************************!*\
  !*** ./components/SidebarRow.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\SidebarRow.js";


function SidebarRow({
  src,
  Icon,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer",
    children: [src && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "rounded-full",
      src: src,
      width: 30,
      height: 30,
      layout: "fixed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }, this), Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
      className: "h-8 w-8 text-blue-500 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "hidden sm:inline-flex font-medium",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SidebarRow);

/***/ }),

/***/ "./components/Stories.js":
/*!*******************************!*\
  !*** ./components/Stories.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StoryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoryCard */ "./components/StoryCard.js");

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Stories.js";

const stories = [{
  name: "sonny Sangha",
  src: "https://links.papareact.com/zof",
  profile: "https://links.papareact.com/l4v"
}, {
  name: "Elon Musk",
  src: "https://links.papareact.com/4zn",
  profile: "https://links.papareact.com/kxk"
}, {
  name: "Mark Zuckerberg",
  src: "https://links.papareact.com/xql",
  profile: "https://links.papareact.com/snf"
}, {
  name: "Bill Gates",
  src: "https://links.papareact.com/4u4",
  profile: "https://links.papareact.com/zvy"
}];

function Stories() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center space-x-3 max-auto",
    children: stories.map(story => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StoryCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      name: story.name,
      src: story.src,
      profile: story.profile
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ }),

/***/ "./components/StoryCard.js":
/*!*********************************!*\
  !*** ./components/StoryCard.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\StoryCard.js";


function StoryCard({
  name,
  src,
  profile
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-ponter overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10",
      src: profile,
      width: 40,
      height: 40,
      layout: "fixed",
      objectFit: "cover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "object-cover filter brightness-75 rounded-full lg:rounded-3xl",
      src: src,
      layout: "fill"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-white text-sm font-bold truncate",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (StoryCard);

/***/ }),

/***/ "./components/Widgets.js":
/*!*******************************!*\
  !*** ./components/Widgets.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\components\\Widgets.js";




const Widgets = props => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_3___default().useState([{
    id: 4,
    image: "/images/fawad4.jpg",
    name: "Javed Khan"
  }, {
    id: 7,
    image: "/images/profile.jfif",
    name: "Saeed Khan"
  }]);

  const openChat = user => {
    props.openChat(user);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "hidden lg:flex flex-col w-60 p-2 mt-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between items-center text-gray-500 mb-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-xl",
        children: "Contacts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.VideoCameraIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.DotsHorizontalIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "chatBar",
      children: state.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl",
        onClick: () => openChat(user),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "rounded-full",
          width: 50,
          height: 50,
          layout: "fixed",
          src: user.image,
          alt: "user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, undefined)]
      }, user.id, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Widgets);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": function() { return /* binding */ db; },
/* harmony export */   "storage": function() { return /* binding */ storage; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);


const firebaseConfig = {
  apiKey: "AIzaSyBR_KyWKU8NSHKd_kReobfVg2v0iMCM0gg",
  authDomain: "facebook--2-yt.firebaseapp.com",
  projectId: "facebook--2-yt",
  storageBucket: "facebook--2-yt.appspot.com",
  messagingSenderId: "103438027174",
  appId: "1:103438027174:web:e40e350a7659a9c408a767"
};
const app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();
const db = app.firestore();
const storage = firebase__WEBPACK_IMPORTED_MODULE_0___default().storage();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Feed */ "./components/Feed.js");
/* harmony import */ var _components_Widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Widgets */ "./components/Widgets.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");

var _jsxFileName = "C:\\Users\\RAJIB\\dbclone-yt\\pages\\index.js";









function Home({
  session
}) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [current, setCurrent] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({});

  const openChat = user => {
    setState(true);
    setCurrent(user);
  };

  const closeChat = () => {
    setState(false);
  };

  if (!session) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 24
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Widgets__WEBPACK_IMPORTED_MODULE_8__.default, {
        openChat: openChat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_9__.default, {
        state: state,
        current: current,
        closeChat: closeChat
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);
  return {
    props: {
      session
    }
  };
}

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/storage");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-firebase-hooks/firestore");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_heroicons_react_outline_esm_index_js-node_modules_heroicons_react_solid_-d93a8c"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYmNsb25lLXl0Ly4vY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovL2RiY2xvbmUteXQvLi9jb21wb25lbnRzL0ZlZWQuanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2RiY2xvbmUteXQvLi9jb21wb25lbnRzL0hlYWRlckljb24uanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2NvbXBvbmVudHMvSW5wdXRCb3guanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2NvbXBvbmVudHMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2NvbXBvbmVudHMvUG9zdHMuanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9kYmNsb25lLXl0Ly4vY29tcG9uZW50cy9TaWRlYmFyUm93LmpzIiwid2VicGFjazovL2RiY2xvbmUteXQvLi9jb21wb25lbnRzL1N0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2NvbXBvbmVudHMvU3RvcnlDYXJkLmpzIiwid2VicGFjazovL2RiY2xvbmUteXQvLi9jb21wb25lbnRzL1dpZGdldHMuanMiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC8uL2ZpcmViYXNlLmpzIiwid2VicGFjazovL2RiY2xvbmUteXQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYmNsb25lLXl0L2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly9kYmNsb25lLXl0L2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovL2RiY2xvbmUteXQvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2RiY2xvbmUteXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9kYmNsb25lLXl0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9kYmNsb25lLXl0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGJjbG9uZS15dC9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiIiwid2VicGFjazovL2RiY2xvbmUteXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDb250ZWN0cyIsInByb3BzIiwiY2xvc2VDaGF0Iiwic3RhdGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZCIsIndpZHRoIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwib3ZlcmZsb3ciLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJvYmplY3RGaXQiLCJjdXJyZW50IiwiaW1hZ2UiLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsIm5hbWUiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImNvbG9yIiwiY3Vyc29yIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJvdXRsaW5lIiwiRmVlZCIsIkhlYWRlciIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwiSG9tZUljb24iLCJGbGFnSWNvbiIsIlBsYXlJY29uIiwiU2hvcHBpbmdDYXJ0SWNvbiIsIlVzZXJHcm91cEljb24iLCJzaWduT3V0IiwidXNlciIsIkhlYWRlckljb24iLCJJY29uIiwiYWN0aXZlIiwiSW5wdXRCb3giLCJpbnB1dFJlZiIsInVzZVJlZiIsImZpbGVwaWNrZXJSZWYiLCJpbWFnZVRvUG9zdCIsInNldEltYWdlVG9Qb3N0IiwidXNlU3RhdGUiLCJzZW5kUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiZGIiLCJhZGQiLCJtZXNzYWdlIiwiZW1haWwiLCJ0aW1lc3RhbXAiLCJmaXJlYmFzZSIsInRoZW4iLCJkb2MiLCJ1cGxvYWRUYXNrIiwic3RvcmFnZSIsImlkIiwicHV0U3RyaW5nIiwicmVtb3ZlSW1hZ2UiLCJvbiIsImVycm9yIiwiY29uc29sZSIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJzZXQiLCJwb3N0SW1hZ2UiLCJtZXJnZSIsImFkZEltYWdlVG9Qb3N0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwicmVzdWx0IiwiY2xpY2siLCJMb2dpbiIsInNpZ25JbiIsIlBvc3RzIiwicmVhbHRpbWVQb3N0cyIsInVzZUNvbGxlY3Rpb24iLCJvcmRlckJ5IiwiZG9jcyIsIm1hcCIsInBvc3QiLCJib3hzaGFkb3ciLCJkYXRhIiwiZmxleERpcmVjdGlvbiIsIlNpZGViYXIiLCJsb2FkaW5nIiwiVXNlckljb24iLCJTaG9wcGluZ0JhZ0ljb24iLCJEZXNrdG9wQ29tcHV0ZXJJY29uIiwiQ2FsZW5kYXJJY29uIiwiQ2xvY2tJY29uIiwiQ2hldnJvbkRvd25JY29uIiwiU2lkZWJhclJvdyIsInNyYyIsInRpdGxlIiwic3RvcmllcyIsInByb2ZpbGUiLCJTdG9yaWVzIiwic3RvcnkiLCJTdG9yeUNhcmQiLCJXaWRnZXRzIiwic2V0U3RhdGUiLCJSZWFjdCIsIm9wZW5DaGF0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJmaXJlc3RvcmUiLCJIb21lIiwic2V0Q3VycmVudCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJnZXRTZXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxNQUFNQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QkQsU0FBSyxDQUFDQyxTQUFOO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLGNBQ0dELEtBQUssQ0FBQ0UsS0FBTixnQkFDQztBQUFLLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFLE9BQVo7QUFBcUJDLGNBQU0sRUFBRSxHQUE3QjtBQUFrQ0MsYUFBSyxFQUFFLElBQXpDO0FBQStDQyxjQUFNLEVBQUUsT0FBdkQ7QUFBZ0VDLGlCQUFTLEVBQUUsT0FBM0U7QUFBcUZDLGlCQUFTLEVBQUUsT0FBaEc7QUFBeUdDLGtCQUFVLEVBQUUsU0FBckg7QUFBaUlDLGFBQUssRUFBRSxPQUF4STtBQUFpSkMsMkJBQW1CLEVBQUUsS0FBdEs7QUFBNktDLDRCQUFvQixFQUFFLEtBQW5NO0FBQTBNQyxnQkFBUSxFQUFFLFFBQXBOO0FBQThOQyxpQkFBUyxFQUFFO0FBQXpPLE9BQVo7QUFBQSw4QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFDQyxpQkFBTyxFQUFFLE1BQVY7QUFBaUJDLGlCQUFPLEVBQUUsTUFBMUI7QUFBaUNDLHNCQUFZLEVBQUU7QUFBL0MsU0FBWjtBQUFBLGdDQUNFO0FBQUssZUFBSyxFQUFFO0FBQUNQLGlCQUFLLEVBQUUsS0FBUjtBQUFjSyxtQkFBTyxFQUFFLE1BQXZCO0FBQThCRyxzQkFBVSxFQUFFO0FBQTFDLFdBQVo7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFBQ1IsbUJBQUssRUFBRSxNQUFSO0FBQWVKLG9CQUFNLEVBQUUsTUFBdkI7QUFBOEJhLDBCQUFZLEVBQUUsS0FBNUM7QUFBa0ROLHNCQUFRLEVBQUU7QUFBNUQsYUFBWjtBQUFBLG1DQUNFO0FBQ0UsbUJBQUssRUFBRTtBQUFHSCxxQkFBSyxFQUFFLE1BQVY7QUFBaUJKLHNCQUFNLEVBQUUsTUFBekI7QUFBZ0NjLHlCQUFTLEVBQUU7QUFBM0MsZUFEVDtBQUVFLGlCQUFHLEVBQUVwQixLQUFLLENBQUNxQixPQUFOLENBQWNDLEtBQWQsR0FBc0J0QixLQUFLLENBQUNxQixPQUFOLENBQWNDLEtBQXBDLEdBQTRDLEVBRm5EO0FBR0UsaUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBUUU7QUFBSyxpQkFBSyxFQUFFO0FBQUNDLHdCQUFVLEVBQUUsS0FBYjtBQUFtQkMsd0JBQVUsRUFBRTtBQUEvQixhQUFaO0FBQUEsc0JBQ0d4QixLQUFLLENBQUNxQixPQUFOLENBQWNJLElBQWQsR0FBcUJ6QixLQUFLLENBQUNxQixPQUFOLENBQWNJLElBQW5DLEdBQTBDO0FBRDdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBYUU7QUFBSyxlQUFLLEVBQUU7QUFBRWYsaUJBQUssRUFBRSxLQUFUO0FBQWVLLG1CQUFPLEVBQUUsTUFBeEI7QUFBK0JXLDBCQUFjLEVBQUU7QUFBL0MsV0FBWjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQVMsaUJBQUssRUFBRTtBQUFHQyxvQkFBTSxFQUFFLFVBQVg7QUFBc0JDLG1CQUFLLEVBQUMsTUFBNUI7QUFBbUNDLG9CQUFNLEVBQUU7QUFBM0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQVMsaUJBQUssRUFBRTtBQUFHRixvQkFBTSxFQUFFLFVBQVg7QUFBc0JDLG1CQUFLLEVBQUMsT0FBNUI7QUFBb0NDLG9CQUFNLEVBQUU7QUFBNUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFLDhEQUFDLDREQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUFHRixvQkFBTSxFQUFFLFVBQVg7QUFBc0JDLG1CQUFLLEVBQUMsS0FBNUI7QUFBa0NDLG9CQUFNLEVBQUU7QUFBMUMsYUFEVDtBQUVFLG1CQUFPLEVBQUU1QjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXVCRTtBQUFLLGFBQUssRUFBRTtBQUFHZSxpQkFBTyxFQUFFLE1BQVo7QUFBbUJjLGtCQUFRLEVBQUU7QUFBN0IsU0FBWjtBQUFBLGdDQUNFO0FBQUssZUFBSyxFQUFFO0FBQUdmLG1CQUFPLEVBQUUsTUFBWjtBQUFtQlcsMEJBQWMsRUFBRTtBQUFuQyxXQUFaO0FBQUEsaUNBQ0U7QUFBRyxpQkFBSyxFQUFFO0FBQUdYLHFCQUFPLEVBQUUsY0FBWjtBQUEyQk4sd0JBQVUsRUFBRSxTQUF2QztBQUFpRE8scUJBQU8sRUFBRSxLQUExRDtBQUFnRVksbUJBQUssRUFBRSxNQUF2RTtBQUE4RVQsMEJBQVksRUFBRSxLQUE1RjtBQUFrR1ksdUJBQVMsRUFBRTtBQUE3RyxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssZUFBSyxFQUFFO0FBQUdoQixtQkFBTyxFQUFFLE1BQVo7QUFBbUJXLDBCQUFjLEVBQUU7QUFBbkMsV0FBWjtBQUFBLGlDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFHWCxxQkFBTyxFQUFFLGNBQVo7QUFBMkJOLHdCQUFVLEVBQUUsU0FBdkM7QUFBaURPLHFCQUFPLEVBQUUsS0FBMUQ7QUFBZ0VZLG1CQUFLLEVBQUUsTUFBdkU7QUFBOEVULDBCQUFZLEVBQUUsS0FBNUY7QUFBa0dZLHVCQUFTLEVBQUU7QUFBN0csYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFPRTtBQUFLLGVBQUssRUFBRTtBQUFHaEIsbUJBQU8sRUFBRSxNQUFaO0FBQW1CVywwQkFBYyxFQUFFO0FBQW5DLFdBQVo7QUFBQSxpQ0FDRTtBQUFHLGlCQUFLLEVBQUU7QUFBR1gscUJBQU8sRUFBRSxjQUFaO0FBQTJCTix3QkFBVSxFQUFFLFNBQXZDO0FBQWlETyxxQkFBTyxFQUFFLEtBQTFEO0FBQWdFWSxtQkFBSyxFQUFFLE1BQXZFO0FBQThFVCwwQkFBWSxFQUFFLEtBQTVGO0FBQWtHWSx1QkFBUyxFQUFFO0FBQTdHLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBWUU7QUFBSyxlQUFLLEVBQUU7QUFBR2hCLG1CQUFPLEVBQUUsTUFBWjtBQUFtQlcsMEJBQWMsRUFBRTtBQUFuQyxXQUFaO0FBQUEsaUNBQ0U7QUFBSSxpQkFBSyxFQUFFO0FBQUdYLHFCQUFPLEVBQUUsY0FBWjtBQUEyQk4sd0JBQVUsRUFBRSxTQUF2QztBQUFpRE8scUJBQU8sRUFBRSxLQUExRDtBQUFnRVksbUJBQUssRUFBRSxNQUF2RTtBQUE4RVQsMEJBQVksRUFBRSxLQUE1RjtBQUFrR1ksdUJBQVMsRUFBRTtBQUE3RyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGLGVBdUNFO0FBQUssYUFBSyxFQUFFO0FBQUc1QixrQkFBUSxFQUFFLE9BQWI7QUFBcUJDLGdCQUFNLEVBQUUsS0FBN0I7QUFBbUNNLGVBQUssRUFBRTtBQUExQyxTQUFaO0FBQUEsK0JBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFLLEVBQUU7QUFBR0EsaUJBQUssRUFBRSxPQUFWO0FBQWtCc0Isa0JBQU0sRUFBRSxNQUExQjtBQUFpQ3ZCLHNCQUFVLEVBQUUsU0FBN0M7QUFBdUR3QixtQkFBTyxFQUFFLE1BQWhFO0FBQXVFakIsbUJBQU8sRUFBRTtBQUFoRixXQUExQjtBQUF3SCxxQkFBVyxFQUFDO0FBQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0E2Q0M7QUE5Q0osbUJBREY7QUFtREQsQ0F2REQ7O0FBeURBLCtEQUFlakIsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTbUMsSUFBVCxHQUFnQjtBQUNaLHNCQUNJO0FBQUssYUFBUyxFQUFDLDRFQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQSw4QkFFSSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFNSSw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0FBRUQsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQVNBO0FBT0E7QUFDQTtBQUNBOztBQUdBLFNBQVNDLE1BQVQsR0FBa0I7QUFDZCxRQUFNLENBQUNDLE9BQUQsSUFBWUMsNERBQVUsRUFBNUI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxvRUFBZjtBQUFBLDRCQUlJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUMsaUNBQVg7QUFDQSxhQUFLLEVBQUUsRUFEUDtBQUVBLGNBQU0sRUFBRSxFQUZSO0FBR0EsY0FBTSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLHFEQUFmO0FBQUEsZ0NBQ0ksOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLG1CQUFTLEVBQUMsdUdBQWpCO0FBQXlILGNBQUksRUFBQyxNQUE5SDtBQUFxSSxxQkFBVyxFQUFDO0FBQWpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFrQkk7QUFBSyxlQUFTLEVBQUMsK0JBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDSSw4REFBQyxnREFBRDtBQUFZLGdCQUFNLE1BQWxCO0FBQW1CLGNBQUksRUFBRUMsNERBQVFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyxnREFBRDtBQUFhLGNBQUksRUFBRUMsOERBQVFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyxnREFBRDtBQUFhLGNBQUksRUFBRUMsOERBQVFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSSw4REFBQyxnREFBRDtBQUFhLGNBQUksRUFBRUMsc0VBQWdCQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0ksOERBQUMsZ0RBQUQ7QUFBYSxjQUFJLEVBQUVDLGlFQUFhQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkosZUE4Qkk7QUFBSyxlQUFTLEVBQUMsNENBQWY7QUFBQSw4QkFFSSw4REFBQyxtREFBRDtBQUNBLGVBQU8sRUFBRUMscURBRFQ7QUFFQyxpQkFBUyxFQUFDLDZCQUZYO0FBR0MsV0FBRyxFQUFFUCxPQUFPLENBQUNRLElBQVIsQ0FBYXRCLEtBSG5CO0FBSUMsYUFBSyxFQUFDLElBSlA7QUFLQyxjQUFNLEVBQUMsSUFMUjtBQU1DLGNBQU0sRUFBQztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQVVJO0FBQUcsZUFBTyxFQUFFcUIscURBQVo7QUFBcUIsaUJBQVMsRUFBQyxzQ0FBL0I7QUFBQSxrQkFBdUVQLE9BQU8sQ0FBQ1EsSUFBUixDQUFhbkI7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKLGVBV0ksOERBQUMsZ0VBQUQ7QUFBYyxpQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQVlJLDhEQUFDLDREQUFEO0FBQVUsaUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSSw4REFBQyw0REFBRDtBQUFVLGlCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKLGVBY0ksOERBQUMsbUVBQUQ7QUFBaUIsaUJBQVMsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaURIOztBQUVELCtEQUFlVSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBLFNBQVNVLFVBQVQsQ0FBb0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQXBCLEVBQXNDO0FBQ2xDLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1JQUFmO0FBQUEsMkJBQ0ksOERBQUMsSUFBRDtBQUFNLGVBQVMsRUFBRztBQUM5Qix5Q0FDY0EsTUFBTSxJQUFJLGVBQ1g7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0FBRUQsK0RBQWVGLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0csUUFBVCxHQUFvQjtBQUNoQixRQUFNLENBQUNaLE9BQUQsSUFBWUMsNERBQVUsRUFBNUI7QUFDQSxRQUFNWSxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLFFBQU1DLGFBQWEsR0FBR0QsNkNBQU0sQ0FBQyxJQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNFLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLElBQUQsQ0FBOUM7O0FBRUEsUUFBTUMsUUFBUSxHQUFJQyxDQUFELElBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQUcsQ0FBQ1IsUUFBUSxDQUFDNUIsT0FBVCxDQUFpQnFDLEtBQXJCLEVBQTRCO0FBRTVCQyx3REFBQSxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCO0FBQ3ZCQyxhQUFPLEVBQUVaLFFBQVEsQ0FBQzVCLE9BQVQsQ0FBaUJxQyxLQURIO0FBRXZCakMsVUFBSSxFQUFFVyxPQUFPLENBQUNRLElBQVIsQ0FBYW5CLElBRkk7QUFHdkJxQyxXQUFLLEVBQUUxQixPQUFPLENBQUNRLElBQVIsQ0FBYWtCLEtBSEc7QUFJdkJ4QyxXQUFLLEVBQUVjLE9BQU8sQ0FBQ1EsSUFBUixDQUFhdEIsS0FKRztBQUt2QnlDLGVBQVMsRUFBRUMsb0ZBQUE7QUFMWSxLQUEzQixFQU1HQyxJQU5ILENBTVFDLEdBQUcsSUFBSTtBQUNYLFVBQUlkLFdBQUosRUFBaUI7QUFDYixjQUFNZSxVQUFVLEdBQUdDLGtEQUFBLENBQWEsU0FBUUYsR0FBRyxDQUFDRyxFQUFHLEVBQTVCLEVBQStCQyxTQUEvQixDQUF5Q2xCLFdBQXpDLEVBQXNELFVBQXRELENBQW5CO0FBRUFtQixtQkFBVztBQUVYSixrQkFBVSxDQUFDSyxFQUFYLENBQ0ksY0FESixFQUVJLElBRkosRUFHS0MsS0FBRCxJQUFTQyxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZCxDQUhiLEVBSUksTUFBSTtBQUNBO0FBQ0FMLDREQUFBLENBQ1EsT0FEUixFQUVHTyxLQUZILENBRVNULEdBQUcsQ0FBQ0csRUFGYixFQUdHTyxjQUhILEdBSUdYLElBSkgsQ0FJUVksR0FBRyxJQUFJO0FBQ1hsQixnRUFBQSxDQUFjLE9BQWQsRUFBdUJPLEdBQXZCLENBQTJCQSxHQUFHLENBQUNHLEVBQS9CLEVBQW1DUyxHQUFuQyxDQUNBO0FBQ0lDLHVCQUFTLEVBQUVGO0FBRGYsYUFEQSxFQUlJO0FBQUVHLG1CQUFLLEVBQUc7QUFBVixhQUpKO0FBTUgsV0FYRDtBQVlILFNBbEJMO0FBb0JIO0FBQ0osS0FqQ0Q7QUFrQ0EvQixZQUFRLENBQUM1QixPQUFULENBQWlCcUMsS0FBakIsR0FBeUIsRUFBekI7QUFDSCxHQXhDRDs7QUEwQ0EsUUFBTXVCLGNBQWMsR0FBR3pCLENBQUQsSUFBTTtBQUN4QixVQUFNMEIsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjs7QUFDQSxRQUFHM0IsQ0FBQyxDQUFDNEIsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFILEVBQXNCO0FBQ2xCSCxZQUFNLENBQUNJLGFBQVAsQ0FBcUI5QixDQUFDLENBQUM0QixNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQXJCO0FBQ0g7O0FBRURILFVBQU0sQ0FBQ0ssTUFBUCxHQUFnQkMsV0FBRCxJQUFlO0FBQzFCbkMsb0JBQWMsQ0FBQ21DLFdBQVcsQ0FBQ0osTUFBWixDQUFtQkssTUFBcEIsQ0FBZDtBQUNILEtBRkQ7QUFHSCxHQVREOztBQVdBLFFBQU1sQixXQUFXLEdBQUMsTUFBSTtBQUNsQmxCLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxtRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsOEJBQ0ksOERBQUMsbURBQUQ7QUFDRSxpQkFBUyxFQUFDLGNBRFo7QUFFRSxXQUFHLEVBQUVqQixPQUFPLENBQUNRLElBQVIsQ0FBYXRCLEtBRnBCO0FBR0UsYUFBSyxFQUFFLEVBSFQ7QUFJRSxjQUFNLEVBQUUsRUFKVjtBQUtFLGNBQU0sRUFBQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVFJO0FBQU0saUJBQVMsRUFBQyxhQUFoQjtBQUFBLGdDQUNJO0FBQ0MsbUJBQVMsRUFBQyw2REFEWDtBQUlDLGNBQUksRUFBQyxNQUpOO0FBS0MsYUFBRyxFQUFFMkIsUUFMTjtBQU1DLHFCQUFXLEVBQUcsd0JBQXVCYixPQUFPLENBQUNRLElBQVIsQ0FBYW5CLElBQUs7QUFOeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJO0FBQVEsZ0JBQU0sTUFBZDtBQUFlLGNBQUksRUFBQyxRQUFwQjtBQUE2QixpQkFBTyxFQUFFOEIsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFtQktILFdBQVcsaUJBQ1I7QUFBSyxlQUFPLEVBQUVtQixXQUFkO0FBQTJCLGlCQUFTLEVBQUMsNEdBQXJDO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQXFDLGFBQUcsRUFBRW5CO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBNEJJO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSSw4REFBQyxtRUFBRDtBQUFpQixtQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsaUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFLLGVBQU8sRUFBRSxNQUFNRCxhQUFhLENBQUM5QixPQUFkLENBQXNCcUUsS0FBdEIsRUFBcEI7QUFBbUQsaUJBQVMsRUFBQyxXQUE3RDtBQUFBLGdDQUNJLDhEQUFDLDhEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLGlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBTyxhQUFHLEVBQUV2QyxhQUFaO0FBQTJCLGtCQUFRLEVBQUU4QixjQUFyQztBQUFxRCxjQUFJLEVBQUUsTUFBM0Q7QUFBa0UsZ0JBQU07QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQVVJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0ksOERBQUMsb0VBQUQ7QUFBZ0IsbUJBQVMsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLGlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSDs7QUFBQTtBQUVELCtEQUFlakMsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUNBOztBQUNBLFNBQVMyQyxLQUFULEdBQWlCO0FBQ2Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSw0QkFDSSw4REFBQyxtREFBRDtBQUNBLFNBQUcsRUFBQyxpQ0FESjtBQUVBLFlBQU0sRUFBRSxHQUZSO0FBR0EsV0FBSyxFQUFFLEdBSFA7QUFJQSxlQUFTLEVBQUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPSTtBQUFJLGFBQU8sRUFBRUMsb0RBQWI7QUFBcUIsZUFBUyxFQUFDLG9FQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0FBRUQsK0RBQWVELEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBRUE7O0FBSUEsU0FBU0UsS0FBVCxHQUFpQjtBQUNiLFFBQUssQ0FBQ0MsYUFBRCxJQUFrQkMsNkVBQWEsQ0FDaENwQyxvREFBQSxDQUFjLE9BQWQsRUFBdUJxQyxPQUF2QixDQUErQixXQUEvQixFQUE0QyxNQUE1QyxDQURnQyxDQUFwQztBQUdBLHNCQUNJO0FBQUEsY0FFSUYsYUFGSixhQUVJQSxhQUZKLHVCQUVJQSxhQUFhLENBQUVHLElBQWYsQ0FBb0JDLEdBQXBCLENBQXlCQyxJQUFELGlCQUNwQjtBQUFLLFdBQUssRUFBRTtBQUFFekYsYUFBSyxFQUFFLE1BQVQ7QUFBaUJpQixjQUFNLEVBQUUsV0FBekI7QUFBc0NsQixrQkFBVSxFQUFFLFNBQWxEO0FBQTZEVSxvQkFBWSxFQUFFLE1BQTNFO0FBQW1GaUYsaUJBQVMsRUFBQztBQUE3RixPQUFaO0FBQUEsNkJBRUU7QUFBbUIsaUJBQVMsRUFBQyxPQUE3QjtBQUFBLGdDQUNFO0FBQUssZUFBSyxFQUFFO0FBQUNyRixtQkFBTyxFQUFFLE1BQVY7QUFBa0JHLHNCQUFVLEVBQUU7QUFBOUIsV0FBWjtBQUFBLGtDQUNFO0FBQUssaUJBQUssRUFBRTtBQUFHUixtQkFBSyxFQUFFLE1BQVY7QUFBa0JKLG9CQUFNLEVBQUUsTUFBMUI7QUFBa0NhLDBCQUFZLEVBQUUsS0FBaEQ7QUFBdUROLHNCQUFRLEVBQUU7QUFBakUsYUFBWjtBQUFBLG1DQUNFO0FBQUssbUJBQUssRUFBRTtBQUFHSCxxQkFBSyxFQUFFLE1BQVY7QUFBaUJKLHNCQUFNLEVBQUUsTUFBekI7QUFBZ0NjLHlCQUFTLEVBQUU7QUFBM0MsZUFBWjtBQUFpRSxpQkFBRyxFQUFFK0UsSUFBSSxDQUFDRSxJQUFMLEdBQVkvRTtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUssaUJBQUssRUFBRTtBQUFHQyx3QkFBVSxFQUFFLE1BQWY7QUFBc0JDLHdCQUFVLEVBQUU7QUFBbEMsYUFBWjtBQUFBLHNCQUNDMkUsSUFBSSxDQUFDRSxJQUFMLEdBQVk1RTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBSyxlQUFLLEVBQUU7QUFBR2YsaUJBQUssRUFBRSxNQUFWO0FBQWlCSyxtQkFBTyxFQUFFLE1BQTFCO0FBQWlDdUYseUJBQWEsRUFBRTtBQUFoRCxXQUFaO0FBQUEsa0NBQ0U7QUFBSyxpQkFBSyxFQUFFO0FBQUc1RixtQkFBSyxFQUFFLE1BQVY7QUFBaUJpQixvQkFBTSxFQUFFO0FBQXpCLGFBQVo7QUFBQSxzQkFBaUR3RSxJQUFJLENBQUNFLElBQUwsR0FBWXhDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUU7QUFBR25ELHFCQUFLLEVBQUUsTUFBVjtBQUFpQkosc0JBQU0sRUFBRTtBQUF6QixlQUFaO0FBQThDLGlCQUFHLEVBQUU2RixJQUFJLENBQUNFLElBQUwsR0FBWXRCLFNBQS9EO0FBQTBFLGlCQUFHLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBZUU7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0o7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDSSw4REFBQyxpRUFBRDtBQUFhLHVCQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUcsdUJBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREksZUFLSjtBQUFNLHFCQUFTLEVBQUMsV0FBaEI7QUFBQSxvQ0FDSSw4REFBQyxpRUFBRDtBQUFhLHVCQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUcsdUJBQVMsRUFBQyxpQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEksZUFVSjtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG9DQUNJLDhEQUFDLCtEQUFEO0FBQVcsdUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBRyx1QkFBUyxFQUFDLGlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQSxTQUFVb0IsSUFBSSxDQUFDOUIsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaURIOztBQUVELCtEQUFld0IsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQU1BO0FBT0E7O0FBR0EsU0FBU1UsT0FBVCxHQUFvQjtBQUNoQixRQUFNLENBQUNuRSxPQUFELEVBQVVvRSxPQUFWLElBQXFCbkUsNERBQVUsRUFBckM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBLDRCQUNJLDhEQUFDLGdEQUFEO0FBQVksU0FBRyxFQUFFRCxPQUFPLENBQUNRLElBQVIsQ0FBYXRCLEtBQTlCO0FBQXFDLFdBQUssRUFBRWMsT0FBTyxDQUFDUSxJQUFSLENBQWFuQjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyxnREFBRDtBQUFZLFVBQUksRUFBRWdGLDhEQUFsQjtBQUE0QixXQUFLLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0ksOERBQUMsZ0RBQUQ7QUFBWSxVQUFJLEVBQUUvRCxpRUFBbEI7QUFBaUMsV0FBSyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLDhEQUFDLGdEQUFEO0FBQVksVUFBSSxFQUFFZ0UsbUVBQWxCO0FBQW1DLFdBQUssRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSSw4REFBQyxnREFBRDtBQUFZLFVBQUksRUFBRUMseUVBQWxCO0FBQXVDLFdBQUssRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSSw4REFBQyxnREFBRDtBQUFZLFVBQUksRUFBRUMsa0VBQWxCO0FBQWdDLFdBQUssRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSSw4REFBQyxnREFBRDtBQUFZLFVBQUksRUFBRUMsK0RBQWxCO0FBQTZCLFdBQUssRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFRSSw4REFBQyxnREFBRDtBQUFZLFVBQUksRUFBRUMsbUVBQWxCO0FBQW1DLFdBQUssRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7QUFDRCwrREFBZVAsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7O0FBQ0EsU0FBU1EsVUFBVCxDQUFvQjtBQUFDQyxLQUFEO0FBQU1sRSxNQUFOO0FBQVltRTtBQUFaLENBQXBCLEVBQXdDO0FBQ3BDLHNCQUNJO0FBQUssYUFBUyxFQUFDLDZFQUFmO0FBQUEsZUFDS0QsR0FBRyxpQkFDQSw4REFBQyxtREFBRDtBQUNDLGVBQVMsRUFBQyxjQURYO0FBRUMsU0FBRyxFQUFFQSxHQUZOO0FBR0MsV0FBSyxFQUFFLEVBSFI7QUFJQyxZQUFNLEVBQUUsRUFKVDtBQUtDLFlBQU0sRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixFQVVLbEUsSUFBSSxpQkFDRCw4REFBQyxJQUFEO0FBQU0sZUFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYUixlQWFJO0FBQUcsZUFBUyxFQUFDLG1DQUFiO0FBQUEsZ0JBQWtEbUU7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztBQUVELCtEQUFlRixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUEsTUFBTUcsT0FBTyxHQUFHLENBQ1o7QUFDSXpGLE1BQUksRUFBRSxjQURWO0FBRUl1RixLQUFHLEVBQUMsaUNBRlI7QUFHSUcsU0FBTyxFQUFDO0FBSFosQ0FEWSxFQU1aO0FBQ0kxRixNQUFJLEVBQUUsV0FEVjtBQUVJdUYsS0FBRyxFQUFDLGlDQUZSO0FBR0lHLFNBQU8sRUFBQztBQUhaLENBTlksRUFXWjtBQUNJMUYsTUFBSSxFQUFFLGlCQURWO0FBRUl1RixLQUFHLEVBQUMsaUNBRlI7QUFHSUcsU0FBTyxFQUFDO0FBSFosQ0FYWSxFQWdCWjtBQUNJMUYsTUFBSSxFQUFFLFlBRFY7QUFFSXVGLEtBQUcsRUFBQyxpQ0FGUjtBQUdJRyxTQUFPLEVBQUM7QUFIWixDQWhCWSxDQUFoQjs7QUF1QkEsU0FBU0MsT0FBVCxHQUFtQjtBQUNmLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUEsY0FDS0YsT0FBTyxDQUFDaEIsR0FBUixDQUFhbUIsS0FBRCxpQkFDVCw4REFBQywrQ0FBRDtBQUFXLFVBQUksRUFBRUEsS0FBSyxDQUFDNUYsSUFBdkI7QUFBNkIsU0FBRyxFQUFFNEYsS0FBSyxDQUFDTCxHQUF4QztBQUE2QyxhQUFPLEVBQUVLLEtBQUssQ0FBQ0Y7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0FBRUQsK0RBQWVDLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBOztBQUVBLFNBQVNFLFNBQVQsQ0FBbUI7QUFBRTdGLE1BQUY7QUFBUXVGLEtBQVI7QUFBYUc7QUFBYixDQUFuQixFQUEwQztBQUN0QyxzQkFDSTtBQUFLLGFBQVMsRUFBQywrSkFBZjtBQUFBLDRCQUNHLDhEQUFDLG1EQUFEO0FBQ0MsZUFBUyxFQUFDLDREQURYO0FBRUMsU0FBRyxFQUFFQSxPQUZOO0FBR0MsV0FBSyxFQUFFLEVBSFI7QUFJQyxZQUFNLEVBQUUsRUFKVDtBQUtDLFlBQU0sRUFBQyxPQUxSO0FBTUMsZUFBUyxFQUFDO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBU0csOERBQUMsbURBQUQ7QUFDQyxlQUFTLEVBQUMsK0RBRFg7QUFFQyxTQUFHLEVBQUVILEdBRk47QUFHQyxZQUFNLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEgsZUFjRztBQUFHLGVBQVMsRUFBQyxtR0FBYjtBQUFBLGdCQUNLdkY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0FBRUQsK0RBQWU2RixTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTs7QUFJQSxNQUFRQyxPQUFPLEdBQUl2SCxLQUFELElBQVc7QUFDM0IsUUFBTSxDQUFDRSxLQUFELEVBQVFzSCxRQUFSLElBQW9CQyxxREFBQSxDQUFlLENBQ3ZDO0FBQUVwRCxNQUFFLEVBQUUsQ0FBTjtBQUFTL0MsU0FBSyxFQUFFLG9CQUFoQjtBQUFzQ0csUUFBSSxFQUFFO0FBQTVDLEdBRHVDLEVBR3ZDO0FBQUU0QyxNQUFFLEVBQUUsQ0FBTjtBQUFTL0MsU0FBSyxFQUFFLHNCQUFoQjtBQUF3Q0csUUFBSSxFQUFFO0FBQTlDLEdBSHVDLENBQWYsQ0FBMUI7O0FBTUEsUUFBTWlHLFFBQVEsR0FBSTlFLElBQUQsSUFBVTtBQUN6QjVDLFNBQUssQ0FBQzBILFFBQU4sQ0FBZTlFLElBQWY7QUFDRCxHQUZEOztBQUlFLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVRO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUVBLDhEQUFDLGdFQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBLGVBR0EsOERBQUMsbUVBQUQ7QUFBaUIsbUJBQVMsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhBLGVBSUEsOERBQUMsc0VBQUQ7QUFBb0IsbUJBQVMsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFVSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsZ0JBQ0sxQyxLQUFLLENBQUNnRyxHQUFOLENBQVd0RCxJQUFELGlCQUNQO0FBQUssaUJBQVMsRUFBQyx1RkFBZjtBQUVJLGVBQU8sRUFBRSxNQUFNOEUsUUFBUSxDQUFDOUUsSUFBRCxDQUYzQjtBQUFBLGdDQUdJO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUNJLGVBQUssRUFBRSxFQURYO0FBRUksZ0JBQU0sRUFBRSxFQUZaO0FBR0ksZ0JBQU0sRUFBQyxPQUhYO0FBSUksYUFBRyxFQUFFQSxJQUFJLENBQUN0QixLQUpkO0FBSXFCLGFBQUcsRUFBQztBQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBU0k7QUFBQSxvQkFBSXNCLElBQUksQ0FBQ25CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSixlQVVJO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQSxTQUNTbUIsSUFBSSxDQUFDeUIsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1DSCxDQTlDRDs7QUFnREEsK0RBQWVrRCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFFQSxNQUFNSSxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLGdDQUZPO0FBR25CQyxXQUFTLEVBQUUsZ0JBSFE7QUFJbkJDLGVBQWEsRUFBRSw0QkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsY0FMQTtBQU1uQkMsT0FBSyxFQUFFO0FBTlksQ0FBdkI7QUFTRSxNQUFNQyxHQUFHLEdBQUcsQ0FBQ2xFLDZEQUFELEdBQXdCQSw2REFBQSxDQUF1QjJELGNBQXZCLENBQXhCLEdBQWlFM0QsbURBQUEsRUFBN0U7QUFDQSxNQUFNTCxFQUFFLEdBQUd1RSxHQUFHLENBQUNDLFNBQUosRUFBWDtBQUNBLE1BQU0vRCxPQUFPLEdBQUdKLHVEQUFBLEVBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTb0UsSUFBVCxDQUFjO0FBQUNoRztBQUFELENBQWQsRUFBeUI7QUFDdEMsUUFBTSxDQUFDbEMsS0FBRCxFQUFRc0gsUUFBUixJQUFvQkMscURBQUEsQ0FBZSxLQUFmLENBQTFCO0FBQ0EsUUFBTSxDQUFDcEcsT0FBRCxFQUFVZ0gsVUFBVixJQUF3QloscURBQUEsQ0FBZSxFQUFmLENBQTlCOztBQUNBLFFBQU1DLFFBQVEsR0FBSTlFLElBQUQsSUFBVTtBQUN6QjRFLFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDQWEsY0FBVSxDQUFDekYsSUFBRCxDQUFWO0FBQ0QsR0FIRDs7QUFJQSxRQUFNM0MsU0FBUyxHQUFHLE1BQU07QUFDdEJ1SCxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxNQUFJLENBQUNwRixPQUFMLEVBQWMsb0JBQU8sOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2Qsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFXRTtBQUFPLGVBQVMsRUFBQyxNQUFqQjtBQUFBLDhCQUVFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUlFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU1FLDhEQUFDLHdEQUFEO0FBQVMsZ0JBQVEsRUFBRXNGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVFFLDhEQUFDLHdEQUFEO0FBQVMsYUFBSyxFQUFFeEgsS0FBaEI7QUFBdUIsZUFBTyxFQUFFbUIsT0FBaEM7QUFBeUMsaUJBQVMsRUFBRXBCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDtBQUVNLGVBQWVxSSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTW5HLE9BQU8sR0FBRyxNQUFNb0csNERBQVUsQ0FBQ0QsT0FBRCxDQUFoQztBQUVBLFNBQU87QUFDTHZJLFNBQUssRUFBRTtBQUNMb0M7QUFESztBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7OztBQ3pERCxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFWaWRlbywgRmFQaG9uZSwgRmFSZWdXaW5kb3dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5jb25zdCBDb250ZWN0cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsb3NlQ2hhdCA9ICgpID0+IHtcclxuICAgIHByb3BzLmNsb3NlQ2hhdCgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcm9wcy5zdGF0ZSA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIGJvdHRvbTogXCIwXCIsIHJpZ2h0OiBcIjAlXCIsIGhlaWdodDogXCI0NTBweFwiLCBtaW5IZWlnaHQ6IFwiNDUwcHhcIiwgIG1heEhlaWdodDogXCI0NTBweFwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIiwgIHdpZHRoOiBcIjMzMHB4XCIsIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiN3B4XCIsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjdweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgYm94U2hhZG93OiBcIjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwifX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIscGFkZGluZzogXCIxNXB4XCIsYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZjBmMmY1XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjUwJVwiLGRpc3BsYXk6IFwiZmxleFwiLGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLGhlaWdodDogXCIzMHB4XCIsYm9yZGVyUmFkaXVzOiBcIjUwJVwiLG92ZXJmbG93OiBcImhpZGRlblwifX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ICB3aWR0aDogXCIxMDAlXCIsaGVpZ2h0OiBcIjEwMCVcIixvYmplY3RGaXQ6IFwiY292ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuY3VycmVudC5pbWFnZSA/IHByb3BzLmN1cnJlbnQuaW1hZ2UgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiNnB4XCIsZm9udFdlaWdodDogXCI2MDBcIn19PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmN1cnJlbnQubmFtZSA/IHByb3BzLmN1cnJlbnQubmFtZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLGRpc3BsYXk6IFwiZmxleFwiLGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCJ9fT5cclxuICAgICAgICAgICAgICA8RmFWaWRlbyBzdHlsZT17eyAgbWFyZ2luOiBcIjEwcHggNXB4XCIsY29sb3I6XCJibHVlXCIsY3Vyc29yOiBcInBvaW50ZXJcIn19IC8+XHJcbiAgICAgICAgICAgICAgPEZhUGhvbmUgc3R5bGU9e3sgIG1hcmdpbjogXCIxMHB4IDVweFwiLGNvbG9yOlwiZ3JlZW5cIixjdXJzb3I6IFwicG9pbnRlclwifX0gLz5cclxuICAgICAgICAgICAgICA8RmFSZWdXaW5kb3dDbG9zZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgIG1hcmdpbjogXCIxMHB4IDVweFwiLGNvbG9yOlwicmVkXCIsY3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUNoYXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgIHBhZGRpbmc6IFwiMTRweFwiLGZvbnRTaXplOiBcIjE0cHhcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICBkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCJ9fT5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixiYWNrZ3JvdW5kOiBcIiNmMGYyZjVcIixwYWRkaW5nOiBcIjdweFwiLGNvbG9yOiBcIiMzMzNcIixib3JkZXJSYWRpdXM6IFwiNnB4XCIsbWFyZ2luVG9wOiBcIjZweFwifX0+SGksaCByIHk/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAgZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIn19PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7ICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLGJhY2tncm91bmQ6IFwiIzBkOGNmMVwiLHBhZGRpbmc6IFwiN3B4XCIsY29sb3I6IFwiI2ZmZlwiLGJvcmRlclJhZGl1czogXCI2cHhcIixtYXJnaW5Ub3A6IFwiNnB4XCJ9fT5JIG0gZmluZS5hbmQgeT88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICBkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCJ9fT5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixiYWNrZ3JvdW5kOiBcIiNmMGYyZjVcIixwYWRkaW5nOiBcIjdweFwiLGNvbG9yOiBcIiMzMzNcIixib3JkZXJSYWRpdXM6IFwiNnB4XCIsbWFyZ2luVG9wOiBcIjZweFwifX0+XHJcbiAgICAgICAgICAgICAgICBOb3QgZG9pbmcgd2VsbC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICBkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwifX0+XHJcbiAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7ICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLGJhY2tncm91bmQ6IFwiIzBkOGNmMVwiLHBhZGRpbmc6IFwiN3B4XCIsY29sb3I6IFwiI2ZmZlwiLGJvcmRlclJhZGl1czogXCI2cHhcIixtYXJnaW5Ub3A6IFwiNnB4XCJ9fT5zZWUgeWE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICBwb3NpdGlvbjogXCJmaXhlZFwiLGJvdHRvbTogXCIwcHhcIix3aWR0aDogXCI0MDBweFwifX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7ICB3aWR0aDogXCIzMzBweFwiLGJvcmRlcjogXCJub25lXCIsYmFja2dyb3VuZDogXCIjZjBmMmY1XCIsb3V0bGluZTogXCJub25lXCIscGFkZGluZzogXCIxNXB4IDEzcHhcIn19IHBsYWNlaG9sZGVyPVwiQWFcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlY3RzO1xyXG4iLCJpbXBvcnQgU3RvcmllcyBmcm9tIFwiLi9TdG9yaWVzXCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi9JbnB1dEJveFwiO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4vUG9zdHNcIjtcclxuZnVuY3Rpb24gRmVlZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgaC1zY3JlZW4gcGItNDQgcHQtNiBtci00IHhsOm1yLTQwIG92ZXJmbG93LXk6YXV0byBzY3JvbGxiYXItaGlkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctbWQgbWQ6bWF4LXctbGcgbGc6bWF4LTItMnhsXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxTdG9yaWVzIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxJbnB1dEJveCAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UG9zdHMgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCZWxsSWNvbixcclxuICAgIENoYXRJY29uLFxyXG4gICAgQ2hldnJvbkRvd25JY29uLFxyXG4gICAgSG9tZUljb24sXHJcbiAgICBVc2VyR3JvdXBJY29uLFxyXG4gICAgVmlld0dyaWRJY29uLFxyXG4gICAgXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IHtcclxuICAgIEZsYWdJY29uLFxyXG4gICAgUGxheUljb24sXHJcbiAgICBTZWFyY2hJY29uLFxyXG4gICAgU2hvcHBpbmdDYXJ0SWNvbixcclxuXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgSGVhZGVySWNvbiBmcm9tIFwiLi9IZWFkZXJJY29uXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQge3VzZVNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCBiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgbGc6cHgtNSBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB7LyogTGVmdCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS81bWVcIiBcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtbC0yIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgcC0yXCIgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ncmF5LTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtZmxleCAgbWwtMiBpdGVtcy1jZW50ZXIgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNTAwIGZsZXgtc2hyaW5rXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInNlYXJjaCBGYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ2VudGVyICovfSAgICBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgbWQ6c3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlckljb24gYWN0aXZlIEljb249e0hvbWVJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJJY29uICBJY29uPXtGbGFnSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVySWNvbiAgSWNvbj17UGxheUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlckljb24gIEljb249e1Nob3BwaW5nQ2FydEljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlckljb24gIEljb249e1VzZXJHcm91cEljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUmlnaHQgKi99IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzbTpzcGFjZS14LTIganN1dGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBwcm9maWxlIHBpYyAqL31cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dH1cclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3NpZ25PdXR9IGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIGZvbnQtc2VtaWJvbGQgcHItM1wiPntzZXNzaW9uLnVzZXIubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8Vmlld0dyaWRJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPENoYXRJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJlbGxJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiZnVuY3Rpb24gSGVhZGVySWNvbih7IEljb24sIGFjdGl2ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbWQ6cHgtMTAgc206aC0xNCBtZDpob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLXhsIGFjdGl2ZTpib3JkZXItYi0yIGFjdGl2ZTpib3JkZXItYmx1ZS01MDAgZ3JvdXAgXCIgPlxyXG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2BoLTUgdGV4dC1ncmF5LTUwMCB0ZXh0LWNlbnRlciBzbTpoLTcgbWF4LWF1dG9cclxuICAgICAgICAgICAgIGdyb3VwLWhvdmVyOnRleHQtYmx1ZS01MDAgJHsgXHJcbiAgICAgICAgICAgICAgYWN0aXZlICYmIFwidGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVySWNvbjtcclxuIiwiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge0Vtb2ppSGFwcHlJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7Q2FtZXJhSWNvbiwgVmlkZW9DYW1lcmFJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkYiwgc3RvcmFnZSB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gSW5wdXRCb3goKSB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGZpbGVwaWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaW1hZ2VUb1Bvc3QsIHNldEltYWdlVG9Qb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHNlbmRQb3N0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKCFpbnB1dFJlZi5jdXJyZW50LnZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuYWRkKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogaW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgbmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIGltYWdlOiBzZXNzaW9uLnVzZXIuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgfSkudGhlbihkb2MgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2VUb1Bvc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgcG9zdHMvJHtkb2MuaWR9YCkucHV0U3RyaW5nKGltYWdlVG9Qb3N0LCAnZGF0YV91cmwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXRlX2NoYW5nZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT5jb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3doZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWYoICdwb3N0cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkKGRvYy5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0RG93bmxvYWRVUkwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhkb2MuaWQpLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1lcmdlIDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJbWFnZVRvUG9zdCA9KGUpID0+e1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9KHJlYWRlckV2ZW50KT0+e1xyXG4gICAgICAgICAgICBzZXRJbWFnZVRvUG9zdChyZWFkZXJFdmVudC50YXJnZXQucmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSW1hZ2U9KCk9PntcclxuICAgICAgICBzZXRJbWFnZVRvUG9zdChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCB0ZXh0LWdyYXktNTAwIGZvbnQtbWVkaXVtIG10LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTIgIGJnLWdyYXktMTAwIGZsZXgtZ3JvdyBweC0xMCBvdXRsaW5lLW5vbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YHdoYXQncyBvbiB5b3VyIG1pbmQsICR7c2Vzc2lvbi51c2VyLm5hbWV9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhpZGRlbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17c2VuZFBvc3R9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlVG9Qb3N0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3JlbW92ZUltYWdlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZpbHRlciBob3ZlcjpicmlnaHRuZXNzLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCBvYmplY3QtY29udGFpblwiIHNyYz17aW1hZ2VUb1Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNTAwIHRleHQtY2VudGVyXCI+UmVtb3ZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgcC0zIGJvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0SWNvblwiID5cclxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9DYW1lcmFJY29uIGNsYXNzTmFtZT1cImgtNiB0ZXh0LXJlZC01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGVzdC1zbSB4bDp0ZXh0LWJhc2VcIj5MaXZlIFZpZGVvPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGZpbGVwaWNrZXJSZWYuY3VycmVudC5jbGljaygpfSBjbGFzc05hbWU9XCJpbnB1dEljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1ncmVlbi00MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXN0LXNtIHhsOnRleHQtYmFzZVwiPlBob3RvL1ZpZGVvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2ZpbGVwaWNrZXJSZWZ9IG9uQ2hhbmdlPXthZGRJbWFnZVRvUG9zdH0gdHlwZSA9XCJmaWxlXCIgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVtb2ppSGFwcHlJY29uIGNsYXNzTmFtZT1cImgtNiB0ZXh0LXllbGxvdy0zMDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXN0LXNtIHhsOnRleHQtYmFzZVwiPkZlZWxpbmcvQWN0aXZpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3g7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge3NpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS90NGlcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgd2lkdGg9ezQwMH0gXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgb25DbGljaz17c2lnbklufSBjbGFzc05hbWU9XCJwLTUgYmctYmx1ZS01MDAgcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIExvZ2luIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIiwiaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjsgXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IEZhUmVnVGh1bWJzVXAsIEZhUmVnQ29tbWVudEFsdCwgRmFTaGFyZUFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhdEFsdEljb24gLCBTaGFyZUljb24sIFRodW1iVXBJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gICAgY29uc3RbcmVhbHRpbWVQb3N0c10gPSB1c2VDb2xsZWN0aW9uKFxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJwb3N0c1wiKS5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAge3JlYWx0aW1lUG9zdHM/LmRvY3MubWFwKChwb3N0KSA9PiAoIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbjogXCIxNXB4IGF1dG9cIiwgYmFja2dyb3VuZDogXCIjZjBmMmY1XCIsIGJvcmRlclJhZGl1czogXCIxMHB4XCIsIGJveHNoYWRvdzpcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMylcIn19ID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwiZW1wdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgIHdpZHRoOiBcIjM1cHhcIiwgaGVpZ2h0OiBcIjM1cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjcwJVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7ICB3aWR0aDogXCIxMDAlXCIsaGVpZ2h0OiBcIjEwMCVcIixvYmplY3RGaXQ6IFwiY292ZXJcIn19IHNyYz17cG9zdC5kYXRhKCkuaW1hZ2V9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICBtYXJnaW5MZWZ0OiBcIjEycHhcIixmb250V2VpZ2h0OiBcIjYwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5kYXRhKCkubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICB3aWR0aDogXCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAgd2lkdGg6IFwiMTAwJVwiLG1hcmdpbjogXCIxMnB4IDBcIn19Pntwb3N0LmRhdGEoKS5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93X19ib2R5LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7ICB3aWR0aDogXCIxMDAlXCIsaGVpZ2h0OiBcIjEwMCVcIn19IHNyYz17cG9zdC5kYXRhKCkucG9zdEltYWdlfSBhbHQ9XCJwb3N0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBwLTMgYm9yZGVyLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRJY29uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9XCJoLTYgdGV4dC1yZWQtNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRlc3Qtc20geGw6dGV4dC1iYXNlXCI+TGlrZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiaW5wdXRJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXRBbHRJY29uIGNsYXNzTmFtZT1cImgtNiB0ZXh0LWdyZWVuLTQwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRlc3Qtc20geGw6dGV4dC1iYXNlXCI+Q29tbWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaGFyZUljb24gY2xhc3NOYW1lPVwiaC02IHRleHQteWVsbG93LTMwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRlc3Qtc20geGw6dGV4dC1iYXNlXCI+U2hhcmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG5cclxuXHJcbiAgICAgICAgIiwiaW1wb3J0IHsgdXNlU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICAgIENoZXZyb25Eb3duSWNvbixcclxuICAgIFNob3BwaW5nQmFnSWNvbixcclxuICAgIFVzZXJHcm91cEljb24sXHJcbiAgICBcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FsZW5kYXJJY29uLFxyXG4gICAgQ2xvY2tJY29uLFxyXG4gICAgRGVza3RvcENvbXB1dGVySWNvbixcclxuICAgIFVzZXJJY29uLFxyXG5cclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBTaWRlYmFyUm93IGZyb20gXCIuL1NpZGViYXJSb3dcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkgIHtcclxuICAgIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgbXQtNSBtYXgtdy1bNjAwcHhdIHhsOm1pbi13LVszMDBwY11cIj5cclxuICAgICAgICAgICAgPFNpZGViYXJSb3cgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IHRpdGxlPXtzZXNzaW9uLnVzZXIubmFtZX0gLz5cclxuICAgICAgICAgICAgPFNpZGViYXJSb3cgSWNvbj17VXNlckljb259IHRpdGxlPVwiRnJpZW5kc1wiIC8+IFxyXG4gICAgICAgICAgICA8U2lkZWJhclJvdyBJY29uPXtVc2VyR3JvdXBJY29ufSB0aXRsZT1cIkdyb3Vwc1wiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyUm93IEljb249e1Nob3BwaW5nQmFnSWNvbn0gdGl0bGU9XCJNYXJrZXRwbGFjZVwiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyUm93IEljb249e0Rlc2t0b3BDb21wdXRlckljb259IHRpdGxlPVwid2F0Y2hcIiAvPlxyXG4gICAgICAgICAgICA8U2lkZWJhclJvdyBJY29uPXtDYWxlbmRhckljb259IHRpdGxlPVwiRXZlbnRzXCIgLz5cclxuICAgICAgICAgICAgPFNpZGViYXJSb3cgSWNvbj17Q2xvY2tJY29ufSB0aXRsZT1cIk1lbW9yaWVzXCIgLz5cclxuICAgICAgICAgICAgPFNpZGViYXJSb3cgSWNvbj17Q2hldnJvbkRvd25JY29ufSB0aXRsZT1cIlNlZSBNb3JlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5mdW5jdGlvbiBTaWRlYmFyUm93KHtzcmMsIEljb24sIHRpdGxlfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBwLTQgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC14bCBjdXJzb3ItcG9pbnRlclwiID5cclxuICAgICAgICAgICAge3NyYyAmJihcclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtJY29uICYmIChcclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1ibHVlLTUwMCBcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWZsZXggZm9udC1tZWRpdW1cIj57dGl0bGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclJvdztcclxuIiwiXHJcbmltcG9ydCBTdG9yeUNhcmQgZnJvbSBcIi4vU3RvcnlDYXJkXCI7XHJcblxyXG5jb25zdCBzdG9yaWVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwic29ubnkgU2FuZ2hhXCIsXHJcbiAgICAgICAgc3JjOlwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3pvZlwiLFxyXG4gICAgICAgIHByb2ZpbGU6XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vbDR2XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRWxvbiBNdXNrXCIsXHJcbiAgICAgICAgc3JjOlwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzR6blwiLFxyXG4gICAgICAgIHByb2ZpbGU6XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20va3hrXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTWFyayBadWNrZXJiZXJnXCIsXHJcbiAgICAgICAgc3JjOlwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3hxbFwiLFxyXG4gICAgICAgIHByb2ZpbGU6XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vc25mXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmlsbCBHYXRlc1wiLFxyXG4gICAgICAgIHNyYzpcImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS80dTRcIixcclxuICAgICAgICBwcm9maWxlOlwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3p2eVwiLFxyXG4gICAgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gU3RvcmllcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMyBtYXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7c3Rvcmllcy5tYXAoKHN0b3J5KT0+KFxyXG4gICAgICAgICAgICAgICAgPFN0b3J5Q2FyZCBuYW1lPXtzdG9yeS5uYW1lfSBzcmM9e3N0b3J5LnNyY30gcHJvZmlsZT17c3RvcnkucHJvZmlsZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmllcztcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBTdG9yeUNhcmQoeyBuYW1lLCBzcmMsIHByb2ZpbGV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0IG1kOmgtMjAgbWQ6dy0yMCBsZzpoLTU2IGxnOnctMzIgY3Vyc29yLXBvbnRlciBvdmVyZmxvdy14IHAtMyB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gZWFzZS1pbiBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6YW5pbWF0ZS1wdWxzZVwiPlxyXG4gICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgb3BhY2l0eS0wIGxnOm9wYWNpdHktMTAwIHJvdW5kZWQtZnVsbCB6LTUwIHRvcC0xMFwiXHJcbiAgICAgICAgICAgIHNyYz17cHJvZmlsZX1cclxuICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAvPiBcclxuICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBmaWx0ZXIgYnJpZ2h0bmVzcy03NSByb3VuZGVkLWZ1bGwgbGc6cm91bmRlZC0zeGxcIlxyXG4gICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBvcGFjaXR5LTAgbGc6b3BhY2l0eS0xMDAgYm90dG9tLTQgdy01LzYgdGV4dC13aGl0ZSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlDYXJkO1xyXG4iLCJpbXBvcnQgeyBTZWFyY2hJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7RG90c0hvcml6b250YWxJY29uLCBWaWRlb0NhbWVyYUljb259IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0ICAgV2lkZ2V0cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoW1xyXG4gICAgeyBpZDogNCwgaW1hZ2U6IFwiL2ltYWdlcy9mYXdhZDQuanBnXCIsIG5hbWU6IFwiSmF2ZWQgS2hhblwiIH0sXHJcbiBcclxuICAgIHsgaWQ6IDcsIGltYWdlOiBcIi9pbWFnZXMvcHJvZmlsZS5qZmlmXCIsIG5hbWU6IFwiU2FlZWQgS2hhblwiIH0sXHJcblxyXG4gIF0pO1xyXG4gIGNvbnN0IG9wZW5DaGF0ID0gKHVzZXIpID0+IHtcclxuICAgIHByb3BzLm9wZW5DaGF0KHVzZXIpO1xyXG4gIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGZsZXgtY29sIHctNjAgcC0yIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bFwiPkNvbnRhY3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb0NhbWVyYUljb24gY2xhc3NOYW1lPVwiaC02XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPERvdHNIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRCYXJcIj5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBtYi0yIHJlbGF0aXZlIGhvdmVyOmJnLWdyYXktMjAwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQteGxcIiBrZXk9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXNlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkNoYXQodXNlcil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5pbWFnZX0gYWx0PVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIGxlZnQtNyBiZy1ncmVlbi00MDAgaC0zIHctMyByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCUl9LeVdLVThOU0hLZF9rUmVvYmZWZzJ2MGlNQ00wZ2dcIixcclxuICAgIGF1dGhEb21haW46IFwiZmFjZWJvb2stLTIteXQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiZmFjZWJvb2stLTIteXRcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZmFjZWJvb2stLTIteXQuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMzQzODAyNzE3NFwiLFxyXG4gICAgYXBwSWQ6IFwiMToxMDM0MzgwMjcxNzQ6d2ViOmU0MGUzNTBhNzY1OWE5YzQwOGE3NjdcIlxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZmlyZWJhc2UuYXBwKCk7XHJcbiAgY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbiAgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbiAgZXhwb3J0IHsgZGIsIHN0b3JhZ2V9OyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBGZWVkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlZWRcIjtcbmltcG9ydCBXaWRnZXRzIGZyb20gXCIuLi9jb21wb25lbnRzL1dpZGdldHNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7c2Vzc2lvbn0pIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgY29uc3Qgb3BlbkNoYXQgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHRydWUpO1xuICAgIHNldEN1cnJlbnQodXNlcik7XG4gIH07XG4gIGNvbnN0IGNsb3NlQ2hhdCA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZShmYWxzZSk7XG4gIH07XG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIDxMb2dpbiAvPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RmFjZWJvb2s8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgXG4gICAgICBcbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgey8qIFNpZGViYXIgKi99XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIHsvKiBGZWVkICovfVxuICAgICAgICA8RmVlZCAvPlxuICAgICAgICB7LyogV2lkZ2V0cyAqL31cbiAgICAgICAgPFdpZGdldHMgb3BlbkNoYXQ9e29wZW5DaGF0fSAgLz5cblxuICAgICAgICA8Q29udGFjdCBzdGF0ZT17c3RhdGV9IGN1cnJlbnQ9e2N1cnJlbnR9IGNsb3NlQ2hhdD17Y2xvc2VDaGF0fSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICByZXR1cm4geyBcbiAgICBwcm9wczoge1xuICAgICAgc2Vzc2lvbixcbiAgICB9LFxuICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9