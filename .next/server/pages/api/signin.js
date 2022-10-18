"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxpRUFBZSxJQUFJQSx3REFBWSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmlzbWFDbGllbnQoKSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/signin.ts":
/*!*****************************!*\
  !*** ./pages/api/signin.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable import/no-anonymous-default-export */ \n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { email , password  } = req.body;\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    console.log(email, password);\n    if (user && bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compareSync(password, user.password)) {\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n            id: user.userId,\n            email: user.email,\n            time: Date.now()\n        }, \"hello\", {\n            expiresIn: \"8h\"\n        });\n        res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize(\"PASS\", token, {\n            httpOnly: true,\n            maxAge: 8 * 60 * 60,\n            path: \"/\",\n            sameSite: \"lax\",\n            secure: \"development\" === \"production\"\n        }));\n        res.json(user);\n    } else {\n        res.status(401);\n        res.json({\n            error: \"User email or password is wrong!\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFELEdBQzFCO0FBQ1U7QUFDUDtBQUNIO0FBRzNCLGlFQUFlLE9BQU9JLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFDcEMsTUFBTUMsSUFBSSxHQUFHLE1BQU1SLG1FQUFzQixDQUFDO1FBQ3hDVSxLQUFLLEVBQUU7WUFDTEwsS0FBSztTQUNOO0tBQ0YsQ0FBQztJQUVGTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxFQUFFQyxRQUFRLENBQUM7SUFFNUIsSUFBR0UsSUFBSSxJQUFJVCx5REFBa0IsQ0FBQ08sUUFBUSxFQUFFRSxJQUFJLENBQUNGLFFBQVEsQ0FBQyxFQUFFO1FBQ3RELE1BQU1RLEtBQUssR0FBR2Isd0RBQVEsQ0FDcEI7WUFDRWUsRUFBRSxFQUFFUixJQUFJLENBQUNTLE1BQU07WUFDZlosS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBQUs7WUFDakJhLElBQUksRUFBRUMsSUFBSSxDQUFDQyxHQUFHLEVBQUU7U0FDakIsRUFBRSxPQUFPLEVBQ1Y7WUFDRUMsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FDRjtRQUVEakIsR0FBRyxDQUFDa0IsU0FBUyxDQUNYLFlBQVksRUFDWnBCLHVEQUFnQixDQUFDLE1BQU0sRUFBRVksS0FBSyxFQUFFO1lBQzlCVSxRQUFRLEVBQUUsSUFBSTtZQUNkQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ25CQyxJQUFJLEVBQUUsR0FBRztZQUNUQyxRQUFRLEVBQUUsS0FBSztZQUNmQyxNQUFNLEVBQUVDLGFBcENILEtBb0M0QixZQUFZO1NBQzlDLENBQUMsQ0FDSDtRQUNEekIsR0FBRyxDQUFDMEIsSUFBSSxDQUFDdEIsSUFBSSxDQUFDO0lBQ2hCLE9BQU87UUFDTEosR0FBRyxDQUFDMkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmM0IsR0FBRyxDQUFDMEIsSUFBSSxDQUFDO1lBQUNFLEtBQUssRUFBRSxrQ0FBa0M7U0FBQyxDQUFDO0lBQ3ZELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL3BhZ2VzL2FwaS9zaWduaW4udHM/MmE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBlbWFpbCxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpXHJcblxyXG4gIGlmKHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGlkOiB1c2VyLnVzZXJJZCxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICB9LCAnaGVsbG8nLFxyXG4gICAgICB7XHJcbiAgICAgICAgZXhwaXJlc0luOiAnOGgnLFxyXG4gICAgICB9XHJcbiAgICApIFxyXG5cclxuICAgIHJlcy5zZXRIZWFkZXIoXHJcbiAgICAgICdTZXQtQ29va2llJyxcclxuICAgICAgY29va2llLnNlcmlhbGl6ZSgnUEFTUycsIHRva2VuLCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgbWF4QWdlOiA4ICogNjAgKiA2MCxcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJywgXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgICByZXMuanNvbih1c2VyKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSlcclxuICAgIHJlcy5qc29uKHtlcnJvcjogJ1VzZXIgZW1haWwgb3IgcGFzc3dvcmQgaXMgd3JvbmchJ30pXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImJjcnlwdCIsInByaXNtYSIsImp3dCIsImNvb2tpZSIsInJlcSIsInJlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wYXJlU3luYyIsInRva2VuIiwic2lnbiIsImlkIiwidXNlcklkIiwidGltZSIsIkRhdGUiLCJub3ciLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsIm1heEFnZSIsInBhdGgiLCJzYW1lU2l0ZSIsInNlY3VyZSIsInByb2Nlc3MiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin.ts"));
module.exports = __webpack_exports__;

})();