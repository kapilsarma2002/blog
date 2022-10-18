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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
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

/***/ "(api)/./pages/api/signup.ts":
/*!*****************************!*\
  !*** ./pages/api/signup.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* eslint-disable import/no-anonymous-default-export */ \n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync();\n    const { email , name , password  } = req.body;\n    console.log(name, email, password);\n    let user;\n    try {\n        user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.create({\n            data: {\n                email,\n                name,\n                password: bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, salt)\n            }\n        });\n    } catch (e) {\n        res.status(401);\n        res.json({\n            error: \"User already exists!\"\n        });\n        return;\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n        email: user.email,\n        id: user.userId,\n        time: Date.now()\n    }, \"hello\", {\n        expiresIn: \"8h\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize(\"PASS\", token, {\n        httpOnly: true,\n        maxAge: 8 * 60 * 60,\n        path: \"/\",\n        sameSite: \"lax\",\n        secure: \"development\" === \"production\"\n    }));\n    res.json(user);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFELEdBQzFCO0FBQ0c7QUFDSDtBQUNVO0FBR3JDLGlFQUFlLE9BQU9JLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsTUFBTUMsSUFBSSxHQUFHTix5REFBa0IsRUFBRTtJQUNqQyxNQUFNLEVBQUVRLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBRTFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxFQUFFRCxLQUFLLEVBQUVFLFFBQVEsQ0FBQyxDQUFDO0lBRW5DLElBQUlJLElBQUk7SUFFUixJQUFJO1FBQ0ZBLElBQUksR0FBRyxNQUFNWCwrREFBa0IsQ0FBQztZQUM5QmEsSUFBSSxFQUFFO2dCQUNKUixLQUFLO2dCQUNMQyxJQUFJO2dCQUNKQyxRQUFRLEVBQUVWLHNEQUFlLENBQUNVLFFBQVEsRUFBRUosSUFBSSxDQUFDO2FBQzFDO1NBQ0YsQ0FBQztJQUNKLEVBQUUsT0FBTVksQ0FBQyxFQUFFO1FBQ1RiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmZCxHQUFHLENBQUNlLElBQUksQ0FBQztZQUFDQyxLQUFLLEVBQUcsc0JBQXNCO1NBQUMsQ0FBQztRQUMxQyxPQUFNO0lBQ1IsQ0FBQztJQUdELE1BQU1DLEtBQUssR0FBR3JCLHdEQUFRLENBQ3BCO1FBQ0VPLEtBQUssRUFBRU0sSUFBSSxDQUFDTixLQUFLO1FBQ2pCZ0IsRUFBRSxFQUFFVixJQUFJLENBQUNXLE1BQU07UUFDZkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtLQUNqQixFQUNELE9BQU8sRUFDUDtRQUFFQyxTQUFTLEVBQUUsSUFBSTtLQUFFLENBQ3BCO0lBRUR4QixHQUFHLENBQUN5QixTQUFTLENBQ1gsWUFBWSxFQUNaNUIsdURBQWdCLENBQUMsTUFBTSxFQUFFb0IsS0FBSyxFQUFFO1FBQzlCVSxRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ25CQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxNQUFNLEVBQUVDLGFBL0NELEtBK0MwQixZQUFZO0tBQzlDLENBQUMsQ0FDSDtJQUNEaEMsR0FBRyxDQUFDZSxJQUFJLENBQUNOLElBQUksQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL3BhZ2VzL2FwaS9zaWdudXAudHM/ZTYzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBzYWx0ID0gYmNyeXB0LmdlblNhbHRTeW5jKClcclxuICBjb25zdCB7IGVtYWlsLCBuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICBcclxuICBjb25zb2xlLmxvZyhuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG5cclxuICBsZXQgdXNlclxyXG5cclxuICB0cnkge1xyXG4gICAgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIHNhbHQpLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKVxyXG4gICAgcmVzLmpzb24oe2Vycm9yIDogJ1VzZXIgYWxyZWFkeSBleGlzdHMhJ30pXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG5cclxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgaWQ6IHVzZXIudXNlcklkLFxyXG4gICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgfSxcclxuICAgICdoZWxsbycsXHJcbiAgICB7IGV4cGlyZXNJbjogJzhoJyB9LFxyXG4gIClcclxuXHJcbiAgcmVzLnNldEhlYWRlcihcclxuICAgICdTZXQtQ29va2llJyxcclxuICAgIGNvb2tpZS5zZXJpYWxpemUoJ1BBU1MnLCB0b2tlbiwge1xyXG4gICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgbWF4QWdlOiA4ICogNjAgKiA2MCxcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgIH0pXHJcbiAgKVxyXG4gIHJlcy5qc29uKHVzZXIpXHJcbn0iXSwibmFtZXMiOlsiYmNyeXB0Iiwiand0IiwiY29va2llIiwicHJpc21hIiwicmVxIiwicmVzIiwic2FsdCIsImdlblNhbHRTeW5jIiwiZW1haWwiLCJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJjcmVhdGUiLCJkYXRhIiwiaGFzaFN5bmMiLCJlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidG9rZW4iLCJzaWduIiwiaWQiLCJ1c2VySWQiLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImV4cGlyZXNJbiIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImh0dHBPbmx5IiwibWF4QWdlIiwicGF0aCIsInNhbWVTaXRlIiwic2VjdXJlIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.ts"));
module.exports = __webpack_exports__;

})();