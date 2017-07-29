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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_InventionBox__ = __webpack_require__(/*! ./components/InventionBox */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_InventionList__ = __webpack_require__(/*! ./components/InventionList */ 2);\n\n\n\nclass Main extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { inventionList: [] };\n  }\n  addInvention(invention) {\n    $.post(\"/inventions\", { body: invention }).success(savedInvention => {\n      let newInventionList = this.state.inventionList;\n      newInventionList.unshift(savedInvention);\n      this.setState({ inventionList: newInventionList });\n    });\n  }\n  componentDidMount() {\n    $.ajax(\"/inventions\").success(data => this.setState({ inventionList: data })).error(error => console.log(error));\n  }\n  render() {\n    return React.createElement(\n      'div',\n      { className: 'container' },\n      React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_InventionBox__[\"a\" /* default */], { postInvention: this.addInvention.bind(this) }),\n      React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_InventionList__[\"a\" /* default */], { inventions: this.state.inventionList })\n    );\n  }\n}\n\nlet documentReady = () => {\n  let reactNode = document.getElementById('react');\n  if (reactNode) {\n    ReactDOM.render(React.createElement(Main, null), reactNode);\n  }\n};\n\n$(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3VpL21haW4uanN4P2IzZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludmVudGlvbkJveCBmcm9tICcuL2NvbXBvbmVudHMvSW52ZW50aW9uQm94JztcbmltcG9ydCBJbnZlbnRpb25MaXN0IGZyb20gJy4vY29tcG9uZW50cy9JbnZlbnRpb25MaXN0JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgaW52ZW50aW9uTGlzdDogW119XG4gICAgfVxuICAgIGFkZEludmVudGlvbihpbnZlbnRpb24pe1xuICAgICAgJC5wb3N0KFwiL2ludmVudGlvbnNcIiwge2JvZHk6IGludmVudGlvbn0pXG4gICAgICAuc3VjY2Vzcyggc2F2ZWRJbnZlbnRpb24gPT4ge1xuICAgICAgICBsZXQgbmV3SW52ZW50aW9uTGlzdCA9IHRoaXMuc3RhdGUuaW52ZW50aW9uTGlzdDtcbiAgICAgICAgbmV3SW52ZW50aW9uTGlzdC51bnNoaWZ0KHNhdmVkSW52ZW50aW9uKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludmVudGlvbkxpc3Q6IG5ld0ludmVudGlvbkxpc3R9KTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAkLmFqYXgoXCIvaW52ZW50aW9uc1wiKVxuICAgICAgLnN1Y2Nlc3MoZGF0YSA9PiB0aGlzLnNldFN0YXRlKHtpbnZlbnRpb25MaXN0OiBkYXRhfSkpXG4gICAgICAuZXJyb3IoZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SW52ZW50aW9uQm94IHBvc3RJbnZlbnRpb249e3RoaXMuYWRkSW52ZW50aW9uLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDxJbnZlbnRpb25MaXN0IGludmVudGlvbnM9e3RoaXMuc3RhdGUuaW52ZW50aW9uTGlzdH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IGRvY3VtZW50UmVhZHkgPSAoKSA9PiB7XG4gIGxldCByZWFjdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKTtcbiAgaWYocmVhY3ROb2RlKXtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxNYWluIC8+LFxuICAgICAgICByZWFjdE5vZGVcbiAgICApO1xuICB9XG5cbn07XG5cbiQoZG9jdW1lbnRSZWFkeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy91aS9tYWluLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQXpCQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************!*\
  !*** ./app/assets/ui/components/InventionBox.jsx ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class InventionBox extends React.Component {\n\n  postInvention(event) {\n    event.preventDefault();\n    let invention = { id: 7, title: this.refs.inventionTitle.value,\n      description: this.refs.inventionDescription.value,\n      user_name: this.refs.inventionUserName.value,\n      email: this.refs.inventionEmail.value,\n      bits: this.refs.inventionBits.value,\n      other_materials: this.refs.inventionOtherMaterials.value };\n    this.props.postInvention(invention);\n    this.refs.inventionTitle.value = '';\n    this.refs.inventionDescription.value = '';\n    this.refs.inventionUserName.value = '';\n    this.refs.inventionEmail.value = '';\n    this.refs.inventionBits.value = '';\n    this.refs.inventionOtherMaterials.value = '';\n  }\n\n  render() {\n    return React.createElement(\n      'div',\n      { className: 'row' },\n      React.createElement(\n        'form',\n        { onSubmit: this.postInvention.bind(this) },\n        React.createElement(\n          'div',\n          { className: 'row' },\n          React.createElement(\n            'div',\n            { className: 'input-field col s12' },\n            React.createElement('input', { refs: 'inventionTitle', id: 'title', type: 'text' }),\n            React.createElement(\n              'label',\n              { 'for': 'title' },\n              'Title'\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'row' },\n          React.createElement(\n            'div',\n            { className: 'input-field col s12' },\n            React.createElement('input', { refs: 'inventionDesscription', id: 'description', type: 'text', className: 'validate' }),\n            React.createElement(\n              'label',\n              { 'for': 'description' },\n              'Description'\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'row' },\n          React.createElement(\n            'div',\n            { className: 'input-field col s6' },\n            React.createElement('input', { refs: 'inventionUserName', id: 'user_name', type: 'text', className: 'validate' }),\n            React.createElement(\n              'label',\n              { 'for': 'user_name' },\n              'User Name'\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'input-field col s6' },\n            React.createElement('input', { refs: 'inventionEmail', id: 'email', type: 'email', className: 'validate' }),\n            React.createElement(\n              'label',\n              { 'for': 'email' },\n              'Email'\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'row' },\n          React.createElement(\n            'div',\n            { className: 'input-field col s12' },\n            React.createElement('input', { refs: 'inventionBits', id: 'bits', type: 'text', className: 'validate' }),\n            React.createElement(\n              'label',\n              { 'for': 'bits' },\n              'Bits used'\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'row' },\n          React.createElement(\n            'div',\n            { className: 'input-field col s12' },\n            React.createElement('input', { refs: 'inventionOtherMaterials', id: 'other_material', type: 'text', className: 'validate' }),\n            React.createElement(\n              'label',\n              { 'for': 'other_material' },\n              'Other Material'\n            )\n          )\n        ),\n        React.createElement(\n          'button',\n          { type: 'submit', className: 'btn right' },\n          'Submit'\n        )\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = InventionBox;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3VpL2NvbXBvbmVudHMvSW52ZW50aW9uQm94LmpzeD8yMjg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudGlvbkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcG9zdEludmVudGlvbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW52ZW50aW9uID0ge2lkOiA3LCB0aXRsZTogdGhpcy5yZWZzLmludmVudGlvblRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucmVmcy5pbnZlbnRpb25EZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdGhpcy5yZWZzLmludmVudGlvblVzZXJOYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMucmVmcy5pbnZlbnRpb25FbWFpbC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgIGJpdHM6IHRoaXMucmVmcy5pbnZlbnRpb25CaXRzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgb3RoZXJfbWF0ZXJpYWxzOiB0aGlzLnJlZnMuaW52ZW50aW9uT3RoZXJNYXRlcmlhbHMudmFsdWV9O1xuICAgIHRoaXMucHJvcHMucG9zdEludmVudGlvbihpbnZlbnRpb24pO1xuICAgIHRoaXMucmVmcy5pbnZlbnRpb25UaXRsZS52YWx1ZSA9ICcnO1xuICAgIHRoaXMucmVmcy5pbnZlbnRpb25EZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIHRoaXMucmVmcy5pbnZlbnRpb25Vc2VyTmFtZS52YWx1ZSA9ICcnO1xuICAgIHRoaXMucmVmcy5pbnZlbnRpb25FbWFpbC52YWx1ZSA9ICcnO1xuICAgIHRoaXMucmVmcy5pbnZlbnRpb25CaXRzLnZhbHVlID0gJyc7XG4gICAgdGhpcy5yZWZzLmludmVudGlvbk90aGVyTWF0ZXJpYWxzLnZhbHVlID0gJyc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5wb3N0SW52ZW50aW9uLmJpbmQodGhpcyl9PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgPGlucHV0IHJlZnM9XCJpbnZlbnRpb25UaXRsZVwiIGlkPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiICAvPlxuICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgIDxpbnB1dCByZWZzPVwiaW52ZW50aW9uRGVzc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiAvPlxuICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgPGlucHV0IHJlZnM9XCJpbnZlbnRpb25Vc2VyTmFtZVwiIGlkPVwidXNlcl9uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcl9uYW1lXCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgPGlucHV0IHJlZnM9XCJpbnZlbnRpb25FbWFpbFwiIGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgPGlucHV0IHJlZnM9XCJpbnZlbnRpb25CaXRzXCIgaWQ9XCJiaXRzXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYml0c1wiPkJpdHMgdXNlZDwvbGFiZWw+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgPGlucHV0IHJlZnM9XCJpbnZlbnRpb25PdGhlck1hdGVyaWFsc1wiIGlkPVwib3RoZXJfbWF0ZXJpYWxcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgLz5cbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvdGhlcl9tYXRlcmlhbFwiPk90aGVyIE1hdGVyaWFsPC9sYWJlbD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biByaWdodFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hc3NldHMvdWkvY29tcG9uZW50cy9JbnZlbnRpb25Cb3guanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQ0E7QUFEQTtBQXdDQTtBQTdEQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************!*\
  !*** ./app/assets/ui/components/InventionList.jsx ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Invention__ = __webpack_require__(/*! ./Invention */ 3);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nclass InventionList extends React.Component {\n  render() {\n    let inventions = this.props.inventions.map(invention => React.createElement(__WEBPACK_IMPORTED_MODULE_0__Invention__[\"a\" /* default */], _extends({ key: invention.id }, invention)));\n    return React.createElement(\n      \"div\",\n      { className: \"collection\" },\n      inventions\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = InventionList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3VpL2NvbXBvbmVudHMvSW52ZW50aW9uTGlzdC5qc3g/ZjJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52ZW50aW9uIGZyb20gXCIuL0ludmVudGlvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudGlvbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKXtcbiAgICBsZXQgaW52ZW50aW9ucyA9IHRoaXMucHJvcHMuaW52ZW50aW9ucy5tYXAoaW52ZW50aW9uID0+IDxJbnZlbnRpb24ga2V5PXtpbnZlbnRpb24uaWR9IHsuLi5pbnZlbnRpb259IC8+KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb25cIj5cbiAgICAgICAge2ludmVudGlvbnN9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL3VpL2NvbXBvbmVudHMvSW52ZW50aW9uTGlzdC5qc3giXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFSQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./app/assets/ui/components/Invention.jsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Invention extends React.Component {\n  render() {\n    return React.createElement(\n      \"a\",\n      { href: \"/inventions/\" + this.props.id, className: \"collection-item\" },\n      this.props.title\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Invention;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL3VpL2NvbXBvbmVudHMvSW52ZW50aW9uLmpzeD8yNDdkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17XCIvaW52ZW50aW9ucy9cIiArdGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtXCI+e3RoaXMucHJvcHMudGl0bGV9PC9hPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL3VpL2NvbXBvbmVudHMvSW52ZW50aW9uLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUxBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);