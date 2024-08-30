"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst os = __webpack_require__(/*! os */ \"os\");\r\nconst tty = __webpack_require__(/*! tty */ \"tty\");\r\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(ssr)/./node_modules/has-flag/index.js\");\r\n\r\nconst {env} = process;\r\n\r\nlet forceColor;\r\nif (hasFlag('no-color') ||\r\n\thasFlag('no-colors') ||\r\n\thasFlag('color=false') ||\r\n\thasFlag('color=never')) {\r\n\tforceColor = 0;\r\n} else if (hasFlag('color') ||\r\n\thasFlag('colors') ||\r\n\thasFlag('color=true') ||\r\n\thasFlag('color=always')) {\r\n\tforceColor = 1;\r\n}\r\n\r\nif ('FORCE_COLOR' in env) {\r\n\tif (env.FORCE_COLOR === 'true') {\r\n\t\tforceColor = 1;\r\n\t} else if (env.FORCE_COLOR === 'false') {\r\n\t\tforceColor = 0;\r\n\t} else {\r\n\t\tforceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);\r\n\t}\r\n}\r\n\r\nfunction translateLevel(level) {\r\n\tif (level === 0) {\r\n\t\treturn false;\r\n\t}\r\n\r\n\treturn {\r\n\t\tlevel,\r\n\t\thasBasic: true,\r\n\t\thas256: level >= 2,\r\n\t\thas16m: level >= 3\r\n\t};\r\n}\r\n\r\nfunction supportsColor(haveStream, streamIsTTY) {\r\n\tif (forceColor === 0) {\r\n\t\treturn 0;\r\n\t}\r\n\r\n\tif (hasFlag('color=16m') ||\r\n\t\thasFlag('color=full') ||\r\n\t\thasFlag('color=truecolor')) {\r\n\t\treturn 3;\r\n\t}\r\n\r\n\tif (hasFlag('color=256')) {\r\n\t\treturn 2;\r\n\t}\r\n\r\n\tif (haveStream && !streamIsTTY && forceColor === undefined) {\r\n\t\treturn 0;\r\n\t}\r\n\r\n\tconst min = forceColor || 0;\r\n\r\n\tif (env.TERM === 'dumb') {\r\n\t\treturn min;\r\n\t}\r\n\r\n\tif (process.platform === 'win32') {\r\n\t\t// Windows 10 build 10586 is the first Windows release that supports 256 colors.\r\n\t\t// Windows 10 build 14931 is the first release that supports 16m/TrueColor.\r\n\t\tconst osRelease = os.release().split('.');\r\n\t\tif (\r\n\t\t\tNumber(osRelease[0]) >= 10 &&\r\n\t\t\tNumber(osRelease[2]) >= 10586\r\n\t\t) {\r\n\t\t\treturn Number(osRelease[2]) >= 14931 ? 3 : 2;\r\n\t\t}\r\n\r\n\t\treturn 1;\r\n\t}\r\n\r\n\tif ('CI' in env) {\r\n\t\tif (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {\r\n\t\t\treturn 1;\r\n\t\t}\r\n\r\n\t\treturn min;\r\n\t}\r\n\r\n\tif ('TEAMCITY_VERSION' in env) {\r\n\t\treturn /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\r\n\t}\r\n\r\n\tif (env.COLORTERM === 'truecolor') {\r\n\t\treturn 3;\r\n\t}\r\n\r\n\tif ('TERM_PROGRAM' in env) {\r\n\t\tconst version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);\r\n\r\n\t\tswitch (env.TERM_PROGRAM) {\r\n\t\t\tcase 'iTerm.app':\r\n\t\t\t\treturn version >= 3 ? 3 : 2;\r\n\t\t\tcase 'Apple_Terminal':\r\n\t\t\t\treturn 2;\r\n\t\t\t// No default\r\n\t\t}\r\n\t}\r\n\r\n\tif (/-256(color)?$/i.test(env.TERM)) {\r\n\t\treturn 2;\r\n\t}\r\n\r\n\tif (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\r\n\t\treturn 1;\r\n\t}\r\n\r\n\tif ('COLORTERM' in env) {\r\n\t\treturn 1;\r\n\t}\r\n\r\n\treturn min;\r\n}\r\n\r\nfunction getSupportLevel(stream) {\r\n\tconst level = supportsColor(stream, stream && stream.isTTY);\r\n\treturn translateLevel(level);\r\n}\r\n\r\nmodule.exports = {\r\n\tsupportsColor: getSupportLevel,\r\n\tstdout: translateLevel(supportsColor(true, tty.isatty(1))),\r\n\tstderr: translateLevel(supportsColor(true, tty.isatty(2)))\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixXQUFXLG1CQUFPLENBQUMsY0FBSTtBQUN2QixZQUFZLG1CQUFPLENBQUMsZ0JBQUs7QUFDekIsZ0JBQWdCLG1CQUFPLENBQUMsd0RBQVU7QUFDbEM7QUFDQSxPQUFPLEtBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxHQUFHO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVzaW9uLWFpLy4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzPzlkNmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XHJcbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xyXG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcclxuXHJcbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcclxuXHJcbmxldCBmb3JjZUNvbG9yO1xyXG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxyXG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XHJcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSB8fFxyXG5cdGhhc0ZsYWcoJ2NvbG9yPW5ldmVyJykpIHtcclxuXHRmb3JjZUNvbG9yID0gMDtcclxufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XHJcblx0aGFzRmxhZygnY29sb3JzJykgfHxcclxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcclxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xyXG5cdGZvcmNlQ29sb3IgPSAxO1xyXG59XHJcblxyXG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcclxuXHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcclxuXHRcdGZvcmNlQ29sb3IgPSAxO1xyXG5cdH0gZWxzZSBpZiAoZW52LkZPUkNFX0NPTE9SID09PSAnZmFsc2UnKSB7XHJcblx0XHRmb3JjZUNvbG9yID0gMDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgPyAxIDogTWF0aC5taW4ocGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCksIDMpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcclxuXHRpZiAobGV2ZWwgPT09IDApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRsZXZlbCxcclxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxyXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxyXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihoYXZlU3RyZWFtLCBzdHJlYW1Jc1RUWSkge1xyXG5cdGlmIChmb3JjZUNvbG9yID09PSAwKSB7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcblxyXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxyXG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XHJcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xyXG5cdFx0cmV0dXJuIDM7XHJcblx0fVxyXG5cclxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcclxuXHRcdHJldHVybiAyO1xyXG5cdH1cclxuXHJcblx0aWYgKGhhdmVTdHJlYW0gJiYgIXN0cmVhbUlzVFRZICYmIGZvcmNlQ29sb3IgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yIHx8IDA7XHJcblxyXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XHJcblx0XHRyZXR1cm4gbWluO1xyXG5cdH1cclxuXHJcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcclxuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuXHJcblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cclxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxyXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAxO1xyXG5cdH1cclxuXHJcblx0aWYgKCdDSScgaW4gZW52KSB7XHJcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJywgJ0dJVEhVQl9BQ1RJT05TJywgJ0JVSUxES0lURSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1pbjtcclxuXHR9XHJcblxyXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XHJcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XHJcblx0fVxyXG5cclxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcclxuXHRcdHJldHVybiAzO1xyXG5cdH1cclxuXHJcblx0aWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xyXG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcclxuXHJcblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcclxuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcclxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XHJcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcclxuXHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0Ly8gTm8gZGVmYXVsdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcclxuXHRcdHJldHVybiAyO1xyXG5cdH1cclxuXHJcblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcclxuXHRcdHJldHVybiAxO1xyXG5cdH1cclxuXHJcblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xyXG5cdFx0cmV0dXJuIDE7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XHJcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSwgc3RyZWFtICYmIHN0cmVhbS5pc1RUWSk7XHJcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0c3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxyXG5cdHN0ZG91dDogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDEpKSksXHJcblx0c3RkZXJyOiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMikpKVxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/supports-color/index.js\n");

/***/ })

};
;