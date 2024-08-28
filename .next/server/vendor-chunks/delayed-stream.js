/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/delayed-stream";
exports.ids = ["vendor-chunks/delayed-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js":
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\r\nvar util = __webpack_require__(/*! util */ \"util\");\r\n\r\nmodule.exports = DelayedStream;\r\nfunction DelayedStream() {\r\n  this.source = null;\r\n  this.dataSize = 0;\r\n  this.maxDataSize = 1024 * 1024;\r\n  this.pauseStream = true;\r\n\r\n  this._maxDataSizeExceeded = false;\r\n  this._released = false;\r\n  this._bufferedEvents = [];\r\n}\r\nutil.inherits(DelayedStream, Stream);\r\n\r\nDelayedStream.create = function(source, options) {\r\n  var delayedStream = new this();\r\n\r\n  options = options || {};\r\n  for (var option in options) {\r\n    delayedStream[option] = options[option];\r\n  }\r\n\r\n  delayedStream.source = source;\r\n\r\n  var realEmit = source.emit;\r\n  source.emit = function() {\r\n    delayedStream._handleEmit(arguments);\r\n    return realEmit.apply(source, arguments);\r\n  };\r\n\r\n  source.on('error', function() {});\r\n  if (delayedStream.pauseStream) {\r\n    source.pause();\r\n  }\r\n\r\n  return delayedStream;\r\n};\r\n\r\nObject.defineProperty(DelayedStream.prototype, 'readable', {\r\n  configurable: true,\r\n  enumerable: true,\r\n  get: function() {\r\n    return this.source.readable;\r\n  }\r\n});\r\n\r\nDelayedStream.prototype.setEncoding = function() {\r\n  return this.source.setEncoding.apply(this.source, arguments);\r\n};\r\n\r\nDelayedStream.prototype.resume = function() {\r\n  if (!this._released) {\r\n    this.release();\r\n  }\r\n\r\n  this.source.resume();\r\n};\r\n\r\nDelayedStream.prototype.pause = function() {\r\n  this.source.pause();\r\n};\r\n\r\nDelayedStream.prototype.release = function() {\r\n  this._released = true;\r\n\r\n  this._bufferedEvents.forEach(function(args) {\r\n    this.emit.apply(this, args);\r\n  }.bind(this));\r\n  this._bufferedEvents = [];\r\n};\r\n\r\nDelayedStream.prototype.pipe = function() {\r\n  var r = Stream.prototype.pipe.apply(this, arguments);\r\n  this.resume();\r\n  return r;\r\n};\r\n\r\nDelayedStream.prototype._handleEmit = function(args) {\r\n  if (this._released) {\r\n    this.emit.apply(this, args);\r\n    return;\r\n  }\r\n\r\n  if (args[0] === 'data') {\r\n    this.dataSize += args[1].length;\r\n    this._checkIfMaxDataSizeExceeded();\r\n  }\r\n\r\n  this._bufferedEvents.push(args);\r\n};\r\n\r\nDelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {\r\n  if (this._maxDataSizeExceeded) {\r\n    return;\r\n  }\r\n\r\n  if (this.dataSize <= this.maxDataSize) {\r\n    return;\r\n  }\r\n\r\n  this._maxDataSizeExceeded = true;\r\n  var message =\r\n    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'\r\n  this.emit('error', new Error(message));\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsb0RBQXdCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb24tYWkvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzP2ZmYTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpLlN0cmVhbTtcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERlbGF5ZWRTdHJlYW07XHJcbmZ1bmN0aW9uIERlbGF5ZWRTdHJlYW0oKSB7XHJcbiAgdGhpcy5zb3VyY2UgPSBudWxsO1xyXG4gIHRoaXMuZGF0YVNpemUgPSAwO1xyXG4gIHRoaXMubWF4RGF0YVNpemUgPSAxMDI0ICogMTAyNDtcclxuICB0aGlzLnBhdXNlU3RyZWFtID0gdHJ1ZTtcclxuXHJcbiAgdGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCA9IGZhbHNlO1xyXG4gIHRoaXMuX3JlbGVhc2VkID0gZmFsc2U7XHJcbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMgPSBbXTtcclxufVxyXG51dGlsLmluaGVyaXRzKERlbGF5ZWRTdHJlYW0sIFN0cmVhbSk7XHJcblxyXG5EZWxheWVkU3RyZWFtLmNyZWF0ZSA9IGZ1bmN0aW9uKHNvdXJjZSwgb3B0aW9ucykge1xyXG4gIHZhciBkZWxheWVkU3RyZWFtID0gbmV3IHRoaXMoKTtcclxuXHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcclxuICAgIGRlbGF5ZWRTdHJlYW1bb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcclxuICB9XHJcblxyXG4gIGRlbGF5ZWRTdHJlYW0uc291cmNlID0gc291cmNlO1xyXG5cclxuICB2YXIgcmVhbEVtaXQgPSBzb3VyY2UuZW1pdDtcclxuICBzb3VyY2UuZW1pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZGVsYXllZFN0cmVhbS5faGFuZGxlRW1pdChhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHJlYWxFbWl0LmFwcGx5KHNvdXJjZSwgYXJndW1lbnRzKTtcclxuICB9O1xyXG5cclxuICBzb3VyY2Uub24oJ2Vycm9yJywgZnVuY3Rpb24oKSB7fSk7XHJcbiAgaWYgKGRlbGF5ZWRTdHJlYW0ucGF1c2VTdHJlYW0pIHtcclxuICAgIHNvdXJjZS5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlbGF5ZWRTdHJlYW07XHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRGVsYXllZFN0cmVhbS5wcm90b3R5cGUsICdyZWFkYWJsZScsIHtcclxuICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnJlYWRhYmxlO1xyXG4gIH1cclxufSk7XHJcblxyXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5zZXRFbmNvZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLnNvdXJjZS5zZXRFbmNvZGluZy5hcHBseSh0aGlzLnNvdXJjZSwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICghdGhpcy5fcmVsZWFzZWQpIHtcclxuICAgIHRoaXMucmVsZWFzZSgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5zb3VyY2UucmVzdW1lKCk7XHJcbn07XHJcblxyXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuc291cmNlLnBhdXNlKCk7XHJcbn07XHJcblxyXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5fcmVsZWFzZWQgPSB0cnVlO1xyXG5cclxuICB0aGlzLl9idWZmZXJlZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICB9LmJpbmQodGhpcykpO1xyXG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzID0gW107XHJcbn07XHJcblxyXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHIgPSBTdHJlYW0ucHJvdG90eXBlLnBpcGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB0aGlzLnJlc3VtZSgpO1xyXG4gIHJldHVybiByO1xyXG59O1xyXG5cclxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuX2hhbmRsZUVtaXQgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgaWYgKHRoaXMuX3JlbGVhc2VkKSB7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoYXJnc1swXSA9PT0gJ2RhdGEnKSB7XHJcbiAgICB0aGlzLmRhdGFTaXplICs9IGFyZ3NbMV0ubGVuZ3RoO1xyXG4gICAgdGhpcy5fY2hlY2tJZk1heERhdGFTaXplRXhjZWVkZWQoKTtcclxuICB9XHJcblxyXG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzLnB1c2goYXJncyk7XHJcbn07XHJcblxyXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5fY2hlY2tJZk1heERhdGFTaXplRXhjZWVkZWQgPSBmdW5jdGlvbigpIHtcclxuICBpZiAodGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuZGF0YVNpemUgPD0gdGhpcy5tYXhEYXRhU2l6ZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCA9IHRydWU7XHJcbiAgdmFyIG1lc3NhZ2UgPVxyXG4gICAgJ0RlbGF5ZWRTdHJlYW0jbWF4RGF0YVNpemUgb2YgJyArIHRoaXMubWF4RGF0YVNpemUgKyAnIGJ5dGVzIGV4Y2VlZGVkLidcclxuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKG1lc3NhZ2UpKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\n");

/***/ })

};
;