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
exports.id = "pages/add";
exports.ids = ["pages/add"];
exports.modules = {

/***/ "./lib/fetcher.ts":
/*!************************!*\
  !*** ./lib/fetcher.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetcher)\n/* harmony export */ });\nfunction fetcher(url, data = undefined) {\n    return fetch(`${window.location.origin}/api${url}`, {\n        method: data ? \"POST\" : \"GET\",\n        credentials: \"include\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    }).then((res)=>{\n        if (res.status > 399 && res.status < 200) {\n            throw new Error();\n        }\n        return res.json();\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmV0Y2hlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsT0FBTyxDQUFFQyxHQUFXLEVBQUVDLElBQVMsR0FBR0MsU0FBUyxFQUFFO0lBQ25FLE9BQU9DLEtBQUssQ0FBQyxDQUFDLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSSxFQUFFTixHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xETyxNQUFNLEVBQUVOLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztRQUM3Qk8sV0FBVyxFQUFFLFNBQVM7UUFDdEJDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSSxDQUFDO0tBQzNCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBSztRQUNmLElBQUdBLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsSUFBSUQsR0FBRyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSUMsS0FBSyxFQUFFO1FBQ25CLENBQUM7UUFDRCxPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNuQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9mZXRjaGVyLnRzP2ZiMjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hlciAodXJsOiBTdHJpbmcsIGRhdGE6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gIHJldHVybiBmZXRjaChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkke3VybH1gLCB7XHJcbiAgICBtZXRob2Q6IGRhdGEgPyAnUE9TVCcgOiAnR0VUJyxcclxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgIGlmKHJlcy5zdGF0dXMgPiAzOTkgJiYgcmVzLnN0YXR1cyA8IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5qc29uKClcclxuICB9KVxyXG59Il0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJkYXRhIiwidW5kZWZpbmVkIiwiZmV0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/fetcher.ts\n");

/***/ }),

/***/ "./lib/mutations.ts":
/*!**************************!*\
  !*** ./lib/mutations.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetcher */ \"./lib/fetcher.ts\");\n\n// export const auth = (mode: 'signin' | 'signup', body:{email: string; password: string}) => {\n//   return fetcher(`/${mode}`, body)\n// }\nconst auth = (mode, body)=>{\n    return (0,_fetcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`/${mode}`, body);\n} // export const addAuth = (mode: body : any) => {\n //   return fetcher()\n // }\n // export const editAuth = (mode: string, body: any) => {\n //   return fetcher(`/${mode}/${body.id}`, body)\n // }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbXV0YXRpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLCtGQUErRjtBQUMvRixxQ0FBcUM7QUFDckMsSUFBSTtBQUVHLE1BQU1DLElBQUksR0FBRyxDQUFDQyxJQUFZLEVBQUVDLElBQVMsR0FBSztJQUMvQyxPQUFPSCxvREFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFRSxJQUFJLENBQUMsQ0FBQyxFQUFFQyxJQUFJLENBQUM7QUFDbEMsQ0FBQyxDQUVELGlEQUFpRDtDQUNqRCxxQkFBcUI7Q0FDckIsSUFBSTtDQUVKLHlEQUF5RDtDQUN6RCxnREFBZ0Q7Q0FDaEQsSUFBSTtBQVJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9tdXRhdGlvbnMudHM/ZjM0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi9mZXRjaGVyXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgYXV0aCA9IChtb2RlOiAnc2lnbmluJyB8ICdzaWdudXAnLCBib2R5OntlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nfSkgPT4ge1xyXG4vLyAgIHJldHVybiBmZXRjaGVyKGAvJHttb2RlfWAsIGJvZHkpXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gKG1vZGU6IHN0cmluZywgYm9keTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoZXIoYC8ke21vZGV9YCwgYm9keSlcclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZEF1dGggPSAobW9kZTogYm9keSA6IGFueSkgPT4ge1xyXG4vLyAgIHJldHVybiBmZXRjaGVyKClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGVkaXRBdXRoID0gKG1vZGU6IHN0cmluZywgYm9keTogYW55KSA9PiB7XHJcbi8vICAgcmV0dXJuIGZldGNoZXIoYC8ke21vZGV9LyR7Ym9keS5pZH1gLCBib2R5KVxyXG4vLyB9Il0sIm5hbWVzIjpbImZldGNoZXIiLCJhdXRoIiwibW9kZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mutations.ts\n");

/***/ }),

