/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./app/assets/ui/main.jsx ***!
  \********************************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_InventionBox__ = __webpack_require__(/*! ./components/InventionBox */ 2);\n\n\nclass Main extends React.Component {\n\n  render() {\n    return React.createElement(\n      'div',\n      { className: 'container' },\n      React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_InventionBox__[\"a\" /* default */], null)\n    );\n  }\n}\n\nlet documentReady = () => {\n  let reactNode = document.getElementById('react');\n  if (reactNode) {\n    ReactDOM.render(React.createElement(Main, null), reactNode);\n  }\n};\n\n$(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3VpL21haW4uanN4P2IzZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludmVudGlvbkJveCBmcm9tICcuL2NvbXBvbmVudHMvSW52ZW50aW9uQm94JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxJbnZlbnRpb25Cb3ggLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBkb2N1bWVudFJlYWR5ID0gKCkgPT4ge1xuICBsZXQgcmVhY3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0Jyk7XG4gIGlmKHJlYWN0Tm9kZSl7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8TWFpbiAvPixcbiAgICAgICAgcmVhY3ROb2RlXG4gICAgKTtcbiAgfVxuXG59O1xuXG4kKGRvY3VtZW50UmVhZHkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hc3NldHMvdWkvbWFpbi5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */
/*!***************************************************!*\
  !*** ./app/assets/ui/components/InventionBox.jsx ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class InventionBox extends React.Component {\n  render() {\n    return React.createElement(\n      \"div\",\n      { className: \"row\" },\n      React.createElement(\n        \"form\",\n        { className: \"col s12\" },\n        React.createElement(\n          \"div\",\n          { className: \"row\" },\n          React.createElement(\n            \"div\",\n            { className: \"input-field col s12\" },\n            React.createElement(\"input\", { id: \"title\", type: \"text\", className: \"validate\" }),\n            React.createElement(\n              \"label\",\n              { \"for\": \"title\" },\n              \"Title\"\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"row\" },\n          React.createElement(\n            \"div\",\n            { className: \"input-field col s12\" },\n            React.createElement(\"input\", { id: \"description\", type: \"text\", className: \"validate\" }),\n            React.createElement(\n              \"label\",\n              { \"for\": \"description\" },\n              \"Description\"\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"row\" },\n          React.createElement(\n            \"div\",\n            { className: \"input-field col s6\" },\n            React.createElement(\"input\", { id: \"user_name\", type: \"text\", className: \"validate\" }),\n            React.createElement(\n              \"label\",\n              { \"for\": \"user_name\" },\n              \"User Name\"\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"input-field col s6\" },\n            React.createElement(\"input\", { id: \"email\", type: \"email\", className: \"validate\" }),\n            React.createElement(\n              \"label\",\n              { \"for\": \"email\" },\n              \"Email\"\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"row\" },\n          React.createElement(\n            \"div\",\n            { className: \"input-field col s12\" },\n            React.createElement(\"input\", { id: \"bits\", type: \"text\", className: \"validate\" }),\n            React.createElement(\n              \"label\",\n              { \"for\": \"bits\" },\n              \"Bits used\"\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"row\" },\n          React.createElement(\n            \"div\",\n            { className: \"input-field col s12\" },\n            React.createElement(\"input\", { id: \"other_material\", type: \"text\", className: \"validate\" }),\n            React.createElement(\n              \"label\",\n              { \"for\": \"other_material\" },\n              \"Other Material\"\n            )\n          )\n        ),\n        React.createElement(\n          \"button\",\n          { type: \"submit\", className: \"btn right\" },\n          \"Submit\"\n        )\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = InventionBox;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3VpL2NvbXBvbmVudHMvSW52ZW50aW9uQm94LmpzeD8yMjg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudGlvbkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgIDxpbnB1dCAgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiAvPlxuICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VyX25hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgLz5cbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyX25hbWVcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgLz5cbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJiaXRzXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYml0c1wiPkJpdHMgdXNlZDwvbGFiZWw+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgPGlucHV0IGlkPVwib3RoZXJfbWF0ZXJpYWxcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgLz5cbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvdGhlcl9tYXRlcmlhbFwiPk90aGVyIE1hdGVyaWFsPC9sYWJlbD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biByaWdodFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hc3NldHMvdWkvY29tcG9uZW50cy9JbnZlbnRpb25Cb3guanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQ0E7QUFEQTtBQXdDQTtBQTNDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);