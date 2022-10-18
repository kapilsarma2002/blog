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
exports.id = "pages/api/add";
exports.ids = ["pages/api/add"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(api)/./lib/prisma.ts\");\n\n\nconst validateRoute = (handler)=>{\n    return async (req, res)=>{\n        const token = req.cookies.PASS;\n        if (token) {\n            let user;\n            try {\n                const { id  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"hello\");\n                user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                    where: {\n                        userId: id\n                    }\n                });\n                // console.log(user)\n                if (!user) {\n                    throw new Error(\"Not real user\");\n                }\n            } catch (error) {\n                res.status(401);\n                res.json({\n                    error: \"Not Authorizied\"\n                });\n                return;\n            }\n            return handler(req, res, user);\n        }\n        res.status(401);\n        res.json({\n            error: \"Not Authorizied\"\n        });\n    };\n};\nconst validateToken = (token)=>{\n    const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"hello\");\n    return user;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUVEO0FBRXRCLE1BQU1FLGFBQWEsR0FBRyxDQUFDQyxPQUFZLEdBQUs7SUFDN0MsT0FBTyxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO1FBQzFELE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLElBQUk7UUFFOUIsSUFBSUYsS0FBSyxFQUFFO1lBQ1QsSUFBSUcsSUFBSTtZQUVSLElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBUVYsMERBQVUsQ0FBQ00sS0FBSyxFQUFFLE9BQU8sQ0FBQztnQkFDOUNHLElBQUksR0FBRyxNQUFNUiwrREFBc0IsQ0FBQztvQkFDbENZLEtBQUssRUFBRTt3QkFDTEMsTUFBTSxFQUFFSixFQUFFO3FCQUNYO2lCQUNGLENBQUM7Z0JBRUYsb0JBQW9CO2dCQUVwQixJQUFJLENBQUNELElBQUksRUFBRTtvQkFDVCxNQUFNLElBQUlNLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ2xDLENBQUM7WUFDSCxFQUFFLE9BQU9DLEtBQUssRUFBRTtnQkFDZFgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmWixHQUFHLENBQUNhLElBQUksQ0FBQztvQkFBRUYsS0FBSyxFQUFFLGlCQUFpQjtpQkFBRSxDQUFDO2dCQUN0QyxPQUFNO1lBQ1IsQ0FBQztZQUVELE9BQU9iLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVJLElBQUksQ0FBQztRQUNoQyxDQUFDO1FBRURKLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmWixHQUFHLENBQUNhLElBQUksQ0FBQztZQUFFRixLQUFLLEVBQUUsaUJBQWlCO1NBQUUsQ0FBQztJQUN4QyxDQUFDO0FBQ0gsQ0FBQztBQUVNLE1BQU1HLGFBQWEsR0FBRyxDQUFDYixLQUFVLEdBQUs7SUFDM0MsTUFBTUcsSUFBSSxHQUFHVCwwREFBVSxDQUFDTSxLQUFLLEVBQUUsT0FBTyxDQUFDO0lBQ3ZDLE9BQU9HLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4vcHJpc21hJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUm91dGUgPSAoaGFuZGxlcjogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5QQVNTXHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGxldCB1c2VyXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfTogYW55ID0gand0LnZlcmlmeSh0b2tlbiwgJ2hlbGxvJylcclxuICAgICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBcclxuICAgICAgICAgICAgdXNlcklkOiBpZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcilcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCByZWFsIHVzZXInKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSlcclxuICAgICAgICByZXMuanNvbih7IGVycm9yOiAnTm90IEF1dGhvcml6aWVkJyB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcywgdXNlcilcclxuICAgIH1cclxuXHJcbiAgICByZXMuc3RhdHVzKDQwMSlcclxuICAgIHJlcy5qc29uKHsgZXJyb3I6ICdOb3QgQXV0aG9yaXppZWQnIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVUb2tlbiA9ICh0b2tlbjogYW55KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IGp3dC52ZXJpZnkodG9rZW4sICdoZWxsbycpXHJcbiAgcmV0dXJuIHVzZXJcclxufSJdLCJuYW1lcyI6WyJqd3QiLCJwcmlzbWEiLCJ2YWxpZGF0ZVJvdXRlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRva2VuIiwiY29va2llcyIsIlBBU1MiLCJ1c2VyIiwiaWQiLCJ2ZXJpZnkiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1c2VySWQiLCJFcnJvciIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxpRUFBZSxJQUFJQSx3REFBWSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmlzbWFDbGllbnQoKSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/add.ts":
/*!**************************!*\
  !*** ./pages/api/add.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.validateRoute)(async (req, res, user)=>{\n    const { title , desc , content  } = req.body;\n    const id = user.userId;\n    // const { REACT_APP_SUPER_KEY } = process.env;  \n    // const key = REACT_APP_SUPER_KEY as string\n    try {\n        const _ = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blog.create({\n            data: {\n                authorId: id,\n                title: title,\n                desc: desc,\n                content: content\n            }\n        });\n        res.json(\"successfully added to database!\");\n    } catch (e) {\n        res.status(402);\n        res.json(\"blog could not be added!\");\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUVUO0FBR3JDLGlFQUFlQSx3REFBYSxDQUFDLE9BQU9FLEdBQVEsRUFBRUMsR0FBUSxFQUFFQyxJQUFTLEdBQUs7SUFFcEUsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSTtJQUN6QyxNQUFNQyxFQUFFLEdBQUdMLElBQUksQ0FBQ00sTUFBTTtJQUN0QixpREFBaUQ7SUFDakQsNENBQTRDO0lBRzVDLElBQUk7UUFFRixNQUFNQyxDQUFDLEdBQUcsTUFBTVYsK0RBQWtCLENBQUM7WUFDakNhLElBQUksRUFBRTtnQkFDSkMsUUFBUSxFQUFFTixFQUFFO2dCQUNaSixLQUFLLEVBQUVBLEtBQUs7Z0JBQ1pDLElBQUksRUFBRUEsSUFBSTtnQkFDVkMsT0FBTyxFQUFFQSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQztRQUVGSixHQUFHLENBQUNhLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztJQUU3QyxFQUFFLE9BQU1DLENBQUMsRUFBRTtRQUNUZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZmYsR0FBRyxDQUFDYSxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDdEMsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9hcGkvYWRkLnRzPzY5MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVSb3V0ZSB9IGZyb20gXCIuLi8uLi9saWIvYXV0aFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIlxyXG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwicHJvY2Vzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZVJvdXRlKGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnksIHVzZXI6IGFueSkgPT4ge1xyXG5cclxuICBjb25zdCB7IHRpdGxlLCBkZXNjLCBjb250ZW50IH0gPSByZXEuYm9keTtcclxuICBjb25zdCBpZCA9IHVzZXIudXNlcklkXHJcbiAgLy8gY29uc3QgeyBSRUFDVF9BUFBfU1VQRVJfS0VZIH0gPSBwcm9jZXNzLmVudjsgIFxyXG4gIC8vIGNvbnN0IGtleSA9IFJFQUNUX0FQUF9TVVBFUl9LRVkgYXMgc3RyaW5nXHJcblxyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IF8gPSBhd2FpdCBwcmlzbWEuYmxvZy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYXV0aG9ySWQ6IGlkLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBcclxuICAgIHJlcy5qc29uKCdzdWNjZXNzZnVsbHkgYWRkZWQgdG8gZGF0YWJhc2UhJylcclxuXHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMilcclxuICAgIHJlcy5qc29uKCdibG9nIGNvdWxkIG5vdCBiZSBhZGRlZCEnKVxyXG4gIH1cclxufSlcclxuIl0sIm5hbWVzIjpbInZhbGlkYXRlUm91dGUiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJ1c2VyIiwidGl0bGUiLCJkZXNjIiwiY29udGVudCIsImJvZHkiLCJpZCIsInVzZXJJZCIsIl8iLCJibG9nIiwiY3JlYXRlIiwiZGF0YSIsImF1dGhvcklkIiwianNvbiIsImUiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/add.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add.ts"));
module.exports = __webpack_exports__;

})();