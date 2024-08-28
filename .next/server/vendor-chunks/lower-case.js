"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lower-case";
exports.ids = ["vendor-chunks/lower-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),\n/* harmony export */   lowerCase: () => (/* binding */ lowerCase)\n/* harmony export */ });\n/**\r\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\r\n */\r\nvar SUPPORTED_LOCALE = {\r\n    tr: {\r\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\r\n        map: {\r\n            İ: \"\\u0069\",\r\n            I: \"\\u0131\",\r\n            İ: \"\\u0069\",\r\n        },\r\n    },\r\n    az: {\r\n        regexp: /\\u0130/g,\r\n        map: {\r\n            İ: \"\\u0069\",\r\n            I: \"\\u0131\",\r\n            İ: \"\\u0069\",\r\n        },\r\n    },\r\n    lt: {\r\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\r\n        map: {\r\n            I: \"\\u0069\\u0307\",\r\n            J: \"\\u006A\\u0307\",\r\n            Į: \"\\u012F\\u0307\",\r\n            Ì: \"\\u0069\\u0307\\u0300\",\r\n            Í: \"\\u0069\\u0307\\u0301\",\r\n            Ĩ: \"\\u0069\\u0307\\u0303\",\r\n        },\r\n    },\r\n};\r\n/**\r\n * Localized lower case.\r\n */\r\nfunction localeLowerCase(str, locale) {\r\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\r\n    if (lang)\r\n        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));\r\n    return lowerCase(str);\r\n}\r\n/**\r\n * Lower case as a function.\r\n */\r\nfunction lowerCase(str) {\r\n    return str.toLowerCase();\r\n}\r\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxpRUFBaUUscUJBQXFCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1c2lvbi1haS8uL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzPzE0MzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxyXG4gKi9cclxudmFyIFNVUFBPUlRFRF9MT0NBTEUgPSB7XHJcbiAgICB0cjoge1xyXG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzB8XFx1MDA0OXxcXHUwMDQ5XFx1MDMwNy9nLFxyXG4gICAgICAgIG1hcDoge1xyXG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXHJcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxyXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXo6IHtcclxuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXHJcbiAgICAgICAgbWFwOiB7XHJcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcclxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXHJcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsdDoge1xyXG4gICAgICAgIHJlZ2V4cDogL1xcdTAwNDl8XFx1MDA0QXxcXHUwMTJFfFxcdTAwQ0N8XFx1MDBDRHxcXHUwMTI4L2csXHJcbiAgICAgICAgbWFwOiB7XHJcbiAgICAgICAgICAgIEk6IFwiXFx1MDA2OVxcdTAzMDdcIixcclxuICAgICAgICAgICAgSjogXCJcXHUwMDZBXFx1MDMwN1wiLFxyXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxyXG4gICAgICAgICAgICDDjDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDBcIixcclxuICAgICAgICAgICAgw406IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAxXCIsXHJcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG4vKipcclxuICogTG9jYWxpemVkIGxvd2VyIGNhc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTG93ZXJDYXNlKHN0ciwgbG9jYWxlKSB7XHJcbiAgICB2YXIgbGFuZyA9IFNVUFBPUlRFRF9MT0NBTEVbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgaWYgKGxhbmcpXHJcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIucmVwbGFjZShsYW5nLnJlZ2V4cCwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGxhbmcubWFwW21dOyB9KSk7XHJcbiAgICByZXR1cm4gbG93ZXJDYXNlKHN0cik7XHJcbn1cclxuLyoqXHJcbiAqIExvd2VyIGNhc2UgYXMgYSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb3dlckNhc2Uoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/lower-case/dist.es2015/index.js\n");

/***/ })

};
;