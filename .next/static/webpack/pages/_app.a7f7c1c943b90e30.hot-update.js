"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar navMenu = [\n    {\n        name: \"Home\",\n        route: \"/\"\n    },\n    {\n        name: \"Authors\",\n        route: \"/author\"\n    },\n    {\n        name: \"Blogs\",\n        route: \"/blog\"\n    }\n];\nfunction Nav() {\n    var _this = this;\n    _s();\n    var _s1 = $RefreshSig$();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        height: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"black\", \"black\"),\n        px: 4,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            h: 16,\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                    size: \"md\",\n                    icon: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.CloseIcon, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                    \"aria-label\": \"Open Menu\",\n                    display: {\n                        md: \"none\"\n                    },\n                    onClick: isOpen ? onClose : onOpen\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                    spacing: 8,\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            width: \"60px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/blog.png\",\n                                height: 180,\n                                width: 180\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                            as: \"nav\",\n                            spacing: 4,\n                            display: {\n                                base: \"none\",\n                                md: \"flex\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.List, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                    gap: \"4\",\n                                    children: navMenu.map(_s1(function(menuItem) {\n                                        _s1();\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.LinkBox, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: menuItem.route,\n                                                    passHref: true,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.LinkOverlay, {\n                                                        px: 2,\n                                                        py: 1.5,\n                                                        rounded: \"md\",\n                                                        fontSize: \"lg\",\n                                                        _hover: {\n                                                            textDecoration: \"none\",\n                                                            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"black\", \"black\"),\n                                                            color: \"gray\"\n                                                        },\n                                                        children: menuItem.name\n                                                    }, menuItem.name, false, {\n                                                        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 29\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 27\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, menuItem.name, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n                                        return [\n                                            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n                                        ];\n                                    }))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            href: \"/add\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"solid\",\n                                colorScheme: \"teal\",\n                                size: \"sm\",\n                                mr: 4,\n                                leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.AddIcon, {}, void 0, false, void 0, void 0),\n                                children: \"Add Blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button,\n                                    rounded: \"full\",\n                                    variant: \"link\",\n                                    cursor: \"pointer\",\n                                    minW: 0,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        size: \"sm\",\n                                        src: \"https://avatars.dicebear.com/api/male/username.svg\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuList, {\n                                    bg: \"black\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            sx: {\n                                                \"&:hover\": {\n                                                    textDecoration: \"none\",\n                                                    color: \"gray\"\n                                                }\n                                            },\n                                            children: \"Profile\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuDivider, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            sx: {\n                                                \"&:hover\": {\n                                                    textDecoration: \"none\",\n                                                    color: \"gray\"\n                                                }\n                                            },\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sarma\\\\Desktop\\\\csd-project\\\\blog\\\\components\\\\nav.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, \"6awIlLqqqpzda2oInKHfZNU7DaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtvREFDdEJDLEtBQUssRUFBRSxNQUFNO2lEQUNkOzZDQUNGO3NEQUNBLFFBQU07Ozs7O2dEQUFXOzs7Ozs7d0NBQ1Q7Ozs7OztnQ0FDTjs7Ozs7O3dCQUNGOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUM7R0FyR3VCL0IsR0FBRzs7UUFDV2QsMkRBQWE7UUFHeEJDLCtEQUFpQjs7O0FBSnBCYSxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LnRzeD9kNGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkcmVuLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgTGluayxcclxuICBBdmF0YXIsXHJcbiAgSFN0YWNrLFxyXG4gIEljb25CdXR0b24sXHJcbiAgQnV0dG9uLFxyXG4gIE1lbnUsXHJcbiAgTWVudUJ1dHRvbixcclxuICBNZW51TGlzdCxcclxuICBNZW51SXRlbSxcclxuICBNZW51RGl2aWRlcixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlua0JveCxcclxuICBMaW5rT3ZlcmxheVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24sIENsb3NlSWNvbiwgQWRkSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5cclxuY29uc3QgbmF2TWVudSA9IFtcclxuXHR7XHJcblx0XHRuYW1lIDogXCJIb21lXCIsXHJcblx0XHRyb3V0ZSA6IFwiL1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lIDogXCJBdXRob3JzXCIsXHJcblx0XHRyb3V0ZSA6IFwiL2F1dGhvclwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lIDogXCJCbG9nc1wiLFxyXG5cdFx0cm91dGUgOiBcIi9ibG9nXCJcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBoZWlnaHQ9JzEwMCUnIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnYmxhY2snLCAnYmxhY2snKX0gcHg9ezR9PlxyXG4gICAgICA8RmxleCBoPXsxNn0gYWxpZ25JdGVtcz17J2NlbnRlcid9IGp1c3RpZnlDb250ZW50PXsnc3BhY2UtYmV0d2Vlbid9PlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBzaXplPXsnbWQnfVxyXG4gICAgICAgICAgaWNvbj17aXNPcGVuID8gPENsb3NlSWNvbiAvPiA6IDxIYW1idXJnZXJJY29uIC8+fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD17J09wZW4gTWVudSd9XHJcbiAgICAgICAgICBkaXNwbGF5PXt7IG1kOiAnbm9uZScgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzT3BlbiA/IG9uQ2xvc2UgOiBvbk9wZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezh9IGFsaWduSXRlbXM9eydjZW50ZXInfT5cclxuICAgICAgICAgIDxCb3ggd2lkdGg9JzYwcHgnPlxyXG4gICAgICAgICAgICA8TmV4dEltYWdlIHNyYz0nL2Jsb2cucG5nJyBoZWlnaHQ9ezE4MH0gd2lkdGg9ezE4MH0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICBhcz17J25hdid9XHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezR9XHJcbiAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8RmxleCBnYXA9JzQnPlxyXG4gICAgICAgICAgICAgICAge25hdk1lbnUubWFwKG1lbnVJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVudUl0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e21lbnVJdGVtLnJvdXRlfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rT3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHk9ezEuNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZD17J21kJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZW51SXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT0nbGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6IHVzZUNvbG9yTW9kZVZhbHVlKCdibGFjaycsICdibGFjaycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvYWRkJz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9eydzb2xpZCd9XHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9eyd0ZWFsJ31cclxuICAgICAgICAgICAgICBzaXplPXsnc20nfVxyXG4gICAgICAgICAgICAgIG1yPXs0fVxyXG4gICAgICAgICAgICAgIGxlZnRJY29uPXs8QWRkSWNvbiAvPn0+XHJcbiAgICAgICAgICAgICAgQWRkIEJsb2dcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgPE1lbnVCdXR0b25cclxuICAgICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICAgIHJvdW5kZWQ9eydmdWxsJ31cclxuICAgICAgICAgICAgICB2YXJpYW50PXsnbGluayd9XHJcbiAgICAgICAgICAgICAgY3Vyc29yPXsncG9pbnRlcid9XHJcbiAgICAgICAgICAgICAgbWluVz17MH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgc2l6ZT17J3NtJ31cclxuICAgICAgICAgICAgICAgIHNyYz17J2h0dHBzOi8vYXZhdGFycy5kaWNlYmVhci5jb20vYXBpL21hbGUvdXNlcm5hbWUuc3ZnJ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICAgIDxNZW51TGlzdCBiZz0nYmxhY2snPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAnJjpob3ZlcicgOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICcmOmhvdmVyJyA6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiTGluayIsIkF2YXRhciIsIkhTdGFjayIsIkljb25CdXR0b24iLCJCdXR0b24iLCJNZW51IiwiTWVudUJ1dHRvbiIsIk1lbnVMaXN0IiwiTWVudUl0ZW0iLCJNZW51RGl2aWRlciIsInVzZURpc2Nsb3N1cmUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpbmtCb3giLCJMaW5rT3ZlcmxheSIsIk5leHRMaW5rIiwiTmV4dEltYWdlIiwiSGFtYnVyZ2VySWNvbiIsIkNsb3NlSWNvbiIsIkFkZEljb24iLCJuYXZNZW51IiwibmFtZSIsInJvdXRlIiwiTmF2IiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImhlaWdodCIsImJnIiwicHgiLCJoIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwic2l6ZSIsImljb24iLCJhcmlhLWxhYmVsIiwiZGlzcGxheSIsIm1kIiwib25DbGljayIsInNwYWNpbmciLCJ3aWR0aCIsInNyYyIsImFzIiwiYmFzZSIsImdhcCIsIm1hcCIsIm1lbnVJdGVtIiwiaHJlZiIsInBhc3NIcmVmIiwicHkiLCJyb3VuZGVkIiwiZm9udFNpemUiLCJfaG92ZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwidmFyaWFudCIsImNvbG9yU2NoZW1lIiwibXIiLCJsZWZ0SWNvbiIsImN1cnNvciIsIm1pblciLCJzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav.tsx\n"));

/***/ })

});