/***/ "./pages/add.tsx":
/*!***********************!*\
  !*** ./pages/add.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/mutations */ \"./lib/mutations.ts\");\n\n\n\n\n\nconst BlogForm = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: desc , 1: setDesc  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    async function onSubmit(e) {\n        e.preventDefault();\n        await (0,_lib_mutations__WEBPACK_IMPORTED_MODULE_4__.auth)(\"add\", {\n            title,\n            desc,\n            content\n        });\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n        isRequired: true,\n        borderColor: \"black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n                children: \"Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                placeholder: \"Title\",\n                onChange: (e)=>setTitle(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                placeholder: \"Description\",\n                onChange: (e)=>setDesc(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n                children: \"Content\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {\n                placeholder: \"Content\",\n                onChange: (e)=>setContent(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                bg: \"green.400\",\n                sx: {\n                    \"&:hover\": {\n                        bg: \"green.600\"\n                    }\n                },\n                onClick: onSubmit,\n                children: \"submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\add.tsx\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU15QjtBQUNjO0FBQ1A7QUFDTztBQUV2QyxNQUFNUSxRQUFRLEdBQUcsSUFBTTtJQUVyQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIsTUFBTSxLQUFDSyxLQUFLLE1BQUVDLFFBQVEsTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDTSxJQUFJLE1BQUVDLE9BQU8sTUFBSVAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEMsTUFBTSxLQUFDUSxPQUFPLE1BQUVDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFMUMsZUFBZVUsUUFBUSxDQUFDQyxDQUFNLEVBQUU7UUFDOUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCLE1BQU1YLG9EQUFJLENBQUMsS0FBSyxFQUFDO1lBQUNHLEtBQUs7WUFBQ0UsSUFBSTtZQUFDRSxPQUFPO1NBQUMsQ0FBQztRQUN0Q0wsTUFBTSxDQUFDVSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFHRCxxQkFDSSw4REFBQ25CLHlEQUFXO1FBQUNvQixVQUFVO1FBQUNDLFdBQVcsRUFBQyxPQUFPOzswQkFDekMsOERBQUNwQix1REFBUzswQkFBQyxPQUFLOzs7Ozt5QkFBWTswQkFDNUIsOERBQUNDLG1EQUFLO2dCQUFDb0IsV0FBVyxFQUFDLE9BQU87Z0JBQUNDLFFBQVEsRUFBSSxDQUFDTixDQUFDLEdBQUtOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDTyxNQUFNLENBQUNDLEtBQUssQ0FBQzs7Ozs7eUJBQUc7MEJBQ3pFLDhEQUFDeEIsdURBQVM7MEJBQUMsYUFBVzs7Ozs7eUJBQVk7MEJBQ2xDLDhEQUFDQyxtREFBSztnQkFBQ29CLFdBQVcsRUFBQyxhQUFhO2dCQUFDQyxRQUFRLEVBQUksQ0FBQ04sQ0FBQyxHQUFLSixPQUFPLENBQUNJLENBQUMsQ0FBQ08sTUFBTSxDQUFDQyxLQUFLLENBQUM7Ozs7O3lCQUFJOzBCQUMvRSw4REFBQ3hCLHVEQUFTOzBCQUFDLFNBQU87Ozs7O3lCQUFZOzBCQUM5Qiw4REFBQ0Usc0RBQVE7Z0JBQUNtQixXQUFXLEVBQUMsU0FBUztnQkFBQ0MsUUFBUSxFQUFJLENBQUNOLENBQUMsR0FBS0YsVUFBVSxDQUFDRSxDQUFDLENBQUNPLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDOzs7Ozt5QkFBSTswQkFDakYsOERBQUNyQixvREFBTTtnQkFDTHNCLEVBQUUsRUFBQyxXQUFXO2dCQUNkQyxFQUFFLEVBQUc7b0JBQ0gsU0FBUyxFQUFHO3dCQUNWRCxFQUFFLEVBQUcsV0FBVztxQkFDakI7aUJBQ0Y7Z0JBQ0RFLE9BQU8sRUFBRVosUUFBUTswQkFDbEIsUUFFRDs7Ozs7eUJBQVM7Ozs7OztpQkFDRyxDQUNqQjtBQUNILENBQUM7QUFFRCxpRUFBZVIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9hZGQudHN4P2FkOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dGFyZWEsXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9saWIvbXV0YXRpb25zJ1xyXG5cclxuY29uc3QgQmxvZ0Zvcm0gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGU6IGFueSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBhd2FpdCBhdXRoKCdhZGQnLHt0aXRsZSxkZXNjLGNvbnRlbnR9KVxyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkIGJvcmRlckNvbG9yPSdibGFjayc+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5UaXRsZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj0nVGl0bGUnIG9uQ2hhbmdlID0geyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICA8Rm9ybUxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbicgb25DaGFuZ2UgPSB7KGUpID0+IHNldERlc2MoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+Q29udGVudDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj0nQ29udGVudCcgb25DaGFuZ2UgPSB7KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGJnPSdncmVlbi40MDAnXHJcbiAgICAgICAgICBzeD0ge3tcclxuICAgICAgICAgICAgJyY6aG92ZXInIDoge1xyXG4gICAgICAgICAgICAgIGJnIDogJ2dyZWVuLjYwMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0Zvcm0iXSwibmFtZXMiOlsiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJhdXRoIiwiQmxvZ0Zvcm0iLCJyb3V0ZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzYyIsInNldERlc2MiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImlzUmVxdWlyZWQiLCJib3JkZXJDb2xvciIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJnIiwic3giLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/add.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/add.tsx"));
module.exports = __webpack_exports__;

})();