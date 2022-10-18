"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogAuthor\": function() { return /* binding */ BlogAuthor; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar BlogTags = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n        spacing: 2,\n        marginTop: props.marginTop,\n        children: props.tags.map(function(tag) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                size: \"md\",\n                variant: \"solid\",\n                colorScheme: \"orange\",\n                children: tag\n            }, tag, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = BlogTags;\nvar __N_SSP = true;\nvar BlogAuthor = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n        marginTop: \"2\",\n        spacing: \"2\",\n        display: \"flex\",\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                borderRadius: \"full\",\n                boxSize: \"40px\",\n                src: \"https://100k-faces.glitch.me/random-image\",\n                alt: \"Avatar of \".concat(props.name)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontWeight: \"medium\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: \"—\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: props.date.toLocaleDateString()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = BlogAuthor;\nvar ArticleList = function(param) {\n    var data = param.data;\n    var _s = $RefreshSig$();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxW: \"8xl\",\n        p: \"12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                as: \"h1\",\n                children: \"Your Blogs!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                children: data.map(_s(function(blog) {\n                    _s();\n                    var link = \"/blog/\".concat(blog.BlogId);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: link,\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            marginTop: {\n                                base: \"1\",\n                                sm: \"5\"\n                            },\n                            paddingBottom: \"30px\",\n                            marginRight: \"20px\",\n                            borderRadius: \"20px\",\n                            display: \"flex\",\n                            flexDirection: {\n                                base: \"column\",\n                                sm: \"row\"\n                            },\n                            justifyContent: \"space-between\",\n                            sx: {\n                                \"&:hover\": {\n                                    bg: \"#eae4eb\"\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                    display: \"flex\",\n                                    flex: \"1\",\n                                    marginRight: \"3\",\n                                    position: \"relative\",\n                                    alignItems: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                            width: {\n                                                base: \"100%\",\n                                                sm: \"85%\"\n                                            },\n                                            zIndex: \"2\",\n                                            marginLeft: {\n                                                base: \"0\",\n                                                sm: \"5%\"\n                                            },\n                                            marginTop: \"5%\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                                textDecoration: \"none\",\n                                                _hover: {\n                                                    textDecoration: \"none\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                                    borderRadius: \"lg\",\n                                                    src: \"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80\",\n                                                    alt: \"some good alt text\",\n                                                    objectFit: \"contain\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 23\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                            zIndex: \"1\",\n                                            width: \"100%\",\n                                            position: \"absolute\",\n                                            height: \"100%\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                                bgGradient: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"radial(orange.600 1px, transparent 1px)\", \"radial(orange.300 1px, transparent 1px)\"),\n                                                backgroundSize: \"20px 20px\",\n                                                opacity: \"0.4\",\n                                                height: \"100%\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                    display: \"flex\",\n                                    flex: \"1\",\n                                    flexDirection: \"column\",\n                                    justifyContent: \"center\",\n                                    marginTop: {\n                                        base: \"3\",\n                                        sm: \"0\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogTags, {\n                                            tags: [\n                                                \"Engineering\",\n                                                \"Product\"\n                                            ]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                            marginTop: \"1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                                textDecoration: \"none\",\n                                                _hover: {\n                                                    textDecoration: \"none\"\n                                                },\n                                                children: blog.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            as: \"p\",\n                                            marginTop: \"2\",\n                                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray.800\", \"gray.800\"),\n                                            fontSize: \"large\",\n                                            fontFamily: \"amiri\",\n                                            children: blog.desc\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogAuthor, {\n                                            name: \"John Doe\",\n                                            date: new Date(\"2021-04-06T19:01:27Z\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, blog.BlogId, true, {\n                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, _this);\n                }, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n                    return [\n                        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue,\n                        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n                    ];\n                }))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n                lineNumber: 149,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = ArticleList;\nvar Blogs = function(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        height: \"100%\",\n        overflowY: \"auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArticleList, {\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n            lineNumber: 162,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\pages\\\\blog\\\\index.tsx\",\n        lineNumber: 158,\n        columnNumber: 5\n    }, _this);\n};\n_c3 = Blogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"BlogTags\");\n$RefreshReg$(_c1, \"BlogAuthor\");\n$RefreshReg$(_c2, \"ArticleList\");\n$RefreshReg$(_c3, \"Blogs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjBELE1BQU0sRUFBQyxNQUFNO1FBQ2JXLFNBQVMsRUFBQyxNQUFNO2tCQUVoQiw0RUFBQ3JDLFdBQVc7WUFBQ0MsSUFBSSxFQUFFQSxJQUFJOzs7OztpQkFBSTs7Ozs7YUFDdkIsQ0FDUDtBQUNILENBQUM7QUFUS21DLE1BQUFBLEtBQUs7QUFtQ1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/ZGVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG4gIExpbmssXHJcbiAgSW1hZ2UsXHJcbiAgVGV4dCxcclxuICBEaXZpZGVyLFxyXG4gIEhTdGFjayxcclxuICBUYWcsXHJcbiAgV3JhcCxcclxuICBXcmFwSXRlbSxcclxuICBTcGFjZVByb3BzLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIENvbnRhaW5lcixcclxuICBWU3RhY2tcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJztcclxuaW1wb3J0IHsgdmFsaWRhdGVUb2tlbiB9IGZyb20gJy4uLy4uL2xpYi9hdXRoJztcclxuXHJcbmludGVyZmFjZSBJQmxvZ1RhZ3Mge1xyXG4gIHRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgbWFyZ2luVG9wPzogU3BhY2VQcm9wc1snbWFyZ2luVG9wJ107XHJcbn1cclxuXHJcbmNvbnN0IEJsb2dUYWdzOiBSZWFjdC5GQzxJQmxvZ1RhZ3M+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIU3RhY2sgc3BhY2luZz17Mn0gbWFyZ2luVG9wPXtwcm9wcy5tYXJnaW5Ub3B9PlxyXG4gICAgICB7cHJvcHMudGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VGFnIHNpemU9eydtZCd9IHZhcmlhbnQ9XCJzb2xpZFwiIGNvbG9yU2NoZW1lPVwib3JhbmdlXCIga2V5PXt0YWd9PlxyXG4gICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0hTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEJsb2dBdXRob3JQcm9wcyB7XHJcbiAgZGF0ZTogRGF0ZTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nQXV0aG9yOiBSZWFjdC5GQzxCbG9nQXV0aG9yUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIU3RhY2sgbWFyZ2luVG9wPVwiMlwiIHNwYWNpbmc9XCIyXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxyXG4gICAgICAgIGJveFNpemU9XCI0MHB4XCJcclxuICAgICAgICBzcmM9XCJodHRwczovLzEwMGstZmFjZXMuZ2xpdGNoLm1lL3JhbmRvbS1pbWFnZVwiXHJcbiAgICAgICAgYWx0PXtgQXZhdGFyIG9mICR7cHJvcHMubmFtZX1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dCBmb250V2VpZ2h0PVwibWVkaXVtXCI+e3Byb3BzLm5hbWV9PC9UZXh0PlxyXG4gICAgICA8VGV4dD7igJQ8L1RleHQ+XHJcbiAgICAgIDxUZXh0Pntwcm9wcy5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvVGV4dD5cclxuICAgIDwvSFN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcnRpY2xlTGlzdCA9ICh7ZGF0YX0gOiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXPXsnOHhsJ30gcD1cIjEyXCI+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj5Zb3VyIEJsb2dzITwvSGVhZGluZz5cclxuICAgICAgPEJveD5cclxuICAgICAgICB7ZGF0YS5tYXAoKGJsb2c6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGAvYmxvZy8ke2Jsb2cuQmxvZ0lkfWBcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtsaW5rfSBwYXNzSHJlZj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Jsb2cuQmxvZ0lkfVxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e3sgYmFzZTogJzEnLCBzbTogJzUnIH19XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b209JzMwcHgnXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PScyMHB4J1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9JzIwcHgnXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgc206ICdyb3cnIH19XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmc6JyNlYWU0ZWInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7IGJhc2U6ICcxMDAlJywgc206ICc4NSUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9e3sgYmFzZTogJzAnLCBzbTogJzUlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNSVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRleHREZWNvcmF0aW9uPVwibm9uZVwiIF9ob3Zlcj17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTk1MTM2MDQ0Ny1iMTliZThmZTgwZjU/aXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNvbWUgZ29vZCBhbHQgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCB6SW5kZXg9XCIxXCIgd2lkdGg9XCIxMDAlXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZ0dyYWRpZW50PXt1c2VDb2xvck1vZGVWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JhZGlhbChvcmFuZ2UuNjAwIDFweCwgdHJhbnNwYXJlbnQgMXB4KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyYWRpYWwob3JhbmdlLjMwMCAxcHgsIHRyYW5zcGFyZW50IDFweCknXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU9XCIyMHB4IDIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgIGZsZXg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPXt7IGJhc2U6ICczJywgc206ICcwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPEJsb2dUYWdzIHRhZ3M9e1snRW5naW5lZXJpbmcnLCAnUHJvZHVjdCddfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBtYXJnaW5Ub3A9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdGV4dERlY29yYXRpb249XCJub25lXCIgX2hvdmVyPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnZ3JheS44MDAnKX1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT0nYW1pcmknXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7YmxvZy5kZXNjfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCbG9nQXV0aG9yIG5hbWU9XCJKb2huIERvZVwiIGRhdGU9e25ldyBEYXRlKCcyMDIxLTA0LTA2VDE5OjAxOjI3WicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICApfSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICBcclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQmxvZ3MgPSAoe2RhdGF9OiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBoZWlnaHQ9JzEwMCUnXHJcbiAgICAgIG92ZXJmbG93WT0nYXV0bydcclxuICAgID5cclxuICAgICAgPEFydGljbGVMaXN0IGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAgYXN5bmMgKHsgcmVxIH06IGFueSkgPT4ge1xyXG5cclxuICBsZXQgdXNlciA6IGFueVxyXG5cclxuICB0cnkgeyBcclxuICAgIHVzZXIgPSB2YWxpZGF0ZVRva2VuKHJlcS5jb29raWVzLlBBU1MpXHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgZGVzdGluYXRpb246ICcvc2lnbmluJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5ibG9nLmZpbmRNYW55KHt9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiSGVhZGluZyIsIkxpbmsiLCJJbWFnZSIsIlRleHQiLCJEaXZpZGVyIiwiSFN0YWNrIiwiVGFnIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJDb250YWluZXIiLCJOZXh0TGluayIsIkJsb2dUYWdzIiwicHJvcHMiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwidGFncyIsIm1hcCIsInRhZyIsInNpemUiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJCbG9nQXV0aG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJib3hTaXplIiwic3JjIiwiYWx0IiwibmFtZSIsImZvbnRXZWlnaHQiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiQXJ0aWNsZUxpc3QiLCJkYXRhIiwibWF4VyIsInAiLCJhcyIsImJsb2ciLCJsaW5rIiwiQmxvZ0lkIiwiaHJlZiIsInBhc3NIcmVmIiwiYmFzZSIsInNtIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblJpZ2h0IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwic3giLCJiZyIsImZsZXgiLCJwb3NpdGlvbiIsIndpZHRoIiwiekluZGV4IiwibWFyZ2luTGVmdCIsInRleHREZWNvcmF0aW9uIiwiX2hvdmVyIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiYmdHcmFkaWVudCIsImJhY2tncm91bmRTaXplIiwib3BhY2l0eSIsInRpdGxlIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkZXNjIiwiRGF0ZSIsIkJsb2dzIiwib3ZlcmZsb3dZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n"));

/***/ })

});