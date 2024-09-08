"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-style-singleton";
exports.ids = ["vendor-chunks/react-style-singleton"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleSingleton: () => (/* binding */ styleSingleton)\n/* harmony export */ });\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js\");\n\r\n/**\r\n * create a Component to add styles on demand\r\n * - styles are added when first instance is mounted\r\n * - styles are removed when the last instance is unmounted\r\n * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior\r\n */\r\nvar styleSingleton = function () {\r\n    var useStyle = (0,_hook__WEBPACK_IMPORTED_MODULE_0__.styleHookSingleton)();\r\n    var Sheet = function (_a) {\r\n        var styles = _a.styles, dynamic = _a.dynamic;\r\n        useStyle(styles, dynamic);\r\n        return null;\r\n    };\r\n    return Sheet;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG1CQUFtQix5REFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb24tYWkvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcz84ZWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlSG9va1NpbmdsZXRvbiB9IGZyb20gJy4vaG9vayc7XHJcbi8qKlxyXG4gKiBjcmVhdGUgYSBDb21wb25lbnQgdG8gYWRkIHN0eWxlcyBvbiBkZW1hbmRcclxuICogLSBzdHlsZXMgYXJlIGFkZGVkIHdoZW4gZmlyc3QgaW5zdGFuY2UgaXMgbW91bnRlZFxyXG4gKiAtIHN0eWxlcyBhcmUgcmVtb3ZlZCB3aGVuIHRoZSBsYXN0IGluc3RhbmNlIGlzIHVubW91bnRlZFxyXG4gKiAtIGNoYW5naW5nIHN0eWxlcyBpbiBydW50aW1lIGRvZXMgbm90aGluZyB1bmxlc3MgZHluYW1pYyBpcyBzZXQuIEJ1dCB3aXRoIG11bHRpcGxlIGNvbXBvbmVudHMgdGhhdCBjYW4gbGVhZCB0byB0aGUgdW5kZWZpbmVkIGJlaGF2aW9yXHJcbiAqL1xyXG5leHBvcnQgdmFyIHN0eWxlU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVzZVN0eWxlID0gc3R5bGVIb29rU2luZ2xldG9uKCk7XHJcbiAgICB2YXIgU2hlZXQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgc3R5bGVzID0gX2Euc3R5bGVzLCBkeW5hbWljID0gX2EuZHluYW1pYztcclxuICAgICAgICB1c2VTdHlsZShzdHlsZXMsIGR5bmFtaWMpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGVldDtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleHookSingleton: () => (/* binding */ styleHookSingleton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js\");\n\r\n\r\n/**\r\n * creates a hook to control style singleton\r\n * @see {@link styleSingleton} for a safer component version\r\n * @example\r\n * ```tsx\r\n * const useStyle = styleHookSingleton();\r\n * ///\r\n * useStyle('body { overflow: hidden}');\r\n */\r\nvar styleHookSingleton = function () {\r\n    var sheet = (0,_singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)();\r\n    return function (styles, isDynamic) {\r\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\r\n            sheet.add(styles);\r\n            return function () {\r\n                sheet.remove();\r\n            };\r\n        }, [styles && isDynamic]);\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2hvb2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNtQjtBQUNsRDtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ087QUFDUCxnQkFBZ0IsK0RBQW1CO0FBQ25DO0FBQ0EsUUFBUSw0Q0FBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVzaW9uLWFpLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9ob29rLmpzPzZhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdHlsZXNoZWV0U2luZ2xldG9uIH0gZnJvbSAnLi9zaW5nbGV0b24nO1xyXG4vKipcclxuICogY3JlYXRlcyBhIGhvb2sgdG8gY29udHJvbCBzdHlsZSBzaW5nbGV0b25cclxuICogQHNlZSB7QGxpbmsgc3R5bGVTaW5nbGV0b259IGZvciBhIHNhZmVyIGNvbXBvbmVudCB2ZXJzaW9uXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHRzeFxyXG4gKiBjb25zdCB1c2VTdHlsZSA9IHN0eWxlSG9va1NpbmdsZXRvbigpO1xyXG4gKiAvLy9cclxuICogdXNlU3R5bGUoJ2JvZHkgeyBvdmVyZmxvdzogaGlkZGVufScpO1xyXG4gKi9cclxuZXhwb3J0IHZhciBzdHlsZUhvb2tTaW5nbGV0b24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2hlZXQgPSBzdHlsZXNoZWV0U2luZ2xldG9uKCk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0eWxlcywgaXNEeW5hbWljKSB7XHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2hlZXQuYWRkKHN0eWxlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzaGVldC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCBbc3R5bGVzICYmIGlzRHluYW1pY10pO1xyXG4gICAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleHookSingleton: () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_2__.styleHookSingleton),\n/* harmony export */   styleSingleton: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.styleSingleton),\n/* harmony export */   stylesheetSingleton: () => (/* reexport safe */ _singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/component.js\");\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js\");\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUNLO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb24tYWkvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2luZGV4LmpzPzUyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgc3R5bGVTaW5nbGV0b24gfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmV4cG9ydCB7IHN0eWxlc2hlZXRTaW5nbGV0b24gfSBmcm9tICcuL3NpbmdsZXRvbic7XHJcbmV4cG9ydCB7IHN0eWxlSG9va1NpbmdsZXRvbiB9IGZyb20gJy4vaG9vayc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stylesheetSingleton: () => (/* binding */ stylesheetSingleton)\n/* harmony export */ });\n/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ \"(ssr)/./node_modules/get-nonce/dist/es2015/index.js\");\n\r\nfunction makeStyleTag() {\r\n    if (!document)\r\n        return null;\r\n    var tag = document.createElement('style');\r\n    tag.type = 'text/css';\r\n    var nonce = (0,get_nonce__WEBPACK_IMPORTED_MODULE_0__.getNonce)();\r\n    if (nonce) {\r\n        tag.setAttribute('nonce', nonce);\r\n    }\r\n    return tag;\r\n}\r\nfunction injectStyles(tag, css) {\r\n    // @ts-ignore\r\n    if (tag.styleSheet) {\r\n        // @ts-ignore\r\n        tag.styleSheet.cssText = css;\r\n    }\r\n    else {\r\n        tag.appendChild(document.createTextNode(css));\r\n    }\r\n}\r\nfunction insertStyleTag(tag) {\r\n    var head = document.head || document.getElementsByTagName('head')[0];\r\n    head.appendChild(tag);\r\n}\r\nvar stylesheetSingleton = function () {\r\n    var counter = 0;\r\n    var stylesheet = null;\r\n    return {\r\n        add: function (style) {\r\n            if (counter == 0) {\r\n                if ((stylesheet = makeStyleTag())) {\r\n                    injectStyles(stylesheet, style);\r\n                    insertStyleTag(stylesheet);\r\n                }\r\n            }\r\n            counter++;\r\n        },\r\n        remove: function () {\r\n            counter--;\r\n            if (!counter && stylesheet) {\r\n                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);\r\n                stylesheet = null;\r\n            }\r\n        },\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L3NpbmdsZXRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVzaW9uLWFpLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9zaW5nbGV0b24uanM/ZmMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXROb25jZSB9IGZyb20gJ2dldC1ub25jZSc7XHJcbmZ1bmN0aW9uIG1ha2VTdHlsZVRhZygpIHtcclxuICAgIGlmICghZG9jdW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcclxuICAgIHZhciBub25jZSA9IGdldE5vbmNlKCk7XHJcbiAgICBpZiAobm9uY2UpIHtcclxuICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YWc7XHJcbn1cclxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzKHRhZywgY3NzKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAodGFnLnN0eWxlU2hlZXQpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGFnLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZVRhZyh0YWcpIHtcclxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xyXG59XHJcbmV4cG9ydCB2YXIgc3R5bGVzaGVldFNpbmdsZXRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHZhciBzdHlsZXNoZWV0ID0gbnVsbDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChzdHlsZXNoZWV0ID0gbWFrZVN0eWxlVGFnKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U3R5bGVzKHN0eWxlc2hlZXQsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRTdHlsZVRhZyhzdHlsZXNoZWV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY291bnRlci0tO1xyXG4gICAgICAgICAgICBpZiAoIWNvdW50ZXIgJiYgc3R5bGVzaGVldCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5wYXJlbnROb2RlICYmIHN0eWxlc2hlZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZXNoZWV0KTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js\n");

/***/ })

};
;