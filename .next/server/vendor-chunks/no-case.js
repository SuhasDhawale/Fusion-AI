"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/no-case";
exports.ids = ["vendor-chunks/no-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noCase: () => (/* binding */ noCase)\n/* harmony export */ });\n/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ \"(rsc)/./node_modules/lower-case/dist.es2015/index.js\");\n\r\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\r\nvar DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];\r\n// Remove all non-word characters.\r\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\r\n/**\r\n * Normalize the string into something other libraries can manipulate easier.\r\n */\r\nfunction noCase(input, options) {\r\n    if (options === void 0) { options = {}; }\r\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\r\n    var result = replace(replace(input, splitRegexp, \"$1\\0$2\"), stripRegexp, \"\\0\");\r\n    var start = 0;\r\n    var end = result.length;\r\n    // Trim the delimiter from around the output string.\r\n    while (result.charAt(start) === \"\\0\")\r\n        start++;\r\n    while (result.charAt(end - 1) === \"\\0\")\r\n        end--;\r\n    // Transform each token independently.\r\n    return result.slice(start, end).split(\"\\0\").map(transform).join(delimiter);\r\n}\r\n/**\r\n * Replace `re` in the input string with the replacement value.\r\n */\r\nfunction replace(input, re, value) {\r\n    if (re instanceof RegExp)\r\n        return input.replace(re, value);\r\n    return re.reduce(function (input, re) { return input.replace(re, value); }, input);\r\n}\r\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCLGtPQUFrTyxpREFBUztBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGtDQUFrQztBQUM5RTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVzaW9uLWFpLy4vbm9kZV9tb2R1bGVzL25vLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanM/ZWMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tIFwibG93ZXItY2FzZVwiO1xyXG4vLyBTdXBwb3J0IGNhbWVsIGNhc2UgKFwiY2FtZWxDYXNlXCIgLT4gXCJjYW1lbCBDYXNlXCIgYW5kIFwiQ0FNRUxDYXNlXCIgLT4gXCJDQU1FTCBDYXNlXCIpLlxyXG52YXIgREVGQVVMVF9TUExJVF9SRUdFWFAgPSBbLyhbYS16MC05XSkoW0EtWl0pL2csIC8oW0EtWl0pKFtBLVpdW2Etel0pL2ddO1xyXG4vLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMuXHJcbnZhciBERUZBVUxUX1NUUklQX1JFR0VYUCA9IC9bXkEtWjAtOV0rL2dpO1xyXG4vKipcclxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgaW50byBzb21ldGhpbmcgb3RoZXIgbGlicmFyaWVzIGNhbiBtYW5pcHVsYXRlIGVhc2llci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub0Nhc2UoaW5wdXQsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zLnNwbGl0UmVnZXhwLCBzcGxpdFJlZ2V4cCA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxUX1NQTElUX1JFR0VYUCA6IF9hLCBfYiA9IG9wdGlvbnMuc3RyaXBSZWdleHAsIHN0cmlwUmVnZXhwID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFRfU1RSSVBfUkVHRVhQIDogX2IsIF9jID0gb3B0aW9ucy50cmFuc2Zvcm0sIHRyYW5zZm9ybSA9IF9jID09PSB2b2lkIDAgPyBsb3dlckNhc2UgOiBfYywgX2QgPSBvcHRpb25zLmRlbGltaXRlciwgZGVsaW1pdGVyID0gX2QgPT09IHZvaWQgMCA/IFwiIFwiIDogX2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0gcmVwbGFjZShyZXBsYWNlKGlucHV0LCBzcGxpdFJlZ2V4cCwgXCIkMVxcMCQyXCIpLCBzdHJpcFJlZ2V4cCwgXCJcXDBcIik7XHJcbiAgICB2YXIgc3RhcnQgPSAwO1xyXG4gICAgdmFyIGVuZCA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICAvLyBUcmltIHRoZSBkZWxpbWl0ZXIgZnJvbSBhcm91bmQgdGhlIG91dHB1dCBzdHJpbmcuXHJcbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChzdGFydCkgPT09IFwiXFwwXCIpXHJcbiAgICAgICAgc3RhcnQrKztcclxuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KGVuZCAtIDEpID09PSBcIlxcMFwiKVxyXG4gICAgICAgIGVuZC0tO1xyXG4gICAgLy8gVHJhbnNmb3JtIGVhY2ggdG9rZW4gaW5kZXBlbmRlbnRseS5cclxuICAgIHJldHVybiByZXN1bHQuc2xpY2Uoc3RhcnQsIGVuZCkuc3BsaXQoXCJcXDBcIikubWFwKHRyYW5zZm9ybSkuam9pbihkZWxpbWl0ZXIpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXBsYWNlIGByZWAgaW4gdGhlIGlucHV0IHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudCB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQsIHJlLCB2YWx1ZSkge1xyXG4gICAgaWYgKHJlIGluc3RhbmNlb2YgUmVnRXhwKVxyXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gcmUucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcmUpIHsgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTsgfSwgaW5wdXQpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/no-case/dist.es2015/index.js\n");

/***/ })

};
;