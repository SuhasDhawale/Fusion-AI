"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aria-hidden";
exports.ids = ["vendor-chunks/aria-hidden"];
exports.modules = {

/***/ "(ssr)/./node_modules/aria-hidden/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/aria-hidden/dist/es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideOthers: () => (/* binding */ hideOthers),\n/* harmony export */   inertOthers: () => (/* binding */ inertOthers),\n/* harmony export */   supportsInert: () => (/* binding */ supportsInert),\n/* harmony export */   suppressOthers: () => (/* binding */ suppressOthers)\n/* harmony export */ });\nvar getDefaultParent = function (originalTarget) {\r\n    if (typeof document === 'undefined') {\r\n        return null;\r\n    }\r\n    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;\r\n    return sampleTarget.ownerDocument.body;\r\n};\r\nvar counterMap = new WeakMap();\r\nvar uncontrolledNodes = new WeakMap();\r\nvar markerMap = {};\r\nvar lockCount = 0;\r\nvar unwrapHost = function (node) {\r\n    return node && (node.host || unwrapHost(node.parentNode));\r\n};\r\nvar correctTargets = function (parent, targets) {\r\n    return targets\r\n        .map(function (target) {\r\n        if (parent.contains(target)) {\r\n            return target;\r\n        }\r\n        var correctedTarget = unwrapHost(target);\r\n        if (correctedTarget && parent.contains(correctedTarget)) {\r\n            return correctedTarget;\r\n        }\r\n        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');\r\n        return null;\r\n    })\r\n        .filter(function (x) { return Boolean(x); });\r\n};\r\n/**\r\n * Marks everything except given node(or nodes) as aria-hidden\r\n * @param {Element | Element[]} originalTarget - elements to keep on the page\r\n * @param [parentNode] - top element, defaults to document.body\r\n * @param {String} [markerName] - a special attribute to mark every node\r\n * @param {String} [controlAttribute] - html Attribute to control\r\n * @return {Undo} undo command\r\n */\r\nvar applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {\r\n    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);\r\n    if (!markerMap[markerName]) {\r\n        markerMap[markerName] = new WeakMap();\r\n    }\r\n    var markerCounter = markerMap[markerName];\r\n    var hiddenNodes = [];\r\n    var elementsToKeep = new Set();\r\n    var elementsToStop = new Set(targets);\r\n    var keep = function (el) {\r\n        if (!el || elementsToKeep.has(el)) {\r\n            return;\r\n        }\r\n        elementsToKeep.add(el);\r\n        keep(el.parentNode);\r\n    };\r\n    targets.forEach(keep);\r\n    var deep = function (parent) {\r\n        if (!parent || elementsToStop.has(parent)) {\r\n            return;\r\n        }\r\n        Array.prototype.forEach.call(parent.children, function (node) {\r\n            if (elementsToKeep.has(node)) {\r\n                deep(node);\r\n            }\r\n            else {\r\n                try {\r\n                    var attr = node.getAttribute(controlAttribute);\r\n                    var alreadyHidden = attr !== null && attr !== 'false';\r\n                    var counterValue = (counterMap.get(node) || 0) + 1;\r\n                    var markerValue = (markerCounter.get(node) || 0) + 1;\r\n                    counterMap.set(node, counterValue);\r\n                    markerCounter.set(node, markerValue);\r\n                    hiddenNodes.push(node);\r\n                    if (counterValue === 1 && alreadyHidden) {\r\n                        uncontrolledNodes.set(node, true);\r\n                    }\r\n                    if (markerValue === 1) {\r\n                        node.setAttribute(markerName, 'true');\r\n                    }\r\n                    if (!alreadyHidden) {\r\n                        node.setAttribute(controlAttribute, 'true');\r\n                    }\r\n                }\r\n                catch (e) {\r\n                    console.error('aria-hidden: cannot operate on ', node, e);\r\n                }\r\n            }\r\n        });\r\n    };\r\n    deep(parentNode);\r\n    elementsToKeep.clear();\r\n    lockCount++;\r\n    return function () {\r\n        hiddenNodes.forEach(function (node) {\r\n            var counterValue = counterMap.get(node) - 1;\r\n            var markerValue = markerCounter.get(node) - 1;\r\n            counterMap.set(node, counterValue);\r\n            markerCounter.set(node, markerValue);\r\n            if (!counterValue) {\r\n                if (!uncontrolledNodes.has(node)) {\r\n                    node.removeAttribute(controlAttribute);\r\n                }\r\n                uncontrolledNodes.delete(node);\r\n            }\r\n            if (!markerValue) {\r\n                node.removeAttribute(markerName);\r\n            }\r\n        });\r\n        lockCount--;\r\n        if (!lockCount) {\r\n            // clear\r\n            counterMap = new WeakMap();\r\n            counterMap = new WeakMap();\r\n            uncontrolledNodes = new WeakMap();\r\n            markerMap = {};\r\n        }\r\n    };\r\n};\r\n/**\r\n * Marks everything except given node(or nodes) as aria-hidden\r\n * @param {Element | Element[]} originalTarget - elements to keep on the page\r\n * @param [parentNode] - top element, defaults to document.body\r\n * @param {String} [markerName] - a special attribute to mark every node\r\n * @return {Undo} undo command\r\n */\r\nvar hideOthers = function (originalTarget, parentNode, markerName) {\r\n    if (markerName === void 0) { markerName = 'data-aria-hidden'; }\r\n    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);\r\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\r\n    if (!activeParentNode) {\r\n        return function () { return null; };\r\n    }\r\n    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10\r\n    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));\r\n    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');\r\n};\r\n/**\r\n * Marks everything except given node(or nodes) as inert\r\n * @param {Element | Element[]} originalTarget - elements to keep on the page\r\n * @param [parentNode] - top element, defaults to document.body\r\n * @param {String} [markerName] - a special attribute to mark every node\r\n * @return {Undo} undo command\r\n */\r\nvar inertOthers = function (originalTarget, parentNode, markerName) {\r\n    if (markerName === void 0) { markerName = 'data-inert-ed'; }\r\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\r\n    if (!activeParentNode) {\r\n        return function () { return null; };\r\n    }\r\n    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');\r\n};\r\n/**\r\n * @returns if current browser supports inert\r\n */\r\nvar supportsInert = function () {\r\n    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');\r\n};\r\n/**\r\n * Automatic function to \"suppress\" DOM elements - _hide_ or _inert_ in the best possible way\r\n * @param {Element | Element[]} originalTarget - elements to keep on the page\r\n * @param [parentNode] - top element, defaults to document.body\r\n * @param {String} [markerName] - a special attribute to mark every node\r\n * @return {Undo} undo command\r\n */\r\nvar suppressOthers = function (originalTarget, parentNode, markerName) {\r\n    if (markerName === void 0) { markerName = 'data-suppressed'; }\r\n    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczIwMTUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb24tYWkvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczIwMTUvaW5kZXguanM/MWIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2V0RGVmYXVsdFBhcmVudCA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCkge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBzYW1wbGVUYXJnZXQgPSBBcnJheS5pc0FycmF5KG9yaWdpbmFsVGFyZ2V0KSA/IG9yaWdpbmFsVGFyZ2V0WzBdIDogb3JpZ2luYWxUYXJnZXQ7XHJcbiAgICByZXR1cm4gc2FtcGxlVGFyZ2V0Lm93bmVyRG9jdW1lbnQuYm9keTtcclxufTtcclxudmFyIGNvdW50ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG52YXIgdW5jb250cm9sbGVkTm9kZXMgPSBuZXcgV2Vha01hcCgpO1xyXG52YXIgbWFya2VyTWFwID0ge307XHJcbnZhciBsb2NrQ291bnQgPSAwO1xyXG52YXIgdW53cmFwSG9zdCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICByZXR1cm4gbm9kZSAmJiAobm9kZS5ob3N0IHx8IHVud3JhcEhvc3Qobm9kZS5wYXJlbnROb2RlKSk7XHJcbn07XHJcbnZhciBjb3JyZWN0VGFyZ2V0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIHRhcmdldHMpIHtcclxuICAgIHJldHVybiB0YXJnZXRzXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKHBhcmVudC5jb250YWlucyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb3JyZWN0ZWRUYXJnZXQgPSB1bndyYXBIb3N0KHRhcmdldCk7XHJcbiAgICAgICAgaWYgKGNvcnJlY3RlZFRhcmdldCAmJiBwYXJlbnQuY29udGFpbnMoY29ycmVjdGVkVGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29ycmVjdGVkVGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKCdhcmlhLWhpZGRlbicsIHRhcmdldCwgJ2luIG5vdCBjb250YWluZWQgaW5zaWRlJywgcGFyZW50LCAnLiBEb2luZyBub3RoaW5nJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIEJvb2xlYW4oeCk7IH0pO1xyXG59O1xyXG4vKipcclxuICogTWFya3MgZXZlcnl0aGluZyBleGNlcHQgZ2l2ZW4gbm9kZShvciBub2RlcykgYXMgYXJpYS1oaWRkZW5cclxuICogQHBhcmFtIHtFbGVtZW50IHwgRWxlbWVudFtdfSBvcmlnaW5hbFRhcmdldCAtIGVsZW1lbnRzIHRvIGtlZXAgb24gdGhlIHBhZ2VcclxuICogQHBhcmFtIFtwYXJlbnROb2RlXSAtIHRvcCBlbGVtZW50LCBkZWZhdWx0cyB0byBkb2N1bWVudC5ib2R5XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gW2NvbnRyb2xBdHRyaWJ1dGVdIC0gaHRtbCBBdHRyaWJ1dGUgdG8gY29udHJvbFxyXG4gKiBAcmV0dXJuIHtVbmRvfSB1bmRvIGNvbW1hbmRcclxuICovXHJcbnZhciBhcHBseUF0dHJpYnV0ZVRvT3RoZXJzID0gZnVuY3Rpb24gKG9yaWdpbmFsVGFyZ2V0LCBwYXJlbnROb2RlLCBtYXJrZXJOYW1lLCBjb250cm9sQXR0cmlidXRlKSB7XHJcbiAgICB2YXIgdGFyZ2V0cyA9IGNvcnJlY3RUYXJnZXRzKHBhcmVudE5vZGUsIEFycmF5LmlzQXJyYXkob3JpZ2luYWxUYXJnZXQpID8gb3JpZ2luYWxUYXJnZXQgOiBbb3JpZ2luYWxUYXJnZXRdKTtcclxuICAgIGlmICghbWFya2VyTWFwW21hcmtlck5hbWVdKSB7XHJcbiAgICAgICAgbWFya2VyTWFwW21hcmtlck5hbWVdID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuICAgIHZhciBtYXJrZXJDb3VudGVyID0gbWFya2VyTWFwW21hcmtlck5hbWVdO1xyXG4gICAgdmFyIGhpZGRlbk5vZGVzID0gW107XHJcbiAgICB2YXIgZWxlbWVudHNUb0tlZXAgPSBuZXcgU2V0KCk7XHJcbiAgICB2YXIgZWxlbWVudHNUb1N0b3AgPSBuZXcgU2V0KHRhcmdldHMpO1xyXG4gICAgdmFyIGtlZXAgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAoIWVsIHx8IGVsZW1lbnRzVG9LZWVwLmhhcyhlbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50c1RvS2VlcC5hZGQoZWwpO1xyXG4gICAgICAgIGtlZXAoZWwucGFyZW50Tm9kZSk7XHJcbiAgICB9O1xyXG4gICAgdGFyZ2V0cy5mb3JFYWNoKGtlZXApO1xyXG4gICAgdmFyIGRlZXAgPSBmdW5jdGlvbiAocGFyZW50KSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgZWxlbWVudHNUb1N0b3AuaGFzKHBhcmVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHBhcmVudC5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzVG9LZWVwLmhhcyhub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgZGVlcChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSBub2RlLmdldEF0dHJpYnV0ZShjb250cm9sQXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxyZWFkeUhpZGRlbiA9IGF0dHIgIT09IG51bGwgJiYgYXR0ciAhPT0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRlclZhbHVlID0gKGNvdW50ZXJNYXAuZ2V0KG5vZGUpIHx8IDApICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFya2VyVmFsdWUgPSAobWFya2VyQ291bnRlci5nZXQobm9kZSkgfHwgMCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJNYXAuc2V0KG5vZGUsIGNvdW50ZXJWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyQ291bnRlci5zZXQobm9kZSwgbWFya2VyVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbk5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJWYWx1ZSA9PT0gMSAmJiBhbHJlYWR5SGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY29udHJvbGxlZE5vZGVzLnNldChub2RlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlclZhbHVlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG1hcmtlck5hbWUsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShjb250cm9sQXR0cmlidXRlLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignYXJpYS1oaWRkZW46IGNhbm5vdCBvcGVyYXRlIG9uICcsIG5vZGUsIGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZGVlcChwYXJlbnROb2RlKTtcclxuICAgIGVsZW1lbnRzVG9LZWVwLmNsZWFyKCk7XHJcbiAgICBsb2NrQ291bnQrKztcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaGlkZGVuTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlclZhbHVlID0gY291bnRlck1hcC5nZXQobm9kZSkgLSAxO1xyXG4gICAgICAgICAgICB2YXIgbWFya2VyVmFsdWUgPSBtYXJrZXJDb3VudGVyLmdldChub2RlKSAtIDE7XHJcbiAgICAgICAgICAgIGNvdW50ZXJNYXAuc2V0KG5vZGUsIGNvdW50ZXJWYWx1ZSk7XHJcbiAgICAgICAgICAgIG1hcmtlckNvdW50ZXIuc2V0KG5vZGUsIG1hcmtlclZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFjb3VudGVyVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdW5jb250cm9sbGVkTm9kZXMuaGFzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoY29udHJvbEF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bmNvbnRyb2xsZWROb2Rlcy5kZWxldGUobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFtYXJrZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobWFya2VyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NrQ291bnQtLTtcclxuICAgICAgICBpZiAoIWxvY2tDb3VudCkge1xyXG4gICAgICAgICAgICAvLyBjbGVhclxyXG4gICAgICAgICAgICBjb3VudGVyTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgY291bnRlck1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIHVuY29udHJvbGxlZE5vZGVzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgbWFya2VyTWFwID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuLyoqXHJcbiAqIE1hcmtzIGV2ZXJ5dGhpbmcgZXhjZXB0IGdpdmVuIG5vZGUob3Igbm9kZXMpIGFzIGFyaWEtaGlkZGVuXHJcbiAqIEBwYXJhbSB7RWxlbWVudCB8IEVsZW1lbnRbXX0gb3JpZ2luYWxUYXJnZXQgLSBlbGVtZW50cyB0byBrZWVwIG9uIHRoZSBwYWdlXHJcbiAqIEBwYXJhbSBbcGFyZW50Tm9kZV0gLSB0b3AgZWxlbWVudCwgZGVmYXVsdHMgdG8gZG9jdW1lbnQuYm9keVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gW21hcmtlck5hbWVdIC0gYSBzcGVjaWFsIGF0dHJpYnV0ZSB0byBtYXJrIGV2ZXJ5IG5vZGVcclxuICogQHJldHVybiB7VW5kb30gdW5kbyBjb21tYW5kXHJcbiAqL1xyXG5leHBvcnQgdmFyIGhpZGVPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcclxuICAgIGlmIChtYXJrZXJOYW1lID09PSB2b2lkIDApIHsgbWFya2VyTmFtZSA9ICdkYXRhLWFyaWEtaGlkZGVuJzsgfVxyXG4gICAgdmFyIHRhcmdldHMgPSBBcnJheS5mcm9tKEFycmF5LmlzQXJyYXkob3JpZ2luYWxUYXJnZXQpID8gb3JpZ2luYWxUYXJnZXQgOiBbb3JpZ2luYWxUYXJnZXRdKTtcclxuICAgIHZhciBhY3RpdmVQYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBnZXREZWZhdWx0UGFyZW50KG9yaWdpbmFsVGFyZ2V0KTtcclxuICAgIGlmICghYWN0aXZlUGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9O1xyXG4gICAgfVxyXG4gICAgLy8gd2Ugc2hvdWxkIG5vdCBoaWRlIGFyaWFMaXZlIGVsZW1lbnRzIC0gaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS9hcmlhLWhpZGRlbi9pc3N1ZXMvMTBcclxuICAgIHRhcmdldHMucHVzaC5hcHBseSh0YXJnZXRzLCBBcnJheS5mcm9tKGFjdGl2ZVBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtbGl2ZV0nKSkpO1xyXG4gICAgcmV0dXJuIGFwcGx5QXR0cmlidXRlVG9PdGhlcnModGFyZ2V0cywgYWN0aXZlUGFyZW50Tm9kZSwgbWFya2VyTmFtZSwgJ2FyaWEtaGlkZGVuJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBNYXJrcyBldmVyeXRoaW5nIGV4Y2VwdCBnaXZlbiBub2RlKG9yIG5vZGVzKSBhcyBpbmVydFxyXG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBFbGVtZW50W119IG9yaWdpbmFsVGFyZ2V0IC0gZWxlbWVudHMgdG8ga2VlcCBvbiB0aGUgcGFnZVxyXG4gKiBAcGFyYW0gW3BhcmVudE5vZGVdIC0gdG9wIGVsZW1lbnQsIGRlZmF1bHRzIHRvIGRvY3VtZW50LmJvZHlcclxuICogQHBhcmFtIHtTdHJpbmd9IFttYXJrZXJOYW1lXSAtIGEgc3BlY2lhbCBhdHRyaWJ1dGUgdG8gbWFyayBldmVyeSBub2RlXHJcbiAqIEByZXR1cm4ge1VuZG99IHVuZG8gY29tbWFuZFxyXG4gKi9cclxuZXhwb3J0IHZhciBpbmVydE90aGVycyA9IGZ1bmN0aW9uIChvcmlnaW5hbFRhcmdldCwgcGFyZW50Tm9kZSwgbWFya2VyTmFtZSkge1xyXG4gICAgaWYgKG1hcmtlck5hbWUgPT09IHZvaWQgMCkgeyBtYXJrZXJOYW1lID0gJ2RhdGEtaW5lcnQtZWQnOyB9XHJcbiAgICB2YXIgYWN0aXZlUGFyZW50Tm9kZSA9IHBhcmVudE5vZGUgfHwgZ2V0RGVmYXVsdFBhcmVudChvcmlnaW5hbFRhcmdldCk7XHJcbiAgICBpZiAoIWFjdGl2ZVBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcHBseUF0dHJpYnV0ZVRvT3RoZXJzKG9yaWdpbmFsVGFyZ2V0LCBhY3RpdmVQYXJlbnROb2RlLCBtYXJrZXJOYW1lLCAnaW5lcnQnKTtcclxufTtcclxuLyoqXHJcbiAqIEByZXR1cm5zIGlmIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBpbmVydFxyXG4gKi9cclxuZXhwb3J0IHZhciBzdXBwb3J0c0luZXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpO1xyXG59O1xyXG4vKipcclxuICogQXV0b21hdGljIGZ1bmN0aW9uIHRvIFwic3VwcHJlc3NcIiBET00gZWxlbWVudHMgLSBfaGlkZV8gb3IgX2luZXJ0XyBpbiB0aGUgYmVzdCBwb3NzaWJsZSB3YXlcclxuICogQHBhcmFtIHtFbGVtZW50IHwgRWxlbWVudFtdfSBvcmlnaW5hbFRhcmdldCAtIGVsZW1lbnRzIHRvIGtlZXAgb24gdGhlIHBhZ2VcclxuICogQHBhcmFtIFtwYXJlbnROb2RlXSAtIHRvcCBlbGVtZW50LCBkZWZhdWx0cyB0byBkb2N1bWVudC5ib2R5XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxyXG4gKiBAcmV0dXJuIHtVbmRvfSB1bmRvIGNvbW1hbmRcclxuICovXHJcbmV4cG9ydCB2YXIgc3VwcHJlc3NPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcclxuICAgIGlmIChtYXJrZXJOYW1lID09PSB2b2lkIDApIHsgbWFya2VyTmFtZSA9ICdkYXRhLXN1cHByZXNzZWQnOyB9XHJcbiAgICByZXR1cm4gKHN1cHBvcnRzSW5lcnQoKSA/IGluZXJ0T3RoZXJzIDogaGlkZU90aGVycykob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/aria-hidden/dist/es2015/index.js\n");

/***/ })

};
;