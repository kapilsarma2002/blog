"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogAuthor\": function() { return /* binding */ BlogAuthor; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\nvar sampleBlogs = [\n    {\n        BlogId: 1,\n        title: \"A\",\n        desc: \"a\",\n        content: \"skjhgdfwfuerver\",\n        author: \"Z\"\n    },\n    {\n        BlogId: 2,\n        title: \"A\",\n        desc: \"a\",\n        content: \"skjhgdfwfuerver\",\n        author: \"Z\"\n    },\n    {\n        BlogId: 3,\n        title: \"A\",\n        desc: \"a\",\n        content: \"skjhgdfwfuerver\",\n        author: \"Z\"\n    }, \n];\n// const blogs = prisma.blogs\n\n\nvar BlogTags = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n        spacing: 2,\n        marginTop: props.marginTop,\n        children: props.tags.map(function(tag) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                size: \"md\",\n                variant: \"solid\",\n                colorScheme: \"orange\",\n                children: tag\n            }, tag, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_c = BlogTags;\nvar __N_SSP = true;\nvar BlogAuthor = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n        marginTop: \"2\",\n        spacing: \"2\",\n        display: \"flex\",\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                borderRadius: \"full\",\n                boxSize: \"40px\",\n                src: \"https://100k-faces.glitch.me/random-image\",\n                alt: \"Avatar of \".concat(props.name)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                fontWeight: \"medium\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                children: \"—\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                children: props.date.toLocaleDateString()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = BlogAuthor;\nvar ArticleList = function(blog) {\n    _s();\n    // console.log(blog)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxW: \"8xl\",\n        p: \"12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                as: \"h1\",\n                children: \"Your Blogs!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                marginTop: {\n                    base: \"1\",\n                    sm: \"5\"\n                },\n                paddingBottom: \"30px\",\n                marginRight: \"20px\",\n                borderRadius: \"20px\",\n                display: \"flex\",\n                flexDirection: {\n                    base: \"column\",\n                    sm: \"row\"\n                },\n                justifyContent: \"space-between\",\n                sx: {\n                    \"&:hover\": {\n                        bg: \"#eae4eb\"\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        display: \"flex\",\n                        flex: \"1\",\n                        marginRight: \"3\",\n                        position: \"relative\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: {\n                                    base: \"100%\",\n                                    sm: \"85%\"\n                                },\n                                zIndex: \"2\",\n                                marginLeft: {\n                                    base: \"0\",\n                                    sm: \"5%\"\n                                },\n                                marginTop: \"5%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    textDecoration: \"none\",\n                                    _hover: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                        borderRadius: \"lg\",\n                                        src: \"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80\",\n                                        alt: \"some good alt text\",\n                                        objectFit: \"contain\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                zIndex: \"1\",\n                                width: \"100%\",\n                                position: \"absolute\",\n                                height: \"100%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    bgGradient: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"radial(orange.600 1px, transparent 1px)\", \"radial(orange.300 1px, transparent 1px)\"),\n                                    backgroundSize: \"20px 20px\",\n                                    opacity: \"0.4\",\n                                    height: \"100%\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        display: \"flex\",\n                        flex: \"1\",\n                        flexDirection: \"column\",\n                        justifyContent: \"center\",\n                        marginTop: {\n                            base: \"3\",\n                            sm: \"0\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogTags, {\n                                tags: [\n                                    \"Engineering\",\n                                    \"Product\"\n                                ]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                marginTop: \"1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    textDecoration: \"none\",\n                                    _hover: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: blog.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                as: \"p\",\n                                marginTop: \"2\",\n                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.800\"),\n                                fontSize: \"large\",\n                                fontFamily: \"amiri\",\n                                children: blog.desc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogAuthor, {\n                                name: \"John Doe\",\n                                date: new Date(\"2021-04-06T19:01:27Z\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 164,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, blog.BlogId, true, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, _this),\n            \")\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n                lineNumber: 168,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticleList, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c2 = ArticleList;\nvar Home = function(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        height: \"100%\",\n        overflowY: \"auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArticleList, {\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n            lineNumber: 181,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\index.tsx\",\n        lineNumber: 177,\n        columnNumber: 5\n    }, _this);\n};\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"BlogTags\");\n$RefreshReg$(_c1, \"BlogAuthor\");\n$RefreshReg$(_c2, \"ArticleList\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxDQUNaO0FBQ0osQ0FBQztHQXBGSzBCLFdBQVc7O1FBNkNTdkIsK0RBQWlCO1FBeUJ0QkEsK0RBQWlCOzs7QUF0RWhDdUIsTUFBQUEsV0FBVztBQXVGakIsSUFBTTZCLElBQUksR0FBRyxnQkFBaUI7UUFBZkMsSUFBSSxTQUFKQSxJQUFJO0lBQ2pCLHFCQUNFLDhEQUFDN0QsaURBQUc7UUFDRm9ELE1BQU0sRUFBQyxNQUFNO1FBQ2JVLFNBQVMsRUFBQyxNQUFNO2tCQUVoQiw0RUFBQy9CLFdBQVc7WUFBQzhCLElBQUksRUFBRUEsSUFBSTs7Ozs7aUJBQUk7Ozs7O2FBQ3ZCLENBQ1A7QUFDSCxDQUFDO0FBVEtELE1BQUFBLElBQUk7QUF3Q1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzYW1wbGVCbG9ncyA9IFtcclxuICB7XHJcbiAgICBCbG9nSWQgOiAxLFxyXG4gICAgdGl0bGUgOiAnQScsXHJcbiAgICBkZXNjIDogJ2EnLFxyXG4gICAgY29udGVudCA6ICdza2poZ2Rmd2Z1ZXJ2ZXInLFxyXG4gICAgYXV0aG9yIDogJ1onLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgQmxvZ0lkIDogMixcclxuICAgIHRpdGxlIDogJ0EnLFxyXG4gICAgZGVzYyA6ICdhJyxcclxuICAgIGNvbnRlbnQgOiAnc2tqaGdkZndmdWVydmVyJyxcclxuICAgIGF1dGhvciA6ICdaJyxcclxuICB9LFxyXG4gIHtcclxuICAgIEJsb2dJZCA6IDMsXHJcbiAgICB0aXRsZSA6ICdBJyxcclxuICAgIGRlc2MgOiAnYScsXHJcbiAgICBjb250ZW50IDogJ3NramhnZGZ3ZnVlcnZlcicsXHJcbiAgICBhdXRob3IgOiAnWicsXHJcbiAgfSxcclxuXHJcbl1cclxuXHJcbi8vIGNvbnN0IGJsb2dzID0gcHJpc21hLmJsb2dzXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG4gIExpbmssXHJcbiAgSW1hZ2UsXHJcbiAgVGV4dCxcclxuICBEaXZpZGVyLFxyXG4gIEhTdGFjayxcclxuICBUYWcsXHJcbiAgV3JhcCxcclxuICBXcmFwSXRlbSxcclxuICBTcGFjZVByb3BzLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIENvbnRhaW5lcixcclxuICBWU3RhY2tcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9saWIvcHJpc21hJztcclxuaW1wb3J0IHsgdmFsaWRhdGVUb2tlbiB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuXHJcbmludGVyZmFjZSBJQmxvZ1RhZ3Mge1xyXG4gIHRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgbWFyZ2luVG9wPzogU3BhY2VQcm9wc1snbWFyZ2luVG9wJ107XHJcbn1cclxuXHJcbmNvbnN0IEJsb2dUYWdzOiBSZWFjdC5GQzxJQmxvZ1RhZ3M+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIU3RhY2sgc3BhY2luZz17Mn0gbWFyZ2luVG9wPXtwcm9wcy5tYXJnaW5Ub3B9PlxyXG4gICAgICB7cHJvcHMudGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFnIHNpemU9eydtZCd9IHZhcmlhbnQ9XCJzb2xpZFwiIGNvbG9yU2NoZW1lPVwib3JhbmdlXCIga2V5PXt0YWd9PlxyXG4gICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0hTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEJsb2dBdXRob3JQcm9wcyB7XHJcbiAgZGF0ZTogRGF0ZTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nQXV0aG9yOiBSZWFjdC5GQzxCbG9nQXV0aG9yUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIU3RhY2sgbWFyZ2luVG9wPVwiMlwiIHNwYWNpbmc9XCIyXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxyXG4gICAgICAgIGJveFNpemU9XCI0MHB4XCJcclxuICAgICAgICBzcmM9XCJodHRwczovLzEwMGstZmFjZXMuZ2xpdGNoLm1lL3JhbmRvbS1pbWFnZVwiXHJcbiAgICAgICAgYWx0PXtgQXZhdGFyIG9mICR7cHJvcHMubmFtZX1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dCBmb250V2VpZ2h0PVwibWVkaXVtXCI+e3Byb3BzLm5hbWV9PC9UZXh0PlxyXG4gICAgICA8VGV4dD7igJQ8L1RleHQ+XHJcbiAgICAgIDxUZXh0Pntwcm9wcy5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvVGV4dD5cclxuICAgIDwvSFN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcnRpY2xlTGlzdCA9IChibG9nOiBhbnkpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhibG9nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFc9eyc4eGwnfSBwPVwiMTJcIj5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPllvdXIgQmxvZ3MhPC9IZWFkaW5nPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGtleT17YmxvZy5CbG9nSWR9XHJcbiAgICAgICAgICBtYXJnaW5Ub3A9e3sgYmFzZTogJzEnLCBzbTogJzUnIH19XHJcbiAgICAgICAgICBwYWRkaW5nQm90dG9tPSczMHB4J1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ9JzIwcHgnXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9JzIwcHgnXHJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBzbTogJ3JvdycgfX1cclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAnJjpob3ZlcicgOiB7XHJcbiAgICAgICAgICAgICAgYmc6JyNlYWU0ZWInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICAvLyBvbkNsaWNrPXt9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgZmxleD1cIjFcIlxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodD1cIjNcIlxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogJzEwMCUnLCBzbTogJzg1JScgfX1cclxuICAgICAgICAgICAgICB6SW5kZXg9XCIyXCJcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXt7IGJhc2U6ICcwJywgc206ICc1JScgfX1cclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1JVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRleHREZWNvcmF0aW9uPVwibm9uZVwiIF9ob3Zlcj17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTk5NTEzNjA0NDctYjE5YmU4ZmU4MGY1P2l4bGliPXJiLTEuMi4xJml4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNvbWUgZ29vZCBhbHQgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHpJbmRleD1cIjFcIiB3aWR0aD1cIjEwMCVcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgYmdHcmFkaWVudD17dXNlQ29sb3JNb2RlVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAncmFkaWFsKG9yYW5nZS42MDAgMXB4LCB0cmFuc3BhcmVudCAxcHgpJyxcclxuICAgICAgICAgICAgICAgICdyYWRpYWwob3JhbmdlLjMwMCAxcHgsIHRyYW5zcGFyZW50IDFweCknXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZT1cIjIwcHggMjBweFwiXHJcbiAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgZmxleD1cIjFcIlxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A9e3sgYmFzZTogJzMnLCBzbTogJzAnIH19PlxyXG4gICAgICAgICAgICA8QmxvZ1RhZ3MgdGFncz17WydFbmdpbmVlcmluZycsICdQcm9kdWN0J119IC8+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIG1hcmdpblRvcD1cIjFcIj5cclxuICAgICAgICAgICAgICA8TGluayB0ZXh0RGVjb3JhdGlvbj1cIm5vbmVcIiBfaG92ZXI9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgIHtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGFzPVwicFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICdncmF5LjgwMCcpfVxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICBmb250RmFtaWx5PSdhbWlyaSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtibG9nLmRlc2N9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJsb2dBdXRob3IgbmFtZT1cIkpvaG4gRG9lXCIgZGF0ZT17bmV3IERhdGUoJzIwMjEtMDQtMDZUMTk6MDE6MjdaJyl9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoe2RhdGF9OiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBoZWlnaHQ9JzEwMCUnXHJcbiAgICAgIG92ZXJmbG93WT0nYXV0bydcclxuICAgID5cclxuICAgICAgPEFydGljbGVMaXN0IGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAgYXN5bmMgKHsgcmVxIH06IGFueSkgPT4ge1xyXG5cclxuICBsZXQgdXNlciA6IGFueVxyXG5cclxuICB0cnkgeyBcclxuICAgIHVzZXIgPSB2YWxpZGF0ZVRva2VuKHJlcS5jb29raWVzLlBBU1MpXHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgZGVzdGluYXRpb246ICcvc2lnbmluJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5ibG9nLmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGF1dGhvcklkOiB1c2VyLnVzZXJJZCxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLy8gZGF0YSA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpLFxyXG4gICAgICBkYXRhXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsic2FtcGxlQmxvZ3MiLCJCbG9nSWQiLCJ0aXRsZSIsImRlc2MiLCJjb250ZW50IiwiYXV0aG9yIiwiUmVhY3QiLCJCb3giLCJIZWFkaW5nIiwiTGluayIsIkltYWdlIiwiVGV4dCIsIkRpdmlkZXIiLCJIU3RhY2siLCJUYWciLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkNvbnRhaW5lciIsIkJsb2dUYWdzIiwicHJvcHMiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwidGFncyIsIm1hcCIsInRhZyIsInNpemUiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJCbG9nQXV0aG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJib3hTaXplIiwic3JjIiwiYWx0IiwibmFtZSIsImZvbnRXZWlnaHQiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiQXJ0aWNsZUxpc3QiLCJibG9nIiwibWF4VyIsInAiLCJhcyIsImJhc2UiLCJzbSIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInN4IiwiYmciLCJmbGV4IiwicG9zaXRpb24iLCJ3aWR0aCIsInpJbmRleCIsIm1hcmdpbkxlZnQiLCJ0ZXh0RGVjb3JhdGlvbiIsIl9ob3ZlciIsIm9iamVjdEZpdCIsImhlaWdodCIsImJnR3JhZGllbnQiLCJiYWNrZ3JvdW5kU2l6ZSIsIm9wYWNpdHkiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIkRhdGUiLCJIb21lIiwiZGF0YSIsIm92ZXJmbG93WSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});